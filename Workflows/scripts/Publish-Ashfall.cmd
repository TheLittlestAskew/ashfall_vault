@echo off
setlocal
REM Publish-Ashfall.cmd - regenerate the public session index, then commit and push.
REM The website reads session notes AND Public Session Index.json directly from
REM this repo's main branch, so a successful push IS the publish.
REM Allow ~5 minutes for CDN cache.
cd /d "%~dp0..\.."

REM --- Step 1: regenerate the public session index -------------------------
REM Added 2026-08-31. Without this the site silently shows stale data - the
REM notes get pushed but the index still describes an older session list, and
REM the new session never appears. The index is the ONLY thing the site reads
REM for the session list.
REM NOTE (Ashfall-specific): the generator reads 00-Campaign-Hub\Campaign Dashboard.md,
REM NOT 01-Sessions\. A session needs a Dashboard ROW *and*, for sessions >= 10,
REM Quote Board / Loot Tracker / Profanity Ledger blocks - or this step fails and
REM the publish is deliberately blocked.
echo Regenerating Public Session Index.json ...
node "Workflows\scripts\generate_public_session_index.mjs"
if errorlevel 1 (
  echo.
  echo INDEX GENERATION FAILED - nothing has been committed or pushed.
  echo Most likely cause: a session has a Campaign Dashboard row but is missing
  echo its session note or one of the three required tracker blocks.
  echo Fix what it reported above, then rerun this file.
  pause
  exit /b 1
)
echo.

REM --- Step 2: commit and push --------------------------------------------
git add -A
git diff --cached --quiet
if %errorlevel%==0 (
  echo Nothing to publish - no changes since last push.
  pause
  exit /b 0
)
git commit -m "notes: publish %DATE% %TIME%"
git pull --rebase origin main
if errorlevel 1 (
  echo PULL FAILED - resolve conflicts in Obsidian Git, then rerun this file.
  pause
  exit /b 1
)
git push origin main
if errorlevel 1 (
  echo PUSH FAILED - check network/credentials and rerun.
  pause
  exit /b 1
)
echo Published. Site reflects changes within ~5 minutes.
pause
