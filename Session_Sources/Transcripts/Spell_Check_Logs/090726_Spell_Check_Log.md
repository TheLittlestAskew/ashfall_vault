# Spell Check Log — Session 17 (090726)

**Session:** S17 · 09/07/2026
**Raw transcript:** `Session_Sources/Transcripts/Raw_Unedited/17-090726_raw_transcript.md`
**Corrected transcript:** `Session_Sources/Transcripts/Corrected/17_090726_corrected.md`
**Proposal set:** `_pipeline/S17/spellcheck.md` (26 rows, gitignored)
**Phase A ran:** 2026-09-09 · **Reviewed:** 2026-09-12 · **Applied:** 2026-09-14

> Line numbers below refer to the **raw** transcript. The corrected file carries a
> longer header, so its body is offset; always cite raw line numbers.

## 1. Confidence policy in force

Ashfall is an original setting with no external canon, so any proposed **proper-noun**
change that is not already a confirmed entry in `04-World-Lore/Names & Terms.md` was
capped at **≤60%** by Phase A and flagged rather than silently corrected.

⚠️ **The cap was miscalibrated for rows 16 and 17 and this should be fixed in
`Convo_1_Instructions.md` before S18.** The cap exists to stop *canonizing* a
first-seen proper noun. But **row 17 removes a spurious one** (`Emily` has no referent
anywhere; the refrain in that scene is *"Samothy, please"* ×3) and **row 16 is
capitalisation only** on the party's dungeon objective. Neither invents canon, so
neither should have been capped. Both were applied on review.

⚑ Row 13 (`imposter` → `impostor`) was also capped at 65% as if it were a proper noun.
It is an ordinary orthographic normalisation; the transcript already renders the word
correctly at 192, 1370, 2050 and 2864.

## 2. Applied corrections — 16 rows · 25 line-instances

### 2a. Batch A — glossary-confirmed or ordinary English (4 rows · 11 line-instances)

| Row | Line(s) | Original | Applied | Basis |
|---|---|---|---|---|
| 1 | 524 (×2) | `Samothi` | `Samothy` | Glossary-confirmed PC name; straight ASR vowel swap |
| 2 | 186, 194, 1070, 1746 (×3) | `Vale` / `Vales` / `Vale's` | `Val` / `Vals` / `Val's` | Glossary-confirmed short form of `Valerian Hellebore`; the transcriber adds a silent `-e` inconsistently |
| 3 | 1890 (×2) | `Eldritch Claw tattoo` | `Eldritch Claw Tattoo` | Glossary item, S02, marked FINAL. Capitalisation only |
| 6 | 548 | `Traips` | `Traipse` | Ordinary word, ASR spelling artifact. `Greaves` in the same line is **correct** and was left alone |

### 2b. Batch B — verified against the raw transcript, confidence raised (12 rows · 14 line-instances)

| Row | Line | Original | Applied | Was | Now | Evidence found on review |
|---|---|---|---|---|---|---|
| 4 | 938 | `Sandy can go first` | `Sammy can go first` | 85% | 90% | `Sammy` used 4× elsewhere (830, 834, 862, 874); `Sandy` has no referent in the campaign |
| 5 | 730 | `For dicks.` | `For Dex.` | 85% | **92%** | The DM asks for *"a strength check and then a dex save"* at **728**; she reports both numbers |
| 7 | 2592 | `Prince, repeat` | `rinse, repeat` | 80% | **90%** | She is repeating an identical attack sequence on the same target |
| 8 | 1354 | `Eric looks, looks at` | `Barrett looks, looks at` | 75% | **85%** | Barrett's player narrates his own PC in the third person throughout; the line then switches to first person, and the gunpowder is the Gunslinger's |
| 9 | 1928 | `And then Winnie, 1 on the second.` | `And then twenty-one on the second.` | 75% | 85% | Zelda confirms the number straight back at **1930**: *"Oh no, you said 21? Yes, 21."* |
| 10 | 466 | `It needs a strong word.` | `"Need" is a strong word.` | 70% | 80% | Direct reply to the DM's *"you may need fake Val"* at **464** |
| 11 | 2386 | `Meister of the Dying` | `Spare the Dying` | 70% | 85% | The table is comparing two printings of **Spare the Dying** across **2358–2402**; `Meister` is not a spell, feature or name in this campaign |
| 12 | 2560 | `Begone, thought.` | `Begone, thot.` | 65% | 75% | Established meme phrasing, said on killing the thrall |
| 13 | 240, 816, 2024 | `imposter` / `imposters` | `impostor` / `impostors` | 65% | **85%** | Orthographic normalisation; see §1 |
| 16 | 1622 | `gauntlets of burning grasp` | `Gauntlets of Burning Grasp` | 55% | 80% | Read-aloud boxed text; it is the party's objective for the whole dungeon. Capitalisation only — see §1 |
| 17 | 416 | `Emily, please.` | `Sammy, please.` | 55% | **80%** | Same sentence names Samothy (*"She's not breaking eye contact with Samothy"*); the impostor's pleading refrain is *"Samothy, please"* at 264, 386, 412 |
| 21 | 622 | `Tails` | **`Tayls`** | 50% | **confirmed** | Spelling ruled 09/14/2026 from Taylor's own signature — external and authoritative, not an audio inference. Glossary entry promoted from provisional to confirmed. See §4c |

## 3. 🛑 Row 15 was REVERSED, not applied — and it is still a DM question

The table proposed `Theros` → `Tharos` at 1622. **The evidence points the other way**,
because of what the DM was doing each time he said it:

| Line | Says | What he was doing |
|---|---|---|
| 1348 | `Tharos` | ad-lib, mid rules explanation |
| 1618 | `Tharos` | ad-lib — *"this is the tomb of Tharos Emberborn. **I don't know where it is**"*, hunting for his note |
| 1622 | `Theros` | *"**Sorry, I was looking at the wrong note**"* → then reads prepared boxed text: *"**Theros** Emberborn lies inside, perfectly preserved…"* |

⚠️ **Inference, not fact, and one prepared block is thin evidence.** But his *written
note* appears to say `Theros`, which matches what was applied in **S12** and makes
S16's `Tharos` the verbal slip.

🛑 **Nothing was retro-edited.** `Theros Emberborn` stands in the corrected S17
transcript, S12 and S16 are untouched, and the glossary entry remains UNRESOLVED.
▶ **Ask the DM the narrowed way** — *"your notes say Theros, right?"* — rather than as
an open coin-flip. This now blocks **S12, S16 and S17**.

## 4. Held and rejected — 9 further rows NOT applied

### 4a. ✗ Rejected — the Verbatim Quotes rule protects these (4 rows)

| Row | Line | Proposed | Why it stands |
|---|---|---|---|
| 14 | 2278 | `death save` → `Dex save` | He **self-corrects in the same line** (*"so it's a dex 17"*). Editing it erases a real moment |
| 22 | 2576 | `one-show pony` → `one-trick pony` | Zelda is a **Bard** — a show pun is in character |
| 23 | 1728 | `major, major restoration` → `Greater Restoration` | A **DM** mechanics statement; "No DM Override" applies. (*"need a really good cleric"* does support *Greater*, for the record) |
| 26 | 862 | `Demonically what Sammy would do` | Reads fine as casual speech. ▶ **Recommend dropping this row from the table entirely** |

### 4b. ⏸ Held for an audio listen (5 rows)

| Row | Line(s) | Proposed | Note |
|---|---|---|---|
| 24 | 800 | `Strangecage` → `Bone Cage` | Semantically right (Lulu names Bone Cage at 790), phonetically poor. **Needs ears** |
| 25 | 1014, 1016 | `Paching` → `Ka-ching` | The next speaker echoes it identically, which is self-consistency, *not* evidence |
| 18 | 1234 | `Whisperwire earpieces` → `whispering earpieces` | Vault records the **"Whispering earpiece"** (S15), but `Whisperwire` may be the real in-fiction product name said aloud at last |
| 19 | 872 | `bust` → `bus` | 50% → 60% |
| 20 | 2894 | `Jifusit` → `GIF you sent` | 50% → 65%; she was hunting a GIF on Discord at 2646 |

### 4c. ✅ Row 21 — CLOSED AND APPLIED 09/14/2026

`Tails` → **`Tayls`** at **622**. Chase: *"Tails, what weapons does Vega have on her
right now?"* — he is addressing **Taylor**. Third hearing, first from a new speaker.

**Spelling ruled from Taylor's own signature**, which renders it **`Tayls`**. That is
external, authoritative and not an inference from the audio, so the row went from the
provisional cap straight to applied.

✅ **The glossary entry is now CONFIRMED**, not provisional. `04-World-Lore/Names & Terms.md`
previously read `"Tails" ⚑ — Madi's name for player Taylor — heard twice; "Tay"? confirm
spelling`; it now reads **`"Tayls"` ✅ CONFIRMED S17** with the instruction to correct the
ASR's `Tails` on sight. ⚠️ **Earlier transcripts were deliberately NOT retro-edited** —
S08's rendering stands as the historical record.

## 5. 🛑 Privacy — redactions APPLIED (Taylor's ruling, 09/14/2026)

Taylor chose the **redaction pass** over gitignoring `Raw_Unedited/`. Applied to the
raw transcript in `76d504e` and inherited by the corrected file:

**97 markers — 96 `[personal conversation - redacted]` + 1 `[slur - redacted]`**, against
S16's 26. S17 genuinely held more.

| Region | Raw lines | What it was |
|---|---|---|
| 00:01:21–00:05:42 | 34–76 | Pre-session personal biography, plus an ethnic-joke exchange naming a non-participant |
| 00:06:25–00:09:06 | 80–104 | Names a spouse; autism self-disclosure |
| 00:16:52–00:20:06 | 286–352 | Heights and dating history — identified an ex-sister-in-law and nephews as little people, named exes, named a third party's daughter and her wedding |
| 00:52:57–00:53:28 | 954–968 | Food orders naming a non-participant present in the room |
| 00:53:48–00:55:00 | 972–1006 | **Prescriptions and cannabis**, naming that same non-participant as a source |
| 01:06:50 | 1164 | *"You kill your wife a second time"* — reads literally as identifying a player as the DM's spouse. `flags.md` §10 says do not infer |
| 02:17:20 | 2256 | **r-slur**, third session running. Redacted **inline** so the mechanical result survives: *"So he just misses both his attacks [slur - redacted]."* |

✅ **Unredacted original preserved at `_pipeline/S17/17-090726_raw_transcript_UNREDACTED.md`**
(gitignored, md5-verified against the source *before* any edit). **Every redaction reverses.**

⚠️ **No campaign content was redacted.** Blocks begin and end where table talk resumes
being about the game. *"Call it the Undercroft"* (78, a title candidate) and the
*"It is 8:02 PM"* session-dating evidence (10) both survive.

✗ **`flags.md` §11 also flagged line 472 as graphic. Deliberately left alone** — it is
vulgar campaign table talk, not personal data about a real person, and it belongs to the
Profanity Ledger. Redacting it would mean editing the campaign record.

🛑 **The Tier-0 policy is STILL unruled.** Per-session redaction works but is a judgement
call every time, and **18 older transcripts remain public and unaudited**. The standing
recommendation — gitignore `Session_Sources/Transcripts/Raw_Unedited/` the way
`Recordings/` already is — was **not** taken.

## 6. Verification performed

- ✅ **Line-preserving redaction.** The raw file still has all **2,923** lines and every
  `[HH:MM:SS] SPEAKER X:` prefix intact. This is a **hard constraint**, not a nicety:
  `spellcheck.md` cites **bare raw line numbers**, so deleting or merging a single line
  silently invalidates every citation in the review packet. All 13 cited lines were
  re-resolved after the write and still land correctly.
- ✅ **Exact-match edits.** Every one of the 24 line-instances was applied as an
  exact-string replace with an expected occurrence count, so a drifted source fails
  loudly rather than mis-editing. 20 distinct lines changed, matching the hand count.
- ✅ **Row 15 invariant asserted.** `Theros Emberborn` verified still present on 1622
  after the pass; `Tharos` count unchanged at 4.
- ✅ **Redaction survived Phase B** — `[slur - redacted]` asserted still present on 2256.
- ✅ **Encoding clean.** 168 em dashes (U+2014) preserved, **0** U+FFFD replacement
  characters. ⚠️ The `?`-looking glyphs seen in terminal output were a **cp1252 console
  artifact, not file content** — `spellcheck.md` §"Encoding / formatting artifacts" was
  correct that the file is clean UTF-8.
- ✅ **LF line endings.** ⚠️ Python's `Path.write_text` silently converts to CRLF on
  Windows, which makes every line read as changed and buries the real edits. Write vault
  files with `newline=""`. S16 and the source are both LF-only.

## 6b. ⚠️ One drug reference was left IN and needs your call

**Raw line 2622 (02:40:24), [[Vega Bloodroot]]'s player, mid-combat:** *"Oh, that's right, he died. I'm sorry, you guys, I'm, I'm high."*

🛑 **Not redacted, because it was outside the approved scope** — `flags.md` §10 scoped the drug material to raw lines 972–1006, and this line is 1,600 lines later in the middle of play. ⚠️ **But it is inconsistent:** the 00:53:48–00:55:00 block was redacted *specifically* because it discussed cannabis and prescriptions, and this line is the same category of disclosure on the same public repo. It is **Taylor's own** self-disclosure, which is why it was flagged rather than removed unilaterally.

▶ **Taylor's call.** Say the word and it redacts in one pass; the unredacted original preserves it either way.

## 7. ✅ Speaker map RESOLVED for S17 (corrected 09/14/2026)

**An earlier pass in this same session recorded A/F/G/H as unresolved.** That was
based on aggregate name-frequency counts only. **Reading the transcript resolves all
four**, and the corrected note and transcript header both carry the resolved map.

⚠️ **Do not carry S16's map over** — it does not match. S16 had `E = Taylor / Vega`;
in S17 **`E` is unambiguously the DM**.

| Letter | Identity | Basis |
|---|---|---|
| **A** | Christie / [[Zelda "Z" Whipper]] | De facto party leader; the DM calls her *"boss lady"* (00:49:27). Mind-linked to the impostor all session |
| **B** | Chase / **the doppelganger** wearing Val's face | Addresses Taylor by name at 622; shapechanges into Deanna at 416. His real PC, Valerian Hellebore, is still captive. **Dies at 02:51** |
| **C** | Taylor / [[Vega Bloodroot]] | *"who am I? Vega is still raging"* (266); answers the str check + dex save asked of Vega (728 → 730) |
| **D** | [[Barrett Grimmskar]]'s player | Narrates Barrett in the third person throughout, incl. 1354 (row 8) |
| **E** | **the DM** | 373 turns, the most in the file; sets every scene, calls every save |
| **F** | Madi / [[Eiluned "Lulu" Denulie]] | *"Lulu's just gonna…"* (524), *"I'm a druid"* (1170), wild shapes into a fly |
| **G** | Josh / [[Samothy Smith-Wesson]] (+ Mr. Cat) | CON save +6 at 489; severs the impostor's spine; Boots of the Winding Path |
| **H** | [[Flux]]'s player | The DM narrates *"So Flux, you get by the chains"* (1137) onto H's roll; Barrett addresses H as *"Flux"* at 1233 |
