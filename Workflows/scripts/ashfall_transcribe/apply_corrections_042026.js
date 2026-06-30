/** Session 7 (042026) — auto-advance spell-check. */
const fs = require("fs");
const path = require("path");
const VAULT = String.raw`C:\Users\theli\Obsidian Vaults\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "042026 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "042026_AB_Session07_Corrected_Transcript.md");
let text = fs.readFileSync(RAW, "utf-8");
const failures = [];
function rep(f, r, l) { if (!text.includes(f)) { failures.push(l); return; } text = text.split(f).join(r); }

rep("I'm gonna grab the sun chart", "I'm gonna grab the Sun Shard", "c1 sun chart");
rep("spin around and take another shot at Robbie.", "spin around and take another shot at thrall B.", "c2 Robbie");
rep("what happened to, um, Captain Potty? Hardgrove, wasn't he with us?", "what happened to, um, Captain Potty? Hargraven, wasn't he with us?", "c3 Hargraven");
rep("Um, violent image, that be it.", "Um, Silent Image, that'd be it.", "c4 silent image");
rep("Like a sun shard? Like what we're supposed to be collecting?", "Like a Sun Shard? Like what we're supposed to be collecting?", "c5 caps");

const NAMES = {
  A: "Taylor (DM)", B: "Madi (Deanna Smith-Wesson)", C: "Chase (Valerian Hellebore)",
  D: "Josh (Samothy Smith-Wesson)", E: "Christie (Zelda Whipper)", F: "Jill (Flux)",
  G: "Taylor (Vega Bloodroot)", H: "Doug (Barrett Grimmskar)",
};
for (const [k, v] of Object.entries(NAMES)) text = text.split(`SPEAKER ${k}:`).join(`${v}:`);

text = text.replace("# Ashfall Britannia Session Transcript",
  `# Ashfall Britannia — Session 7 — "The Sun Shard" — Corrected Transcript
# Session date: 04/20/2026 (rolls keyed 2026-04-20; 47 archived). Title auto-selected.
# All 7 players present. H has at least one Christie mis-tag (01:28:48). No docx.
# Log: Session_Sources/Transcripts/Spell_Check_Logs/042026_Spell_Check_Log.md`);
fs.writeFileSync(OUT, text, "utf-8");
console.log("Written. Failures:", failures);
