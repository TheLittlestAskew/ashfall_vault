# Spell Check Log — 062226 SECOND ASR RUN (filed as "S13", identity NOT confirmed)

**Session:** ⚠ **NOT CONFIRMED.** Filename says 13; the content is **Session 11's audio**.
**Session date:** 06/22/2026 (ISO 2026-06-22)
**Raw transcript:** `Session_Sources/Transcripts/Raw_Unedited/13-062226_raw_transcript.md` (1,996 lines · 15,216 words · 137 min · AssemblyAI `universal-3-5-pro` · 95.1% stated confidence · transcribed 2026-08-29T01:45:48Z)
**Corrected transcript:** `Session_Sources/Transcripts/Corrected/13_062226_corrected.md`
**Proposal source:** `_pipeline/S13/spellcheck.md` — **reviewed and approved by Taylor 2026-08-28**
**Outcome:** **29 rows proposed · 25 applied · 4 not applied** (27 edit operations; rows 8 and 16 each cover two transcript lines, and rows 7 and 18 both fall on L444).

> ⚠ **This file does NOT overwrite `062226_Spell_Check_Log.md`.** That filename is the
> canonical, Taylor-approved log for **Session 11**, covering the *first* ASR run of this
> same audio (28 rows proposed · 25 applied · 3 held, approved 2026-08-03). The Convo 1
> run order specified `062226_Spell_Check_Log.md` as the output path; writing there would
> have destroyed an approved artifact for a different session, so this log was filed under
> `062226_Spell_Check_Log_RERUN.md` instead. **Both logs are valid and complementary.**

---

## 0. 🛑 Session-identity blocker

**`13-062226_raw_transcript.md` is a second AssemblyAI run of the audio already archived as Session 11.**

| Check | `11-062226_raw_transcript.md` | `13-062226_raw_transcript.md` |
|---|---|---|
| `# Source:` | `062226 Ashfall Britannia Recording.mp3` | `062226 Ashfall Britannia Recording.mp3` — **identical** |
| Audio duration | 137 minutes | 137 minutes |
| Model | `universal-3-5-pro` | `universal-3-5-pro` |
| Stated confidence | 95.1% | 95.1% |
| First line of play | `Everyone get their spells.` | `Everyone get their spells.` |
| Last line | `Good night.` | `Good night.` |
| Lines / words | 2,034 / 15,262 | 1,996 / 15,216 |
| Transcribed | 2026-08-03T20:11:10Z | **2026-08-29T01:45:48Z** |

Same recording, transcribed twice, 26 days apart. The ~0.3% word difference and ~19 fewer
speaker turns are normal run-to-run ASR variance, not different content.

**Session 11 is already complete in the vault** — corrected transcript, approved spell-check
log, and `01-Sessions/Session 11 — A Delightful Chase.md`. Sessions run weekly
(S10 = 061526, S11 = 062226, S12 = 062926); a genuine Session 13 would fall around **070626**.

**Session number for this file: `[Unknown/Ambiguous]`.** Not resolved here — that is Taylor's call.

---

## 1. Confidence policy in force

Terms already in `04-World-Lore/Names & Terms.md` or in the 2024 PHB → 70–100%. Plausible
context-based fixes on common words → 45–85%. **Any proposed change to a *setting* proper
noun not already in the glossary is capped at ≤60%** — Ashfall is an original setting with no
external canon, so first-seen in-world names are flagged, never silently normalized.
Real-world proper nouns (Michelangelo, *Heated Rivalry*) are judged on ordinary evidence,
per the S10 `Lumalee` precedent.

**Extra evidence unique to this pass:** because a second independent ASR run of the identical
audio exists, disagreements between the runs are direct evidence about what the audio
contains. Where the S11 run independently produces the proposed reading, confidence rises.
Where the two runs disagree, confidence falls.

**S11 status key:** `applied` = Taylor approved it and it is in the S11 corrected transcript ·
`held` = Taylor approved the row but explicitly instructed it not be applied · `new` = not in
the S11 pass.

---

## 2. Applied corrections (25 rows · 27 edit operations)

| # | Line(s) | Heard (as transcribed) | Corrected | Conf. | S11 | Reason |
|---|---|---|---|---|---|---|
| 1 | 1634 | `because he got hit with Shocking Grass` | `…with Shocking Grasp` | 95% | applied | 2024 PHB cantrip. Same speaker names it correctly eight lines earlier ("hit him with a Shocking Grasp", L1626). Both ASR runs agree on the error. |
| 2 | 1072 | `SPEAKER A: Conceive.` | `SPEAKER A: Con save.` | 90% | applied | Valerian has just demanded "make me another con save, motherfucker. DC 17" (L1070); the next line reports "It's a 15." Phonetic collapse of "Con save." |
| 3 | 312 | `straight at that, um, thrall bee` | `…um, Thrall B` | 90% | applied | The DM's own letter convention, same exchange: "is Thrall B on top of that building?" / "B, B, B, B, B, yes" (L284–286). "bee" is the spoken letter. |
| 4 | 950 | `but I took Wardcaster` | `but I took War Caster` | 90% | applied | 2024 PHB feat is **War Caster**; the same speaker says it correctly at L990. |
| 5 | 1456 | `to hit Beast Thrall Elf. Sorry.` | `to hit Beast Thrall F. Sorry.` | 90% | **new** | **Regression unique to this run.** The S11 run of the identical audio transcribed this as "Beast Thrall F" — independent corroboration. "Elf" is a phonetic rendering of the letter F; F is the live target Valerian moves the Moonbeam onto, and Deanna is shooting F in the same round. `Beast Thrall` is glossary-attested (S02). |
| 6 | 1108 | `Like Michaela, like, like the creation of Adam` | `Like Michelangelo, like, like the Creation of Adam` | 85% | applied | *The Creation of Adam* is Michelangelo's Sistine Chapel fresco; the gesture described is the touching fingertips. Real-world proper noun. |
| 7 | 444 | `and that brings up Vega turn` | `…brings up Vega's turn` | 85% | applied | Dropped possessive; the DM uses "Vega's turn" elsewhere. |
| 8a | 472 | `attacking Dee, right?` | `attacking D, right?` | 85% | applied | "Dee" is the spoken letter D. Vega confirms "Yeah, I'm attacking D" on the very next line (L474). |
| 8b | 548 | `next one is Dee` | `next one is D` | 85% | applied | The DM says "that's D's turn" at L576 for the same creature. |
| 9 | 698 | `a Con 15 save for inflict wounds` | `…for Inflict Wounds` | 85% | applied | 2024 PHB spell name; capitalization only. (2024 Inflict Wounds does use a Con save, so the mechanic as transcribed is correct.) |
| 10 | 268 | `and we get A claw and a bite` | `…and we get a claw and a bite` | 85% | applied | Spurious mid-sentence capital on the indefinite article — an ASR artifact, not the enemy designation "A". |
| 11 | 1192 | `The projectile is lodged in the Target for 1 minute` | `…lodged in the target…` | 80% | applied | Spurious capital while the player reads his own homebrew Gut Shot card aloud. |
| 12 | 1218 | `I'm gonna be A lot of blanks` | `I'm gonna be a lot of blanks` | 80% | applied | Same spurious-capital artifact. |
| 13 | 1668 | `it gets sap and vex` | `it gets Sap and Vex` | 80% | applied | **Sap** and **Vex** are 2024 PHB weapon mastery properties; the same speaker capitalizes "Vex" at L1690. |
| 14 | 246 | `pull out my magnum` | `pull out my Magnum` | 75% | applied | Glossary S02: `Magnum \| Item \| Barrett's revolver`. Same speaker capitalizes it at L1180. |
| 15 | 534 | `cast Spiny Shield at first Level` | `…at 1st level` | 70% | applied | Spell-level notation; the capital "Level" is an artifact. `Spiny Shield` itself left alone (glossary S01, spelling still unconfirmed). |
| 16a | 216 | `she's gonna finger guns him` | `…Finger Guns him` | 70% | applied | Glossary S01: `Finger Guns \| Cantrip (homebrew)`. Capitalized correctly by three other speakers this session (L190, L1170, L1638). |
| 16b | 234 | `finger gun the same fella` | `Finger Guns the same fella` | 70% | applied | Same. |
| 17 | 1962 | `6 emeralds and 5 rupees` | `…and 5 rubies` | 70% | applied | The same inventory is stated as "rubies" twice nearby (L1938, L1946). ⚠ The table riffs on Zelda/Link two lines later ("Tell me, Link…", L1944) — a deliberate joke remains possible. |
| 18 | 444 | `You still have Vampirius be pinned down` | `You still have Vampire Thrall B pinned down` | 70% | applied | The DM called this creature "Vampire Beast Thrall B" twice in the preceding 20 lines and is resolving B's failed escape. ⚠ **Reconstructed phrasing** — the shape is supported, the exact words are not recovered. |
| 19 | 960 | `he's gonna make a death save, or he could move` | `…gonna make a dex save…` | 65% | applied | The speaker self-corrects in the very next sentence: "It's a dex save of 17. No, con save, my bad." He is resolving a **Moonbeam** save; no death save is in play. |
| 20 | 884 | `It would be better than heated rivalry` | `…better than Heated Rivalry` | 65% | applied | Immediately follows discussion of unresolved romantic tension between two women in a film; *Heated Rivalry* is a real published romance title. ⚠ Could be the generic phrase. |
| 21 | 1156 | `I attempted— does attempt hit him?` | `I attempted— uh, does a 10 hit him?` | 60% | applied | The same speaker reported "That is a 10" moments earlier (L1146); the DM answers "It does not." "attempt" in the question slot is an ASR echo of the preceding word. ⚠ Reconstructed. |
| 22 | 682 | `gives me A +1 to bonus and attack rolls` | `gives me a +1 bonus to damage and attack rolls` | 55% | applied | Magic Weapon grants +1 to attack **and damage**; "bonus and attack rolls" has the noun in the wrong slot. ⚠ May be the speaker's own verbal scramble, which the Verbatim rule would preserve. |
| 23 | 1532 | `Uh, but you have Discipline.` | `Uh, but you have disadvantage.` | 50% | applied | "Discipline" has no referent in play; "disadvantage" fits the Infestation resolution being narrated. ⚠ Also sits inside an attribution problem (a DM adjudication appears inside a player's block) — see §5 Flag 3. |
| 24 | 1068 | `all the Gifts are distracting me` | `all the GIFs are distracting me` | 45% | applied | The same speaker says "all the GIFs being posted" 25 lines earlier (L1040). ⚠ The table is running a live gifts/GIFs pronunciation bit at L1042 — this may be deliberate. |
| 25 | 1086 | `I believe he was halfling.` | `I believe he was halved.` | 35% | applied | The radiant-doubling rule is being applied to the damage total; "halfling" has no referent (the only halfling, Zelda, is elsewhere in the fight). ⚠ Intended word genuinely unclear; both runs produce "halfling". Retained as applied because the S11 pass applied it. |

---

## 3. NOT applied (4 rows) — the approved table itself instructs otherwise

| # | Line | Left as transcribed | Proposed | Conf. | Why not applied |
|---|---|---|---|---|---|
| 26 | 1164 | `he's dead, so I'm gonna use my O and F, I guess` | `…I'm gonna use my bow on F, I guess` | 50% | **S11: held.** Table: "**Reconstructed — do not apply without an audio listen.**" Both ASR runs produce the identical string, so there is no new evidence. |
| 27 | 1238 | `Uh, she said he's like kind of badly beaten but not too bad?` | `Uh, he said he's like…` | 45% | **S11: held.** Table: "**Flagged rather than recommended.**" The speaker is quoting the DM (male), but could be quoting another player or saying "you said". |
| 28 | 20 | `What a wonderful thrall.` | `What a wonderful throw.` | 40% | **Divergence unique to this run.** The S11 run reads "throw"; the two runs disagree, so the audio is genuinely ambiguous. Table: "**Flagged, not recommended — needs a listen.**" |
| 29 | 1540 | `I'm gonna get a Nova Twins save` | `I'm gonna have him make a save` | 35% | **S11: held.** Table: "**Low / reconstructed — flag, don't apply.**" The replacement wording is **invented rather than recovered**. Glossary S08 `Nova Twins` = the DM's nickname for the Smith-Wesson twins, which has no referent in a spell aimed at Thrall F. |

---

## 4. Already fixed by this ASR run — no row needed

| Line | S11 run had | This run has |
|---|---|---|
| 1028 | `Did Beastrell C roll with disadvantage against me?` | `Did Beast Thrall C roll with disadvantage against me?` ✓ |

---

## 5. Resolved-flags summary

- **🛑 Flag 1 — session identity. UNRESOLVED, blocking.** See §0. Not resolved here.
- **🛑 Flag 2 — the diarization changed between runs. UNRESOLVED, blocking script format.**
  ~50 turns moved off SPEAKER B (131 → 81); ~18 landed on G (78 → 96). The S11 log's blocking
  flag was that "SPEAKER B is a diarization catch-all" — this run appears to have *partially
  fixed that*, which makes the two runs **complementary rather than one superseding the
  other**. Neither map is confirmed. **Any letter→character map inherited from the S11 log
  will be wrong for parts of this file.** Script-format conversion remains blocked.
- **Flag 3 — L1524–1540: a DM adjudication is merged into a player's block, and the block
  splits differently than in S11.** In the S11 run, L1540's counterpart is SPEAKER B, not G.
  One speaker is casting; another is adjudicating the save. The runs disagree about which is
  which. **`Pins and Needles` must not be attributed to a character on this evidence.** Unresolved.
- **Flag 4 — L1198: the DM names a *player*, not a character.** `He's just gonna attack
  Christie.` Christie is Zelda "Z" Whipper's player. The in-fiction target is Zelda. Not an
  ASR error; an attribution note for script-format conversion.
- **Flag 5 — L916, L922: DM household audio bleed, mid-sentence, unmuted.** `Marie` has now
  appeared with no referent in S10 and in this audio — two sessions running. Household member,
  pet, or mishearing: unknown. **Not guessed.**
- **Flag 6 — L1782: mid-sentence ASR cut inside the villain's entrance narration.**
  `He rests a hand on his head in a And a massive thrall appears by his side.` ✓ **Already
  resolved for S11 by Taylor's audio listen (2026-08-03):** the true line is `He rests a hand
  on his head **and** a massive thrall appears by his side.` **This run reproduces the same
  cut**, so the raw text here is still wrong. Not corrected in this pass — the fix is not in
  the approved table, and No Silent Fixes applies.
- **⚑ Flag 7 — `Hunter` has DISAPPEARED, which may resolve a standing glossary entry.**
  The glossary carries `Hunter` as an unresolved S11 term ("appears three times in one
  20-second block" — S11 run lines 282/286/290). **The word does not appear anywhere in this
  run**; the same 00:19:40–00:19:51 window transcribes as ordinary combat resolution. Strong
  evidence `Hunter` was an **ASR hallucination in the first run**, not a person.
  ⚑ **Recommend Taylor consider retiring the `Hunter` glossary entry.** Not actioned here.

---

## 6. First-seen / unreferenced proper nouns — flagged, never corrected

| Term | Line(s) | Status |
|---|---|---|
| `Moira` | 22 | No referent. `God, you sound so much like Moira.` Real-world or household. Unresolved since S11. |
| `Marie` | 916, 922 | No referent. Recurring across two sessions. See Flag 5. |
| `Gus` | 1990 | No referent. `Gus likes to play the trading card game simulator.` |
| `Jill` | 96 | `Sounds like a Jill issue.` — a pun on "skill issue" using Flux's player's name. Almost certainly deliberate; not an error. |
| `Leroy` | 312 | `I'm going Leroy.` — the Leroy Jenkins meme. Not a setting name. |
| `Taylor` (third referent) | 1992 | `I gotta take Taylor back to his bed.` Someone in Zelda's household — **distinct from Taylor-the-player and Taylor-the-DM.** Standing glossary disambiguation hazard. |
| `Pins and Needles` | 1540 | First-seen ability name. Canon-in-play per the standing rule; needs table confirmation, not correction. **Attribution disputed between runs — see Flag 3.** |

---

## 7. Deliberately **not** proposed

| Term / line | Why it is left alone |
|---|---|
| `Sunny Crystal` → `Sun Shard` (L1366–1368) | **The DM corrects it out loud on the next line.** That exchange is canon-in-play; both lines stay verbatim. |
| `Protection from Good and Evil` (L460) | The speaker's own word-order slip; she says `Protection from Evil and Good` correctly at L674. Verbatim Quotes Only applies. |
| `Totem Warrior` (L1400) | Vega's player naming her own subclass by its **2014** name. Her 2024 subclass is Path of the Wild Heart. Not an ASR error — a recorded glossary equivalence (S11). |
| `Spiny Shield`, `Risk Die`, `Hail of Thorns`, `Mr. Cat`, `Starry Wisp`, `Magnum`, `Beast Thrall`, `Sun Shard`, `Gut Shot` | Glossary-attested and spelled as the glossary has them. |
| `Savage Attacker`, `Piercer`, `Great Weapon Master`, `Brutal Strike`, `War Caster`, `Instinctive Pounce`, `Branding Smite`, `Witch Bolt`, `Moonbeam`, `Barkskin`, `Flame Blade`, `Infestation`, `Cure Wounds`, `Healing Word`, `Magic Weapon`, `Silvery Barbs`, `Shield`, `Menacing Attack`, `Ensnaring Strike` | Correct 2024 PHB / established feature names as heard. |
| `Cadet Kelly`, `Christy Carlson Romano`, `Hilary Duff`, `DCOM`, `House of the Dragon`, `Under the Desk News`, `Wicked`, `Uncut Gems`, `Mitch McConnell`, `Soul`, `World Cup` | Real-world references, all already spelled correctly. |
| `hook shots` / `waist slings` (L304, L784) | Players groping for the item's name; the DM supplies "the grappling hooks." Glossary canon is `Hookshot Arm Bracers`. The in-play fumbling is content, not error. |
| `schminess` (L110), `Leboop` (L640) | Deliberate nonsense/euphemism in play. Preserved. |

---

## 8. OOC / above-table sections identified

Per the standing rule, bio-break and pure life-chat content is removed from *notes*, not from
the corrected transcript, which stays complete. These spans are above-table and carry no game
content:

| Approx. lines | Content |
|---|---|
| 10–14 | Mic checks; a *Soul* (Pixar) reaction-video tangent. |
| 328–398 (intermittent) | Dice swapping and D&D Beyond VTT navigation during initiative setup. |
| 866–900 | The *Cadet Kelly* / Christy Carlson Romano / Hilary Duff conversation. |
| 916–922 | **DM household audio bleed** — an off-mic real-world remark. See Flag 5. |
| 1030–1070, 1500–1520 | The GIF/JIF pronunciation argument. |
| 1250–1270 | Mitch McConnell news tangent. |
| 1986–1996 | Sign-offs; `Gus` and the trading card game simulator; "I gotta take Taylor back to his bed." |

---

## 9. Encoding artifacts

**None.** The only non-ASCII characters in the file are **162 em dashes (`—`)** emitted by the
transcriber as disfluency markers, which are correct and load-bearing. No garbled Unicode, no
non-breaking spaces, no tabs.

**`[inaudible]` / `[cut off]` markers emitted by the transcriber: 0.** Candidate passages are
listed in `_pipeline/S13/flags.md` §3; none were added in this pass, because adding them is not
in the approved table.

---

## 10. ⟦FILL⟧ blocker — unchanged

`⟦FILL: player languages / accents⟧` is **still unfilled** in both
`Workflows/Project/Project_Instructions.md` (L127) and `Workflows/Project/Convo_1_Instructions.md`
(L62). The non-native-speaker rule therefore could not be applied to any specific speaker, and
every judgment above was made on context alone. This is the **sixth session running** with this
blocker open.

---

*Applied 2026-08-28 during Convo 1 Phase B (automated, non-interactive). 25 of 29 approved rows
applied in 27 edit operations; 4 rows deliberately not applied per the approved table's own
instructions. Session identity NOT resolved.*
