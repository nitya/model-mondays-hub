#!/usr/bin/env node
// scripts/update-episode.mjs
//
// Creates or patches an episode YAML record from a YouTube URL/video id,
// plus optional explicit fields (season, speakers, tags). Backs the
// `update-episode` skill. Reuses the same yt-dlp-based metadata fetch as
// scrape-playlist.mjs so a single video can be (re)ingested on demand,
// e.g. when a Data Ops issue comment asks to "update episode <url>".
//
// Usage:
//   node scripts/update-episode.mjs <youtubeUrlOrVideoId> \
//     [--id episode-slug] [--season season-4] \
//     [--speakers speaker-a,speaker-b] [--tags tag-a,tag-b] \
//     [--fetch-transcript]
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { EPISODES_DIR } from "./lib/paths.mjs";
import { slugify } from "./lib/slug.mjs";

function parseArgs(argv) {
  const args = { speakers: [], tags: [], fetchTranscript: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--id") args.id = argv[++i];
    else if (a === "--season") args.season = argv[++i];
    else if (a === "--speakers") args.speakers = argv[++i].split(",").filter(Boolean);
    else if (a === "--tags") args.tags = argv[++i].split(",").filter(Boolean);
    else if (a === "--fetch-transcript") args.fetchTranscript = true;
    else if (!args.input) args.input = a;
  }
  return args;
}

function extractVideoId(input) {
  const m = input.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : input;
}

function parseChapters(description) {
  const chapters = [];
  const re = /^(\d{1,2}:\d{2}(?::\d{2})?)\s+(.+)$/gm;
  let m;
  while ((m = re.exec(description || ""))) chapters.push({ time: m[1], label: m[2].trim() });
  return chapters;
}

function guessSegmentType(title, description) {
  const text = `${title} ${description}`.toLowerCase();
  const types = [];
  if (text.includes("tech spotlight") || text.includes("technology spotlight")) types.push("tech-spotlight");
  if (text.includes("partner spotlight")) types.push("partner-spotlight");
  if (text.includes("customer story") || text.includes("customer spotlight")) types.push("customer-story");
  if (text.includes("study corner")) types.push("study-corner");
  if (text.includes("season premiere")) types.push("season-premiere");
  if (text.includes("season finale") || text.includes("closing")) types.push("season-finale");
  if (text.includes("ask me anything") || text.includes(" ama")) types.push("ama");
  return types.length ? types : ["tech-spotlight"];
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.input) {
    console.error(
      "Usage: node scripts/update-episode.mjs <youtubeUrlOrVideoId> [--id slug] [--season season-4] [--speakers a,b] [--tags a,b] [--fetch-transcript]"
    );
    process.exit(1);
  }

  const videoId = extractVideoId(args.input);
  console.log(`Fetching metadata for ${videoId} via yt-dlp ...`);
  let full;
  try {
    const out = execFileSync("yt-dlp", ["-J", `https://www.youtube.com/watch?v=${videoId}`], {
      maxBuffer: 1024 * 1024 * 64,
      encoding: "utf8",
    });
    full = JSON.parse(out);
  } catch (err) {
    console.error("Failed to fetch video metadata with yt-dlp:", err.message.split("\n")[0]);
    console.error("Is yt-dlp installed? Try: pip install yt-dlp  (or brew install yt-dlp)");
    process.exit(1);
  }

  const title = full.title;
  const id = args.id || slugify(title);
  const file = path.join(EPISODES_DIR, `${id}.yaml`);
  const uploadDate = full.upload_date
    ? `${full.upload_date.slice(0, 4)}-${full.upload_date.slice(4, 6)}-${full.upload_date.slice(6, 8)}`
    : undefined;

  let doc = {};
  if (fs.existsSync(file)) {
    doc = yaml.load(fs.readFileSync(file, "utf8"), { schema: yaml.JSON_SCHEMA });
    console.log(`Patching existing episode record: ${file}`);
  } else {
    console.log(`Creating new episode record: ${file}`);
  }

  doc = {
    ...doc,
    id,
    title,
    description: (full.description || "").split("\n\n")[0].trim() || doc.description,
    season: args.season || doc.season || "season-unknown",
    publishDate: uploadDate || doc.publishDate,
    status: "published",
    youtubeVideoId: videoId,
    youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
    segmentType: doc.segmentType?.length ? doc.segmentType : guessSegmentType(title, full.description || ""),
    speakers: args.speakers.length ? args.speakers : doc.speakers || [],
    tags: args.tags.length ? args.tags : doc.tags || [],
    duration: full.duration ?? doc.duration,
    metrics: {
      views: full.view_count,
      likes: full.like_count,
      comments: full.comment_count,
      updatedAt: new Date().toISOString(),
    },
    transcriptPath: doc.transcriptPath || `data/transcripts/${id}.md`,
    chapters: parseChapters(full.description).length ? parseChapters(full.description) : doc.chapters,
    provenance: doc.provenance || "scraped:update-episode-skill",
  };
  if (!doc.chapters) delete doc.chapters;

  fs.mkdirSync(EPISODES_DIR, { recursive: true });
  fs.writeFileSync(file, yaml.dump(doc, { lineWidth: 100 }));
  console.log(`Wrote ${file}`);

  if (args.fetchTranscript) {
    console.log("Fetching transcript ...");
    execFileSync(
      "node",
      [path.join(path.dirname(new URL(import.meta.url).pathname), "scrape-transcript.mjs"), videoId, "--slug", id],
      { stdio: "inherit" }
    );
  }

  console.log(
    "Next: review speakers[]/tags[] references, run `npm run validate`, and (if not already done) `node scripts/scrape-transcript.mjs " +
      videoId +
      " --slug " +
      id +
      "`."
  );
}

main();
