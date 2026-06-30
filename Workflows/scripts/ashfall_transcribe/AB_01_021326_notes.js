/* ===================================================================
 * AB_01_021326_notes.js — Session 1 "Graduation Day" filled notes
 * Engine/theme: ashfall_v1.js (clone). Content: 021326 corrected
 * transcript + Supabase roll archive (session_date 2026-02-12).
 * Includes fix_tbl_borders post-processing (adm-zip repack).
 * =================================================================== */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
  LevelFormat
} = require('docx');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

// ─── FONT / PALETTE / BORDERS (identical to ashfall_v1.js) ───────
const F = { body: "Aptos", bold: "Aptos", expand3: 60, szBody: 18, szSub: 20, szSection: 24, szTitle: 48 };
const C = {
  titleText: "6E1414", sectionFill: "D6CDC4", sectionText: "3A1414", sectionRule: "B5532B",
  subFill: "EAE6E0", subText: "7A2E2E", subRule: "7A2E2E",
  creamFill: "EFE3CC", creamText: "3A1414", creamRule: "B08D3C",
  metaLabelFill: "5A1E1E", metaLabelText: "FFFFFF", metaValueFill: "DCD3C9", metaValueText: "2B2018",
  tableHeaderFill: "5A1E1E", tableHeaderText: "FFFFFF", evenRow: "EDE8E1", oddRow: "D8CFC4", tableBodyText: "2B2018",
  bodyText: "2B2018", mutedText: "6E635A", subtitleText: "EDE8E1", journalText: "3A1414",
  quoteNameText: "3A1414", endText: "9A8A86", gold: "B08D3C", lavender: "B3A39A",
  combatFill: "3A1414", combatText: "F2D9C0", white: "FFFFFF",
};
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const whiteBorder = { style: BorderStyle.SINGLE, size: 1, color: "FFFFFF" };
const allWhite = { top: whiteBorder, bottom: whiteBorder, left: whiteBorder, right: whiteBorder };
const noTblBorders = { top: noBorder, bottom: noBorder, insideH: noBorder, insideV: noBorder };
const TW = 9360;

// ─── PRIMITIVES (from ashfall_v1.js) ─────────────────────────────
function spacer(pts = 120) { return new Paragraph({ spacing: { before: pts, after: 0 }, children: [] }); }
function sectionDivider() {
  return [
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 1 } }, spacing: { before: 360, after: 0 }, children: [] }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.subRule, space: 1 } }, spacing: { before: 60, after: 240 }, children: [] }),
  ];
}
function sectionHeader(text) {
  return [
    new Paragraph({
      shading: { fill: C.sectionFill, type: ShadingType.CLEAR }, spacing: { before: 0, after: 0 },
      children: [new TextRun({ text: text.toUpperCase(), font: F.bold, size: 24, bold: true, color: C.sectionText, characterSpacing: 80 })]
    }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.sectionRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
  ];
}
function subHeader(text) {
  return [
    new Paragraph({
      shading: { fill: C.subFill, type: ShadingType.CLEAR },
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } },
      spacing: { before: 200, after: 0 }, indent: { left: 120 },
      children: [new TextRun({ text: text.toUpperCase(), font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })]
    }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
  ];
}
function creamBlock(children) {
  return [
    new Paragraph({
      shading: { fill: C.creamFill, type: ShadingType.CLEAR },
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.creamRule, space: 6 } },
      spacing: { before: 120, after: 0 }, indent: { left: 200 }, children
    }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.creamRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
  ];
}
function thCell(text, width) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA }, borders: allWhite,
    shading: { fill: C.tableHeaderFill, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 140, right: 140 }, verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.bold, size: F.szBody, bold: true, color: C.tableHeaderText })] })]
  });
}
function tdCell(text, width, opts = {}) {
  const fill = opts.combat ? C.combatFill : (opts.alt ? C.oddRow : C.evenRow);
  const textColor = opts.combat ? C.combatText : C.tableBodyText;
  return new TableCell({
    width: { size: width, type: WidthType.DXA }, borders: allWhite,
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 140, right: 140 }, verticalAlign: VerticalAlign.TOP,
    children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.body, size: F.szBody, color: textColor })] })]
  });
}
function metaLabelCell(text, width) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA }, borders: allWhite,
    shading: { fill: C.metaLabelFill, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.bold, size: F.szBody, bold: true, color: C.metaLabelText })] })]
  });
}
function metaValueCell(text, width) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA }, borders: allWhite,
    shading: { fill: C.metaValueFill, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.body, size: F.szBody, color: C.metaValueText })] })]
  });
}

// ─── FILLED-CONTENT HELPERS ──────────────────────────────────────
function para(text, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.before ?? 80, after: opts.after ?? 80 },
    children: [new TextRun({ text, font: F.body, size: F.szBody, color: opts.color || C.bodyText, italics: !!opts.italics, bold: !!opts.bold })]
  });
}
function bullets(items) {
  return items.map(t => new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: C.bodyText })]
  }));
}
function filledTable(cols, rows) {
  // rows: array of { cells: [..strings], combat?: bool }
  return new Table({
    width: { size: TW, type: WidthType.DXA },
    columnWidths: cols.map(c => c.w),
    borders: noTblBorders,
    rows: [
      new TableRow({ tableHeader: true, children: cols.map(c => thCell(c.label, c.w)) }),
      ...rows.map((r, i) => new TableRow({
        children: cols.map((c, j) => tdCell(r.cells[j] ?? "", c.w, { alt: i % 2 === 1, combat: !!r.combat }))
      }))
    ]
  });
}
function quoteBlock(name, tag, quote) {
  return creamBlock([
    new TextRun({ text: `${name}  ·  [${tag}]`, font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 }),
    new TextRun({ break: 1 }),
    new TextRun({ text: `"${quote}"`, font: F.body, size: F.szBody, italics: true, color: C.creamText }),
  ]);
}

// ─── TITLE BLOCK ─────────────────────────────────────────────────
function titleBlock() {
  return [
    spacer(200),
    new Paragraph({
      spacing: { before: 0, after: 80 },
      children: [new TextRun({ text: "Graduation Day", font: F.bold, size: F.szTitle, bold: true, color: C.titleText })]
    }),
    new Paragraph({
      shading: { fill: C.subFill, type: ShadingType.CLEAR },
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } },
      spacing: { before: 0, after: 0 }, indent: { left: 120 },
      children: [new TextRun({ text: "Session 01  ·  02/13/2026  ·  Ashfall Britannia", font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })]
    }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
    spacer(280),
  ];
}

// ─── SECTION 1 — METADATA ────────────────────────────────────────
function sectionMetadata() {
  const lw = 2400, rw = TW - lw;
  const rows = [
    ["Campaign", '"Ashfall Britannia" Campaign'],
    ["Session Number", "01 (first full session; a short uncounted, unrecorded intro session preceded it)"],
    ["Session Date", "02/13/2026 (played evening of 02/12 into 02/13; DDB roll archive keys this session to 2026-02-12 ET)"],
    ["Start Location", "Banquet hall of the walled museum-castle base — Ashwarden boot-camp graduation"],
    ["End Location", "Inside the base main gate — dismissed to barracks for a long rest"],
    ["Party Present", "All 7 PCs: Vega Bloodroot, Barrett Grimmskar, Deanna Smith-Wesson, Flux, Samothy Smith-Wesson, Valerian Hellebore, Zelda \"Z\" Whipper. Key NPCs: Cmdr. Thornfall, Capt./Lt. Bron Hargraven, Inspector Meridia Vale, the Beast Binder"],
    ["Total Rolls Logged", "93 in DDB archive (92 in-session + 1 pre-session); DM rolls absent from archive (transcript-only)"],
    ["Party Level", "4 → 5 (level-up awarded at session end via DM-calculated XP)"],
    ["Spelling Checked", "Yes — 021326_Spell_Check_Log.md (12 corrections, 11 reassignments, 11 open flags)"],
  ];
  return [
    ...sectionHeader("Section 1 — Session Metadata"),
    spacer(160),
    new Table({
      width: { size: TW, type: WidthType.DXA }, columnWidths: [lw, rw], borders: noTblBorders,
      rows: rows.map(([label, val]) => new TableRow({ children: [metaLabelCell(label, lw), metaValueCell(val, rw)] }))
    }),
    ...sectionDivider(),
  ];
}

// ─── SECTION 2 — POV JOURNAL ─────────────────────────────────────
function sectionPOV() {
  const entry = [
    "Graduation. Months of drills and frozen mornings, and what we got for it was dessert and a ceremony. The officers called us up to the round table one by one. They pressed the Masquerade into my arm — a tattoo that is more than a tattoo. It's mine now.",
    "Then the bells started.",
    "There were people outside the gate. Children. Fists on iron. And the man who was supposed to protect them — Commander Varan — ordered the gate shut and slipped out the back like the coward he is. Thornfall didn't hesitate. She sent us out with new bracers on our wrists, hooks meant to throw us up walls, because the things out there can hear a heartbeat from across a plaza.",
    "The fog moved wrong. Then they came — on all fours, jaws split too wide, screaming instead of speaking. The first one leapt at me and I cut it in half in the air. Its blood went everywhere. In my hair. Maybe in my mouth. I didn't stop swinging.",
    "Then the pale one stepped out of the fog. Gold eyes sunk deep, scars dripping down his arms like ink. He called us cattle. Said our hearts would beat louder when they're offered to the Mistress of Hunger — whoever she is. We carved through everything he sent at us, and he watched like it was theater. Deanna shot him; he caught the bullet. He whispered his name into her ear and then stole it right back out of her head.",
    "Before he vanished, he left us a parting gift: they got in because someone let them in. A traitor. One of ours.",
    "We brought the civilians home. All of them. Hargraven said we saved more lives than we know — that unlike our commander, we didn't run. He's right. I didn't run. I'm not sure I remember how.",
    "The one they call the Beast Binder wants to fight me when I'm stronger. Good. I'll be stronger.",
  ];
  return [
    ...sectionHeader("Section 2 — Character POV Journal"),
    spacer(80),
    ...subHeader("Vega Bloodroot — In-Character Journal Entry"),
    spacer(60),
    ...creamBlock([
      new TextRun({ text: "[VEGA'S JOURNAL — MEMOIR TITLE TBD: voice guide not yet drafted]", font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 }),
    ]),
    new Paragraph({
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } },
      spacing: { before: 80, after: 0 }, indent: { left: 200 },
      children: [new TextRun({ text: "Two nights before Christmas.", font: F.bold, size: F.szBody, bold: true, color: C.journalText })]
    }),
    ...entry.map(t => new Paragraph({
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } },
      spacing: { before: 40, after: 40 }, indent: { left: 200 },
      children: [new TextRun({ text: t, font: F.body, size: F.szBody, italics: true, color: C.journalText })]
    })),
    ...sectionDivider(),
  ];
}

// ─── SECTION 3 — SESSION ANALYSIS ────────────────────────────────
function sectionAnalysis() {
  return [
    ...sectionHeader("Section 3 — Session Analysis"),
    spacer(160),
    ...subHeader("Narrative Summary"),
    para("The party graduated from Ashwarden boot camp at a banquet in the walled museum-castle base, two in-world days before Christmas. Commanding officers Inspector Meridia Vale, Commander Thornfall, and Captain Bron Hargraven presided. Each PC was ceremonially granted a personalized magic item chosen \"for what they'll need\": Flux's Fantabulous Flipside Frock (Flux), the Masquerade Tattoo (Vega), a notebook/paper item (Deanna), the \"Power Pole\" stick (Samothy), the witch Florence's Cloak of Fashion (Valerian), Barrett's Directional Doohickey (Barrett), and a mood ring (Zelda)."),
    para("Mid-dessert, alarm bells rang: vampires inside the city. The recruits were issued paired grappling-hook arm bracers (attunement; +1 AC; built for vertical escape from wall-climbing vampires), then armed and armored from the Ashwarden armory. At the main gate, civilians were trapped outside pounding on the iron — Commander Varan had ordered the gates closed and fled through the back gate, taking circumstances that left the gate lever missing. Lt. Hargraven briefed the party; Thornfall sent them through a crack in the gate to rescue civilians, do recon, and retrieve the spare lever from the far guard shack."),
    para("In the fog-choked district beyond, the party fought two waves of feral vampire thralls (run at-table as reskinned \"gnolls\") — eight slain in the first wave, seven in the second. Between waves, a vampire captain revealed himself: the Beast Binder, trainer of the clan's vampire beasts, servant of the \"Mistress of Hunger.\" He shrugged off nearly everything (blackening Valerian's Moonbeam mid-beam, catching Deanna's bullet), took a total of 8 unavoidable damage, and ultimately halted a third wave — sparing the party because they \"entertained\" him. He revealed that the vampires got in because someone let them in: a spy among the recruits. He whispered his name into Deanna's ear, then magically blocked the memory, and vanished."),
    para("The party escorted every civilian safely inside, retrieved the lever, and was debriefed by Lt. Hargraven, who turned ghostly pale at the news of a vampire captain this far south — the last scouting report placed the Beast Binder far north. He ran to find the commander. The party earned enough XP to reach level 5, planned Artificer infusions (Returning Weapon for Vega's axe, future Bag of Holding), and the DM announced a downtime-tasks system (new Discord channel). Vega's player crystallized her character voice: \"the Regina George of Barbarians.\""),
    para("Table notes: all 7 players present; Taylor and Jill were absent from the prior (uncounted) session and got the Ashwardens re-introduction. Played on D&D Beyond VTT (new stickers/animated maps caused recurring \"stop moving my table\" antics).", { italics: true, color: C.mutedText }),
    spacer(160),
    ...subHeader("Session Setting"),
    para("World premise (DM recap, opening of session): a meteor struck the Earth when the PCs were children, blanketing the land in ash and permanent cloud-dark. Vampires emerged in the aftermath; humanity is on the brink of extinction, holed up behind walls. The base is an old museum that was once a castle. The PCs volunteered for the military special forces — the Ashwardens — who venture beyond the walls for supplies, reclamation, and old-world tech. Session opens at their boot-camp graduation banquet: winter, two days before Christmas. In-game days elapsed since campaign start: [Unknown]."),
    spacer(160),
    ...subHeader("Locations Visited"),
    spacer(80),
    filledTable([
      { label: "Location", w: 2800 },
      { label: "Description", w: 3660 },
      { label: "Notable Details", w: 2900 },
    ], [
      { cells: ["Banquet hall — museum-castle base", "Round officers' table, recruit tables, roaring fire, weapons/armoire display of graduation items", "Graduation ceremony; magic item grants; Ashfall Britannia seal on display; first dessert in months"] },
      { cells: ["Ashwarden armory", "Racks of basic armor (leather, chainmail) and standard weapons", "Party self-selected base weapons; Thornfall supervising"] },
      { cells: ["Main gate", "Iron gate, lever-operated; guard shacks on both sides", "Civilians trapped outside; lever taken when Cmdr. Varan fled; spare lever in far guard shack"] },
      { cells: ["Ruined city district / plaza beyond gate", "Fog clinging unnaturally low, snow, smoke over the district, rooftop movement", "Both thrall battles; Beast Binder encounter; thralls hunt by sound/heartbeat"] },
    ]),
    spacer(160),
    ...subHeader("Quests / Objectives"),
    ...bullets([
      "Rescue the civilians outside the gate + retrieve the spare gate lever — COMPLETED (This Session). All civilians saved.",
      "Identify the spy/traitor who let the vampires into the city — OPENED (Beast Binder's reveal; Hargraven alerted).",
      "The Beast Binder — promised future confrontation (\"I hope in the near future that I get to fight you myself\") and cryptic \"there will be a time where I'll need your assistance\" — OPENED.",
      "Why is the Beast Binder this far south? Last scouting report had him far north — OPENED (Hargraven investigating).",
      "Commander Varan ordered the gates closed and fled — accountability/political fallout — OPENED.",
      "\"War is coming, and you'll likely be on the front lines for it\" (Hargraven) — OPENED.",
      "Housekeeping owed by DM: stat card for the grappling bracers; brass-knuckles homebrew for Vega (Pugilist content shared by Doug); downtime-tasks system (Discord channel created).",
    ]),
    spacer(160),
    ...subHeader("Scene / Timeline Breakdown"),
    ...bullets([
      "Scene 1: Recap & banquet. Ash-world premise re-established; graduation dinner in the banquet hall, 2 days before Christmas; Chase's PC seated alone (won the Perma Inspiration).",
      "Scene 2: Officers' address. Inspector Meridia Vale congratulates the class; Commander Thornfall introduces the Ashwardens (\"If you're looking for glory or comfort, turn around and go home\").",
      "Scene 3: Item ceremony. Each PC receives their personalized magic item at the round table.",
      "Scene 4: Alarms. Dessert interrupted by alarm bells; Vale runs out; grappling-hook bracers granted; Hargraven takes the other recruits.",
      "Scene 5: Armory. Thornfall outfits the party with base armor and weapons of choice.",
      "Scene 6: The gate. Civilians pounding on the iron; Lt. Hargraven reveals Cmdr. Varan closed the gates and fled; Thornfall sends the party out to rescue, recon, and retrieve the lever.",
      "Scene 7: Combat 1 — feral thralls emerge from the fog (8 slain). Vega bisects a lunging thrall; Thunderwave bursts one's skull via sound; radiant cantrips immolate several.",
      "Scene 8: The Beast Binder reveals himself — \"You fight well for cattle…\" — and unleashes the second wave.",
      "Scene 9: Combat 2 — 7 more thralls slain (incl. Steel Defender's first kill); the Beast Binder no-sells Moonbeam, banters with the twins, catches Deanna's bullet.",
      "Scene 10: The sparing. Beast Binder halts the third wave, reveals the spy, whispers/erases his name to Deanna, identifies his clan role, vanishes.",
      "Scene 11: Aftermath. Civilians escorted in, lever delivered; Hargraven's debrief (\"unlike our commander, you didn't run\") and alarm at a captain this far south.",
      "Scene 12: Wrap-up. XP → level 5; infusion planning; downtime tasks announced; Vega's \"Regina George of Barbarians\" persona declared.",
    ]),
    spacer(160),
    ...subHeader("Themes & Emotional Beats"),
    ...bullets([
      "Graduation into apocalypse — the ceremony's warmth (first dessert in months) inverted within minutes into first real blood.",
      "Cattle vs. predators — the Beast Binder's framing positions humanity as livestock; the party's competence unsettles that framing (he spares them out of entertainment, not mercy).",
      "Trust and betrayal — twin betrayals: Commander Varan's desertion (institutional) and the unidentified spy among the recruits (intimate).",
      "Sound is death — thralls hunt by heartbeat; Thunderwave weaponizes sound back at them; quiet snowfall as horror ambiance.",
      "Radiance vs. undeath — every radiant hit this session killed its target (DM rule: radiant doubled vs. vampires).",
      "Sibling bonds — the Smith-Wesson twins' competitive mirroring (matched Hunter's Marks, \"Twinsies\").",
      "Vega's emerging persona — confident, sarcastic, defiant (flipping off the Beast Binder with both hands); player-declared \"Regina George of Barbarians.\"",
    ]),
    ...sectionDivider(),
  ];
}

// ─── SECTION 4 — CHARACTER ACTIVITY ──────────────────────────────
function sectionCharacterActivity() {
  return [
    ...sectionHeader("Section 4 — Character Activity"),
    spacer(160),
    ...subHeader("Party Structure & Subgroups"),
    spacer(80),
    filledTable([
      { label: "Location", w: 2100 },
      { label: "Characters Present", w: 2500 },
      { label: "Objective", w: 2900 },
      { label: "Status", w: 1860 },
    ], [
      { cells: ["Beyond the main gate (city district)", "All 7 PCs (no split)", "Rescue civilians; recon enemy presence; retrieve spare gate lever", "Success — all objectives completed"] },
      { cells: ["Combat 2 onward", "+ Steel Defender (\"kitty-taur\" — Samothy's summoned construct)", "Support Samothy in combat", "First kill (trampled a thrall); dormant after battle"] },
    ]),
    spacer(160),
    ...subHeader("NPCs"),
    spacer(80),
    filledTable([
      { label: "Name", w: 1100 },
      { label: "Race / Class", w: 1260 },
      { label: "Affiliations", w: 1500 },
      { label: "Last Interaction", w: 1900 },
      { label: "Last Known Location", w: 1700 },
      { label: "Status", w: 900 },
    ], [
      { cells: ["Cmdr. Thornfall (f)", "[Unknown]", "Ashwardens (commander)", "Outfitted party at armory; sent them through the gate", "Base main gate", "Alive"] },
      { cells: ["Capt./Lt. Bron Hargraven ⚑ rank flag", "[Unknown]", "Ashwardens / base command", "Debrief: \"you didn't run\"; ran to find commander on hearing \"Beast Binder\"", "Base main gate → searching for commander", "Alive"] },
      { cells: ["Inspector Meridia Vale (f)", "[Unknown]", "Base command", "Graduation speech; ran toward the alarms", "[Unknown]", "Alive"] },
      { cells: ["Cmdr. Varan", "[Unknown]", "Base command", "None direct — ordered gates closed, fled through back gate (per Hargraven)", "[Unknown — fled]", "Alive (deserted post)"] },
      { cells: ["The Beast Binder", "Vampire (captain)", "Vampire clan — \"trains and maintains all the vampire beasts\"; serves the Mistress of Hunger", "Spared party; revealed spy; whispered + memory-blocked his name (Deanna); flipped Vega off back", "Vanished from the plaza", "Active threat"] },
      { cells: ["Feral vampire thralls", "Vampire beasts (\"gnolls\" at-table)", "Beast Binder's stock", "Two waves fought; third wave recalled", "City district", "15 slain"] },
    ]),
    spacer(160),
    ...subHeader("Reputation & Relationships"),
    ...bullets([
      "Party formally inducted into the Ashwardens (special forces) — top-of-class standing implied by the item ceremony.",
      "Lt. Hargraven — strongly favorable: \"You saved lives today, more than you know. And unlike our commander, you didn't run.\"",
      "The Beast Binder — marked the party as worthwhile entertainment; explicitly interested in a future personal duel; made \"harem\" offers toward Deanna (and extended it to Samothy); memory-blocked his name with Deanna.",
      "Cmdr. Varan — publicly branded a coward by Lt. Hargraven in front of the party; institutional fallout pending.",
      "Intraparty: Smith-Wesson twins' rivalry (Deanna shoved Samothy aside at the ceremony; matched Hunter's Marks); Barrett protective of Zelda (\"he's going to help his friend Z\"); Vega's new alpha-sass persona declared and welcomed by the table.",
    ]),
    ...sectionDivider(),
  ];
}

// ─── SECTION 5 — ARTIFACTS ───────────────────────────────────────
function sectionArtifacts() {
  return [
    ...sectionHeader("Section 5 — Artifacts"),
    spacer(160),
    ...subHeader("Loot & Items"),
    spacer(80),
    filledTable([
      { label: "Character / Owner", w: 2400 },
      { label: "Item / Artifact", w: 4160 },
      { label: "State / Context", w: 2800 },
    ], [
      { cells: ["Flux", "Flux's Fantabulous Flipside Frock", "Graduation magic item; worn immediately"] },
      { cells: ["Vega Bloodroot", "Masquerade Tattoo", "Graduation magic item; applied to her arm at the ceremony"] },
      { cells: ["Deanna Smith-Wesson", "Notebook/paper item (\"handy dandy notebook\")", "Graduation magic item; handed as a piece of paper — properties not yet shown"] },
      { cells: ["Samothy Smith-Wesson", "The \"Power Pole\" (stick)", "Graduation magic item; named on the spot"] },
      { cells: ["Valerian Hellebore", "Cloak of Fashion — the witch Florence's cloak", "Graduation magic item; light-colored, \"aggressively too thin to offer any real protection\""] },
      { cells: ["Barrett Grimmskar", "Barrett's Directional Doohickey", "Graduation magic item; golf-ball-sized weather-vane compass that finds north"] },
      { cells: ["Zelda \"Z\" Whipper", "Mood ring", "Graduation magic item; worn immediately"] },
      { cells: ["All 7 PCs", "Grappling-hook arm bracers (pair; attunement; +1 AC)", "Granted at alarm; Assassin's-Creed-style hook launchers for vertical escape. ⚑ DM owes the item card"] },
      { cells: ["Samothy Smith-Wesson", "Enspelled semi-automatic pistol (common) + Parlor Gun (hidden one-shot — name: \"Peter Pistol\" vs \"Tanya\" ⚑ unconfirmed)", "Armory pick + concealed backup approved by DM (\"got to give it a sexy name\")"] },
      { cells: ["Samothy Smith-Wesson", "Steel Defender — \"kitty-taur\" (magical metal cat construct)", "House-ruled: summoned via action/summoning word; dormant after combat/task"] },
      { cells: ["Vega Bloodroot", "Greataxe; rapier (finesse, retconned pickup); brass knuckles (pending homebrew — diamond-studded suggested)", "Armory picks; Pugilist content shared by Doug for the knuckles"] },
      { cells: ["Deanna Smith-Wesson", "Pistol (weapon mastery; swapped above-table from double-barrel shotgun), short sword, dagger", "Armory picks"] },
      { cells: ["Valerian Hellebore", "Quarterstaff + pistol (also staff/sickle inventory cleanup)", "Armory picks"] },
      { cells: ["Barrett Grimmskar", "Revolver (\"TGC\") + 30 extra rounds", "Existing kit; extra rounds granted by DM"] },
      { cells: ["Party (future)", "Bag of Holding via Samothy's Replicate Magic Item infusion (needs any bag); Returning Weapon infusion promised for Vega's axe", "Planned during level-up downtime"] },
    ]),
    ...sectionDivider(),
  ];
}

// ─── SECTION 6 — LOGS ────────────────────────────────────────────
const INIT1 = [
  ["Barrett Grimmskar", "20 (adv: 16,1 +4)", "1st"],
  ["Zelda \"Z\" Whipper", "17 (10+7)", "2nd"],
  ["Flux", "16 (12+4)", "3rd"],
  ["Vega Bloodroot", "15 (12+3)", "4th"],
  ["Valerian Hellebore", "13 (12+1)", "5th"],
  ["Samothy Smith-Wesson", "11 (7+4)", "6th"],
  ["Deanna Smith-Wesson", "7 (6+1)", "7th"],
  ["Feral thralls (DM)", "[transcript-only — not in archive]", "8th (after party)"],
];
const INIT2 = [
  ["Barrett Grimmskar", "23 (adv: 19,8 +4)", "1st"],
  ["Zelda \"Z\" Whipper", "15 (8+7)", "2nd"],
  ["Flux", "14 (10+4)", "3rd"],
  ["Deanna Smith-Wesson", "12 (11+1)", "4th"],
  ["Samothy Smith-Wesson", "7 (3+4)", "5th"],
  ["Vega Bloodroot", "6 (3+3)", "6th"],
  ["Valerian Hellebore", "3 (2+1)", "7th"],
  ["Beast Binder & thralls (DM)", "2 (stated; transcript-only)", "8th"],
];

// Full roll log — archive-verified (session_date 2026-02-12) + transcript-only DM rolls
const ROLLS = [
  ["Zelda \"Z\" Whipper", "Dex save (1d20+7)", "11", "PRE-SESSION (7:28 PM ET) — archive-only, before recording started", false],
  ["— COMBAT 1 —", "Initiative", "—", "Feral vampire thralls, wave 1 — city district beyond the gate", true],
  ["Barrett Grimmskar", "Initiative (adv)", "20", "[16,1]+4 — first in order", true],
  ["Zelda \"Z\" Whipper", "Initiative", "17", "", true],
  ["Flux", "Initiative", "16", "", true],
  ["Vega Bloodroot", "Initiative", "15", "", true],
  ["Valerian Hellebore", "Initiative", "13", "Spoke \"38… okay, that's 13\" — VTT display hiccup", true],
  ["Samothy Smith-Wesson", "Initiative", "11", "\"It's a solid 11\"", true],
  ["Deanna Smith-Wesson", "Initiative", "7", "", true],
  ["Barrett Grimmskar", "Revolver (TGC) to hit", "9", "Miss — \"the bullet just dances past him\"", false],
  ["Zelda \"Z\" Whipper", "Bane (cast)", "—", "3 thralls targeted; DM saves 17/8/9 — two failed [DM rolls transcript-only]", false],
  ["Flux", "Longbow to hit", "22", "Hit on Baned thrall", false],
  ["Flux", "Longbow damage", "12+2 = 14", "\"Hits him right in the shoulder. 14 damage\"", false],
  ["Flux", "Finger Guns to hit", "10", "Miss — \"invisible finger bullets… shoo shoo\"", false],
  ["Vega Bloodroot", "Greataxe to hit", "25 (d20: 19)", "Hit", false],
  ["Vega Bloodroot", "Greataxe damage", "5 (d12: 1)", "First of two d12 = 1 rolls in a row", false],
  ["Valerian Hellebore", "Starry Wisp to hit", "18", "Hit", false],
  ["Valerian Hellebore", "Starry Wisp damage", "2", "Radiant — DM ruled total 10 vs vampire ⚑ (rolled 1d8=2; doubling math flagged). Target emits dim light", false],
  ["Samothy Smith-Wesson", "Pistol to hit", "12", "Miss", false],
  ["Samothy Smith-Wesson", "Hunter's Mark damage", "5", "Bonus-action cast, damage on marked thrall", false],
  ["Deanna Smith-Wesson", "Pistol to hit", "11", "Miss", false],
  ["Deanna Smith-Wesson", "Hunter's Mark damage", "6", "\"Just got to one-up your brother\" — DM", false],
  ["DM — thrall vs Vega", "Claw attack", "nat 1", "Transcript-only. Lunge failed → opportunity attack granted w/ advantage", false],
  ["Vega Bloodroot", "Greataxe opportunity (adv)", "20 [14,6]", "\"A dirty 20\" — hit", false],
  ["Vega Bloodroot", "Greataxe damage", "5 → reroll 10", "Savage Attacker reroll (d12: 1 → 6). KILL — bisected mid-leap; blood shower. \"Not today, Satan\"", false],
  ["DM — thralls", "Attacks vs Zelda / Valerian / twins / Deanna", "7 / 2 / 5 / 18", "Transcript-only. Only the 18 vs Deanna hit — 6 damage (2d6)", false],
  ["Barrett Grimmskar", "Finger Guns to hit", "24 (d20: 19)", "CRIT — Barrett crits ranged on 19–20", false],
  ["Barrett Grimmskar", "Finger Guns crit damage", "8 [4,4] → 12+8 = 20", "House crit: max + roll. 20 force — KILL pending? (fresh target, heavily wounded)", false],
  ["Zelda \"Z\" Whipper", "Thunderwave damage", "5 [4,1]", "Both Baned thralls failed Con save (DM 10, 11 — transcript-only). Sound doubled → 10. KILL — skull burst by sound", false],
  ["Flux", "Longbow to hit", "nat 1 (5)", "Bowstring SNAPPED", false],
  ["Flux", "Repair check (d20)", "17", "Restrung the bow, ready next turn", false],
  ["Vega Bloodroot", "Greataxe to hit", "10", "Miss", false],
  ["Samothy Smith-Wesson", "Pistol to hit", "13", "Hit (DM checked homebrew AC)", false],
  ["Samothy Smith-Wesson", "Pistol damage", "7", "\"7 whole damage\" — thrall gimping", false],
  ["Deanna Smith-Wesson", "Pistol to hit", "22 (d20: 17)", "Hit — pistol mastery grants advantage on next attack vs target (Vex)", false],
  ["Deanna Smith-Wesson", "Pistol damage", "7", "", false],
  ["Valerian Hellebore", "Moonbeam damage", "11 [2,9]", "Radiant doubled → 22. KILL — burst into radiant flame, body dissipated", false],
  ["DM — thrall vs Valerian", "2 attacks", "17, 18", "Transcript-only. Both would hit — 15 damage rolled", false],
  ["Valerian Hellebore", "Spiny Shield (reaction, 2d4)", "5 [3,2]", "Damage reduced by 5 and reflected 5 — ruled Val takes 5", false],
  ["Valerian Hellebore", "d20 (DM-prompted)", "2 → 4", "Used Perma Inspiration to reroll; both low — \"missed the vital organs\" (no lethal reflect)", false],
  ["DM — thrall vs Zelda", "2 attacks (Baned)", "7→5, 18→16", "Transcript-only. −1d4 from Bane; both miss — \"inner Muhammad Ali\"", false],
  ["DM — thrall vs Vega", "2 attacks", "19, 5", "Transcript-only. 19 hits — 2 damage, halved by Rage to 1", false],
  ["DM — thrall vs Samothy", "2 attacks", "8, 4", "Transcript-only. Both miss (AC 17)", false],
  ["Barrett Grimmskar", "Finger Guns to hit", "14", "Hit", false],
  ["Barrett Grimmskar", "Finger Guns damage", "7 [6,1]", "", false],
  ["Barrett Grimmskar", "Risk Die (1d8, bonus)", "6", "13 total force — KILL: skull concaved. ⚑ \"Risk die\" homebrew term unconfirmed", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp to hit", "19", "Hit (defending Samothy)", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp damage", "8", "Radiant doubled → 16. KILL — radiant flame, body vanished", false],
  ["Flux", "Longbow to hit", "14", "Hit (the Spiny-Shield-damaged thrall)", false],
  ["Flux", "Longbow damage", "8+3 = 11", "", false],
  ["Flux", "Finger Guns to hit", "23", "Hit", false],
  ["Flux", "Finger Guns damage", "3 [1,2]", "KILL — spine popped out through skin", false],
  ["Vega Bloodroot", "Greataxe to hit", "11", "Miss. Declined DM's exhaustion-point reroll offer; retconned a rapier pickup instead (kept the miss)", false],
  ["Valerian Hellebore", "Moonbeam (moved) damage", "10 [8,2]", "Radiant doubled → 20. KILL", false],
  ["Samothy Smith-Wesson", "Pistol to hit", "20 (d20: 14)", "\"A dirty 20\" — hit; Vex applied", false],
  ["Samothy Smith-Wesson", "Pistol damage", "9", "KILL — \"blew a hole through it… D-E-D dead.\" Wave 1 cleared (8 slain)", false],
  ["— COMBAT 2 —", "Initiative", "—", "Beast Binder reveals himself; second thrall wave surges", true],
  ["Barrett Grimmskar", "Initiative (adv)", "23 [19,8]", "\"Goddamn Barrett again\" — first once more", true],
  ["Zelda \"Z\" Whipper", "Initiative", "15", "", true],
  ["Flux", "Initiative", "14", "", true],
  ["Deanna Smith-Wesson", "Initiative", "12", "", true],
  ["Samothy Smith-Wesson", "Initiative", "7 (d20: 3)", "\"Dice was on a 16 and then it just barely nudged over to a 3\"", true],
  ["Vega Bloodroot", "Initiative", "6 (d20: 3)", "", true],
  ["Valerian Hellebore", "Initiative", "3 (d20: 2)", "\"I also got a 3. And it was a 2\"", true],
  ["DM — enemies", "Initiative", "2", "Transcript-only — \"I rolled a 2\"", true],
  ["Barrett Grimmskar", "Finger Guns to hit", "10", "Miss", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp to hit", "25 (NAT 20)", "CRIT", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp crit damage", "7 [1,6] (+16 max)", "House crit + radiant doubling — KILL: \"Mr. Stark, I don't feel so good\" ash-out. ⚑ spoken math (\"32\") flagged", false],
  ["Flux", "Longbow to hit (Beast Binder)", "15", "MISS — first attempt on the captain", false],
  ["Flux", "Finger Guns to hit", "26 (NAT 20)", "CRIT on thrall", false],
  ["Flux", "Finger Guns crit damage", "6 [2,4] (+12 max = 18)", "KILL", false],
  ["Deanna Smith-Wesson", "Pistol to hit (Beast Binder)", "8", "Miss — switched plan from Ensnaring Strike", false],
  ["Deanna Smith-Wesson", "Perforating Shot damage", "7 (d10: 6)", "BB Dex save 17 (transcript-only) → half = 4. He \"brushes the dust off his shoulder\" ⚑ homebrew/UA spell", false],
  ["Samothy Smith-Wesson", "Steel Defender — Force-Empowered Rend (d20+6)", "21 (d20: 15)", "Hit — first Steel Defender attack (summoning house-ruled this turn)", false],
  ["Samothy Smith-Wesson", "Steel Defender damage (d8+2)", "8 (d8: 6)", "KILL — kitty-taur trample", false],
  ["Vega Bloodroot", "Greataxe to hit (adv)", "26 (NAT 20 [20,8])", "CRIT — reckless attack: \"who has time for this shit, honestly\"", false],
  ["Vega Bloodroot", "Greataxe crit damage", "9 (d12: 5) +16 max = 25", "KILL — \"Chop chop, motherfucker!\"", false],
  ["Valerian Hellebore", "Moonbeam damage (Beast Binder)", "13 [10,3]", "NULLIFIED — beam turned black and cut off; BB shrugged. \"Can't blame a guy for trying\"", false],
  ["DM — thralls vs Vega", "2 attacks", "10, 7", "Transcript-only. Both miss", false],
  ["DM — thrall vs Deanna", "2 attacks", "14, 8", "Transcript-only. Both miss", false],
  ["Barrett Grimmskar", "Magic Missile damage (3 darts)", "5 / 4 / 3 = 12", "Cast by fanning his revolver hammer — 12 on thrall by Deanna", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp to hit", "24 (d20: 19)", "Hit", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp damage", "6", "Radiant doubled — KILL: ash on the wind", false],
  ["Flux", "Longbow to hit", "22 (d20: 18)", "Hit (thrall within 5 ft of ally → Sneak Attack)", false],
  ["Flux", "Longbow + Sneak Attack damage", "6+6+2 = 14", "", false],
  ["Flux", "Finger Guns to hit", "22", "Hit", false],
  ["Flux", "Finger Guns damage", "8 [3,5]", "KILL", false],
  ["Deanna Smith-Wesson", "Dagger throw (Beast Binder)", "13", "Miss", false],
  ["Deanna Smith-Wesson", "Ensnaring Strike damage", "4 (d6)", "BB: \"If you live through this, I may take you into my harem.\" (\"Your brother's welcome too.\")", false],
  ["Samothy Smith-Wesson", "Pistol to hit (Beast Binder)", "19 (d20: 13)", "MISS — \"A 19 didn't hit. This man's a demon\"", false],
  ["Samothy Smith-Wesson", "Hunter's Mark damage", "4", "Auto damage on mark — BB: \"You can't make me bleed with as weak as you are currently\"", false],
  ["Samothy Smith-Wesson", "Steel Defender attack (d20+6)", "13 (d20: 7)", "Miss — \"the kitty misses\"", false],
  ["Vega Bloodroot", "Greataxe to hit (adv)", "26 (NAT 20 [20,15])", "CRIT — third greataxe nat 20 of the night", false],
  ["Vega Bloodroot", "Greataxe crit damage", "14 (d12: 10) +16 max = 30", "KILL — samurai-style diagonal bisection of the final thrall, revealing the Beast Binder behind it", false],
  ["— POST-COMBAT —", "—", "—", "Beast Binder halts the third wave: \"Halt… I'll spare you today\"", true],
  ["Deanna Smith-Wesson", "Pistol to hit (Beast Binder)", "20 (d20: 15)", "\"Sure, you shoot him and he catches the bullet and throws it back at you\"", false],
  ["Samothy Smith-Wesson", "Parlor Gun opportunity (adv)", "18 [12,2]", "Miss — point-blank shot at the teleporting BB", false],
  ["Deanna Smith-Wesson", "Pistol opportunity", "23 (d20: 18)", "\"Hit\" → narrated miss: bullets fly into the wall as he blinks away ⚑ DM narrative override", false],
];

function sectionLogs() {
  const initCols = [
    { label: "Character / Creature", w: 3200 },
    { label: "Initiative Roll", w: 2480 },
    { label: "Turn Order", w: 3680 },
  ];
  return [
    ...sectionHeader("Section 6 — Logs"),
    spacer(160),
    ...subHeader("Encounters"),
    spacer(80),
    filledTable([
      { label: "Enemies", w: 2100 },
      { label: "Location", w: 1800 },
      { label: "Party / Allies", w: 2200 },
      { label: "Trigger", w: 1660 },
      { label: "Outcome", w: 1600 },
    ], [
      { cells: ["8 feral vampire thralls (wave 1; \"gnolls\" at-table)", "Fog-choked city district beyond main gate", "All 7 PCs", "Ambush from the fog during the rescue sortie", "Victory — 8 slain, 0 party deaths"] },
      { cells: ["7 feral vampire thralls (wave 2) + the Beast Binder (observing/taunting)", "Same plaza", "All 7 PCs + Steel Defender", "Beast Binder's reveal — \"your hearts will beat louder…\" — flicked his wrist", "Victory — 7 slain; BB took 8 unavoidable damage, halted 3rd wave and withdrew"] },
    ]),
    spacer(160),
    ...subHeader("Initiative"),
    spacer(60),
    new Paragraph({ spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Combat 1 — Thrall Ambush, City District (archive-verified)", font: F.bold, size: F.szSub, bold: true, italics: true, color: C.mutedText })] }),
    filledTable(initCols, INIT1.map(r => ({ cells: r }))),
    spacer(100),
    new Paragraph({ spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Combat 2 — Second Wave + the Beast Binder (archive-verified)", font: F.bold, size: F.szSub, bold: true, italics: true, color: C.mutedText })] }),
    filledTable(initCols, INIT2.map(r => ({ cells: r }))),
    spacer(160),
    ...subHeader("Encounter Summary"),
    para("Combat 1 — Thrall Ambush (8 slain). The party's first live engagement. Radiant cantrips proved devastating (DM rule: radiant doubled vs. vampires — every radiant hit that landed killed). Zelda's Thunderwave exploited the thralls' hyper-acute hearing (sound doubled — one thrall's brain burst from the noise). Vega opened her kill count by bisecting a lunging thrall on an opportunity attack after its natural 1. Damage taken was minimal: Vega 1 (Rage-halved), Valerian 5 (Spiny Shield ruling), Zelda 6. Flux's bowstring snapped on a natural 1 and was field-repaired."),
    para("Combat 2 — The Beast Binder's Show (7 slain). Functionally a demonstration match staged by the Beast Binder. The party shredded the second wave (three nat-20 crits: Zelda, Flux, Vega; the Steel Defender's first kill) while every attempt on the captain himself failed or fizzled — Moonbeam blackened and nullified, a 19 to-hit missing, a caught bullet. Only Deanna's Perforating Shot (4, halved) and Samothy's Hunter's Mark (4) touched him: 8 total damage, none of it avoidable. Story result: the party is now personally marked by a vampire captain, knows a spy let the vampires in, and has a name none of them can remember."),
    spacer(160),
    ...subHeader("Full Roll Log"),
    spacer(60),
    new Paragraph({
      spacing: { before: 0, after: 80 },
      children: [new TextRun({
        text: "Dark rows = combat boundaries / initiative. Source: DDB roll archive (Supabase, session_date 2026-02-12 ET) cross-referenced line-by-line against the corrected transcript. 92 archived in-session rolls + 1 pre-session roll; all DM rolls are transcript-only (not synced). ⚑ = flagged in Section 8.",
        font: F.body, size: F.szBody, italics: true, color: C.mutedText
      })]
    }),
    filledTable([
      { label: "Character / NPC", w: 1600 },
      { label: "Roll / Check", w: 2000 },
      { label: "Result", w: 960 },
      { label: "Context / Outcome", w: 4800 },
    ], ROLLS.map(r => ({ cells: [r[0], r[1], r[2], r[3]], combat: r[4] }))),
    ...sectionDivider(),
  ];
}

// ─── SECTION 7 — QUOTES & LANGUAGE ───────────────────────────────
function sectionQuotes() {
  const quotes = [
    ["The Beast Binder (DM)", "Serious", "You fight well for cattle, but your hearts will beat louder when they're offered to the Mistress of Hunger."],
    ["The Beast Binder (DM)", "Serious", "Oh, you want to know a secret? We got in because someone let us in."],
    ["Cmdr. Thornfall (DM)", "Serious", "If you're looking for glory or comfort, turn around and go home."],
    ["Lt. Hargraven (DM)", "Poignant", "You saved lives today, more than you know. And unlike our commander, you didn't run."],
    ["Vega Bloodroot (Taylor)", "Funny", "Yes, I say not today, Satan."],
    ["Vega Bloodroot (Taylor)", "Funny", "Chop chop, motherfucker!"],
    ["Valerian Hellebore (Chase)", "Funny", "Uh, okay, fuck it, we ball."],
    ["Valerian Hellebore (Chase)", "Funny", "I'm fucking radiant."],
    ["Valerian Hellebore (Chase)", "Funny", "Who needs big sticks when you have bear arms?"],
    ["Deanna Smith-Wesson (Madi)", "Funny", "Yo, short, dead, and ugly, what's your name?"],
    ["Deanna Smith-Wesson (Madi)", "Funny", "The Lion, the Witch, and the Audacity of This Bitch to ask for help after this, right?"],
    ["Samothy Smith-Wesson (Josh)", "Serious", "If you can bleed, you can die."],
    ["The Beast Binder (DM)", "DM Quip", "Oh, you can't make me bleed with as weak as you are currently. Come back to me when you grow up."],
    ["The Beast Binder (DM)", "DM Quip", "If you live through this, I may take you into my harem."],
    ["Taylor (above-table)", "Banter", "I've decided that Vega is gonna be the Regina George of Barbarians."],
    ["Chase (above-table)", "Banter", "Yeah, Deus Ex Glockena."],
  ];
  return [
    ...sectionHeader("Section 7 — Quotes & Language"),
    spacer(160),
    ...subHeader("Quote Board"),
    spacer(60),
    new Paragraph({
      spacing: { before: 0, after: 80 },
      children: [new TextRun({ text: "VERBATIM from the corrected transcript. Tags: [Funny] [Poignant] [DM Quip] [Banter] [Serious]", font: F.body, size: F.szBody, italics: true, color: C.mutedText })]
    }),
    ...quotes.flatMap(([n, t, q]) => quoteBlock(n, t, q)),
    spacer(160),
    ...subHeader("Profanity Record"),
    spacer(80),
    filledTable([
      { label: "Speaker", w: 1800 },
      { label: "Curse Word", w: 2200 },
      { label: "Frequency", w: 1400 },
      { label: "Context", w: 3960 },
    ], [
      { cells: ["Chase (Valerian)", "fuck (10) · shit (6) · bitch (5) · motherfucker (3)", "24", "Session leader — combat trash talk: \"2d10 radiant damage, motherfucker… I'm fucking radiant\""] },
      { cells: ["Taylor (DM)", "fuck (12) · shit (6) · damn/goddamn (5) · bitch (2)", "25", "Narration + forgetting NPC names (\"oh fuck, what was that dude's name?\")"] },
      { cells: ["Taylor (Vega)", "fuck (6) · shit (4) · damn (2) · motherfucker (1) · bitch (1)", "14", "Kill celebrations and dice grief (\"What the fuck? But whatever, it's 5\")"] },
      { cells: ["Josh (Samothy)", "damn/goddamn (7) · fuck (3) · shit (2)", "12", "VTT table-bumping (\"I keep moving these goddamn fucking tables\")"] },
      { cells: ["Madi (Deanna)", "fuck (2) · shit (1) · bitch (1)", "4", "\"Fuck yeah, love a good armor class\""] },
      { cells: ["Christie (Zelda)", "damn (2) · fuck (1)", "3", "Lightest table presence"] },
      { cells: ["Doug (Barrett)", "shit (1)", "1", "\"Oh, shit\" — first turn of the campaign"] },
    ]),
    spacer(160),
    ...subHeader("Alternate Title Options"),
    spacer(80),
    filledTable([
      { label: "Type", w: 1800 },
      { label: "Proposed Title", w: 7560 },
    ], [
      { cells: ["Event", "Graduation Day ← FINAL"] },
      { cells: ["Quote", "You Fight Well for Cattle"] },
      { cells: ["Dramatic", "Someone Let Us In"] },
      { cells: ["Character", "The Regina George of Barbarians"] },
      { cells: ["Thematic", "Welcome to the Ashwardens"] },
    ]),
    spacer(120),
    new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.subRule, space: 4 } },
      spacing: { before: 0, after: 100 },
      children: [
        new TextRun({ text: "FINAL CHOSEN TITLE:   ", font: F.bold, size: F.szSub, bold: true, color: C.sectionText }),
        new TextRun({ text: "Graduation Day  (confirmed by Taylor, 06/06/2026)", font: F.body, size: F.szBody, color: C.bodyText }),
      ]
    }),
    ...sectionDivider(),
  ];
}

// ─── SECTION 8 — ARCHIVIST NOTES ─────────────────────────────────
function sectionArchivistNotes() {
  return [
    ...sectionHeader("Section 8 — Archivist Notes"),
    spacer(160),
    ...subHeader("Patterns, Progress & Future Implications"),
    ...bullets([
      "Vega rolled three greataxe nat 20s in one session (two on reckless advantage) — her crits bookended both fights, including the cinematic final bisection. Her damage d12 also rolled 1 twice in a row early — high-variance night.",
      "Radiant is the vampire-delete button: every radiant hit that connected this session killed its target (DM doubling rule). Valerian + Zelda both lean Starry Wisp/Moonbeam — expect the DM to field radiant-resistant threats eventually.",
      "Sound is a two-way weapon: thralls hunt by heartbeat, but Thunderwave's audible-for-300-ft boom doubled and burst a thrall's skull. Stealth implications for future sorties are significant.",
      "The Beast Binder ate only 8 damage, all unavoidable (Perforating Shot half + Hunter's Mark) — a deliberate power-gap demonstration. He explicitly wants a personal duel \"in the near future\" and says he'll \"need your assistance\" — antagonist with an agenda, not a wall.",
      "Spy-among-the-recruits is the campaign's first whodunit engine; Deanna carries a memory-blocked name in her head — a likely future unlock (Greater Restoration-shaped solution?). [No metagame prediction — flagged as open thread only.]",
      "Party progression is fast (4 → 5 in one session, DM-calculated XP). Samothy's infusion economy (Returning Weapon for Vega, Bag of Holding) is becoming the party's logistics backbone.",
      "Vega's table persona crystallized: \"the Regina George of Barbarians\" — sarcastic alpha, flips off vampire captains with both hands. Watch how this interacts with her declared refusal of the deal-with-the-devil house rule (\"not until it becomes entirely necessary\" — her words, on record).",
    ]),
    spacer(160),
    ...subHeader("Continuity Flags, Missing Info & Ambiguities"),
    spacer(80),
    filledTable([
      { label: "Flag Type", w: 1800 },
      { label: "Description", w: 4560 },
      { label: "Source / Location", w: 1800 },
      { label: "Resolution", w: 1200 },
    ], [
      { cells: ["Continuity", "Hargraven titled \"Captain Bron Hargraven\" at the ceremony but \"Lieutenant Hargraven\" at the gate and in debrief (NPC page says Lt.)", "00:10:00 vs 02:28:07", "OPEN — ask DM"] },
      { cells: ["Date keying", "Session played evening 02/12 into 02/13 ET; DDB archive keys all rolls to 2026-02-12; file convention uses 021326", "Roll archive", "RESOLVED — note both dates"] },
      { cells: ["Archive gap", "Zero DM rolls in the DDB archive — every enemy attack/save is transcript-only. Confirm whether DM rolls physically or under an unsynced account", "Roll archive", "OPEN"] },
      { cells: ["Ambiguity", "Thornfall says \"you five\" but seven PCs went through the gate", "00:25:44", "OPEN — minor"] },
      { cells: ["Names", "\"Steanie\" (00:02:36) unknown; \"Vaxi\" (00:55:15); \"DM Exogery\" (02:25:28); \"Teep Finder\" (02:24:11 — possibly intentional mock-nickname)", "Spell-check log", "OPEN"] },
      { cells: ["Homebrew terms", "Spiny Shield (Valerian), Risk Die (Barrett), Perforating Shot (Deanna), Finger Guns cantrip — spellings/sources unconfirmed", "Various", "OPEN — ask DM"] },
      { cells: ["Item name", "Samothy's parlor gun: \"Tanya\" (Madi/Josh) vs \"Peter Pistol\" (Chase, praised by DM) — final name unconfirmed", "00:33:25", "OPEN"] },
      { cells: ["DM math", "Starry Wisp \"2d8 → 10 damage\" ruling vs rolled 1d8=2 (×2 = 4); Zelda's crit spoken as \"32\"; Flux crit \"12 plus 18\"", "01:00:00 / 01:42:00 / 01:43:43", "DM rulings stand — noted"] },
      { cells: ["Attribution", "\"I find it exhausting\" (00:18:31) — Thornfall's line finished by Christie, or Zelda's reply? Kept under Christie with flag", "00:18:31", "OPEN"] },
      { cells: ["NPC spellings", "Thornfall / Bron Hargraven / Meridia Vale / Varan / Beast Binder / Mistress of Hunger / Florence — all provisional, pending Taylor's check with DM", "Spell-check log", "OPEN"] },
      { cells: ["POV Journal", "Vega memoir title + voice guide not yet drafted — entry written in grounded placeholder voice", "Section 2", "OPEN — one-time setup"] },
    ]),
    spacer(400),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 8 } },
      spacing: { before: 0, after: 0 },
      children: [new TextRun({ text: "— END OF SESSION NOTES —", font: F.body, size: F.szBody, color: C.endText, italics: true, characterSpacing: 80 })]
    }),
  ];
}

// ─── ASSEMBLE ────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 280 } } } }]
    }]
  },
  styles: { default: { document: { run: { font: F.body, size: F.szBody, color: C.bodyText } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    children: [
      ...titleBlock(),
      ...sectionMetadata(),
      ...sectionPOV(),
      ...sectionAnalysis(),
      ...sectionCharacterActivity(),
      ...sectionArtifacts(),
      ...sectionLogs(),
      ...sectionQuotes(),
      ...sectionArchivistNotes(),
    ]
  }]
});

const OUT_DIR = String.raw`C:\Users\theli\Obsidian Vaults\ashfall_vault\Session_Sources\Session_Notes`;
const OUT = path.join(OUT_DIR, "AB_01_021326_Graduation_Day.docx");

// fix_tbl_borders: strip invalid <w:left>/<w:right> from <w:tblBorders>, repack document.xml
function fixTblBorders(docxPath) {
  const zip = new AdmZip(docxPath);
  const entry = zip.getEntry("word/document.xml");
  let xml = entry.getData().toString("utf-8");
  let stripped = 0;
  xml = xml.replace(/<w:tblBorders>([\s\S]*?)<\/w:tblBorders>/g, (m, inner) => {
    const cleaned = inner.replace(/<w:(?:left|right)\b[^>]*\/>/g, () => { stripped++; return ""; });
    return "<w:tblBorders>" + cleaned + "</w:tblBorders>";
  });
  zip.updateFile("word/document.xml", Buffer.from(xml, "utf-8"));
  zip.writeZip(docxPath);
  return stripped;
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
Packer.toBuffer(doc).then(b => {
  fs.writeFileSync(OUT, b);
  const stripped = fixTblBorders(OUT);
  console.log("Done ->", OUT);
  console.log("fix_tbl_borders: stripped", stripped, "invalid border elements");
  console.log("Size:", (fs.statSync(OUT).size / 1024).toFixed(1), "KB");
}).catch(e => { console.error(e); process.exit(1); });
