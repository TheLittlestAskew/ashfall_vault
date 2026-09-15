# Spell-Check Log — Session 18 (091426)

**Campaign:** Ashfall Britannia
**Session:** 18 · **Real-world date:** 09/14/2026
**Raw transcript:** `Session_Sources/Transcripts/Raw_Unedited/18-091426_raw_transcript.md`
**Corrected transcript:** `Session_Sources/Transcripts/Corrected/18_091426_corrected.md`
**Proposal table:** `_pipeline/S18/spellcheck.md` — **reviewed and approved by Taylor**
**Flag packet:** `_pipeline/S18/flags.md` (14 sections, unresolved items carried forward)
**Applied:** 2026-09-15, non-interactive Phase B run.

---

## Result

| Metric | Value |
|---|---|
| Approved rows applied | **18** (rows 1–18; row 19 was a bookkeeping note, not a correction) |
| Line-instances changed | **22** |
| Rows rejected / held | **0** — the approved table was applied in full |
| Verification | Post-apply grep: **0** original strings remain; all 22 replacements present |
| Encoding artifacts cleaned | **0** (none existed) |
| `[inaudible]` / `[cut off]` markers | **0** emitted by the transcriber; unmarked garbles logged, left verbatim |

**Method.** Each correction was anchored to its transcript line number and applied as an exact
substring replacement, one occurrence per anchor line. No regex wildcards and no global
find-and-replace were used, so no partial word could be corrupted. Nothing outside the approved
table was touched.

---

## Corrections applied

| # | Line(s) | Heard (as transcribed) | Corrected | Conf. | Reason |
|---|---|---|---|---|---|
| 1 | 388, 398, 402, 1128 | `66` | `6d6` | 85% | Vega's cursed sword. Same speaker reads the statblock correctly at L408 — *"1d8 plus 7… plus 6d6 fire damage"*. ASR flattens `6d6` → `66`. |
| 2 | 1270 | `the lucky feet` | `the Lucky feat` | 85% | Samothy scrolling his sheet for the **Lucky** feat, two lines after asking about lucky points. |
| 3 | 1386, 1390 | `for rating` / `D6 with 5 rating` | `for radiant` / `D6 with 5 radiant` | 80% | Flux's **Rite of the Dawning Radiance** adds 1d6 radiant to every weapon attack. Barrett says *"and then he's 5 radiant"* correctly at L1872. |
| 4 | 2100 | `Eldritch Blaze!` | `Eldritch Blast!` | 80% | Same speaker says it correctly at L2060 in the same joke. PHB cantrip. |
| 5 | 2166 | `Deanna's buddies in the bag` | `Deanna's body in the bag` | 80% | Scene is about Deanna's corpse in the bag of holding. `buddies` has no referent. |
| 6 | 1860 | `do I see vampire thrall eat` | `do I see vampire thrall E` | 75% | Enemy tokens are lettered A–F all session. `eat` ≈ the letter `E`. |
| 7 | 2068 | `Baha Blast` | `Baja Blast` | 75% | Real-world brand, riffing on `Eldritch Blast`. OOC. |
| 8 | 2466 | `the chiefs` | `the Chiefs` | 75% | NFL team name, capitalisation only. OOC. |
| 9 | 754 | `feral vampire thrall D&D` | `feral vampire thrall D and E` | 70% | Speaker asks about a pair — *"we can see **them** standing on top"*. |
| 10 | 226 | `The Beastmaster` | `The Beast Master` | 70% | Vault spelling is two words (glossary S02/S10). **Spacing only — the referent problem is NOT resolved.** See Carried Flags §2. |
| 11 | 1420 | `So vampire thrall, beast, bee.` | `So vampire beast thrall B.` | 65% | DM uses `Vampire Beast Thrall A and B` correctly at L512. |
| 12 | 902 | `Um, E, E, F, and the other guy` | `Um, D, E, F, and the other guy` | 60% | Zelda lists the identical group as *"D, E, and F"* at L976. A doubled `E` with no `D` occurs nowhere else. |
| 13 | 918 | `Oilborn.` | `Boilborn.` | 60% | Same enemy, rendered `Boilborn` 6×. Capped at 60% by the first-seen-proper-noun rule. |
| 14 | 1002 | `Wildborn.` | `Boilborn.` | 60% | Same enemy, third rendering. Same cap, same reasoning as row 13. |
| 15 | 1490 | `Symbiotic Spores` | `Symbiotic Entity` | 60% | Lulu describes the **Symbiotic Entity** mechanic verbatim (bonus action, expend a Wild Shape use). |
| 16 | 1000 | `Okay, so then just the world—` | `Okay, so then just the Boilborn—` | 50% | Lulu naming breath-weapon targets, trails off; Flux supplies the name on the next line. |
| 17 | 190 | `Miss your cat?` | `Mr. Cat?` | 45% | Direct reply to the DM's *"Oh, Mr. Cat. Where's Mr. Cat on the map?"* one line earlier. |
| 18 | 806 | `Bite the Bullet` | `Risk Bullet` | 40% | Aligns S18 with the **Risk Bullet** name the S17 glossary records for the same mechanic. **See the warning below.** |

---

## 🛑 Low-confidence rows applied — read before citing this transcript

Rows **16, 17 and 18** sit at 50%, 45% and 40%. Phase A filed them as *flags to surface a conflict*,
not as recommended fixes, and specifically advised holding them absent an audio listen. They were
applied here because the approved table was treated as final and authoritative. **They are the first
things to revisit if any of this session's wording is disputed.** The original readings, preserved:

| Row | Original reading, now overwritten | Why it might have been right |
|---|---|---|
| 16 | *"Okay, so then just the world—"* | Genuinely unrecoverable; the speaker trails off. |
| 17 | *"Miss your cat?"* | As transcribed it parses as a (weak) joke, so it may be real speech. |
| 18 | *"one of my maneuvers, **Bite the Bullet**."* | 🛑 **Phase A's own read is that S18 was probably CORRECT.** The two names do not sound alike, so this is not ASR drift — one hearing is simply wrong, or Doug renamed the maneuver. "Bite the Bullet" is the more natural gunslinger name. **Ask Doug or the DM; be ready to revert this row and amend the S17 glossary entry instead.** |

---

## OOC / above-table segments identified

Removed from nothing (the transcript is preserved whole) but **flagged for exclusion from Vega's POV
Journal and from any public-facing artifact**:

| Lines | Content |
|---|---|
| 10–154 | Pre-session household chat: dogs (`Hobo`, `Caramel`, `Asta`, `Eldon`), `Kenny`, a drug reference (L80), level/sheet admin |
| 288–304 | Political content (Mitch McConnell); the DM's *"today's bad guy is inspired by Mitch McConnell"* is a joke, **not lore** |
| 336 | DM: *"we're over halfway done with the campaign"* — campaign-pacing metagame |
| 794, 1326 | Explicit/crude OOC |
| 1288–1290 | AI-video tangent |
| 1490, 1524 | Break logistics (kids, dogs) |
| 1928–1938 | 🛑 DM identifies a player as **his wife**; `Chris Watts` real-world murder reference. **Attribution-relevant but must not reach any public artifact.** |
| 2384–2400, 2468–2484 | Extended AI-art / nipple discussion |
| 2394, 2454, 2466 | Emmys, fantasy football |

---

## Checked and deliberately NOT corrected

Left alone — correct as transcribed, or protected by the Verbatim Quotes rule.

| Term | Why it stands |
|---|---|
| `Vega`, `Barrett`, `Samothy`, `Flux`, `Zelda`, `Lulu`, `Val`, `Mr. Cat` | Match the glossary / roster exactly. `Val` is never rendered `Vale` in this transcript. |
| `Boilborn` (L512, 934, 1444, 1766, 1898) | Majority hearing (6×). First-seen; flagged for the glossary, not "corrected". |
| `Rite of the Dawning Radiance` | First-seen ability, internally consistent, effects read out in full. Files to `[[Homebrew Abilities]]` per the standing rule. |
| `Tattered Robes of the Pale Scholar`, `Soulbound Grimoire` | Identical renderings, DM read-aloud. First-seen; flagged, not changed. |
| `Lunara` / `the Nightbringer` | DM says it twice in one breath reading his own lore note. First-seen deity; flagged. |
| `Arona` | Two speakers, two renderings, identical. Possible link to S16's `Book of Varona` — **not assumed**. |
| `I cast Gunslinger` (L1378) | Third session with this garble shape from the same speaker. Left verbatim. |
| Real spells (`Catapult`, `Witch Bolt`, `Blight`, `Guiding Bolt`, `Invisibility`, `Dispel Magic`, `Dimension Door`, `Cure Wounds`, `Branding Smite`, `Vortex Warp`, `Draconic Spirit`, `Draconic Transformation`, `Reincarnate`, `Eldritch Blast`) | All spelled correctly. |
| Rules terms (`Sharpshooter`, `Great Weapon Master`, `Heroic Inspiration`, `Reckless Attack`, `Bardic Inspiration`, `Sneak Attack`, `Rage`) | Correct as spoken. |
| Homebrew/items (`Finger Guns`, `Spellfire Flare`, `Risk Die`, `Sun Shard`, `Boots of the Winding Path`, `Hookshot Arm Bracers`) | Spelled as previously recorded. |
| `Bobby` | Glossary-confirmed NPC (dwarf master armorer, S02). |
| `Asta`, `Eldon`, `Kenny` | Household/OOC names. Flagged for redaction, **not** corrected. |
| `Mitch McConnell`, `Jennifer Coolidge`, `Taylor Swift`, `Chris Watts`, `Legolas`, `Godzilla`, `Tupperware`, `Emmys`, `Peter Pan` | Real-world references, all correct. |
| `Sí señor` (L160), `Vis-à-vis` (L2486) | Intentional diacritics, not mojibake. |
| `vampire Vampiric Domination` (L432) | Speaker false start, not an ASR artifact. Verbatim Quotes rule protects it. |

---

## Encoding / formatting

**No artifacts found.** No mojibake, no non-breaking spaces, no garbled Unicode. The only non-ASCII
characters are the transcriber's em dashes plus `í`/`ñ` in *"Sí señor"* and `à` in *"Vis-à-vis"* —
all intentional. Structure is clean and consistent: `[HH:MM:SS] SPEAKER X:` across all 2,502 lines,
blank line between every entry.

---

## Script-format conversion — NOT performed, deliberately

Project Instructions Step 3 calls for converting speaker labels to character names. **This was not
done**, per the explicit Phase A instruction in `flags.md` §1: *"do not hard-code speaker names in
the script-format conversion until this is checked."*

- **SPEAKER C** merges Christie (Zelda) and Madi (Lulu).
- **SPEAKER F** is a 240-line catch-all spanning Doug (Barrett), Chase (Val) **and** DM adjudications.

Renaming would inject roughly a hundred false attributions — a No Invention violation. The A–H
labels are preserved, and the inferred map is recorded in the corrected transcript's header as
explicitly unconfirmed. **This is the one open blocker on the corrected transcript.**

---

## Carried flags — unresolved, moved forward to the session note

1. 🛑 **"The Beast Master" in the opening boxed text (L226)** vs ~30 uses of "the necromancer" from L452 on. `[[The Beast Master]]` died in S10. Row 10 fixed spacing only. **DM question.**
2. ⚑ **`Boilborn`** — new enemy type, three ASR renderings, capped at 60%. Needs the DM's spelling.
3. ⚑ **`Arona`** (L2120, 2170) vs S16's **`Book of Varona`** — one leading consonant apart. Not assumed.
4. ⚑ **`Lunara, the Nightbringer`** — first dark-side deity. Spelling unconfirmed; possible counterpart to Emberos. Do not infer a pantheon.
5. ⚠️ **Tower height** stated as **110 ft** (L470, 480) then used as **120 ft** (L670, 1966) uncorrected. Half the session's distance rulings hang on it.
6. 🛑 **Deanna's reincarnation window** — Lulu's 10-day limit vs *"at least a week"* / *"3 weeks"*. Never ruled on; deferred to S19.
7. ⚑ **The promised 12d12 custom spell** (L410–418) was never handed over on the record. Recipient unknown.
8. ⚑ **Party level jumped 12 → 13** off-session; S17's level-11-vs-12 flag still open.
9. ⚑ **Enemy-label terminology** is inconsistent across at least four labels. Whether S18's tokens are one type or three is not determinable.
10. ⚑ **`shade`** (L148) and **`the goat`** (L458) have no referent.
11. ⚑ **Unmarked garbles** left verbatim at L226 (*"Roll tokens"*), 322, 1246, 1270, 1284, 1382, 1688, 2048, 2116, 2214, 2346.
