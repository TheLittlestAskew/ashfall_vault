/* AB_04_030426_notes.js — Session 4 "A Gust of Wind" — engine: ashfall_v1.js */
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, LevelFormat } = require('docx');
const fs = require('fs'); const AdmZip = require('adm-zip');
const F = { body: "Aptos", bold: "Aptos", expand3: 60, szBody: 18, szSub: 20, szTitle: 48 };
const C = { titleText: "6E1414", sectionFill: "D6CDC4", sectionText: "3A1414", sectionRule: "B5532B", subFill: "EAE6E0", subText: "7A2E2E", subRule: "7A2E2E", creamFill: "EFE3CC", creamText: "3A1414", creamRule: "B08D3C", metaLabelFill: "5A1E1E", metaLabelText: "FFFFFF", metaValueFill: "DCD3C9", metaValueText: "2B2018", tableHeaderFill: "5A1E1E", tableHeaderText: "FFFFFF", evenRow: "EDE8E1", oddRow: "D8CFC4", tableBodyText: "2B2018", bodyText: "2B2018", mutedText: "6E635A", journalText: "3A1414", endText: "9A8A86", gold: "B08D3C", lavender: "B3A39A", combatFill: "3A1414", combatText: "F2D9C0" };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" }, whiteBorder = { style: BorderStyle.SINGLE, size: 1, color: "FFFFFF" };
const allWhite = { top: whiteBorder, bottom: whiteBorder, left: whiteBorder, right: whiteBorder };
const noTbl = { top: noBorder, bottom: noBorder, insideH: noBorder, insideV: noBorder };
const TW = 9360;
const spacer = (p = 120) => new Paragraph({ spacing: { before: p, after: 0 }, children: [] });
const sectionDivider = () => [new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 1 } }, spacing: { before: 360, after: 0 }, children: [] }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.subRule, space: 1 } }, spacing: { before: 60, after: 240 }, children: [] })];
const sectionHeader = t => [new Paragraph({ shading: { fill: C.sectionFill, type: ShadingType.CLEAR }, children: [new TextRun({ text: t.toUpperCase(), font: F.bold, size: 24, bold: true, color: C.sectionText, characterSpacing: 80 })] }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.sectionRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] })];
const subHeader = t => [new Paragraph({ shading: { fill: C.subFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } }, spacing: { before: 200, after: 0 }, indent: { left: 120 }, children: [new TextRun({ text: t.toUpperCase(), font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })] }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] })];
const creamBlock = ch => [new Paragraph({ shading: { fill: C.creamFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.creamRule, space: 6 } }, spacing: { before: 120, after: 0 }, indent: { left: 200 }, children: ch }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.creamRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] })];
const thC = (t, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: allWhite, shading: { fill: C.tableHeaderFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.bold, size: F.szBody, bold: true, color: C.tableHeaderText })] })] });
const tdC = (t, w, o = {}) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: allWhite, shading: { fill: o.combat ? C.combatFill : (o.alt ? C.oddRow : C.evenRow), type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, verticalAlign: VerticalAlign.TOP, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: o.combat ? C.combatText : C.tableBodyText })] })] });
const mlC = (t, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: allWhite, shading: { fill: C.metaLabelFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.bold, size: F.szBody, bold: true, color: C.metaLabelText })] })] });
const mvC = (t, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: allWhite, shading: { fill: C.metaValueFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: C.metaValueText })] })] });
const para = (t, o = {}) => new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: o.color || C.bodyText, italics: !!o.italics })] });
const bullets = items => items.map(t => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: C.bodyText })] }));
const fT = (cols, rows) => new Table({ width: { size: TW, type: WidthType.DXA }, columnWidths: cols.map(c => c.w), borders: noTbl, rows: [new TableRow({ tableHeader: true, children: cols.map(c => thC(c.label, c.w)) }), ...rows.map((r, i) => new TableRow({ children: cols.map((c, j) => tdC(r.cells[j] ?? "", c.w, { alt: i % 2 === 1, combat: !!r.combat })) }))] });
const qB = (n, t, q) => creamBlock([new TextRun({ text: `${n}  ·  [${t}]`, font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 }), new TextRun({ break: 1 }), new TextRun({ text: `"${q}"`, font: F.body, size: F.szBody, italics: true, color: C.creamText })]);
const jPara = (t, bold = false) => new Paragraph({ border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } }, spacing: { before: 40, after: 40 }, indent: { left: 200 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, bold, italics: !bold, color: C.journalText })] });

const journal = [
  "We finished it. The big one and everything that came after — twelve of them by the end, between the two nights. The last one died on my blade. Mine. I have been swinging since the gate and tonight the count finally says one, and I don't care that it says one, it says MINE.",
  "Half the fight happened without the — without our usual rhythm. It didn't matter. We know each other now. The twins call shots, the glow-druid moves his beam like a shepherd moves a dog, the little one walks on walls, and the metal cat blocks what I can't see coming.",
  "Then we tore the floor apart looking for anything worth carrying. Stones — green ones, red ones, one clear one big enough to choke on. The green ones kill Beast Masters, the dwarf says, so every one of them is a weapon. Two old daggers with writing nobody alive can read — one smells sweet, one smells like smoke; one speaks of fire, the other of a water god. A paper that's blank until you hold it over flame, and even then it keeps its secrets.",
  "And the book. Samothy pulled it out of a barrel of medical books like it was nothing, opened it, and the whole floor EXHALED. Wind, indoors, in a dead building. That's the dwarf's book, the one with a presence. We have it. I don't know if it has us.",
  "There was a photograph in the embalmer's room. A woman and a child, two weeks before the sky went dark. Someone named Gary kept it where he could see it while he worked. I put it back the way I found it. Some things you don't loot.",
  "Tomorrow: the basement. The medicine is down there. The morgue is down there. Whatever has been breathing in this building is probably down there too. We rest light.",
];

const ROLLS = [
  ["— RESUMED MID-COMBAT (S03 cliffhanger) — Madi substitute-DM —", "—", "—", "Rolls shared openly; Madi added 2 beasts + 1 feral herself", true],
  ["Barrett", "Magnum 19 = CRIT (19–20) → 'Gut Shot' rider ⚑", "20 dmg", "KILL — projectile lodges, speed halved (feature name vs S02 'Deck Shot' ⚑)", false],
  ["Zelda", "Perception 'slutty 20' → Starry Wisp 8 [2]", "miss", "Spider-Mans back up the wall (bracers)", false],
  ["Flux", "SPELLFIRE FLARE ⚑ nat 20 [25] → 21 + SA 5", "ONE-SHOT KILL", "'Shot it through the heart and it explodes out the back'", false],
  ["Valerian", "Moonbeam moved — con saves 7, 9 FAIL", "15 radiant ea → 30 ea (doubled)", "Transcript-only (sync gap). Battlefield shepherding", false],
  ["Samothy", "Pistol 15 [+10]", "7 dmg — ONE-SHOT KILL", "'Just a bullet to the head does it every time' + Vex/Sap", false],
  ["Vega", "DBS reckless 25 → 9 + SA 4 + tattoo 5 = 18; 24 → 6 + tattoo 4", "hits", "Savage Attacker reroll identical ('that's fun')", false],
  ["DM/Beast A (Madi)", "17 & 16 vs Vega (AC 16 w/ bracer)", "6→3, 14→7 (Rage halves)", "'Thank you, sir. May I have another?'", false],
  ["Barrett", "Pistol 21 → 11; 12 miss", "11 dmg", "", false],
  ["Zelda", "Starry Wisp 14 radiant → DM-car ruling: DOUBLED = 28", "28", "'Radiant is double because it's technically the sun' — DM from car", false],
  ["Flux", "Bow 17 → 9 + SA 9 = 18; Finger Guns 9 miss", "18", "'I don't want to use all my magic — we haven't been to the basement yet'", false],
  ["Beast B (Madi)", "Slam 18 vs Barrett → 11; 14 vs Vega miss", "11", "", false],
  ["Deanna (run by Madi)", "18 → 12 dmg; 17 → 13 dmg", "KILLS BEAST A one-shot", "Substitute-DM running her own PC", false],
  ["Valerian", "Moonbeam — target save NAT 1 ('death saves for it. Critical failure')", "19 radiant → 38", "KILL. 'Everybody's fucking stealing my kills'", false],
  ["Valerian", "Healing Word (Magic Initiate) on self", "13 HP (was 17/45)", "DDB bug: bonus action not showing — DM: cast it anyway", false],
  ["Samothy", "Pistol 24 → 8 + Vex/Sap", "8", "", false],
  ["Vega", "DBS 26 → 12; 21 → 13+4", "FIRST KILL EVER", "'Chance! Hooray! I did it!' GWM bonus attack — nobody left to hit", false],
  ["— XP MATH (party-calculated, +50 bonus) —", "1,100×3 beasts + 750×2 ferals + 50", "4,850 each", "Party total 21,700 → LEVEL 6 (~halfway to 7)", true],
  ["— LOOT SWEEP (DM home from ~01:11) —", "—", "—", "", true],
  ["Deanna", "Investigation 9", "—", "Sees nothing (the hidden body stays hidden ⚑)", false],
  ["Flux", "Investigation 17", "—", "Embalming office: WATERMARK PAPER (candle reveal), shipping orders → potions/insulin in BASEMENT, ruby + emerald", false],
  ["Zelda", "Investigation 22 → detail 14", "—", "Sailor ward (Sailor's Rite lore): 3 emeralds, 1 ruby, 10 gp", false],
  ["Valerian", "Investigation 7 → inspiration reroll 5 (WORSE)", "—", "'This room's empty, guys.' (It was not.)", false],
  ["Zelda + Valerian", "Investigation 8 ('physical dice said 15')", "—", "Also nothing. The room mocks them", false],
  ["Samothy", "Investigation avg → 14 → barrel: inspiration reroll 7→23", "—", "Rotten fruit ×2 barrels + BARREL OF BOOKS → THE OBSCURE BOOK → GUST OF WIND through the floor", false],
  ["Barrett", "Investigation 10 + MAVERICK SPIRIT (Risk Die d8=5) = 15", "—", "NEW feature revealed. The 'empty' room yields: 3 emeralds, 4 rubies, 1 DIAMOND, 4 amethysts, gold, A DAGGER", false],
  ["Vega", "Investigation nat 20 ('for 20') ⚑roller", "—", "Embalmer's room: the Gary photo (woman+child, ~2 wks pre-ash) + love letter", false],
  ["Flux", "Identify dagger — Inv 14 / Arcana 14", "—", "Sweet-wood hilt, ancient arcane engravings", false],
  ["Deanna", "Identify dagger — Inv 15 / Arcana 15 / Religion 18", "—", "Smoky wood, religious text re: [unreadable]", false],
  ["Samothy", "Reads both: Inv 21 / Rel 19; Arcana 24 / Inv 9 / Rel 23", "—", "Dagger 1 = 'a deity that likes WATER'; dagger 2 = 'something to do with FIRE'. Different woods + metals → smithy", false],
  ["Valerian", "Nature check (his ask) 25", "—", "Storage nook: bandages, burn cream, syringes, alcohol pads — the actual MEDICAL SUPPLIES", false],
  ["— NEW MECHANIC: mid-encounter spell recovery —", "Each caster 2d6+1d4", "—", "Val & Deanna: ALL slots · Zelda & Flux: half · Samothy & Barrett: 3 · Bardic: half. Table verdict: love it", true],
];

function S(title, kids) { return [...sectionHeader(title), spacer(120), ...kids, ...sectionDivider()]; }
const doc = new Document({
  numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 280 } } } }] }] },
  styles: { default: { document: { run: { font: F.body, size: F.szBody, color: C.bodyText } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    children: [
      spacer(200),
      new Paragraph({ children: [new TextRun({ text: "A Gust of Wind", font: F.bold, size: F.szTitle, bold: true, color: C.titleText })] }),
      new Paragraph({ shading: { fill: C.subFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } }, indent: { left: 120 }, children: [new TextRun({ text: "Session 04  ·  03/04/2026  ·  Ashfall Britannia  ·  title auto-selected", font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })] }),
      new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80 }, children: [] }),
      spacer(280),
      ...S("Section 1 — Session Metadata", [new Table({
        width: { size: TW, type: WidthType.DXA }, columnWidths: [2400, TW - 2400], borders: noTbl,
        rows: [
          ["Campaign", '"Ashfall Britannia"'], ["Session Number", "04"],
          ["Session Date", "03/04/2026 (rolls keyed 2026-03-03 ET; 8:28–10:21 PM)"],
          ["Special", "Opens MID-COMBAT (S03 cliffhanger resolved). MADI SUBSTITUTE-DM'd until DM Taylor arrived (car ~20 min in; home ~70 min in — first day at his new job)"],
          ["Start/End", "Hospital 2F (combat) → Hospital 2F fully looted; basement next ('a whole session')"],
          ["Party", "All 7 PCs + Mr. Cat"],
          ["Rolls", "81 archived (first DM + creature-tagged rolls!); Valerian still 0 ⚑ sync gap"],
          ["Party Level / XP", "6 — 21,700 XP after +4,850 (incl. 50 'DM math' bonus); level-up chance after the basement"],
          ["Title", '"A Gust of Wind" — AUTO-SELECTED per standing order (alternates logged in §7)'],
          ["Spelling Checked", "Yes — 030426_Spell_Check_Log.md"],
        ].map(([l, v]) => new TableRow({ children: [mlC(l, 2400), mvC(v, TW - 2400)] }))
      })]),
      ...S("Section 2 — Character POV Journal (Vega Bloodroot)", [
        ...creamBlock([new TextRun({ text: "[VEGA'S JOURNAL — MEMOIR TITLE TBD]", font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 })]),
        jPara("The hospital. After.", true), ...journal.map(t => jPara(t)),
      ]),
      ...S("Section 3 — Session Analysis", [
        ...subHeader("Narrative Summary"),
        para("The S03 cliffhanger resolved: the party finished the second-floor brawl — 12 enemies total across both sessions — with Madi substitute-DMing the opening (rolls shared openly; she added 2 beasts and a feral 'so we'd have enough to do'). Kills: Barrett's crit Gut-Shot; Flux's nat-20 Spellfire Flare one-shot; Samothy's bullet-to-the-head; Deanna one-shotting Beast A; Valerian's 38-damage Moonbeam on a crit-failed save; and VEGA'S FIRST KILL of the campaign on the final beast ('Chance! Hooray! I did it!'). XP was party-calculated at 4,850 each (incl. a 50-XP 'doing the DM's math' bonus) — 21,700 total, level 6."),
        para("Then the floor-wide loot sweep, a comedy of investigation rolls: Valerian and Zelda declared a room empty that Deanna and Barrett (via his newly-revealed MAVERICK SPIRIT Risk-Die rider) found full of gems — emeralds (the anti-Beastmaster ammunition), rubies, amethysts, and a diamond. Flux found a blank paper with a candle-revealed watermark and shipping orders proving the medicine (potions, insulin, terminal-care meds) is stored in the BASEMENT. Vega's nat-20 found the embalmer's photo — a woman and child from two weeks before the ash, with a love letter to 'Gary.' Two ancient ritual daggers surfaced (sweet wood/FIRE arcana; smoky wood/WATER deity — different metals, for Bobby's eyes). And Samothy, digging through a barrel of medical textbooks, opened an obscure book that sent a GUST OF WIND through the entire floor — almost certainly Bobby's 'book with a presence.' It's in the bag of holding now."),
        para("Wrap: DM confirmed this is a 3-session set-piece (basement = next session, level-up after); tested a new mid-encounter spell-recovery mechanic (2d6+1d4 per caster) to table-wide approval; short rest granted with vigilance flavor.", {}),
        ...subHeader("Quests / Objectives"),
        ...bullets([
          "✅ The 2F combat — RESOLVED (12 enemies total across S03–S04).",
          "📕 Bobby's book — LIKELY FOUND (the gust-of-wind book) ⚑ unconfirmed until delivered.",
          "💎 Emerald supply secured (~7) + rubies/diamond/amethysts — Bobby's infusions now possible.",
          "🔎 NEW: the watermark paper (unread) · the two ritual daggers (water/fire deities — smithy + Comprehend Languages planned) · 'Gary' and the photo.",
          "🏥 BASEMENT next: medicine storage, morgue, nirnroot, whatever breathes down there.",
          "Carryovers: spy · Beast Binder · missing children · Beast Master's boots · rendezvous clock.",
        ]),
        ...subHeader("Themes & Emotional Beats"),
        ...bullets([
          "Vega's first kill — three sessions of being the fist without a confirmed kill, resolved.",
          "The table runs itself — substitute-DM session proves the group's self-sufficiency (and honesty: shared rolls, self-added monsters, self-calculated XP).",
          "Things with presence — the book's wind; the photo nobody loots; daggers naming dead gods.",
          "Comedy of competence — the druid who can't find gems on the floor; 'yep, that's a dagger.'",
        ]),
      ]),
      ...S("Section 4 — Character Activity", [
        fT([{ label: "NPC / Entity", w: 2300 }, { label: "Interaction", w: 4700 }, { label: "Status", w: 2360 }], [
          { cells: ["Substitute DM (Madi)", "Ran the combat open-handed; added 3 monsters; 'I'm only the substitute DM. I don't have all of the teacher's notes.'", "Table-approved"] },
          { cells: ["'Gary' ⚑ NEW name", "Embalmer(?) — kept a photo of a woman+child (~2 wks pre-ash) with a love letter", "Unknown — pre-ash"] },
          { cells: ["Mr. Cat", "Positioning support; no kills", "Active"] },
          { cells: ["Thralls (3 beast + 2 feral)", "All slain", "Dead"] },
        ]),
      ]),
      ...S("Section 5 — Artifacts", [
        fT([{ label: "Owner", w: 2200 }, { label: "Item", w: 4400 }, { label: "Context", w: 2760 }], [
          { cells: ["Party (bag of holding)", "THE OBSCURE BOOK — opening it gusted wind through the floor", "Presumed Bobby's commission ⚑"] },
          { cells: ["Party", "~7 emeralds · ~6 rubies · 1 diamond · 4 amethysts · ~25 gp", "Anti-Beastmaster ammo + castle-protection jewels"] },
          { cells: ["Party", "Ritual dagger #1: sweet-wood hilt, arcane FIRE engravings", "Flux's find; smithy + Comprehend Languages planned"] },
          { cells: ["Party", "Ritual dagger #2: smoky-wood hilt, religious WATER-deity text", "Deanna's find"] },
          { cells: ["Flux", "Blank paper with candle-revealed watermark + faint lettering", "Unread ⚑"] },
          { cells: ["Party", "Medical supplies: bandages, burn cream, syringes, alcohol pads", "Partial mission success (main stock in basement)"] },
          { cells: ["—", "Photo of woman + child w/ love letter to 'Gary'", "Left in place"] },
        ]),
      ]),
      ...S("Section 6 — Logs", [
        ...subHeader("Encounter"),
        para("S03–S04 second-floor brawl, CONCLUDED: 12 enemies total (per the table's own count) — final five (3 beast, 2 feral incl. Madi's additions) slain this session. Damage taken S04: Vega ~10 (Rage-halved ×2), Barrett 11. Kill credits S04: Barrett, Flux, Samothy, Deanna, Valerian, VEGA (first ever)."),
        ...subHeader("Full Roll Log (condensed by turn; archive ⇄ transcript)"),
        para("81 archived rolls; FIRST DM-account + creature-tagged rolls in the archive (Beast A, Feral Vampire Thrall). Valerian transcript-only (sync gap ⚑).", { italics: true, color: C.mutedText }),
        fT([{ label: "Actor", w: 1700 }, { label: "Roll / Action", w: 3300 }, { label: "Result", w: 1500 }, { label: "Context", w: 2860 }], ROLLS.map(r => ({ cells: [r[0], r[1], r[2], r[3]], combat: r[4] }))),
      ]),
      ...S("Section 7 — Quotes & Language", [
        ...[["Taylor (Vega)", "Funny", "Chance! Hooray! I did it! … I killed somebody."],
          ["Madi (substitute DM)", "Funny", "Right, sorry, I'm only the substitute DM. I don't have all of the teacher's notes."],
          ["Madi (substitute DM)", "Funny", "I added Taylor husband. I added, um, an extra Beast dude."],
          ["Christie (Zelda)", "Funny", "Oh, a slutty 20."],
          ["Josh (Samothy)", "Funny", "Just a bullet to the head does it every time."],
          ["Chase (Valerian)", "Funny", "Everybody's fucking stealing my kills, so I'm just gonna do this again. Moving it. There, make a fucking save."],
          ["Taylor (DM, from car)", "DM Quip", "Radiant damage is double because it's technically the sun."],
          ["Chase (Valerian)", "Funny", "Sorry, is there a window in this room that I can throw my horrible druid ass self out of?"],
          ["Taylor (DM)", "DM Quip", "So, Sammy, you look— you get handed the dagger, you give it a quick one over, and you're like, yep, that's a dagger."],
          ["Doug (Barrett)", "Banter", "Barrett just looks at Z — really? You're closer to the ground, you still didn't see them?"],
          ["Vega (Taylor)", "Banter", "And a partridge in a pear tree."],
          ["Madi → table", "Poignant", "I want to point out his dedication, guys. He hopped on to be here before he even texted me, his wife, that he was on his way home."],
        ].flatMap(([n, t, q]) => qB(n, t, q)),
        spacer(120),
        ...subHeader("Profanity (session totals)"),
        para("Chase 13 (+13 in the C-blob shared with DM-car) · Vega 7 · Josh 7 · Doug 3 · Madi 3 · DM 3 · Christie 1 · Jill 1. Chase four-peats.", {}),
        ...subHeader("Title"),
        fT([{ label: "Type", w: 1800 }, { label: "Title", w: 7560 }], [
          { cells: ["Event (AUTO-SELECTED)", "A Gust of Wind ← FINAL (auto-selected per standing order — change anytime)"] },
          { cells: ["Quote", "Yep, That's a Dagger"] },
          { cells: ["Character", "The Substitute DM"] },
          { cells: ["Event", "First Blood (Vega's first kill)"] },
          { cells: ["Location", "Uncut Gems"] },
        ]),
      ]),
      ...S("Section 8 — Archivist Notes", [
        ...bullets([
          "S03 cliffhanger RESOLVED on-record — continuity verified.",
          "DM rolls now sync (3 + creature rolls) — but VALERIAN'S GAP PERSISTS (2 sessions) ⚑ fix before next sync.",
          "'Gut Shot' (S04) vs 'Deck Shot' (S02) — same Barrett crit feature, conflicting hearings ⚑.",
          "'Spellfire Flare' (Flux, radiant) — unknown spell ⚑; possibly related to S03's archive-only Fire Bolt.",
          "Maverick Spirit (Barrett) — newly revealed: Risk Die added to failed INT/WIS/CHA checks.",
          "New DM mechanic: mid-multi-session-encounter spell recovery (2d6+1d4) — table loved it; expect reuse.",
          "Kill-contest reward still unawarded/unclear ⚑ — contest ends 'this session' per S03; standings now incl. Samothy 4 total.",
          "The book is presumed Bobby's — deliver next visit; watch for 'don't tell the boss' fallout.",
          "Zelda's 'my Moonbeam' light feature (blue-tinted) — College of the Moon feature name unknown ⚑.",
          "OOC note for Taylor only: the DM got the job from the S01-era interview (first day = this session).",
        ]),
      ]),
      new Paragraph({ alignment: AlignmentType.CENTER, border: { top: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 8 } }, children: [new TextRun({ text: "— END OF SESSION NOTES —", font: F.body, size: F.szBody, color: C.endText, italics: true, characterSpacing: 80 })] }),
    ]
  }]
});
const OUT = String.raw`C:\Users\theli\Obsidian Vaults\ashfall_vault\Session_Sources\Session_Notes\AB_04_030426_A_Gust_of_Wind.docx`;
function fixB(p) { const z = new AdmZip(p); let x = z.getEntry("word/document.xml").getData().toString("utf-8"); let n = 0; x = x.replace(/<w:tblBorders>([\s\S]*?)<\/w:tblBorders>/g, (m, i) => "<w:tblBorders>" + i.replace(/<w:(?:left|right)\b[^>]*\/>/g, () => { n++; return ""; }) + "</w:tblBorders>"); z.updateFile("word/document.xml", Buffer.from(x, "utf-8")); z.writeZip(p); return n; }
Packer.toBuffer(doc).then(b => { fs.writeFileSync(OUT, b); console.log("Done ->", OUT, "| borders:", fixB(OUT), "| KB:", (fs.statSync(OUT).size / 1024).toFixed(1)); }).catch(e => { console.error(e); process.exit(1); });
