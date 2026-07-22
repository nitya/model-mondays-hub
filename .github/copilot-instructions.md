# Copilot instructions for model-mondays-hub

This file guides GitHub Copilot (chat, code review, and the coding agent)
when working in this repository. See also [`AGENTS.md`](../AGENTS.md) for
the full agent operating model — this file is the condensed, Copilot-specific
version.

## Core rule: data-as-truth

- `data/**` (YAML) and `content/**` (Markdown) are the only sources of
  truth. `site/` only renders them — never hardcode episode/speaker content
  in `.astro` files.
- Every data file must validate: `npm run validate` (schemas live in
  `data/schema/`). A file's `id` field must match its filename.
- After any data change, also run `npm run build` from the repo root to
  confirm the Astro site in `site/` still builds.

## Prefer skills over ad-hoc scripts

Before writing new code for a data-update task, check `skills/` for a
matching `SKILL.md`:

- `skills/update-speaker/` — add/patch a speaker.
- `skills/update-episode/` — add/patch an episode from a YouTube URL.
- `skills/fetch-transcript/` — scrape a transcript into `data/transcripts/`.
- `skills/update-series/` — manage seasons + scaffold weekly placeholders.
- `skills/shared/` — helper scripts these skills call (YouTube API stats,
  URL metadata, transcript scraping, schema validation, site regen).

## Required repo secrets & one-time maintainer setup

These are **not** things Copilot can configure itself — call them out
explicitly in any PR description that depends on them:

1. **`YOUTUBE_API_KEY`** repo secret — required for `weekly-stats.yml` and
   `scripts/fetch-youtube-stats.mjs` (YouTube Data API v3). Create at
   https://console.cloud.google.com/apis/credentials with the YouTube Data
   API v3 enabled, then add via Settings → Secrets and variables → Actions.
2. **GitHub Pages** — Settings → Pages → Source = "GitHub Actions" (the
   `build-deploy.yml` workflow handles the rest).
3. **GitHub Copilot coding agent** — Settings → Copilot → Coding agent must
   be enabled for the repo so `issue-command.yml` can assign work to it.
4. **Pinned "Data Ops" issue** — create one issue from the "Data Ops" issue
   template and pin it; `issue-command.yml` only reacts to comments on that
   specific issue. See `.github/ISSUE_TEMPLATE/` for the template and
   `skills/README` / `AGENTS.md` for the command syntax.

## Style & scope

- Keep scripts in `scripts/` dependency-light (Node core + `js-yaml`, `ajv`,
  `playwright`) — this is a small static-content repo, not a service.
- Don't add a database, CMS, or server component. The whole point of this
  repo is that a YAML/Markdown PR *is* the publishing action.
- When adding an episode/speaker/tag, always set an honest `provenance`
  value (see `AGENTS.md`).
