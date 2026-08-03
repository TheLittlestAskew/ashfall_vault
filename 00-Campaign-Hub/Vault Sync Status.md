# Vault Sync Status

> Updated LAST in every Convo 2 run. ✅ done · ➖ not applicable · ⬜ pending

## Completion Matrix

| # | Item | S01 | S02 | S03 |
|---|---|---|---|
| 1 | Session Note (`01-Sessions/`) | ✅ | ✅ | ✅ (cliffhanger flagged) |
| 2 | Corrected Transcript | ✅ | ✅ | ✅ (unified 2-part) |
| 3 | Campaign Dashboard | ✅ | ✅ | ✅ |
| 4 | Loot Tracker | ✅ | ✅ | ✅ |
| 5 | Quote Board | ✅ | ✅ | ✅ |
| 6 | Profanity Ledger | ✅ | ✅ (D-blob caveat) | ✅ (A-blob caveat) |
| 7 | Roll Stats | ✅ | ✅ | ✅ (Valerian sync gap ⚑) |
| 8 | POV Journal | ✅ | ✅ | ✅ |
| 9 | PC Pages (×7) | ✅ | ✅ (Vega backstory added by Taylor preserved) | ✅ |
| 10 | NPC Pages | ✅ | ✅ (Bobby, Abigail created; Hargraven, Beast Tamer updated) | ✅ (Mr. Cat created) |
| 11 | Locations | ✅ | ✅ (Hampshire, The Old Hospital created) | ✅ (Hospital 2F updated) |
| 12 | Flora/Fauna | ✅ | ✅ (Beast Thrall created) | ➖ (no new creatures) |
| 13 | House Rules & Rulings | ✅ | ✅ (+7 standing) | ✅ (+6 standing) |

**S04 — A Gust of Wind:** all 13 items ✅/➖ (no new NPC/location/creature pages needed; Bobby + Hospital pages updated; cliffhanger resolved across Dashboard/threads).

**S05 — The Bell of Saint Ardas:** ✅ all applicable (roleplay session: Dr. Wilson, Anne ⚑, Verilith, Saint Ardas pages created; no combat logs). **S04.5 lost-session stub** created.

**S06 — Protect the Light:** ✅ all applicable (Hargraven page updated to party member; Saint Ardas explored-state; new lore names in glossary; House Rules +4; **first no-docx session**).

**S07 — The Sun Shard:** ✅ all applicable (Moonbeam/College-of-Moon flag closed; Sun Shard + vampire-slave lore propagated; library-heist threads opened).

**S08 — Silence in the Library:** ✅ all applicable (3 pages created: Grand Library, Watch Captain, Aloysius; Bobby's-gear thread CLOSED; 15-enemy cliffhanger flagged for S09; **backfilled Profanity Ledger S05–S07 + Roll Statistics S06–S07**, which had been skipped despite earlier ✅ marks).

**S09 — The Battle of the Veiled Dawn (⚠ PARTIAL):** synced to the limit of the evidence. The 051126 recording captured **Taylor's mic only** — no Discord audio; 79% of the track is a Transformers reaction video + ads. Reconstructed from her side + 104 archived rolls (S04.5-method). Salvaged transcript replaces the corrected one; 8 open questions for the table in the session note. **⚑ FIX THE RECORDING SETUP before S10.**

**S10 — Never Truly Alone (06/15/2026):** all applicable items ✅/➖ **except Roll Stats, which is ⚠ transcript-only.**

| # | Item | S10 | Notes |
|---|---|---|---|
| 1 | Session Note (`01-Sessions/`) | ✅ | Created in Convo 1; all 5 site-parser H2s + Location row verified |
| 2 | Corrected Transcript | ✅ ⚑ | Present — but **NOT script-format converted**; speaker map A–H unconfirmed (see open items) |
| 3 | Campaign Dashboard | ✅ | S10 row; threads 38/44/45 resolved, **46–55 opened**; NPC directory +5; locations; timeline; party → **LEVEL 10** |
| 4 | Loot Tracker | ✅ | `## S10` block — restricted section, skull, note, 200gp, 3 pending pickups |
| 5 | Quote Board | ✅ | `## S10` block — 46 quotes, above-table lines marked **→** |
| 6 | Profanity Ledger | ✅ | `## S10` block (session total 49; tie champions Chase & Taylor, 13) + **running totals recomputed through S10** |
| 7 | Roll Stats | ⚠ **NOT ✅** | `## S10` block written, but **🛑 transcript-only — the archive was never queried.** See below |
| 8 | POV Journal | ✅ | Collapsible callout appended verbatim ⚑ *(still no Vega voice guide — one-time setup item)* |
| 9 | PC Pages (×7) | ✅ | All 7 Key Events + **all 7 stale "level 5 as of S01" info tables corrected to 10**; Vega +4 Inner Life entries, +3 quotes, class → pure Barbarian |
| 10 | NPC Pages | ✅ | **[[The Beast Master]] CREATED**; Mr. Cat, Bobby, The Beast Tamer updated |
| 11 | Locations | ✅ | Grand Library (architecture + battle-over status); Walled Base (next-session hook); **[[Cult of the Pale World]] CREATED** in the empty Factions folder |
| 12 | Flora/Fauna | ✅ | **[[Unknown Great Cat]] CREATED** from the severed skull |
| 13 | House Rules & Rulings | ✅ | **+5 standing** (milestone, automatics, meet-AC-beat-AC, 10-ft floors, Steel Defender proximity) + **4 deferred/pending** |
| — | Setting Primer / Names & Terms | ✅ | Beast Master psychic-bond lore + the great cat; **`## Provisional ⚑ (S10)` — 17 first-seen terms, none canonized** |
| — | Spell Usage | ✅ | `## S10` block — 12 rows |
| — | XP Tracker | ✅ **RETIRED** | Milestone from S10 onward; S09/S10 rows filled, party standing → level 10 |
| 14 | Website session entry | ⬜ **NOT DONE** | `rectrixcaedere` is a **separate repo** and a separate manual deploy — outside this automated run's scope. S10 must be added to **both** `ARC` registries (`session.html` + `archive.html`) and the header stats bumped |

### 🛑 S10 OUTSTANDING — READ BEFORE S11

1. **THE ROLL ARCHIVE WAS NEVER QUERIED — in Convo 1 *or* Convo 2.** The Supabase MCP permission was denied in both automated runs (`supabase` and `supabase-account2` both attempted; no local credentials — `.env` holds only `DDB_COBALT`). Consequences: the S10 roll log is **transcript-only**, ~90 reconstructed roll events, **zero archive-only rolls captured**, no totals verified, no null-character rolls resolved by `user_id` — and **the sync-gap check is OUTSTANDING, not passed**. Run interactively:
   `SELECT * FROM ashfall_session_rolls WHERE session_date = '2026-06-15';` and `SELECT MAX(timestamp_iso) FROM ashfall_session_rolls;`
   then reconcile [[Roll Statistics S01-S10]] §S10 and the session note's Full Roll Log.
2. ⚑ **Level 8 → 10 in one award + a 35-day gap with no recording.** Possible unrecorded session (S04.5 shape) — which would make S10's *number* wrong. **Do not create an S09.5 stub without confirmation.**
3. ⚑ **Speaker map A–H unconfirmed** → the corrected transcript was left in diarizer labels, not script format. Specific contradiction to resolve: 01:08:51 *"I wish my name was Madeline instead of Madison"* is assigned to SPEAKER F, but F is established as Taylor/Vega at 00:16:01.
4. ⚑ **2 of 29 approved spell-check rows still NOT applied** (the approved table itself marked each "do not apply without DM confirmation"): `Karlsteiner`→`Carl Senior` (45%) and Bobby's `master curator`→`master armorer` (35%). The third (`Tinkt— er`→`Taint— er`, 40%) was **released and applied 2026-08-03** when Taylor confirmed `Tink` = `Taint`.
5. ✓ **2026-08-03 post-hoc name correction, vault-wide.** Taylor confirmed the enemy roster after the sync ran. `Shathide`→**Shithead** and `Absidy`→**Abcde** overturned the spell-check's proposals; `Tink`→**Taint** merged two tokens into one. 17 files rewritten. Raw transcript intentionally left carrying the original ASR hearings.
5. ⚑ **S10 IS THE LAST SESSION IN THE S01-S10 RANGE.** S11 starts `… S11-S20.md` for all four trackers. Carry the Profanity running totals forward.
6. ⚑ **Still no Vega voice guide** (`⟦FILL: Vega voice guide⟧` open in both instruction files). One-time setup item.
7. ✅ **Resolved this run:** the duplicate `03-Characters/01 PCs/Companions/Mr. Cat.md` (0 bytes) was **deleted**; `03-Characters/02 NPCs/Mr. Cat.md` is now the single canonical page.

**Last synced session:** S10 — Never Truly Alone (06/15/2026) · **CATCH-UP QUEUE EMPTY 🎉** *(but see the roll-archive gap above)*

## Catch-Up Queue (chronological)

| Recording | Status |
|---|---|
| 021326 | ✅ **S01 — Graduation Day** — fully synced 06/06/2026 |
| 021726 | ✅ **S02 — Ashes of the Living** — fully synced 06/06/2026 |
| 022426 (1+2) | ✅ **S03 — Mr. Cat, Esquire** — unified, fully synced 06/06/2026 |
| 030426 | ✅ **S04 — A Gust of Wind** — fully synced 06/06/2026 |
| *(no recording)* | ⚠ **S04.5 — The Basement (UNRECORDED, ~03/11)** — stub created from 28 archived rolls; 5 open questions for Taylor |
| 032426 | ✅ **S05 — The Bell of Saint Ardas** — fully synced 06/06/2026 |
| 040126 | ✅ **S06 — Protect the Light** — fully synced 06/06/2026 (no docx — new convention) |
| 040226 | ⚠ **MISFILED — different campaign** ("Inspired" program; player Alec). Excluded from Ashfall; re-home the mp3 + transcript ⚑ |
| 042026 | ✅ **S07 — The Sun Shard** — fully synced 06/06/2026 |
| 050426 | ✅ **S08 — Silence in the Library** — fully synced 06/06/2026 |
| 051126 | ⚠ **S09 — The Battle of the Veiled Dawn (PARTIAL)** — mic-only recording; salvage-synced 06/06/2026 |
| *(no recording)* | ⚑ **POSSIBLE UNRECORDED SESSION between 05/11 and 06/15** — 35-day gap + an 8→10 double level-up. **Unconfirmed. Do not stub without asking.** |
| 061526 | ⚠ **S10 — Never Truly Alone** — fully propagated; **roll archive NOT queried** 🛑 |

Roll archive also holds sessions on 2025-11-08/12 (pre-recording era — Halloween one-shot / intro session?) ⚑ confirm with Taylor.

## Open Items Carried Forward

- ⚔️ **S04 must resolve the S03 cliffhanger** (1 wounded beast thrall, mid-initiative)
- **Valerian/Chase DDB sync gap** — zero archived rolls S03 despite digital-dice play; investigate before next sync
- **Pre-recording group Wisdom save vs ???** (S03) — Samothy & Flux failed; ask DM
- **Kill-contest reward** — wording garbled (S03); Taylor asking DM
- **S03 XP amount** — in Discord
- **Beast Master vs Beast Tamer** — same role? Taylor asking DM (S02)
- "TGC" vs "Magnum" — Barrett's revolver naming (S01/S02)
- Inspiration economy — sources of Doug's/Zelda's inspiration unclear (S02)
- S02 attribution gaps: parents' pulse-check ("Mother."), "flowy dexy" requester
- Hargraven rank (Captain vs Lieutenant) — DM
- NPC spellings (Thornfall, Bron Hargraven, Meridia Vale, Varan, Florence) — DM
- Homebrew terms (Spiny Shield, Risk Die, Perforating Shot, Finger Guns) — DM
- ~~Parlor gun name~~ → **Peter Pistol** (resolved 06/09 — DM-coined; "Tanya" overruled)
- DM rolls absent from DDB archive — confirm how DM rolls
- Vega memoir title + POV voice guide (one-time setup)
- Bracers item card + brass-knuckles homebrew — DM owes
- Base/city proper names — unknown in-fiction so far
- **S08 new flags:** "Tails" (Madi's name for player Taylor — "Tay"?) · custom-weapon elements for Deanna/Barrett/Zelda/Valerian · Sun Shard mount quality tier · ~~"Beast Tamer" (3rd name variant)~~ → resolved 06/09: it's the S01 captain's own self-title, NOT a 3rd variant ("Beast Binder" was a mis-transcription); open Q = is it the same as "Beast Master"? · the rooftop figure · Gregory's whereabouts · the S07 South-Tower/curator plan dropped (retcon — confirm with DM)
- **Backfill candidates:** PC-page Key Events for S05–S07 (pages currently jump S04→S08) · Spell Usage tables for S06–S07 · no on-screen XP award in S08 (Madi: "I just wait till you guys tell me it's time to level up")
- **S10 new flags:** 🛑 roll archive unqueried (see above) · 8→10 double level-up + possible unrecorded session · **Carl Senior never declared dead** while Cuck is confirmed last standing · **who did Deanna kill at 00:34:57?** · **Karlsteiner** (named twice, never again — real or ASR artifact?) · **Taint** — separate enemy or a mishearing of Taint? (decides 3 spell-check rows) · **Lucky's pronouns** (DM says "a girl," then "his turn") · **Shirley may be a matched pair** · **Deanna's "crit in stock"** — undocumented anywhere in the vault · **Samothy's teleport-infusion wording** garbled; DM deferred the surprise-attack interaction · **Vega's Relentless Rage at level 10** (a Barbarian 11 feature) · **Branding Smite called at 3rd level for 2d6** · **Starry Wisp** — widen the S08 glossary note (Zelda casts it; both Bard and Druid have it) · **an unattributed Con save (15)** the DM asked for "for no particular reason," target and consequence never revealed · **the DM's "dead, dead, dead" token-clearing habit** is the root cause of the unattributable kills — worth asking him to call kills explicitly
- **S10 lore contradiction to put to the DM:** [[Bobby]]'s S02 rule that **"emeralds are the only way to kill a Beastmaster"** is contradicted in play — S10's [[The Beast Master]] died to **Call Lightning**, no emerald involved. Also still open since S02: **is "Beast Master" the same title as "[[The Beast Tamer|Beast Tamer]]"?** S10 gave evidence (frail vs. captain; no aura observed) but no answer.
- **S10 absence, recorded not interpreted:** the **[[Sun Shard]] / "Solar Fist"** — the campaign's stated central relic — is not mentioned once in the entire session.
- ⚠ **Website (`rectrixcaedere`) is NOT updated for S10.** Separate repo, separate manual deploy: add S10 to both `ARC` registries (`ashfall-britannia/session.html` and `archive.html`) and bump the header stats (Sessions Chronicled; Levels Climbed → 10).

## Change Log

| Date | Session | Action |
|---|---|---|
| 08/03/2026 | S10 | **Full propagation (automated, Claude Code native FS).** 3 created ([[The Beast Master]], [[Cult of the Pale World]], [[Unknown Great Cat]]); 20 updated (Dashboard — S10 row, threads 38/44/45 resolved + **46–55 opened**, NPC directory +5, locations, timeline, party → **LEVEL 10**; 5 trackers incl. XP Tracker **retired to milestone**; journal; **all 7 PC pages** — Key Events + **7 stale "level 5 as of S01" tables corrected**; Mr. Cat, Bobby, Beast Tamer; Grand Library, Walled Base; Setting Primer, Names & Terms `## Provisional ⚑ (S10)` ×17 terms; House Rules **+5 standing / +4 deferred**; Spell Usage); 1 deleted (the 0-byte duplicate `01 PCs/Companions/Mr. Cat.md`). Battle resolved, [[The Beast Master]] lore canonized, **Abcde at large**, the whispering opened. 🛑 **Roll archive NOT queried — Supabase MCP permission denied in this run too; the S10 Roll Stats block is transcript-only and the sync-gap check remains outstanding.** ⚠ Website (`rectrixcaedere`) not updated — separate repo/deploy. |
| 06/09/2026 | Naming consolidation | **"Beast Binder" → "Beast Tamer" vault-wide** — the captain's own clan self-title; "Beast Binder" was an S01 note mis-transcription (never said in play). Fixed ~16 files: Dashboard, House Rules, Roll Stats, this file, Vega's Journal, 6 PC pages, Hargraven, The Beast Tamer NPC page (H1), Names & Terms (de-confused the 3-variant tangle — S08 "Beast Tamer" = same title, possible Cult-bishop link), Spell Usage, Feral Vampire Thrall. Also resolved: parlor gun = **Peter Pistol**. Open Q unchanged: is Beast Tamer = Beast Master? (DM). Source: transcript re-pass of S01–S04. |
| 06/06/2026 | S09 | **SALVAGE sync** (partial recording — Taylor's mic only): salvaged transcript (141/681 lines), reconstruction-style session note with 8 table questions, journal, 4 trackers, 7 PCs, Dashboard (threads 43–45, queue EMPTY, party → LEVEL 8), glossary, House Rules +3, Spell Usage, Grand Library status. Title "The Battle of the Veiled Dawn" auto-selected ⚑. Resolved: Spellfire Flare = Barrett's; Vega = pure Barbarian; Call Lightning debut. ⚠ Recording-rig flag raised. |
| 06/06/2026 | S08 | Full propagation (auto-advance, no docx): 4 created (session note, Grand Library, Watch Captain, Aloysius); 18 updated (Dashboard threads 38–42, 4 trackers, journal, 7 PCs, Hargraven, Mr. Cat, Bobby, Saint Ardas, glossary, House Rules +4, Spell Usage). Title "Silence in the Library" auto-selected ⚑. **Backfilled Profanity Ledger S05–S07 (Chase's 40 = new record) + Roll Statistics S06–S07.** Bobby's-gear thread closed; cliffhanger (~15 enemies) carried to S09. |
| 06/06/2026 | S04 | Full propagation (auto-advance mode): session note created; trackers, journal, 7 PCs, Dashboard (threads 13–20), House Rules (+4), Spell Usage, glossary, Bobby, Old Hospital updated. Title "A Gust of Wind" auto-selected ⚑. New flags: Gut/Deck Shot, Spellfire Flare, Gary, Zelda's Moon light. |
| 06/06/2026 | S03 | Full propagation: 2 created (session note, Mr. Cat), 14 updated (trackers, journal, 7 PCs, Old Hospital, Dashboard, House Rules, Spell Usage, glossary). Cliffhanger status threaded through Dashboard/Hospital/session note. "What are arms?" attribution corrected to Madi (archive-verified). |
| 06/06/2026 | S02 | Full propagation: 6 created (session note, Bobby, Abigail, Hampshire, Old Hospital, Beast Thrall), 16 updated (4 trackers, journal, 7 PCs, Hargraven, Beast Tamer, Primer, glossary, Dashboard, House Rules, Spell Usage). **Eldritch Claw Tattoo finalized** — S01 records corrected with provenance. Vega's sheet backstory (Taylor-added) indexed into glossary. |
| 06/06/2026 | S01 | Founding propagation: 14 files created (session note, format reference, 4 trackers, journal, 4 NPCs, primer, glossary, 2 locations, creature), 13 files filled/updated (7 PCs, Hargraven, Dashboard, House Rules, Spell Usage, 4 pointer stubs). Player-name correction applied: Deanna=Madi, Zelda=Christie. |
