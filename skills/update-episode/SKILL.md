# Skill: update-episode

## Trigger
- A maintainer comment on the pinned **Data Ops** issue matching:
  `update episode <youtube-url>` — e.g.
  `update episode https://www.youtube.com/watch?v=Qxq-vB44nUk season:season-4 speakers:nitya-narasimhan,junjie-li tags:vs-code,azure-ai-foundry`
- A direct ask like "ingest this week's episode" or "add this video as an episode".

## Inputs
- A YouTube URL or bare video id (required).
- Optional: `--id` (slug override), `--season` (season record id),
  `--speakers` (comma-separated speaker ids — must already exist under
  `data/speakers/`, or run `update-speaker` first), `--tags` (comma-separated
  tag ids — must exist under `data/tags/`), `--fetch-transcript` (also runs
  the `fetch-transcript` skill/script for this video).

## Steps
1. Extract the video URL/id and any `season:` / `speakers:` / `tags:` hints
   from the trigger comment.
2. Run:
   ```
   node scripts/update-episode.mjs <videoIdOrUrl> --season season-4 \
     --speakers nitya-narasimhan,junjie-li --tags vs-code,azure-ai-foundry \
     --fetch-transcript
   ```
   This uses `yt-dlp` (no API key needed) to pull title, description,
   upload date, duration, view/like/comment counts, and best-effort chapters,
   then creates/patches `data/episodes/<id>.yaml`. If the episode already
   exists (e.g. a Season 4 placeholder), fields you don't pass are preserved
   and `status` is promoted to `published`.
3. If any referenced speaker/tag id doesn't exist yet, run `update-speaker`
   (or add a tag YAML under `data/tags/`) first, then re-run this script or
   patch the episode's `speakers[]`/`tags[]` by hand.
4. Run `npm run validate` and fix any cross-reference or schema errors.
5. If `--fetch-transcript` wasn't used, optionally run the `fetch-transcript`
   skill separately.
6. Commit the new/changed YAML and open a PR.

## Script
`scripts/update-episode.mjs` (see script header for full usage/flags). Shares
metadata-fetch logic with `scripts/scrape-playlist.mjs` (used for bulk
backfill) but operates on a single video, and merges onto existing records
instead of always creating new ones.
