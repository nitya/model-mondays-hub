// scripts/lib/paths.mjs
// Central path constants shared by all scripts/skills so data locations stay
// consistent no matter which script or skill is invoking them.
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, "..", "..");

export const DATA_DIR = path.join(REPO_ROOT, "data");
export const SCHEMA_DIR = path.join(DATA_DIR, "schema");
export const SPEAKERS_DIR = path.join(DATA_DIR, "speakers");
export const EPISODES_DIR = path.join(DATA_DIR, "episodes");
export const SEASONS_DIR = path.join(DATA_DIR, "seasons");
export const TAGS_DIR = path.join(DATA_DIR, "tags");
export const TRANSCRIPTS_DIR = path.join(DATA_DIR, "transcripts");
export const METRICS_DIR = path.join(DATA_DIR, "metrics");
export const CONTENT_BLOG_DIR = path.join(REPO_ROOT, "content", "blog");
export const SITE_DIR = path.join(REPO_ROOT, "site");
