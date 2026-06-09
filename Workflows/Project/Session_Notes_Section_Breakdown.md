# SESSION NOTES SECTION BREAKDOWN — ASHFALL BRITANNIA

This is a breakdown of the expectations of the outputs of the D&D session notes. When asked to create session notes, this document shows what should be in the notes and how they should be arranged. Section definitions and table column specs are campaign-agnostic; the illustrative examples below are format-only (Ashfall is an original setting — never treat example content as canon).

> **Canonical artifact:** the full 8-section note lives in `01-Sessions/Session ## — Title.md` (markdown). `.docx` is retired.

---

#### [SESSION METADATA CHART]

\*Generate a table with NO header row, in this exact vertical order:

###### SESSION METADATA:

Campaign Name | "Ashfall Britannia" Campaign

Session Number | [Formatted '01', '02', etc.]

Session Date | [Formatted MM/DD/YYYY]

Start Location | [Location at start of transcript]

End Location | [Location at end of transcript]

Party Present | [List of PCs/NPCs present]

Spelling Checked | [Yes/No]

###### Example (format only):

|Field|Detail|
|-|-|
|Session Number|[Formatted '01', '02', etc.]|
|Session Date|[Formatted MM/DD/YYYY]|
|Start Location|[Location at start of transcript]|
|End Location|[Location at end of transcript]|
|Party Present|[List of Party PCs/NPCs present]|
|Total Rolls Logged|[roll count]|
|Party Level|[Party members indicated to be leveling up after this session]|

---

#### [CHARACTER POV]

VEGA BLOODROOT POV JOURNAL (STORYTELLING EXCEPTION)

Track the session exclusively through the lens of Vega Bloodroot (Half-Orc Barbarian, Path of the Wild Heart).

Storytelling Wiggle Room: Unlike the rest of the objective archive, this section must be output as an engaging, in-character story. You are permitted variance in wording and narrative flow to make it read as a true journal entry, provided the underlying events remain factually accurate to the session.

Personality Analysis Engine: Continuously analyze Vega's actions and decisions as the storyline progresses. Evolve her retellings to stay completely true to her character — her rage and the discipline she holds it with, her loyalties, her temper, her growth.

Capture: Emotional arcs, memories, shifting loyalties, temper, moments of growth. Track the evolving meaning/use of key items.

⚠️ **POV Journal Hard Limits apply** (see master ruleset): no OOC, no above-table, no metagame numbers/labels, in-character names only. Use the ⟦Vega voice guide⟧ and Vega's "Inner Life & Evolution" page for her current emotional state before writing.

Example (format only — do not treat as canon):

> The ash never stops falling. I have learned to taste it now, to know the difference between the grey that means a dead fire and the grey that means a living one somewhere ahead. We did not come this far to turn back at the dark. . .

---

#### [SESSION ANALYSIS]

[NARRATIVE SUMMARY]

Detail all plot developments equally without chronological bias. Note unusual circumstances (split sessions, absent players). Include player-added flavor, vivid action descriptions, stylistic narration, and table jokes/culture.

[SESSION SETTING]

Session starting location and circumstances, and in-game days since the beginning of the story (if known).

[LOCATIONS]

Details of all locations visited during the session. Include:

* General Location: Nation/State/City
* Territory Information
* Building/Specific Location

|Location|Description|Notable Details|
|-|-|-|
||||
||||

[QUESTS/OBJECTIVES]

A running Quests/Objectives/Threads list to monitor open/unresolved mysteries, political fallout, and open storylines. Structure with parent threads and sub-threads. Mark as "Completed (This Session)" when resolved.

[SCENE/TIMELINE BREAKDOWN]

A bulleted, chronological breakdown of scenes.

[THEMES & EMOTIONAL BEATS]

Highlight recurring motifs and emotional arcs. Ashfall's emotional core is **defiant hope** — a sunless world, and a party that refuses to live as if the light is gone (the Sun Shard / "Solar Fist" is the central relic). Document dream sequences for implied themes/symbolism (do not assert unconfirmed meanings).

\-

---

#### [CHARACTER ACTIVITY]

* [PARTY STRUCTURE & SUBGROUPS] (Table Format)

Mandatory Columns: Location, Characters, Objective (explicitly list each separate location and the specific characters present), Status (Ongoing, Success, Failure)

* [NPCS] (Table Format) — include all NPCs mentioned.

Mandatory Columns: Name, Race/Class, Affiliations, Last Interaction, Last Known Location, Status (Dead, Missing, Captured, Imprisoned, In Hiding, On the Run, Unknown)

* [REPUTATION & RELATIONSHIPS]

Evolving standing with factions, shifting alliances/rivalries, and changing internal party dynamics.

\-

---

#### [ARTIFACTS]

* [LOOT & ITEMS] (Table Format)

Mandatory Columns: Character/Owner, Item/Artifact, State/Context.

\-

---

#### [LOGS]

* [ENCOUNTERS] (Table Format)

Mandatory Columns: Enemies, Location, Party/Allies Present, Trigger, Outcome

* [INITIATIVE] (Table Format)

Mandatory Columns: Character, Initiative Roll, Turn Order (one table per combat/reason initiative is rolled; infer enemy placement from turn order if unstated).

* [ENCOUNTER SUMMARY]

A brief summary of the results (and implications of loss/success) after the tables.

* [FULL ROLL LOG] (Table Format)

Generate a log of rolls (sourced from the `ashfall_session_rolls` view, cross-referenced with the transcript).

Mandatory Columns: Character/NPC | Roll/Check | Result | Context / Outcome

Attribute rolls to the correct PC/NPC (resolve null-character rolls by `user_id`). Identify individual and party-wide roll trends. Background-fill all rows associated with combat/initiative rounds. Note that Ashfall is combat-dense (40%+ attacks/damage), so this log is usually large.

---

#### [QUOTES & LANGUAGE]

* [QUOTE BOARD]

Verbatim quotes tagged by character and type (funny, poignant, DM quip, banter, serious). **Exclude out-of-character / above-table quotes** (identified by "above-table" in the speaker field or a `→` arrow marker) from public-facing display.

* [PROFANITY RECORD] (Table Format)

Mandatory Columns: Speaker, Curse Word, Frequency, Context. \*One row per character/curse word combo.

* [ALTERNATE TITLE OPTIONS]

A list of 5 potential session titles (Humorous, Dramatic, Serious, Straightforward, Quote-based). Record the final chosen title once confirmed.

\-

---

#### [ARCHIVIST NOTES]

* [PATTERNS, PROGRESS & FUTURE IMPLICATIONS] — note patterns in tactics or story motifs.

* [CONTINUITY FLAGS, MISSING INFO & AMBIGUITIES] — record all ambiguities, continuity discrepancies, or [inaudible] segments requiring user clarification. Include first-seen proper nouns awaiting confirmation for the Names & Terms glossary.

\-

\*END TEMPLATE\*

NOTE: All sections that should be formatted as tables must be generated as a structured table already, without the need for the user to insert the table from text.
