# Project/ — Claude Project-Knowledge Mirror

This folder is a **git backup** of the Claude project-knowledge instruction documents for **Ashfall Britannia**. These docs define how Claude turns raw sessions into the Obsidian vault.

> **Spelling note.** The campaign's canonical name is **Ashfall Britannia**. The `ddb_campaigns` database row stores it as **Ashfall Brittania** (a typo). Queries use `campaign_id = 3` / the `ashfall_session_rolls` view, which sidestep the string — so the typo only matters for the `syncCampaign('Ashfall Brittania', token)` call.

## Why this exists

The instruction docs live inside the Claude project, where no MCP tool can read or write them — they are maintained by hand, which makes them easy to lose (it has happened). Mirroring them here gives:

- A version-controlled backup and history
- A reference for the table
- A recovery source if a project doc is deleted or corrupted

> ⚠️ **This repo is PUBLIC.** Do not commit secrets (API keys, tokens) here. Keep `*.env` out of the repo via `.gitignore`. (SITL's `sitl_vault` is private; Ashfall's is not — this is the one place the two campaigns differ on handling.)

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

## This vault's status (Ashfall Britannia)

Note: in this campaign you are a **player** (PC: Vega Bloodroot); the DM is a different person (shown as "Taylor (DM)" in session info). The instruction docs reflect that player-side perspective.

| Standard filename | Status |
|---|---|
| `Project_Instructions.md` | ✅ Present (full master ruleset) |
| `Convo_1_Instructions.md` | ✅ Present (standard name) |
| `Convo_2_Instructions.md` | ✅ Present (standard name) |
| `Session_Notes_Section_Breakdown.md` | ✅ Present (standard name) |
| `Session_Notes_Template_Instructions.md` | ✅ Present — marked RETIRED (Ashfall is markdown-only; `ashfall_v1.js` kept for historical S01–S05) |
| `Convo2_Handoff_Template.md` | ✅ Present (standard name) |

### Also present (beyond the standard set)

- `Ashfall_Vault_Structure_Guide.md` — vault structure reference (mirrors SITL's `SITL_Vault_Structure_Guide.md`)
- `PIPELINE_SETUP.md` — automation runbook (drop `.mp3` → transcribe → approve spell-check → auto-propagate → push)
- `ADDENDUM_AssemblyAI_Transcription_Process.md` — transcription tooling notes
- `Automation/` — the non-interactive pipeline prompts (`convo1_phaseA.md`, `convo1_phaseB_apply.md`, `convo2_propagate.md`)
- `app.js` — **site** file parked here for local-Git deploy to `rectrixcaedere` (not an instruction doc)

### Tools the pipeline runs (kept under `Workflows/`, not here)

- `Workflows/scripts/ashfall_v1.js` — session-notes `.docx` generator (retired; see above)
- `Workflows/scripts/ashfall_transcribe/` — AssemblyAI transcription workflow
- `Workflows/scripts/ashfall_pipeline_watch.js` — the drop-an-mp3 automation watcher (see `PIPELINE_SETUP.md`)
- `Workflows/ddb-roll-sync/` — DDB roll-sync Chrome extension (left in place — moving it would break the Chrome "load unpacked" path)
- `Workflows/scripts/ddb_party_sync.js` — fetches the party's DDB character sheets into the vault (see `Workflows/scripts/DDB_PARTY_SYNC.md`)

## See also

- [`../TRIGGERABLE_ACTIONS.md`](../TRIGGERABLE_ACTIONS.md) — index of every triggerable
  action in `Workflows/` (session pipeline, transcription, party-sheet & roll sync, the
  notes-doc generator, the watcher task): what each does and how to fire it.

## Sync discipline

Whenever you change an instruction doc in the Claude project:

1. Copy the full new text.
2. Replace the matching file here.
3. Commit (Obsidian Git auto-commits within ~10 min, or push manually).
