/**
 * Session 2 (021726) — Spell-check cycle application script.
 * Taylor-approved 2026-06-06. Notable: SPEAKER D is a diarization blob
 * (Chase + Josh + Doug + Christie). Confident lines are reassigned by
 * context; the rest stay "Unattributed (D)". No guessing.
 */
const fs = require("fs");
const path = require("path");

const VAULT = String.raw`C:\Users\theli\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "021726 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "021726_AB_Session02_Corrected_Transcript.md");

let text = fs.readFileSync(RAW, "utf-8");
const failures = [];
function replaceOnce(find, repl, label) {
  if (!text.includes(find)) { failures.push(label); return; }
  text = text.split(find).join(repl);
}

// ── 1. Approved text corrections ────────────────────────────
replaceOnce("Should we bake them to make sure", "Should we stake them to make sure", "c1 bake->stake");
replaceOnce("disadvantage on you, Cal", "disadvantage on you, Val", "c2 Cal->Val");
replaceOnce("it needs to be away from Pioneers, okay?", "it needs to be away from prying ears, okay?", "c3 Pioneers->prying ears");
replaceOnce("So you know what ninroot looks like?", "So you know what nirnroot looks like?", "c4 nirnroot");
replaceOnce("so he misses both Tax, I assume", "so he misses both attacks, I assume", "c5 Tax->attacks");
replaceOnce("[01:50:10] SPEAKER A: Uh, flashing.", "[01:50:10] SPEAKER A: Uh, slashing.", "c6 flashing->slashing");
replaceOnce("[01:02:45] SPEAKER E: 30, 20.", "[01:02:45] SPEAKER E: Dirty 20.", "c7 30,20->dirty 20");
replaceOnce("that is a 30/20 for the first hit", "that is a dirty 20 for the first hit", "c8 30/20->dirty 20");

// ── 2. Speaker reassignments (context-confident only) ───────
const REASSIGN = {
  // [timestamp]: [fromLetter, toLabel]
  "00:13:38": ["D", "JOSH"], "00:37:35": ["D", "JOSH"], "00:38:48": ["D", "JOSH"],
  "00:39:17": ["D", "JOSH"], "00:39:30": ["D", "JOSH"], "00:39:40": ["D", "JOSH"],
  "00:39:56": ["D", "JOSH"], "00:40:08": ["D", "JOSH"], "00:40:28": ["D", "JOSH"],
  "00:40:47": ["D", "JOSH"], "00:41:31": ["D", "JOSH"], "00:41:53": ["D", "JOSH"],
  "00:41:59": ["D", "JOSH"], "00:42:06": ["D", "JOSH"], "00:42:21": ["D", "JOSH"],
  "00:43:34": ["D", "JOSH"], "00:49:13": ["D", "JOSH"], "00:49:19": ["D", "JOSH"],
  "00:50:12": ["D", "JOSH"], "00:50:18": ["D", "JOSH"], "00:50:54": ["D", "JOSH"],
  "00:51:00": ["D", "JOSH"], "00:51:10": ["D", "JOSH"], "00:51:55": ["D", "JOSH"],
  "01:56:23": ["D", "JOSH"], "01:57:20": ["D", "JOSH"], "01:57:42": ["D", "JOSH"],
  "02:04:27": ["D", "JOSH"], "02:06:25": ["D", "JOSH"], "02:06:43": ["D", "JOSH"],
  "02:07:15": ["D", "JOSH"], "02:07:43": ["D", "JOSH"], "02:07:55": ["D", "JOSH"],
  "02:17:55": ["D", "JOSH"], "02:19:09": ["D", "JOSH"], "02:22:44": ["D", "JOSH"],
  "02:23:01": ["D", "JOSH"], "02:23:12": ["D", "JOSH"], "02:31:48": ["D", "JOSH"],
  "02:34:19": ["D", "JOSH"], "02:40:12": ["D", "JOSH"],

  "00:14:08": ["D", "CHASE"], "00:14:25": ["D", "CHASE"], "00:20:01": ["D", "CHASE"],
  "00:20:11": ["D", "CHASE"], "00:22:05": ["D", "CHASE"], "00:22:37": ["D", "CHASE"],
  "00:23:02": ["D", "CHASE"], "00:34:18": ["D", "CHASE"], "00:47:26": ["D", "CHASE"],
  "01:09:36": ["D", "CHASE"], "01:10:00": ["D", "CHASE"], "01:40:03": ["D", "CHASE"],
  "01:40:22": ["D", "CHASE"], "01:47:00": ["D", "CHASE"], "01:47:23": ["D", "CHASE"],
  "02:01:30": ["D", "CHASE"], "02:01:46": ["D", "CHASE"], "02:02:05": ["D", "CHASE"],
  "02:02:11": ["D", "CHASE"], "02:02:21": ["D", "CHASE"], "02:12:37": ["D", "CHASE"],
  "02:12:53": ["D", "CHASE"], "02:13:04": ["D", "CHASE"], "02:13:13": ["D", "CHASE"],
  "02:13:21": ["D", "CHASE"], "02:13:30": ["D", "CHASE"], "02:15:46": ["D", "CHASE"],
  "02:18:01": ["D", "CHASE"], "02:29:36": ["D", "CHASE"], "02:29:50": ["D", "CHASE"],
  "02:30:06": ["D", "CHASE"], "02:36:36": ["D", "CHASE"], "02:37:06": ["D", "CHASE"],
  "02:37:52": ["D", "CHASE"], "02:43:00": ["D", "CHASE"], "02:43:15": ["D", "CHASE"],
  "02:44:31": ["D", "CHASE"], "02:45:04": ["D", "CHASE"], "02:45:15": ["D", "CHASE"],
  "02:48:25": ["D", "CHASE"], "02:55:35": ["D", "CHASE"], "02:55:49": ["D", "CHASE"],
  "02:56:19": ["D", "CHASE"], "02:57:11": ["D", "CHASE"],

  "00:37:50": ["D", "DOUG"], "01:04:27": ["D", "DOUG"], "01:51:11": ["D", "DOUG"],
  "01:52:01": ["D", "DOUG"], "01:52:23": ["D", "DOUG"], "02:00:42": ["D", "DOUG"],
  "02:11:10": ["D", "DOUG"], "02:11:21": ["D", "DOUG"], "02:11:37": ["D", "DOUG"],
  "02:18:27": ["D", "DOUG"], "02:33:25": ["D", "DOUG"], "02:33:50": ["D", "DOUG"],
  "02:35:03": ["D", "DOUG"], "02:35:50": ["D", "DOUG"], "02:52:16": ["D", "DOUG"],
  "02:53:23": ["D", "DOUG"],

  "00:25:15": ["D", "CHRISTIE"], "00:54:39": ["D", "CHRISTIE"], "01:55:06": ["D", "CHRISTIE"],
  "01:55:24": ["D", "CHRISTIE"], "02:21:04": ["D", "CHRISTIE"], "02:21:50": ["D", "CHRISTIE"],
  "02:38:44": ["D", "CHRISTIE"],
  // Zelda's healing block (Taylor-confirmed: Lunar Vitality, Christie)
  "02:20:32": ["C", "CHRISTIE"], "02:20:48": ["C", "CHRISTIE"],
  "02:38:24": ["C", "CHRISTIE"], "02:38:41": ["C", "CHRISTIE"],
  "02:39:02": ["C", "CHRISTIE"], "02:39:20": ["C", "CHRISTIE"],
  "02:20:40": ["B", "CHRISTIE"], "02:38:32": ["B", "CHRISTIE"],
  // Misc
  "01:11:41": ["C", "DM"],      // "Abigail" — name reveal is the DM's
  "02:18:45": ["D", "VEGA"],    // "does a 26 hit?" — Vega's opportunity attack
};
const LABELS = {
  DM: "Taylor (DM)", VEGA: "Taylor (Vega Bloodroot)", CHASE: "Chase (Valerian Hellebore)",
  JOSH: "Josh (Samothy Smith-Wesson)", DOUG: "Doug (Barrett Grimmskar)",
  CHRISTIE: "Christie (Zelda Whipper)", MADI: "Madi (Deanna Smith-Wesson)", JILL: "Jill (Flux)",
};
for (const [ts, [from, to]] of Object.entries(REASSIGN)) {
  replaceOnce(`[${ts}] SPEAKER ${from}:`, `[${ts}] SPEAKER_${to}:`, `s ${ts} ${from}->${to}`);
}

// ── 3. OOC life-chat range removals ─────────────────────────
const RANGES = [
  { s: "00:00:00", e: "00:01:40", d: "mic count-in + Taylor's work/notes chat" },
  { s: "00:02:42", e: "00:06:24", d: "neurodivergence diagnoses / family / religious-trauma life chat" },
  { s: "00:26:30", e: "00:27:00", d: "Aubrey Plaza tangent" },
  { s: "00:28:36", e: "00:31:38", d: "farm life: pig butchering, chicken naming (quote-worthy 'Disinspiration' beat inside — see log)" },
  { s: "00:43:42", e: "00:44:31", d: "dice-buying chat (convention, sterling silver dice, Corey)" },
  { s: "00:58:44", e: "00:59:55", d: "Wednesday season chat + Game of Thrones spoiler/cake story" },
  { s: "01:07:57", e: "01:08:38", d: "politics tangent (Trump, Pam Bondi, the Dow)" },
  { s: "01:19:18", e: "01:32:07", d: "mid-session break (~13 min): Trump-in-Rome, TikTok body-shaming discussion, dog/water chat, regroup logistics" },
  { s: "02:16:11", e: "02:17:08", d: "medical marijuana / drug-testing life chat" },
  { s: "02:50:33", e: "02:52:04", d: "Josh's-mom banter (Taylor-approved removal)" },
  { s: "02:53:33", e: "02:54:17", d: "Twilight + recording/mute-button meta chat" },
  { s: "02:54:27", e: "02:55:28", d: "AI note-taking meta chat (incl. Taylor's curse-tracker reveal + roll-callout request)" },
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
      if (active !== range) {
        active = range;
        out.push(`> *[OOC life chat removed (${range.s}–${range.e}): ${range.d}]*`);
        out.push("");
      }
      continue;
    }
    active = null;
  } else if (active) continue;
  out.push(line);
}
text = out.join("\n");

// ── 4. Label mapping ─────────────────────────────────────────
for (const [key, name] of Object.entries(LABELS)) {
  text = text.split(`SPEAKER_${key}:`).join(`${name}:`);
}
text = text.split("SPEAKER A:").join("Taylor (DM):");
text = text.split("SPEAKER B:").join("Taylor (Vega Bloodroot):");
text = text.split("SPEAKER C:").join("Madi (Deanna Smith-Wesson):");
text = text.split("SPEAKER E:").join("Jill (Flux):");
text = text.split("SPEAKER D:").join("Unattributed (D — see log):");
text = text.split("SPEAKER F:").join("Unattributed (F):");
text = text.split("SPEAKER G:").join("Unattributed (G):");
text = text.split("SPEAKER H:").join("Unattributed (H):");
const leftover = text.match(/SPEAKER [A-Z_]/g);

// ── 5. Header ────────────────────────────────────────────────
text = text.replace(
  "# Ashfall Britannia Session Transcript",
  `# Ashfall Britannia — Session 2 — "Ashes of the Living" — Corrected Transcript
# Session date: 02/17/2026 (rolls keyed 2026-02-16 ET)
# Corrected: 2026-06-06 (spell-check cycle, Taylor-approved)
# ⚠ Diarization note: SPEAKER D merged four players (Chase/Josh/Doug/Christie).
#   Confident lines reassigned by context; the rest labeled "Unattributed (D)".
# Speaker map: A=Taylor (DM), B=Taylor/Vega, C=Madi/Deanna, E=Jill/Flux, D=merged blob
# Corrections log: Session_Sources/Transcripts/Spell_Check_Logs/021726_Spell_Check_Log.md`
);

fs.writeFileSync(OUT, text, "utf-8");
console.log("Written:", OUT);
console.log("Failures:", failures.length ? failures : "none");
console.log("Leftover labels:", leftover ? [...new Set(leftover)] : "none");
