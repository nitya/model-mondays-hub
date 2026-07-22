# Skill: update-series

## Trigger
- A maintainer comment on the pinned **Data Ops** issue matching:
  `update series <sub-command> ...` — e.g.
  `update series season id:season-5 number:5 title:"Season 5" start:2027-02-01`
  or
  `update series placeholders season:season-5 start:2027-02-01 weeks:12 skip:2027-04-19=Spring break`
- A direct ask like "set up next season's placeholder episodes".

## Inputs
### `season` sub-command
- `--id`, `--number`, `--title`, `--start-date` (all required).
- Optional: `--theme`, `--end-date`, `--status`
  (`upcoming` | `active` | `completed`), `--playlist-url`.

### `placeholders` sub-command
- `--season` (season id, required), `--start-date` (first weekly episode,
  required), `--weeks` (episode count, required).
- `--skip-week YYYY-MM-DD=Reason` (repeatable) — weeks to skip (e.g. a
  holiday break); the schedule shifts forward by one week for each skip so
  the total published-episode count still reaches `--weeks`.

## Steps
1. **New season**: run the `season` sub-command first to create/patch
   `data/seasons/<id>.yaml`.
2. **Weekly placeholders**: run the `placeholders` sub-command to scaffold
   one `data/episodes/<season>-week-NN.yaml` per week, each with
   `status: placeholder`, empty `speakers[]`/`tags[]`, and
   `provenance: placeholder:season-schedule`. Example (this is exactly how
   Season 4's 12 weekly placeholders were generated, Aug 10–Nov 2 with the
   Sep 7 Labor Day week skipped):
   ```
   node scripts/update-series.mjs placeholders --season season-4 \
     --start-date 2026-08-10 --weeks 12 \
     --skip-week 2026-09-07="Labor Day break — no episode this week."
   ```
3. As each real episode airs, run the `update-episode` skill against the
   matching placeholder id (or a fresh id) to promote it from `placeholder`
   to `published` with real metadata.
4. Run `npm run validate`, commit, and open a PR.

## Script
`scripts/update-series.mjs` (see script header for full usage/flags).
