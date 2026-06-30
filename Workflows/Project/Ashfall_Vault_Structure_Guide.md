# Ashfall Britannia Obsidian Vault — Structure & Content Guide

> **Vault name (MCP):** `ashfall-vault` (hyphenated)
> **Local path:** `C:\Users\theli\Obsidian Vaults\ashfall_vault`
> **GitHub repo:** https://github.com/TheLittlestAskew/ashfall_vault (**public** — no secrets)

This document defines every folder, file, and section in the Ashfall Britannia Obsidian vault. It is the authoritative reference for what goes where during Convo 2 vault updates. Mirrors SITL's `SITL_Vault_Structure_Guide.md`, adapted to Ashfall's layout.

> **Original setting.** Unlike SITL (Underdark / published canon), Ashfall has no published module. Location, NPC, creature, and faction lists are built from play, session by session, and live in the Setting Primer + Names & Terms glossary. Do not pre-populate them from any external source.

---

## Vault Map

```
ashfall_vault/
├── 00-Campaign-Hub/
│   ├── Campaign Dashboard.md
│   ├── House Rules & Rulings.md
│   ├── Vault Format Reference.md
│   ├── Vault Sync Status.md
│   ├── Setting Primer.md            (living worldbuilding doc)
│   ├── Names & Terms.md             (living glossary — canonical spellings)
│   └── Trackers/
│       ├── Loot Tracker S01-S10.md
│       ├── Quote Board S01-S10.md
│       ├── Profanity Ledger S01-S10.md
│       └── Roll Statistics S01-S10.md
├── 01-Sessions/
│   └── Session [##] — [Title].md
├── 02-Character_Journal/
│   └── Vega Bloodroot Journal.md
├── 03-Characters/
│   ├── PCs/
│   │   ├── [Character Name].md
│   │   └── [Character Name].pdf   (character sheet snapshots)
│   └── NPCs/
│       └── [NPC Name].md
├── 04-World-Lore/
│   ├── Locations/
│   │   └── [Location Name].md
│   ├── Regions/                    (populate as the world expands)
│   └── Factions/                   (populate as faction dynamics emerge)
├── 05-Mechanics/
│   ├── Roll_Statistics.md
│   └── Spell_Usage.md
├── 07-Flora_Fauna/
│   ├── Creatures/
│   │   └── [Creature Name].md
│   └── Plants_Fungi/
│       └── [Plant or Fungus Name].md
├── Session_Sources/
│   ├── Recordings/
│   └── Transcripts/
│       ├── Raw_Unedited/
│       │   └── [filename]_transcript.md
│       ├── Corrected/
│       │   └── [##]_[MMddyy]_corrected.md
│       └── Spell_Check_Logs/
│           └── [MMddyy]_Spell_Check_Log.md
├── DND_Sources/
│   ├── DND 5e 2024 Players Handbook.pdf
│   └── SRD_CC_v5.2.1.pdf
├── Site_HTML/                       (campaign-page HTML staged for the RC site)
└── Workflows/
```

> **Tracker rotation:** trackers split every ~10 sessions. `S01-S10` is the suggested first batch (⟦FILL: confirm starting range⟧). When a session exceeds the active file's range, create the next file (e.g. `Loot Tracker S11-S20.md`) and append there.

---

## Folder-by-Folder Breakdown

### `00-Campaign-Hub/`

The central command center. Every other vault file links back here. Updated after every session.

#### `Campaign Dashboard.md`

The single most important file in the vault — the central hub that links to everything.

**Sessions Table**

| Column | Content |
|---|---|
| Session # | Zero-padded (01, 02, etc.) |
| Date | MM/DD/YYYY |
| Title | Final chosen title (must match the session-notes file exactly) |
| Notes Link | `[[Session ## — Title]]` |
| Summary | 1–2 sentence session summary |

**NPC Companions**

| Column | Content |
|---|---|
| Name | `[[NPC Name]]` |
| Status | Active / Left / Dead / Missing / Captured |
| Joined | Session # |
| Notes | Current role, relationship to party, notable changes |

**Key Antagonists**

| Column | Content |
|---|---|
| Name | Antagonist name, backlinked |
| Affiliation | Faction, group, or independent |
| Status | Active / Defeated / Unknown / Fled |
| Last Seen | Session # and location |
| Notes | Threat level, motives, abilities observed |

**Locations**

| Column | Content |
|---|---|
| Location | `[[Location Name]]` |
| Region | Parent region if applicable |
| First Visited | Session # |
| Status | Explored / Partially Explored / Known But Unvisited / Hostile / Safe |
| Notes | Key details, who/what is there |

**Open Threads**

| Column | Content |
|---|---|
| Thread | Description of the open question or objective |
| Introduced | Session # |
| Status | Open / In Progress / Completed (Session #) / Abandoned |
| Related | Backlinks to characters, locations, sessions |

**In-Game Timeline**

| Column | Content |
|---|---|
| Phase | Narrative phase description |
| Sessions | Session range (e.g., S03–S04) |
| In-Game Time | Estimated elapsed time |
| Notes | Special rules |

#### `House Rules & Rulings.md`

Every DM ruling, homebrew decision, or house rule the DM has made during play. These override the 2024 PHB per the Source Authority Hierarchy. Organized by topic (combat, spellcasting, resting, exploration, social). Each entry: the ruling, the session it was made, context/trigger, clarifications.

```markdown
### Combat — Opportunity Attacks
**Ruling:** [Description of the DM's ruling]
**Session:** [[Session 05 — Title]]
**Context:** [What prompted the ruling]
```

#### `Setting Primer.md` & `Names & Terms.md`

**Ashfall-specific, living documents.** The Setting Primer holds confirmed worldbuilding (geography, history, factions, the nature of the ashen/sunless world, the Sun Shard). The Names & Terms glossary holds canonical spellings — it is THE reference for spell check, since there is no published source. Both grow session by session; only add confirmed material.

#### Trackers (`00-Campaign-Hub/Trackers/`)

Range-split files (`S01-S10`, then `S11-S20`, etc.). One section per session, newest first.

**Loot Tracker** — section header `## Session [##] — [Title] ([MM/DD/YYYY])`; columns: Item Name, Acquired By, Current Holder, Status (Held/Equipped/Lost/Destroyed/Given Away/Stored), Notes, Session Acquired.

**Quote Board** — one section per session; entry format:
```markdown
**[CHARACTER NAME] · [Tag]**
> "[Verbatim quote]"
```
Valid tags: `[Funny]`, `[Poignant]`, `[DM Quip]`, `[Banter]`, `[Serious]`, `[Important to Story]`. Verbatim only; preserve order. **Exclude out-of-character / above-table quotes** (speaker field "above-table" or a `→` arrow marker) from public display.

**Profanity Ledger** — running totals at top (Speaker | Campaign Total | Most Common), then per-session sections (Speaker | Curse Word | Frequency | Context).

**Roll Statistics** — per-session row plus per-character breakdowns and records (nat 20 / nat 1 counts, highs/lows). Sourced from the `ashfall_session_rolls` view. *Note: the public site hero mirrors dashboard figures for cross-page consistency, while per-PC modal counts use correct kept-die D&D rules — reconciliation is deferred; keep the vault's per-character counts kept-die-correct.*

---

### `01-Sessions/`

One markdown file per session — the **canonical session-notes artifact**.

**Filename format:** `Session [##] — [Title].md` (zero-padded number, em dash, exact final title).

**Content:** full session notes in markdown, all 8 sections (Metadata, POV Journal, Session Analysis, Character Activity, Artifacts, Logs, Quotes & Language, Archivist Notes), with `[[backlinks]]` to all characters, locations, and items. Ashfall notes use frontmatter YAML; do not clone the Pacts & Power reader — Ashfall uses its own parser (frontmatter + Metadata / Summary / Threads / NPCs / Archivist sections).

**Backlink rules within session files:** backlink every character and location on first mention; link other sessions when cross-referencing.

---

### `02-Character_Journal/`

Vega Bloodroot's in-character POV journal, collected across all sessions.

**Primary file:** `Vega Bloodroot Journal.md` (single file, growing with collapsible sections per session).

**Section format:**
```markdown
## Session [##] — [Title] ([MM/DD/YYYY])

> [!note]- Vega's Journal Entry
> [Full POV journal entry exactly as it appears in the session notes — no modifications]
```

**Rules:** paste the entry exactly as generated in Convo 1; do not edit/summarize; POV Journal Hard Limits still apply (no OOC, no metagaming, no mechanical language); use Obsidian callout syntax for collapsible sections.

---

### `03-Characters/`

#### `03-Characters/PCs/`

One file per player character (7 total), plus character-sheet PDF snapshots.

**The 7 PCs:** Vega Bloodroot (Taylor), Barrett Grimmskar, Deanna Smith-Wesson, Flux, Samothy Smith-Wesson, Valerian Hellebore, Zelda "Z" Whipper.

**Portraits** use the bare-name convention (`Vega.webp`, `Flux.webp`) — no `-card.webp` suffix. (`Barrett.webp` is currently missing; the site has a graceful fallback.)

**Frontmatter:**
```yaml
---
type: pc
race: [Race]
class: [Class/Subclass]
affiliation: [Faction, group, or allegiance]
status: [Alive / Dead / Missing / Captured / Cursed / Unknown]
player: [Player name]
first_appearance: "[[Session 01 — Title]]"
location: [Last known location]
---
```

**Sections (in order — skip if no info yet):** Description/Appearance · Backstory · Personality · Abilities & Class Features · Inventory/Loot · Relationships · Key Events (by session, backlinked) · Key Quotes (verbatim, attributed) · Related. (Vega's page also carries an **Inner Life & Evolution** section that the POV journal voice draws from.)

**Update rules:** only add transcript/source-supported info; update existing entries rather than duplicating (note the session of change); character-sheet PDFs = baseline, transcript = authority during play.

#### `03-Characters/NPCs/`

One file per NPC. **Built from play** — starts with Lt. Hargraven (DM-voiced ally) and grows. No pre-populated list (original setting).

**Frontmatter:** same as PCs minus `player`; `status` options include Dead / Missing / Captured / Imprisoned / In Hiding / On the Run / Unknown.

**Special rules for DM-voiced NPCs:** attribute quotes only when the speaker is clearly identified; if a DM line could belong to multiple NPCs, flag it in Archivist Notes rather than guessing.

---

### `04-World-Lore/`

#### `Locations/`
One file per specific location, built from play. Sections: Description · Notable Features · Inhabitants (backlinked) · History · Events (by session, backlinked) · Connections (backlinked) · Related. **Spelling** comes from the Names & Terms glossary (no external canon).

#### `Regions/` and `Factions/`
Populate as the world expands / faction dynamics emerge. Region sections: Overview · Sub-Locations · Notable Features · Factions Present · Related. Faction sections: Overview · Leadership · Members · Territory · Relationship to Party (Hostile/Neutral/Friendly/Allied/Unknown) · Key Events · Related.

---

### `05-Mechanics/`

`Roll_Statistics.md` (trends across sessions) and `Spell_Usage.md`, plus first-use class features, multiclass interaction notes, homebrew/modified rules, attunement tracking. Sections generally: Description · How It Played (with DM rulings) · Source (PHB 2024 ref / DM ruling session # / homebrew) · Related.

---

### `07-Flora_Fauna/`

Ashfall is **combat-dense** rather than fungi-heavy (SITL's Underdark emphasis does not carry over), but still document anything encountered.

#### `Creatures/`
Any creature/beast/monster/entity that is NOT a playable race. Sections: Classification (beast/monstrosity/ooze/aberration/etc.) · Physical Description · Abilities Observed · Behavior · Threat Level · Encounters (by session, backlinked) · Location · Related.

#### `Plants_Fungi/`
Any plant/fungus/moss/etc. encountered. Sections: Physical Description · Properties (Edible/Poisonous/Magical/Medicinal/etc.) · Uses · Location Found (backlinked) · Encounters · Related.

---

### `Session_Sources/`

Raw and processed source material.

- **`Recordings/`** — session audio (the transcriber's input).
- **`Transcripts/Raw_Unedited/`** — original transcriber output (`[filename]_transcript.md`). READ ONLY; never edit.
- **`Transcripts/Corrected/`** — corrected, script-formatted transcripts from Convo 1 (`[##]_[MMddyy]_corrected.md`). Speaker labels: character names ALL CAPS for in-character (`VEGA:`, `BARRETT:`, `HARGRAVEN:`); `TAYLOR (OOC):` for OOC; `TAYLOR (DM):` for DM narration; `NPC NAME:` when the DM voices a specific NPC; `[inaudible/cut off]` retained; blank line between entries; timestamps preserved.
- **`Transcripts/Spell_Check_Logs/`** — `[MMddyy]_Spell_Check_Log.md`: the correction table + resolved-flags summary + OOC/above-table sections identified.

> **Filename encoding note:** Ashfall vault filenames use URL-encoded em-dashes (`%E2%80%94`) in some tooling contexts; use Python's `urllib.parse.quote()` for reliable encoding in shell loops.

---

### `DND_Sources/`

Reference material (read-only during Convo 2). Ashfall has **no** Underdark/Forgotten Realms source files — only the generic rules references (2024 PHB, SRD). The Setting Primer + Names & Terms glossary (in `00-Campaign-Hub/`) replace the external canon lists SITL uses.

---

### `Site_HTML/`

Campaign-page HTML staged for the public Rectrix Caedere site (`rectrixcaedere.com`). Files ≥19KB deploy via local Git, not the GitHub MCP (which truncates above ~15–21KB).

---

## Backlink Conventions

| Content Type | Backlink Format | Example |
|---|---|---|
| PC names | `[[Character Name]]` | `[[Vega Bloodroot]]`, `[[Barrett Grimmskar]]` |
| NPC names | `[[NPC Name]]` | `[[Lt. Hargraven]]` |
| Locations | `[[Location Name]]` | — |
| Sessions | `[[Session ## — Title]]` | `[[Session 16 — The Ashen Road]]` |
| Factions | `[[Faction Name]]` | — |
| Creatures | `[[Creature Name]]` | — |
| Plants/Fungi | `[[Plant Name]]` | — |

**Rules:** backlink on first mention within a section; the Campaign Dashboard links to everything; every page ends with a `## Related` section.

---

## File Naming Conventions Summary

| Type | Format | Example |
|---|---|---|
| Session Notes | `Session [##] — [Title].md` | `Session 16 — The Ashen Road.md` |
| Raw/Unedited Transcript | `[filename]_transcript.md` | `session07_transcript.md` |
| Corrected Transcripts | `[##]_[MMddyy]_corrected.md` | `07_051126_corrected.md` |
| Spell Check Logs | `[MMddyy]_Spell_Check_Log.md` | `051126_Spell_Check_Log.md` |
| PCs | `[Character Name].md` | `Vega Bloodroot.md` |
| NPCs | `[NPC Name].md` | `Lt. Hargraven.md` |
| Locations / Regions / Factions | `[Name].md` | — |
| Creatures / Plants & Fungi | `[Name].md` | — |
| Trackers | `[Tracker] S##-S##.md` | `Loot Tracker S01-S10.md` |

---

## Update Cadence

Every file is updated as part of the **Convo 2 — Post-Session Update Checklist** in the master ruleset. The checklist ensures nothing is missed.

**Pre-update requirement:** before writing any vault files, read Vault Sync Status → Vault Format Reference → Campaign Dashboard → Vega's PC page → Vega's Journal.

**Post-update:** Git plugin auto-commits/pushes (or push manually). **This repo is public — never commit secrets.**
