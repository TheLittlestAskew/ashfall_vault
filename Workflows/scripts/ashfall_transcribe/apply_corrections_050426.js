/** Session 8 (050426) — auto-advance spell-check. */
const fs = require("fs");
const path = require("path");
const VAULT = String.raw`C:\Users\theli\Obsidian Vaults\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "050426 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "050426_AB_Session08_Corrected_Transcript.md");
let text = fs.readFileSync(RAW, "utf-8");
const failures = [];
function rep(f, r, l) { if (!text.includes(f)) { failures.push(l); return; } text = text.split(f).join(r); }

rep("the one about the Sunshard", "the one about the Sun Shard", "c1 Sun Shard caps");
rep("like the Necromicon", "like the Necronomicon", "c2 Necronomicon");
rep("if you take the COVID off", "if you take the cover off", "c3 cover");
rep("I don't think we have a Torturer", "I don't think we have a sorcerer", "c4 sorcerer (Subtle Spell context)");
rep("Can you settle? Can somebody settle?", "Can you Subtle? Can somebody Subtle?", "c5 Subtle Spell");
rep("the one, the white Captain— can I see", "the one, the Watch Captain— can I see", "c6 Watch Captain");
rep("Sorry, and I pull Veil away", "Sorry, and I pull Val away", "c7 Val");
rep("try the key before we try the boots, but the boots are gonna make too much noise", "try the key before we try the books, but the books are gonna make too much noise", "c8 books");

// Speaker reassignments (timestamp-evidence; labels are per-file)
const REASSIGN = {
  "00:00:02": ["B", "Unattributed (pre-Christie-join)"], // Christie joined ~00:01 per Doug's 00:00:37 line
  "00:34:56": ["F", "Jill (Flux)"], // archive: Flux History 21, Samothy 19 — the "21." is Jill's
  "01:40:45": ["B", "Madi (Deanna Smith-Wesson)"], // Silence is Deanna's (cast plan 00:58:48, regret 02:25:48)
};
for (const [ts, [from, to]] of Object.entries(REASSIGN)) {
  const f = `[${ts}] SPEAKER ${from}:`, r = `[${ts}] ${to}:`;
  if (!text.includes(f)) { failures.push(`reassign ${ts}`); continue; }
  text = text.split(f).join(r);
}

const NAMES = {
  A: "Taylor (DM)", B: "Christie (Zelda Whipper)", C: "Chase (Valerian Hellebore)",
  D: "Taylor (Vega Bloodroot)", E: "Doug (Barrett Grimmskar)", F: "Josh (Samothy Smith-Wesson)",
  G: "Jill (Flux)", H: "Madi (Deanna Smith-Wesson)",
};
for (const [k, v] of Object.entries(NAMES)) text = text.split(`SPEAKER ${k}:`).join(`${v}:`);

text = text.replace("# Ashfall Britannia Session Transcript",
  `# Ashfall Britannia — Session 8 — "Silence in the Library" — Corrected Transcript
# Session date: 05/04/2026 (rolls keyed 2026-05-04; 44 archived). Title auto-selected.
# All 7 players present (Christie joined ~1 min in). Possible B/H blends flagged in log. No docx.
# Log: Session_Sources/Transcripts/Spell_Check_Logs/050426_Spell_Check_Log.md`);
fs.writeFileSync(OUT, text, "utf-8");
console.log("Written. Failures:", failures);
