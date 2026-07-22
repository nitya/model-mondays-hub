#!/usr/bin/env node
// Rename all episode + transcript files to sN-eNN-yyyy-mm-dd.{yaml,md}
// Creates missing season records, removes duplicates, updates all refs.

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const EPISODES_DIR = "data/episodes";
const TRANSCRIPTS_DIR = "data/transcripts";
const BLOG_DIR = "content/blog";

// Official episode numbering from microsoft/model-mondays repo.
// The "coming-soon" trailer gets e00.
// Map: videoId -> { season, episode }
const OFFICIAL = {
  // Season 1 (Mar-May 2025) — 8 episodes + 1 trailer
  "C7SUG4s7aLo": { s: 1, e: 0 },   // Coming Soon trailer
  "oW7Vku9MjAQ": { s: 1, e: 0 },   // Coming Soon trailer (alt ID)
  "dohvGc7eyqU": { s: 1, e: 1 },   // GitHub Models
  "nTqr4pzxF-k": { s: 1, e: 2 },   // Reasoning Models
  "Qs4fdy17b40": { s: 1, e: 3 },   // Search & Retrieval / Cohere Rerank
  "kDR09m_cUKs": { s: 1, e: 4 },   // Visual Generative / Stability AI
  "iCPl693s3dA": { s: 1, e: 5 },   // Fine-Tuning / Mistral
  "MgIfvEEZN7o": { s: 1, e: 6 },   // Local AI Development
  "2E842zOGIyI": { s: 1, e: 7 },   // Open Source / Llama 4
  "_I6qDdp5Vo4": { s: 1, e: 8 },   // Forecasting / Nixtla

  // Season 2 (Jun-Sep 2025) — 13 episodes
  "ffxUEenM4B8": { s: 2, e: 1 },   // Advanced Reasoning
  "cPS3cWRZTps": { s: 2, e: 2 },   // Model Context Protocol
  "VLQKZq8L9Uk": { s: 2, e: 3 },   // SLMs and Reasoning
  "tNiFbf3XP6k": { s: 2, e: 4 },   // AI Developer Experience
  "VSNGzBB20aw": { s: 2, e: 5 },   // Fine Tuning & Distillation
  "chjpVSrk3jA": { s: 2, e: 6 },   // Research & Innovation
  "mSrg1uP136g": { s: 2, e: 7 },   // AI-Assisted Azure Development
  "ILBDDCJ0d9g": { s: 2, e: 8 },   // On-Device & Local AI
  "fjSxraAmGMI": { s: 2, e: 9 },   // Models for AI Agents
  "tqOecUt_wCc": { s: 2, e: 10 },  // Document Processing
  "Rr4iSCyE7IY": { s: 2, e: 11 },  // Speech Playground
  "gEH2ACNf5b0": { s: 2, e: 12 },  // Models & Observability
  "BANtEq-0FsE": { s: 2, e: 13 },  // Open-Source Models / Hugging Face

  // Season 3 (Dec 2025 - Apr 2026) — 16 episodes
  "zE1tfuPGfFY": { s: 3, e: 1 },   // Model Router
  "70OCsYjOsbs": { s: 3, e: 2 },   // AI Red Teaming Agent
  "2607tZyXJsY": { s: 3, e: 3 },   // Foundry Local
  "z-ijqbPq8zg": { s: 3, e: 4 },   // Microsoft Agent Framework
  "vsSleri3RPo": { s: 3, e: 5 },   // Responses API
  "TVAOBnR49r0": { s: 3, e: 6 },   // Fine-Tuning & Synthetic Data
  "eTtPuc2nz2Y": { s: 3, e: 7 },   // Synthetic Data Generation
  "Gw8Il0qJPD0": { s: 3, e: 8 },   // Next-Gen UI
  "HGsc6-7Wj_8": { s: 3, e: 9 },   // Foundry Labs / Black Forest Labs
  "LNgzxNloqbg": { s: 3, e: 10 },  // AI Developer Experiences / Claude
  "O8bmP5onfxg": { s: 3, e: 11 },  // Foundry IQ
  "mV8T9QIAEhg": { s: 3, e: 12 },  // Foundry Tools & MCP / Fireworks
  "Kd6EPBfvDo4": { s: 3, e: 13 },  // Agent 365 / Hugging Face
  "7bgLTt1obZI": { s: 3, e: 14 },  // Cohere Enterprise Value
  "Qxq-vB44nUk": { s: 3, e: 15 },  // Foundry Agents in VS Code
  // S3E16 (GitHub Agentic Workflows) may not have aired yet
};

// Read all episodes
const files = fs.readdirSync(EPISODES_DIR).filter(f => f.endsWith(".yaml"));
const episodes = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(EPISODES_DIR, file), "utf8");
  const doc = yaml.load(content, { schema: yaml.JSON_SCHEMA });
  const date = String(doc.publishDate || "").replace(/'/g, "");
  episodes.push({ file, doc, content, date, videoId: doc.youtubeVideoId, id: doc.id });
}

// Dedupe by videoId — keep richer content
const seen = new Map();
const removals = new Set();
for (const ep of episodes) {
  if (!ep.videoId) continue;
  const existing = seen.get(ep.videoId);
  if (!existing) { seen.set(ep.videoId, ep); continue; }
  if (ep.content.length > existing.content.length) {
    removals.add(existing.file);
    seen.set(ep.videoId, ep);
  } else {
    removals.add(ep.file);
  }
}

const unique = episodes.filter(e => !removals.has(e.file));

// Assign official numbering
for (const ep of unique) {
  const official = ep.videoId ? OFFICIAL[ep.videoId] : null;
  if (official) {
    ep.seasonNum = official.s;
    ep.episodeNum = official.e;
    ep.seasonId = `season-${official.s}`;
  } else if (ep.doc.season === "season-4" || ep.file.startsWith("season-4")) {
    // Season 4 placeholders — keep existing week numbering
    ep.seasonNum = 4;
    ep.seasonId = "season-4";
    const weekMatch = ep.file.match(/week-(\d+)/);
    ep.episodeNum = weekMatch ? parseInt(weekMatch[1]) : 0;
  } else {
    console.warn(`⚠ No official numbering for ${ep.file} (videoId: ${ep.videoId})`);
    ep.seasonNum = 0;
    ep.episodeNum = 0;
    ep.seasonId = "season-unknown";
  }
}

// Sort by season then episode number
unique.sort((a, b) => a.seasonNum - b.seasonNum || a.episodeNum - b.episodeNum);

// Build rename map
const renameMap = [];
const idMap = new Map();

for (const ep of unique) {
  const eNum = String(ep.episodeNum).padStart(2, "0");
  const newId = `s${ep.seasonNum}-e${eNum}-${ep.date}`;
  const newFile = `${newId}.yaml`;
  const oldId = ep.id;

  idMap.set(oldId, newId);

  const hasTranscript = fs.existsSync(path.join(TRANSCRIPTS_DIR, `${oldId}.md`));

  renameMap.push({
    oldFile: ep.file, newFile, oldId, newId,
    seasonId: ep.seasonId, content: ep.content, doc: ep.doc,
    hasTranscript,
  });
}

// Print plan
console.log(`\n=== Rename plan: ${renameMap.length} episodes, ${removals.size} duplicates ===\n`);
for (const r of renameMap) {
  console.log(`  ${r.oldFile.padEnd(55)} → ${r.newFile}`);
  if (r.hasTranscript) console.log(`    📝 ${r.oldId}.md → ${r.newId}.md`);
}
if (removals.size) {
  console.log(`\n  Duplicates to remove:`);
  for (const f of removals) console.log(`    🗑  ${f}`);
}

if (process.argv.includes("--dry-run")) {
  console.log("\n(dry run — no changes made)");
  process.exit(0);
}

// Execute
console.log("\n=== Executing ===\n");

// Remove duplicates
for (const f of removals) {
  const fp = path.join(EPISODES_DIR, f);
  if (fs.existsSync(fp)) { fs.unlinkSync(fp); console.log(`  🗑 Removed ${f}`); }
}

// Write renamed episodes to temp files
for (const r of renameMap) {
  let content = r.content;
  content = content.replace(/^id: .+$/m, `id: ${r.newId}`);
  if (content.match(/^season:/m)) {
    content = content.replace(/^season: .+$/m, `season: ${r.seasonId}`);
  } else {
    content = content.replace(/^(id: .+)$/m, `$1\nseason: ${r.seasonId}`);
  }
  if (r.hasTranscript) {
    content = content.replace(
      new RegExp(`transcriptPath:.*${r.oldId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.md`),
      `transcriptPath: data/transcripts/${r.newId}.md`
    );
  }
  const tmpPath = path.join(EPISODES_DIR, `__tmp__${r.newFile}`);
  fs.writeFileSync(tmpPath, content);
  const oldPath = path.join(EPISODES_DIR, r.oldFile);
  if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
}

// Move temp to final
for (const r of renameMap) {
  const tmp = path.join(EPISODES_DIR, `__tmp__${r.newFile}`);
  const fin = path.join(EPISODES_DIR, r.newFile);
  if (fs.existsSync(tmp)) fs.renameSync(tmp, fin);
}
console.log(`  ✅ Renamed ${renameMap.length} episode files`);

// Rename transcripts
let tCount = 0;
for (const r of renameMap) {
  if (!r.hasTranscript) continue;
  const oldT = path.join(TRANSCRIPTS_DIR, `${r.oldId}.md`);
  const newT = path.join(TRANSCRIPTS_DIR, `${r.newId}.md`);
  if (fs.existsSync(oldT) && oldT !== newT) {
    fs.renameSync(oldT, newT);
    tCount++;
  }
}
console.log(`  ✅ Renamed ${tCount} transcript files`);

// Update blog cross-references
const blogFiles = fs.existsSync(BLOG_DIR)
  ? fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"))
  : [];
for (const bf of blogFiles) {
  const fp = path.join(BLOG_DIR, bf);
  let content = fs.readFileSync(fp, "utf8");
  let changed = false;
  for (const [oldId, newId] of idMap) {
    if (content.includes(oldId)) {
      content = content.replaceAll(oldId, newId);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(fp, content);
    console.log(`  ✅ Updated refs in blog/${bf}`);
  }
}

console.log(`\n✅ Done! ${renameMap.length} episodes, ${tCount} transcripts, ${removals.size} duplicates removed.`);
