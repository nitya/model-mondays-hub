#!/usr/bin/env node
// scripts/update-speaker.mjs
//
// Creates or patches a speaker YAML record under data/speakers/. Backs the
// `update-speaker` skill. Fields can be supplied explicitly via CLI flags;
// when a --url is a LinkedIn/personal site URL it is simply recorded under
// `links` (this script does not scrape profile pages — no reliable public
// API for that — so bios/titles should be supplied explicitly or hand-added
// after running).
//
// Usage:
//   node scripts/update-speaker.mjs --name "Jane Doe" [--id jane-doe] \
//     [--title "Field CTO"] [--company Acme] [--bio "..."] \
//     [--role guest|host|producer] \
//     [--link website=https://... --link linkedin=https://...] \
//     [--provenance "hand-curated:public-bio"]
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { SPEAKERS_DIR } from "./lib/paths.mjs";
import { slugify } from "./lib/slug.mjs";

function parseArgs(argv) {
  const args = { links: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--name") args.name = argv[++i];
    else if (a === "--id") args.id = argv[++i];
    else if (a === "--title") args.title = argv[++i];
    else if (a === "--company") args.company = argv[++i];
    else if (a === "--bio") args.bio = argv[++i];
    else if (a === "--avatar") args.avatar = argv[++i];
    else if (a === "--role") args.role = argv[++i];
    else if (a === "--provenance") args.provenance = argv[++i];
    else if (a === "--link") {
      const [platform, ...rest] = argv[++i].split("=");
      args.links[platform] = rest.join("=");
    }
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.name) {
    console.error(
      "Usage: node scripts/update-speaker.mjs --name \"Jane Doe\" [--id jane-doe] [--title ...] [--company ...] [--bio ...] [--role guest|host|producer] [--link platform=url ...] [--provenance ...]"
    );
    process.exit(1);
  }

  const id = args.id || slugify(args.name);
  const file = path.join(SPEAKERS_DIR, `${id}.yaml`);

  let doc = { id, name: args.name, role: args.role || "guest" };
  if (fs.existsSync(file)) {
    // Merge onto the existing record so re-running only patches supplied fields.
    doc = { ...yaml.load(fs.readFileSync(file, "utf8"), { schema: yaml.JSON_SCHEMA }), ...doc };
    console.log(`Patching existing speaker record: ${file}`);
  } else {
    console.log(`Creating new speaker record: ${file}`);
  }

  if (args.title) doc.title = args.title;
  if (args.company) doc.company = args.company;
  if (args.bio) doc.bio = args.bio;
  if (args.avatar) doc.avatar = args.avatar;
  if (Object.keys(args.links).length) doc.links = { ...doc.links, ...args.links };
  if (args.provenance) doc.provenance = args.provenance;
  else if (!doc.provenance) doc.provenance = "hand-curated:skill-update-speaker";

  fs.mkdirSync(SPEAKERS_DIR, { recursive: true });
  fs.writeFileSync(file, yaml.dump(doc, { lineWidth: 100 }));
  console.log(`Wrote ${file}`);
  console.log("Next: run `npm run validate` to confirm the record is schema-valid.");
}

main();
