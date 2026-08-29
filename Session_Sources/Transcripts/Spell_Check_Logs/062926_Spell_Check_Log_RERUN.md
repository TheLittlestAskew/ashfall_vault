# Spell-Check Log — 062926 (RERUN / second ASR pass)

**Source transcript:** `Session_Sources/Transcripts/Raw_Unedited/13-062926_raw_transcript.md`
**Corrected output:** `Session_Sources/Transcripts/Corrected/13_062926_corrected.md`
**Audio:** `062926 Ashfall Recording.mp3` · 123 min · AssemblyAI `universal-3-5-pro` · 95.8% stated confidence
**Transcribed:** 2026-08-29 · **Corrections applied:** 2026-08-28 (Convo 1 Phase B, automated/non-interactive)
**Approval:** Taylor, on `_pipeline/S13/spellcheck.md`

---

## ⚠️ Why this file is named `_RERUN`

The requested path was `062926_Spell_Check_Log.md`. **That filename already exists** and holds
**Session 12's Taylor-approved spell-check log** (approved 2026-08-03). Writing there would have
destroyed an approved artifact for an already-propagated session.

This log was filed as `062926_Spell_Check_Log_RERUN.md` instead. **Both logs are valid and
complementary** — same audio, two independent ASR passes, two correction tables. This mirrors the
precedent set for the 062226 re-run (`062226_Spell_Check_Log_RERUN.md`).

## 🛑 Session identity

This transcript is **not Session 13.** It is a second AssemblyAI run of the audio already
archived as **Session 12 — Only the Relics Can End Their Rule**. Independently verified in this
run: identical `# Source:` header, identical 123-minute duration, identical first line of play
(`Test, test.`) and last line (`Bye.`), and a 0.2% word-count delta (15,243 → 15,213) consistent
with run-to-run ASR variance rather than different content.

**These corrections are therefore a second opinion on the Session 12 transcript.** See
`_pipeline/S13/summary.md` and `_pipeline/S13/flags.md` **F1**.

---

## 1. Corrections applied

**15 approved rows → 16 edit operations across 14 lines.** Rows 6, 12 and 13 span more than one
line or share a line with another row.

Method: **line-scoped exact-substring replacement.** Each edit was confined to its approved line
number, verified to occur exactly once on that line before replacement, and re-verified after.
Partial-word corruption is impossible by construction — this is stricter than a global
word-boundary regex.

| # | Line | Applied — from | Applied — to | Conf. |
|---|---|---|---|---|
| 4 | 44 | `Also, Maddie, we can hear you` | `Also, Madi, we can hear you` | 85% |
| 3 | 362 | `spare the dying on him?` | `Spare the Dying on him?` | 85% |
| 11 | 444 | `worn by Theros and Emberborn` | `worn by Theros Emberborn` | 60% |
| 12 | 444 | `wielded by Queen Elandria Brightsteel` | `wielded by Queen Alandra Brightsteel` | 60% |
| 10 | 458 | `Sirus Dawnwalker, carry the shard…` | `Sirus Dawnwalker carried the shard…` | 65% |
| 14 | 488 | `Uh, Elandra used the blade…` | `Uh, Alandra used the blade…` | 60% |
| 13 | 488 | `while Alendria struck down— struck the final blow` | `while Alandra struck down— struck the final blow` | 60% |
| 6 | 884 | `$25.` | `25 gold.` | 80% |
| 6 | 886 | `$25, and special is $75?` | `25 gold, and special is 75?` | 80% |
| 2 | 1134 | `Grant's probably safe to hit.` | `Grant's Probably Safe Toolkit.` | 90% |
| 9 | 1216 | `Here's $1 to save us $20 and therefore cost you $20. $19 total.` | `Here's 1 gold to save us 20 and therefore cost you 20. 19 total.` | 70% |
| 8 | 1218 | `$25 each. I was hoping he would give them to us for $50 each.` | `25 gold each. I was hoping he would give them to us for 50 each.` | 75% |
| 7 | 1300 | `probably safe fox?` | `probably safe box?` | 75% |
| 5 | 1350 | `uh, Firebolt or Fireball` | `uh, Fire Bolt or Fireball` | 80% |
| 1 | 1378 | `Sorry, she does have hate.` | `Sorry, she does have haste.` | 95% |
| 15 | 1774 | `Blessings of Arona` | `Blessings of Aurona` | 60% |

**Rows deliberately not applied: none.** Every row in the approved table carried an actual
proposed replacement and every one was applied. (Ambiguities that would have violated No
Invention were kept out of the table by design and live in `flags.md`.)

### Integrity verification

| Check | Result |
|---|---|
| Line count | 1,820 → **1,820** — unchanged ✓ |
| Word count | 15,213 → **15,216** (+3) ✓ |
| Expected word delta | +3 — matches exactly ✓ |
| Residual old strings | **0** — no `Maddie`, `Elandria`, `Alendria`, `Elandra`, `Theros and Emberborn`, `does have hate`, `safe fox`, `Firebolt`, `Blessings of Arona`, `probably safe to hit` ✓ |
| Corrected forms present | 18 occurrences ✓ |

Word delta arithmetic: `Fire Bolt` +1 · `25 gold.` +1 · `25 gold, …` +1 · `Here's 1 gold …` +1 ·
`25 gold each …` +1 · `Theros Emberborn` −1 · `Probably Safe Toolkit.` −1 · all others ±0 = **+3.**

---

## 2. Two rows the re-run self-corrected

Approved for S12, already correct as transcribed here — no edit needed:

| S12 approved row | S12 run | This run |
|---|---|---|
| `the Probably Save toolkit for 200` | `Probably Save` | ✅ `Probably Safe` (1314) |
| `Ceres Raised the shard` | `Ceres Raised` | ✅ `Ceres raised` (488) |

## 3. Two rows that close known gaps in the corrected S12 transcript

Both were flagged by **S12's own spell-check log §4** as uncovered, and both survived into
`12_062926_corrected.md`:

- **L488 `Elandra` → `Alandra`** — the **fourth** spelling of the queen. The approved S12 table
  covered only two of three variants, leaving the corrected S12 transcript reading `Alandra`
  twice and `Elandra` once within four sentences.
- **L1218 `$25 each … $50 each`** — a dollar-sign ASR artifact the approved S12 table never listed.

⚠️ **These two defects still sit in `12_062926_corrected.md`.** They are fixed here, in the rerun
transcript only. Amending the S12 corrected transcript is **Taylor's call and was not actioned** —
it is an already-propagated artifact and editing it was outside this run's scope.

---

## 4. Resolved-flags summary

- **25 flags** carried from Phase A (`_pipeline/S13/flags.md`). **F1 (duplicate transcript) is
  unresolved and blocking** — see the handoff.
- **F5 (queen's name)** — resolved as far as the table allows; all four variants now read
  `Alandra` in this transcript, on the strength of the DM spelling it aloud `A-L-A-N-D-R-A` (458).
- **F6 (tome title)** — `Arona` → `Aurona` applied at 60%; still capped, `Aurona` itself is
  unconfirmed by the DM.
- **F4 (`Dawnwalker`: `Cirrus` / `Sirus` / `Ceres`)** — **NOT resolved and not touched.** Both ASR
  runs produce the same three variants in the same three places, so the variance is in the DM's
  reading, not the transcription. Needs the DM's written lore.
- **F9 (`Argo Mas`, 864)**, **F15 (`Pentagon`)**, **F16 (`Sun Shard 2`, 1726)**, **F17 (eight
  run-to-run word disagreements)** — all left verbatim, no proposals, unchanged.
- **F14 (DM's `Bobby`/`Marvin` name-slip, 1466)** and the read-aloud disfluencies — preserved
  under Verbatim Quotes Only.

### ⚑ New finding from this pass (not in the approved table, NOT applied)

**L1316 — `Oh, I need to add $100 to this.`** A dollar-sign ASR artifact of the same class as
approved rows 6, 8 and 9, occurring in in-game shopping context at 01:27:13. **The approved table
does not cover it**, so under No Silent Fixes it was left as transcribed. Flagged for the next
approval cycle. (The only other surviving `$` is L340 `$2.99 for a bottle of water` — genuine
real-world OOC chat, correctly untouched.)

---

## 5. OOC / above-table content

**Identified, indexed, NOT removed.** Convo 1 normally strips bio-break and life-chat; removal
requires a confirmed speaker map, and the map is still inferred (`flags.md` **F12** — two
independent diarizations now agree on all eight letters, which is corroboration, not
confirmation). Deleting under an inferred map risks destroying in-character lines.

Full index in `flags.md` **F22**. Principal blocks: 10–358 (~15 min pre-game) · 204–254 and
1000–1010 (household) · 1022–1108 (Georgia cannabis-law tangent, the longest mid-session OOC
block) · 1604–1612 · 1706–1724.

⚠️ **1026–1036 ("husband Taylor") must NOT be deleted** — load-bearing for the speaker map and the
standing Taylor-disambiguation problem (`flags.md` **F13**).

⚠️ **1682–1696 is personal** (the DM's stated reason for fading to black). **Must not reach any
public-facing panel** — the site parser publishes from this vault. `flags.md` **F22**.

---

## 6. Encoding

**No artifacts.** The only non-ASCII characters are the transcriber's em dashes (`—`) marking
disfluencies, which are correct and load-bearing. No garbled Unicode, no non-breaking spaces, no
tabs. No `[inaudible]` / `[cut off]` markers were emitted by the transcriber, and none were
inserted — inserting one is itself an unapproved edit (`flags.md` **F23**).

## 7. Script-format conversion

**Not performed — blocked.** The corrected transcript retains `SPEAKER A–H` labels rather than
the `VEGA:` / `TAYLOR (DM):` script format. The letter→character map is inferred from context and
**stated nowhere in the source**; two independent diarizations agreeing (F12) is corroboration,
not confirmation. Converting would bake an unconfirmed mapping into a canonical artifact. Same
disposition as S10, S11 and S12.

## 8. Standing setup items

- ⚠️ `⟦FILL: player languages / accents⟧` — **still unfilled**, fifth session running, in both
  `Convo_1_Instructions.md` (L62) and `Project_Instructions.md` (L127). Every judgment above is
  context-based. `flags.md` **F24**.
- ⚠️ `⟦FILL: Vega voice guide⟧` — **still does not exist.** Will block Section 2 of the next real
  session's notes. `flags.md` **F25**.

---

*Generated 2026-08-28 · Convo 1 Phase B (automated, non-interactive) · no `.docx` produced.*
