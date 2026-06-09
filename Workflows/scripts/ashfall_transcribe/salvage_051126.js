/** Session 9 (051126) — SALVAGE, not correction.
 * The recording captured ONLY player-Taylor's mic + her room audio. Discord output
 * (DM + other players) was not recorded; a Transformers reaction video + podcast ads
 * dominate the track. Speaker letters are useless: B ≈ Taylor; A/C–H ≈ background media,
 * with rare faint bleed-through of table audio.
 * Salvage rule: keep all SPEAKER B lines (Taylor's mic) + a curated bleed-through list.
 */
const fs = require("fs");
const path = require("path");
const VAULT = String.raw`C:\Users\theli\ashfall_vault`;
const RAW = path.join(VAULT, "Session_Sources", "Transcripts", "Raw_Unedited", "051126 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(VAULT, "Session_Sources", "Transcripts", "Corrected", "051126_AB_Session09_SALVAGED_Transcript.md");
const raw = fs.readFileSync(RAW, "utf-8");

// Bleed-through lines from non-B speakers that are plausibly the actual table (faint Discord audio).
const INCLUDE = new Set([
  "00:00:01", // A: "Traitor." (likely table banter re: Mr. Cat)
  "00:01:43", // A: "Guys. It sounds like she never even let—"
  "00:01:49", // C: "I'm Vega. What do you mean?"
  "00:03:27", // C: "Wow, hey team, working hard or hardly working?" (Taylor greeting the table)
  "00:10:54", // C: "Is that you, Christie? Hi!"
  "01:38:19", // A: "No, it's Vega." (DM bleed-through)
  "01:56:51", // C: "Yes, yes it does. Have to 7." (DM answering a to-hit query)
  "02:00:30", // D: "Uh, 16, dude." (possible table roll callout)
  "02:00:48", // A: "Taylor." (DM calling on her)
  "02:25:12", // F: "Yeah, no, that was great. I had a lot of fun with that." (end-of-session)
  "02:25:15", // D: "I am excited."
]);

const outLines = [];
let kept = 0, dropped = 0;
for (const line of raw.split("\n")) {
  const m = line.match(/^\[(\d{2}:\d{2}:\d{2})\] SPEAKER ([A-H]): (.*)$/);
  if (!m) { if (outLines.length < 10) outLines.push(line); continue; } // keep file header block only
  const [, ts, sp, said] = m;
  if (sp === "B") { outLines.push(`[${ts}] Taylor (Vega Bloodroot): ${said}`); outLines.push(""); kept++; }
  else if (INCLUDE.has(ts)) { outLines.push(`[${ts}] BLEED-THROUGH (table audio, speaker uncertain): ${said}`); outLines.push(""); kept++; }
  else dropped++;
}

const header = `# Ashfall Britannia — Session 9 — "The Battle of the Veiled Dawn" — SALVAGED TRANSCRIPT
# ⚠ PARTIAL CAPTURE: this recording contains ONLY Taylor's microphone + her room audio.
# Discord audio (DM + 6 other players) was NOT captured. A Transformers reaction video,
# a relationship-advice podcast, and ad reads dominate the raw track (${dropped} lines dropped).
# What remains: Taylor/Vega's side of the session (${kept} lines kept) + faint table bleed-through.
# Combat reconstructed from the roll archive (104 rolls, 2026-05-11) — see the session note.
# Title auto-selected. Log: Session_Sources/Transcripts/Spell_Check_Logs/051126_Spell_Check_Log.md

---
`;
fs.writeFileSync(OUT, header + outLines.join("\n"), "utf-8");
console.log(`Salvaged: kept ${kept}, dropped ${dropped}`);
