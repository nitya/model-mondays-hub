# Creating and pinning the "Data Ops" issue

The Model Mondays Hub uses one permanently-open GitHub issue as the entry
point for agent-driven data updates (speakers, episodes, seasons). Comments
on this issue trigger `.github/workflows/issue-command.yml`, which assigns
the issue to the GitHub Copilot cloud agent to run the matching skill under
`skills/` and open a PR.

## One-time setup

1. **Create the issue.** Go to Issues → New issue → "Data Ops" template
   (`.github/ISSUE_TEMPLATE/data-ops.yml`). Leave the title as `Data Ops`.
   Submit it.
2. **Pin it.** On the issue page, click the `•••` menu → "Pin issue". This
   keeps it visible at the top of the Issues list so it's easy to find and
   comment on.
3. **Do not close it.** It should stay open indefinitely — it's a standing
   command surface, not a task to resolve.
4. **Confirm the `data-ops` label exists** (the template applies it
   automatically) — the `issue-command.yml` workflow only reacts to comments
   on issues carrying this label, so other issues/PRs are unaffected.

## Using it

Comment on the pinned issue with one of:

```
update speaker https://www.linkedin.com/in/janedoe title:"Field CTO" company:"Acme"
update episode https://www.youtube.com/watch?v=XXXXXXXXXXX season:season-4 speakers:a,b tags:c,d
update series season id:season-5 number:5 title:"Season 5" start:2027-02-01
update series placeholders season:season-5 start:2027-02-01 weeks:12 skip:2027-04-19=Spring break
```

See `skills/*/SKILL.md` for the full input/flag reference behind each
command, and `.github/workflows/issue-command.yml` for exactly how the
comment is parsed and dispatched.

## Related manual setup

This flow additionally requires:
- Enabling the Copilot cloud agent for the repo (Settings → Copilot →
  Cloud agent).
- A `COPILOT_ASSIGN_PAT` repository secret (a fine-grained PAT belonging to a
  user with Copilot cloud agent access) so the workflow can assign issues to
  Copilot via the API. Without it, the workflow still posts a comment
  identifying the parsed command so a maintainer can assign the issue to
  Copilot by hand.

See `.github/copilot-instructions.md` and the root `README.md` for the full
setup checklist (also covers `YOUTUBE_API_KEY` and GitHub Pages).
