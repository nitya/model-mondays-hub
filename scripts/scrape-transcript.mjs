#!/usr/bin/env node
// scripts/scrape-transcript.mjs
//
// Fetches a real transcript for a YouTube video and writes it as clean
// Markdown to data/transcripts/<slug>.md.
//
// Strategy:
//   1. PRIMARY: Launch Playwright (Chromium), open the video's watch page,
//      expand the description, click "Show transcript", and scrape the
//      rendered transcript segment list. This matches how a human would
//      read the transcript in the YouTube UI and works even when no
//      caption track is exposed to simpler tools.
//   2. FALLBACK: If the transcript panel isn't available (feature flag,
//      region lock, headless quirk, etc.) fall back to a
//      youtube-transcript-style approach: read `ytInitialPlayerResponse`
//      from the page (or fetch it directly) for `captionTracks`, then
//      download and parse the timed text (VTT/XML) track directly.
//
// Usage:
//   node scripts/scrape-transcript.mjs <videoIdOrUrl> [--slug <episode-slug>]
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { TRANSCRIPTS_DIR } from "./lib/paths.mjs";

function parseArgs(argv) {
  const args = { slug: null, input: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--slug") args.slug = argv[++i];
    else if (!args.input) args.input = argv[i];
  }
  return args;
}

function extractVideoId(input) {
  const m = input.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : input; // assume it's already a bare video id
}

/** Collapse consecutive duplicate/overlapping caption lines (typical of
 * auto-generated rolling captions) into clean paragraph text. */
function dedupeLines(lines) {
  const out = [];
  for (const line of lines) {
    const clean = line.trim();
    if (!clean) continue;
    const prev = out[out.length - 1];
    if (prev && (prev === clean || clean.startsWith(prev) || prev.endsWith(clean))) {
      out[out.length - 1] = clean.length > (prev?.length || 0) ? clean : prev;
      continue;
    }
    out.push(clean);
  }
  return out;
}

async function scrapeWithPlaywright(videoId) {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    return null; // Playwright not installed in this environment.
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    console.warn(`  Playwright browser unavailable (${err.message.split("\n")[0]}); falling back.`);
    return null;
  }

  try {
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/watch?v=${videoId}`, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    // Expand description then open the transcript panel.
    const expandBtn = page.locator("tp-yt-paper-button#expand").first();
    if (await expandBtn.count()) await expandBtn.click().catch(() => {});

    const transcriptBtn = page.getByRole("button", { name: /show transcript/i }).first();
    await transcriptBtn.waitFor({ timeout: 15000 });
    await transcriptBtn.click();

    const segmentSelector = "ytd-transcript-segment-renderer";
    await page.waitForSelector(segmentSelector, { timeout: 15000 });
    const segments = await page.$$eval(segmentSelector, (els) =>
      els.map((el) => {
        const time = el.querySelector(".segment-timestamp")?.textContent?.trim() || "";
        const text = el.querySelector(".segment-text")?.textContent?.trim() || "";
        return { time, text };
      })
    );

    return segments.filter((s) => s.text);
  } catch (err) {
    console.warn(`  Playwright transcript scrape failed: ${err.message.split("\n")[0]}`);
    return null;
  } finally {
    await browser.close();
  }
}

function parseVtt(vtt) {
  // YouTube auto-caption VTT emits each spoken line twice: once as a
  // word-by-word "rolling" cue (containing <c> timing tags, used for karaoke
  // -style highlighting) and once as the finalized plain-text cue. We only
  // want the finalized cues, then we dedupe any remaining consecutive
  // repeats/overlaps.
  const blocks = vtt.split(/\r?\n\r?\n/);
  const raw = [];
  for (const block of blocks) {
    const timeMatch = block.match(/(\d{2}:\d{2}:\d{2}\.\d{3})\s+-->\s+(\d{2}:\d{2}:\d{2}\.\d{3})/);
    if (!timeMatch) continue;
    const rawText = block.split("\n").slice(1).join(" ").trim();
    if (!rawText || rawText.includes("<c")) continue; // skip rolling/karaoke cue
    const text = rawText.replace(/\s+/g, " ").trim();
    if (!text) continue;
    const [h, m, s] = timeMatch[1].split(":");
    const time = `${h !== "00" ? h + ":" : ""}${m}:${s.split(".")[0]}`;
    raw.push({ time, text });
  }

  // Drop consecutive duplicate/prefix-overlapping lines. Auto-captions use a
  // 2-line rolling window, so a cue's text is often wholly contained in (or a
  // prefix of) the previous cue — drop those; only keep genuinely new text.
  const segments = [];
  for (const seg of raw) {
    const prev = segments[segments.length - 1];
    if (prev && (prev.text === seg.text || seg.text.startsWith(prev.text))) {
      prev.text = seg.text;
      continue;
    }
    if (prev && prev.text.includes(seg.text)) {
      continue; // already shown as part of the previous, longer cue
    }
    segments.push({ ...seg });
  }
  return segments;
}

/**
 * youtube-transcript-style fallback: shells out to yt-dlp (a well-maintained,
 * no-API-key YouTube extractor) to download the auto-generated (or manual)
 * English caption track as VTT, then parses + cleans it. This avoids the
 * signed-URL/IP-binding issues that plague hand-rolled timedtext fetches.
 * Requires `yt-dlp` on PATH.
 */
async function scrapeWithTimedTextFallback(videoId) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "mm-transcript-"));
  const outTemplate = path.join(tmpDir, "sub");
  try {
    execFileSync(
      "yt-dlp",
      [
        "--skip-download",
        "--write-auto-sub",
        "--write-sub",
        "--sub-lang",
        "en",
        "--sub-format",
        "vtt",
        "-o",
        outTemplate,
        `https://www.youtube.com/watch?v=${videoId}`,
      ],
      { stdio: ["ignore", "pipe", "pipe"] }
    );
  } catch (err) {
    console.warn(`  yt-dlp caption download failed: ${err.message.split("\n")[0]}`);
    return null;
  }

  const vttFile = fs
    .readdirSync(tmpDir)
    .find((f) => f.endsWith(".vtt"));
  if (!vttFile) return null;

  const vtt = fs.readFileSync(path.join(tmpDir, vttFile), "utf8");
  fs.rmSync(tmpDir, { recursive: true, force: true });
  return parseVtt(vtt);
}

function writeTranscriptMarkdown(slug, videoId, segments) {
  const lines = dedupeLines(segments.map((s) => s.text));
  const body = segments.length
    ? segments.map((s) => `**${s.time}** — ${s.text}`).join("\n\n")
    : lines.join("\n\n");

  const md = `# Transcript: ${slug}\n\nSource: https://www.youtube.com/watch?v=${videoId}\n\n---\n\n${body}\n`;
  const file = path.join(TRANSCRIPTS_DIR, `${slug}.md`);
  fs.mkdirSync(TRANSCRIPTS_DIR, { recursive: true });
  fs.writeFileSync(file, md);
  return file;
}

async function main() {
  const { input, slug: slugArg } = parseArgs(process.argv.slice(2));
  if (!input) {
    console.error("Usage: node scripts/scrape-transcript.mjs <videoIdOrUrl> [--slug <episode-slug>]");
    process.exit(1);
  }
  const videoId = extractVideoId(input);
  const slug = slugArg || videoId;

  console.log(`Scraping transcript for ${videoId} (primary: Playwright) ...`);
  let segments = await scrapeWithPlaywright(videoId);

  if (!segments || !segments.length) {
    console.log("  Primary scrape unavailable, using timed-text fallback ...");
    segments = await scrapeWithTimedTextFallback(videoId);
  }

  if (!segments || !segments.length) {
    console.error("Could not retrieve a transcript from either method.");
    process.exit(1);
  }

  const file = writeTranscriptMarkdown(slug, videoId, segments);
  console.log(`Wrote transcript (${segments.length} segments) to ${file}`);
}

main();
