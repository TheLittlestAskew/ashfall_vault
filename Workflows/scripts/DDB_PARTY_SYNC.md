# DDB Party Sheet Sync — Ashfall Britannia

Pulls **full character sheets for the party** from D&D Beyond into the vault. Ported from
the Sky Is The Limit vault's sync, adapted for Ashfall paths.

Uses DDB's character service (`character-service.dndbeyond.com/character/v5/...`). Anonymous
by default (Public sheets only); with a Cobalt token it authenticates as you and also fetches
**Campaign-Only** sheets. **All current Ashfall sheets are Campaign-Only, so a token is required.**

## Character IDs

Output files are named after the **real character name** read from each fetched sheet, so the
registry (`ddb_party.json`) only needs the **`characterId`** for each PC.

Four IDs were recovered automatically from the exported PDF filenames in
`03-Characters/01 PCs/Party Character Sheets/` (pattern `<ddb-username>_<characterId>.pdf`):

| PDF / username | characterId |
| --- | --- |
| `DrunkenPanda15` | 155551041 |
| `Red_ryno91` | 155180404 |
| `Zeuszelanne` | 155452209 |
| `greensleeveless` | 155267230 |
| `Samothy Character Sheet` | **unknown — fill in** |

The party has **7 PCs** (Flux, Vega Bloodroot, Barrett Grimmskar, Samothy Smith-Wesson,
Deanna Smith-Wesson, Zelda "Z" Whipper, Valerian Hellebore), but only 5 sheets were ever
exported — so **Samothy's ID is missing, and 2 PCs have no exported sheet at all**. To cover
everyone, add the missing `characterId`s to `ddb_party.json` (grab each from
`dndbeyond.com/characters/<id>`). The first authenticated run will reveal which recovered ID
maps to which PC (the output files get the real names).

## Authenticate (required for Campaign-Only sheets)

1. Log in to D&D Beyond in a browser.
2. **F12 → Application → Cookies → `https://www.dndbeyond.com`** → copy the value of
   **`CobaltSession`** (DevTools can read this HttpOnly cookie even though page scripts can't).
3. Put it in the vault `.env`:  `DDB_COBALT=<value>`  (a commented placeholder is already
   there). `.env` is gitignored — **keep it secret; it is your live login.** It's
   **account-wide**, so the same value you use in any other vault works here too.
4. Run `node ddb_party_sync.js`.

How it works: the script POSTs your Cobalt cookie to `auth-service.dndbeyond.com/v1/cobalt-token`,
gets a short-lived **Bearer** token, and sends it on each request — minting a fresh Bearer
every run, so you never chase the rotating token. Re-paste Cobalt only every few weeks when it
expires (fetches start returning 403).

## Run

```powershell
node ddb_party_sync.js
```

Output (overwritten each run; your hand-written PC notes are never touched):

- `03-Characters/01 PCs/Party Character Sheets/_raw/<CharacterName>.json` — full raw JSON (source of truth)
- `03-Characters/01 PCs/Party Character Sheets/<CharacterName> (DDB).md` — readable sheet

## Automatic refresh

`ashfall_pipeline_watch.js` calls this on every new session recording (right after the
keyterms step), non-fatally — an unfilled ID or network hiccup logs a warning and the
transcription pipeline carries on.

## Limits

- Markdown is a best-effort render; derived values (HP, and AC which isn't rendered) are
  approximate. The raw JSON is the source of truth.
- Auth unlocks Public + Campaign-Only as *you*, a campaign member — not other players' truly
  **Private** sheets (those are invisible even to you).
