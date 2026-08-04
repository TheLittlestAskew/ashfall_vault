# Spell Check Log — Session 12 (062926)

**Session:** 12 · **Session date:** 06/29/2026 (ISO 2026-06-29)
**Raw transcript:** `Session_Sources/Transcripts/Raw_Unedited/12-062926_raw_transcript.md` (1,836 lines · 12,476 words · 123 min · AssemblyAI `universal-3-5-pro` · 95.7% stated confidence · 8 speakers)
**Corrected transcript:** `Session_Sources/Transcripts/Corrected/12_062926_corrected.md`
**Proposal source:** `_pipeline/S12/spellcheck.md` — **reviewed and approved by Taylor 2026-08-03**
**Outcome:** **16 rows proposed · 11 applied · 5 held** (13 edit operations; rows 8 and 11 each cover two transcript lines).

---

## 1. Confidence policy in force

Terms already in `04-World-Lore/Names & Terms.md` or in the 2024 PHB → 70–100%. Plausible context-based fixes on common words → 45–85%. **Any proposed change to a *setting* proper noun not already in the glossary is capped at ≤60%** — Ashfall is an original setting with no external canon, so first-seen in-world names are flagged, never silently normalized. Real-world proper nouns are judged on ordinary evidence (S10 `Lumalee` / S11 `Michelangelo` precedent).

**Per Taylor's 2026-08-03 rulings:** DM arithmetic is recorded as stated and is not proposed for correction. Homebrew item and ability names are logged as canon-in-play, not queried.

**Session shape note:** this is a **no-combat** session — a lore reveal followed by a three-shop downtime run. Almost every flagged term is a *new canon* term rather than an error, which is why the correction table is small relative to S10/S11 but the flag list is not.

---

## 2. Applied corrections (11 rows · 13 edit operations)

Raw-transcript line numbers. All replacements were exact-string swaps, verified present in the output with the originals confirmed absent.

| # | Line(s) | Heard (as transcribed) | Corrected | Conf. | Reason |
|---|---|---|---|---|---|
| 1 | 1390 | `Sorry, she does have hate.` | `Sorry, she does have haste.` | 95% | Vega asked "You got any potions of haste?" two lines earlier; the DM is answering that question. "hate" has no referent. |
| 2 | 1142 | `Grant's probably safe to hit.` | `Grant's Probably Safe Toolkit.` | 90% | The DM repeating Zelda's purchase back while noting it down. The item is named in full at 1126 and 1264 ("when it's the bold letters for probably safe"). |
| 3 | 1322 | `the Probably Save toolkit for 200` | `the Probably Safe toolkit for 200` | 90% | Same item, one letter off. Named correctly 4× elsewhere. |
| 4 | 362 | `spare the dying on him?` | `Spare the Dying on him?` | 85% | 2024 PHB cantrip; capitalization only. |
| 5 | 498 | `Ceres Raised the shard` | `Ceres raised the shard` | 85% | Spurious mid-sentence capital on a common verb. ⚠️ The **name** `Ceres` was deliberately left alone — see §3 row 12. |
| 6 | 1362 | `uh, Firebolt or Fireball` | `uh, Fire Bolt or Fireball` | 80% | 2024 PHB spells it **Fire Bolt** (two words); Fireball is one word and already correct. Charlotte is naming both while identifying a potion. |
| 7 | 1308 | `Did you get my, um, probably safe fox?` | `…probably safe box?` | 75% | The DM has just described "bold letters on the side of the **box**" (1264) and "the no refunds is in small letters underneath" (1270). Vega is asking about the same boxed toolkit. |
| 8 | 894, 896 | `$25.` / `$25, and special is $75?` | `25 gold.` / `25 gold, and special is 75?` | 80% | ASR rendered spoken numerals as US dollar amounts. The currency in play is gold pieces — the same exchange says "75 gold for 12" at 890 and "I'll hand over 75 gold" at 900. |
| 9 | 1224 | `Here's $1 to save us $20 and therefore cost you $20. $19 total.` | `Here's 1 gold to save us 20 and therefore cost you 20. 19 total.` | 70% | Same ASR dollar artifact, inside Valerian's haggling bit. ⚠️ The **numbers themselves** are recorded as stated — not reconciled. |
| 10 | 446 | `Theros and Emberborn` | `Theros Emberborn` | 60% | ASR inserted "and" into a two-part name. The DM says `Theros Emberborn` correctly at 464 and `Theros` alone at 460 and 498. ⚠️ Capped — first-seen setting proper noun. |
| 11 | 446, 498 | `Queen Elandria Brightsteel` / `Alendria struck the final blow` | `Queen Alandra Brightsteel` / `Alandra struck…` | 60% | 🎯 **The DM spells it aloud on the record:** *"Alandra, which is A-L-A-N-D-R-A Brightsteel"* (464). Capped at 60% by the first-seen rule despite the spell-out. **Recommend canonizing `Alandra Brightsteel`.** ⚠️ See §4 — a **fourth** variant survives at 498 because the approved table did not cover it. |

---

## 3. Held — NOT applied (5 rows)

Each was held because the approved table itself instructs against application, or carries no proposal to apply.

| # | Line(s) | Item | Why it was held |
|---|---|---|---|
| 12 | 446, 460, 498 | `Cirrus Dawnwalker` / `Sirus Dawnwalker` / `Ceres Dawnwalker` | The approved table's Proposed cell reads **"*(pick one — no proposal)*"** and the Reason states *"Not proposed as a correction — this needs the DM's written lore, not a guess."* **Three different hearings of the same character in one session**, all from the DM reading prepared text, with no spell-out given. All three preserved exactly as heard. 🛑 **The single largest open naming question from this session.** |
| 13 | 1790 | `Blessings of Erona` → `Blessings of Aurona` *(possible)* | Approved table: **"Flag, do not apply."** 45%. The goddess is named **Aurona** at 446; "Erona" appears once, in a tome title. Could genuinely be a different name — or 446 could be the error. Preserved. |
| 14 | 1480 | `you know Bobby, he's all about the stress` → `you know **Marvin**…` | Approved table: **"Flagged, not recommended."** 40%. Charlotte is mid-sentence about **Marvin's** hemorrhoid potion; Bobby is a different shopkeeper two stops back. ⚠️ **This is a DM misspeak, not an ASR error** — Verbatim Quotes Only preserves it. |
| 15 | 874 | `All right, uh, Argo Mas.` | Approved table marks it **"*(unrecoverable)*"** with no proposal. Barrett answers "Huh?" — nobody understood it live either. No referent anywhere in the session. **Candidate for an `[inaudible]` marker**, but none was inserted, since inserting one is itself an unapproved edit. |
| 16 | 138 | `I'm hitting the Pentagon right now` → `…the pen right now` | 40%. The row's own reason states that Zelda's *"You're hitting the Pentagon?"* (140) and the FBI-list bit that follows **only work if "Pentagon" was actually said**, and reads it as *"a deliberate joke the table ran with."* Applying it would break two downstream lines. Also flagged in the table as OOC bio-break content. Preserved. |
| 17 | 1740 | `Sun Shard 2` → `Sun Shard, chapter 2` | ⚠️ **Held as ambiguous-as-approved.** The line reads *"I sent Chapter 2 of the Sun Shard 2 somewhere."* Applying the table's **literal Proposed string** yields *"I sent Chapter 2 of the Sun Shard, chapter 2 somewhere"* — a duplicated clause. The row's **stated reason** ("duplicated numeral from the DM hunting for a file") implies a *different* edit: deleting the stray trailing `2`. Two incompatible readings, 55% confidence, zero canon impact (OOC file-hunting). Not resolvable in a non-interactive run, so nothing was changed. **Needs one word from Taylor.** |

> Rows 12 and 15 carry no Proposed value at all, so "held" means "left exactly as heard." Rows 13, 14 and 16 carry a proposal that the approved table explicitly argues against applying.

---

## 4. Corrections NOT in the approved table (left alone, flagged here)

These were found while applying the table. **None were changed** — "make no change that isn't in the approved table" was followed literally.

- ⚑ **A FOURTH spelling of the queen survives at line 498: `Elandra`.** The approved table's row 11 covers exactly two strings — `Queen Elandria Brightsteel` (446) and `Alendria struck the final blow` (498). Line 498 contains a **third mention in the same paragraph**, *"Uh, **Elandra** used the blade to slay the first vampire general,"* which the table does not cover. It was therefore left as-is. The corrected transcript now reads `Alandra` twice and `Elandra` once **within four sentences**. Total variants across the session: **Elandria, Alandra, Elandra, Alendria** — four spellings of one character, with an on-record spell-out (`A-L-A-N-D-R-A`) settling it. **Add this line to the next approval pass.**
- ⚑ **Line 1226 retains a dollar-sign artifact the table did not cover:** *"$25 each. I was hoping he would give them to us for $50 each."* Rows 8 and 9 fixed the same ASR artifact at 894, 896 and 1224, but 1226 was not listed. Left as-is for consistency with the rule, not because it is correct.
- ⚑ **Line 464 contains `Alandra` correctly *and* the read-aloud stumble** *"the 3 figures stand together now, relics blazing in their And their light merging"* — preserved per Verbatim Quotes Only.

---

## 5. OOC / above-table content identified (NOT removed)

Convo 1 normally strips bio-break and life-chat content. **It was not stripped here**, matching the S10 and S11 corrected transcripts: removal requires the speaker map to be confirmed, and the map is inferred (§6). Removing content under an unconfirmed map risks deleting in-character lines. The full verbatim record is preserved and the OOC blocks are indexed instead:

| Lines | Content | Disposition |
|---|---|---|
| 10–358 | **~15 minutes of pre-game chat.** Dice testing, D&D Beyond gripes, the Pentagon/FBI-list bit, disabled-veteran jokes, Pride Month, European weather and food, a Wicked/Elphaba story, the Haley Center / Auburn tangent | Bio-break / life-chat — **removable** once the map is confirmed |
| 204–254 | The DM's pet (`Hobokage` / `Shadow Hobo` / `Hobo` / `Bo`) and a child greeting the table | Household interruption |
| 1008–1018 | The DM's child asking for tea; "Corey's evil" | Household interruption |
| 1030–1116 | **The Georgia cannabis-law tangent** and the kidney-stone thread, incl. the AI-accused-me-of-being-a-pothead bit | Life-chat — the longest mid-session OOC block |
| 1034–1044 | **"husband Taylor"** — the third-Taylor disambiguation | ⚠️ **Do not delete.** Load-bearing for the speaker map |
| 1618–1628 | *P. Sherman, 42 Wallaby Way, Sydney* and the Filipino-pronunciation explanation | Table culture |
| 1696–1710 | The DM explains why he won't roleplay the Deanna/Charlotte scene ("I grew up in a cult") | ⚠️ **Personal.** Not for public-facing display; relevant only as the reason for the fade-to-black |
| 1720–1738 | The GIF spiral; "Please note, I think Doug is dying" | Table culture |
| 1434 | Valerian's *"Above table, not to her"* — the player explicitly labelling his own line | ✓ The one self-tagged OOC line in the session |

**Gameplay-interwoven OOC** (rules questions, DDB navigation, damage math, the elemental-colour negotiation) is retained inline and is **not** tagged `[OOC]`, because tagging requires the same speaker-map confirmation.

---

## 6. Speaker map — INFERRED, UNCONFIRMED (blocks script-format conversion)

Script format was **not** applied. The diarizer has produced a **third distinct letter assignment in three sessions**, and this one moves the DM off both `A` (S10) and `E`-as-Flux (S11).

| Letter | Person | Evidence |
|---|---|---|
| **A** | [[Deanna Smith-Wesson]] (Madi) | "Deanna's gonna slide a gold coin across the table" (1218); "husband Taylor, can you go get our son's mattress?" (1044) |
| **B** | [[Flux]] (Jill) | Picks up the skin book, Perception 29 (406); bag of holding; Masterwork Thief's Tools; "Flux wants to be learning… the Old Magic book" (1778) |
| **C** | [[Vega Bloodroot]] (Taylor — player) | "Vega, Bobby's my guy" (540); addressed as "Tails" (978); the Georgia cannabis / kidney-stone thread |
| **D** | [[Valerian Hellebore]] (Chase) | "Val's just gonna produce flame in his hand" (968); spider Wild Shape; "plants and fungi are kind of my thing" (1448) |
| **E** | **Taylor (DM)** | All narration, all three shopkeepers, Hargraven; "Oh, sorry, me, me, Taylor" (1040) |
| **F** | [[Barrett Grimmskar]] (Doug) | "Barrett will, uh, step up" (880); the red revolver; silvered bullets |
| **G** | [[Zelda Z Whipper\|Zelda "Z" Whipper]] (Christie) | DM: "And then Zelda Z Whipper" → G: "Yes, sir" (582–584); Lockjammer putty for "Z" (1118) |
| **H** | [[Samothy Smith-Wesson]] (Josh) | Artificer infusions; Spare the Dying (362); utility belt + ring settings; addressed as "Dahmer the Nommer" (590) |

**🛑 Standing blocker, third session running.** Script format hard-codes names; this assignment is stated nowhere in the source.

⚑ **Known diarization defect this session:** at **440** the Con save for opening the skin book is reported by **SPEAKER C (Vega)** — *"7."* — but **SPEAKER B (Flux)** is the one who opened the book two lines earlier. Either the roll is misattributed by the diarizer or Vega read Flux's result aloud. **The session's single most consequential roll has ambiguous ownership.** Preserved as heard.

⚑ **NPC-vs-DM attribution.** Long stretches are the DM speaking *in voice* with no speech tags. Before anything reaches the Quote Board, attribute to the NPC, not to `TAYLOR (DM)`: **Hargraven 476–498 · Bobby 546–694 · Grant 1228–1332 · Charlotte 1350–1556.** The read-aloud lore text (**360–464**) is **narration**, not an NPC.

---

## 7. Encoding artifacts

**None.** The only non-ASCII characters are the transcriber's em dashes (`—`) marking disfluencies, which are correct and load-bearing. No garbled Unicode, no non-breaking spaces, no tabs.

**No `[inaudible]` / `[cut off]` markers were emitted by the transcriber**, and none were inserted (inserting one is an unapproved edit). Candidates, all preserved verbatim: `Argo Mas` (874) · the narration break *"Uh, the war—"* (360) · the duplicated clause *"the books And soon to be the books and scrolls"* (376) · *"relics blazing in their And their light merging"* (464) · the two-speaker merge *"do we want You look on his back"* (750) · `Sun Shard 2` (1740).

---

## 8. Deliberately not proposed (carried from the approved table)

First-seen or glossary-attested setting proper nouns, internally consistent as heard — they need **confirmation**, not correction: `Dawnkeep Castle`, `Bobby Ironbrand`, `Marvin the Mapmaker`, `Charlotte`, `Grant`, `Hollow Reach`, `Aurona`, `Blade of Sunfire`, `Greaves of Burning Grasp`, `Sun Shard`, and **`Grief`** (the name of Vega's brass knuckles — a proper name; **do not "correct" it toward a common noun**).

Shop inventory, all first-seen and internally consistent, recorded as canon-in-play per the homebrew ruling: `Widow's Kiss`, `Sunrot Oil`, `Moonveil Mist`, `Lockjammer putty`, `WhisperWire earpiece`, `Echo Pebbles`, `Smoke Snap Capsule`, `Purity filters`, `Sunsteel Dagger`, `Sunburst Bolt`, `Masterwork Thief's Tools`, `anti-vampire tripwire kit`, `Dangerous and Questionable Inventions`.

Also left alone: `Dahmer the Nommer` (the DM's nickname for Samothy, 590) · `Madame Handjob` (a prior-session shopkeeper nickname, 1338) · `Daddy Darkness` (table nickname, referent unconfirmed, 392) · `Annie` (788 — **a third variant** of the glossary's `Anne ⚑` (S05) / `Abigail` (S02); *a third spelling is evidence, not an error*) · household and player names (`Gus`, `Corey`, `Caleb`, `Madi`, `Doug`, `Chase`, `Josh`, `Jill`, `Christie`) · Deanna's own self-correction `I have 510 gold.` → `501 gold, 90 silver.` (**preserve both**) · all DM arithmetic (`3,131.25`, the ruby at `10` then `5,000`, `85 total`) · correct 2024 PHB names as heard · real-world references (`P. Sherman`, `Marjorie Taylor Greene`, `Haley Center`, `Auburn`, `Avantris`, `Wicked`, `Elphaba`, `Bruce Banner`, `Bobby Flay`, `Lara Croft`, `ODM gear`, `Attack on Titan`, `Batman`, `Crystal Light`, `Inception`) · the DM's read-aloud self-corrections.

---

## 9. Verification

- ✅ All **13 edit operations** confirmed present in the corrected transcript.
- ✅ All **11 original strings** confirmed absent from the corrected transcript.
- ✅ All **5 held rows** confirmed still present, untouched: `Cirrus Dawnwalker` / `Sirus Dawnwalker` / `Ceres Dawnwalker`, `Blessings of Erona`, `you know Bobby, he's all about the stress`, `Argo Mas`, `hitting the Pentagon`, `Sun Shard 2`.
- ✅ Line count **1,872** (1,836 raw + 36 lines of expanded header). No body content lost.
- ✅ Word-boundary safety: every replacement used a multi-word exact-string anchor (e.g. `SPEAKER E: $25.` rather than `$25`), so no partial word was corrupted and no unintended line was touched. Occurrence counts were checked before each swap.

**Applied by:** Convo 1 Phase B, automated non-interactive run, 2026-08-03.
