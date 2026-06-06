/* ===================================================================
 * AB_02_021726_notes.js — Session 2 "Ashes of the Living" filled notes
 * Engine/theme: ashfall_v1.js. Content: 021726 corrected transcript +
 * Supabase roll archive (session_date 2026-02-16). fix_tbl_borders incl.
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

function spacer(pts = 120) { return new Paragraph({ spacing: { before: pts, after: 0 }, children: [] }); }
function sectionDivider() {
  return [
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 1 } }, spacing: { before: 360, after: 0 }, children: [] }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.subRule, space: 1 } }, spacing: { before: 60, after: 240 }, children: [] }),
  ];
}
function sectionHeader(text) {
  return [
    new Paragraph({ shading: { fill: C.sectionFill, type: ShadingType.CLEAR }, spacing: { before: 0, after: 0 }, children: [new TextRun({ text: text.toUpperCase(), font: F.bold, size: 24, bold: true, color: C.sectionText, characterSpacing: 80 })] }),
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
    new Paragraph({ shading: { fill: C.creamFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.creamRule, space: 6 } }, spacing: { before: 120, after: 0 }, indent: { left: 200 }, children }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.creamRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
  ];
}
function thCell(text, width) {
  return new TableCell({ width: { size: width, type: WidthType.DXA }, borders: allWhite, shading: { fill: C.tableHeaderFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.bold, size: F.szBody, bold: true, color: C.tableHeaderText })] })] });
}
function tdCell(text, width, opts = {}) {
  const fill = opts.combat ? C.combatFill : (opts.alt ? C.oddRow : C.evenRow);
  const textColor = opts.combat ? C.combatText : C.tableBodyText;
  return new TableCell({ width: { size: width, type: WidthType.DXA }, borders: allWhite, shading: { fill, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, verticalAlign: VerticalAlign.TOP, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text, font: F.body, size: F.szBody, color: textColor })] })] });
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
    new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "Ashes of the Living", font: F.bold, size: F.szTitle, bold: true, color: C.titleText })] }),
    new Paragraph({
      shading: { fill: C.subFill, type: ShadingType.CLEAR },
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } },
      spacing: { before: 0, after: 0 }, indent: { left: 120 },
      children: [new TextRun({ text: "Session 02  ·  02/17/2026  ·  Ashfall Britannia", font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })]
    }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] }),
    spacer(280),
  ];
}

function sectionMetadata() {
  const lw = 2400, rw = TW - lw;
  const rows = [
    ["Campaign", '"Ashfall Britannia" Campaign'],
    ["Session Number", "02"],
    ["Session Date", "02/17/2026 (played evening of 02/16 ET; DDB roll archive keys to 2026-02-16)"],
    ["Start Location", "Hampshire — the razed village outside the fort (dawn after the S01 attack)"],
    ["End Location", "The old hospital, first floor (ER) — short rest after clearing 3 beast thralls"],
    ["Party Present", "All 7 PCs + Steel Defender. NPCs: Lt. Hargraven, Cmdr. Thornfall, Bobby (armorer), Abigail (alchemist)"],
    ["Total Rolls Logged", "125 archived (incl. 6 pre-session Flux warmups); DM rolls transcript-only again"],
    ["Party Level", "5 (no level-up; 3,300 XP awarded at session end)"],
    ["Spelling Checked", "Yes — 021726_Spell_Check_Log.md (8 corrections, ~110 speaker reassignments, diarization warning)"],
  ];
  return [
    ...sectionHeader("Section 1 — Session Metadata"), spacer(160),
    new Table({ width: { size: TW, type: WidthType.DXA }, columnWidths: [lw, rw], borders: noTblBorders, rows: rows.map(([l, v]) => new TableRow({ children: [metaLabelCell(l, lw), metaValueCell(v, rw)] })) }),
    ...sectionDivider(),
  ];
}

function sectionPOV() {
  const entry = [
    "Dawn came gray, like it always does, and we went back out into what was left of Hampshire. The smell is the part nobody warns you about. I found wood that wasn't burning and made stakes, and I put the dead down a second time so they'd stay that way. Then I piled them for the fire. Someone helped me. It needed doing and nobody wanted to talk about it, which suited me fine.",
    "One of the dead held a locket with two children in it. There were no children among the bodies. None. They were carried out. I keep turning that over and I don't like any of the shapes it makes.",
    "Valerian found his parents. I heard the scream from across the village — I will hear that scream for a long time. Crushed, not drained. One of the big ones did it. Zelda hauled him out by the finger like only she can, and Deanna covered what was left with blankets. There's nothing useful to say to a man standing in that doorway, so I didn't say anything.",
    "Samothy found tracks that glowed to his magic — fine shoes, a little heel, walking the whole village like a man inspecting his work, and then nothing, like he was plucked off the ground. Hargraven went pale at the words 'light blue.' A Beast Master, he says. The pale one we met at the gate trains beasts too. I don't believe in coincidences anymore.",
    "The fort gave us the hospital run: bandages, medicine, anything that keeps soldiers breathing. Bobby — the dwarf who hates everyone — silvered my axe and my knuckles, and slipped us stakes, silver shot, and a bag that's bigger inside than out. He wants a book from the hospital, the kind you hide behind a barred door to ask about. The alchemist wants a humming herb and the dwarf's heart, not in that order.",
    "The hospital was already a corpse. The things inside it were blind — they hunt the sound of you, the heat of you. Valerian called down sunlight onto a rock, mid-grief, and made the dark flinch. When my turn came I opened one of them up so completely there was nothing left to threaten. The last one died with his hand on it — lightning from his palm, for his mother and father.",
    "We rest in the wreck of the emergency room tonight. There's a second floor, and a basement, and somewhere in this building a book with a presence. The dead are quiet. We've made sure of it.",
  ];
  return [
    ...sectionHeader("Section 2 — Character POV Journal"), spacer(80),
    ...subHeader("Vega Bloodroot — In-Character Journal Entry"), spacer(60),
    ...creamBlock([new TextRun({ text: "[VEGA'S JOURNAL — MEMOIR TITLE TBD: voice guide not yet drafted]", font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 })]),
    new Paragraph({ border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } }, spacing: { before: 80, after: 0 }, indent: { left: 200 }, children: [new TextRun({ text: "The morning after.", font: F.bold, size: F.szBody, bold: true, color: C.journalText })] }),
    ...entry.map(t => new Paragraph({ border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } }, spacing: { before: 40, after: 40 }, indent: { left: 200 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, italics: true, color: C.journalText })] })),
    ...sectionDivider(),
  ];
}

function sectionAnalysis() {
  return [
    ...sectionHeader("Section 3 — Session Analysis"), spacer(160),
    ...subHeader("Narrative Summary"),
    para("Dawn after the S01 attack. Lt. Hargraven ordered a sweep of Hampshire — the village just outside the fort, hit hardest — for survivor counts, names, and intel; \"if you find anyone alive, bring them home.\" The party found none alive. Bodies were either drained bloodless (feral thrall kills) or crushed and half-eaten (beast thrall kills). Vega staked and piled the dead for burning; a locket held a picture of two children — and no children were among the dead anywhere in the village. They were carried out."),
    para("Valerian found his parents mauled in his own childhood home — a beast thrall kill. His grief-scream carried across the village; Zelda physically hauled him out, Deanna covered the bodies. He spent the rest of the session oscillating between gallows humor (\"More alive than my parents\") and channeled rage. Samothy's Detect Magic revealed a single set of magically-auraed footprints — pointed shoes, slight heel, large — that toured the whole village and then vanished mid-step. His nat-20 History (27) recalled the aura as light blue; in the war room, Lt. Hargraven identified that signature: a BEAST MASTER (light blue aura; Vampire Masters read dark red; theory: Beast Masters are closer to human). The same color taxonomy presumably ties to S01's Beast Binder — relationship pending DM confirmation."),
    para("War-room briefing: supplies dangerously low, northern farms gone, watchtowers empty, unnatural night fog. Three sorties dispatched — the party to the old hospital (medical supplies), another team to the eastern merchant district, a brigade to the northern farms; rendezvous in 2 days. Backstory drop: Vega and Flux jumped THREE training classes to graduate with this group — Vega set physical records, Flux set the stealth/undetectability record."),
    para("Outfitting: Bobby the dwarf armorer (irascible, brilliant, from Northern England — the setting confirmed as post-meteor Britain, \"medieval England with a steampunk vibe\") silvered the party's weapons and ammo (silver stops vampire self-healing), issued 20 silver-tipped arrows, 24 silver bullets per gunner, 4 wooden stakes (4 charges each), a Bag of Holding, and meat steaks — then barred the door and privately commissioned them: retrieve a rumored magical book from the hospital (vampire history, magical properties, \"you'll know it when you see it — it's got a presence\"). Also: bring jewels (castle protection) and EMERALDS — the only way to kill a Beastmaster. Abigail the elf alchemist (nursing a years-long crush on Bobby's mustache) provided 6 superior healing potions and Elvish rope, and commissioned nirnroot from the hospital pharmacy so she can brew more."),
    para("The hospital (2 hours east): perimeter fence cut, blood smear up the steps, two floors plus a basement (the morgue). Valerian wandered into a room and triggered three BLIND beast thralls — eyeless hunters tracking sound and heat. The fight was a slugfest: Valerian got knocked prone and took 31 total; Vega tanked and ended one with a 47-damage nat-20 crit (\"absolutely liquefy him\"); Daylight-on-a-rock made the beasts flinch back; Zelda's Cure Wounds + Lunar Vitality (Bardic die → +1d8 HP, +10 ft speed) patched Valerian; Valerian executed the last one with Shocking Grasp — \"the old shocker\" — for his parents. 3,300 XP; short rest; first floor secured; second floor and basement (and the book) await."),
    para("Table notes: all 7 players present; the DM parented two kids to bed mid-combat (\"you can have some dry cereal\"); Taylor asked players to announce rolls aloud for the roll log; Vega's item finalized as the Eldritch Claw Tattoo (replacing S01's Masquerade Tattoo).", { italics: true, color: C.mutedText }),
    spacer(160),
    ...subHeader("Session Setting"),
    para("Dawn breaks gray and merciless over the ash-lands. New world facts: the setting is post-meteor BRITAIN — \"kind of like medieval England with a steampunk vibe\"; Northern England exists (Bobby's homeland). Scouting infrastructure: northern farms, outer watchtowers (now empty), unnatural night fog. In-game time: the day after S01 (the day before Christmas Eve, by inference — not stated)."),
    spacer(160),
    ...subHeader("Locations Visited"), spacer(80),
    filledTable([{ label: "Location", w: 2800 }, { label: "Description", w: 3660 }, { label: "Notable Details", w: 2900 }], [
      { cells: ["Hampshire (village outside the fort)", "Razed: fires, shredded/drained bodies, looted of nothing (valuables untouched)", "Valerian's home village — his parents among the dead; no children's bodies; Beast Master footprints; 50 gp looted by Flux"] },
      { cells: ["War room (the fort)", "Oak table, maps, supply counts", "Three-sortie briefing; Beast Master aura lore; 2-day rendezvous"] },
      { cells: ["Bobby's armory shop", "Old-bank-style barred window and door; forge", "Silvering service; secret book commission; Bag of Holding"] },
      { cells: ["Abigail's alchemist shop", "Tornado-struck interior (chair-throwing rage at Bobby)", "6 superior potions; Elvish rope; nirnroot commission"] },
      { cells: ["The old hospital (2 hrs east)", "Chain-link perimeter, corpse-like ruin, flickering lights, two floors + basement (morgue)", "First floor (ER) cleared — 3 blind beast thralls slain; book + nirnroot + supplies still to find"] },
    ]),
    spacer(160),
    ...subHeader("Quests / Objectives"),
    ...bullets([
      "Hospital supply run (bandages, antibiotics, wound care) — IN PROGRESS (first floor cleared; pharmacy not yet reached).",
      "Bobby's secret book — magical properties + vampire history, somewhere in the hospital, \"it's got a presence\" — IN PROGRESS.",
      "Abigail's nirnroot (hospital pharmacy stocks it; also grows on riverbanks) — OPEN.",
      "Collect jewels (castle anti-vampire protection) and EMERALDS (only way to kill a Beastmaster; infusable into weapons) — OPEN.",
      "WHERE ARE THE CHILDREN? No kids among Hampshire's dead; carried out — OPEN (dark).",
      "Identify the Beast Master who toured Hampshire (light-blue aura, fine shoes, vanished mid-step) — OPEN. ⚑ Relation to S01's Beast Binder pending DM.",
      "Rendezvous with merchant-district team and northern-farms brigade in 2 days — OPEN.",
      "S01 carryovers: the spy among the recruits; the Beast Binder's promised duel; Varan's desertion — all still OPEN (no movement this session).",
    ]),
    spacer(160),
    ...subHeader("Scene / Timeline Breakdown"),
    ...bullets([
      "Scene 1: Hargraven's dawn orders — sweep Hampshire, count survivors, bring anyone alive home.",
      "Scene 2: The sweep — drained vs. mauled bodies; Vega's stake-and-pyre detail; the locket with two children; no children's bodies anywhere.",
      "Scene 3: Valerian's house — his parents, mauled by a beast thrall. The scream. Zelda and Deanna's rescue; shaken (nat-1 Wisdom save, disadvantage rider).",
      "Scene 4: Samothy's Detect Magic — the vanishing footprints (pointed shoes, slight heel); nat-20 History: light-blue aura. A+ roleplay inspiration awarded (Josh & Madi).",
      "Scene 5: War room — Beast Master / Vampire Master aura lore; three sorties; Vega & Flux's jumped-three-classes reveal; \"good luck, we'll meet back here, hopefully all of us, in 2 days.\"",
      "Scene 6: Bobby's armory — silvering everything; the barred-door book commission; emerald lore; Bag of Holding; stakes both wooden and well-done.",
      "Scene 7: Abigail's shop — potions, Elvish rope, nirnroot commission, and the mustache confession.",
      "Scene 8: The hospital approach — cut fence, blood smear, flickering ER, perception sweep (Barrett nat-20).",
      "Scene 9: Combat — Valerian opens a door into 3 blind beast thralls. Prone, grief, Daylight on a rock, Lunar Vitality heal, Vega's 47-damage liquefaction, Shocking Grasp execution.",
      "Scene 10: Aftermath — 3,300 XP, short rest in the ER, Flux studies a beast corpse (changeling form research), the hole in the floor leads to the basement.",
    ]),
    spacer(160),
    ...subHeader("Themes & Emotional Beats"),
    ...bullets([
      "Grief in real time — Valerian's arc from scream to silence to seething rage to channeled execution; the table's gallows-humor coping (\"disadvantage because dead parents\").",
      "The missing children — the session's quiet horror; the locket as emblem.",
      "Found family closing ranks — Zelda's finger-haul, Deanna's blankets, Vega's wordless body detail, Barrett checking on Z's bestie status.",
      "Civilization in fragments — shopkeepers with crushes and grudges persisting inside the apocalypse (Bobby & Abigail as warmth).",
      "Light against blindness — Daylight cast mid-grief by the griever; blind hunters that feel heat.",
      "Competence recognized — Vega and Flux's jumped-classes reveal reframes S01's 'late additions' as elite.",
    ]),
    ...sectionDivider(),
  ];
}

function sectionCharacterActivity() {
  return [
    ...sectionHeader("Section 4 — Character Activity"), spacer(160),
    ...subHeader("Party Structure & Subgroups"), spacer(80),
    filledTable([{ label: "Location", w: 2100 }, { label: "Characters Present", w: 2500 }, { label: "Objective", w: 2900 }, { label: "Status", w: 1860 }], [
      { cells: ["Hampshire sweep", "All 7 (loose spread: Vega on pyre duty, twins on bodies, Flux house-to-house, Valerian to his home)", "Survivor count + intel", "Complete — 0 survivors, major intel"] },
      { cells: ["Fort (war room, shops)", "All 7", "Briefing + outfitting", "Complete"] },
      { cells: ["Hospital, first floor", "All 7 + Steel Defender (summoned in combat)", "Supplies, book, nirnroot", "Floor 1 cleared; short rest"] },
    ]),
    spacer(160),
    ...subHeader("NPCs"), spacer(80),
    filledTable([{ label: "Name", w: 1100 }, { label: "Race / Class", w: 1260 }, { label: "Affiliations", w: 1500 }, { label: "Last Interaction", w: 1900 }, { label: "Last Known Location", w: 1700 }, { label: "Status", w: 900 }], [
      { cells: ["Lt. Hargraven", "[Unknown]", "Ashwardens / base command", "Dawn orders; war-room briefing; Beast Master lore", "The fort", "Alive"] },
      { cells: ["Cmdr. Thornfall", "[Unknown]", "Ashwardens", "Present at war room; slight bow + good luck", "The fort", "Alive"] },
      { cells: ["Bobby ⚑ NEW", "Dwarf — master weaponsmith/armorer", "The fort; from Northern England", "Silvered the party's arsenal; secret book commission", "His armory shop", "Alive"] },
      { cells: ["Abigail ⚑ NEW", "Elf — alchemist", "The fort", "Potions + rope; nirnroot commission; mustache confession", "Her shop", "Alive"] },
      { cells: ["The Beast Master (Hampshire) ⚑ NEW (unseen)", "Vampire — Beast Master class", "Vampire clan", "None — only vanishing light-blue-aura footprints", "[Unknown — departed by air?]", "Active threat"] },
      { cells: ["Valerian's parents", "[Unknown]", "Hampshire villagers", "Found dead — beast thrall kill; covered with blankets", "Hampshire (deceased)", "Dead"] },
    ]),
    spacer(160),
    ...subHeader("Reputation & Relationships"),
    ...bullets([
      "Bobby trusts the party (esp. the Smith-Wesson twins — \"it's been a hot minute\") enough to bar the door and share the book secret: \"just don't tell the boss.\"",
      "Abigail now owes the party goodwill (and got group counseling on courting Bobby: bring alcohol, compliment the craftsmanship).",
      "Hargraven's regard rising — he acts on the party's footprint intel immediately; \"you guys are probably the ones we can trust the most.\"",
      "Valerian: orphaned this session. Party closed ranks around him without ceremony.",
      "Vega & Flux's elite-recruit backstory now public — table standing within the Ashwardens elevated.",
    ]),
    ...sectionDivider(),
  ];
}

function sectionArtifacts() {
  return [
    ...sectionHeader("Section 5 — Artifacts"), spacer(160),
    ...subHeader("Loot & Items"), spacer(80),
    filledTable([{ label: "Character / Owner", w: 2400 }, { label: "Item / Artifact", w: 4160 }, { label: "State / Context", w: 2800 }], [
      { cells: ["Vega Bloodroot", "ELDRITCH CLAW TATTOO — Taylor's final item decision, retroactively replaces S01's \"Masquerade Tattoo\"", "Activated in combat: +1d6 damage rider on hits (rolled 2 and 4 this session)"] },
      { cells: ["Vega Bloodroot", "Brass knuckles (in-fiction \"fidget spinner\") — now silvered; greataxe + rapier silvered", "Bobby's work"] },
      { cells: ["Party (whole)", "Silvered weapons & ammo across the board — silver stops vampire self-healing", "Bobby; free in exchange for the book commission"] },
      { cells: ["Flux", "20 silver-tipped arrows; silvered longbow", "Bobby"] },
      { cells: ["Gun users (Deanna, Samothy, Barrett)", "24 silver bullets each (\"SMJ — silver metal jacket\")", "Bobby"] },
      { cells: ["Party", "4 wooden stakes (4 charges each) + 7 well-done meat steaks", "Bobby (\"Bobby likes his well done\")"] },
      { cells: ["Party", "BAG OF HOLDING (the group bag)", "Bobby — only one in stock"] },
      { cells: ["Party", "6 Superior Healing Potions (\"the blue level\") + real Elvish rope", "Abigail"] },
      { cells: ["Flux", "50 gold pieces", "Looted from Hampshire houses"] },
      { cells: ["Party (held)", "Locket with a picture of two children", "Off a Hampshire victim — kept; ties to the missing-children thread"] },
      { cells: ["Barrett Grimmskar", "\"Magnum\" revolver (2d8+4) — silvered; Sharpshooter confirmed", "His sidearm this session (TGC last session — same gun? ⚑)"] },
    ]),
    ...sectionDivider(),
  ];
}

const ROLLS = [
  ["Flux", "Longbow ×2 (to hit 17, 12 + damage)", "—", "PRE-SESSION warmups, 7:59 PM ET — archive-only", false],
  ["— EXPLORATION —", "Hampshire sweep", "—", "Skill-check phase (~75 min of roleplay before any combat)", true],
  ["Valerian Hellebore", "Investigation", "2", "\"Do I recognize anyone?\" — couldn't ID the mangled body", false],
  ["Flux", "Perception", "16", "Heard distant scraping, howling, running", false],
  ["Samothy Smith-Wesson", "Investigation", "24 (NAT 20)", "The twins examine drained bodies — locket found", false],
  ["Deanna Smith-Wesson", "Investigation", "18", "Same scene", false],
  ["Valerian Hellebore", "Wisdom save", "9 (NAT 1)", "Shaken by his parents' deaths — disadvantage rider applied ('disadvantage because dead parents')", false],
  ["Barrett Grimmskar", "Investigation", "9", "Track check in 'agitated state' — muddled tracks only", false],
  ["Valerian Hellebore", "Investigation", "12", "Village look-around", false],
  ["Flux", "Investigation (+8)", "20", "Tracks scatter every direction; est. 3–5 beasts", false],
  ["Deanna Smith-Wesson", "Investigation", "21", "Valuables untouched — 'deserted village' read", false],
  ["Samothy Smith-Wesson", "Investigation", "15", "Detect Magic sweep — found the auraed footprints", false],
  ["Samothy Smith-Wesson", "Investigation (adv)", "23 [19,14]", "Footprint detail: pointed shoes, slight heel, large", false],
  ["Samothy Smith-Wesson", "History", "27 (NAT 20)", "\"I'm smart as hell\" — aura color recalled: light blue → Beast Master", false],
  ["Flux", "Insight", "20 ('Dirty 20')", "Reading Bobby's sketchy door-barring — nervous but stoic", false],
  ["— HOSPITAL —", "Perception sweep", "—", "All 7 rolled; everyone passed", true],
  ["Barrett Grimmskar", "Perception", "21 (NAT 20)", "", false],
  ["Samothy Smith-Wesson", "Perception", "23", "", false],
  ["Zelda \"Z\" Whipper", "Perception", "21", "", false],
  ["Flux", "Perception", "19", "", false],
  ["Deanna Smith-Wesson", "Perception", "18", "", false],
  ["Valerian / Vega", "Perception", "13 / 13", "Heavy footsteps, scraping on metal beds, breathing in another wing", false],
  ["— COMBAT — 3 blind beast thralls, hospital ER", "Initiative", "—", "Triggered by Valerian exploring (\"Hi Chase.\")", true],
  ["Vega Bloodroot", "Initiative", "19", "First among PCs", true],
  ["Valerian Hellebore", "Initiative", "11", "", true],
  ["Barrett Grimmskar", "Initiative (adv)", "11 [7,3]", "", true],
  ["Zelda \"Z\" Whipper", "Initiative", "9", "", true],
  ["Samothy Smith-Wesson", "Initiative", "8", "", true],
  ["Flux", "Initiative", "6", "", true],
  ["Deanna Smith-Wesson", "Initiative", "3 [2] (re-roll 16 — VTT glitch; 3 stood)", "\"For some reason it didn't work\"", true],
  ["DM — beast thrall vs Valerian", "2 attacks", "3, 5", "Transcript-only. Both miss — \"just barely\"", false],
  ["Vega Bloodroot", "Greataxe to hit", "20 [13] ('dirty 20')", "Raged (bonus action)", false],
  ["Vega Bloodroot", "Greataxe damage", "12 [8] (Savage reroll 9 — kept 12)", "", false],
  ["DM — thrall vs Vega", "Bite + claw", "6, 19", "Transcript-only. 19 hits — 8 slashing, Rage-halved to 4", false],
  ["DM — thrall vs Barrett", "Leap off wall", "17", "Transcript-only. Miss (\"Negative\")", false],
  ["Barrett Grimmskar", "Magnum (silvered) to hit", "19 [12]", "Sharpshooter negates cover/range disadvantage", false],
  ["Barrett Grimmskar", "Magnum damage", "18 [8,6]", "Silver: target can't self-heal", false],
  ["Valerian Hellebore", "Starry Wisp (disadv — shaken)", "11 [3,8]", "Miss — \"flies wild\"; grief rider spent", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp to hit", "12", "Miss — \"I'm sorry, I tried to get it\" (defending bestie Barrett)", false],
  ["Samothy Smith-Wesson", "Steel Defender summoned; Rend (d20: 12 +7)", "19", "Hit — \"just a really big house cat\"", false],
  ["Samothy Smith-Wesson", "SD damage (d8: 1 +3)", "4", "", false],
  ["Flux", "Silvered Longbow to hit", "16", "Hit", false],
  ["Flux", "Longbow + Sneak Attack damage", "9+6+8 = 23", "", false],
  ["Flux", "Finger Guns to hit", "14", "Miss", false],
  ["Deanna Smith-Wesson", "Pistol to hit", "5 (NAT 1)", "\"It was almost a 19. It just like rolled over to the 1\"", false],
  ["DM — thrall vs Valerian", "Attack + Str save demand", "17 hit; 17 dmg", "Transcript-only. Val Str save 11 [12−1] → KNOCKED PRONE. \"And after you killed my parents.\"", false],
  ["Vega Bloodroot", "Greataxe to hit", "23 [16]", "Eldritch Claw Tattoo activated", false],
  ["Vega Bloodroot", "Greataxe damage + tattoo d6", "16 [12] + 2 = 18", "Tattoo rider archived as custom 1d6", false],
  ["DM — thrall vs Vega (SD deflected one)", "Multiattack", "17 hits once", "20 slashing → Rage-halved 10. Steel Defender's Deflect canceled the other (house rule)", false],
  ["Barrett Grimmskar", "Magnum to hit", "8 (NAT 1) → Inspiration reroll → 20 [13]", "\"Re-roll that 1. Hey, it's a 20.\" Damage 13", false],
  ["Valerian Hellebore", "History check", "3", "\"I don't know shit\" → cast DAYLIGHT anyway (3rd-level) on a rock — beasts back off (blind, but feel heat)", false],
  ["Vega Bloodroot", "Greataxe to hit", "11 [4]", "Miss", false],
  ["Barrett Grimmskar", "Dagger (opportunity)", "17 → 6 damage", "As beasts retreat from the light", false],
  ["Samothy Smith-Wesson", "SD opportunity (19) + d8", "19 → 7 damage", "\"The construct did 7 damage\"", false],
  ["Vega Bloodroot", "Greataxe (opportunity)", "15 → 14+4 = 18", "Tattoo d6 = 4 this time", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp to hit", "22 [17]", "Hit", false],
  ["Zelda \"Z\" Whipper", "Starry Wisp damage", "1 → Inspiration reroll → 1 again", "Two d8s, two 1s. Doubled to 2. \"Could have been worse.\"", false],
  ["Samothy Smith-Wesson", "Pistol (+10) to hit", "20 [10] ('dirty 20')", "Damage 13; Vex + Sap applied", false],
  ["Samothy Smith-Wesson", "SD Rend", "19 [12+7] → 4 damage", "", false],
  ["Flux", "Silvered Longbow", "26 [19] → 8+5+2 = 15", "+ Finger Guns 17 → 9", false],
  ["Deanna Smith-Wesson", "Pistol", "20 [16] ('dirty 20') → 5; Vex", "+ Action Surge dagger 7 miss → Inspiration reroll 14 miss; Perforating Shot bonus — save 18, half = 5 [transcript-only dmg]", false],
  ["DM — thrall vs Valerian", "2 attacks", "18, 11", "Transcript-only. 18 hits — 14 damage. \"What role am I playing tonight? The fucking victim?\"", false],
  ["Vega Bloodroot", "Greataxe reckless (adv)", "15 [5,8] → 7→14 (Savage reroll) +4 = 18", "\"14 is my lucky number\"", false],
  ["DM — thrall vs Barrett (Sap: disadv)", "Attack", "15 (other die NAT 20)", "Transcript-only. Miss — Sap discarded the nat 20. \"Saved ya.\"", false],
  ["DM — thrall vs Vega", "2 attacks (SD deflects one)", "NAT 20, 14", "Transcript-only. Bracers' +1 AC turned the 14 into a miss; SD ate the crit? — DM accepted no hit", false],
  ["Barrett Grimmskar", "Finger Guns ×2 (Extra Attack)", "23, 16 → 10 + 10", "First thrall DEAD — overflow moved to Valerian's attacker", false],
  ["Valerian Hellebore", "Starry Wisp", "9 (NAT 1) → Inspiration reroll → 21 [13]", "\"Does a 21 hit his stupid fucking face yet?\"", false],
  ["Valerian Hellebore", "Starry Wisp damage", "14 [7,7] → doubled 28", "\"Tastes like stars, bitch.\"", false],
  ["Zelda \"Z\" Whipper", "Cure Wounds (on Valerian)", "15 [6,6]+3", "+ LUNAR VITALITY: Bardic die 1d8 = 5 more HP, +10 ft speed (archive-verified)", false],
  ["Samothy Smith-Wesson", "Pistol", "18 [8] → 12; Vex+Sap", "+ SD Rend 13 [13? d20:13] → 6 [3+3]", false],
  ["Flux", "Silvered Longbow", "22 [15] → 10+8+7 = 25", "+ Finger Guns 21 → 8", false],
  ["Deanna Smith-Wesson", "Pistol", "16 [12] → 6", "+ Perforating Shot 5 [transcript-only]", false],
  ["DM — thrall vs Valerian", "2 attacks", "both miss", "Transcript-only. \"Oh, poor baby.\"", false],
  ["Vega Bloodroot", "Greataxe reckless (adv)", "27 (NAT 20 [6,20])", "THE LIQUEFACTION", false],
  ["Vega Bloodroot", "Crit damage (max + rolls + tattoo + half-orc Savage Attacks)", "16 + 13 + 16 + 11 + 4 → 47 spoken total", "Archive: dmg 13, 16, 11 + d6 4. GWM bonus attack 14 [7,3] missed — irrelevant. Thrall #2 DEAD", false],
  ["Barrett Grimmskar", "Finger Guns ×2", "20, 17 → 9 + 7 = 16", "\"16 points of finger blasting damage\" (motion passed to rename)", false],
  ["Valerian Hellebore", "SHOCKING GRASP (\"the old shocker\")", "25 [17] → 12 lightning", "EXECUTION of the final thrall — for his parents. Thrall #3 DEAD", false],
  ["— POST —", "Short rest", "—", "3,300 XP. Hit dice: Vega d12+1=6 and 2d12+2=20; Valerian 1d8+2=3", true],
];

function sectionLogs() {
  return [
    ...sectionHeader("Section 6 — Logs"), spacer(160),
    ...subHeader("Encounters"), spacer(80),
    filledTable([{ label: "Enemies", w: 2100 }, { label: "Location", w: 1800 }, { label: "Party / Allies", w: 2200 }, { label: "Trigger", w: 1660 }, { label: "Outcome", w: 1600 }], [
      { cells: ["3 blind beast thralls (eyeless; hunt by sound/heat; multiattack bite+claw; ~2d8/2d10 hits; one forced a Str save → prone)", "Hospital first floor (ER hallway + side room)", "All 7 PCs + Steel Defender", "Valerian explored into their room", "Victory — 3 slain (Barrett, Vega, Valerian kills); Valerian took 31 (healed 20), Vega 14"] },
    ]),
    spacer(160),
    ...subHeader("Initiative (archive-verified)"),
    para("Vega 19 → Valerian 11 → Barrett 11 (adv 7,3) → Zelda 9 → Samothy 8 → Flux 6 → Deanna 3 — enemies interleaved (DM rolls transcript-only). Note: a thrall actually opened the fight before Vega (DM order had one beast first).", {}),
    spacer(160),
    ...subHeader("Encounter Summary"),
    para("A grinding, atmospheric brawl against blind hunters in a dead hospital. The thralls hit HARD (17–20 damage swings, a knockdown Str save) but the party's new silver arsenal (no self-healing), Vega's tanking, and the Steel Defender's Deflect house-rule blunted the damage. Tactical highlights: Daylight cast on a rock forced the heat-sensing beasts back; Sap mastery discarded a would-be nat-20 on Barrett; Lunar Vitality's first archive-verified use; and the kill sequence told the story — the grieving druid landed the final blow with lightning from his palm."),
    spacer(160),
    ...subHeader("Full Roll Log"), spacer(60),
    new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "Dark rows = phase boundaries / initiative. Source: Supabase ashfall_session_rolls (2026-02-16 ET) cross-referenced line-by-line with the corrected transcript. 125 archived rolls; all DM rolls transcript-only. ⚑ = flagged in Section 8.", font: F.body, size: F.szBody, italics: true, color: C.mutedText })] }),
    filledTable([{ label: "Character / NPC", w: 1600 }, { label: "Roll / Check", w: 2300 }, { label: "Result", w: 1100 }, { label: "Context / Outcome", w: 4360 }], ROLLS.map(r => ({ cells: [r[0], r[1], r[2], r[3]], combat: r[4] }))),
    ...sectionDivider(),
  ];
}

function sectionQuotes() {
  const quotes = [
    ["Lt. Hargraven (DM)", "Serious", "We need survivor counts, we need names, and we need to know what we're fighting. … If you find anyone alive, bring them home."],
    ["Taylor (DM)", "DM Quip", "Oh yeah, they're your parents."],
    ["Valerian Hellebore (Chase)", "Funny", "Oh good, just ease into that trauma."],
    ["Valerian Hellebore (Chase)", "Funny", "More alive than my parents."],
    ["Valerian Hellebore (Chase)", "Funny", "Curiosity shat the bed."],
    ["Valerian Hellebore (Chase)", "Funny", "Fuck yeah! 14 radiant damage, so 28. All right, tastes like stars, bitch."],
    ["Bobby (DM)", "DM Quip", "What do I look like, an alchemist? No, I make armor and weapons."],
    ["Bobby (DM)", "DM Quip", "I am a dwarf, thanks for noticing."],
    ["Abigail (DM)", "Funny", "Just wish he'd let me take him to dinner. Oh my God, I've been trying to ride that mustache for years."],
    ["Lt. Hargraven (DM)", "Serious", "Magic footprints, that can only mean a Beast Master."],
    ["Samothy Smith-Wesson (Josh)", "Banter", "Hey, Deanna, check this out. Found something."],
    ["Vega Bloodroot (Taylor)", "Funny", "That would be me for sure. I am the fist."],
    ["Deanna Smith-Wesson (Madi)", "Funny", "Jesus H, this place, really, someone needs to call housekeeping."],
    ["Taylor (DM, to his kids, mid-combat)", "Funny", "Okey-dokey, you can have some dry cereal. You don't need milk before you go to bed."],
    ["Valerian Hellebore (Chase)", "Funny", "I'm gonna give him the, uh, the old, uh, the old shocker, AKA shocking grasp."],
    ["Samothy Smith-Wesson (Josh)", "Banter", "If we ever come in contact with werewolves, we could definitely use some silver bullets over here. Some foreshadowing."],
  ];
  return [
    ...sectionHeader("Section 7 — Quotes & Language"), spacer(160),
    ...subHeader("Quote Board"), spacer(60),
    new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "VERBATIM from the corrected transcript. Tags: [Funny] [Poignant] [DM Quip] [Banter] [Serious]. Attribution per the reassigned speaker map — unattributed-blob lines excluded.", font: F.body, size: F.szBody, italics: true, color: C.mutedText })] }),
    ...quotes.flatMap(([n, t, q]) => quoteBlock(n, t, q)),
    spacer(160),
    ...subHeader("Profanity Record"), spacer(80),
    filledTable([{ label: "Speaker", w: 1800 }, { label: "Curse Word", w: 2200 }, { label: "Frequency", w: 1400 }, { label: "Context", w: 3960 }], [
      { cells: ["Chase (Valerian)", "fuck (12) · shit (2) · motherfucker (2) · damn/goddamn (3) · bitch (1)", "20+", "Grief-fueled: \"Starry Wisp straight to his fucking dome\""] },
      { cells: ["Taylor (Vega)", "fuck (6) · shit (4) · damn (1)", "11", "\"If this doesn't kill this shit, then I'm calling bullshit\" (it did — 47)"] },
      { cells: ["Taylor (DM)", "fuck (4) · shit (3) · bitch (1) · damn (1)", "9", "Incl. scolding Naruto the dog mid-narration"] },
      { cells: ["Josh (Samothy)", "damn (2) · shit (1)", "3", ""] },
      { cells: ["Madi (Deanna)", "shit (2)", "2", ""] },
      { cells: ["Doug (Barrett)", "fuck (1)", "1", ""] },
      { cells: ["Christie (Zelda)", "damn (1)", "1", "\"Damn it, dude\" — apologizing to her bestie for missing"] },
      { cells: ["Unattributed (D-blob)", "fuck (14) · shit (6) · damn/goddamn (5) · bitch (1)", "26", "⚑ Mostly Chase/Doug/Josh — uncountable per-person due to diarization merge"] },
    ]),
    spacer(160),
    ...subHeader("Alternate Title Options"), spacer(80),
    filledTable([{ label: "Type", w: 1800 }, { label: "Proposed Title", w: 7560 }], [
      { cells: ["DM-titled", "Ashes of the Living ← FINAL (announced in-session by the DM at 00:06:33)"] },
      { cells: ["—", "No alternates discussed at the table — DM pre-named the session"] },
    ]),
    spacer(120),
    new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.subRule, space: 4 } },
      spacing: { before: 0, after: 100 },
      children: [
        new TextRun({ text: "FINAL CHOSEN TITLE:   ", font: F.bold, size: F.szSub, bold: true, color: C.sectionText }),
        new TextRun({ text: "Ashes of the Living  (DM-titled in-session)", font: F.body, size: F.szBody, color: C.bodyText }),
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
      "Valerian's orphaning is the campaign's first major PC backstory wound — and the DM chose HIS village for the sweep. Watch for Beast Master/Beast Binder personal stakes.",
      "The missing children + the locket + 'they were carried out' is a planted thread; vampires taking children alive implies purpose (turning? feeding stock? leverage?). [Open question only.]",
      "Vampire taxonomy is assembling: feral thralls (drained kills, human-shaped) · beast thralls (mauling kills; sighted + blind variants) · Beast Masters (light-blue auras, control beasts, killable only by emerald) · Vampire Masters (dark-red auras) · the Mistress of Hunger above (?). The S01 Beast Binder presumably sits in the Beast Master class — PENDING DM confirmation.",
      "Silver economy: anti-healing silver is now standard kit; emeralds are the new strategic resource.",
      "Vega's damage ceiling keeps climbing: 30 (S01) → 47 (S02, archive-verified). She also took over body-disposal duty without being asked — character texture beyond the sass.",
      "Taylor flagged a possible rebuild (Wild Heart vs 2014 Totem Warrior vs dropping the Rogue dip; Tabaxi idea) — DM open to homebrew. Expect sheet changes by S03 ⚑.",
      "Nat-1 plague: five natural 1s (Deanna pistol, Barrett Magnum, Valerian save + Starry Wisp, Zelda's damage die twice). Three were inspiration-rerolled — the inspiration economy is loose (sources unclear ⚑).",
      "DM worldbuilding confirmed Britain: 'medieval England with a steampunk vibe,' Northern England, Hampshire. 'Britannia' is literal.",
    ]),
    spacer(160),
    ...subHeader("Continuity Flags, Missing Info & Ambiguities"), spacer(80),
    filledTable([{ label: "Flag Type", w: 1800 }, { label: "Description", w: 4560 }, { label: "Source / Location", w: 1800 }, { label: "Resolution", w: 1200 }], [
      { cells: ["Diarization", "SPEAKER D merged 4 players; ~110 lines reassigned by context, remainder 'Unattributed'", "Whole transcript", "Documented"] },
      { cells: ["Lore", "Beast Master (S02 rank) vs Beast Binder (S01 title) — same thing?", "00:49:55", "PENDING — Taylor asking DM"] },
      { cells: ["Item", "Vega's tattoo = ELDRITCH CLAW (final, Taylor 06/06); S01 records said Masquerade — vault updated with provenance note", "02:02:50", "RESOLVED"] },
      { cells: ["Names", "Village canonized as Hampshire after 4 fumbles; DM said 'Parkfordshire' once more after", "00:06:33–00:08:42", "Hampshire ⚑ provisional"] },
      { cells: ["Ambiguity", "Who pulse-checked Valerian's parents ('Mother.')", "00:23:25", "OPEN"] },
      { cells: ["Ambiguity", "'Flowy dexy' weapon requester at Bobby's (Zelda or Deanna — both simple-weapons)", "00:56:43", "OPEN"] },
      { cells: ["Mechanics", "Inspiration sources: Doug 'got it the other day'; Zelda spent one (origin unknown); Chase's may be S01 Perma Inspiration", "02:11:57 / 02:20:48 / 02:36:36", "OPEN"] },
      { cells: ["Math", "Vega's 47 spoken vs archive components (13+16+11+4 + max 16) — DM accepted 47", "02:46–02:48", "DM ruling stands"] },
      { cells: ["Roll", "'Does a 26 hit?' opportunity-attack roll not in archive (possibly physical/misheard)", "02:18:45", "transcript-only"] },
      { cells: ["Archive", "Zero DM rolls synced (2nd consecutive session); Deanna's initiative re-roll 16 ignored in favor of the 3", "Roll archive", "OPEN"] },
      { cells: ["Item", "Barrett's gun named 'TGC' (S01) vs 'Magnum' (S02 archive label) — same revolver?", "Archive", "OPEN"] },
      { cells: ["Workflow", "Taylor asked players to announce rolls aloud (for the roll log) — transcriber benefit going forward", "02:55:17 (removed range)", "Noted"] },
    ]),
    spacer(400),
    new Paragraph({ alignment: AlignmentType.CENTER, border: { top: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 8 } }, spacing: { before: 0, after: 0 }, children: [new TextRun({ text: "— END OF SESSION NOTES —", font: F.body, size: F.szBody, color: C.endText, italics: true, characterSpacing: 80 })] }),
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

const OUT = String.raw`C:\Users\theli\ashfall_vault\Session_Sources\Session_Notes\AB_02_021726_Ashes_of_the_Living.docx`;
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
