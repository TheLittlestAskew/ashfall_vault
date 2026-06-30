/** Session 6 (040126) — auto-advance spell-check. NO DOCX (per Taylor 06/06). */
const fs = require("fs");
const path = require("path");
const VAULT = String.raw`C:\Users\theli\Obsidian Vaults\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "040126 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "040126_AB_Session06_Corrected_Transcript.md");
let text = fs.readFileSync(RAW, "utf-8");
const failures = [];
function rep(f, r, l) { if (!text.includes(f)) { failures.push(l); return; } text = text.split(f).join(r); }

// Corrections (>=85%)
rep("I promised Corey we would do something for the pink moon tonight. She wanted to plant our pomegranate tree.", "I promised Cora we would do something for the pink moon tonight. She wanted to plant our pomegranate tree.", "c1 Cora");
rep("I did promise Corey we would do something for the pink moon", "I did promise Cora we would do something for the pink moon", "c2 Cora2");
rep("Saint Ardis", "Saint Ardas", "c3 Ardis");
rep("make me a death save.", "make me a dex save.", "c4 dexsave"); // confessional door — self-corrected in audio
rep("84 plus 8.", "8d4 plus 8.", "c5 8d4");

const NAMES = {
  A: "Taylor (DM)", B: "Chase (Valerian Hellebore)", C: "Christie (Zelda Whipper)",
  D: "Taylor (Vega Bloodroot)", E: "Doug (Barrett Grimmskar)", F: "Madi (Deanna Smith-Wesson)",
  G: "Josh (Samothy Smith-Wesson)", H: "Jill (Flux)",
};
for (const [k, v] of Object.entries(NAMES)) text = text.split(`SPEAKER ${k}:`).join(`${v}:`);

text = text.replace("# Ashfall Britannia Session Transcript",
  `# Ashfall Britannia — Session 6 — "Protect the Light" — Corrected Transcript
# Session date: 04/01/2026 (rolls keyed 2026-04-01; 51 archived)
# ⚠ NOTE: the file "040226 Ashfall Brittania Recording.mp3" is NOT this campaign —
#   it is a misfiled recording from a different group ("Inspired" program). Excluded.
# Title auto-selected. Madi departed ~00:46 (pink moon with Cora). No docx per Taylor 06/06.
# Log: Session_Sources/Transcripts/Spell_Check_Logs/040126_Spell_Check_Log.md`);
fs.writeFileSync(OUT, text, "utf-8");
console.log("Written. Failures:", failures);
