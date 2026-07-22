# AGENTS.md

Operating instructions for any AI agent (GitHub Copilot coding agent, or
otherwise) working in this repository.

## Mental model: data is truth, site is a view

- `data/**` (YAML) and `content/**` (Markdown/MDX) are the **only** sources
  of truth. Every fact about a speaker, episode, season, or tag lives in a
  YAML file. Every blog post is a Markdown file.
- `site/` is a rendering layer. It has **zero** hardcoded content. If you
  find yourself editing a `.astro` page to add episode-specific content,
  stop — you should be editing/adding a data file instead.
- Every data file **must** validate against its JSON Schema in
  `data/schema/`. Run `npm run validate` after any data change.

## Directory quick reference

| Path | What it holds | Schema |
|---|---|---|
| `data/speakers/<id>.yaml` | One speaker | `data/schema/speaker.schema.json` |
| `data/episodes/<id>.yaml` | One episode | `data/schema/episode.schema.json` |
| `data/seasons/<id>.yaml` | One season | `data/schema/season.schema.json` |
| `data/tags/<id>.yaml` | One tag (`category`: model/technology/partner) | `data/schema/tag.schema.json` |
| `data/transcripts/<episode-id>.md` | Transcript for an episode | — |
| `data/metrics/<date>.json` | Dated YouTube stats snapshot | — |
| `content/blog/<slug>.md` | Weekly newsletter post | — |

`<id>` **must** match the filename (without extension) — this is enforced by
`scripts/validate.mjs`.

## Skills

Repeatable tasks live in `skills/<skill-name>/SKILL.md` with a companion
script. Prefer running/extending a skill over writing one-off code:

- **`update-speaker`** — create/patch a speaker record from a URL or fields.
- **`update-episode`** — create/patch an episode record from a YouTube URL
  (pulls title/date/video id/metrics) or explicit fields; links
  speakers/tags.
- **`fetch-transcript`** — scrape a transcript for a given video into
  `data/transcripts/<slug>.md` (Playwright primary, yt-dlp/timedtext
  fallback).
- **`update-series`** — manage season records and scaffold weekly episode
  placeholders (e.g. next season's schedule).

Each skill's `SKILL.md` documents its trigger, inputs, steps, and the exact
script/command it runs. Read it before invoking the skill.

## Standard workflow for a data change

1. Identify which skill (if any) matches the request. If one exists, follow
   its `SKILL.md` steps instead of hand-writing YAML.
2. Make the change under `data/` or `content/`.
3. Run `npm run validate`. Fix any schema or cross-reference errors
   (unknown `season`/`speakers`/`tags` references are treated as errors).
4. Run `npm run build` (from repo root) to confirm the Astro site still
   builds with the new data.
5. Commit with a clear message and open a PR. Note any manual follow-up the
   maintainer needs to do (e.g. "please re-run weekly-stats after merging").

## Automation you should know about

- **`validate-data.yml`** — runs `npm run validate` on every PR touching
  `data/**`. Your PR must pass this.
- **`weekly-stats.yml`** — cron job that pulls YouTube metrics via
  `YOUTUBE_API_KEY` and opens its own PR updating `data/metrics/*.json` and
  episode `metrics` blocks. Don't hand-edit `metrics` blocks; let this job
  own them (a manual edit is fine as a one-off but will be overwritten next
  run).
- **`issue-command.yml`** — watches comments on the pinned "Data Ops" issue
  for commands like `update episode <url>`, `update speaker <url>`,
  `update series <details>` and dispatches them to the GitHub Copilot coding
  agent, which runs the matching skill and opens a PR.
- **`build-deploy.yml`** — builds and deploys `site/` to GitHub Pages on
  every push to `main`.

## Provenance discipline

Every speaker/episode record has a `provenance` field. When you create or
edit a record, set/update it honestly, e.g.:

- `scraped:youtube-playlist` — pulled from the public playlist/video page.
- `hand-curated:public-bio` / `hand-curated:public-info` — manually written
  from publicly available information.
- `placeholder:season-schedule` — a future episode slot with no real content
  yet.

This keeps the "what do we actually know vs. what's a placeholder" boundary
honest for future agents and readers.

## Extending the seed data

Only a handful of real Season 3 episodes are seeded so far. To backfill more
history:

```bash
node scripts/scrape-playlist.mjs --limit 10   # discover more episodes
node scripts/scrape-transcript.mjs <videoId> --slug <episode-slug>
```

Then review the generated episode YAML (season/speakers/tags need a human
or the `update-episode` skill to fill in — the scraper can't reliably infer
them) and run `npm run validate`.
