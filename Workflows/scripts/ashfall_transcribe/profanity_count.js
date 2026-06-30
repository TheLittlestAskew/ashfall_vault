/** Per-speaker profanity counts from corrected transcripts (S06–S08 backfill). */
const fs = require("fs");
const path = require("path");
const DIR = String.raw`C:\Users\theli\Obsidian Vaults\ashfall_vault\Session_Sources\Transcripts\Corrected`;
const FILES = ["051126_AB_Session09_SALVAGED_Transcript.md"];
const CATS = {
  fuck: /\bfuck\w*/gi, shit: /\bshit\w*/gi, bitch: /\bbitch\w*/gi,
  damn: /\b(?:god)?damn\w*/gi, motherfucker: /\bmotherfuck\w*/gi,
};
for (const f of FILES) {
  const p = path.join(DIR, f);
  if (!fs.existsSync(p)) { console.log(`MISSING: ${f}`); continue; }
  const lines = fs.readFileSync(p, "utf-8").split("\n");
  const tally = {};
  for (const line of lines) {
    const m = line.match(/^\[\d{2}:\d{2}:\d{2}\] ([^:]+): (.*)$/);
    if (!m) continue;
    const who = m[1], said = m[2];
    tally[who] = tally[who] || { fuck: 0, shit: 0, bitch: 0, damn: 0, motherfucker: 0, total: 0 };
    for (const [cat, re] of Object.entries(CATS)) {
      const hits = (said.match(re) || []).length;
      tally[who][cat] += hits; tally[who].total += hits;
    }
    // avoid double counting: motherfucker also matches fuck regex
    const mf = (said.match(CATS.motherfucker) || []).length;
    tally[who].fuck -= mf; tally[who].total -= mf;
  }
  console.log(`\n=== ${f} ===`);
  for (const [who, t] of Object.entries(tally).sort((a, b) => b[1].total - a[1].total)) {
    if (t.total) console.log(`${who}: fuck=${t.fuck} shit=${t.shit} bitch=${t.bitch} damn=${t.damn} mf=${t.motherfucker} TOTAL=${t.total}`);
  }
}
