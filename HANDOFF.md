# HANDOFF — ashfall_vault

> Obsidian D&D vault for the "Ashfall Britannia" campaign (Tayls is a PLAYER, not the DM). Includes ddb-roll-sync and Site_HTML.
> Handoff is **enabled** for this repo. Every change updates the DO NEXT block below and prepends a log entry.
> Note: this is a notes/content vault — most session-note edits won't have a "next dev step." Use the DO NEXT block for things like next-session prep if useful, or leave it as "—".

## ▶ DO NEXT — S10 is waiting on your review
🛑 **Convo 1 Phase A stopped at the review gate.** Open `_pipeline/S10/` and read, in order:
- `summary.md` — S10 confirmed as **2026-06-15**, all 7 players present, 73 min, starts mid-combat (direct continuation of the S09 Grand Library fight).
- `spellcheck.md` — **29 proposed corrections, 19 at/under 60%.** Nothing applied. Approve, edit, or reject.
- `flags.md` — the three that actually need answers: **(a)** the party jumps **level 8 → 10** with a 35-day gap and no recording since S09, which may mean an unrecorded session and a shifted session number; **(b)** is `Tink` a separate enemy from `Taint`, or the same token — it decides three correction rows; **(c)** the speaker→character mapping is *inferred*, not stated, and Phase B hard-codes it into the script-format transcript.

Once approved, run Convo 1 Phase B (apply corrections → corrected transcript → Supabase roll cross-ref → 8-section notes).

⚠️ `_pipeline/` is gitignored, so none of the above is in git — it lives only on this machine.

---

### Standing work order (still pending, from the 2026-07-04 vault audit)
1. ⚡ **Check the recording app** (standing flag from Session 09: only Taylor's mic captured, no Discord audio). Test before Monday.
2. **Claude Code migration (from 2026-07-04 audit):** unify 10 session notes to the adopted superset schema — add `type: session`; rename `session:` → `session_number:` and `date:` → `session_date:`; kebab keys → snake (`party-level` → `party_level`, `roll-archive-date` → `roll_archive_date`). Ashfall notes carry no `type:` today, so this vault's DnD.base Sessions view currently matches ZERO notes.
3. **Publish command (new):** `Workflows/scripts/Publish-Ashfall.cmd` commits + pushes all note changes; the site fetches session notes straight from this repo's main, so push = publish (~5 min CDN).
4. **Inside Obsidian (never shell):** create `Templates/` and move the six root template stubs into it (they show as phantom blank rows in DnD.base); create `06-Media/` and move the two battle-map PNGs at root into it; move the `ddb-roll-sync/` extension folder under `Workflows/` to match SITL/WTFF layout.
5. **Parity items:** add `Workflows/_Workflows Index.md` and an `Onboard Ashfall Britannia.md` (mirror the SITL/WTFF versions).

---

## Log
<!-- newest first · one entry per logical task/session · timestamp · source · changed · commit · next -->

### 2026-08-03 10:55 ET · Claude Code
- **Changed:** Ran Convo 1 **Phase A only** for Session 10 (061526) and stopped at the human-review gate as instructed — no corrections applied, no notes, no Supabase, no Convo 2. Wrote `spellcheck.md` (29 proposals, 19 capped at ≤60% under the no-external-canon rule for first-seen proper nouns), `flags.md`, `summary.md`, and the `READY_FOR_REVIEW` marker into `_pipeline/S10/`. Also banked the transcriber's model bump to `universal-3-5-pro` (AssemblyAI deprecated `universal-3-pro`) and the watcher's new `--file` one-off mode, both of which were sitting uncommitted.
- **Commit:** `40d7e28`
- **Friction:** gen-fail — Grep's `-C` context output rendered `//` comments in `transcribe.js` as a stray `\`, and I logged a nonexistent syntax bug in `flags.md` before catching it. `Read` on the same lines showed the file was clean. Confirm apparent syntax breakage with Read, never from Grep context output.
- **Friction:** gen-fail — compound Bash calls (`cd X && git add -A && git commit`) got permission-blocked mid-chain, so the `add` silently never ran and the commit died with "no changes added to commit." Worked as separate un-chained `git -C "<path>" …` calls through the PowerShell tool.
- **Next:** Taylor reviews `_pipeline/S10/spellcheck.md` + `flags.md`, then approve to run Phase B.
- **Watch out:** ⚠️ `_pipeline/` is in `.gitignore`, so the entire Phase A review packet is untracked and local-only. It will not survive a clone, and a `git clean -xdf` would delete it.

### 2026-07-29 20:40 ET · Claude Code
- **Changed:** Removed the retired duplicate `ddb-roll-sync` extension from `Workflows/ddb-roll-sync/` and `ddb-roll-sync/`, 11 files including a stray annotation xlsx. Every copy across the vaults had drifted to a different version, so it is consolidated in one place and writes direct to Rectrix_Caedere. Found by a cross-repo handoff sweep; the deletions were already sitting uncommitted in the working tree and Taylor confirmed they were deliberate.
- **Commit:** `e0682ed`
- **Next:** Unchanged. See the pre-session checklist in the block above this log.
- **Watch out:** ⚠️ This was a *deletion* commit banked on Taylor's confirmation, not on my own reading of the tree. If a copy of the extension is still needed here, it is in git history at the parent of `e0682ed`.

### 2026-07-26 11:44 ET · Claude Code
- **Changed:** Added the Handoff Contract to `AGENTS.md` so Codex follows it. Codex reads `AGENTS.md`, never `~/.claude/skills/`, so it had no handoff instructions at all before this.
- **Commit:** `b25d604`
- **Next:** Unchanged. See the block above this log.
- **Watch out:** Log entries must now carry a tool label (`Claude Code` / `Claude desktop` / `Codex` / `ChatGPT`). Do not restructure this file; the dashboard parses it.

### 2026-07-04 ET · Claude chat
- **Changed:** Added `Workflows/scripts/Publish-Ashfall.cmd` (one-command note publish). Rewrote DO NEXT as the pre-Monday work order from the 2026-07-04 three-vault consistency audit (missing `type:` frontmatter, no Templates folder, root clutter, workflow-doc parity gaps).
- **Commit:** `Add Publish-Ashfall.cmd; DO NEXT = pre-Monday work order (vault audit)`
- **Next:** Item 1 anytime before Monday; item 2 in Claude Code.
- **Watch out:** item 4 moves must happen inside Obsidian so wikilinks update; never via shell or file tools.

### 2026-06-23 09:37 ET · Claude chat
- **Changed:** Enabled repo handoff — added this `HANDOFF.md` at root.
- **Commit:** `docs: enable repo handoff`
- **Next:** Set by the next real change to the repo.
