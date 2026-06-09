/* AB_05_032426_notes.js — Session 5 "The Bell of Saint Ardas" — engine: ashfall_v1.js */
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, LevelFormat } = require('docx');
const fs = require('fs'); const AdmZip = require('adm-zip');
const F = { body: "Aptos", bold: "Aptos", expand3: 60, szBody: 18, szSub: 20, szTitle: 48 };
const C = { titleText: "6E1414", sectionFill: "D6CDC4", sectionText: "3A1414", sectionRule: "B5532B", subFill: "EAE6E0", subText: "7A2E2E", subRule: "7A2E2E", creamFill: "EFE3CC", creamText: "3A1414", creamRule: "B08D3C", metaLabelFill: "5A1E1E", metaLabelText: "FFFFFF", metaValueFill: "DCD3C9", metaValueText: "2B2018", tableHeaderFill: "5A1E1E", tableHeaderText: "FFFFFF", evenRow: "EDE8E1", oddRow: "D8CFC4", tableBodyText: "2B2018", bodyText: "2B2018", mutedText: "6E635A", journalText: "3A1414", endText: "9A8A86", gold: "B08D3C", lavender: "B3A39A", combatFill: "3A1414", combatText: "F2D9C0" };
const nB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" }, wB = { style: BorderStyle.SINGLE, size: 1, color: "FFFFFF" };
const aW = { top: wB, bottom: wB, left: wB, right: wB }, nT = { top: nB, bottom: nB, insideH: nB, insideV: nB };
const TW = 9360;
const sp = (p = 120) => new Paragraph({ spacing: { before: p, after: 0 }, children: [] });
const dv = () => [new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 1 } }, spacing: { before: 360, after: 0 }, children: [] }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.subRule, space: 1 } }, spacing: { before: 60, after: 240 }, children: [] })];
const sH = t => [new Paragraph({ shading: { fill: C.sectionFill, type: ShadingType.CLEAR }, children: [new TextRun({ text: t.toUpperCase(), font: F.bold, size: 24, bold: true, color: C.sectionText, characterSpacing: 80 })] }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.sectionRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] })];
const sub = t => [new Paragraph({ shading: { fill: C.subFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } }, spacing: { before: 200, after: 0 }, indent: { left: 120 }, children: [new TextRun({ text: t.toUpperCase(), font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })] }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] })];
const cB = ch => [new Paragraph({ shading: { fill: C.creamFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.creamRule, space: 6 } }, spacing: { before: 120, after: 0 }, indent: { left: 200 }, children: ch }), new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.creamRule, space: 1 } }, spacing: { before: 80, after: 0 }, children: [] })];
const th = (t, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: aW, shading: { fill: C.tableHeaderFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.bold, size: F.szBody, bold: true, color: C.tableHeaderText })] })] });
const td = (t, w, o = {}) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: aW, shading: { fill: o.alt ? C.oddRow : C.evenRow, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, verticalAlign: VerticalAlign.TOP, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: C.tableBodyText })] })] });
const ml = (t, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: aW, shading: { fill: C.metaLabelFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.bold, size: F.szBody, bold: true, color: C.metaLabelText })] })] });
const mv = (t, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: aW, shading: { fill: C.metaValueFill, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: C.metaValueText })] })] });
const P = (t, o = {}) => new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: o.color || C.bodyText, italics: !!o.italics })] });
const bl = items => items.map(t => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, color: C.bodyText })] }));
const fT = (cols, rows) => new Table({ width: { size: TW, type: WidthType.DXA }, columnWidths: cols.map(c => c.w), borders: nT, rows: [new TableRow({ tableHeader: true, children: cols.map(c => th(c.label, c.w)) }), ...rows.map((r, i) => new TableRow({ children: cols.map((c, j) => td(r[j] ?? "", c.w, { alt: i % 2 === 1 })) }))] });
const qB = (n, t, q) => cB([new TextRun({ text: `${n}  ·  [${t}]`, font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 }), new TextRun({ break: 1 }), new TextRun({ text: `"${q}"`, font: F.body, size: F.szBody, italics: true, color: C.creamText })]);
const jP = (t, b = false) => new Paragraph({ border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 8 } }, spacing: { before: 40, after: 40 }, indent: { left: 200 }, children: [new TextRun({ text: t, font: F.body, size: F.szBody, bold: b, italics: !b, color: C.journalText })] });

const journal = [
  "Home, for a breath. We handed the medicine to a surgeon who looked like he hadn't slept since the meteor, and he held those crates like they were children. Three hundred gold and potions for the trouble. Worth more than the gold: the look on his face.",
  "Then the war room, and the paper that wasn't blank. Hargraven passed his hand over it and said one word, and a city grew out of the page — the old downtown, and under it, tunnels. Arteries. All of them running to a church called Saint Ardas, a place he says shouldn't be on any living map. Congregations vanished there. Bodies drained. Something sealed beneath it that should have slept forever. And the tunnels touch every district. That's how they've always been ahead of us. They've been underneath us the whole time.",
  "And then, while we stood outside, the bell rang. A church that hasn't rung in centuries, ringing slow through the ash. So of course we're the ones being sent.",
  "The dwarf's book turned out to be a trick of fate — it only opens for one owner, and it chose Samothy when he cracked it in that barrel. Bobby took it about as well as a man can take losing the thing he's hunted for years: he called it a journal and told the quiet twin to keep it. The history of the vampires, maybe, sitting in Samothy's coat. He needs to read it. Soon.",
  "The shopping was good to us. Bobby's forging us each something with the stones we hauled back. The real apothecary — Anne, not the woman with the horse, and I will say no more about the woman with the horse — turned our humming herb into two potions she can't predict. Comforting.",
  "The metal cat doesn't need summoning anymore. He's just... with us now. Bronze, about bobcat-sized, dignified as ever. Samothy is talking about getting him a bird to wear as a hat. This is the family I have chosen, and I'd choose it again.",
  "Tomorrow, the church. Whatever has been ringing that bell either needs help or is the kind of thing that knows bait when it sets it.",
];

const sect = (t, kids) => [...sH(t), sp(120), ...kids, ...dv()];
const doc = new Document({
  numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 280 } } } }] }] },
  styles: { default: { document: { run: { font: F.body, size: F.szBody, color: C.bodyText } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    children: [
      sp(200),
      new Paragraph({ children: [new TextRun({ text: "The Bell of Saint Ardas", font: F.bold, size: F.szTitle, bold: true, color: C.titleText })] }),
      new Paragraph({ shading: { fill: C.subFill, type: ShadingType.CLEAR }, border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.subRule, space: 6 } }, indent: { left: 120 }, children: [new TextRun({ text: "Session 05  ·  03/24/2026  ·  Ashfall Britannia  ·  roleplay session — title auto-selected", font: F.bold, size: F.szSub, bold: true, color: C.subText, characterSpacing: F.expand3 })] }),
      new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: C.subRule, space: 1 } }, spacing: { before: 80 }, children: [] }),
      sp(280),
      ...sect("Section 1 — Session Metadata", [new Table({
        width: { size: TW, type: WidthType.DXA }, columnWidths: [2400, TW - 2400], borders: nT,
        rows: [["Session Number", "05"], ["Session Date", "03/24/2026 (3 archived rolls — pure roleplay)"],
          ["⚠ LOST SESSION", "S05 references an UNRECORDED session (~03/10–11): the hospital basement, Samothy's book vision, Verilith's photos, nirnroot, level 7. Documented as Session 04.5 stub — 28 archived rolls are its only primary source"],
          ["Party Present", "6 of 7 — JILL/FLUX ABSENT (dog at the vet). All others + Mr. Cat"],
          ["Locations", "The castle: medical ward (Dr. Wilson), war room, Bobby's armory, Anne's apothecary (+ Crazy Myrna's, briefly and regrettably)"],
          ["Party Level", "7 (23,000/34,000 XP) — milestone leveling begins after level 10"],
          ["Title", '"The Bell of Saint Ardas" — AUTO-SELECTED (Location)'],
          ["Spelling Checked", "Yes — 032426_Spell_Check_Log.md (OOC left in place — hangout session, blocks indexed in log)"],
        ].map(([l, v]) => new TableRow({ children: [ml(l, 2400), mv(v, TW - 2400)] }))
      })]),
      ...sect("Section 2 — Character POV Journal (Vega Bloodroot)", [
        ...cB([new TextRun({ text: "[VEGA'S JOURNAL — MEMOIR TITLE TBD]", font: F.bold, size: F.szSub, bold: true, color: C.creamText, characterSpacing: F.expand3 })]),
        jP("The castle. A breath between.", true), ...journal.map(t => jP(t)),
      ]),
      ...sect("Section 3 — Session Analysis", [
        ...sub("Narrative Summary"),
        P("A homecoming-and-errands session that detonated the campaign's biggest lore bomb. The party returned from the hospital arc, delivered the medical supplies to DR. WILSON (new NPC — the castle's exhausted surgeon; 300 gp + 5 healing potions), then briefed LT. HARGRAVEN in the war room: Barrett's photos of the missing (the X-ed ones 'already taken' — all ordinary castle folk: a butcher, a farmer), among them VERILITH, THE FIRST BLOOD — 'the woman with the daggers' (introduced in the lost session ⚑)."),
        P("Hargraven took the watermark paper, passed a hand over it — 'Reveal' — and it became a MAP: the old downtown, and beneath it a vast tunnel network running to the abandoned church of SAINT ARDAS. Cursed centuries ago: whole congregations vanished, bodies drained, monks' tales of claws in the dark and a pale figure in the rafters — and beneath the deepest crypts, 'an ancient evil sealed away… something that should have slept forever.' The tunnels reach every district: 'This is why they've been one step ahead of us. They've been moving under our feet.' As the party left, the church bell began to ring — the first time in centuries. The Dead Zone awaits; no one who has entered has returned. The party is assigned."),
        P("The book subplot resolved sideways: it's a ONE-OWNER ARTIFACT and it bound itself to Samothy when he opened it (the vision — lost session ⚑). To Bobby and everyone else it reads blank. Bobby, who has hunted this vampire-history book since the cloud came, conceded it with grace and a threat ('I would have to kill you to take it. Don't feel like doing that today. Maybe tomorrow.'). The jewels were delivered: Bobby is forging CUSTOM ENCHANTED GEAR for each PC, ready next session. The real apothecary ANNE ⚑ (S02 said 'Abigail' — same person? ask DM) turned the nirnroot into two RANDOM-EFFECT potions + 300 gp. The party also briefly entered the wrong shop — 'Crazy Myrna's' — an experience the table has agreed to describe as Lady Handjob's Apothecary and never speak of again (they will absolutely speak of it again)."),
        P("Housekeeping: LEVEL 7 confirmed (milestone after 10); MR. CAT IS PERMANENT (no summoning — bronze, bobcat-sized; a bird hat is planned, name candidate 'Derpy'); Valerian's cantrips now +5 damage; Vega kept her Rogue level for the subclass; party-name brainstorm ('Back Alley Orphans') unresolved. Next session: the church.", {}),
        ...sub("Quests / Objectives"),
        ...bl([
          "⛪ GO TO SAINT ARDAS — the bell is ringing; 'something inside is still alive.' NEXT SESSION.",
          "🗺️ The tunnel network — every district is exposed from below. Strategic crisis.",
          "🩸 VERILITH, THE FIRST BLOOD — identified among the missing-persons photos ⚑ (lost-session origin).",
          "📖 Samothy must READ the book (vampire history; one owner; visions).",
          "⚒️ Bobby's custom enchanted gear — ready next session (one weapon/armor each, attunement).",
          "🧪 Anne's two random-effect potions — unidentified.",
          "Carryovers: spy · Beast Binder/Beast Master · missing children · Varan · the two ritual daggers (smithy review pending).",
        ]),
      ]),
      ...sect("Section 4 — Character Activity", [
        fT([{ label: "NPC", w: 1900 }, { label: "Interaction", w: 5100 }, { label: "Status", w: 2360 }], [
          ["Dr. Wilson ⚑ NEW", "Castle surgeon — trembling, blood-stained, grateful; paid 300 gp + 5 potions", "Alive — medical ward"],
          ["Lt. Hargraven", "War-room briefing; revealed the map; visibly AFRAID for the first time re: Saint Ardas; doubling night watches", "Alive"],
          ["Bobby", "Received jewels (forging custom gear); lost the book to Samothy's ownership with grumpy grace", "Alive"],
          ["Anne ⚑ (= S02 'Abigail'?)", "The real apothecary: nirnroot → 2 random potions + 300 gp; 'what feels right' brewing style", "Alive"],
          ["Crazy Myrna ⚑ NEW (comedy)", "The wrong shop. A horse was involved. The table will never recover", "Alive, regrettably"],
          ["Gregor / 'Greg the Gory' ⚑ NEW (mentioned)", "6'8\" soldier, otherwise engaged", "Unmet"],
          ["Verilith, the First Blood ⚑ NEW (photo)", "'The woman with the daggers' — among the missing-persons photos", "Unknown — major threat?"],
        ]),
      ]),
      ...sect("Section 5 — Artifacts", [
        fT([{ label: "Owner", w: 2200 }, { label: "Item", w: 4400 }, { label: "Context", w: 2760 }], [
          ["Samothy", "THE BOOK — one-owner vampire-history artifact (blank to all others; grants visions)", "Bound by first opening; unread ⚑"],
          ["Party", "300 gp (Dr. Wilson) + 300 gp (Anne) + 5 healing potions + 2 RANDOM-EFFECT potions", "Effects unknown"],
          ["Each PC (incoming)", "Bobby's custom enchanted weapon/armor (attunement)", "Ready next session"],
          ["Mr. Cat", "PERMANENCE (no summoning); bronze, bobcat-sized; bird-hat pending ('Derpy')", "Madi's archived d20=19"],
        ]),
      ]),
      ...sect("Section 6 — Logs", [
        P("No combat. 3 archived rolls: Deanna initiative 4 (stray/misclick), Deanna custom 15, custom 19 — the famous 'roll a d20 for Mr. Cat's permanence' (19, archived under Samothy's sheet). The 28 rolls of 2026-03-11 belong to the LOST SESSION (see Session 04.5 stub); the 15 DM-only rolls of 2026-04-15 are prep, not play.", {}),
      ]),
      ...sect("Section 7 — Quotes & Language", [
        ...[["Lt. Hargraven (DM)", "Serious", "That place should not appear on any living map."],
          ["Lt. Hargraven (DM)", "Serious", "This is why they've been one step ahead of us. They've been moving under our feet."],
          ["Bobby (DM)", "DM Quip", "I would have to kill you to take it. Don't feel like doing that today. Maybe tomorrow."],
          ["Josh (Samothy)", "Banter", "You could always try your hand at it anytime, old man."],
          ["Taylor (DM)", "DM Quip", "Oh, you found Crazy Myrna. … Well, she smokes about a pack a day. It's not just cigarettes she's smoking either."],
          ["Chase (Valerian)", "Funny", "The fucking mental image of this batshit crazy lady, fucking horse in one hand, bong in the other. During a fucking vampire apocalypse."],
          ["Taylor (DM, as Anne)", "DM Quip", "Now I'm not exactly sure what they're going to do, but here you go. You're going to need them."],
          ["Madi (Deanna)", "Funny", "We could name our troupe the Back Alley Orphans, even though we're not all orphans. Yeah, that's what makes it funny."],
          ["Josh (Samothy)", "Funny", "I don't have to be like, I choose you, Mr. Cat."],
          ["Taylor (DM)", "Banter", "The Discord was a little quieter when Chase was missing."],
          ["Chase (Valerian)", "Banter", "Hey, fuck you and your bullshit."],
        ].flatMap(([n, t, q]) => qB(n, t, q)),
        sp(120),
        ...sub("Title"),
        fT([{ label: "Type", w: 1800 }, { label: "Title", w: 7560 }], [
          ["Location (AUTO-SELECTED)", "The Bell of Saint Ardas ← FINAL (auto-selected — change anytime)"],
          ["Comedy", "Lady Handjob's Apothecary"], ["Item", "The One-Owner Book"],
          ["Character", "Crazy Myrna"], ["Event", "Moving Under Our Feet"],
        ]),
      ]),
      ...sect("Section 8 — Archivist Notes", [
        ...bl([
          "🔴 LOST SESSION documented (Session 04.5 stub, 2026-03-11, 28 rolls) — Taylor: see the stub's 5 open questions (esp. Samothy's vision — check Discord).",
          "Anne vs Abigail ⚑ — S02's alchemist and S05's apothecary do the same job with different names. Ask DM.",
          "Saint Ardas spelling canonized (also heard 'Saint Arta's') ⚑.",
          "Verilith, the First Blood — entered the record via photo only; expect her at or under the church.",
          "Valerian's S03/S04 archive gap did NOT occur on 03-11 — his sync works; those two sessions specifically lost his rolls.",
          "Jill/Flux absent (first true absence) — 'we need Flux if we're gonna do combat.'",
          "Bobby's custom gear = 7 incoming homebrew items next session — big Loot Tracker update ahead.",
        ]),
      ]),
      new Paragraph({ alignment: AlignmentType.CENTER, border: { top: { style: BorderStyle.SINGLE, size: 2, color: C.lavender, space: 8 } }, children: [new TextRun({ text: "— END OF SESSION NOTES —", font: F.body, size: F.szBody, color: C.endText, italics: true, characterSpacing: 80 })] }),
    ]
  }]
});
const OUT = String.raw`C:\Users\theli\ashfall_vault\Session_Sources\Session_Notes\AB_05_032426_The_Bell_of_Saint_Ardas.docx`;
function fixB(p) { const z = new AdmZip(p); let x = z.getEntry("word/document.xml").getData().toString("utf-8"); let n = 0; x = x.replace(/<w:tblBorders>([\s\S]*?)<\/w:tblBorders>/g, (m, i) => "<w:tblBorders>" + i.replace(/<w:(?:left|right)\b[^>]*\/>/g, () => { n++; return ""; }) + "</w:tblBorders>"); z.updateFile("word/document.xml", Buffer.from(x, "utf-8")); z.writeZip(p); return n; }
Packer.toBuffer(doc).then(b => { fs.writeFileSync(OUT, b); console.log("Done ->", OUT, "| borders:", fixB(OUT)); }).catch(e => { console.error(e); process.exit(1); });
