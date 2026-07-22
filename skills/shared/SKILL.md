# shared/ — helper scripts used by every skill

This folder doesn't duplicate logic; it documents which `scripts/*.mjs`
helpers back each skill, so an agent (or human) can find the right script
fast. All scripts live in the repo-root `scripts/` directory (not copied
into `skills/`) so there's a single source of truth and they stay usable
from CLI, npm scripts, and GitHub Actions workflows alike.

| Helper | Used by | Purpose |
| --- | --- | --- |
| `scripts/fetch-youtube-stats.mjs` | `weekly-stats.yml` workflow (cron) | Pulls view/like/comment counts for every published episode via the YouTube Data API v3 (`YOUTUBE_API_KEY`), writes a dated snapshot to `data/metrics/<date>.json`, and patches each episode's `metrics` block. |
| `scripts/scrape-playlist.mjs` | bulk backfill (manual/one-off) | Scrapes the public playlist page via `yt-dlp` (no API key) to discover and bulk-ingest many episodes at once. `update-episode` is the single-video counterpart. |
| `scripts/scrape-transcript.mjs` | `fetch-transcript` skill | Playwright-primary + yt-dlp-VTT-fallback transcript scraper. |
| `scripts/update-speaker.mjs` | `update-speaker` skill | Create/patch a speaker YAML. |
| `scripts/update-episode.mjs` | `update-episode` skill | Create/patch an episode YAML from a YouTube URL/video id. |
| `scripts/update-series.mjs` | `update-series` skill | Create/patch season records and scaffold weekly placeholder episodes. |
| `scripts/validate.mjs` | every skill (last step) | Validates all `data/**` files against `data/schema/*.schema.json`, plus cross-reference checks (season/speaker/tag ids must exist, `id` must match filename). Run via `npm run validate`. |

## Conventions every skill follows
1. **Data is truth.** Every skill's job is to write/patch a YAML file under
   `data/`, never to hand-edit the rendered Astro site.
2. **Validate before you finish.** Always run `npm run validate` as the last
   step of any skill invocation, and fix reported errors before opening a PR.
3. **Provenance.** Every record carries a `provenance` field noting how it
   was sourced (e.g. `scraped:youtube-playlist`, `hand-curated:public-bio`,
   `placeholder:season-schedule`). Skills default to a sensible value but a
   maintainer/agent can override it with `--provenance`.
4. **Idempotent merges.** Running a skill again on an existing record patches
   only the fields you pass and preserves the rest — safe to re-run.
5. **PR, not direct commit to main.** Skills are invoked by the GitHub
   Copilot cloud agent (see `.github/workflows/issue-command.yml`), which
   opens a PR with the data + regenerated site rather than pushing directly.
