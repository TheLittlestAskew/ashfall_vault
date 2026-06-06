# Vault Format Reference

> Canonical append formats, established at S01 propagation (06/06/2026). Convo 2 reads this file every session — keep formats stable; change here first if a format must evolve.

## File / Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Session notes | `01-Sessions/Session ## — Title.md` (em dash) | `Session 01 — Graduation Day.md` |
| Trackers | `00-Campaign-Hub/Trackers/[Tracker] S##-S##.md` (rotate every 10 sessions) | `Loot Tracker S01-S10.md` |
| PC/NPC pages | `Character Name.md` in `03-Characters/01 PCs` / `02 NPCs` | — |
| Locations | `04-World-Lore/Locations/Name.md` (⚑ descriptive title if unnamed in-fiction) | — |
| Creatures | `07-Flora_Fauna/Creatures/Name.md` | — |
| Backlinks | `[[Vega Bloodroot]]`, `[[Session 01 — Graduation Day]]`, display override with `\|` | — |
| Flags | `⚑` = provisional/unconfirmed — resolve via DM, then update [[Names & Terms]] | — |

## Session Note (8 sections)

Frontmatter: `session, title, date, roll-archive-date, campaign, party-level, tags`.
Sections: 1 Metadata (table) · 2 POV pointer → journal · 3 Analysis (Narrative Summary / Setting / Locations table / Quests / Scenes / Themes) · 4 Character Activity (Party Structure / NPCs table / Reputation) · 5 Artifacts (pointer → Loot Tracker) · 6 Logs (Encounters / Initiative / Encounter Summary / Roll Log pointer) · 7 Quotes (pointer + final title + alternates) · 8 Archivist Notes (Patterns / Flags table).

## Tracker Append Formats

- **Loot:** `## S## — Title (MM/DD/YYYY)` + table `Owner | Item | State / Context`
- **Quote Board:** `## S## — Title (date)` + per-quote block: bold attribution line `[[Name]] (Player) · [Tag]` then `> "quote"`. Tags: Funny/Poignant/DM Quip/Banter/Serious
- **Profanity:** `## S## — Title (date)` + table `Speaker | fuck | shit | bitch | damn/goddamn | motherfucker | Session Total`, then update `## Running Totals`
- **Roll Stats:** `## S## — Title (rolls keyed YYYY-MM-DD)` + Per-Character table (`Rolls | Nat 20s | Nat 1s | Notable`) + Session Records + Initiative Orders + Archive Flags

## PC Page Layout

H1 name → `**Played by:**` → info table (Race/Class/Level/Signature/...) → `## Inner Life & Evolution` (Vega only, required) → `## Build Notes` → `## Items` (pointer to Loot Tracker) → `## Key Events` (append `- **S##:** ...` per session) → `## Quotes` → `## Relationships`.

## NPC Page Layout

H1 name → provisional flag blockquote → info table (Role/Race/Status/Last Known Location) → `## History` (append `- **S##:** ...`) → `## Quotes` → `## Open Threads`.

## Journal Format

`02-Character_Journal/Vega Bloodroot Journal.md` — append one collapsible callout per session:
`> [!note]- S## — Dateline (Title)` with the entry inside the callout. POV Hard Limits apply (no OOC, no player names, no mechanics, no campaign name).

## Dashboard Maintenance

Sessions table (newest on top) · Active Threads (move resolved to Resolved with `~~strikethrough~~` + session ref) · NPC Directory (status emoji: 🟢 alive/ally, 🔴 threat, ⚪ unknown, ⚫ dead) · In-Game Timeline (append known dates).

## Sync Discipline

Write order: creates → appends → edits → **Vault Sync Status last** (completion matrix + changelog row).
