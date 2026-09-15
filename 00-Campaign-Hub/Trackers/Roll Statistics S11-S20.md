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

## S16 — What the Fuck (rolls keyed 2026-09-03) 🛑 ARCHIVE NOT QUERIED — BLOCKED

> 🛑 **THIS SECTION IS DELIBERATELY UNPOPULATED. It is blocked, not skipped, and nothing here is invented.**

**The archive could not be reached in Convo 1 or Convo 2.** `mcp__supabase__execute_sql` returned:

> `Unauthorized. Please provide a valid access token to the MCP server via the --access-token flag or SUPABASE_ACCESS_TOKEN.`

Neither standing query was executed:
```sql
SELECT * FROM ashfall_session_rolls WHERE session_date = '2026-09-03';
SELECT MAX(timestamp_iso) FROM ashfall_session_rolls;
```

🛑 **Whether a sync gap exists is UNKNOWN.** This is an **access failure**, not a confirmed missing sync — we do not know whether Taylor's post-session sync ran.

### 🛑 REGRESSION — this worked three sessions ago

**S13, S14 and S15 were all queried successfully on 2026-08-30** via **`mcp__supabase-cutter__execute_sql`** on project `vtrtyagltwdrbastpppl` (see *Archive Flags (S13–S15)* above). That route was **retried this run and is now gated behind an ungranted permission** that cannot be approved in a non-interactive session; `mcp__supabase-account2__execute_sql` is gated the same way. The allowlisted `supabase` server connects but has no token.

**Two independent fixes, either of which clears S16:**
1. Add `SUPABASE_ACCESS_TOKEN=sbp_…` to the vault `.env` (already gitignored) so the `supabase` server starts authorized, **or**
2. Allowlist `mcp__supabase-cutter__execute_sql` in `.claude/settings.local.json` — that is the call that actually worked for S13–S15.

### What exists instead

**~45 rolls are reconstructed from the transcript only**, in the *Full Roll Log* of [[Session 16 — What the Fuck]] · [[Session 17 — Hobo, That's Your Reflection]], every row flagged provisional. **They are deliberately NOT summarised into per-character statistics here** — doing so would present transcript guesses in the same table shape as archive-verified data for S13–S15, which is exactly the failure this file exists to prevent.

⚠️ **The diarizer misattributes bare roll numbers** to whoever was speaking (confirmed at L338, L1416, L1430, L1478, L2280), so per-character counts from the transcript are **not trustworthy at all** this session. The archive is authoritative for who rolled; this transcript is not.

### Qualitative observations safe to record

These come from narrated outcomes, not from counting:

- **Zero attack rolls. Zero weapon damage rolls.** No initiative was ever rolled — **the first Ashfall session with no combat**. Every damage roll came from a spell (Produce Flame, Inflict Wounds, Depth Charge) or a trap.
- **Three natural 20s observed**, all in the final forty minutes: [[Flux]]'s Insight (→30) in the mural cave, and the Strength/Dex pair on [[Vega Bloodroot]] that held and then **caught the doppelganger out of the air**.
- **Inspiration was spent at least four times**, a direct consequence of the table-wide grant in the first five minutes. ⚠️ **A second table-wide grant carries into S17.**
- **[[The Doppelganger]] rolled at least eleven saves and passed most of them.** He lost on the only one that mattered because [[Flux]]'s **Silvery Barbs** made him roll it twice.
- ⚑ **"322 to grapple"** (L2454) is an **impossible total** — likely 32 or 22. **The DM accepted it**, so the value is load-bearing and cannot simply be discarded.
- **Party level: 12** — up from 10, off-screen, between sessions.

### To do when the token is restored

1. Run both queries above for `2026-09-03`.
2. Build the per-character table in this file, matching the S13–S15 format.
3. Reconcile against the session note's *Full Roll Log* and **correct every ⚑ attribution** — expect several to be wrong.
4. Remember the two standing gotchas: `individual_values` is a **JSON string** (parse with `(individual_values #>> '{}')::jsonb -> 0`), and the archive **undercounts d20s** because several players roll physical dice.

## S17 — Hobo, That's Your Reflection (rolls keyed 2026-09-07) ✅ ARCHIVE QUERIED

> ✅ **143 rolls** returned from `ashfall_session_rolls` on project `vtrtyagltwdrbastpppl` via `mcp__supabase-cutter__execute_sql`. **No sync gap** — the archive's latest overall entry is **2026-09-13**, well after this session.
> ✅ **50 null-character rolls resolved by `user_id`**: 49 → the DM (`109639138`, who also owns the Vampire Beast Thrall rows), 1 → Lulu (`109912548`).
> 🛑 **THE `individual_values` TRAP FIRED AND IT FAILS SILENTLY.** `jsonb_typeof` returns **`string`** on all 143 rows, so `individual_values #>> '{0}'` yields null and **every nat-20 and nat-1 reports zero with no error.** Parse with **`(individual_values #>> '{}')::jsonb`**. Doing so surfaced **3 nat 20s and 5 nat 1s**.
> ⚠️ **Two more schema notes:** the column is **`"character"`**, not `character_name`; and `roll_type` is `roll` / `damage` / `to hit` / `save` / `check` — **there is no `attack`**.
> ⚠️ **Counts are a FLOOR** — several players roll physical dice, and the transcript contains results with no archive row.

| Character | Rolls | d20s | Nat 20 | Nat 1 | Avg d20 | To-hit | Damage rolls | Archived damage |
|---|---|---|---|---|---|---|---|---|
| **DM** (incl. unattributed) | 49 | 33 | 0 | **3** | 9.09 | — | — | — |
| [[Vega Bloodroot]] | 26 | 13 | 0 | 1 | 9.31 | 7 | 6 | **68** |
| [[Zelda "Z" Whipper]] | 17 | 9 | 0 | 1 | **12.78** | 8 | 8 | **75** |
| [[Barrett Grimmskar]] | 14 | 9 | **1** | 0 | 9.33 | 6 | 3 | 33 |
| [[Samothy Smith-Wesson]] | 14 | 8 | 0 | 0 | 12.13 | 5 | 6 | 64 |
| [[The Doppelganger]] *(logged as Valerian)* | 9 | 8 | **2** | 0 | 9.63 | 1 | 0 | 0 |
| [[Flux]] | 6 | 5 | 0 | 0 | **7.00** | 4 | 1 | 7 |
| [[Eiluned "Lulu" Denulie]] | 5 | 4 | 0 | 0 | 11.00 | 0 | 0 | — |
| Vampire Beast Thrall A | 2 | 2 | 0 | 0 | 11.50 | — | — | — |
| Vampire Beast Thrall B | 1 | 1 | 0 | 0 | 4.00 | — | — | — |

**Session totals: 143 rolls · 92 d20s · 3 nat 20s · 5 nat 1s · 247 archived damage.**

### Records and trends

- 🛑 **Two of the session's three natural 20s belong to the man who could not move.** [[The Doppelganger]] rolled a **nat 20 on his opening CON save** (22, resisting Vega's interrogation) and **another on initiative** (21) — while paralysed, gagged and hogtied. His own reaction: *"Now I fucking get a natural 20 as a dissipated fucking paralyzed motherfucking corpse."*
- ⭐ **The third was [[Barrett Grimmskar]]'s**, and it was **bought** — a 3 on Spellfire Flare, rerolled with **Heroic Inspiration** into a nat 20 for **30 radiant**. The only nat 20 in the campaign so far that came from spending a resource.
- ⚠️ **The DM owns 3 of the 5 natural 1s**, including **back-to-back nat 1s at 22:11** and one that spared [[Barrett Grimmskar]] outright.
- ⚠️ **[[Flux]] had the coldest dice of the night** — a **7.00** d20 average across 5 rolls, the lowest single-session average recorded for her. [[Zelda "Z" Whipper]] had the warmest at **12.78**.
- ⚑ **[[Vega Bloodroot]] led on volume and lagged on quality** — 26 rolls at a 9.31 average. Her output came from **+8/+10 to-hit and reckless attack**, not from the dice.
- ⚑ **[[Zelda "Z" Whipper]] out-damaged [[Vega Bloodroot]] on the archive (75 to 68)** on nine fewer rolls.
- ⚑ **Three DM d20s are timestamped 19:26 ET**, **36 minutes before the recording begins** (*"It is 8:02 PM"* at 00:00:09). **Pre-session prep, not a sync gap.**
- ⚠️ **[[Vega Bloodroot]]'s curse triggered on a CON save of 8** (3 + 5) at 21:52 — the single most consequential roll of the session.

## S18 — I Knew You'd Come (rolls keyed 2026-09-14) 🛑 ARCHIVE NOT QUERIED — BLOCKED

> 🛑 **THE ROLL ARCHIVE WAS RE-TESTED IN THIS CONVO 2 RUN AND IS STILL UNREACHABLE.** `mcp__supabase__execute_sql` returned **`Unauthorized. Please provide a valid access token…`** with **no permission prompt** — re-confirming the 08/28 diagnosis for the eighth consecutive run. `mcp__supabase-cutter__execute_sql` and `mcp__supabase-account2__execute_sql` both returned **"permissions… not granted"** and cannot be granted non-interactively.
> 🛑 **ROOT CAUSE NOW CONFIRMED BY DIRECT INSPECTION, NOT INFERENCE.** The vault `.env` was read this run: **it contains only `DDB_COBALT`. There is no `SUPABASE_ACCESS_TOKEN` in it at all**, so `.mcp.json`'s `"SUPABASE_ACCESS_TOKEN": "${SUPABASE_ACCESS_TOKEN}"` expands to an empty string. **This is not a transient failure and it will not fix itself.**
> 🛑 **Neither standing query ran:** `SELECT * FROM ashfall_session_rolls WHERE session_date = '2026-09-14'` and `SELECT MAX(timestamp_iso) FROM ashfall_session_rolls`. **Whether a sync gap exists for 2026-09-14 is UNKNOWN** — an access failure is *not* the same as an empty archive.
> ⚠️ **NO ROLL IN THIS SESSION IS MARKED `physical dice roll`**, because that designation requires an archive to be absent from.
> ⚠️ **EVERYTHING BELOW IS A COUNT OF TRANSCRIPT-AUDIBLE ROLL EVENTS** taken from the *Full Roll Log* in [[Session 18 — I Knew You'd Come]]. **Nothing was invented. Nothing is archive-verified.** These numbers are a **FLOOR** and are **NOT comparable** to the archive-backed blocks for S13–S15 and S17.

### Per-character — transcript-audible d20 events only ⚠️ FLOOR, NOT A CENSUS

| Character | d20s heard | Nat 20 | Nat 1 | Initiative | Notable |
|---|---|---|---|---|---|
| [[Vega Bloodroot]] | **14** | **2** | 0 | 🛑 **[Unknown/Ambiguous]** — *"Oh wait, did I roll? I have no idea what I got."* DM: *"No, you can't reroll"* | **Highest volume at the table.** A two-handed **nat-20 crit** (6d6 fire rolled twice for 24 and 27, 2d8 set bonus for 15 and 10) plus a **Great Weapon Master** follow-up. **Five CON saves, three failed → three separate poisonings.** Closed the session with a **nat 20 Insight** on Val |
| [[Barrett Grimmskar]] | **7** | 0 | 0 | ⚠️ **CONTESTED** — [[Zelda "Z" Whipper]]: *"He rolled a 25."* VTT scored **15**; the DM kept 15: *"It has him at 15. I'll take it"* | Steady and unremarkable: 4 hits from 7 shots, two kills, two bonus-action grapple-hook repositions |
| [[Valerian Hellebore]] | **~7** | 0 | 0 | 🛑 **DID NOT ROLL** — *"Everybody except for Val"* | 🛑 **Five forced CON saves and ~91 damage with no turns.** Then **3 for 3 on Eldritch Blast** (22, 23, 24) after combat was already over |
| [[Flux]] | **~7** | 0 | **2** | 🛑 **[Unknown/Ambiguous]** — only *"with my bad roll today"* | **Both nat 1s were Finger Guns.** The first triggered the boil burst Vega then saved against; the second self-burned her for 2. **Killed the [[Boilborn]]** with bow + Sneak Attack (18) + Finger Guns |
| [[Zelda "Z" Whipper]] | **6** | ⚑ **0 or 1** | 0 | ⚑ **20** — *"A 20."* ⚠️ **The DM also says *"You rolled a nat 20"*, addressee ambiguous** — see *Discrepancies* | **History 22** established the tower. **Dispel Magic** broke the ritual, **Acrobatics 21** made the grab. Her Guiding Bolt **missed on a 15** and got the session's thesis statement back |
| [[Samothy Smith-Wesson]] | **6** *(+1 d6)* | **1** | **1** | **nat 1** → 4 or 6; **Heroic Inspiration reroll → 18** | ⭐ **The session's MVP by outcome.** **nat-20 Athletics (26)** for the wall tackle; **Arcana 30** for the 8 shards; the **Catapult** that floored the necromancer. The d6 was [[Mr. Cat]]'s teleport passage (**3**, 1–3 = yes) |
| [[Eiluned "Lulu" Denulie]] | **~3** | 0 | 0 | 🛑 **[Unknown/Ambiguous]** | ⚠️ **Lowest d20 volume at the table — because her kit doesn't use them.** **Blight** killed thrall F on the *target's* failed save (37 damage); her Draconic Spirit's rend hit on a 20 |
| [[Mr. Cat]] | **2** | ⚑ **1** | 0 | — (companion; turn order *"usually right after"* Samothy) | ⭐ **The single highest-leverage roll of the session: Acrobatics 27 with DM-granted advantage *"for being a cat."*** Imposed **disadvantage on the necromancer for the rest of the fight.** Missed his one attack (11) |
| **DM** (thralls, [[Boilborn]], [[The Necromancer]]) | **~12** | **1** | 0 | Not stated; interleaved | The necromancer's **nat-20 CON save** negated one of Samothy's effects. His **DEX save of 15 vs DC 17, at disadvantage**, is the roll that lost him the fight |
| ⚑ Unattributed PC | **1** | 0 | 0 | — | The sealed-door attempt — *"I tried. Got a 17."* **Speaker never identified** |

**Transcript-audible totals: ~65 d20 events · ~110 total roll events including damage · ≥5 nat 20s · 3 nat 1s.**
⚠️ **The archive would almost certainly return more.** Every comparable archive-backed session ran 118–143 rolls.

### Session Records

- ⭐ **Two of the session's natural 20s belong to a cat and a corpse.** [[Mr. Cat]]'s Acrobatics face-grab and **[[The Necromancer]]'s CON save** — and the cat's mattered more than any PC's roll.
- ⭐ **[[Samothy Smith-Wesson]] bought his way out of a natural 1 and then won the session.** His initiative nat 1 was erased by **Heroic Inspiration** into an 18; from there he took the nat-20 Athletics swing, the Vortex Warp, the Catapult and the Arcana 30. **Second session running that Heroic Inspiration converted a nat 1 into the session's best outcome** (cf. [[Barrett Grimmskar]]'s S17 reroll into a nat 20).
- ⭐ **[[Samothy Smith-Wesson]]'s Arcana 30** (+14) is the highest single check in the block, and it bought **8 enchantable shards**.
- 🛑 **[[Vega Bloodroot]] failed 3 of 5 Constitution saves** and was poisoned three separate times — and took roughly **76 damage**, the most of any PC. ⚑ The DM noticed mid-session that he had been under-applying it: *"I don't think I've been doing the poison damage on your turn."*
- 🛑 **[[Valerian Hellebore]] took ~91 damage — more than any PC — without a single turn**, including **25 as the chains crushed down during his own rescue**.
- ⚠️ **[[Flux]]'s two nat 1s cost her 2 self-damage total** and the first one **triggered the Boilborn's boil burst**. She still killed the Boilborn.
- ⚑ **No PC dropped to 0 all session**, across a 2h10m continuous encounter.

### Initiative Orders

| Turn | Character | Roll |
|---|---|---|
| 1 | [[Zelda "Z" Whipper]] | ⚑ 20 — *"Zelda, take the lead"* |
| 2 | [[Vega Bloodroot]] | 🛑 [Unknown/Ambiguous] |
| 3 | [[Samothy Smith-Wesson]] | nat 1 → **18** on the Heroic Inspiration reroll |
| 3b | [[Mr. Cat]] | — companion; DM: *"Usually right after you"* |
| 4 | [[Barrett Grimmskar]] | ⚠️ **Contested — 25 claimed, 15 scored, 15 kept** |
| 5 | [[Flux]] | 🛑 [Unknown/Ambiguous] |
| 6 | [[Valerian Hellebore]] | **Did not roll** — granted turns only *"to scream in pain"* |
| 7 | [[Eiluned "Lulu" Denulie]] | 🛑 [Unknown/Ambiguous] |
| — | Enemies | Not stated; the [[Boilborn]] acted immediately after [[Mr. Cat]] in round 3 |

> ⚠️ **Turn ORDER is reliable — it was observed across four rounds of play. The roll COLUMN is not.** Most totals were never said aloud, and the two speakers who called theirs are merged by the diarizer.
> ⚑ **The DM flags the VTT as unreliable:** *"the roll for initiative thing and the map thing, I don't think it works correctly all the time."*

### 🛑 Discrepancies found in the session note itself — FLAGGED, NOT SILENTLY FIXED

1. 🛑 **THE NAT-20 COUNT IS INTERNALLY INCONSISTENT.** The note's *Trends* bullet says **"Four natural 20s"** and lists Samothy's Athletics, Mr. Cat's Acrobatics, the necromancer's CON save, and Vega's Insight. **But the Round 2 roll log independently records [[Vega Bloodroot]]'s two-handed attack as `nat 20 → 29 to hit ✅ CRIT`**, and both the narrative summary and the Themes section describe that crit. **That is a fifth.** ▶ **This block records ≥5 and does not overwrite either statement.** Only the archive can settle it.
2. ⚠️ **[[Zelda "Z" Whipper]]'s initiative "20" may or may not be a natural 20.** She says *"A 20"*; the DM separately says *"You rolled a nat 20"* with an **ambiguous addressee**. A total of 20 and a natural 20 are different events. **Not resolved.**
3. ⚑ **[[Mr. Cat]]'s Acrobatics 27** is logged as a total, but the *Trends* bullet counts it among the natural 20s. **With advantage and an unstated modifier, both readings are possible.**
4. 🛑 **RADIANT DAMAGE WAS BEING DOUBLED FOR [[Vega Bloodroot]] ONLY** — *"I've been doubling them because I— no one else has been doubling."* ⚠️ **The table's damage totals are therefore internally inconsistent, and any damage leaderboard built from this session will be skewed.** **No damage leaderboard is published in this block for that reason.**
5. ⚑ **The necromancer does NOT take double radiant**, unlike the thralls — Samothy's 1d6 radiant rider was not doubled against him. **Two different damage rules were live in the same fight.**
6. ⚠️ **PARTY LEVEL 12 → 13, OFF-SESSION AND UN-NARRATED** (*"13, not 30"*). **S17's open flag** — [[Barrett Grimmskar]] citing level 11 against the vault's 12 — **is still unresolved and now compounds.** 🛑 **Settle both before keying any archive query to a level assumption.**

### To do when the token is restored

1. Add **one line** to the gitignored `.env`: `SUPABASE_ACCESS_TOKEN=sbp_…` — **or** allowlist `mcp__supabase-cutter__execute_sql` in `.claude/settings.local.json`.
2. Run both standing queries for `2026-09-14`, plus `SELECT MAX(timestamp_iso) FROM ashfall_session_rolls`.
3. Rebuild the per-character table here in the **S13–S15/S17 format** (Rolls · d20s · Nat 20 · Nat 1 · Avg d20 · To-hit · Damage rolls · Archived damage).
4. **Settle the nat-20 count** (discrepancy 1) and **[[Barrett Grimmskar]]'s contested initiative** (25 vs 15) against the archive.
5. **Mark every transcript-only roll with no archive row as `physical dice roll`** — this could not be done for S18 at all.
6. Remember the two standing gotchas: `individual_values` is a **JSON string** (parse with `(individual_values #>> '{}')::jsonb -> 0`) and the column is **`"character"`**, not `character_name`.
7. ⚠️ **The backlog is now S11, S16 and S18** — three transcript-only blocks in this file.

## Related

- [[Roll Statistics S01-S10]] · [[Campaign Dashboard]] · [[Session 11 — A Delightful Chase]] · [[Session 13 — The Cartographer of the Underkeep]] · [[Session 14 — An Angel with a Shotgun]] · [[Session 15 — Only Those Who Bleed Fire]] · [[Session 16 — What the Fuck]] · [[Session 18 — I Knew You'd Come]] · [[Vault Sync Status]] · [[DM Questions — Open]]
