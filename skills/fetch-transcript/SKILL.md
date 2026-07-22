# Skill: fetch-transcript

## Trigger
- A maintainer comment on the pinned **Data Ops** issue matching:
  `update episode <url>` (transcripts are usually fetched as part of
  `update-episode` via `--fetch-transcript`), or standalone:
  `fetch transcript <youtube-url> for <episode-slug>`.
- A direct ask like "get the transcript for this episode" when an episode
  YAML already exists but `data/transcripts/<id>.md` is missing.

## Inputs
- A YouTube URL or bare video id (required).
- `--slug <episode-id>` — filename to write, should match the episode's `id`
  (and its `transcriptPath` field, e.g. `data/transcripts/<id>.md`).

## Steps
1. Run:
   ```
   node scripts/scrape-transcript.mjs <videoIdOrUrl> --slug <episode-id>
   ```
2. **Primary strategy**: launches Playwright (Chromium), opens the watch
   page, expands the description, clicks "Show transcript", and scrapes the
   rendered segment list — this matches what a human sees in the YouTube UI.
   Requires Chromium to be installed (`npx playwright install chromium`); if
   it isn't available, the script logs a warning and falls through cleanly.
3. **Fallback strategy** (youtube-transcript-style, no browser required):
   shells out to `yt-dlp --write-auto-sub --sub-format vtt` to download the
   caption track, then parses and de-duplicates the rolling-window
   auto-caption VTT format into clean paragraph-style segments. This is what
   actually ran for all of this repo's seeded transcripts, since Playwright's
   browser binary isn't preinstalled in most CI/sandbox environments.
4. Output is written to `data/transcripts/<slug>.md` with a source-URL header
   and a provenance note. Review for obvious ASR errors before merging —
   auto-captions are not perfect, especially for jargon/product names.
5. Make sure the corresponding episode YAML's `transcriptPath` field points
   at this file (`update-episode` sets this automatically).
6. Run `npm run validate`, commit, and open a PR.

## Script
`scripts/scrape-transcript.mjs` — see the file header and inline comments for
the full dual-path (Playwright / yt-dlp fallback) implementation and the VTT
de-duplication algorithm.
