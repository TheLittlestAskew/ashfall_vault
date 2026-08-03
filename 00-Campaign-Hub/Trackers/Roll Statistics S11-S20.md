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

## Related

- [[Roll Statistics S01-S10]] · [[Campaign Dashboard]] · [[Session 11 — A Delightful Chase]] · [[Vault Sync Status]] · [[DM Questions — Open]]
