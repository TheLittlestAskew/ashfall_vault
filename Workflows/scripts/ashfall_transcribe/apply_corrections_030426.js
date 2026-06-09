/**
 * Session 4 (030426) — spell-check application. Auto-advance mode
 * (Taylor's standing order): >=85% corrections only, rest flagged.
 * Labels: H=DM(home), B=Madi (substitute DM early + Deanna),
 * C=blob(Chase + DM-in-car), A=Doug, D=Christie, E=Taylor, F=Jill, G=Josh.
 */
const fs = require("fs");
const path = require("path");
const VAULT = String.raw`C:\Users\theli\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "030426 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "030426_AB_Session04_Corrected_Transcript.md");
let text = fs.readFileSync(RAW, "utf-8");
const failures = [];
function rep(find, repl, label) { if (!text.includes(find)) { failures.push(label); return; } text = text.split(find).join(repl); }

// Corrections (>=85%)
rep("the only one I can like see from where I'm at is East A", "the only one I can like see from where I'm at is Beast A", "c1 East A");
rep("He's going to take a shot at Beastbeast there.", "He's going to take a shot at Beast B there.", "c2 Beastbeast");
rep("is Tusk Glove up there?", "is Tusk Love up there?", "c3 Tusk Love");
rep("So, Amy, you look— you get handed the dagger", "So, Sammy, you look— you get handed the dagger", "c4 Amy->Sammy");

// Reassignments: C-blob split (Chase vs DM-in-car), other slips
const REASSIGN = {
  // C → Chase (Valerian): druid/Moonbeam/lawyer lines
  "00:14:07": ["C", "CHASE"], "00:14:31": ["C", "CHASE"], "00:14:57": ["C", "CHASE"],
  "00:15:09": ["C", "CHASE"], "00:15:29": ["C", "CHASE"], "00:16:09": ["C", "CHASE"],
  "00:16:53": ["C", "CHASE"], "00:17:00": ["C", "CHASE"], "00:17:08": ["C", "CHASE"],
  "00:18:45": ["C", "CHASE"], "00:42:55": ["C", "CHASE"], "00:43:29": ["C", "CHASE"],
  "00:44:07": ["C", "CHASE"], "01:20:35": ["C", "CHASE"], "01:20:46": ["C", "CHASE"],
  "01:21:53": ["C", "CHASE"], "01:22:36": ["C", "CHASE"], "01:23:24": ["C", "CHASE"],
  "01:25:38": ["C", "CHASE"], "01:25:53": ["C", "CHASE"], "01:26:05": ["C", "CHASE"],
  "01:29:20": ["C", "CHASE"], "01:30:14": ["C", "CHASE"], "01:31:29": ["C", "CHASE"],
  "01:37:23": ["C", "CHASE"], "01:37:38": ["C", "CHASE"], "01:38:24": ["C", "CHASE"],
  "01:46:17": ["C", "CHASE"], "01:45:26": ["C", "CHASE"], "01:46:47ZZZ": ["C", "CHASE"],
  // C → DM Taylor (in car): rulings, XP numbers, logistics
  "00:19:13": ["C", "DM"], "00:20:57ZZZ": ["C", "DM"], "00:36:41": ["C", "DM"],
  "00:52:05": ["C", "DM"], "00:52:17": ["C", "DM"], "00:55:20": ["C", "DM"],
  "00:56:34": ["C", "DM"], "01:00:20": ["C", "DM"], "01:06:00": ["C", "DM"],
  // E-line that belongs to Madi (husband-driving joke)
  "00:21:30": ["E", "MADI"],
};
for (const [ts, [from, to]] of Object.entries(REASSIGN)) {
  const clean = ts.replace("ZZZ", "");
  rep(`[${clean}] SPEAKER ${from}:`, `[${clean}] SPEAKER_${to}:`, `s ${clean}`);
}

// OOC removals
const RANGES = [
  { s: "00:04:52", e: "00:07:32", d: "ChatGPT/TikTok tangent + investigator's-wife cheating story (Chase work story)" },
  { s: "00:17:31", e: "00:18:45", d: "weed/dealer life chat + legal banter" },
  { s: "00:21:21", e: "00:23:04", d: "car registration / deportation-joke / goat-photo banter" },
  { s: "00:28:55", e: "00:28:55", d: "Beaverlick aside (1 line)" },
  { s: "00:33:30", e: "00:34:06", d: "Kentucky town names tangent" },
  { s: "00:34:48", e: "00:35:19", d: "Kelly Clarkson tangent (resumes mid-combat)" },
  { s: "00:47:03", e: "00:47:48", d: "Skype tangent" },
  { s: "01:01:16", e: "01:06:43", d: "break: kids to bed, McDonald's Big Arch review, DM's first-day-of-work chat (160 calls — he got the S01-era job!)" },
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

// Label mapping
text = text.split("SPEAKER_CHASE:").join("Chase (Valerian Hellebore):");
text = text.split("SPEAKER_DM:").join("Taylor (DM, from car):");
text = text.split("SPEAKER_MADI:").join("Madi (Deanna Smith-Wesson):");
text = text.split("SPEAKER A:").join("Doug (Barrett Grimmskar):");
text = text.split("SPEAKER B:").join("Madi (Deanna Smith-Wesson / substitute DM):");
text = text.split("SPEAKER C:").join("Unattributed (C — Chase/DM-car blob):");
text = text.split("SPEAKER D:").join("Christie (Zelda Whipper):");
text = text.split("SPEAKER E:").join("Taylor (Vega Bloodroot):");
text = text.split("SPEAKER F:").join("Jill (Flux):");
text = text.split("SPEAKER G:").join("Josh (Samothy Smith-Wesson):");
text = text.split("SPEAKER H:").join("Taylor (DM):");
const leftover = text.match(/SPEAKER [A-Z_]+/g);

text = text.replace(
  "# Ashfall Britannia Session Transcript",
  `# Ashfall Britannia — Session 4 — "A Gust of Wind" — Corrected Transcript
# Session date: 03/04/2026 (rolls keyed 2026-03-03 ET)
# Corrected: 2026-06-06 (auto-advance mode per Taylor's standing order)
# ⚠ Opens MID-COMBAT (S03 cliffhanger resolution). MADI substitute-DM'd until DM Taylor
#   arrived (car ~00:19, home ~01:11). Label C = Chase/DM-car blob (split where confident).
# Corrections log: Session_Sources/Transcripts/Spell_Check_Logs/030426_Spell_Check_Log.md`
);
fs.writeFileSync(OUT, text, "utf-8");
console.log("Written:", OUT);
console.log("Failures:", failures.length ? failures : "none");
console.log("Leftover:", leftover ? [...new Set(leftover)].slice(0, 5) : "none");
