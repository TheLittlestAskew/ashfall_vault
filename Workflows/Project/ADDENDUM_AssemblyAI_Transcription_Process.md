# ADDENDUM: AssemblyAI Transcription Process — ASHFALL BRITANNIA

**Applies to:** Convo 1, Step 0 (Transcribe), Step 2 (Spell Check), Step 3 (Corrected Transcript)
**Script location:** `ashfall_vault\Workflows\ashfall_transcribe\transcribe.js`

> Adapted from SITL's transcription addendum. The mechanics are identical; the vocabulary is Ashfall-specific and still being built (this is an original setting with no canon term list).

---

## Overview

Session recordings are transcribed locally via a Node.js script that calls the AssemblyAI API with campaign-specific vocabulary pre-loaded. This produces a Raw/Unedited Transcript saved as `.md` in the vault, which is then reviewed, corrected, and moved to the Corrected folder as part of the normal Convo 1 workflow.

> **Ashfall state:** most early sessions still need transcribing — the campaign's roll data exists, but transcripts are being generated retroactively. Step 0 (transcribe) is usually the real starting point.

---

## Prerequisites

1. **Node.js v18+** installed
2. **AssemblyAI API key** — set as environment variable `ASSEMBLYAI_API_KEY`. **Do NOT hardcode it in the script or commit a `.env` to this PUBLIC repo.** Add `*.env` to `.gitignore`; if a key was ever committed, rotate it.
3. **Session recording** (.mp3, .mp4, .m4a, .wav, .webm, .ogg, .flac) placed in `ashfall_vault\Session_Sources\Recordings\`

---

## How to Run

### Option A: Interactive Picker (Recommended)
```
cd C:\Users\theli\ashfall_vault\Workflows\ashfall_transcribe
node transcribe.js
```
Lists all recordings in the Recordings folder sorted newest-first. Pick by number.

### Option B: Direct Filename
```
node transcribe.js session07.mp3
node transcribe.js --speakers 9 session07.mp3   # DM + 7 players + a guest
```
⚠️ Filenames with spaces **must** be wrapped in quotes. Include the file extension.

### What Happens
1. Script uploads the audio file to AssemblyAI
2. Submits a transcription request with the Ashfall keyterms list + custom spelling corrections
3. Polls until transcription completes (typically 2–5 minutes depending on length)
4. Saves the formatted transcript to `Session_Sources\Transcripts\Raw_Unedited\[filename]_transcript.md`
5. Prints a summary with duration, confidence score, word count, and speaker count

---

## Vault File Flow

```
Session_Sources/
├── Recordings/
│   └── session07.mp3                       ← original audio
└── Transcripts/
    ├── Raw_Unedited/
    │   └── session07_transcript.md         ← script output
    └── Corrected/
        └── 07_[MMddyy]_corrected.md         ← after spell check + formatting
```

**Raw → Corrected process:**
1. Run `transcribe.js` → Raw/Unedited Transcript lands in `Transcripts/Raw_Unedited/`
2. Claude performs Step 2 spell check against the Raw/Unedited Transcript
3. Taylor confirms corrections
4. Claude applies corrections, reformats to script format, saves to `Transcripts/Corrected/` as `[Session#]_[MMddyy]_corrected.md`, and writes the spell-check log to `Transcripts/Spell_Check_Logs/`

---

## What the Script Does to Improve Accuracy

### Keyterms Prompt
Tells AssemblyAI's model to prioritize recognizing campaign-specific words during transcription. **⟦FILL: transcribe config⟧** — the Ashfall keyterms list is built from the Names & Terms glossary and grows each session. Seed it at minimum with the known proper nouns:

- Player characters: Vega Bloodroot, Barrett Grimmskar, Deanna Smith-Wesson, Samothy Smith-Wesson, Flux, Valerian Hellebore, Zelda Whipper
- Key NPC: Lt. Hargraven
- Setting place-names, factions, and recurring NPCs **as they emerge** (add after DM/Taylor confirmation)

Max 1,000 keyterms — plenty of headroom.

### Custom Spelling Corrections
Post-transcription find-and-replace for known misheard variants. Populate as variants are discovered during spell check.

⚠️ **AssemblyAI limitation:** the `custom_spelling` `from` and `to` values must each be **single words only**. Multi-word corrections (e.g. "Vega Bloodroot", "Smith-Wesson") are handled by keyterms instead, which boosts recognition of the correct phrase during transcription.

### Speaker Diarization
Configured to expect **8 speakers (DM + 7 players)** by default — SITL's default was 7. Adjust with `--speakers`. AssemblyAI labels speakers A–H. In practice:
- The model sometimes identifies speakers by character/player name
- A speaker with mic-quality shifts can get split into two labels
- Quieter voices are most commonly mislabeled
- ⟦FILL: player languages / accents⟧ — account for any non-native English speakers; prefer context over auto-correction
- **Speaker mapping must be verified each session during the spell-check step**

---

## Maintaining the Vocabulary

As the campaign progresses, add new terms to the script. Edit `transcribe.js` directly:
- **New NPCs/locations/creatures/factions:** add to the keyterms list (after confirmation; this is canon-building for an original setting)
- **New misheard variants:** add to the custom-spelling rules (single words only)
- After each session's spell check, Claude should recommend any new terms to add — and the same terms get added to the Names & Terms glossary.

---

## Recordings Storage

- **Primary (vault):** `C:\Users\theli\ashfall_vault\Session_Sources\Recordings\`
- **Original backup (OneDrive):** ⟦FILL: OneDrive Ashfall recordings path⟧

The script points to the vault copy. Originals remain in OneDrive as backup.

---

## Impact on Convo 1 Workflow

The transcription script changes the **input** to Convo 1 but not the process itself. The spell-check step is still required — the script catches most known terms but will miss new names, unusual pronunciations, and context-dependent corrections. For Ashfall specifically, expect **more** first-seen proper nouns than a published-setting campaign, because the glossary starts near-empty and grows.

---

## Troubleshooting

| Issue | Solution |
|---|---|
| "File not found" | Wrap filename in quotes if it has spaces. Include the file extension. |
| "Access denied" | You ran the .js file directly instead of with `node`. Use `node transcribe.js`. |
| "custom_spelling 'to' fields must contain only one word" | A `to` value has multiple words. Fix to a single word or remove and rely on keyterms. |
| API key error | Set `ASSEMBLYAI_API_KEY` environment variable. Never hardcode/commit on this public repo. |
| Old version running | Run the copy in `Workflows\ashfall_transcribe\`, not an old copy elsewhere. |
| Transcripts saving as .txt | Update script — output extension should be `.md`. |
| Speaker labels wrong | Diarization varies between runs. Always verify mapping during spell check. |
