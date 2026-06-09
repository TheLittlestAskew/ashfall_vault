# Ashfall Britannia Pipeline Automation — Setup Runbook

Option B: drop an `.mp3` → auto-transcribe → auto spell-check → **you approve** → auto-apply + auto-propagate + auto-push. No `.docx` (Ashfall is markdown-only).

> Adapted from SITL's `PIPELINE_SETUP.md`. Substitute the Ashfall file/script names throughout.

---

## 1. Where each file goes

| File (from this build) | Put it here in the vault |
|---|---|
| `ashfall_pipeline_watch.js` | `Workflows\scripts\` (run it from here) |
| `Automation\convo1_phaseA.md` | `Workflows\Project\Automation\` |
| `Automation\convo1_phaseB_apply.md` | `Workflows\Project\Automation\` |
| `Automation\convo2_propagate.md` | `Workflows\Project\Automation\` |
| `mcp.json` | vault root, **renamed to** `.mcp.json` (already in place) |

The watcher auto-creates `_pipeline\` (scratch/review files) on first run.

---

## 2. One-time setup (≈15 min, do once)

1. **Install Claude Code** if you haven't: `npm install -g @anthropic-ai/claude-code`, then run `claude` once in the vault and log in.
2. **Install the watcher dependency:** open a terminal in `Workflows\scripts\` and run `npm install chokidar`.
3. **Supabase token (for unattended roll queries):**
   - Generate a Personal Access Token at `https://supabase.com/dashboard/account/tokens`.
   - Set it as a Windows **user** environment variable named `SUPABASE_ACCESS_TOKEN` (search "Edit environment variables for your account"). Open a fresh terminal after.
   - This keeps the token out of the repo — `.mcp.json` only references `${SUPABASE_ACCESS_TOKEN}`.
4. **Verify the MCP:** in the vault root run `claude` then `/mcp` — `supabase` should show connected. Ask it to run a quick `SELECT COUNT(*) FROM ashfall_session_rolls;` to confirm.
5. **Open `ashfall_pipeline_watch.js` and check the CONFIG block** — especially `RAW_DIR` (the transcriber writes to `Session_Sources\Transcripts\Raw_Unedited\`) and confirm `TRANSCRIBE_CWD` points at `Workflows\scripts\ashfall_transcribe\` (the folder holding the Ashfall transcriber).
6. **`.gitignore`:** add `_pipeline/` (transient scratch). **Also add `*.env`** — this repo is PUBLIC, so no key file may ever be committed. `.mcp.json` has no secret in it, so committing it is optional/safe.
7. **`.docx` removal:** N/A for Ashfall — `.docx` generation was already retired (06/06/2026). The instruction docs already point at the markdown note. (See §3 only if a stray `ashfall_v1.js` step reappears.)

---

## 3. Confirm `.docx` is gone from the instructions (verify once)

Ashfall's instruction files should already be markdown-only. Verify: grep `Workflows/Project/` for `docx` and `ashfall_v1` — only the "RETIRED" notes in `Session_Notes_Template_Instructions.md` and the Convo/Project docs should remain. If any live generation step reappears, open `claude` in the vault root and paste:

```
Strip any live .docx generation from the Ashfall workflow instruction files in Workflows/Project/. The canonical session-notes artifact is the 01-Sessions markdown note. Keep only the RETIRED historical note for ashfall_v1.js. Use surgical edits. Show me a diff of each file before saving. Change nothing else.
```

---

## 4. Daily use

1. **Start the watcher** (leave the window open): from `Workflows\scripts\` run
   `node ashfall_pipeline_watch.js`
2. **Drop the session `.mp3`** into `Session_Sources\Recordings\`.
3. Wait. It transcribes, runs the spell-check pass, then **beeps + prints `READY FOR REVIEW`**.
4. **Review** `_pipeline\S##\spellcheck.md` (and `flags.md`). Edit the table directly if a correction is wrong — your edits are treated as final. Pay special attention to first-seen proper nouns (this is an original setting with no canon spelling list).
5. **Approve:** run `node ashfall_pipeline_watch.js --approve`. It applies corrections, writes the markdown note, propagates the whole vault, and pushes to GitHub.

That's the only manual step: the spell-check glance. Everything else is hands-off.

---

## 5. Two things to know

- **Billing (kicks in June 15, 2026):** headless `claude -p` usage on subscription plans draws from a separate monthly Agent SDK credit pool, distinct from your interactive limits. This whole pipeline runs on `claude -p`, so heavy session-processing pulls from that pool.
- **Permissions:** the watcher uses `--permission-mode acceptEdits` (auto-accepts file edits). If the Phase-B / Convo-2 legs stall asking to confirm a `git push` or bash command, change `CLAUDE_FLAGS` to `--dangerously-skip-permissions` (fully unattended) **or** scope it, e.g. `--allowedTools "Read,Edit,Write,Bash(git*),Bash(node*)"`. Start with acceptEdits; only loosen if it actually blocks.

---

## 6. What changed vs. the old flow

- Vault writes are **native file edits** in Claude Code — no Obsidian MCP, no timeouts, no read/draft/write phasing.
- GitHub is a **plain `git push`** — the old ~15–21KB inline-push ceiling and blob-SHA ritual were GitHub-*MCP* artifacts and don't apply to local git.
- Supabase stays via MCP (read-only, scoped to your project; the `ashfall_session_rolls` view).
- Convo 1 writes the `01-Sessions` markdown note directly (no redundant rebuild in Convo 2), and **no `.docx` is produced anywhere.**
- **Public repo:** keep secrets out. `*.env` is git-ignored; if a key ever lands in history, rotate it and scrub.
