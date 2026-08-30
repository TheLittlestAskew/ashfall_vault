#!/usr/bin/env node
/**
 * Builds the public session registry consumed live by rectrixcaedere.com.
 *
 * The campaign dashboard remains the source of truth for session number,
 * title, and date. This script refuses to publish an entry whose Markdown
 * session note or required public tracker blocks cannot be found.
 *
 * Run: node Workflows/scripts/generate_public_session_index.mjs
 * Test: node Workflows/scripts/generate_public_session_index.mjs --self-test
 */
import assert from 'node:assert/strict';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, '..', '..');
const hubDir = path.join(vaultRoot, '00-Campaign-Hub');
const trackerDir = path.join(hubDir, 'Trackers');
const dashboardPath = path.join(hubDir, 'Campaign Dashboard.md');
const outputPath = path.join(hubDir, 'Public Session Index.json');

function normalizeSessionNumber(value) {
  const raw = String(value).trim();
  if (!/^\d+(?:\.\d+)?$/.test(raw)) throw new Error(`Invalid session number: ${value}`);
  const [whole, fraction] = raw.split('.');
  return `${whole.padStart(2, '0')}${fraction ? `.${fraction}` : ''}`;
}

function parseDate(value) {
  const match = String(value).trim().match(/^(~?)(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) throw new Error(`Expected MM/DD/YYYY date, received: ${value}`);
  const [, approximate, month, day, year] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  if (date.getUTCFullYear() !== Number(year) || date.getUTCMonth() !== Number(month) - 1 || date.getUTCDate() !== Number(day)) {
    throw new Error(`Invalid calendar date: ${value}`);
  }
  return {
    iso: `${year}-${month}-${day}`,
    label: `${approximate ? '~' : ''}${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}`,
  };
}

function parseDashboardSessions(markdown) {
  const rows = markdown.split(/\r?\n/).filter((line) => /^\|\s*\d/.test(line));
  const sessions = [];
  for (const row of rows) {
    const cells = row.split('|').slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 3) continue;
    if (cells[0] === '00') continue; // Explicitly uncounted pre-recording intro.
    const number = normalizeSessionNumber(cells[0]);
    const link = cells[1].match(/^\[\[Session\s+[^—]+—\s*(.+?)(?:\|[^\]]+)?\]\]/);
    if (!link) throw new Error(`Session ${number} has no canonical Obsidian session link.`);
    const title = link[1].replace(/\s*\]\]$/, '').trim();
    const date = parseDate(cells[2]);
    sessions.push({ n: number, t: title, d: date.iso, lbl: date.label, f: `01-Sessions/Session ${number} — ${title}.md` });
  }
  if (!sessions.length) throw new Error('No session rows found in Campaign Dashboard.md.');
  return sessions.sort((a, b) => Number.parseFloat(a.n) - Number.parseFloat(b.n));
}

async function findTrackerForSession(prefix, sessionNumber) {
  const files = await readdir(trackerDir);
  const token = sessionNumber.replace(/^0/, '');
  const candidates = files.filter((file) => file.startsWith(prefix) && file.endsWith('.md'));
  for (const file of candidates) {
    const contents = await readFile(path.join(trackerDir, file), 'utf8');
    if (new RegExp(`^##\\s+S0?${token}(?:\\s|—|$)`, 'm').test(contents)) return `00-Campaign-Hub/Trackers/${file}`;
  }
  return null;
}

async function buildIndex() {
  const dashboard = await readFile(dashboardPath, 'utf8');
  const sessions = parseDashboardSessions(dashboard);
  const entries = [];
  const failures = [];
  const legacyIssues = [];
  for (const session of sessions) {
    const notePath = path.join(vaultRoot, session.f);
    try {
      const note = await readFile(notePath, 'utf8');
      for (const heading of ['Metadata', 'Summary', 'Threads', 'NPCs', 'Archivist Notes']) {
        if (!new RegExp(`^##\\s+${heading}\\b`, 'mi').test(note)) failures.push(`S${session.n}: missing public-site heading ## ${heading}.`);
      }
    } catch {
      failures.push(`S${session.n}: Markdown session note is missing (${session.f}).`);
      continue;
    }
    const [quotes, loot, profanity] = await Promise.all([
      findTrackerForSession('Quote Board', session.n),
      findTrackerForSession('Loot Tracker', session.n),
      findTrackerForSession('Profanity Ledger', session.n),
    ]);
    if (!quotes || !loot || !profanity) {
      failures.push(`S${session.n}: missing required public tracker block(s): ${[!quotes && 'Quote Board', !loot && 'Loot Tracker', !profanity && 'Profanity Ledger'].filter(Boolean).join(', ')}.`);
      continue;
    }
    entries.push({ ...session, trackers: { quotes, loot, profanity } });
  }
  const blockers = failures.filter((issue) => /^S(\d+(?:\.\d+)?):/.exec(issue) && Number(RegExp.$1) >= 10);
  failures.forEach((issue) => { if (!blockers.includes(issue)) legacyIssues.push(issue); });
  if (blockers.length) throw new Error(`Public session index not written:\n- ${blockers.join('\n- ')}`);
  // Every session, number and date only — for the roll dashboard's session count,
  // date range and per-session chart. Carries no title or path, so it can cover the
  // full campaign without republishing the legacy sessions the filter below excludes.
  const allSessions = sessions.map((session) => ({ n: session.n, d: session.d }));
  return { version: 1, generated_at: new Date().toISOString(), all_sessions: allSessions, sessions: entries.filter((entry) => Number(entry.n) >= 10), legacy_validation_issues: legacyIssues };
}

async function main() {
  if (process.argv.includes('--self-test')) {
    assert.equal(normalizeSessionNumber('1'), '01');
    assert.equal(normalizeSessionNumber('04.5'), '04.5');
    assert.equal(parseDate('~03/11/2026').iso, '2026-03-11');
    assert.throws(() => parseDate('13/40/2026'));
    assert.deepEqual(parseDashboardSessions('| 01 | [[Session 01 — Test]] | 02/13/2026 | — | — | — |'), [{ n: '01', t: 'Test', d: '2026-02-13', lbl: 'February 13, 2026', f: '01-Sessions/Session 01 — Test.md' }]);
    console.log('generate_public_session_index: self-test passed');
    return;
  }
  const index = await buildIndex();
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8');
  console.log(`generate_public_session_index: wrote ${index.sessions.length} sessions to ${path.relative(vaultRoot, outputPath)}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
