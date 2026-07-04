# HANDOFF — ashfall_vault

> Obsidian D&D vault for the "Ashfall Britannia" campaign (Tayls is a PLAYER, not the DM). Includes ddb-roll-sync and Site_HTML.
> Handoff is **enabled** for this repo. Every change updates the DO NEXT block below and prepends a log entry.
> Note: this is a notes/content vault — most session-note edits won't have a "next dev step." Use the DO NEXT block for things like next-session prep if useful, or leave it as "—".

## ▶ DO NEXT — before Monday's session (2026-07-06), in order
1. ⚡ **Check the recording app** (standing flag from Session 09: only Taylor's mic captured, no Discord audio). Test before Monday.
2. **Claude Code migration (from 2026-07-04 audit):** unify 10 session notes to the adopted superset schema — add `type: session`; rename `session:` → `session_number:` and `date:` → `session_date:`; kebab keys → snake (`party-level` → `party_level`, `roll-archive-date` → `roll_archive_date`). Ashfall notes carry no `type:` today, so this vault's DnD.base Sessions view currently matches ZERO notes.
3. **Publish command (new):** `Workflows/scripts/Publish-Ashfall.cmd` commits + pushes all note changes; the site fetches session notes straight from this repo's main, so push = publish (~5 min CDN).
4. **Inside Obsidian (never shell):** create `Templates/` and move the six root template stubs into it (they show as phantom blank rows in DnD.base); create `06-Media/` and move the two battle-map PNGs at root into it; move the `ddb-roll-sync/` extension folder under `Workflows/` to match SITL/WTFF layout.
5. **Parity items:** add `Workflows/_Workflows Index.md` and an `Onboard Ashfall Britannia.md` (mirror the SITL/WTFF versions).

---

## Log
<!-- newest first · one entry per logical task/session · timestamp · source · changed · commit · next -->

### 2026-07-04 ET · Claude chat
- **Changed:** Added `Workflows/scripts/Publish-Ashfall.cmd` (one-command note publish). Rewrote DO NEXT as the pre-Monday work order from the 2026-07-04 three-vault consistency audit (missing `type:` frontmatter, no Templates folder, root clutter, workflow-doc parity gaps).
- **Commit:** `Add Publish-Ashfall.cmd; DO NEXT = pre-Monday work order (vault audit)`
- **Next:** Item 1 anytime before Monday; item 2 in Claude Code.
- **Watch out:** item 4 moves must happen inside Obsidian so wikilinks update; never via shell or file tools.

### 2026-06-23 09:37 ET · Claude chat
- **Changed:** Enabled repo handoff — added this `HANDOFF.md` at root.
- **Commit:** `docs: enable repo handoff`
- **Next:** Set by the next real change to the repo.
