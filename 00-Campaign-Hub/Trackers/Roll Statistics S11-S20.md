# Roll Statistics — Sessions 11–20

> Rotation file. Sessions 01–10 live in [[Roll Statistics S01-S10]].
> **Source of truth is the Supabase `ashfall_session_rolls` view (campaign_id 3)** — transcript reconstructions are a fallback and are labelled as such.

## S11 — A Delightful Chase (rolls keyed 2026-06-22) 🛑 ARCHIVE NOT QUERIED

> 🛑 **THIS SECTION IS TRANSCRIPT-ONLY AND UNVERIFIED — and it is the *third consecutive* session with this debt (S10, S11, and S11's Convo 1 all failed).**
> The `ashfall_session_rolls` view was **never queried**: Supabase MCP permission was denied in Convo 1 on all four connected servers (`supabase`, `supabase-account2`, `supabase-cutter`, `supabase-aftermath-meridian`) and **denied again in this Convo 2 run** on the newly-connected `supabase` server. `.claude/settings.local.json` allowlists `mcp__plugin_supabase_supabase__execute_sql`, which matches **no currently connected server name** — that mismatch is the root cause and is worth fixing before S12. No local credentials exist to route around it (`.env` holds only `DDB_COBALT`), and the permission gate was **deliberately not bypassed**.
> **Consequences:** no roll total or die value below is archive-verified · **no archive-only rolls are represented at all** (quick mechanical rolls never spoken aloud simply do not appear) · no null-character rolls resolved by `user_id` · and **the sync-gap check is OUTSTANDING, not passed.**
> **Counts below are "roll events heard on the recording," not archived rolls.** They are **not comparable** to the S01–S09 figures, which are archive-derived.
> **Re-run interactively and reconcile S10 *and* S11 together:**
> `SELECT * FROM ashfall_session_rolls WHERE session_date IN ('2026-06-15','2026-06-22');`
> `SELECT MAX(timestamp_iso) FROM ashfall_session_rolls;`

**Total reconstructed from transcript: ~150 roll events** (PCs + DM-controlled enemies) across a single continuous encounter running 00:10:05 → 02:05:50 — roughly **87% of a 137-minute session**.

| Character | Roll events ⚑ | Nat 20s | Nat 1s | Highlights |
|---|---|---|---|---|
| [[Samothy Smith-Wesson]] | ~24 | 0 | 0 | The session's **set piece**: sling → **teleport behind Thrall B** → grapple → drop off a **24-foot** wall on top of it. Athletics 10 / Acrobatics 12 / Strength 10, Dex save **9 → lucky-point reroll 18**. Held the grapple for **three rounds**. Later **fired a bracer hook through a thrall to pin it** (2d6+3 = 13) and took two point-blank shots with **no to-hit required**. Invented the **vital-organ d20** this session (9, then 10 — no vital hit) |
| [[Vega Bloodroot]] | ~20 | **2** — *both in the same turn* | 0 | ⭐ **62 damage in one turn on Thrall D**: a "dirty" 20 → 2 damage → **Savage Attacker** → 16, then **nat 20 → 28**, then a **Great Weapon Master bonus attack, also nat 20 → 18. Thrall D dies.** The flow-state / ballet kill. Later **stows the greataxe mid-combat** and finishes bare-knuckle. **Intimidation 8** — the bear-roar fails. **3 of the 6 kills** |
| [[Barrett Grimmskar]] | ~18 | 0 | 0 | ⚑ **Crit range now 18, not 19** — "the dice roll is an 18, which for me is a— consider it a crit now," with **Piercer** adding a die (2d8 → 3d8) for **27**, plus the **Gut Shot** rider in full. **Kills Thrall E** with Shocking Grasp (20 → 9) into Finger Guns (15 → 8) |
| [[Flux]] | ~18 | **1** (Perception) | 0 | **Nat 20 Perception for 30** in the cold open — pins down **four sets of fresh tracks**, the session's only successful scout roll. Consistent chip damage all night (Witch Bolt, bow, Finger Guns, one **Sneak Attack for 15**) and **no kills**. Reaction **Shield** (AC → 22) against the only nat 20 aimed at her — **took 0 damage all session** |
| [[Zelda Z Whipper\|Zelda "Z" Whipper]] | ~14 | ⚑ *possibly 1 — see below* | 0 | **Inflict Wounds at 3rd for 34 necrotic**, **Flame Blade for 23**, Starry Wisp, Finger Guns, Infestation, and **"Pins and Needles"** ⚑ (first-seen, no PHB or glossary match). Put roughly **90 damage** into Thrall A across the fight — and **lost the kill to Vega on the last punch.** Self-healed twice with Healing Word |
| [[Valerian Hellebore]] | ~12 | 0 | 0 | ⚡ **158 radiant across three Moonbeam ticks** — 31→**62**, 34→**68**, 14→**28** — the single largest damage contribution of the session and the fight's decisive mechanic. **Kills Thrall C.** Held concentration through two hits on **War Caster** advantage; reaction **Spiny Shield** reduced a hit to 8 and **reflected 6 piercing** |
| [[Deanna Smith-Wesson]] | ~11 | 0 | 0 | The party's ward-and-heal spine: **2 × Protection from Evil and Good** (Vega, Valerian), **2 × Cure Wounds** (Valerian 16; Vega ⚑ **"4" and "14" given on consecutive lines**), **Magic Weapon** on her pistol, **Hail of Thorns** + shot. **Never targeted once all session — 0 damage taken** |
| [[Mr. Cat\|Mr. Cat, Esquire]] | ~7 | 0 | 0 | Missed three times early (14, 11, 11), then **killed Thrall B** (18 → 8). Took a "dirty 20" for **13**, down to roughly one third. ⚑ One attack resolved by **adding both advantage d20s** (17 + 8 = "25") — should have been 17; the DM accepted it |
| DM (enemies A–F) | ~35 | **2** — *both against the party* | **1** | Thrall F **nat 20** on [[Flux]] (negated by Shield); Thrall E **nat 20** on [[Barrett Grimmskar]] for only **7** — *"kind of a waste of a nat 20."* Thrall B rolled a **natural 1** on a grapple escape and failed three escapes in a row |

### Session Records

- **Natural 20s: 6** — [[Vega Bloodroot]] ×2 (**both in the same turn**, the 62-damage round), [[Flux]] ×1 (Perception 30), **2 against the party** (Thrall F on Flux; Thrall E on Barrett), and **1 unattributed on initiative** ⚑.
- **Natural 1s: 1** — Beast Thrall B, on a grapple escape. *"That seems to be a theme with Vampire Thrall B over here."*
- **Highest single-turn damage: 68** ([[Valerian Hellebore]], Moonbeam on Thrall C, 34 radiant doubled) → **62** (two-way tie: Valerian's first Moonbeam tick and [[Vega Bloodroot]]'s 16 + 28 + 18 round).
- **Most kills: [[Vega Bloodroot]], 3** (Thralls D, F, A) — one by axe, **two bare-knuckle**, one of them stolen from [[Zelda Z Whipper\|Zelda]]. Then [[Valerian Hellebore]], [[Barrett Grimmskar]] and [[Mr. Cat\|Mr. Cat]] with 1 each. **[[Flux]], [[Samothy Smith-Wesson]] and [[Deanna Smith-Wesson]]: 0.**
- **Damage taken by the party:** [[Barrett Grimmskar]] 37 · [[Vega Bloodroot]] ~36 (14, 7–8, 15) · [[Valerian Hellebore]] 34 · [[Zelda Z Whipper\|Zelda]] 31 · [[Samothy Smith-Wesson]] 15 · [[Mr. Cat\|Mr. Cat]] 13 · [[Flux]] **0** (Shield) · [[Deanna Smith-Wesson]] **0 — never targeted.**
- **Healing: 2 × Cure Wounds** ([[Deanna Smith-Wesson]] → Valerian 16, → Vega ⚑ 4-or-14) and **2 × Healing Word** ([[Zelda Z Whipper\|Zelda]] → self, 8 + unstated).
- **No death saves. No PC downed. No PC deaths.** Six enemies killed, zero escaped.
- **Resources spent:** 1 lucky point (Samothy), 1 inspiration (Valerian — the reroll still missed; Zelda held hers), 1 reaction Shield (Flux), 1 reaction Spiny Shield (Valerian), 1 War Caster opportunity attack.
- **Party level: 10** — no level-up awarded. Confirmed in play by [[Barrett Grimmskar]]: *"now that I'm level 10."* Milestone advancement (XP retired from S10).

### Initiative Orders

> ⚠ **Initiative was rolled** (00:10:05) but **individual results were almost entirely unspoken.** Order reconstructed from the DM's turn calls per the project-instructions initiative rule; opportunity attacks are not treated as order changes.

**Zelda → Flux → Barrett → Thrall A → Samothy (+ Mr. Cat on his turn) → Thrall B → Vega → Thrall C → Thrall D → Thrall E → Thrall F → Valerian → Deanna** → *(back to Zelda)*.

**Stated values:** Samothy **18** · Vega **11** · Valerian **3** ("I got a 3 and I thought I was the lowest") · one unattributed **nat 20** ⚑.

- ⚑ **The nat 20 is unattributed.** SPEAKER B says *"And Madi rolled. I got a nat 20"* — a merged catch-all line. Zelda takes the top of the order, so it most likely belongs to **Zelda**; but B maps to **Deanna**, who goes **last**. Unresolved.
- ⚑ **Vega's stated 11 does not match her slot.** An 11 should not sit between four enemy turns and below Samothy's 18 unless enemy initiative fell in that band, which the DM never states. Preserved as heard.
- ⚑ **Compare S09/S10.** S09 logged Zelda 24 → Valerian 19 → Samothy 19 → Deanna 18 → Flux 14 → Vega 12 → Barrett 11. S11 is a **fresh roll**, so no contradiction — but Zelda tops the order for the **third consecutive combat**.

### Archive Flags

- 🛑 **Archive never queried — third consecutive session.** Re-run Step 4 and reconcile this entire section together with [[Roll Statistics S01-S10]] §S10.
- 🛑 **Sync-gap check outstanding.** We still do not know whether 06/15 *or* 06/22 rolls exist in the archive at all.
- 🛑 **Root cause identified this run:** the settings allowlist entry `mcp__plugin_supabase_supabase__execute_sql` does not match any connected server name (`mcp__supabase__execute_sql` is what's live). **Fix the allowlist and the next run clears three sessions of debt at once.**
- ⚑ **Mr. Cat's advantage resolved by *adding* two d20s** (17 + 8 = "25 to hit"), accepted by the DM. Advantage takes the higher die. Recorded, not corrected — it is what happened at the table.
- ⚑ **Barrett's crit range: 18 or 19?** The glossary (S04, `Gut Shot / Deck Shot`) records **19**. He plays **18** here and credits **Piercer** for the extra die. Ask the DM whether the range widened at level 10.
- ⚑ **Grapple ran as check-vs-save** (*"his would be a check, yours would be a save"*), contradicting the S09 house rule of a flat save vs DC 8+prof+Str.
- **Numbers as stated at the table** (recorded verbatim, not reconciled — the DM's math is the DM's): fall damage called as **12** for a 24-ft drop · the gold split done **6 ways** for the 200 gp and **7 ways** for the 900 gp · Vega self-reports being hit *"twice for 7 points each"* where the DM logged 14, then 15 halved · Samothy's *"26 total for that guy."*
- ⚑ **Conflicting healing number** — Vega asks how much she was healed and gets **"4"** and **"14"** on consecutive lines from different speakers. Matters for HP reconstruction.
- ⚑ **Flux's Witch Bolt damage was rolled, then rerolled** on the DM's instruction (*"just reroll. I mean, keep the damage before"*) — ambiguous total. The archive would show which value stuck.
- **Abilities used this session with no 2024 PHB match** — recorded as DM homebrew / canon-in-play, no source lookup: **"Pins and Needles"** ([[Zelda Z Whipper\|Zelda]]) · **Menacing Attack** ([[Vega Bloodroot]]) · **Spiny Shield** ([[Valerian Hellebore]]). Zelda also casts **Inflict Wounds** at 3rd and **Infestation** at will, both off the standard Bard list; logged as played.
- ⚑ **Zero DM rolls in the archive again** (standing since S08) — the DM rolls physical dice off-camera. Expected to remain true when the query is finally run.

## S13 — The Cartographer of the Underkeep (rolls keyed **2026-08-03** ⚠️) ✅ ARCHIVE QUERIED

> ✅ **THE THREE-SESSION ARCHIVE DEBT IS CLEARED.** Queried 2026-08-30 via the **`supabase-cutter`** MCP server against project `vtrtyagltwdrbastpppl`. 🛑 **The S11 blocker above is resolved** — the working server name is `mcp__supabase-cutter__execute_sql`, not the `mcp__plugin_supabase_supabase__*` entry in the settings allowlist.
> ⚠️ **GOTCHA, worth keeping:** `individual_values` is stored as a **JSON string** (`"[6]"`), not a jsonb array. Parse with `(individual_values #>> '{}')::jsonb -> 0`. Using `-> 0` directly returns null for every row and silently reports **zero natural 20s campaign-wide.**
> ⚠️ **The off-by-one is real here.** Play was 08/02; the rolls are keyed **`session_date = 2026-08-03`** and timestamped 00:15–01:41 UTC on 08/04. S14 and S15 do **not** have this problem. This is the same pattern already documented for S01, S02 and S04.
> ⚑ **Session 12 was never processed**, so this file jumps S11 → S13.

**63 archived rolls**, 43 of them d20s. **0 natural 20s, 5 natural 1s.**

| Character | Rolls | d20s | Nat 20 | Nat 1 | Best | Highlights |
|---|---|---|---|---|---|---|
| [[Samothy Smith-Wesson]] | 12 | 8 | 0 | **2** | 25 | Investigated the **one turned skull** and opened the bypass tunnel. **Ballistic Smite** on Bonewraith B, reported at 13 HP off his passive |
| [[Valerian Hellebore]] | 11 | 9 | 0 | 1 | 27 | **Perception 16** found the hidden alcove; **Constitution 19** pulled the cold-flame torch free as a door shut on his arm. ⚠️ **The only PC to fail the memory-echo Con save** |
| [[Barrett Grimmskar]] | 9 | 5 | 0 | 0 | 22 | Two revolver rounds into the wraiths. No kills |
| [[Zelda Z Whipper\|Zelda "Z" Whipper]] | 7 | 5 | 0 | 0 | 23 | **Inflict Wounds at 5th** plus a Finger Guns bonus action |
| [[Vega Bloodroot]] | 7 | 3 | 0 | 1 | 27 | Charged in with the **Staff of Flames** and **finished Bonewraith B for 20** |
| [[Flux]] | 4 | 4 | 0 | 0 | 20 | ⚑ Recorded as casting `Rite of the Dawning Radiance` — **contradicted by S14.** See *Archive Flags* |
| [[Deanna Smith-Wesson]] | 🛑 **0** | 0 | — | — | — | 🛑 **SHE HAS NO ARCHIVED ROLLS AT ALL** — yet she killed Bonewraith A on the recording, dual-wielding, and marked B with **Slayer's Prey**. See *Archive Flags* |
| *(unattributed)* | 7 | 6 | 0 | 1 | 16 | No character assigned |
| Wraith A / Wraith B | 6 | 3 | 0 | 0 | 22 | DM-controlled |

### Session Records

- **Natural 20s: 0.** **Natural 1s: 5.**
- **Kills: [[Deanna Smith-Wesson]] (Wraith A) and [[Vega Bloodroot]] (Wraith B).** ⚑ [[Mr. Cat]] rolled a natural 1, connected anyway for 6, and fell prone when his leg locked.
- **No PC downed, no death saves.** Combat was two Bonewraiths, resolved in a single round of party turns.
- **Party level: 10.**
- **Session ended early** at 01:40:57 of a 1:46 recording — the DM was becoming unwell.

## S14 — An Angel with a Shotgun (rolls keyed 2026-08-17) ✅ ARCHIVE QUERIED

> ✅ `session_date` matches the play date — **no off-by-one this session.** Spans 22:53 UTC on the 17th to 02:23 UTC on the 18th.
> 🛑 **A PC died this session.** The fatal roll is archived and is included below.

**103 archived rolls**, 75 of them d20s. **3 natural 20s, 2 natural 1s.**

| Character | Rolls | d20s | Nat 20 | Nat 1 | Highlights |
|---|---|---|---|---|---|
| [[Samothy Smith-Wesson]] | 22 | 15 | **2** | 0 | **Nat 20 Insight (26)** found the breathing wall — the mimic nest nobody else saw. **Nat 20 Con save (26)** on the rope bridge after burning **all three Lucky points** on one Acrobatics check. Detect Magic twice |
| [[Flux]] | 15 | 10 | 0 | 0 | **Mold Earth** recovered the body; rolled the **Arcana 17** (with Zelda's assist d6) that explained the failed Revivify. Bow knockback 10 ft |
| [[Zelda Z Whipper\|Zelda "Z" Whipper]] | 14 | 12 | **1** | 1 | **Nat 20 Con save (23)** seeing through Vega's fake electrocution. 🛑 **Cast Revivify twice — both failed.** Guiding Bolt 16 + Finger Guns 8 |
| [[Vega Bloodroot]] | 12 | 5 | 0 | 0 | Raged and touched the breathing wall. **Nat 20 / 27** on the water elemental, then killed it on **retroactive tattoo + Brutal Strike damage** she had forgotten — and gave the credit away |
| [[Barrett Grimmskar]] | 11 | 7 | 0 | 0 | **Adrenaline Rush** for 60 feet of movement; two shots for 18 on the elemental. Crossed the bridge nauseous on a 9 and a 14 |
| [[Valerian Hellebore]] | 9 | 7 | 0 | 0 | **Depth Charge** for 25 (killing Mimic A) and **32 at 4th level** on the elemental. **Wild Shape bat** across the bridge |
| [[Deanna Smith-Wesson]] | 5 | 5 | 0 | **1** | 🛑 **Athletics 20 into the bypass tunnel, then four more rolls, then the last roll of her life: Dex save `1d20+5`, natural 1, total 6, at 00:53:58 UTC. The tunnel came down and killed her instantly** |
| [[Eiluned Lulu Denulie\|Lulu]] | 2 | 1 | 0 | 0 | ⭐ Her first two rolls in the campaign: **Initiative 14**, then **Mass Cure Wounds `5d8+3` = 32** on faces `[3,8,7,6,5]`. ✅ Both match the transcript exactly and are what confirmed her player |
| *(unattributed)* | 10 | 10 | 0 | 0 | No character assigned |
| Mimic A / Mimic B / Water Elemental | 3 | 3 | 0 | 0 | DM-controlled |

### Session Records

- **Natural 20s: 3** — [[Samothy Smith-Wesson]] ×2, [[Zelda Z Whipper\|Zelda]] ×1. **Natural 1s: 2** — Zelda (initiative, rerolled as a halfling) and 🛑 **[[Deanna Smith-Wesson]] (the fatal Dex save).**
- 🛑 **First PC death in the campaign.** No death saves — the DM ruled it instant. **Revivify failed twice**, blocked by **seven fused curses** in the cursed grave-dust.
- **Two combats, both resolved in a single round** — two mimics, then one water elemental. **The only lethal encounter of the session was not a combat at all.**
- **Party level: 10.**

## S15 — Only Those Who Bleed Fire (rolls keyed 2026-08-27) ✅ ARCHIVE QUERIED

> ✅ `session_date` matches the play date.
> ⚠️ **Historically bad dice: 8 natural 1s across 118 d20s.** Three separate players were told to change their dice, and one restarted his computer.

**235 archived rolls** — the largest single-session total in the file — 118 of them d20s. **6 natural 20s, 8 natural 1s.**

| Character | Rolls | d20s | Nat 20 | Nat 1 | Highlights |
|---|---|---|---|---|---|
| [[Vega Bloodroot]] | **45** | 10 | 0 | 0 | ⭐ **Pulled the relic** on three Strength saves (20, 25, 20). Killed two [[Boilborn]] including the last. ⚠️ 45 rolls but only 10 d20s — see *Archive Flags* |
| [[Samothy Smith-Wesson]] | 27 | 10 | **1** | 0 | **Nat 20 pistol (31)**. Took the **obsidian tablet**. Slayer's Prey → Hunter's Mark, Vex/Sap, Ballistic Smite |
| [[Zelda Z Whipper\|Zelda "Z" Whipper]] | 26 | 18 | **1** | 1 | ⭐ **Revived [[Eiluned Lulu Denulie\|Lulu]] twice.** Escaped a grapple with **Misty Step**. **Teleportation Circle** home. Nat 1 initiative, rerolled as a halfling; **nat 20 Strength** in the mine |
| [[Flux]] | 25 | 16 | 0 | **2** | Spotted the hidden wall on **passive Perception**. **Mold Earth** gave the whole party advantage in the mine. 🛑 Took 30 from Rupture Burst — *"If I wouldn't have had the Tough feat, I would have been dead"* |
| [[Barrett Grimmskar]] | 24 | 13 | 0 | **2** | **Crit for 42** with the fire revolver plus **Gut Shot**. ⚠️ **Spellfire Flare missed and hit Zelda for 16.** Three consecutive 13s |
| [[Eiluned Lulu Denulie\|Lulu]] | 20 | 18 | **2** | 1 | 🛑 **Dropped to 0 twice.** **Mass Cure Wounds at 5th** for 20 to the party; Burning Hands at 4th for 27; Wildfire Spirit. **Two nat 20 Strength checks** in the mine |
| [[Valerian Hellebore]] | 15 | 7 | **1** | **2** | **Nat 20 Nature (29) — and learned nothing.** **Call Lightning at 5th, re-triggered every round**, the bulk of the party's damage |
| *(unattributed)* | **51** | 24 | 1 | 0 | ⚠️ The largest unattributed block in the file — see *Archive Flags* |
| Zombie A / Zombie B | 2 | 2 | 0 | 0 | DM-controlled. ⚑ **Named "Zombie" in the archive because the DM used zombie tokens** — they are [[Boilborn]] |

### Session Records

- **Natural 20s: 6.** **Natural 1s: 8** — the worst night in the file. Four of them landed **inside three minutes** in the opening puzzle room (History, Arcana, Religion, Investigation).
- **One combat, ~13 rounds** — four [[Boilborn]], the longest fight of the recent run.
- 🛑 **[[Eiluned Lulu Denulie\|Lulu]] hit 0 HP twice**; [[Flux]] survived on a feat. **No PC deaths.**
- ⭐ **The relic was claimed** — a cursed **+1 longsword, +2d6 fire**, once-per-short-rest **4d6** ignite.
- **20 raw gems** mined at **3 Strength checks, DC 12 per vein**, with advantage from Mold Earth.
- **Party level: 10.**

### Archive Flags (S13–S15)

- ✅ **THE ARCHIVE DEBT FROM S10/S11 IS CLEARED.** Three sessions queried in one pass. The working call is `mcp__supabase-cutter__execute_sql` on project `vtrtyagltwdrbastpppl`.
- 🛑 **`individual_values` is a JSON *string*, not an array.** Parse with `(individual_values #>> '{}')::jsonb -> 0`. Getting this wrong reports **0 natural 20s for every session** and looks like clean data.
- 🛑 **[[Deanna Smith-Wesson]] has ZERO archived rolls in S13**, in a session where she killed a Bonewraith and used Slayer's Prey. Her S14 rolls (5, including the fatal one) *are* present. **Either her S13 rolls were made on physical dice, or the sync missed her entirely.** Worth checking before trusting any per-PC S13 figure.
- ⚠️ **The archive undercounts d20s.** [[Vega Bloodroot]] logs **45 rolls but only 10 d20s** in S15, and **zero natural 20s** — while the transcript has her rolling two nat 20s inside a single turn. She rolls attacks on physical dice and only some results reach D&D Beyond. **Treat archive d20 counts as a floor, not a total**, and never conclude "no nat 20s" from the archive alone.
- ⚠️ **Unattributed rolls are growing**: 7 in S13, 10 in S14, **51 in S15**. Resolvable by `user_id` against the [[Campaign Dashboard]] table — not attempted this pass.
- ⚠️ **S13's `session_date` is off by one** (rolls keyed 08-03 for an 08-02 session); **S14 and S15 are correct.** The same off-by-one is already documented for S01, S02 and S04, and it is why the website's per-session tallies query the wrong day for those sessions.
- 🛑 **`Rite of the Dawning Radiance` — S13 vs S14 contradiction.** S13 records [[Flux]] casting it as a ritual granting **Sunward Blessing**; S14's opening establishes it is **5th level**, visible at 1st only through a D&D Beyond shared-content glitch, and that she is not taking it. **Sunward Blessing is never referenced again.** Neither session note has been amended. See [[DM Questions — Open]].
- ⚑ **First-seen abilities with no published-book match** — recorded as homebrew / canon-in-play, not corrected: **`Ballistic Smite`** ([[Samothy Smith-Wesson]]) · **`Pins and Needles`** and **`Spellfire Flare`** ([[Eiluned Lulu Denulie\|Lulu]], [[Barrett Grimmskar]]) · **`Depth Charge`** ([[Valerian Hellebore]]) · **`Rite of the Dawning Radiance`** / **`Sunward Blessing`** · the [[Boilborn]]'s **`Spasm Step`** and **`Rupture Burst`**.
- ⚑ **Boil-burst trigger conditions unresolved** — it fired on [[Vega Bloodroot]]'s first melee hit and not her second, after an Insight check suggested it wouldn't recur. Once per creature, per round, or DM discretion? Materially affects whether melee is viable against [[Boilborn]].
- ⚑ **Misty Step vs grapple** was researched live and settled correctly by the table in S15 (speed 0 ≠ restrained; nothing prevents teleportation). Worth promoting to [[House Rules & Rulings]].

## Related

- [[Roll Statistics S01-S10]] · [[Campaign Dashboard]] · [[Session 11 — A Delightful Chase]] · [[Session 13 — The Cartographer of the Underkeep]] · [[Session 14 — An Angel with a Shotgun]] · [[Session 15 — Only Those Who Bleed Fire]] · [[Vault Sync Status]] · [[DM Questions — Open]]
