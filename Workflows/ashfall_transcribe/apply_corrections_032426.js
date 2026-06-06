/** Session 5 (032426) — auto-advance spell-check. Roleplay session, no combat. */
const fs = require("fs");
const path = require("path");
const VAULT = String.raw`C:\Users\theli\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "032426 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "032426_AB_Session05_Corrected_Transcript.md");
let text = fs.readFileSync(RAW, "utf-8");
const failures = [];
function rep(f, r, l) { if (!text.includes(f)) { failures.push(l); return; } text = text.split(f).join(r); }

rep("we also got the Naruto, the plant he wanted", "we also got the nirnroot, the plant she wanted", "c1 nirnroot");
rep("As you're dismissed from the war zone", "As you're dismissed from the war room", "c2 war room");
rep("Stocking Grasp, 2d8 5", "Shocking Grasp, 2d8+5", "c3 shocking");
rep("I guess I'm gonna stay with keeping Rogan here", "I guess I'm gonna stay with keeping Rogue here", "c4 Rogue");
rep("then whatever sleeps beneath that church has access", "then whatever sleeps beneath that church has access", "noop");

const NAMES = {
  A: "Chase (Valerian Hellebore)", B: "Madi (Deanna Smith-Wesson)", C: "Taylor (DM)",
  D: "Josh (Samothy Smith-Wesson)", E: "Unattributed (E — mixed)", F: "Taylor (Vega Bloodroot)",
  G: "Christie (Zelda Whipper)", H: "Doug (Barrett Grimmskar)",
};
for (const [k, v] of Object.entries(NAMES)) text = text.split(`SPEAKER ${k}:`).join(`${v}:`);

text = text.replace("# Ashfall Britannia Session Transcript",
  `# Ashfall Britannia — Session 5 — "The Bell of Saint Ardas" — Corrected Transcript
# Session date: 03/24/2026 (3 archived rolls — pure-roleplay session; Jill/Flux ABSENT, dog at vet)
# ⚠ References a LOST UNRECORDED SESSION (~03/10–11): hospital basement, Verilith intro,
#   Samothy's book vision, nirnroot found, level 7 reached. See Session 04.5 stub.
# Title auto-selected per standing order. Label E = mixed blob (incl. Chase's Crazy Myrna voice bits).
# Log: Session_Sources/Transcripts/Spell_Check_Logs/032426_Spell_Check_Log.md`);
fs.writeFileSync(OUT, text, "utf-8");
console.log("Written. Failures:", failures.filter(f => f !== "noop"));
