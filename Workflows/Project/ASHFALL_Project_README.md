# Project/ — Claude Project-Knowledge Mirror

This folder is a **git backup** of the Claude project-knowledge instruction documents for Ashfall Brittania. These docs define how Claude turns raw sessions into the Obsidian vault.

## Why this exists

The instruction docs live inside the Claude project, where no MCP tool can read or write them — they are maintained by hand, which makes them easy to lose. Mirroring them here gives:

- A version-controlled backup and history
- A reference for the table
- A recovery source if a project doc is deleted or corrupted

## Source of truth

**The Claude project is canonical.** This folder is a copy. When you edit an instruction doc in the project, paste the new version here too. If the two ever disagree, the project wins — *unless* the project copy was lost, in which case this folder is the recovery source.

## Standard contents

Every campaign vault uses the same filenames in this folder. A campaign may not need every doc; mark those `n/a` instead of deleting the slot, so the structure stays uniform across vaults.

| Standard filename | Mirrors project doc | Purpose |
|---|---|---|
| `Project_Instructions.md` | master ruleset | Shared rules, constraints, campaign reference |
| `Convo_1_Instructions.md` | Convo 1 instructions | Session-notes generation workflow |
| `Convo_2_Instructions.md` | Convo 2 instructions | Vault-update workflow |
| `Session_Notes_Section_Breakdown.md` | section breakdown | What goes in each notes section |
| `Session_Notes_Template_Instructions.md` | template instructions | Using the notes generator |
| `Convo2_Handoff_Template.md` | handoff template | The Convo 1 → Convo 2 bridge block |

## This vault's status (Ashfall Brittania)

Note: in this campaign you are a **player** (PC: Vega Bloodroot); the DM is a different person (shown as "Taylor (DM)" in session info). The instruction docs reflect that player-side perspective.

| Standard filename | Status |
|---|---|
| `Project_Instructions.md` | ✅ Present (was `ASHFALL_PROJECT_INSTRUCTIONS.md`) |
| `Convo_1_Instructions.md` | ✅ Present (was `ASHFALL_Convo_1_Instructions.md`) |
| `Convo_2_Instructions.md` | ✅ Present (was `ASHFALL_Convo_2_Instructions.md`) |
| `Session_Notes_Section_Breakdown.md` | 🛑 Not in repo — paste from the Ashfall Claude project if it exists there |
| `Session_Notes_Template_Instructions.md` | 🛑 Not in repo — Ashfall uses the `ashfall_v1.js` generator; paste its usage doc from the project if one exists |
| `Convo2_Handoff_Template.md` | 🛑 Not in repo — paste from the Ashfall Claude project, or mark n/a if the handoff is embedded in Convo 1 |

### Extras kept in place (not moved into this folder)

These are **tools the pipeline runs**, not instruction docs, so they stay at `Workflows/`:

- `ashfall_v1.js` — session-notes generator
- `ashfall_transcribe/` — transcription workflow
- `ddb-roll-sync/` — DDB roll-sync Chrome extension

## Sync discipline

Whenever you change an instruction doc in the Claude project:

1. Copy the full new text.
2. Replace the matching file here.
3. Commit (Obsidian Git auto-commits within ~10 min, or push manually).
