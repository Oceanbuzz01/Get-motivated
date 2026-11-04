import { DAILY, TIPS, dayNumber, tipsForDay } from './tips.js';
import { THEME_NAMES } from './themes.js';

// How often a theme comes up compared to the others.
export const PREFS = [
  { id: 'uit', label: 'Uit', weight: 0 },
  { id: 'minder', label: 'Minder', weight: 0.35 },
  { id: 'normaal', label: 'Normaal', weight: 1 },
  { id: 'meer', label: 'Meer', weight: 2 }
];
const WEIGHT = Object.fromEntries(PREFS.map((p) => [p.id, p.weight]));
export const PER_DAY_OPTIONS = [5, 10, 15];

/** A fingerprint of the settings that shape the daily deck. */
export const deckSig = (s) => JSON.stringify([s.perDay ?? DAILY, s.themePrefs || {}]);

// A stable pseudo-random number in [0, 1) per tip and day.
function hash(a, b) {
  let h = (Math.imul(a + 1, 2654435761) ^ Math.imul(b + 7, 40503)) >>> 0;
  h ^= h >>> 15; h = Math.imul(h, 2246822507) >>> 0; h ^= h >>> 13;
  return (h >>> 0) / 4294967296;
}

/** The tips you saw on a day: what the app logged then, or the shared schedule. */
export function shownOn(day, s) {
  return s.dayLog?.[day]?.ids ?? tipsForDay(day);
}

/**
 * Today's tips for you. Without theme preferences this is simply the first
 * `perDay` of the shared schedule. With preferences, tips are taken in the
 * schedule's order from today onward, skipping what you saw in the last 30
 * days, and kept with a chance that follows the theme's weight.
 */
export function personalDeck(day, s) {
  const n = s.perDay ?? DAILY;
  const prefs = s.themePrefs || {};
  const custom = THEME_NAMES.some((t) => (prefs[t] || 'normaal') !== 'normaal');
  if (!custom) return tipsForDay(day).slice(0, n);

  const max = Math.max(...THEME_NAMES.map((t) => WEIGHT[prefs[t] || 'normaal']));
  if (max === 0) return tipsForDay(day).slice(0, n);
  const recent = new Set();
  for (let d = day - 30; d < day; d++) shownOn(d, s).forEach((id) => recent.add(id));

  const out = [];
  for (let k = 0; k < 150 && out.length < n; k++) {
    for (const id of tipsForDay(day + k)) {
      if (out.length >= n) break;
      if (recent.has(id) || out.includes(id)) continue;
      const w = (WEIGHT[prefs[TIPS[id].tag] || 'normaal'] ?? 1) / max;
      if (w > 0 && hash(id, day) < w) out.push(id);
    }
  }
  return out;
}

// — streak, week and mood —

/** Days in a row you opened the app, ending today. */
export function streak(visits, today = dayNumber()) {
  const set = new Set(visits || []);
  let n = 0;
  for (let d = today; set.has(d); d--) n++;
  return n;
}

const isoDay = (iso) => (iso ? dayNumber(new Date(iso + 'T12:00:00')) : null);

/** Monday of the week that holds `day`. */
export function weekStart(day) {
  const dow = (new Date(day * 86400000).getUTCDay() + 6) % 7; // 0 = Monday
  return day - dow;
}

/** "Deze week": tasks done (ticked or set to Gedaan) and tips saved since Monday. */
export function weekStats(s, today = dayNumber()) {
  const from = weekStart(today);
  const done = new Set();
  for (let d = from; d <= today; d++) (s.doneLog?.[d] || []).forEach((id) => done.add(id));
  let saved = 0;
  for (const [id, m] of Object.entries(s.notes || {})) {
    const doneDay = isoDay(m.doneAt);
    if (m.status === 'done' && doneDay != null && doneDay >= from) done.add(Number(id));
    const savedDay = isoDay(m.savedAt);
    if (s.saved.includes(Number(id)) && savedDay != null && savedDay >= from) saved++;
  }
  return { done: done.size, saved };
}

export const MOODS = [
  { level: 1, label: 'Zwaar' },
  { level: 2, label: 'Matig' },
  { level: 3, label: 'Oké' },
  { level: 4, label: 'Goed' },
  { level: 5, label: 'Top' }
];
