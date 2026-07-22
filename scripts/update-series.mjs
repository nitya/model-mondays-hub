#!/usr/bin/env node
// scripts/update-series.mjs
//
// Manages season records and scaffolds weekly placeholder episode YAMLs.
// Backs the `update-series` skill.
//
// Usage:
//   # Create/patch a season record:
//   node scripts/update-series.mjs season --id season-5 --number 5 \
//     --title "Season 5" --start-date 2027-02-01 [--theme "..."] \
//     [--playlist-url https://...] [--status upcoming|active|completed]
//
//   # Scaffold N weekly placeholder episodes for a season, skipping any
//   # --skip-week dates (e.g. holidays):
//   node scripts/update-series.mjs placeholders --season season-5 \
//     --start-date 2027-02-01 --weeks 12 [--skip-week 2027-03-01=Some holiday]
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { SEASONS_DIR, EPISODES_DIR } from "./lib/paths.mjs";

function parseArgs(argv) {
  const args = { skipWeeks: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--id") args.id = argv[++i];
    else if (a === "--number") args.number = Number(argv[++i]);
    else if (a === "--title") args.title = argv[++i];
    else if (a === "--theme") args.theme = argv[++i];
    else if (a === "--start-date") args.startDate = argv[++i];
    else if (a === "--end-date") args.endDate = argv[++i];
    else if (a === "--status") args.status = argv[++i];
    else if (a === "--playlist-url") args.playlistUrl = argv[++i];
    else if (a === "--season") args.season = argv[++i];
    else if (a === "--weeks") args.weeks = Number(argv[++i]);
    else if (a === "--skip-week") {
      const [date, ...reason] = argv[++i].split("=");
      args.skipWeeks.push({ date, reason: reason.join("=") || "Break — no episode this week." });
    }
  }
  return args;
}

function cmdSeason(args) {
  if (!args.id || !args.number || !args.title || !args.startDate) {
    console.error(
      "Usage: node scripts/update-series.mjs season --id season-5 --number 5 --title \"Season 5\" --start-date YYYY-MM-DD [--theme ...] [--end-date YYYY-MM-DD] [--playlist-url ...] [--status upcoming|active|completed]"
    );
    process.exit(1);
  }
  const file = path.join(SEASONS_DIR, `${args.id}.yaml`);
  let doc = {};
  if (fs.existsSync(file)) {
    doc = yaml.load(fs.readFileSync(file, "utf8"), { schema: yaml.JSON_SCHEMA });
    console.log(`Patching existing season record: ${file}`);
  } else {
    console.log(`Creating new season record: ${file}`);
  }
  doc = {
    ...doc,
    id: args.id,
    number: args.number,
    title: args.title,
    theme: args.theme ?? doc.theme,
    startDate: args.startDate,
    endDate: args.endDate ?? doc.endDate,
    status: args.status ?? doc.status ?? "upcoming",
    breaks: args.skipWeeks.length ? args.skipWeeks : doc.breaks,
    playlistUrl: args.playlistUrl ?? doc.playlistUrl,
    provenance: doc.provenance || "hand-curated:season-schedule",
  };
  for (const k of Object.keys(doc)) if (doc[k] === undefined) delete doc[k];

  fs.mkdirSync(SEASONS_DIR, { recursive: true });
  fs.writeFileSync(file, yaml.dump(doc, { lineWidth: 100 }));
  console.log(`Wrote ${file}`);
}

function cmdPlaceholders(args) {
  if (!args.season || !args.startDate || !args.weeks) {
    console.error(
      "Usage: node scripts/update-series.mjs placeholders --season season-5 --start-date YYYY-MM-DD --weeks 12 [--skip-week YYYY-MM-DD=Reason ...]"
    );
    process.exit(1);
  }
  const skipDates = new Set(args.skipWeeks.map((s) => s.date));
  const [seasonNum] = (args.season.match(/(\d+)/) || [null, "?"]);

  let cursor = new Date(`${args.startDate}T00:00:00Z`);
  let weekIndex = 0;
  const written = [];
  while (weekIndex < args.weeks) {
    const dateStr = cursor.toISOString().slice(0, 10);
    if (skipDates.has(dateStr)) {
      cursor.setUTCDate(cursor.getUTCDate() + 7);
      continue;
    }
    weekIndex += 1;
    const id = `${args.season}-week-${String(weekIndex).padStart(2, "0")}`;
    const file = path.join(EPISODES_DIR, `${id}.yaml`);
    const doc = {
      id,
      title: `Model Mondays — Season ${seasonNum}, Week ${weekIndex} (TBA)`,
      description: "Placeholder for an upcoming episode — details to be announced.",
      season: args.season,
      publishDate: dateStr,
      status: "placeholder",
      segmentType: ["tech-spotlight"],
      speakers: [],
      tags: [],
      provenance: "placeholder:season-schedule",
    };
    fs.mkdirSync(EPISODES_DIR, { recursive: true });
    fs.writeFileSync(file, yaml.dump(doc, { lineWidth: 100 }));
    written.push(file);
    cursor.setUTCDate(cursor.getUTCDate() + 7);
  }
  console.log(`Wrote ${written.length} placeholder episode file(s):`);
  for (const f of written) console.log(`  - ${f}`);
}

function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);
  if (cmd === "season") cmdSeason(args);
  else if (cmd === "placeholders") cmdPlaceholders(args);
  else {
    console.error("Usage: node scripts/update-series.mjs <season|placeholders> [options]");
    process.exit(1);
  }
  console.log("Next: run `npm run validate` to confirm the record(s) are schema-valid.");
}

main();
