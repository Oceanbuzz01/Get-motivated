import { useCallback, useEffect, useState } from 'react';
import { LAUNCH_DAY, dayNumber } from './tips.js';

const KEY = 'wecandothis:v1';
// The local date as YYYY-MM-DD (not UTC, so it flips at your own midnight).
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

// firstDay: the day you started, where the history begins.
// notes: per saved tip id, { status: 'todo' | 'busy' | 'done', note, savedAt, doneAt }.
// perDay, themePrefs, textSize: settings. dayLog: the tips shown per day number.
// visits: day numbers you opened the app. doneLog: ticked tasks per day. moods: 1–5 per day.
const DEFAULTS = {
  onboarded: false, name: '', style: 'c', saved: [], notes: {}, firstDay: null, done: { date: today(), ids: {} },
  perDay: 15, themePrefs: {}, textSize: 'normaal', dayLog: {}, visits: [], doneLog: {}, moods: {}, moodAsked: null
};

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (!raw) return DEFAULTS;
    const s = { ...DEFAULTS, ...raw };
    // People who started before history existed get it from the launch day.
    if (s.onboarded && s.firstDay == null) s.firstDay = LAUNCH_DAY;
    // "Probeer vandaag" ticks belong to one day only.
    if (s.done?.date !== today()) s.done = { date: today(), ids: {} };
    return s;
  } catch (_) {
    return DEFAULTS;
  }
}

/** App state kept in localStorage: profile, chosen style, saved tips, today's ticks. */
export function useStore() {
  const [s, setS] = useState(load);
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (_) { /* storage unavailable */ }
  }, [s]);

  const set = useCallback((p) => setS((cur) => ({ ...cur, ...p })), []);
  const save = useCallback((idx) => setS((cur) => (
    cur.saved.includes(idx) ? cur : {
      ...cur, saved: [idx, ...cur.saved],
      // A note written earlier comes back if you save the tip again.
      notes: cur.notes[idx] ? cur.notes : { ...cur.notes, [idx]: { status: 'todo', note: '', savedAt: today(), doneAt: null } }
    }
  )), []);
  const unsave = useCallback((idx) => setS((cur) => ({ ...cur, saved: cur.saved.filter((i) => i !== idx) })), []);
  const setNote = useCallback((idx, patch) => setS((cur) => {
    const prev = cur.notes[idx] || { status: 'todo', note: '', savedAt: today(), doneAt: null };
    const next = { ...prev, ...patch };
    if (patch.status) next.doneAt = patch.status === 'done' ? (prev.doneAt || today()) : null;
    return { ...cur, notes: { ...cur.notes, [idx]: next } };
  }), []);
  const toggleDone = useCallback((idx) => setS((cur) => {
    const on = !cur.done.ids[idx];
    const d = dayNumber();
    const log = (cur.doneLog[d] || []).filter((i) => i !== idx);
    return {
      ...cur,
      done: { ...cur.done, ids: { ...cur.done.ids, [idx]: on } },
      doneLog: { ...cur.doneLog, [d]: on ? [...log, idx] : log }
    };
  }), []);
  const logDay = useCallback((day, ids, sig) => setS((cur) => ({ ...cur, dayLog: { ...cur.dayLog, [day]: { ids, sig } } })), []);
  const visit = useCallback((day) => setS((cur) => (
    cur.visits.includes(day) ? cur : { ...cur, visits: [...cur.visits, day].slice(-800) }
  )), []);
  const setMood = useCallback((day, level) => setS((cur) => ({ ...cur, moods: { ...cur.moods, [day]: level } })), []);
  const reset = useCallback(() => setS({ ...DEFAULTS, done: { date: today(), ids: {} } }), []);

  return { ...s, set, save, unsave, setNote, toggleDone, logDay, visit, setMood, reset };
}
