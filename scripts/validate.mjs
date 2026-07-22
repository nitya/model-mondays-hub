#!/usr/bin/env node
// scripts/validate.mjs
//
// Validates every YAML/JSON data record under data/ against its JSON Schema
// in data/schema/. Run via `npm run validate`. Used locally and by the
// validate-data.yml GitHub Actions workflow on every PR touching data/**.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import {
  SCHEMA_DIR,
  SPEAKERS_DIR,
  EPISODES_DIR,
  SEASONS_DIR,
  TAGS_DIR,
  MODELS_DIR,
} from "./lib/paths.mjs";

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const RECORD_TYPES = [
  { name: "speaker", dir: SPEAKERS_DIR, schema: "speaker.schema.json" },
  { name: "season", dir: SEASONS_DIR, schema: "season.schema.json" },
  { name: "tag", dir: TAGS_DIR, schema: "tag.schema.json" },
  { name: "model", dir: MODELS_DIR, schema: "model.schema.json" },
  { name: "episode", dir: EPISODES_DIR, schema: "episode.schema.json" },
];

function loadYamlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .map((f) => ({ file: path.join(dir, f), name: f }));
}

let totalFiles = 0;
let totalErrors = 0;
const idsByType = {};
const errors = [];
const episodeDocs = []; // Cache parsed episode docs for cross-reference pass

for (const { name, dir, schema } of RECORD_TYPES) {
  const schemaPath = path.join(SCHEMA_DIR, schema);
  const schemaDoc = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  const validate = ajv.compile(schemaDoc);
  idsByType[name] = new Set();

  for (const { file, name: fileName } of loadYamlFiles(dir)) {
    totalFiles += 1;
    let doc;
    try {
      // JSON_SCHEMA avoids js-yaml's default behavior of parsing unquoted
      // ISO date strings into native Date objects, which would then fail
      // JSON Schema's `format: date` string validation.
      doc = yaml.load(fs.readFileSync(file, "utf8"), { schema: yaml.JSON_SCHEMA });
    } catch (err) {
      totalErrors += 1;
      errors.push(`${name} ${fileName}: YAML parse error - ${err.message}`);
      continue;
    }

    const valid = validate(doc);
    if (!valid) {
      totalErrors += 1;
      for (const e of validate.errors) {
        errors.push(`${name} ${fileName}: ${e.instancePath || "/"} ${e.message}`);
      }
      continue;
    }

    const expectedId = fileName.replace(/\.ya?ml$/, "");
    if (doc.id !== expectedId) {
      totalErrors += 1;
      errors.push(
        `${name} ${fileName}: id "${doc.id}" does not match filename "${expectedId}"`
      );
    }
    if (idsByType[name].has(doc.id)) {
      totalErrors += 1;
      errors.push(`${name} ${fileName}: duplicate id "${doc.id}"`);
    }
    idsByType[name].add(doc.id);

    // Cache parsed episode docs for cross-reference validation below.
    if (name === "episode" && doc) {
      episodeDocs.push({ fileName, doc });
    }
  }
}

// Cross-reference validation: episodes must reference existing speakers,
// tags, and seasons. Reuses the cached docs from the schema pass above
// (no second file read).
for (const { fileName, doc } of episodeDocs) {
  if (doc.season && !idsByType.season.has(doc.season)) {
    totalErrors += 1;
    errors.push(`episode ${fileName}: unknown season "${doc.season}"`);
  }
  for (const speakerId of doc.speakers || []) {
    if (!idsByType.speaker.has(speakerId)) {
      totalErrors += 1;
      errors.push(`episode ${fileName}: unknown speaker "${speakerId}"`);
    }
  }
  for (const tagId of doc.tags || []) {
    if (!idsByType.tag.has(tagId)) {
      totalErrors += 1;
      errors.push(`episode ${fileName}: unknown tag "${tagId}"`);
    }
  }
}

console.log(`Validated ${totalFiles} data file(s) across ${RECORD_TYPES.length} record types.`);

if (totalErrors > 0) {
  console.error(`\n${totalErrors} error(s) found:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
} else {
  console.log("All data files are valid. ✅");
}
