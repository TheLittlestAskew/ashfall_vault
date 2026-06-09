/**
 * Merge the two 022426 recordings into one unified raw transcript.
 * - Part 1 timestamps unchanged.
 * - Part 2 timestamps offset by part 1's audio duration (121:00) —
 *   the real wall-clock gap between recordings is unknown; flagged.
 * - Part 2 speaker labels renamed SPEAKER A → SPEAKER P2-A etc.
 *   (diarization labels are per-file, not stable across files).
 */
const fs = require("fs");
const path = require("path");
const DIR = String.raw`C:\Users\theli\ashfall_vault\Session_Sources\Transcripts\Raw_Unedited`;
const P1 = path.join(DIR, "022426 1 Ashfall Brittania Recording_transcript.md");
const P2 = path.join(DIR, "022426 2 Ashfall Brittania Recording_transcript.md");
const OUT = path.join(DIR, "022426 UNIFIED Ashfall Brittania Recording_transcript.md");

const OFFSET = 121 * 60; // part 1 duration in seconds

const p1 = fs.readFileSync(P1, "utf-8");
const p2 = fs.readFileSync(P2, "utf-8");

// Part 1: keep body as-is (strip nothing)
const p1Body = p1.split("---\n").slice(1).join("---\n");

// Part 2: strip header, offset timestamps, rename speakers
let p2Body = p2.split("---\n").slice(1).join("---\n");
p2Body = p2Body.replace(/^\[(\d{2}):(\d{2}):(\d{2})\] SPEAKER ([A-Z]):/gm, (m, h, mn, s, sp) => {
  const t = (+h) * 3600 + (+mn) * 60 + (+s) + OFFSET;
  const H = String(Math.floor(t / 3600)).padStart(2, "0");
  const M = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const S = String(t % 60).padStart(2, "0");
  return `[${H}:${M}:${S}] SPEAKER P2-${sp}:`;
});

const header = `# Ashfall Britannia Session Transcript — UNIFIED (2 recordings)
# Sources: 022426 1 (121 min, 90.1%, 10,462 words) + 022426 2 (13 min, 89.6%, 918 words)
# Merged: 2026-06-06
# Part 2 timestamps = recording time + 02:01:00 (part 1 duration).
#   ⚠ Real wall-clock gap between recordings unknown — part 2 times are approximate.
# Part 2 speaker labels prefixed P2- (diarization is per-file; mapping done in spell check).

---
`;

fs.writeFileSync(OUT, header + p1Body + `

> *==================== RECORDING BREAK — PART 2 BEGINS (timestamps offset +02:01:00) ====================*

` + p2Body, "utf-8");
console.log("Unified ->", OUT);
console.log("Lines:", (header + p1Body + p2Body).split("\n").length);
