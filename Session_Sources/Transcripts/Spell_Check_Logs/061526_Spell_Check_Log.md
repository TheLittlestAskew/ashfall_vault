# Spell-Check Log — Session 10 (061526) — "Never Truly Alone"

> **Human-reviewed mode.** The proposal table (`_pipeline/S10/spellcheck.md`) was reviewed and approved by Taylor. This log records what was actually applied.
> Raw: `Raw_Unedited/10-061526_raw_transcript.md` (1,144 lines · 73 min · `universal-3-5-pro` · 95.2% · 8 speakers)
> Corrected: `Corrected/10_061526_corrected.md`
> Rule spec (auditable, 26 rules incl. edge-case guards): `_pipeline/S10/apply_corrections.js` ⚑ *written as the deterministic spec but never executed — shell/node execution was blocked in this run; corrections were applied by hand to the exact same rule set and verified by grep. Safe to delete once reviewed.*

---

## Applied — 26 of 29 approved rows

| # | From → To | Line(s) | Conf. | Why |
|---|---|---|---|---|
| 1 | `Beastmasters` → `Beast Masters` | 156, 274, 282 | 85% | Glossary S02 canonical form is two words |
| 2 | `Beastmaster` → `Beast Master` | 266, 274, 282, 464, 942, 946, 948, 976 (×2), 990 | 85% | Same normalization (incl. possessives `Beast Master's`) |
| 3 | `Starry Whisper` → `Starry Wisp` | 336 | 95% | Glossary S08 `Starry Wisp \| Spell`; real 2024 PHB cantrip |
| 4 | `Mr. K` → `Mr. Cat` | 756 | 90% | Glossary S03 `Mr. Cat, Esquire`; same speaker, same turn |
| 5 | `Zee` → `Z` | 178 | 80% | Glossary roster `Zelda "Z" Whipper` |
| 6 | `toin` → `turn` | 580 | 90% | ASR artifact |
| 7 | `Luma Leaf` → `Lumalee` | 1070 | 85% | Same speaker said `Lumalee` four lines earlier |
| 8 | `I will really cast` → `I will ritual cast` | 1050 | 75% | Tiny Hut is a ritual; party settling for a long rest |
| 9 | L66 re-segmentation (punctuation only) | 66 | 70% | `yeah. Chase, is my background to your satisfaction?` — Chase answers next line |
| 10 | L70 `on Are` → `on— are` (punctuation/caps only) | 70 | 70% | Spurious mid-question capital; DM answers the question |
| 11 | `Shafid` → `Shathide` | 194 | 60% | Dominant in-session form (7×) |
| 12 | `Shifteed` → `Shathide` | 668 | 60% | Second Shatter target, named 4 lines later |
| 13 | `Shatid` → `Shathide` | 674 | 60% | Same target mid-Shatter resolution |
| 14 | `Shathid` → `Shathide` | 732, 772 | 60% | Variant of dominant form |
| 15 | `Shadid` → `Shathide` | 752 | 60% | Same target (disadvantage rider) |
| 16 | `Absity` → `Absidy` | 502 | 60% | Dominant form (4×); the creature that flees |
| 17 | `Absinthe` → `Absidy` | 948 | 60% | Same creature, same sentence topic |
| 18 | `Karl Senior` → `Carl Senior` | 668, 772 | 60% | S09 glossary attests `Carl`; dominant form 7× |
| 19 | `Carl Sr.` → `Carl Senior` | 810 | 60% | Abbreviation of dominant form |
| 20 | `Carl Senior. Crossing's` → `Carl Senior's` | 210 | 55% | ASR split of the possessive; "Crossing" appears nowhere else |
| 21 | `Cut` → `Cuck` | 318 | 60% | `Cuck` + `Taint` are the pair ganging up on Barrett (250–260) |
| 22 | `the cup` → `Cuck` | 182 | 50% | Deanna's second declared target; Cuck confirmed adjacent |
| 23 | `paint` → `Taint` | 514 | 55% | Target status question; `Taint` is the enemy she shoots |
| 24 | `the feed at all?` → `the fight at all?` | 178 | 50% | "feed" has no referent; DM answers about sightlines |
| 25 | `Carl,` → `Cool,` | 670 | 50% | Reply to "Shatter's one of my favorite spells"; `Carl` has no referent |
| 26 | `I will attack Rexy again` → `I will attack recklessly again` | 846 | 55% | Mid-Reckless-Attack sequence (declared line 576); `Rexy` appears nowhere else |

**Verification:** all 26 applied via word-boundary matching; grep confirms zero surviving pre-correction tokens and zero partial-word corruption (`Beast Masterss`, `Shathidee`, `Carl Seniorr`, `Cuckk` — none present). Line count unchanged (1,144 body lines).

---

## NOT applied — 3 rows

Each of these three rows carries its own inline instruction inside the approved table. Honoring those annotations *is* treating the table as authoritative, so they were left verbatim in the transcript.

| Row | Conf. | The table's own instruction |
|---|---|---|
| `Karlsteiner` → `Carl Senior` (L72, 74) | 45% | "⚠ **Low** … **Do not apply without DM confirmation.**" |
| `Tinkt— er` → `Taint— er` (L786) | 40% | "⚠ **Low** — `Tink` is separately attested … **Do not apply without confirmation.**" |
| `Bobby's a master curator` → `master armorer` (L986) | 35% | "⚠ **Low** … **Flagged, not recommended.**" |

⚑ **If Taylor intended all 29 to be applied**, these three are a one-line fix each — say so and they go in.

---

## Speaker map — ⚑ UNCONFIRMED, script format DEFERRED

The corrected transcript **retains the diarizer's `SPEAKER A`–`H` labels** rather than converting to the ALL-CAPS script format prescribed in `Project_Instructions.md`. Reason: `_pipeline/S10/flags.md` §2 states the mapping is *inferred from play and must be confirmed before script format hard-codes speaker names*, and this run was non-interactive. Converting now would bake unverified attribution into the archive — a No Invention / Accurate Attribution violation.

| Label | Inferred person (character) | Basis |
|---|---|---|
| A | Taylor (DM) | Narration, initiative calls, enemy rolls throughout |
| B | Doug (Barrett) | Gunslinger maneuvers, Risk Dice, revolvers, "Barrett's gonna shoot Taint" |
| C | Josh (Samothy) | Mr. Cat / Steel Defender control, Branding Smite, infusions |
| D | Chase (Valerian) | Wild Shape spider, Call Lightning; DM: "Chase killed the Beast Master" |
| E | Madi (Deanna) | Two-attack pistol turns, Vex, "crit in stock" |
| F | Taylor (Vega) | "Me as in Taylor, or me as in Vega?" (270); Rage, tattoo rider, greataxe |
| G | Jill (Flux) | Bow + Finger Guns, bag of holding, the whispering scene |
| H | Christie (Zelda) | Shatter, Fear, Starry Wisp, Tiny Hut; "Christie, wake up!" (220) |

⚑ **Contradiction to resolve before conversion:** line 1064 assigns *"I wish my name was Madeline instead of **Madison**"* to **SPEAKER F**, but F is established as Taylor/Vega at line 270. Either the diarizer merged Madi's line into F's turn, or the mapping is wrong. Do not convert until answered.

---

## Diarization merges carried forward (not fixed — attribution only)

Listed in `flags.md` §2 and left in place because fixing them means re-attributing speech: lines **56, 100, 122, 178–182, 226, 284, 512, 524, 812–814, 832, 1010**. Each has content attributed to the wrong person (most often a DM line folded into a player's block, or vice versa).

---

## Garbled / unclear segments — preserved verbatim, zero `[inaudible]` markers emitted

| Line | Text | Note |
|---|---|---|
| 88 | "Well, **means to breathe**, so one's taking full and one's taking half." | Unparseable. Call Lightning save result. Not guessed. |
| 358 | "Hello, Naruto. **Oh, Marie, just over here, man.**" | "Marie" has no referent |
| 406 | "**2d10 5, so 25**. Plus, uh, 15, so that's 40 damage" | Arithmetic doesn't reconcile as transcribed |
| 782 | "**No babies!**" | No referent; possibly "Nice, baby!" |
| 904 | "I cannot get **I knew what I knew** out of my head" | Mangled song/title reference |
| 1030–1036 | teleport infusion description | Needs real wording before it enters `05-Mechanics` |
| 1132–1134 | end-of-session weapon logistics | Merged/garbled |
| 182 | "you've got to **clear his abilities**" | Possibly "clear his allies" |

---

## OOC / above-table content identified (retained in transcript, excluded from the POV Journal)

Zelda's phone battery + quick charger (212–230) · dice-cosmetic swapping and D&D Beyond UI praise (94–100, 400–402, 450, 1094–1114) · Odin on Corey's work clothes (562–608) · fireworks outside on June 15 + the Friday holiday (740–750) · Chase's stubbed toe (890) · the *Madeline* cartoon and Mario Lumalee tangent (1056–1080) · end-of-session fatigue and work in the morning (1082–1092) · D&D Beyond DM-journal feature (1094–1098) · automatic-weapons rules request (1118–1128).

No bio-break or personal-life chat was removed — none of the OOC content in this file is life-chat, and all of it sits interwoven with gameplay.

**Encoding artifacts:** none found.
