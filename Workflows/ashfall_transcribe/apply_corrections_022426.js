/**
 * Session 3 (022426, unified 2-part) — spell-check application.
 * Taylor-approved 2026-06-06. Blob labels: A (part 1), P2-F (part 2).
 */
const fs = require("fs");
const path = require("path");
const VAULT = String.raw`C:\Users\theli\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "022426 UNIFIED Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "022426_AB_Session03_Corrected_Transcript.md");

let text = fs.readFileSync(RAW, "utf-8");
const failures = [];
function rep(find, repl, label) {
  if (!text.includes(find)) { failures.push(label); return; }
  text = text.split(find).join(repl);
}

// ── Corrections (approved) ──────────────────────────────────
rep("And up first is Zelda. Zelda Zipper.", "And up first is Zelda. Zelda Whipper.", "c1 Zipper");
rep("[01:11:13] SPEAKER A: Kill Steel.", "[01:11:13] SPEAKER A: Kill steal!", "c2 kill steal");
rep("but that 30/20, that's super hit", "but that dirty 20, that's super hit", "c3 dirty20");
rep("I am going to cast Word of Healing on Barrett", "I am going to cast Healing Word on Barrett", "c4 healing word");

// ── Speaker reassignments ───────────────────────────────────
const REASSIGN = {
  // Part 1 A-blob → Doug where confident
  "00:16:43": ["A", "DOUG"], "00:16:50": ["A", "DOUG"], "00:18:02": ["A", "DOUG"],
  "00:18:24": ["A", "DOUG"], "00:18:59": ["A", "DOUG"], "00:40:26": ["A", "DOUG"],
  "00:41:13": ["A", "DOUG"], "01:10:13": ["A", "DOUG"], "01:10:44": ["A", "DOUG"],
  "01:10:48": ["A", "DOUG"], "01:11:13": ["A", "DOUG"], "01:28:40": ["A", "DOUG"],
  "01:28:46": ["A", "DOUG"], "01:35:09": ["A", "DOUG"],
  // Part 2 fixes
  "02:09:17": ["P2-C", "CHASE"],      // "16 or higher" — his Moonbeam DC
  "02:08:04": ["P2-C", "UNATTR"],     // DM "No" + Madi wrap merged
  "02:11:02": ["P2-G", "UNATTR"],     // "Hey Josh, hey Madi" — greeting them, not Josh
  "02:11:06": ["P2-F", "UNATTR"],     // Mr.-Cat husband chat — Madi or Taylor ⚑
  "02:11:20": ["P2-F", "UNATTR"],
  "02:11:40": ["P2-F", "UNATTR"],
  "02:11:01": ["P2-F", "UNATTR"],     // "Yes, you will get XP" — DM-ish merge
  "02:12:07": ["P2-F", "VEGA"],       // "I'm up and I'm present"
  "02:12:30": ["P2-F", "VEGA"],
  "02:12:58": ["P2-F", "VEGA"],
};
for (const [ts, [from, to]] of Object.entries(REASSIGN)) {
  rep(`[${ts}] SPEAKER ${from}:`, `[${ts}] SPEAKER_${to}:`, `s ${ts}`);
}

// ── OOC removals ────────────────────────────────────────────
const RANGES = [
  { s: "00:00:05", e: "00:02:10", d: "pre-session mic chatter / game-over-screen quotes" },
  { s: "00:04:49", e: "00:05:07", d: "transcript/notes workflow meta" },
  { s: "00:05:49", e: "00:06:33", d: "Josh's-mom banter (per S02 precedent)" },
  { s: "00:09:22", e: "00:09:53", d: "Cinnamon Toast Crunch / food-additives tangent" },
  { s: "00:11:14", e: "00:11:28", d: "garbled song tangent" },
  { s: "01:05:56", e: "01:06:15", d: "homeschool / parental-bully life chat" },
  { s: "01:16:44", e: "01:16:57", d: "Nickelodeon tangent" },
];
const toSec = t => { const [h, m, s] = t.split(":").map(Number); return h * 3600 + m * 60 + s; };
const lines = text.split("\n");
const out = [];
let active = null;
for (const line of lines) {
  const m = line.match(/^\[(\d{2}:\d{2}:\d{2})\] /);
  if (m) {
    const sec = toSec(m[1]);
    const range = RANGES.find(r => sec >= toSec(r.s) && sec <= toSec(r.e));
    if (range) {
      if (active !== range) { active = range; out.push(`> *[OOC life chat removed (${range.s}–${range.e}): ${range.d}]*`); out.push(""); }
      continue;
    }
    active = null;
  } else if (active) continue;
  out.push(line);
}
text = out.join("\n");

// ── Label mapping ───────────────────────────────────────────
const NAMES = {
  DOUG: "Doug (Barrett Grimmskar)", CHASE: "Chase (Valerian Hellebore)",
  VEGA: "Taylor (Vega Bloodroot)", UNATTR: "Unattributed",
};
for (const [k, v] of Object.entries(NAMES)) text = text.split(`SPEAKER_${k}:`).join(`${v}:`);
// Part 2 first (longer prefixes)
text = text.split("SPEAKER P2-A:").join("Taylor (DM):");
text = text.split("SPEAKER P2-B:").join("Doug (Barrett Grimmskar):");
text = text.split("SPEAKER P2-C:").join("Christie (Zelda Whipper):");
text = text.split("SPEAKER P2-D:").join("Jill (Flux):");
text = text.split("SPEAKER P2-E:").join("Madi (Deanna Smith-Wesson):");
text = text.split("SPEAKER P2-F:").join("Unattributed (P2-F — Madi/Taylor blob):");
text = text.split("SPEAKER P2-G:").join("Josh (Samothy Smith-Wesson):");
text = text.split("SPEAKER P2-H:").join("Chase (Valerian Hellebore):");
// Part 1
text = text.split("SPEAKER H:").join("Taylor (DM):");
text = text.split("SPEAKER B:").join("Taylor (Vega Bloodroot):");
text = text.split("SPEAKER C:").join("Josh (Samothy Smith-Wesson):");
text = text.split("SPEAKER D:").join("Jill (Flux):");
text = text.split("SPEAKER E:").join("Chase (Valerian Hellebore):");
text = text.split("SPEAKER F:").join("Madi (Deanna Smith-Wesson):");
text = text.split("SPEAKER G:").join("Christie (Zelda Whipper):");
text = text.split("SPEAKER A:").join("Unattributed (A — Doug/DM blob):");
const leftover = text.match(/SPEAKER [A-Z2P-]+/g);

text = text.replace(
  "# Ashfall Britannia Session Transcript — UNIFIED (2 recordings)",
  `# Ashfall Britannia — Session 3 — Corrected Transcript (UNIFIED, 2 recordings)
# Session date: 02/24/2026 (rolls keyed 2026-02-24 ET)
# Corrected: 2026-06-06 (spell-check cycle, Taylor-approved)
# ⚠ Session ends MID-COMBAT (paused ~11 PM ET) — cliffhanger; XP posted to Discord later.
# ⚠ Blob labels: A (part 1, Doug+DM) and P2-F (part 2, Madi+Taylor) — confident lines reassigned.
# Corrections log: Session_Sources/Transcripts/Spell_Check_Logs/022426_Spell_Check_Log.md`
);

fs.writeFileSync(OUT, text, "utf-8");
console.log("Written:", OUT);
console.log("Failures:", failures.length ? failures : "none");
console.log("Leftover:", leftover ? [...new Set(leftover)] : "none");
