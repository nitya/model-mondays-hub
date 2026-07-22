# Skill: update-speaker

## Trigger
- A maintainer comment on the pinned **Data Ops** issue matching:
  `update speaker <url-or-name>` — e.g. `update speaker https://www.linkedin.com/in/janedoe`
  or `update speaker Jane Doe, Field CTO at Acme`.
- A direct ask like "add a speaker record for ..." or "fix Jane Doe's bio".

## Inputs
- `name` (required) — full display name.
- Optional: `id` (slug; derived from name if omitted), `title`, `company`, `bio`,
  `avatar`, `role` (`host` | `guest` | `producer`, default `guest`), one or
  more `link platform=url` pairs (`website`, `linkedin`, `twitter`, `github`,
  `mastodon`), `provenance`.
- A LinkedIn/personal-site URL in the trigger comment is treated as a `links`
  value, not scraped for bio text — there's no reliable public API for that.
  Extract name/title/company from the surrounding comment text or ask the
  maintainer to supply them; then run the script.

## Steps
1. Parse the trigger comment/request for the fields above.
2. Run:
   ```
   node scripts/update-speaker.mjs --name "Jane Doe" --title "Field CTO" \
     --company Acme --bio "..." --role guest \
     --link linkedin=https://www.linkedin.com/in/janedoe \
     --provenance "hand-curated:data-ops-issue"
   ```
   This creates `data/speakers/<id>.yaml` if it doesn't exist, or patches only
   the fields you pass if it does (existing fields are preserved).
3. Run `npm run validate` and fix any schema errors it reports.
4. If this speaker is tied to a specific episode, also update that episode's
   `speakers[]` array (see the `update-episode` skill) and re-validate.
5. Commit the new/changed YAML and open a PR (the `issue-command` workflow
   handles this end-to-end when triggered via the Data Ops issue).

## Script
`scripts/update-speaker.mjs` (see script header for full usage/flags).
