# Spell-Check Log — Session 19 (092326)

**Campaign:** Ashfall Britannia
**Session:** 19 · **Real-world date:** 09/23/2026
**Raw transcript:** `Session_Sources/Transcripts/Raw_Unedited/19-092326_raw_transcript.md`
**Corrected transcript:** `Session_Sources/Transcripts/Corrected/19_092326_corrected.md`
**Proposal table:** `_pipeline/S19/spellcheck.md` — **reviewed and approved by Taylor**
**Flag packet:** `_pipeline/S19/flags.md` (15 sections, unresolved items carried forward)
**Applied:** 2026-09-24, non-interactive Phase B run.

---

## Result

| Metric | Value |
|---|---|
| Rows in the approved table | **26** |
| Rows applied | **18** (rows 1–8, 10, 12–14, 16–18, 20–22) |
| Rows held, not applied | **8** (rows 9, 11, 15, 19, 23, 24, 25, 26 — all at or under 60%) |
| Transcript lines changed | **24** |
| Verification | Post-apply grep: **0** of the 18 original strings remain; **all** replacements present |
| Encoding artifacts cleaned | **0** (none existed — file was clean UTF-8) |
| `[inaudible]` / `[cut off]` markers | **0** emitted by the transcriber; ~18 unmarked garbles logged in `flags.md` §6, left verbatim |
| Speaker labels converted to character names | **No** — blocked, see below |

**Method.** Each correction was anchored to its transcript line number and applied as an exact
substring replacement on that line only. No regex wildcards and no blind global find-and-replace,
so no partial word could be corrupted. Nothing outside the approved table was touched.

**Why 8 rows were held.** The approved table states its own banding rule in its preamble: *"Any
proper noun NOT already in the glossary is capped at 60% — this is an original setting with no
external canon, so a first-seen name gets flagged, never silently corrected,"* and `summary.md`
line 109 directs that rows at/under 60% **default to held**. Those 8 rows are therefore recorded
here as open questions for the table rather than written into the transcript. Applying them would
be a silent fix on a first-seen proper noun, which the No Silent Fixes rule forbids.

---

## Corrections applied

Line numbers are **raw-transcript** line numbers (the corrected file gains 28 header lines).

| # | Raw line(s) | Heard (as transcribed) | Corrected | Conf. | Reason |
|---|---|---|---|---|---|
| 1 | 72, 496 (×2), 504, 510, 520 (×3), 814 | `Beastmaster` / `Beastmasters` | `Beast Master` / `Beast Masters` | 90% | Orthography. Glossary has recorded **Beast Master** as two words since S02, with a vault page at `[[The Beast Master]]`. No meaning change. |
| 2 | 614 | `Beast Throne B` | `Beast Thrall B` | 95% | ASR artifact. The DM is cycling saves for beast thralls A/B/C in the same breath (L604, L612, L616). "Throne" appears nowhere else in the campaign. |
| 3 | 316 | `where the mist is located` | `where the **nest** is located` | 90% | The target is a **vampire nest** — named as such at L72 and L324 (*"the nest sits in the center of the ruined block"*). "Mist" is never otherwise mentioned. |
| 4 | 292 | `old vehicles Roasted into the earth` | `old vehicles **rusted** into the earth` | 88% | Boxed text describing a ruined post-ash street. Vowel slip. |
| 5 | 194, 198, 1004 | `Hookshot Armbracers` / `Armbracer` | `Hookshot Arm Bracers` / `Arm Bracer` | 90% | Glossary term (S03) and matches `HookShot Arm Bracers` on the synced DDB sheet. Orthography only. |
| 6 | 824 | `2 Lieutenant Hargraves` | `2 Lieutenant **Hargravens**` | 80% | `Hargraven` is a confirmed glossary name, spelled correctly in all 11 other instances this session. Plural dropped the final `-n`. |
| 7 | 890 | `a lightning bolt at a vampire thrall` | `a **Guiding Bolt** at a vampire thrall` | 80% | Mechanics rule it out: she makes an **attack roll** (*"Does a 26 hit?"*, L894) and deals **radiant** damage (L898). Lightning Bolt is a Dex save for lightning damage with no to-hit. Guiding Bolt is on Zelda's synced DDB sheet. |
| 8 | 1052 | `Oh, 11 accuracy` | `Oh, **Elven Accuracy**` | 92% | `Elven Accuracy` is on Valerian's synced DDB sheet; the mechanic he describes matches it word for word, and he is an Elf. (He miscalls it an Eldritch Invocation; **that misattribution is the player's and was left verbatim** — only the name was corrected.) |
| 10 | 250 | `a cloth cauldron with bubbling liquid` | `a **claw-foot** cauldron…` | 80% | He is reading **Tasha's Bubbling Cauldron** off his sheet: *"a claw-footed cauldron filled with bubbling liquid."* |
| 12 | 250 | `duplicate the property of a common potion of such as potion of healing` | `duplicate the **properties** of a common potion, such as a potion of healing` | 75% | Same spell text read aloud. ASR dropout of two articles and a plural. |
| 13 | 258 | `what level of runes are allowed?` | `what level of **potions** are allowed?` | 70% | The whole exchange is about buying healing potions (L238–L262). DM answers *"the one up from common"*; same speaker then says *"so I can get some greaters."* Runes never appear in the campaign. |
| 14 | 262 | `some graders` | `some **greaters**` | 85% | **Greater** Healing Potions — the tier the DM just authorised. |
| 16 | 902 | `the feral bee, the other bee` | `the feral **B**, the other **B**` | 85% | Token letter designation. Same speaker says *"Feral vampire thrall B. B as in boy"* eleven lines earlier. |
| 17 | 944 | `how's Beast Thrall being?` | `how's Beast Thrall **B doing**?` | 65% | She has been attacking Beast Thrall B all round; the DM answers with a status (*"Good, not great"*). |
| 18 | 1224 | `Starry Wisp. Add him. Boop.` | `Starry Wisp. **At him.** Boop.` | 85% | Homophone slip. `Starry Wisp` itself is correct (glossary + DDB sheet) and was not touched. |
| 20 | 1100 | `So 80.` | `So **8**.` | 70% | Running the vampire's radiant doubling: 4 radiant × 2 = 8. Same speaker does the identical arithmetic at L1082. |
| 21 | 1340 | `so I think we in there for tonight` | `so I think **we'll end** there for tonight` | 80% | Session-close line; dropped words. |
| 22 | 932 | `my finger gun at Beast Thrall B` | `my **Finger Gun**…` | 85% | Capitalisation only. `Finger Guns` is a glossary term (S01) and a named cantrip on four synced DDB sheets. Correctly capitalised at L1228. |

### ⚠️ One discrepancy inside the approved table itself

Row 1's line list names **10** instances, including one at **L522**. **L522 contains no instance**
(*"And then so, so it's just— he's a vampire, so vampires aren't considered beasts, correct?"*).
The true count is **9 instances across 6 lines** (L72 ×1, L496 ×2, L504 ×1, L510 ×1 plural, L520 ×3,
L814 ×1), and all 9 were corrected. The L522 entry in the proposal was a citation error, not a
missed correction. Recorded so the count in the table and the count in the file can be reconciled.

---

## Held — NOT applied (all ≤60%)

These 8 rows remain **open questions for Taylor and the DM.** The transcript reads as originally
transcribed at each of these lines.

| # | Raw line | Left as | Proposed was | Conf. | Why held |
|---|---|---|---|---|---|
| 9 | 790 | `Savage Attack` | `Savage Attacker` | 60% | `Savage Attacker` is on Vega's synced DDB sheet and the mechanic she uses is exactly that feat — but this may be the player's own shorthand, in which case Verbatim Quotes says leave it. **Needs an audio listen.** |
| 11 | 250 | `Eldrin can produce these potions` | `The cauldron can produce these potions` | 55% | Same Tasha's Bubbling Cauldron read-aloud, but `Eldrin` is phonetically distant from `The cauldron` — could be a garble of something else entirely. **Needs an audio listen.** |
| 15 | 392 | `Pact of Protection` | `Pact of the Chain` | 55% | Context favours Chain (Find Familiar without a slot; pseudo-dragon familiar at L408) but his sheet carries **both** `Pact of the Chain` **and** `Gift of the Protectors`, and "Protection" is closer to the latter. Genuinely contested. |
| 19 | 1186 | `23 damage, icing` | `23 damage, slashing` | 60% | The halving to 11 confirms a Rage-resisted physical type belongs in the slot, but `icing` is a short garble and the exact word is a guess. |
| 23 | 1244 | `Trailer Trash` | `Taylor Trash` | 50% | 🛑 First-seen token nickname. Same speaker says `Taylor Trash` nine lines later for what is clearly the same token, but one of the two hearings is wrong and which one is undeterminable. **Ask the table.** |
| 24 | 1122 | `Flawbeak` | `Floppy` | 45% | 🛑 First-seen token nickname. Barrett shot at `Floppy` at L688; `Flawbeak` appears once. Could equally be two different tokens. **Ask the table.** |
| 25 | 108 | `Would anybody like infused with Rage` | `…[an item] infused with radiance` | 45% | Garbled at both ends, and `Rage` is Vega's feature, not Samothy's. The infusion conversation that follows (L108–L186) ends in radiant damage, so the sense is clear but the words are not. **Needs an audio listen.** |
| 26 | 1298 | `Inverted Nibs` | `Inverted Nips` | 40% | 🛑 First-seen token nickname. The register fits the session's joke-token naming, but unconfirmable. **Ask the table.** |

---

## Checked and deliberately NOT changed

Carried forward from the approved table so the reasoning survives.

| Heard | Line(s) | Why it stands |
|---|---|---|
| `Uncertain Footing` | 604 | ✅ Verified — a real Level 2 spell on Samothy's synced DDB sheet. Reads like a garble; is not one. |
| `Taylor Swifter` → `Taylor Swiffer` | 1262–1266 | The error is the **speaker's**, corrected on the record two lines later (*"Actually, it's just Swiffer, like the mop."*). Verbatim Quotes — both left. |
| `greaves` | 764 | Almost certainly right, and it is **evidence for an open glossary question** (S16 `Grieveflame / Flame Greaves` vs S17 `Gauntlets of Burning Grasp`). Left verbatim; see `flags.md` §8. |
| `blazing dawnlit sword` | 1028 | `Pact of the Blade` is on his sheet; `dawnlit` is the player's own flavour text, not an error. |
| `Rage`, `Reckless`, `Catapult`, `Mage Armor`, `Blight`, `Cloudkill`, `Eldritch Blast`, `Starry Wisp`, `Pass Without Trace`, `Mr. Cat` | various | All verified against the glossary and/or synced DDB sheets. Correct as transcribed. |
| `Penis` (Christie's token) | 532, 538 | Already in the glossary as an S09 token rename. Correct as transcribed. |
| `Colombian Samoth` | 1058 | 🛑 Unresolved. Either a joke token name in the same register as the rest of the session, or a garble of *"Colombian Samothy."* **No correction was proposed and none was made.** |
| `Gus` | 1340 | Glossary-listed as an S11 unresolved name, still with no referent. Third appearance. Spelling unchanged. |
| `Corey` | 286 | Glossary-confirmed (S07). Correct. |
| `Blaze`, `Celeste`, `Daria`, `Ernie`, `Paolo`, `Patrick` | 408/432/478, 376–380, 230, 44, 68, 384 | First-seen or referent-less names. Flagged in `flags.md` §3, **not** corrected and **not** added to the glossary. |
| Every DM-voiced number, damage total and to-hit value | throughout | Out of scope for a spell-check pass. Several are internally inconsistent (`flags.md` §12); those are roll cross-reference items, not spelling ones. |

---

## OOC / above-table sections identified

Retained in the corrected transcript (the pipeline keeps the full record and the session note does
the filtering), but marked here so the note and the POV Journal exclude them.

| Raw line(s) | Content | Disposition |
|---|---|---|
| 20–24, 130–162, 178–192, 318–322, 326–346, 410, 478–492, 556–572, 740–744, 780–784, 1106–1120 | Tooling: token placement, D&D Beyond inventory bugs, map loading, page refreshes, movement measuring | Above-table. Excluded from the note except where a DM ruling is embedded. |
| 36–70 | The "make Josh weep" bit and the inspiration offer | **Half above-table, half in-scene** — the DM's inspiration offer and its withdrawal are rulings and belong in the note; the Oscar/Ernie/Paolo riffing does not. |
| 214–232 | Deanna's shotgun for the pyre, dissolving into a real-life pickleball anecdote | First half in-scene; from *"Look, we have a family friend"* on it is OOC life-chat. |
| 236–290 | Bio-break + potion shopping | Bio-break dropped from the note. The potion purchase and the DM's *"one up from common"* ruling are in-game. |
| 364–382 | `Celeste` and *"our other campaign"* | Entirely OOC. Not Ashfall canon. |
| 394–420 | The Taylor Lautner bit, *"the Taylords"* | Above-table. |
| 484–488 | *"all game on Sunday"*, Christie locking tokens | Above-table; a different game. |
| 634–640 | Brick-weight discussion → childhood-injury anecdote | The brick weight is an in-game ruling input; the anecdote is OOC. |
| 658, 1312 | `the vagina got huge`, `did you see Z finger bang` | Above-table. Content-warning flagged for the public artifact (`flags.md` §14). |
| 884–886 | *"Stop licking my hand, you freak!"* / *"No, Madi, you stop that"* | Real-world; a pet and/or a player. **Unplaceable** (`flags.md` §1). |
| 1300–1360 | Session close: babysitting, the doctor's appointment, goodbyes | Above-table. Only the DM's *"we'll end there"* and *"You cleared the outside"* are archive-relevant. |

---

## 🛑 Blocker carried into the corrected transcript

**Script-format conversion was NOT performed.** Project Instructions call for speaker names in ALL
CAPS with character names for in-character speech, but `flags.md` §1 records the S19 speaker map as
unconfirmed and **broken in two ways at once**: the DM is split across **SPEAKER B and SPEAKER C**
(they interleave inside single exchanges — C calls for a save at 610, B rolls it at 610, C reads the
total at 612), and **SPEAKER A merges Christie/Zelda with Madi/Lulu**, including back-to-back turns
at 876 and 942. Renaming the labels would inject hundreds of false attributions; the No Invention
and Accurate Attribution rules forbid it. The A–H labels are preserved verbatim and the working
inference is recorded in the corrected file's header, explicitly marked unconfirmed.

**This is the same defect as S18 and it is now the longest-standing blocker in the pipeline.**
Confirming the map is a one-question fix and it unblocks script format for both sessions.
