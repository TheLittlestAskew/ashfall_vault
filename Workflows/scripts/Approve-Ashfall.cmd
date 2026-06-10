@echo off
rem Applies the reviewed spell-check, generates the note, propagates the vault, and pushes.
rem Launched by the "Approve & apply" toast button, the status-window button, or directly.
title Ashfall - Approve session
cd /d "C:\Users\theli\ashfall_vault\Workflows\scripts"
echo Approving the pending Ashfall session (Phase B + Convo 2)...
echo.
"C:\Program Files\nodejs\node.exe" ashfall_pipeline_watch.js --approve
echo.
echo Done. You can close this window.
pause
