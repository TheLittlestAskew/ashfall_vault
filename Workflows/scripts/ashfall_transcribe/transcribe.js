/**
 * ============================================================
 * ASHFALL BRITANNIA AssemblyAI Transcriber
 * ============================================================
 *
 * Transcribes Ashfall Britannia D&D session recordings using
 * AssemblyAI with campaign-specific vocabulary boosting and
 * custom spelling corrections pre-loaded.
 *
 * Adapted from sitl_transcribe.js (Sky Is The Limit campaign).
 *
 * LOCATION:
 *   C:\Users\theli\Obsidian Vaults\ashfall_vault\Workflows\scripts\ashfall_transcribe\transcribe.js
 *
 * PREREQUISITES:
 *   1. Node.js installed (v18+)
 *   2. AssemblyAI API key (https://www.assemblyai.com/app/account)
 *   3. ASSEMBLYAI_API_KEY in .env at the ashfall_vault root,
 *      OR it falls back to the sitl_vault root .env.
 *   4. Session recordings in: ashfall_vault\Session_Sources\Recordings\
 *
 * USAGE:
 *   cd C:\Users\theli\Obsidian Vaults\ashfall_vault\Workflows\scripts\ashfall_transcribe
 *   node transcribe.js                              (interactive picker)
 *   node transcribe.js "021326 Ashfall Brittania Recording.mp3"
 *   node transcribe.js --speakers 9 session.mp3     (override speaker count)
 *
 * SUPPORTED FORMATS: mp3, mp4, m4a, wav, webm, ogg, flac
 * ============================================================
 */

const fs = require("fs");
const path = require("path");

// ── CONFIG ──────────────────────────────────────────────────
const BASE_URL = "https://api.assemblyai.com";

// Default directories — all paths relative to the ashfall_vault
// Vault root derived from this script's location (<vault>\Workflows\scripts\ashfall_transcribe\).
const VAULT_ROOT = path.resolve(__dirname, "..", "..", "..");
const RECORDINGS_DIR = path.join(VAULT_ROOT, "Session_Sources", "Recordings");
const TRANSCRIPTS_DIR = path.join(VAULT_ROOT, "Session_Sources", "Transcripts", "Raw_Unedited");

// ── Load ASSEMBLYAI_API_KEY (no dotenv dependency needed) ───
// Checks ashfall_vault\.env first, then falls back to sitl_vault\.env.
function loadApiKey() {
  if (process.env.ASSEMBLYAI_API_KEY) return process.env.ASSEMBLYAI_API_KEY;
  const candidates = [
    path.join(VAULT_ROOT, ".env"),
    String.raw`C:\Users\theli\Obsidian Vaults\sitl_vault\.env`,
  ];
  for (const envPath of candidates) {
    if (!fs.existsSync(envPath)) continue;
    const text = fs.readFileSync(envPath, "utf-8");
    const match = text.match(/^\s*ASSEMBLYAI_API_KEY\s*=\s*(.+)\s*$/m);
    if (match) return match[1].trim().replace(/^["']|["']$/g, "");
  }
  return null;
}

const API_KEY = loadApiKey();

if (!API_KEY) {
  console.error("ERROR: Missing ASSEMBLYAI_API_KEY.");
  console.error("Set it in .env at the ashfall_vault root (or sitl_vault root).");
  process.exit(1);
}

// Audio file extensions to look for when listing recordings
const AUDIO_EXTENSIONS = [".mp3", ".mp4", ".m4a", ".wav", ".webm", ".ogg", ".flac"];

// ── ASHFALL CAMPAIGN VOCABULARY ─────────────────────────────
// Words/phrases AssemblyAI should prioritize recognizing.
// Up to 1,000 terms for Universal-3 Pro.
//
// NOTE: Ashfall Britannia is an original setting with no published
// lore. This list is seeded ONLY from confirmed campaign data
// (PC roster, key NPC, subclasses). Grow it session by session
// from the vault's Names & Terms glossary as proper nouns are
// confirmed — never add unconfirmed/guessed lore terms.

const ASHFALL_KEYTERMS = [

  // ── Campaign / Setting ──
  "Ashfall Britannia",
  "Ashfall",
  "Britannia",

  // ── Player Characters ──
  "Vega Bloodroot",
  "Vega",
  "Barrett Grimmskar",
  "Barrett",
  "Grimmskar",
  "Deanna Smith-Wesson",
  "Deanna",
  "Smith-Wesson",
  "Flux",
  "Samothy Smith-Wesson",
  "Samothy",
  "Valerian Hellebore",
  "Valerian",
  "Hellebore",
  "Zelda Whipper",
  "Zelda",
  "Whipper",

  // ── Player Names (OOC) ──
  "Taylor",
  "Madi",
  "Christie",
  "Jill",
  "Josh",
  "Chase",
  "Doug",
  "Gus",
  "Naruto",
  "Corey",

  // ── Key NPCs (S01 — provisional spellings per Names & Terms) ──
  "Lt. Hargraven",
  "Lieutenant Hargraven",
  "Captain Bron Hargraven",
  "Hargraven",
  "Commander Thornfall",
  "Thornfall",
  "Inspector Meridia Vale",
  "Meridia Vale",
  "Commander Varan",
  "Varan",
  "the Beast Binder",
  "Beast Binder",
  "Mistress of Hunger",
  "Florence",

  // ── Factions / Terms (S01) ──
  "Ashwardens",
  "Ashwarden",
  "feral vampire thrall",
  "thrall",
  "thralls",
  "Nova Twins",
  "kitty-taur",
  "Steel Defender",

  // ── Magic Items (S01) ──
  "Masquerade Tattoo",
  "Flux's Fantabulous Flipside Frock",
  "Cloak of Fashion",
  "Power Pole",
  "Directional Doohickey",
  "Peter Pistol",
  "parlor gun",
  "bag of holding",

  // ── Spells / Mechanics seen in play (S01) ──
  "Starry Wisp",
  "Moonbeam",
  "Thunderwave",
  "Bane",
  "Hunter's Mark",
  "Ensnaring Strike",
  "Perforating Shot",
  "Finger Guns",
  "Spiny Shield",
  "Risk Die",
  "Magic Missile",
  "Savage Attacker",
  "Reckless Attack",
  "Returning Weapon",
  "Repeating Shot",

  // ── Races ──
  "half-orc",
  "changeling",
  "half-elf",
  "halfling",

  // ── Classes / Subclasses (party) ──
  "Barbarian",
  "Path of the Wild Heart",
  "Gunslinger",
  "Spellslinger",
  "Monster Slayer",
  "Arcane Trickster",
  "Artificer",
  "Battle Smith",
  "Circle of the Land",
  "College of the Moon",
  "Champion",

  // ── D&D Mechanics (setting-agnostic) ──
  "Sneak Attack",
  "Action Surge",
  "Second Wind",
  "Rage",
  "Wild Shape",
  "Bardic Inspiration",
  "Flash of Genius",
  "multiclass",
  "short rest",
  "long rest",
  "death save",
  "death saves",
  "opportunity attack",
  "saving throw",
  "ability check",
  "initiative",
  "darkvision",
  "cantrip",
  "concentration",
  "attunement",
  "proficiency",
  "disadvantage",
  "advantage",
  "natural twenty",
  "natural one",
  "hit points",
  "armor class",
];

// ── CUSTOM SPELLING CORRECTIONS ─────────────────────────────
// Post-transcription find-and-replace for common misheard words.
// AssemblyAI requires 'to' values to be ONE word only —
// multi-word phrases are handled by keyterms_prompt instead.
//
// Seeded with conservative guesses for the confirmed roster only.
// Grow this from each session's spell-check log.

const ASHFALL_CUSTOM_SPELLING = [
  // Character names
  { from: ["Vegas", "Vega's"], to: "Vega" },
  { from: ["Grimskar", "Grimscar", "Grimsgar"], to: "Grimmskar" },
  { from: ["Samathy", "Sammothy", "Samith"], to: "Samothy" },
  { from: ["Valerion", "Valarian", "Valerien"], to: "Valerian" },
  { from: ["Helebore", "Hellebor", "Hellbore"], to: "Hellebore" },

  // NPC names
  { from: ["Hargrave", "Hargreaves"], to: "Hargraven" },
  { from: ["Thornfell", "Thornful"], to: "Thornfall" },
  { from: ["Varen", "Varin"], to: "Varan" },
  // NOTE: do NOT add common-word mishears (Bean→Bane, baked→Bane) here —
  // custom_spelling is a global replace and would corrupt real words.
  // Those stay in the per-session spell-check cycle; keyterms boost handles the rest.
];

// ── HELPER FUNCTIONS ────────────────────────────────────────

const readline = require("readline");

function log(msg) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] ${msg}`);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Prompt the user for input on the command line.
 */
function prompt(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

/**
 * List audio files in the recordings directory.
 * Returns an array of { name, fullPath, size, modified }.
 */
function listRecordings() {
  if (!fs.existsSync(RECORDINGS_DIR)) {
    return [];
  }

  return fs.readdirSync(RECORDINGS_DIR)
    .filter(f => AUDIO_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .map(f => {
      const fullPath = path.join(RECORDINGS_DIR, f);
      const stats = fs.statSync(fullPath);
      return {
        name: f,
        fullPath,
        sizeMB: (stats.size / (1024 * 1024)).toFixed(1),
        modified: stats.mtime,
      };
    })
    .sort((a, b) => b.modified - a.modified); // newest first
}

/**
 * Upload a local file to AssemblyAI's servers.
 * Returns the upload URL to use for transcription.
 */
async function uploadFile(filePath) {
  log(`Uploading ${path.basename(filePath)}...`);

  const fileData = fs.readFileSync(filePath);
  const response = await fetch(`${BASE_URL}/v2/upload`, {
    method: "POST",
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/octet-stream",
    },
    body: fileData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  log(`Upload complete. URL: ${data.upload_url.substring(0, 60)}...`);
  return data.upload_url;
}

/**
 * Submit a transcription request with Ashfall vocabulary config.
 * Returns the transcript ID for polling.
 */
async function submitTranscription(audioUrl, speakersExpected) {
  log(`Submitting transcription with Ashfall vocabulary (${speakersExpected} speakers expected)...`);

  const requestBody = {
    audio_url: audioUrl,

    // Use Universal-3 Pro for best accuracy + keyterms support,
    // fall back to Universal-2 if U3 Pro can't handle the audio
    speech_models: ["universal-3-pro", "universal-2"],

    // ── Ashfall Campaign Vocabulary ──
    keyterms_prompt: ASHFALL_KEYTERMS,

    // ── Custom Spelling Corrections ──
    custom_spelling: ASHFALL_CUSTOM_SPELLING,

    // ── Speaker Diarization ──
    // DM + 7 players = 8 by default; override with --speakers N
    speaker_labels: true,
    speakers_expected: speakersExpected,

    // ── General Settings ──
    language_code: "en_us",
    punctuate: true,
    format_text: true,
  };

  const response = await fetch(`${BASE_URL}/v2/transcript`, {
    method: "POST",
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Submission failed: ${response.status} — ${errorBody}`);
  }

  const data = await response.json();
  log(`Transcription queued. ID: ${data.id}`);
  return data.id;
}

/**
 * Poll until the transcription is complete.
 * Returns the full transcript response object.
 */
async function pollForCompletion(transcriptId) {
  log("Waiting for transcription to complete...");

  const pollUrl = `${BASE_URL}/v2/transcript/${transcriptId}`;

  while (true) {
    const response = await fetch(pollUrl, {
      headers: { Authorization: API_KEY },
    });

    const data = await response.json();

    if (data.status === "completed") {
      log("Transcription complete!");
      return data;
    }

    if (data.status === "error") {
      throw new Error(`Transcription failed: ${data.error}`);
    }

    log(`Status: ${data.status} — polling again in 15s...`);
    await sleep(15000);
  }
}

/**
 * Format the transcript with speaker labels and timestamps.
 * Outputs in script format compatible with the Ashfall workflow.
 */
function formatTranscript(transcriptData, sourceFileName) {
  const lines = [];

  lines.push("# Ashfall Britannia Session Transcript");
  lines.push(`# Source: ${sourceFileName}`);
  lines.push(`# Transcribed: ${new Date().toISOString()}`);
  lines.push(`# Audio duration: ${Math.round(transcriptData.audio_duration / 60)} minutes`);
  lines.push(`# Model: ${transcriptData.speech_model || "universal-3-pro"}`);
  lines.push(`# Confidence: ${(transcriptData.confidence * 100).toFixed(1)}%`);
  lines.push("");
  lines.push("---");
  lines.push("");

  if (transcriptData.utterances && transcriptData.utterances.length > 0) {
    // Speaker-labeled format
    for (const utterance of transcriptData.utterances) {
      const startTime = formatTimestamp(utterance.start);
      const speaker = utterance.speaker || "UNKNOWN";

      lines.push(`[${startTime}] SPEAKER ${speaker}: ${utterance.text}`);
      lines.push("");
    }
  } else {
    // Plain text fallback (no speaker labels)
    lines.push(transcriptData.text);
  }

  return lines.join("\n");
}

/**
 * Convert milliseconds to HH:MM:SS timestamp format.
 */
function formatTimestamp(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// ── MAIN ────────────────────────────────────────────────────

async function main() {
  let args = process.argv.slice(2);

  // --speakers N override (default: DM + 7 PCs = 8)
  let speakersExpected = 8;
  const speakersIdx = args.indexOf("--speakers");
  if (speakersIdx !== -1) {
    speakersExpected = parseInt(args[speakersIdx + 1], 10);
    if (!Number.isInteger(speakersExpected) || speakersExpected < 1) {
      console.error("ERROR: --speakers requires a positive integer.");
      process.exit(1);
    }
    args = args.filter((_, i) => i !== speakersIdx && i !== speakersIdx + 1);
  }

  let input;
  let outputPath;

  if (args.length === 0) {
    // ── Interactive mode: list recordings and let user pick ──
    console.log(`
╔══════════════════════════════════════════════╗
║   Ashfall AssemblyAI Transcriber             ║
║   Ashfall Britannia Campaign                 ║
╚══════════════════════════════════════════════╝
`);
    console.log(`Recordings folder: ${RECORDINGS_DIR}`);
    console.log(`Vocabulary loaded:  ${ASHFALL_KEYTERMS.length} keyterms`);
    console.log(`Custom spellings:   ${ASHFALL_CUSTOM_SPELLING.length} correction rules\n`);

    const recordings = listRecordings();

    if (recordings.length === 0) {
      console.log("No audio files found in the recordings folder.");
      console.log(`Looked in: ${RECORDINGS_DIR}`);
      console.log(`\nYou can also pass a file path directly:`);
      console.log(`  node transcribe.js "C:\\path\\to\\recording.mp3"\n`);
      process.exit(0);
    }

    console.log("Available recordings (newest first):\n");
    recordings.forEach((r, i) => {
      const date = r.modified.toLocaleDateString("en-US", {
        month: "2-digit", day: "2-digit", year: "2-digit"
      });
      console.log(`  [${i + 1}]  ${r.name}  (${r.sizeMB} MB, ${date})`);
    });

    console.log(`\n  [0]  Enter a custom file path`);
    console.log("");

    const choice = await prompt("Pick a file number: ");
    const choiceNum = parseInt(choice, 10);

    if (choiceNum === 0) {
      input = await prompt("Enter file path or URL: ");
    } else if (choiceNum >= 1 && choiceNum <= recordings.length) {
      input = recordings[choiceNum - 1].fullPath;
    } else {
      console.error("Invalid selection.");
      process.exit(1);
    }

    console.log("");
  } else {
    // ── CLI mode: file path passed as argument ──
    input = args[0];
    outputPath = args[1] || null;
  }

  let audioUrl;

  // Determine if input is a URL or local file
  if (input.startsWith("http://") || input.startsWith("https://")) {
    audioUrl = input;
    log(`Using remote URL: ${input}`);
  } else {
    // If just a filename (no path separators), look in RECORDINGS_DIR
    if (!input.includes(path.sep) && !input.includes("/")) {
      const inRecordings = path.join(RECORDINGS_DIR, input);
      if (fs.existsSync(inRecordings)) {
        input = inRecordings;
      }
    }

    if (!fs.existsSync(input)) {
      console.error(`ERROR: File not found: ${input}`);
      console.error(`Also checked: ${path.join(RECORDINGS_DIR, path.basename(input))}`);
      process.exit(1);
    }
    audioUrl = await uploadFile(input);
  }

  // Submit and poll
  const transcriptId = await submitTranscription(audioUrl, speakersExpected);
  const result = await pollForCompletion(transcriptId);

  // Format output
  const formatted = formatTranscript(result, path.basename(input));

  // Determine output path — default to Raw_Unedited transcripts folder
  if (!outputPath) {
    if (!fs.existsSync(TRANSCRIPTS_DIR)) {
      fs.mkdirSync(TRANSCRIPTS_DIR, { recursive: true });
      log(`Created output folder: ${TRANSCRIPTS_DIR}`);
    }
    const baseName = path.basename(input).replace(/\.[^.]+$/, "");
    outputPath = path.join(TRANSCRIPTS_DIR, `${baseName}_transcript.md`);
  }

  fs.writeFileSync(outputPath, formatted, "utf-8");
  log(`Transcript saved to: ${outputPath}`);

  // Print summary
  console.log(`
╔══════════════════════════════════════════════╗
║   Transcription Complete                     ║
╠══════════════════════════════════════════════╣
║  Duration:    ${String(Math.round(result.audio_duration / 60) + " minutes").padEnd(30)}║
║  Confidence:  ${String((result.confidence * 100).toFixed(1) + "%").padEnd(30)}║
║  Words:       ${String(result.words?.length || "N/A").padEnd(30)}║
║  Speakers:    ${String(result.utterances?.length ? new Set(result.utterances.map(u => u.speaker)).size : "N/A").padEnd(30)}║
║  Output:      ${String(path.basename(outputPath)).padEnd(30)}║
║  Saved to:    ${String(path.dirname(outputPath)).substring(0, 30).padEnd(30)}║
╚══════════════════════════════════════════════╝
`);
}

main().catch(err => {
  console.error(`\nERROR: ${err.message}`);
  process.exit(1);
});
