/**
 * Session 1 (021326) — Spell-check cycle application script.
 * Applies ONLY Taylor-reviewed corrections to the raw transcript:
 *   - approved text corrections (>=85% confidence, presented 2026-06-06)
 *   - speaker reassignments / line splits (diarization fixes)
 *   - OOC life-chat removals (replaced with markers)
 *   - speaker letter -> name mapping
 * Everything else is byte-exact from the raw transcript.
 * Reports any correction string that failed to match (so nothing fails silently).
 */
const fs = require("fs");
const path = require("path");

const VAULT = String.raw`C:\Users\theli\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "021326 Ashfall Brittania Recording_transcript.md");
const OUT_DIR = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected");
const OUT = path.join(OUT_DIR, "021326_AB_Session01_Corrected_Transcript.md");

let text = fs.readFileSync(RAW, "utf-8");
const failures = [];

function replaceOnce(find, repl, label) {
  if (!text.includes(find)) { failures.push(label + " :: " + find.slice(0, 60)); return; }
  text = text.split(find).join(repl);
}

// ── 1. Text corrections (approved table rows, >=85%) ────────
replaceOnce("I found an N-spelled semi-automatic", "I found an Enspelled semi-automatic", "c1 Enspelled");
replaceOnce("came across an N-spelled semi-automatic pistol", "came across an Enspelled semi-automatic pistol", "c2 Enspelled pistol");
replaceOnce("these are the two that have baked cast on them", "these are the two that have Bane cast on them", "c3 baked->Bane");
replaceOnce("for the two that I cast Bean on, I am going to cast Thunder Wave at them", "for the two that I cast Bane on, I am going to cast Thunderwave at them", "c4 Bean->Bane + Thunderwave");
replaceOnce("the other veined one", "the other Baned one", "c5 veined->Baned");
replaceOnce("I am going to Kiss Starry Wisp", "I am going to cast Starry Wisp", "c6 Kiss->cast");
replaceOnce("Cuz fuck that, Noel.", "Cuz fuck that gnoll.", "c7 Noel->gnoll");
replaceOnce("take a shot at the mole over here by Deanna", "take a shot at the gnoll over here by Deanna", "c8 mole->gnoll");
replaceOnce("gonna go to the no next to the little kitty", "gonna go to the gnoll next to the little kitty", "c9 no->gnoll");
replaceOnce("The kitty tar, half centaur, half cat.", "The kitty-taur, half centaur, half cat.", "c10a kitty-taur");
replaceOnce("Hi kitty tar,", "Hi kitty-taur,", "c10b kitty-taur");
replaceOnce("Okay, so wait, within Snaring Strike", "Okay, so wait, with Ensnaring Strike", "c11 Ensnaring");

// ── 2. Speaker reassignments (diarization fixes) ────────────
replaceOnce("[00:47:38] SPEAKER D: Hey, husband Taylor.", "[00:47:38] SPEAKER E: Hey, husband Taylor.", "s1 husband Taylor -> Maddie");
replaceOnce("[00:47:44] SPEAKER D: Yep.", "[00:47:44] SPEAKER A: Yep.", "s2 Yep -> DM");
replaceOnce("[01:02:36] SPEAKER D: That's 6 damage.", "[01:02:36] SPEAKER E: That's 6 damage.", "s3 HM dmg -> Maddie");
replaceOnce("[01:06:14] SPEAKER D: Yeah, that hits.", "[01:06:14] SPEAKER E: Yeah, that hits.", "s4 Deanna hit -> Maddie");
replaceOnce("[01:31:30] SPEAKER D: 14.", "[01:31:30] SPEAKER G: 14.", "s5 Flux roll -> Jill");
replaceOnce("[01:44:13] SPEAKER C: Uh, Deanna, you're up.", "[01:44:13] SPEAKER A: Uh, Deanna, you're up.", "s6 turn call -> DM");
replaceOnce("[01:47:15] SPEAKER D: 7 is the number I got.", "[01:47:15] SPEAKER E: 7 is the number I got.", "s7 Perf Shot dmg -> Maddie");
replaceOnce("[02:00:40] SPEAKER D: Sorry, one more time.", "[02:00:40] SPEAKER E: Sorry, one more time.", "s8 -> Maddie");
replaceOnce("[02:05:43] SPEAKER D: Okay. 13.", "[02:05:43] SPEAKER E: Okay. 13.", "s9 dagger roll -> Maddie");
// line splits (merged utterances)
replaceOnce("[00:32:50] SPEAKER F: Answer. So, and this will be a one-use",
  "[00:32:50] SPEAKER A: Answer.\n\n[00:32:50] SPEAKER F: So, and this will be a one-use", "s10 split Answer");
replaceOnce("[02:04:33] SPEAKER A: Naruto, shut up, no one cares. Uh, 22.",
  "[02:04:33] SPEAKER A: Naruto, shut up, no one cares.\n\n[02:04:33] SPEAKER G: Uh, 22.", "s11 split Flux 22");

// ── 3. Inline trim (single line mixing gameplay + life chat) ─
replaceOnce(
  "[00:36:43] SPEAKER B: You're pooping the party, Taylor. Also, Taylor, I don't know if you're a big Taylor Swift fan, but there's something nice about being able to, uh, uh, there's a— the, the last song on the newest album, at the very end Sabrina Carpenter goes, I love you, Taylor, and I'm like, I just pretend that she's talking to me.",
  "[00:36:43] SPEAKER B: You're pooping the party, Taylor. *[OOC life-chat trimmed: Taylor Swift tangent]*",
  "t1 Swift trim");

// ── 4. Exact-line removals ──────────────────────────────────
replaceOnce("[00:02:08] SPEAKER A: Awesome.\n\n", "", "r0 Awesome line");

// ── 5. Range removals (OOC life chat) ───────────────────────
const RANGES = [
  { s: "00:01:02", e: "00:02:07", d: "recording-consent / note-taking method discussion" },
  { s: "00:02:24", e: "00:08:17", d: "pre-session tech setup, Discord/DDB age-verification chat, Chase's connection issues" },
  { s: "00:30:31", e: "00:30:42", d: "Corey (Taylor's husband, not in game) off-mic interlude" },
  { s: "00:34:07", e: "00:35:42", d: "music tangent (Spotify, problematic artists, Bruce Lee joke, Backstreet Boys)" },
  { s: "00:37:11", e: "00:37:40", d: "Taylor Swift / Jack Antonoff tangent" },
  { s: "00:38:53", e: "00:40:42", d: "weather / climate / Taylor's health update (vertigo, kidney stones)" },
  { s: "02:15:24", e: "02:16:38", d: "Gus (DM's son) Minecraft cameo + 'dragons and shit' one-liner reminiscing [flagged quote-worthy in log]" },
  { s: "02:41:02", e: "02:47:31", d: "end-of-session life chat (Maddie's Aflac news, DM's job interview, Taylor's shelter ops manual) and goodnights — session ends" },
];
const toSec = t => { const [h, m, s] = t.split(":").map(Number); return h * 3600 + m * 60 + s; };

const lines = text.split("\n");
const out = [];
let active = null; // current range being removed
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
      continue; // drop line
    }
    active = null;
  } else if (active) {
    continue; // drop blank lines inside a removed range
  }
  out.push(line);
}
text = out.join("\n");

// ── 6. Speaker letter -> name mapping ───────────────────────
const SPEAKERS = {
  A: "Taylor (DM)",
  B: "Taylor (Vega Bloodroot)",
  C: "Chase (Valerian Hellebore)",
  D: "Christie (Zelda Whipper)",
  E: "Maddie (Deanna Smith-Wesson)",
  F: "Josh (Samothy Smith-Wesson)",
  G: "Jill (Flux)",
  H: "Doug (Barrett Grimmskar)",
};
for (const [letter, name] of Object.entries(SPEAKERS)) {
  text = text.split(`SPEAKER ${letter}:`).join(`${name}:`);
}
const leftover = text.match(/SPEAKER [A-Z]/g);

// ── 7. Header ───────────────────────────────────────────────
text = text.replace(
  "# Ashfall Britannia Session Transcript",
  `# Ashfall Britannia — Session 1 — Corrected Transcript
# Session date: 02/13/2026
# Corrected: 2026-06-06 (spell-check cycle, Taylor-approved)
# Speaker map: A=Taylor (DM), B=Taylor/Vega, C=Chase/Valerian, D=Christie/Zelda, E=Maddie/Deanna, F=Josh/Samothy, G=Jill/Flux, H=Doug/Barrett
# Corrections log: Session_Sources/Transcripts/Spell_Check_Logs/021326_Spell_Check_Log.md
# Unresolved flags remain verbatim in-text — see log.`
);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, text, "utf-8");

console.log("Corrected transcript written:", OUT);
console.log("Failed matches:", failures.length ? failures : "none");
console.log("Unmapped speaker labels remaining:", leftover ? [...new Set(leftover)] : "none");
