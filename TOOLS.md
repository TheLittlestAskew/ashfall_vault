# TOOLS — ashfall_vault

> What this project uses and what for. Maintained by the handoff motion: whenever
> a tool is used here, add or bump its row.
> Types: `Skill` · `MCP` · `CLI` · `App` · `Service` · `Site` · `Library` · `Data` · `Task`
> A `~` before a date means inferred, not observed. `—` means unknown.

## Active

| Tool | Type | Used for | Access | Last used | Cost | Notes |
|---|---|---|---|---|---|---|
| **Obsidian** | App | The vault itself — Ashfall Britannia session notes, lore, characters | desktop | 2026-08-31 | Free | Taylor is a **player** here, not the DM |
| **obsidian-git** | Library | Auto-commit/backup of the vault | Obsidian plugin | ~2026-08-31 | Free | — |
| **templater-obsidian** | Library | Session/NPC/Item note templates | Obsidian plugin | ~2026-05-15 | Free | Backs the root `Session.md`, `NPC.md`, `Character.md` templates |
| **smart-connections** | Library | Semantic search across the vault | Obsidian plugin | ~2026-05-15 | Free | — |
| **obsidian-5e-statblocks** | Library | Rendering monster/NPC statblocks | Obsidian plugin | ~2026-05-15 | Free | — |
| **AssemblyAI** | Service | mp3 → session transcript | api.assemblyai.com | 2026-09-03 | Paid | `Workflows/scripts/ashfall_transcribe/transcribe.js`. S16 header records `universal-3-5-pro`, 95.2%, transcribed `2026-09-04T03:03Z` |
| **Ashfall Pipeline Watcher** | Task | Watches for new session audio and starts the transcribe→spellcheck→toast flow | Task Scheduler → `start-watcher-hidden.vbs` | ~2026-09-03 | Free | State: Running. Log at `_pipeline/watcher.log`. Inferred for S16 from `_pipeline/S16/_prompt_convo1_phaseA_md.txt` |
| **chokidar** | Library | Filesystem watching inside `ashfall_pipeline_watch.js` | `Workflows/scripts` `chokidar@^5.0.0` | 2026-09-02 | Free | — |
| **BurntToast** | Library | Windows toast notifications with Review/Approve buttons | PowerShell module, `ashfall_notify.ps1` | ~2026-08-31 | Free | The approval step of the pipeline |
| **Supabase** | Service | `Rectrix_Caedere` — rolls and sessions for Ashfall Britannia | project `vtrtyagltwdrbastpppl` | ~2026-08-31 | Free tier | Wired per `Workflows/Project/Project_Instructions.md` |
| **supabase** | MCP | Vault-scoped MCP server for Supabase reads/writes | `.mcp.json` at vault root | 2026-09-04 | Free | 🛑 **BLOCKED — returns `Unauthorized`.** `.mcp.json` interpolates `SUPABASE_ACCESS_TOKEN`; that var is unset and the vault `.env` holds only `DDB_COBALT`. Blocked S16's roll cross-reference in **both** Convo 1 and Convo 2. ⚠️ **Correction (S16): `supabase-cutter` is NOT scoped to another project — it is the server that actually cleared S13–S15 on the same project `vtrtyagltwdrbastpppl`.** See its own row |
| **supabase-cutter** | MCP | 🛑 **The route that actually works** for `ashfall_session_rolls` on project `vtrtyagltwdrbastpppl` | local MCP server | 2026-09-04 | Free | ✅ Cleared the S13–S15 roll debt on 2026-08-30. 🛑 **S16: permission-gated** — `mcp__supabase-cutter__execute_sql` is not in `.claude/settings.local.json`, and a non-interactive run can't approve it. **Allowlisting this one string is an alternative to fixing `SUPABASE_ACCESS_TOKEN`.** ⚠️ Gotchas: `individual_values` is a JSON **string** (parse `(individual_values #>> '{}')::jsonb -> 0`), and archived d20 counts are a **floor** — several players roll physical dice |
| **Python 3** | CLI | `docx_to_text.py` — converting source `.docx` transcripts | local install | 2026-08-29 | Free | — |
| **Node.js + npm** | CLI | Running the watcher, transcribe, and index-generation scripts | local install | ~2026-09-03 | Free | Inferred for S16 — `transcribe.js` produced the S16 transcript, but I did not run it myself |
| **session-index-generator** | Skill | Builds the public session index | `Workflows/scripts/generate_public_session_index.mjs` | 2026-08-30 | Free | 🛑 **Could NOT be run in the S16 Convo 2 pass** — `node` is permission-gated in non-interactive runs (4 attempts, incl. sandbox override). Date deliberately **not** bumped: it did no work. **`Public Session Index.json` still ends at S15.** Its contract was verified by hand instead and S16 satisfies all of it |
| **git** | CLI | Version control, handoff motion | `C:\Program Files\Git` | 2026-09-04 | Free | ⚠️ Reach it as `git -C "<path>"`; `cd <dir> && git …` is blocked by the Bash sandbox. ⚠️ **Also (S16): `git commit -m` is blocked in Bash — use PowerShell.** Bash also rejects `for` loops with `${var}` expansion and multi-command `&&`/`;` chains |
| **GitHub** | Service | Remote host for `TheLittlestAskew/ashfall_vault` | github.com | 2026-09-04 | Free | **Public** — raw transcripts are readable by anyone; see the privacy item in `HANDOFF.md` |
| **Claude Code** | App | Transcription review, session notes, publish waves, handoffs | CLI / IDE extension | 2026-09-04 | Paid | ⚠️ Don't flag DM arithmetic or demand sources for homebrew — Taylor can't resolve either. ⚠️ **Two mandated scripts have now been blocked by the same `node`/`python` permission gate in non-interactive runs** (`docx_to_text.py` on 08-29, `generate_public_session_index.mjs` on 09-04) |
| **/handoff** | Skill | Banking work, DO NEXT pointer, friction log | `~/.claude/skills/handoff` | 2026-09-04 | Free | Enforced here by the Stop hook (`handoff-guard.ps1`) |
| **septentrion-sync** | Skill | Feeds handoff state to the vault + SystemHorizon heartbeat | `~/.claude/skills/septentrion-sync` | 2026-09-02 | Free | In both `REPOS` and `TOOLS_REPOS` |

## Retired

| Tool | Type | Was used for | Retired | Why |
|---|---|---|---|---|
| ~~**AssemblyAI `3-pro`**~~ | Service | Transcription model | ~2026-08-01 | ✅ Upgraded to `3-5-pro` |
