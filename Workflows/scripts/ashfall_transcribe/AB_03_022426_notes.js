/* ===================================================================
 * AB_03_022426_notes.js — Session 3 "Mr. Cat, Esquire" filled notes
 * Engine/theme: ashfall_v1.js. Content: unified 022426 corrected
 * transcript + Supabase roll archive (2026-02-24). fix_tbl_borders incl.
 * =================================================================== */
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, LevelFormat
} = require('docx');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const F = { body: "Aptos", bold: "Aptos", expand3: 60, szBody: 18, szSub: 20, szSection: 24, szTitle: 48 };
const C = {
  titleText: "6E1414", sectionFill: "D6CDC4", sectionText: "3A1414", sectionRule: "B5532B",
  subFill: "EAE6E0", subText: "7A2E2E", subRule: "7A2E2E",
  creamFill: "EFE3CC", creamText: "3A1414", creamRule: "B08D3C",
  metaLabelFill: "5A1E1E", metaLabelText: "FFFFFF", metaValueFill: "DCD3C9", metaValueText: "2B2018",
  tableHeaderFill: "5A1E1E", tableHeaderText: "FFFFFF", evenRow: "EDE8E1", oddRow: "D8CFC4", tableBodyText: "2B2018",
  bodyText: "2B2018", mutedText: "6E635A", journalText: "3A1414", endText: "9A8A86",
  gold: "B08D3C", lavender: "B3A39A", combatFill: "3A1414", combatText: "F2D9C0", white: "FFFFFF",
};
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const whiteBorder = { style: BorderStyle.SINGLE, size: 1, color: "FFFFFF" };
const allWhite = { top: whiteBorder, bottom: whiteBorder, left: whiteBorder, right: whiteBorder };
const noTblBorders = { top: noBorder, bottom: noBorder, insideH: noBorder, insideV: noBorder };
const TW = 9360;

function spacer(p = 120) { return new Paragraph({ spacing: { before: p, after: 0 }, children: [] }); }
function sectionDivider() {
  return [
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 1 } }, spacing: { before: 360, after: 0 }, children: [] }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.subRule, space: 1 } }, spacing: { before: 60, after: 240 }, children: [] }),
  ];
}
function sectionHeader(t) {
  return [
    new Paragraph({ shading: { fill: C.sectionFill, type: ShadingType.CLEAR }, spacing: { before: 0, after: 0 }, children: [new TextRun({ text: t.toUpperCase(), font: F.bold, size: 24, bold: true, color: C.sectionText, characterSpacing: 80 })] }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.sectionRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
  ];
}
function subHeader(t) {
  return [
    new Paragraph({ shading: { fill: C.subFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } }, spacing: { before: 200, after: 0 }, indent: { left: 120 }, children: [new TextRun({ text: t.toUpperCase(), font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })] }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
  ];
}
function creamBlock(children) {
  return [
    new Paragraph({ shading: { fill: C.creamFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.creamRule, space: 6 } }, spacing: { before: 120, after: 0 }, indent: { left: 200 }, children }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.creamRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
  ];
}
function thCell(text, width) {
  return new TableCell({ width: { size: width, type: WidthType.DXA }, borders: allWhite, shading: { fill: C.tableHeaderFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.bold, size: F.szBody, bold: true, color: C.tableHeaderText })] })] });
}
function tdCell(text, width, opts = {}) {
  const fill = opts.combat ? C.combatFill : (opts.alt ? C.oddRow : C.evenRow);
  return new TableCell({ width: { size: width, type: WidthType.DXA }, borders: allWhite, shading: { fill, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, verticalAlign: VerticalAlign.TOP, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.body, size: F.szBody, color: opts.combat ? C.combatText : C.tableBodyText })] })] });
}
function metaLabelCell(text, width) {
  return new TableCell({ width: { size: width, type: WidthType.DXA }, borders: allWhite, shading: { fill: C.metaLabelFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.bold, size: F.szBody, bold: true, color: C.metaLabelText })] })] });
}
function metaValueCell(text, width) {
  return new TableCell({ width: { size: width, type: WidthType.DXA }, borders: allWhite, shading: { fill: C.metaValueFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.body, size: F.szBody, color: C.metaValueText })] })] });
}
function para(text, opts = {}) {
  return new Paragraph({ spacing: { before: opts.before ?? 80, after: opts.after ?? 80 }, children: [new TextRun({ text, font: F.body, size: F.szBody, color: opts.color || C.bodyText, italics: !!opts.italics, bold: !!opts.bold })] });
}
function bullets(items) {
  return items.map(t => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: C.bodyText })] }));
}
function filledTable(cols, rows) {
  return new Table({
    width: { size: TW, type: WidthType.DXA }, columnWidths: cols.map(c => c.w), borders: noTblBorders,
    rows: [new TableRow({ tableHeader: true, children: cols.map(c => thCell(c.label, c.w)) }),
      ...rows.map((r, i) => new TableRow({ children: cols.map((c, j) => tdCell(r.cells[j] ?? "", c.w, { alt: i % 2 === 1, combat: !!r.combat })) }))]
  });
}
function quoteBlock(name, tag, quote) {
  return creamBlock([
    new TextRun({ text: `${name}  ·  [${tag}]`, font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 }),
    new TextRun({ break: 1 }),
    new TextRun({ text: `"${quote}"`, font: F.body, size: F.szBody, italics: true, color: C.creamText }),
  ]);
}

function titleBlock() {
  return [
    spacer(200),
    new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "Mr. Cat, Esquire", font: F.bold, size: F.szTitle, bold: true, color: C.titleText })] }),
    new Paragraph({ shading: { fill: C.subFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } }, spacing: { before: 0, after: 0 }, indent: { left: 120 }, children: [new TextRun({ text: "Session 03  ·  02/24/2026  ·  Ashfall Britannia  ·  ⚠ ENDS MID-COMBAT", font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })] }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
    spacer(280),
  ];
}

function sectionMetadata() {
  const lw = 2400, rw = TW - lw;
  const rows = [
    ["Campaign", '"Ashfall Britannia" Campaign'],
    ["Session Number", "03"],
    ["Session Date", "02/24/2026 (rolls keyed 2026-02-24 ET; played 8:16–11:00 PM)"],
    ["Recordings", "TWO (121 min + 13 min; ~18-min gap reconstructed from roll archive; recording started ~12 min after play began)"],
    ["Start Location", "The Old Hospital — second floor (nurses' dormitory), after the S02 short rest"],
    ["End Location", "The Old Hospital, second floor — PAUSED MID-COMBAT at ~11 PM (cliffhanger)"],
    ["Party Present", "All 7 PCs + Mr. Cat (Steel Defender, newly named)"],
    ["Total Rolls Logged", "163 archived + Valerian's rolls MISSING (sync gap ⚑) + 8 next-morning Flux rolls (archive-only)"],
    ["Party Level", "5 (XP from this session posted to Discord post-session — amount TBD ⚑)"],
    ["Spelling Checked", "Yes — 022426_Spell_Check_Log.md"],
  ];
  return [
    ...sectionHeader("Section 1 — Session Metadata"), spacer(160),
    new Table({ width: { size: TW, type: WidthType.DXA }, columnWidths: [lw, rw], borders: noTblBorders, rows: rows.map(([l, v]) => new TableRow({ children: [metaLabelCell(l, lw), metaValueCell(v, rw)] })) }),
    ...sectionDivider(),
  ];
}

function sectionPOV() {
  const entry = [
    "Still in the hospital. The second floor used to be where the nurses slept; now it's old blood and dust thick enough to read footprints in. Beast tracks. And boots again — the same fine boots from the village. He was up here too.",
    "Deanna went to peek around a corner and fell through a door instead, which is one way to start a fight. They came out of the walls after that — the screaming kind and the big kind, more of them than I liked, fast enough to jump wall to wall like the hooks we wear on our wrists. Valerian put a comet through the first one's skull and blew the dust off his fingers. He's been glowing all night. I think the grief has to go somewhere, and he's decided it goes through his hands.",
    "The metal cat has a name now. Mr. Cat. Distinguished gentleman, monocle pending. He blocked a claw meant for me and I'd take a bullet for him already.",
    "Samothy did the maddest thing I've seen since the gate — fired his wrist-hook clean through a runner, anchored it in the wall behind, and rode the cable into him so hard the wall finished the job. He stood up out of the wreckage covered in blood and just shook out his hands. Then later he put a bullet straight through another one's skull like it was nothing. The quiet twin is keeping count, because the commander— because we're all keeping count now. There's a prize for whoever puts down the most. I'm behind. I don't intend to stay behind.",
    "The new blade arrived mid-fight — two-headed, quick, made for the way I fight when the axe is too slow. First swing opened a thrall's ribs. It'll do.",
    "Zelda walked on a wall tonight like the hooks were made for her, missed her shot, laughed, healed Barrett twice anyway. He took a claw to the chest deep enough to matter and kept firing through it.",
    "It's late. The big one is still up — we hurt it, it's hurt bad, but it's still standing in the dark with its sniffing and its patience, and we stopped mid-swing because even hunters have to sleep. Tomorrow we finish it, find the pharmacy, find the book with a presence, and get out of this corpse of a building.",
    "We are not done with the second floor. It is not done with us.",
  ];
  return [
    ...sectionHeader("Section 2 — Character POV Journal"), spacer(80),
    ...subHeader("Vega Bloodroot — In-Character Journal Entry"), spacer(60),
    ...creamBlock([new TextRun({ text: "[VEGA'S JOURNAL — MEMOIR TITLE TBD: voice guide not yet drafted]", font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 })]),
    new Paragraph({ border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } }, spacing: { before: 80, after: 0 }, indent: { left: 200 }, children: [new TextRun({ text: "The hospital, still. Night.", font: F.bold, size: F.szBody, bold: true, color: C.journalText })] }),
    ...entry.map(t => new Paragraph({ border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } }, spacing: { before: 40, after: 40 }, indent: { left: 200 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, italics: true, color: C.journalText })] })),
    ...sectionDivider(),
  ];
}

function sectionAnalysis() {
  return [
    ...sectionHeader("Section 3 — Session Analysis"), spacer(160),
    ...subHeader("Narrative Summary"),
    para("Direct continuation of S02: the party ascends to the hospital's SECOND FLOOR (a nurses' dormitory — old blood from the meteor era, cobwebs, dust). Tracks in the dust: beasts, and a set of human footprints — implied continuity with the Beast Master's fine boots from Hampshire (\"Is it like the boots we saw downstairs?\" \"Oh yeah.\"). Listening revealed claw-scrapes, metal thuds, and faint SNIFFING."),
    para("Deanna's recon went sideways — a Bardic-rerolled Stealth that got WORSE (8→6) and a trip THROUGH a door — triggering the session-long, multi-wave brawl: feral thralls and beast thralls (wall-jumpers) emerging in waves, including ambushers from behind. The DM announced a KILL CONTEST: per-character kill tally, prize for the most this session (reward wording garbled in the audio ⚑)."),
    para("Highlights: Valerian (still grieving, still glowing — \"Bitch, I'm fucking glowing\") opened the scoring with a Starry Wisp head-shot and ran Moonbeam battlefield-control all night; his nat-20 Dex save became a Cirque du Soleil aerial dodge of a falling corpse. The Steel Defender was christened MR. CAT, ESQUIRE (future tuxedo paint and monocle marking discussed with full table commitment), and earned his keep deflecting attacks off Vega and Samothy. Samothy delivered the play of the night: hookshot THROUGH a feral thrall, anchored to the wall, riding the cable to smash it apart — a Spider-Man kill that earned next-session inspiration — then later a 29-to-hit pistol headshot (\"It's high noon\"). Zelda walked walls with the hookshot bracers (Attack on Titan style, formalized via Samothy's new homebrew item card), Lucky-rerolled a nat 1, and kept Barrett standing with two Healing Words (+Lunar Vitality). Barrett took a deep chest wound (21) and answered with relentless double Finger Guns — including a kill poached from the group (\"Kill steal!\") and a Risk Die that rolled a 1 (\"all of that for one more damage\"). Vega's homebrew DOUBLE-BLADED SCIMITAR arrived mid-session (built by Jill on the spot) enabling Sneak Attack; her turn in the recording gap is reconstructed from the archive."),
    para("At ~11 PM the DM called it MID-COMBAT — one badly wounded beast thrall still standing — the campaign's first cliffhanger. XP to be posted in Discord. Kill standings at pause: Samothy 2 · Valerian 1(+?) · Barrett 1 · Flux 2 · Zelda 0 · Deanna 0 (\"I don't think I've killed anybody yet, which is strange for this build\") · Vega 0 confirmed on-screen ⚑ (her gap-turn results unconfirmed)."),
    para("Table notes: recording started ~12 min late (a group Wisdom save vs. an unknown effect happened pre-recording ⚑); ~18-min recording gap mid-session (Vega's turn reconstructed from archive); Vega AFK ~2 min (Odin's food-aggression routine + headset disconnect); DDB had a rough night for everyone (initiative auto-roller mutiny, freezes); Taylorito/Taylorita coined for the two Taylors; Valerian's rolls absent from the archive all session ⚑.", { italics: true, color: C.mutedText }),
    spacer(160),
    ...subHeader("Session Setting"),
    para("Single location: the old hospital's second floor, night, same in-game day/night as S02's end (short rest between). The unresolved S02 sounds (heavy footsteps, breathing in another wing) now have bodies: the second floor was inhabited. The basement/morgue remains untouched."),
    spacer(160),
    ...subHeader("Locations Visited"), spacer(80),
    filledTable([{ label: "Location", w: 2800 }, { label: "Description", w: 3660 }, { label: "Notable Details", w: 2900 }], [
      { cells: ["Hospital — second floor (nurses' dormitory)", "Meteor-era bloodstains, cobwebs, dust, overturned gurneys; rooms off a hallway; barrels (one became a Catapult projectile)", "Beast tracks + the Beast Master's boot-prints AGAIN; multi-wave thrall ambush; combat unresolved"] },
    ]),
    spacer(160),
    ...subHeader("Quests / Objectives"),
    ...bullets([
      "FINISH THE FIGHT — one wounded beast thrall standing at pause. CLIFFHANGER.",
      "Hospital supply run / Bobby's book / nirnroot — all still pending (pharmacy & admin unreached; basement untouched).",
      "Kill contest — prize TBD (⚑ wording garbled); standings logged.",
      "The Beast Master's boots were on the second floor too — he toured the hospital as well as Hampshire. OPEN.",
      "⚑ Pre-recording group Wisdom save vs. unknown — what was it? (Samothy & Flux failed.)",
      "S01–S02 carryovers: spy, Beast Binder, missing children, Varan, 2-day rendezvous clock — no movement.",
    ]),
    spacer(160),
    ...subHeader("Scene / Timeline Breakdown"),
    ...bullets([
      "Scene 1 (pre-recording): session start, group Wisdom save vs. unknown effect ⚑ — reconstructed from archive only.",
      "Scene 2: Second-floor recon — dormitory, old blood, tracks (beasts + the fine boots), scraping/thuds/sniffing heard.",
      "Scene 3: Deanna's corner-peek — Stealth 8 → Bardic reroll 6 → falls THROUGH the door. Initiative (twice — VTT auto-roller mutiny).",
      "Scene 4: Wave 1 — feral + beast thralls. Valerian's Starry Wisp head-shot kill; Zelda goat-jumps onto prone Deanna and Thunderwaves (3d8).",
      "Scene 5: Kill contest announced. Mr. Cat summoned and named.",
      "Scene 6: Wave 2 from behind — wall-jumpers; Samothy knocked prone (cheesed AC 22 deflects one hit; 'as you level up, so do the monsters').",
      "Scene 7: Hookshot showcase — Zelda's wall-walk; Samothy's Catapult barrel (4d8); the Spider-Man cable-kill (next-session inspiration).",
      "Scene 8: Barrett's chest wound (21) + kill-steal; Healing Words; Vega's scimitar delivery + Sneak Attack debut (18).",
      "Scene 9 (recording gap, archive-reconstructed): Vega's full turn (DBS 23→15ish total + dagger 8); enemy turns.",
      "Scene 10 (part 2): final on-record round — Flux's bow kill (21), Deanna's 18-damage round, Valerian's Moonbeam tick (13), Samothy sweeps for surprises — PAUSED at Vega's turn end, ~11 PM.",
    ]),
    spacer(160),
    ...subHeader("Themes & Emotional Beats"),
    ...bullets([
      "Grief metabolized as radiance — Valerian's kill-streak and glow; the table letting him have it.",
      "Toys become doctrine — bracers, homebrew scimitar, Catapult physics: the party is learning to FIGHT with the world, not just in it.",
      "Competition as bonding — the kill contest turns horror into sport; Deanna's drought becomes a running gag.",
      "Mr. Cat — the construct crosses from equipment to beloved party member (real-world cat-naming pledge included).",
      "The boots again — quiet dread threaded through the comedy: he was HERE too.",
    ]),
    ...sectionDivider(),
  ];
}

function sectionCharacterActivity() {
  return [
    ...sectionHeader("Section 4 — Character Activity"), spacer(160),
    ...subHeader("Party Structure & Subgroups"), spacer(80),
    filledTable([{ label: "Location", w: 2100 }, { label: "Characters Present", w: 2500 }, { label: "Objective", w: 2900 }, { label: "Status", w: 1860 }], [
      { cells: ["Hospital 2F", "All 7 + Mr. Cat", "Clear the floor; find pharmacy/admin/book", "PAUSED MID-COMBAT — 1 wounded beast thrall up"] },
    ]),
    spacer(160),
    ...subHeader("NPCs"), spacer(80),
    filledTable([{ label: "Name", w: 1400 }, { label: "Race / Class", w: 1500 }, { label: "Last Interaction", w: 2700 }, { label: "Location", w: 1860 }, { label: "Status", w: 1900 }], [
      { cells: ["Mr. Cat (Esquire)", "Steel Defender construct (\"just a really big house cat\")", "Named; deflect-tanked for Vega & Samothy; tuxedo paint + monocle marking planned", "Hospital 2F", "Active (companion)"] },
      { cells: ["The Beast Master (unseen)", "Vampire", "Boot-prints found on the SECOND FLOOR too", "[Unknown]", "Active threat"] },
      { cells: ["Feral + beast thralls", "Vampire beasts", "Multi-wave ambush; ~6 slain, 1 wounded survivor at pause", "Hospital 2F", "1 remaining (paused)"] },
    ]),
    spacer(160),
    ...subHeader("Reputation & Relationships"),
    ...bullets([
      "Jill built TWO homebrew items for the party mid-session (Hookshot Arm Bracers card, Vega's double-bladed scimitar) — Vega: \"You're a beautiful human and I love you, and I know that we just met, but I mean that.\"",
      "Samothy's stunt economy with the DM matures — cool points convert to next-session inspiration.",
      "Taylorito (DM) / Taylorita (Vega's player) naming convention adopted by the table.",
      "Mr. Cat: full party adoption; Madi pledged the name to a future real-world cat (⚑ attribution pending).",
    ]),
    ...sectionDivider(),
  ];
}

function sectionArtifacts() {
  return [
    ...sectionHeader("Section 5 — Artifacts"), spacer(160),
    ...subHeader("Loot & Items"), spacer(80),
    filledTable([{ label: "Character / Owner", w: 2400 }, { label: "Item / Artifact", w: 4160 }, { label: "State / Context", w: 2800 }], [
      { cells: ["All 7 PCs", "HOOKSHOT ARM BRACERS — formalized via Samothy's homebrew card: +1 AC (attunement required), bonus action, 4 charges @ lvl 5 + reload period, tri-hook broadhead anchor", "First combat use: Zelda's wall-walk (high-ground advantage), Samothy's cable-kill. ⚑ attune or lose the AC"] },
      { cells: ["Vega Bloodroot", "DOUBLE-BLADED SCIMITAR (homebrew by Jill, mid-session) — 2d4+4, finesse → enables her Sneak Attack d6", "Debut: 18-damage hit; archive labels her tattoo die 'Eldritch Maul' ⚑"] },
      { cells: ["Samothy Smith-Wesson", "Mr. Cat, Esquire (named this session)", "Deflect reaction MVP; tuxedo + monocle cosmetics planned"] },
      { cells: ["Party", "No new loot — rooms unsearched (combat unresolved); barrels noted (one Catapulted)", "Pharmacy/admin/book still waiting"] },
    ]),
    ...sectionDivider(),
  ];
}

const ROLLS = [
  ["— PRE-RECORDING (8:16–8:27 PM) —", "Archive-reconstructed", "—", "Session began ~12 min before the recording", true],
  ["DM (Taylor)", "custom d20 / 2d20", "14; 23 [7,16]", "5:40 PM prep roll + 8:19 PM — FIRST DM-ACCOUNT ARCHIVE ROLLS (both pre-recording)", false],
  ["Whole party", "Flurry of custom d20s (~25 rolls)", "various incl. Vega nat 1, Barrett nat 1, Zelda 2 & 3", "Unlabeled group rolling — context unknown (pre-recording) ⚑", false],
  ["Whole party", "GROUP WISDOM SAVE vs ??? ⚑", "Zelda 16 · Barrett 18 · Deanna 15/16 · Vega 18 — pass; Samothy 4, Flux 3 (NAT 1) — FAIL", "Unknown effect, pre-recording — ask DM", false],
  ["— RECORDING BEGINS (~8:28 PM) —", "Second-floor recon", "—", "", true],
  ["Party (6 of 7)", "Perception sweep", "Zelda 23 & 24 · Vega 18/14 · Deanna 10 · Flux 8 · Barrett 6", "Claw-scrapes, metal thuds, faint sniffing. (Samothy 11 later.)", false],
  ["Deanna Smith-Wesson", "Investigation", "17", "Cobwebs, dust, beast prints + HUMAN BOOT-PRINTS (the fine boots again)", false],
  ["Deanna Smith-Wesson", "Stealth → Bardic reroll", "8 → 6 (WORSE)", "\"Oh, that's worse.\" Falls THROUGH the door → initiative", false],
  ["— COMBAT (multi-wave, UNRESOLVED) —", "Initiative ×2 (VTT auto-roller mutiny)", "—", "Final: Barrett 24 (adv 12,20) → Zelda 23 → Flux 22 → Deanna 11 → Samothy 10 → Vega 10; Valerian unsynced ⚑", true],
  ["Barrett Grimmskar", "Finger Guns ×2", "16, 18 → 8 + 6", "Both hit the feral thrall", false],
  ["Zelda \"Z\" Whipper", "Thunderwave (2nd-lvl, 3d8)", "11 [3,6,2]", "Goat-jump onto prone Deanna first; both targets passed (half dmg); 300-ft boom", false],
  ["Flux", "Silvered Longbow + Finger Guns", "16 → 14; 24 → 6", "", false],
  ["Valerian Hellebore", "Starry Wisp", "22 → 11 radiant", "KILL #1 — feral's head blown off, dust. (Transcript-only — sync gap)", false],
  ["Samothy Smith-Wesson", "(accidental Unarmed Strike)", "22", "\"That was on accident, ignore that. Damn, that's a good roll too.\"", false],
  ["Vega Bloodroot", "Greataxe reckless", "20 [11,13] → 11 (Savage reroll 10, kept 11)", "\"Dirty 20\"", false],
  ["DM — beast vs Vega", "Attack", "dirty 20 → 13 bludgeoning", "Transcript-only. Halved by Totem-style resistance talk → ~6", false],
  ["Barrett Grimmskar", "Finger Guns (incl. squeeze-shot disadv)", "21 hit, 13 miss → 8", "Threaded a shot past two allies", false],
  ["Zelda \"Z\" Whipper", "Acrobatics (hookshot wall-landing)", "15 [7+8]", "Lands ON THE WALL — high-ground advantage granted", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp adv → Lucky reroll", "10 [NAT 1,4] → 9 [3]", "Both miss — the Lego skeleton crit-fail animation, twice the heartbreak", false],
  ["Deanna Smith-Wesson", "Pistol", "21 [17] → 3", "\"You put the damn in damage\"", false],
  ["DM — kill contest announced", "—", "—", "\"Keep track of your kills. There's a reward for the person who ends up with the most.\" (reward wording garbled ⚑)", true],
  ["Samothy Smith-Wesson", "Pistol NAT 1 → inspiration reroll", "11 → 13", "Still missed. \"At least it's better than a 1.\" + Hunter's Mark 4", false],
  ["Vega Bloodroot", "Greataxe adv", "10 [8,2]", "\"That was a 10 WITH advantage.\"", false],
  ["Flux", "Longbow 10 miss; Finger Guns", "26 [19] → 7", "", false],
  ["DM — beast vs Samothy", "dirty 20 + prone rider", "Str save 8 — PRONE; attack MISSED (AC 17+5=22 cheese)", "\"Told you I was going to cheese, Taylor.\" Mr. Cat deflect assist", false],
  ["Barrett Grimmskar", "Finger Guns ×2", "19, 19 → 8 + 10", "KILL — \"He is dead.\" / \"Kill steal!\"", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp", "16 → 15 [7,8]", "Ziplines down first", false],
  ["Flux", "Longbow + SA + Finger Guns", "20 → 8+9+10 = 27; 24 → 6", "KILL (thrall B) — \"Dead. Yes.\"", false],
  ["Deanna Smith-Wesson", "Pistol + Hail of Thorns (NEW spell)", "23 → 2 + 5 = 7", "Mis-called Perforating Shot first, corrected", false],
  ["Valerian Hellebore", "Moonbeam (2nd lvl, DC 16)", "save 13 FAIL → 17 radiant", "Battlefield control begins (transcript-only)", false],
  ["Samothy Smith-Wesson", "Catapult (2nd lvl) — barrel", "4d8 = 15 → save 22 pass → 8", "10-lb barrel at 90 ft; + Hunter's Mark 6 (max)", false],
  ["Vega Bloodroot", "Double-Bladed Scimitar DEBUT (adv)", "21 [14,10] → 11 + SA 5 + tattoo 2 = 18", "Homebrew delivered mid-combat by Jill", false],
  ["DM — beast vs Barrett", "2 attacks", "nat 20 + 23 → 15 total, halved? → 8 spoken", "Transcript-only resolution; then a 19 → 21 DAMAGE chest wound", false],
  ["Barrett Grimmskar", "Finger Guns ×2 + Risk Die", "16, 21 → 5 + 4 + d8: 1", "\"All of that for one more damage.\"", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp + Healing Word + Lunar Vitality", "22 [16] → 9; heal 9 [2,4]+3 + 4", "Keeping Barrett vertical", false],
  ["Valerian Hellebore", "NAT 20 Dex save (Heroic Inspiration spent on style)", "nat 20", "Aerial somersault dodge of a falling corpse — \"Cirque du Soleil\" (transcript-only)", false],
  ["Samothy Smith-Wesson", "HOOKSHOT CABLE-KILL — Str (grapple) check", "20 [19] ('dirty 20 with the +1')", "Hook THROUGH the feral, anchored to wall, body-slam ride: 11 dmg to it (DEAD), 6 to himself. NEXT-SESSION INSPIRATION awarded", false],
  ["Deanna Smith-Wesson", "Dagger 6 miss → inspiration 12 hit", "5/5 (roll-twice) +2 = 7 + HM 1", "", false],
  ["Valerian Hellebore", "Starry Wisp", "dirty 20 → 8", "\"Bitch, I'm fucking glowing.\" (transcript-only)", false],
  ["Samothy Smith-Wesson", "Pistol", "29 [19] → 8", "KILL — \"straight to the dome… It's high noon.\"", false],
  ["— RECORDING GAP (~10:29–10:47 PM) — archive-reconstructed", "—", "—", "", true],
  ["Vega Bloodroot", "DBS adv 23 [16,11] → 9 + SA 3 + tattoo 3; dagger 8; DBS 6; DBS adv 12 [5,5] miss", "—", "Her full turn (+ enemy turns) fell in the gap", false],
  ["— PART 2 (final on-record round) —", "—", "—", "", true],
  ["Barrett Grimmskar", "Finger Guns", "11 miss, 20 [14] hit → 9", "\"Time to finger blast this little bitch again\"", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp + Healing Word", "15 [9] → 3 doubled? + heal 8 [1,4]+3", "Second Barrett patch-up", false],
  ["Flux", "Silvered Longbow + SA", "26 [19] → 11+7+3 = 21", "KILL — \"Dead.\"", false],
  ["Deanna Smith-Wesson", "Pistol (roll-twice) + Perforating Shot", "20 [16] → 10+2 = 12; PS half = 6 → 18 total", "Target vexed, NOT dead (\"Do I kill it?\" \"No.\")", false],
  ["Valerian Hellebore", "Moonbeam tick (DC 16)", "enemy save NAT 20 → still 13 radiant (half)", "Transcript-only; scooched the beam", false],
  ["Samothy Smith-Wesson", "Sweep for surprises", "—", "Mr. Cat + Sam check the flank — clear", false],
  ["Vega Bloodroot", "Greataxe adv (final on-record roll)", "17 [7,10] → 8 + tattoo 2 = 10", "\"Hey, that's my turn!\" → DM: PAUSED. Cliffhanger.", false],
  ["— NEXT MORNING —", "Flux ×8 rolls (10:31 AM 02/25)", "—", "Jill solo sheet-rolling — archive-only, not session play. Also one Flux Fire Bolt 10:53 PM (12→12) with no transcript counterpart ⚑", true],
];

function sectionLogs() {
  return [
    ...sectionHeader("Section 6 — Logs"), spacer(160),
    ...subHeader("Encounters"), spacer(80),
    filledTable([{ label: "Enemies", w: 2100 }, { label: "Location", w: 1800 }, { label: "Party / Allies", w: 2200 }, { label: "Trigger", w: 1660 }, { label: "Outcome", w: 1600 }], [
      { cells: ["Multi-wave: feral thralls + beast thralls (wall-jumpers, ambushers from behind)", "Hospital 2F", "All 7 + Mr. Cat", "Deanna fell through a door (nat-1 energy)", "UNRESOLVED — ~6 slain, 1 wounded beast thrall standing at pause"] },
    ]),
    spacer(160),
    ...subHeader("Initiative (archive-verified — rolled TWICE due to VTT auto-roller mutiny)"),
    para("Volley 1 (auto/manual mix): Deanna 20 · Zelda 14 · Samothy 12 · Vega 11 · Barrett 22(adv) · Flux 8. Re-roll: Barrett 24 (adv 12,20) → Zelda 23 → Flux 22 → Deanna 11 → Samothy 10 → Vega 10 → Valerian (unsynced; played after Deanna). Order used at table: Barrett → Zelda → Flux → [enemy] → Deanna → Valerian → Samothy+Mr. Cat → Vega → [enemies]."),
    spacer(160),
    ...subHeader("Encounter Summary"),
    para("A sprawling, toy-driven brawl that never finished. The party's new kit defined it: hookshot bracers used for wall-walking (Zelda) and as a murder-zipline (Samothy's cable-kill — the campaign's first physics homicide); the homebrew scimitar unlocking Vega's Sneak Attack; Mr. Cat's Deflect canceling hits per the S02 house rule; Catapult turning the scenery into ammunition. Damage economy: Barrett's 21-damage chest wound was the scare (two Healing Words + Lunar Vitality answered); Samothy's AC-22 cheese voided a dirty-20 hit and drew the DM's 'monsters scale too' warning. Kill standings at pause — Samothy 2, Flux 2, Valerian 1+, Barrett 1, Vega/Zelda/Deanna 0 — with one wounded beast thrall alive and the contest prize unclaimed."),
    spacer(160),
    ...subHeader("Full Roll Log"), spacer(60),
    new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "Dark rows = phase boundaries. Source: Supabase (2026-02-24) ⇄ corrected transcript. 163 archived rolls; Valerian's rolls MISSING (sync gap ⚑ — his actions logged transcript-only); ~18-min recording gap reconstructed from archive; DM in-combat rolls transcript-only as usual.", font: F.body, size: F.szBody, italics: true, color: C.mutedText })] }),
    filledTable([{ label: "Character / NPC", w: 1700 }, { label: "Roll / Check", w: 2500 }, { label: "Result", w: 1400 }, { label: "Context / Outcome", w: 3760 }], ROLLS.map(r => ({ cells: [r[0], r[1], r[2], r[3]], combat: r[4] }))),
    ...sectionDivider(),
  ];
}

function sectionQuotes() {
  const quotes = [
    ["Samothy Smith-Wesson (Josh)", "Funny", "Oh hell yeah, just went straight to the dome, just falls backwards. It's high noon."],
    ["Valerian Hellebore (Chase)", "Funny", "Bitch, I'm fucking glowing."],
    ["Valerian Hellebore (Chase)", "Funny", "You guys ready for the most epic fucking turn you've seen in your goddamn lives?"],
    ["Taylor (DM)", "DM Quip", "No, Tank's got to do what Tank's got to do."],
    ["Taylor (DM)", "DM Quip", "Just remember, as you level up, so do the monsters."],
    ["Taylor (DM)", "DM Quip", "The only one that it sucks for to get a 1 is the tank. If the tank gets a 1, you have to mock them."],
    ["Vega Bloodroot (Taylor)", "Funny", "Vega channels her inner Captain America and says, I could do this all day."],
    ["Taylor → Jill (above-table)", "Poignant", "You're a beautiful human and I love you, and I know that we just met, but I mean that."],
    ["Doug (Barrett)", "Funny", "Kill steal!"],
    ["Christie (Zelda)", "Funny", "I got a nat 1. What are arms?"],
    ["Josh (Samothy)", "Banter", "Tries to get up but looks like a fish flopping out of water."],
    ["Josh (Samothy)", "Banter", "Told you I was going to cheese, Taylor."],
    ["Madi (Deanna)", "Funny", "I thought we could call them Taylorito for Taylor the male and Taylorita for Taylor the female."],
    ["Josh (Samothy)", "Funny", "Yes, Mr. Cat, he's a distinguished gentleman."],
    ["Madi (Deanna)", "Funny", "I don't think I've killed anybody yet, which is strange for this build."],
    ["Chase (above-table, on dice)", "Banter", "They're pretty, but girl, that's all they are. They're real mean girl at school. They're really pretty, but they fucking hate you."],
  ];
  return [
    ...sectionHeader("Section 7 — Quotes & Language"), spacer(160),
    ...subHeader("Quote Board"), spacer(60),
    ...quotes.flatMap(([n, t, q]) => quoteBlock(n, t, q)),
    spacer(160),
    ...subHeader("Profanity Record"), spacer(80),
    filledTable([{ label: "Speaker", w: 1800 }, { label: "Curse Word", w: 2200 }, { label: "Frequency", w: 1400 }, { label: "Context", w: 3960 }], [
      { cells: ["Chase (Valerian)", "fuck (10) · shit (4) · bitch (3) · motherfucker (1) · damn/goddamn (2)", "20", "Three-peat champion — \"casting Starry Wisp at this motherfucker\""] },
      { cells: ["Taylor (Vega)", "shit (3) · fuck (2) · damn/goddamn (3)", "8", ""] },
      { cells: ["Josh (Samothy)", "damn (3) · shit (2) · fuck (1)", "6", ""] },
      { cells: ["Taylor (DM)", "fuck (2) · bitch (1) · damn (1)", "4", "Quieter night — kids asleep?"] },
      { cells: ["Christie (Zelda)", "fuck (2) · shit (1)", "3", "\"Jesus fucking Christ\" at the 20-damage hit"] },
      { cells: ["Doug (Barrett)", "fuck (1) · bitch (1) · damn (1)", "3", "\"Time to finger blast this little bitch again\""] },
      { cells: ["Madi (Deanna)", "damn (2)", "2", ""] },
      { cells: ["Unattributed (A-blob)", "fuck (2) · damn/goddamn (2)", "(4)", "Doug/DM mix"] },
    ]),
    spacer(160),
    ...subHeader("Alternate Title Options"), spacer(80),
    filledTable([{ label: "Type", w: 1800 }, { label: "Proposed Title", w: 7560 }], [
      { cells: ["Character", "Mr. Cat, Esquire ← FINAL (chosen by Taylor)"] },
      { cells: ["Quote", "It's High Noon"] },
      { cells: ["Event", "Kill Count"] },
      { cells: ["Location", "The Second Floor"] },
      { cells: ["Thematic", "To Be Continued (first cliffhanger)"] },
    ]),
    spacer(120),
    new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.subRule, space: 4 } },
      spacing: { before: 0, after: 100 },
      children: [
        new TextRun({ text: "FINAL CHOSEN TITLE:   ", font: F.bold, size: F.szSub, bold: true, color: C.sectionText }),
        new TextRun({ text: "Mr. Cat, Esquire  (confirmed by Taylor, 06/06/2026)", font: F.body, size: F.szBody, color: C.bodyText }),
      ]
    }),
    ...sectionDivider(),
  ];
}

function sectionArchivistNotes() {
  return [
    ...sectionHeader("Section 8 — Archivist Notes"), spacer(160),
    ...subHeader("Patterns, Progress & Future Implications"),
    ...bullets([
      "FIRST CLIFFHANGER — next session opens mid-initiative with one wounded beast thrall. The S04 recording (030426) should resume this combat; verify continuity.",
      "The Beast Master's boots on the SECOND FLOOR escalate the Hampshire thread: he toured this building too. The book? The morgue?",
      "Mobility meta arrived: hookshot bracers used 3 distinct ways in one fight (wall-perch, zipline reposition, lethal cable-ride). The DM rewards physics creativity with inspiration — expect more.",
      "Vega's rebuild is materializing piecemeal: Totem-Warrior-style resistance talk, Savage Attacker confirmed on sheet, the finesse-weapon project completed (homebrew DBS + Sneak Attack). Formal sheet state ⚑ unconfirmed.",
      "Samothy's cheese arc (AC 22, +10 pistol) drew explicit DM counter-pressure: \"as you level up, so do the monsters.\"",
      "Kill-contest standings carry into the resolution: Samothy 2, Flux 2, Valerian 1+, Barrett 1, Vega/Zelda/Deanna 0 (Vega's gap-turn may have changed this ⚑).",
      "Deanna's combat drought is now a table bit (\"strange for this build\") — 2 sessions of near-zero damage output despite 31+12 rolls.",
    ]),
    spacer(160),
    ...subHeader("Continuity Flags, Missing Info & Ambiguities"), spacer(80),
    filledTable([{ label: "Flag Type", w: 1800 }, { label: "Description", w: 4560 }, { label: "Source", w: 1800 }, { label: "Status", w: 1200 }], [
      { cells: ["Archive", "VALERIAN'S ROLLS MISSING all session despite active play (DDB digital dice visibly used — owl set). Investigate sync before next run", "Roll archive", "OPEN ⚑"] },
      { cells: ["Pre-recording", "Group Wisdom save vs unknown effect (Samothy 4, Flux nat-1 FAIL) + ~25 unlabeled d20s before recording started", "Archive 8:16–8:27 PM", "OPEN — ask DM"] },
      { cells: ["Garbled", "Kill-contest reward: \"The Beast Binder, the risk to you\"", "00:50:13", "OPEN — Taylor asking"] },
      { cells: ["Shorthand", "DM + Christie said \"Beast Binder\" for beast thralls twice", "01:35:08 / 02:02:51", "Presumed shorthand ⚑"] },
      { cells: ["Item", "DDB labels Vega's tattoo damage die \"Eldritch Maul\" (vs Eldritch Claw Tattoo)", "Archive", "OPEN — minor"] },
      { cells: ["Archive-only", "Flux Fire Bolt 10:53 PM (12→12) — no transcript counterpart; Flux knows Fire Bolt?", "Archive", "OPEN"] },
      { cells: ["Attribution", "\"My husband said we can name a cat Mr. Cat\" — Madi or Taylor", "02:11:06", "OPEN"] },
      { cells: ["Names", "\"Orphe\" (00:31:33) · \"Kira\" (00:10:40) · \"He's got a half-elf\" (01:30:10)", "Transcript", "Garbled"] },
      { cells: ["XP", "Posted to Discord post-session — amount not in any source", "02:13:23", "OPEN — get from Discord"] },
      { cells: ["Misclick", "Vega \"healed myself for 8\" = damage misclick (Taylor-confirmed)", "01:29:30", "RESOLVED"] },
    ]),
    spacer(400),
    new Paragraph({ alignment: AlignmentType.CENTER, border: { top: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 8 } }, spacing: { before: 0, after: 0 }, children: [new TextRun({ text: "— END OF SESSION NOTES (COMBAT TO BE CONTINUED) —", font: F.body, size: F.szBody, color: C.endText, italics: true, characterSpacing: 80 })] }),
  ];
}

const doc = new Document({
  numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 280 } } } }] }] },
  styles: { default: { document: { run: { font: F.body, size: F.szBody, color: C.bodyText } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    children: [...titleBlock(), ...sectionMetadata(), ...sectionPOV(), ...sectionAnalysis(), ...sectionCharacterActivity(), ...sectionArtifacts(), ...sectionLogs(), ...sectionQuotes(), ...sectionArchivistNotes()]
  }]
});

const OUT = String.raw`C:\Users\theli\ashfall_vault\Session_Sources\Session_Notes\AB_03_022426_Mr_Cat_Esquire.docx`;
function fixTblBorders(p) {
  const zip = new AdmZip(p);
  let xml = zip.getEntry("word/document.xml").getData().toString("utf-8");
  let n = 0;
  xml = xml.replace(/<w:tblBorders>([\s\S]*?)<\/w:tblBorders>/g, (m, inner) => "<w:tblBorders>" + inner.replace(/<w:(?:left|right)\b[^>]*\/>/g, () => { n++; return ""; }) + "</w:tblBorders>");
  zip.updateFile("word/document.xml", Buffer.from(xml, "utf-8"));
  zip.writeZip(p);
  return n;
}
Packer.toBuffer(doc).then(b => {
  fs.writeFileSync(OUT, b);
  console.log("Done ->", OUT, "| borders stripped:", fixTblBorders(OUT), "| KB:", (fs.statSync(OUT).size / 1024).toFixed(1));
}).catch(e => { console.error(e); process.exit(1); });
