# Ashfall Britannia — Convo 2 Instructions (Vault Updates)

**Last updated:** 06/05/2026
**Adapted from:** `SITL_Convo_2_Instructions_v2.md`

This document defines the step-by-step workflow for **Convo 2**: propagating a completed session's information across the Obsidian vault after notes have been generated in Convo 1. It is a companion to the **Ashfall Britannia master ruleset** and assumes all shared rules and constraints from that file apply here.

---

## ⟦FILL⟧ INDEX — finish these once, then delete this block

1. `C:\Users\theli\ashfall_vault` — local Obsidian path (convention: `C:\Users\theli\ashfall_vault\`)
2. `ashfall-vault` — Obsidian MCP vault name (convention: `ashfall-vault`, hyphenated)
3. `https://github.com/TheLittlestAskew/ashfall_vault`
4. `⟦FILL: starting session range⟧` — first tracker file range (e.g. `S01-S10`) given the campaign is already mid-run
5. `⟦FILL: Vega journal voice guide⟧` — the Ashfall analog of `kit-pov-journal`

---

## PURPOSE

Convo 2 takes the completed session notes (`.docx` from Convo 1) and propagates all new information across the Obsidian vault so every page stays current. The vault is the campaign wiki — **if it isn't in the vault, it doesn't exist for future reference.**

---

## PREREQUISITES

1. **The Convo 2 Handoff Block** — pasted from the end of Convo 1.
2. **The completed session notes** — the `.docx` from Convo 1, or its content pasted/uploaded here.
3. **Vault access** — Obsidian MCP (vault `ashfall-vault`) **or** Filesystem MCP at `C:\Users\theli\ashfall_vault`.

If vault access is unresponsive, say so immediately. Do not draft vault updates from memory without verifying current vault state.

> **Reliability note (carried from SITL):** the Obsidian MCP times out on large files. Filesystem MCP at the vault path is the reliable fallback for reads/writes. `read_multiple_files` for batch reads; `edit_file` for targeted updates (never blind `write_file` over a large existing file); `write_file` for new/small files.

---

## VAULT REFERENCE

**Vault path:** `C:\Users\theli\ashfall_vault`  •  **MCP vault name:** `ashfall-vault`

**Folder structure (mirror of SITL):**
```
ashfall-vault/
├── 00-Campaign-Hub/
│   ├── Campaign Dashboard.md
│   ├── House Rules & Rulings.md
│   ├── Vault Format Reference.md
│   ├── Vault Sync Status.md
│   └── Trackers/
│       ├── Loot Tracker ⟦range⟧.md
│       ├── Quote Board ⟦range⟧.md
│       ├── Profanity Ledger ⟦range⟧.md
│       └── Roll Statistics ⟦range⟧.md
├── 01-Sessions/                 # Session ## — Title.md (one per session)
├── 02-Character_Journal/        # Vega Bloodroot Journal.md
├── 03-Characters/
│   ├── PCs/                     # 7 PC pages
│   └── NPCs/                    # incl. Lt. Hargraven
├── 04-World-Lore/Locations/
├── 05-Mechanics/
├── 07-Flora_Fauna/
│   ├── Creatures/
│   └── Plants_Fungi/
├── DND_Sources/
├── Session_Sources/Transcripts/
│   ├── Raw_Unedited/
│   ├── Corrected/
│   └── Spell_Check_Logs/
└── Workflows/
```

**Tracker rotation:** trackers split every ~10 sessions. Start with `⟦FILL: starting session range⟧`; when a session exceeds the active file's range, create the next file (e.g. `Loot Tracker S11-S20.md`) and append there.

---

## PC ROSTER (for page creation / backlinks)

`[[Vega Bloodroot]]` (Taylor) · `[[Barrett Grimmskar]]` · `[[Deanna Smith-Wesson]]` · `[[Flux]]` · `[[Samothy Smith-Wesson]]` · `[[Valerian Hellebore]]` · `[[Zelda "Z" Whipper]]`
Key NPC: `[[Lt. Hargraven]]` (DM-voiced ally).

---

## MCP TOOLS

| Tool | Use For |
|---|---|
| `read-note` / Filesystem `read_file` | Read a specific file |
| `edit-note` / Filesystem `edit_file` | Append / prepend / replace in an existing file |
| `create-note` / Filesystem `write_file` | Create a new file |
| `search-vault` | Search by content / filename / tag |
| `create-directory` | New folders |
| `move-note` | Move / rename |

---

## PHASED EXECUTION

Split into three phases so a timeout during reads doesn't lose write progress, and vice-versa.

### PHASE 1 — READ
Read everything needed and save locally. Log every successful read to `/home/claude/convo2_progress.md` so restarts don't repeat work.

**Step 0:** Read the handoff block; confirm vault access; create the progress file.

**Step 1 — core reference reads (every session):**

| # | File | Folder | Why |
|---|---|---|---|
| 1 | `Vault Sync Status.md` | `00-Campaign-Hub` | Confirm last synced session, find gaps |
| 2 | `Vault Format Reference.md` | `00-Campaign-Hub` | All append formats/templates in one read |
| 3 | `Campaign Dashboard.md` | `00-Campaign-Hub` | Current threads, NPCs, timeline |
| 4 | `Vega Bloodroot.md` | `03-Characters/PCs` | Full Inner Life & Evolution for emotional-state update |
| 5 | `Vega Bloodroot Journal.md` | `02-Character_Journal` | Collapsible-section format + last entry |

**Step 2 — conditional reads:**
- NPC pages with major status changes (death, capture, revelation) → read full page.
- Revisited locations with significant new events → read; skip if just passed through.
- Other PC pages → use `search-vault` for the last session header (e.g. `### S15`) to confirm existence + append point without a full read (one search covers all PCs).

After reads: state "Phase 1 complete. Read [X] files. Ready to draft."

### PHASE 2 — DRAFT (no MCP calls)
Draft ALL updates as structured blocks, organized by file, with exact content to be written. Present the full plan to Taylor before any writes.

Work in this order:
1. **Session Notes Markdown** → `01-Sessions/Session ## — Title.md` (CREATE). Full 8-section markdown with frontmatter and `[[backlinks]]` for all PCs, NPCs, locations, cross-session refs. Em dash (—) in filename; match Convo 1 title exactly.
2. **Campaign Dashboard** (EDIT): sessions table row · NPC/antagonist additions+status · new locations · open/resolved/superseded threads · in-game timeline.
3. **Trackers** (Loot / Quote Board / Profanity Ledger / Roll Stats) — per the Vault Format Reference formats.
4. **POV Journal** → `02-Character_Journal/Vega Bloodroot Journal.md` (append collapsible section). Voice per `⟦FILL: Vega journal voice guide⟧`; POV Hard Limits apply.
5. **PC pages** — all present PCs updated (abilities, inventory, relationships, events, quotes).
6. **NPC pages** — new created, existing updated.
7. **Locations / Flora-Fauna / Mechanics** — as applicable.

### PHASE 3 — WRITE
Execute writes in this order: **creates first** (session note, new NPCs/locations/creatures, new tracker files) → **appends second** (trackers, journal, PC key events) → **edits last** (Dashboard, Vega Inner Life, NPC status changes, House Rules) → **Vault Sync Status always final.** Log each write to the progress file.

If a write times out: do **not** retry blindly. Verify with `search-vault`; if it landed, move on; if not, retry once; two failures → add to a "manual apply" block for Taylor.

---

## BACKLINK & FILE-NAMING CONVENTIONS

- Characters: `[[Vega Bloodroot]]`, `[[Lt. Hargraven]]`
- Sessions: `[[Session 01 — Title]]` (em dash); display override: `[[Session 11 — Long_Title|Session 11]]`
- Locations / creatures: `[[Place Name]]`, `[[Creature Name]]`

| Type | Convention | Example |
|---|---|---|
| Session notes | `Session ## — Title.md` | `Session 16 — The Ashen Road.md` |
| PC / NPC pages | `Character Name.md` | `Vega Bloodroot.md` |
| Locations | `Location Name.md` | — |
| Trackers | `[Tracker] S##-S##.md` | `Loot Tracker S11-S20.md` |

---

## CATCH-UP MODE (relevant now)

Ashfall is **already mid-campaign** (roll data runs Nov 2025 → May 2026) and transcripts are not yet generated, so the vault is being filled retroactively. If Vault Sync Status shows gaps, process sessions in **chronological order**. If Taylor asks to catch up a single file across many sessions (e.g. "Roll Stats is 6 behind"), focus on that one file across the gap rather than full propagation per session.

---

## COMPLETION CRITERIA

A session is fully synced when every row is ✅ (or ➖ if not applicable):

| # | Item | Target | "Done" Means |
|---|---|---|---|
| 1 | Session Note | `01-Sessions/Session ## — Title.md` | Full markdown, 8 sections, backlinks |
| 2 | Corrected Transcript | `Session_Sources/Transcripts/Corrected/` | Present in vault (from Convo 1) |
| 3 | Dashboard | `00-Campaign-Hub/Campaign Dashboard.md` | Row + NPCs/locations/threads/timeline |
| 4 | Loot Tracker | active tracker file | Session section, all items |
| 5 | Quote Board | active tracker file | Verbatim quotes + tags |
| 6 | Profanity Ledger | active tracker file | Section + running totals |
| 7 | Roll Stats | active tracker file | Session row, per-character breakdowns, records |
| 8 | POV Journal | `02-Character_Journal/Vega Bloodroot Journal.md` | Collapsible section added |
| 9 | PC Pages | `03-Characters/PCs/*.md` | All present PCs updated |
| 10 | NPC Pages | `03-Characters/NPCs/*.md` | New created, existing updated |
| 11 | Locations | `04-World-Lore/Locations/*.md` | New created, revisited updated |
| 12 | Flora/Fauna | `07-Flora_Fauna/` | New created, existing updated |
| 13 | Mechanics | `00-Campaign-Hub/House Rules & Rulings.md` | New rulings (if any) |

**Vault Sync Status updated LAST**, with ✅/➖ for all columns and a change-log entry.

---

## WHAT CONVO 2 DOES NOT DO

- Does not re-read transcripts (content comes from Convo 1 notes + handoff).
- Does not generate `.docx` files (Convo 1's job).
- Does not spell-check (Convo 1's job).
- Does not modify files outside the vault.
- **May** query Supabase (`ashfall_session_rolls`) if roll data is missing from the handoff — a separate connection that doesn't affect MCP stability.
