#!/usr/bin/env node
// scripts/fetch-youtube-stats.mjs
//
// Pulls current view/like/comment counts for every published episode via the
// YouTube Data API v3 (requires YOUTUBE_API_KEY env var) and writes a dated
// snapshot to data/metrics/<YYYY-MM-DD>.json, then patches each episode
// YAML's `metrics` block in place. Used by the weekly-stats.yml workflow
// (cron) and can be run manually for spot-checks.
//
// Usage:
//   YOUTUBE_API_KEY=xxx node scripts/fetch-youtube-stats.mjs
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { EPISODES_DIR, METRICS_DIR } from "./lib/paths.mjs";

const API_KEY = process.env.YOUTUBE_API_KEY;

function loadEpisodes() {
  return fs
    .readdirSync(EPISODES_DIR)
    .filter((f) => f.endsWith(".yaml"))
    .map((f) => {
      const file = path.join(EPISODES_DIR, f);
      return {
        file,
        // JSON_SCHEMA avoids js-yaml auto-parsing date strings into Date objects.
        doc: yaml.load(fs.readFileSync(file, "utf8"), { schema: yaml.JSON_SCHEMA }),
      };
    })
    .filter((e) => e.doc.youtubeVideoId);
}

async function fetchStats(videoIds) {
  const stats = {};
  // Batch in groups of 50 (API max per request).
  for (let i = 0; i < videoIds.length; i += 50) {
    const batch = videoIds.slice(i, i + 50);
    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${batch.join(",")}&key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`YouTube API error ${res.status}: ${await res.text()}`);
    }
    const json = await res.json();
    for (const item of json.items || []) {
      stats[item.id] = {
        views: Number(item.statistics.viewCount || 0),
        likes: Number(item.statistics.likeCount || 0),
        comments: Number(item.statistics.commentCount || 0),
      };
    }
  }
  return stats;
}

async function main() {
  if (!API_KEY) {
    console.error("YOUTUBE_API_KEY is not set. Set it as an env var or repo secret.");
    process.exit(1);
  }

  const episodes = loadEpisodes();
  if (!episodes.length) {
    console.log("No published episodes with youtubeVideoId found. Nothing to do.");
    return;
  }

  console.log(`Fetching stats for ${episodes.length} video(s) ...`);
  const stats = await fetchStats(episodes.map((e) => e.doc.youtubeVideoId));

  const updatedAt = new Date().toISOString();
  const snapshot = {};

  for (const { file, doc } of episodes) {
    const s = stats[doc.youtubeVideoId];
    if (!s) {
      console.warn(`  no stats returned for ${doc.youtubeVideoId} (${doc.id})`);
      continue;
    }
    doc.metrics = { ...s, updatedAt };
    snapshot[doc.id] = { youtubeVideoId: doc.youtubeVideoId, ...s };

    const header = `# Managed by scripts/fetch-youtube-stats.mjs — metrics block auto-updated weekly.\n`;
    fs.writeFileSync(file, header + yaml.dump(doc, { lineWidth: 100 }));
  }

  fs.mkdirSync(METRICS_DIR, { recursive: true });
  const dateStr = updatedAt.slice(0, 10);
  const snapshotFile = path.join(METRICS_DIR, `${dateStr}.json`);
  fs.writeFileSync(snapshotFile, JSON.stringify({ updatedAt, episodes: snapshot }, null, 2));

  console.log(`Updated metrics for ${Object.keys(snapshot).length} episode(s).`);
  console.log(`Snapshot written to ${snapshotFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
