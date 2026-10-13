# Spell-Check Log — Session 20 (101226)

**Campaign:** Ashfall Britannia
**Session:** 20 · **Real-world date:** 10/12/2026
**Raw transcript:** `Session_Sources/Transcripts/Raw_Unedited/20-101226_raw_transcript.md`
**Corrected transcript:** `Session_Sources/Transcripts/Corrected/20_101226_corrected.md`
**Proposal table:** `_pipeline/S20/spellcheck.md` — **reviewed and approved by Taylor**
**Flag packet:** `_pipeline/S20/flags.md` (16 sections, unresolved items carried forward)
**Applied:** 2026-10-12, non-interactive Phase B run.

---

## Result

| Metric | Value |
|---|---|
| Rows in the approved table | **34** |
| Rows applied | **22** (rows 1–3, 5–8, 10–14, 16–18, 22, 24, 26, 31–34) |
| Rows held, not applied | **12** (rows 4, 9, 15, 19, 20, 21, 23, 25, 27, 28, 29, 30 — all at or under 60%) |
| Replacements made | **25**, on **25** transcript lines |
| Verification | Post-apply search: **0** of the original strings remain; `diff` against the raw file shows **exactly 25** dialogue lines changed |
| Encoding artifacts cleaned | **0** (none existed) |
| `[inaudible]` / `[cut off]` markers | **0** emitted by the transcriber; none inserted (not in the approved table). ~10 visible cut-offs logged in `flags.md` §7 |
| Speaker labels converted to character names | **No** — blocked on the unconfirmed speaker map (`flags.md` §1) |
| Personal/OOC redaction | **Not performed** — outside the approved table. See "Privacy" below |

**Method.** Each correction was anchored to its own transcript line (timestamp + surrounding words) and applied as an exact-substring replacement on that line only. No regex wildcards and no global find-and-replace, so no partial word could be corrupted. Nothing outside the approved table was touched. The raw file's 8-line header was replaced with a corrected-transcript header (provenance, held rows, speaker-map caveat); corrected line = raw line + 33.

**Why 12 rows were held.** The approved table states its own banding rule: *"Any proper noun NOT already in the glossary is capped at 60%: original setting, no external canon,"* and `_pipeline/S20/summary.md` directs: *"Rows 4, 9, 15, 19, 20, 21, 23, 25, 27, 28, 29, 30 are ≤60%; default them to held."* The table itself marks rows 23, 28, 29, 30 *"Hold until the DM gives a spelling"* and supplies only a placeholder (`[patron name, DM spelling TBD]`), which cannot be written into a transcript. Applying any held row would be a silent fix on an unconfirmed reading.

---

## Corrections applied

Line numbers are **raw-transcript** line numbers.

| # | Raw line(s) | Heard (as transcribed) | Corrected | Conf. | Reason (from the approved table) |
|---|---|---|---|---|---|
| 1 | 372 | `what's a boil boar?` | `what's a Boilborn?` | 80% | DM answers with the Boilborn's description; glossary term. |
| 2 | 476 | `Foilborn` | `Boilborn` | 90% | Same creature; glossary term. |
| 3 | 500, 512 | `symbiotic entity` | `Symbiotic Entity` | 85% | Capitalisation only (Circle of Spores feature). |
| 5 | 404 | `my longbow` | `my longsword` | 70% | Vega is in melee; DM confirms she holds "the sword"; no longbow on record. |
| 6 | 614 | `a death save` | `a Dex save` | 70% | Vega at full HP; a death save is impossible. ⚠️ The ability (Dex vs Str) is the table's best guess. |
| 7 | 700 | `the pacts property` | `the Vex property` | 80% | 2024 rapier Weapon Mastery = Vex. |
| 8 | 738 | `finger gun him` | `Finger Gun him` | 85% | Capitalisation (glossary cantrip `Finger Guns`). |
| 10 | 752 | `Uh, tails.` | `Uh, Tayls.` | 95% | Standing glossary instruction. |
| 11 | 790 | `Dug.` | `Doug.` | 90% | Turn call for Barrett's player. |
| 12 | 864 | `Mr. Castor` | `Mr. Cat` | 85% | Samothy closing out his + Mr. Cat's turn. |
| 13 | 866 | `Beast throw.` | `Beast thrall.` | 85% | Glossary: Beast Thrall. |
| 14 | 870 | `another sturdy 20` | `another dirty 20` | 85% | Pairs with "A dirty 20" two lines earlier. |
| 16 | 1112 | `because Karma's` | `because Charisma's` | 92% | Only a stat can be a dump stat. |
| 17 | 1516 | `wiped us with my memory` | `wiped out my memory` | 65% | ASR dropout. |
| 18 | 1550 | `—art.` | `—heart.` | 70% | Objective reminder; the heart is "upstairs". (L1546 `destroy a vampire—` unchanged.) |
| 22 | 1672, 1746 | `guest round` | `guest room` | 90% | DM: "If you're in the guest room". |
| 24 | 1738 | `the Michael book` | `the medical book` | 70% | Guest room held "medical textbooks". ⚠️ Table offered "book(s)"; only `Michael`→`medical` was changed, the singular `book` is left as spoken. |
| 26 | 1838 | `Contact Other Planes` | `Contact Other Plane` | 85% | Spell name on Valerian's synced sheet. |
| 31 | 2044 | `alexanderite` | `alexandrite` | 90% | Gem name; spelled correctly by the next speaker. |
| 32 | 2098, 2126 | `a beastmaster` / `the Beastmaster` | `a Beast Master` / `the Beast Master` | 90% | Glossary orthography (two words). |
| 33 | 2184 | `who As this` | `who has this` | 80% | Dropped `h` while reading 2024 Power of the Wilds aloud. |
| 34 | 2226 | `David— David Strait.` | `Steven Strait.` | 75% | OOC actor name. Applied exactly as the approved row reads (the false start `David—` is replaced along with it). OOC line, not used in session notes. |

---

## Rows held (NOT applied) — open questions

| # | Raw line(s) | Heard | Proposed | Conf. | Why held / who resolves |
|---|---|---|---|---|---|
| 4 | 462 | `Spectral Barrage` | `Bacterial Barrage` | 55% | 🛑 First-seen spell name (homebrew/renamed?), no synced sheet for Lulu. ▶ Madi/DM. |
| 9 | 748 | `Lieutenant Bakery` | `Lieutenant Hargraven` *(or a token nickname)* | 40% | Phonetically distant; token was renamed (`Hot Daddy`). ▶ Audio listen. |
| 15 | 968, 970, 972 | `Van Pussy` | `Vamp Pussy` | 50% | Joke token name, not canon. Profanity Ledger only. ▶ Taylor. |
| 19 | 1556 | `the diamond stairs` | `the damn stairs` | 45% | Pure guess at the word. ▶ Audio listen. |
| 20 | 1596 | `feeding water down` | `beading water down` | 55% | Word uncertain ("beading" or "bleeding"). ▶ Audio listen. |
| 21 | 1658 | `this belt is like connected` | `this spell is like connected` | 55% | Plausible, not certain. ▶ Audio listen. |
| 23 | 1686 | `Orona` | `[patron name, DM spelling TBD]` | 40% | 🛑 Patron name unsettled. ▶ **DM: canonical spelling** (`Auriona` / `Arona` / `Aurona`). |
| 25 | 1744 | `from Herbivore` | `from everybody` | 55% | Could be a token or PC nickname. ▶ Audio listen. |
| 27 | 1838 | `Good contact, Arona.` | `Gonna contact Arona.` | 60% | Sits inside a first-seen-name line. ▶ Audio listen. |
| 28 | 1878, 1882 | `Lady Ronia` | `Lady [patron name]` | 40% | Same patron. ▶ DM spelling. |
| 29 | 1946 | `Aurona's Blessing` | `[patron name]'s Blessing` | 40% | Ability name follows the patron spelling; no official spell by that name. ▶ DM spelling. |
| 30 | 1968 | `Morona's chosen` | `[patron name]'s chosen` | 40% | Same patron. ▶ DM spelling. |

**Strongest spelling evidence for rows 23/28–30 (left verbatim, never smoothed):** DM, raw L1846: *"Her name is Aurorna— Aurorna— Auriona. Sorry, my bad. Auriona is her name."*

---

## Checked and deliberately left alone

Carried from the approved table: glossary-correct terms (`Boilborn`, `Starry Wisp`, `Finger Guns`, `Hargraven`, `Mr. Cat`, `Maverick Spirit`, `Risk Die`); sheet-confirmed spell names (`Guiding Bolt`, `Scorching Rays` plural as spoken, `Blinding Radiance`); real rules names (`Halo of Spores`, `Fungal Body`, `Chill Touch`, `Inflict Wounds`, `Blight`, `Contagion`, `Daylight`, `Heroism`, `Hunter's Sense`, `Detect Magic`, `Bardic Inspiration`, `Sneak Attack`, `Prestidigitation`, `Searing Vengeance`, `Power of the Wilds`); DM self-corrections (L1698, L1846); player wordplay and token renames (`slishing and slashing`, `boil bitch`, `booty chest`, `Lieutenant Hot Daddy`, `Perceptioning`); spoken values (`39 contagion damage`, `69 hit points`); unrecoverable garbles (`Homie`, `Cloud`, `Christie` as an enemy, `Blue's`, `Longboard`, `Amin`).

---

## OOC / above-table sections identified (not removed)

Per `flags.md` §15. The corrected transcript retains them verbatim; the session notes exclude them.

| Raw lines | Content |
|---|---|
| 10–36 | Audio checks, snack chat |
| 114–304 | Audio fixes, roll call, accents, Michael Jackson film, kids, Taylor-name tangent (**L250: a player's full real name**) |
| 432–458 | Six Flags news |
| 618 | DM's dog (household) |
| 656–684 | Chase muted ~3 min; kidney-stone anecdote; Discord TikTok autoplay |
| 2044–2078 | Birthstones, class ring |
| 2192–2240 | Good-nights; new Firefly-themed campaign "after New Year's"; The Expanse / The Covenant chat |

## ⚠️ Privacy

The corrected transcript is **not redacted** and this repo is **public**. It contains a player's full real name (raw L250) and household detail (kids, a pet, a named household member, a medical anecdote, *"I'm high"*). The S15–S17 transcripts were redacted in a separate, Taylor-approved pass with the unredacted original kept in a gitignored `_pipeline/` file. ▶ **Recommend the same pass for S20 before this file is published.**
