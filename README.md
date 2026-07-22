# Model Mondays Hub

A data-first, agent-first knowledge base and website for **Model Mondays** —
Microsoft's weekly AI livestream/podcast series, running for over a year and
now heading into **Season 4** (12 weekly episodes, August 10 – early
November 2026, with a Labor Day break).

> As an AI native engineer, your journey starts with model choice.
> Build your Model IQ one week at a time.

Each episode mixes **Tech Spotlights**, **Customer Stories**, **Study
Corner**, and **Partner Spotlights** covering the Microsoft Foundry model
catalog and its partner ecosystem.

- 📺 Playlist: https://www.youtube.com/playlist?list=PLmsFUfdnGr3wzz6a4E-Szksg92JPng-AL
- 📌 Series / RSVP: https://developer.microsoft.com/reactor/series/S-1485
- 📚 Series repo (context, SAML-gated): https://github.com/microsoft/model-mondays

## Why "data-first, agent-first"?

The **data in `data/` and `content/` is the source of truth** for this repo.
The [Astro](https://astro.build) site in `site/` is a *rendering* of that
data — it does not own any content itself. This means:

- Anyone (human or AI agent) can update the site by editing a YAML/Markdown
  file and opening a PR. No site code changes required.
- The data is schema-validated (see `data/schema/`), so bad edits fail CI
  instead of silently breaking the site.
- Repeatable tasks — adding a speaker, adding an episode, fetching a
  transcript, pulling YouTube stats — are implemented as **skills** in
  `skills/` that both humans and the GitHub Copilot coding agent can run.

See [`AGENTS.md`](./AGENTS.md) and
[`.github/copilot-instructions.md`](./.github/copilot-instructions.md) for
the full agent operating model.

## Repository layout

```
data/
  schema/       JSON Schemas: speaker, episode, season, tag
  speakers/     One YAML file per speaker
  episodes/     One YAML file per episode
  seasons/      One YAML file per season
  tags/         One YAML file per tag (category: model | technology | partner)
  transcripts/  One Markdown transcript per episode
  metrics/      Dated JSON snapshots of YouTube stats (cron-updated)
content/
  blog/         Weekly newsletter-style blog posts (Markdown)
site/           Astro static site — reads ../data and ../content
skills/         SKILL.md-style task definitions + the scripts they run
scripts/        Node scripts used by skills, workflows, and `npm run` tasks
.github/
  workflows/    build-deploy, validate-data, weekly-stats, issue-command
  ISSUE_TEMPLATE/  "Data Ops" issue template
```

## How the data drives the site

The Astro site's content collections (`site/src/content.config.ts`) load
directly from `data/` and `content/` using glob loaders and Zod schemas that
mirror `data/schema/*.schema.json`. There is no database and no CMS — editing
a file in `data/` and merging the PR is the entire publishing pipeline.
`build-deploy.yml` rebuilds and redeploys the site to GitHub Pages on every
push to `main`.

## Adding or updating data

**As a human:**

1. Add/edit a YAML file under the right `data/` subfolder (copy an existing
   file as a template — the schema in `data/schema/` documents every field).
2. Run `npm run validate` to check it against the schema.
3. Run `npm run build` (builds the Astro site) to confirm nothing broke.
4. Open a PR.

**As an agent:** open (or comment on) the pinned **Data Ops** issue with a
command like `update episode https://youtube.com/watch?v=...` — see
[`AGENTS.md`](./AGENTS.md) for the full command list. The
`issue-command.yml` workflow dispatches this to the GitHub Copilot coding
agent, which runs the matching skill in `skills/` and opens a PR.

## Running things locally

```bash
npm install                 # root tooling (validation, scrapers)
npm run validate            # validate all data/*.yaml against schema
npm --prefix site install   # site dependencies
npm run build                # validate + build the Astro site (site/dist)
npm run dev                  # Astro dev server
```

Scraping/skills scripts (`scripts/scrape-playlist.mjs`,
`scripts/scrape-transcript.mjs`) additionally require
[`yt-dlp`](https://github.com/yt-dlp/yt-dlp) on `PATH` (`pip install
yt-dlp`), and `scripts/scrape-transcript.mjs`'s primary path uses
[Playwright](https://playwright.dev) (`npx playwright install chromium`).

## Seed data & provenance

This repo ships with a *few* real Season 3 episodes (and their speakers +
transcripts), scraped from the public YouTube playlist page — no API key
required for this — plus 12 **placeholder** records for the upcoming Season
4 weekly schedule. Every record has a `provenance` field noting how it was
sourced (e.g. `scraped:youtube-playlist`, `hand-curated:public-bio`,
`placeholder:season-schedule`). Full historical backfill of every past
season is intentionally deferred — see `AGENTS.md` for how to extend it.

## Deployment & required setup

See [`.github/copilot-instructions.md`](./.github/copilot-instructions.md)
for the full list of manual, one-time steps a maintainer must complete
(enabling GitHub Pages, adding the `YOUTUBE_API_KEY` secret, enabling the
GitHub Copilot coding agent, and creating/pinning the "Data Ops" issue).

## License

[MIT](./LICENSE)
