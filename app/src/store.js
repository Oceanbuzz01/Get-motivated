import { useCallback, useEffect, useState } from 'react';

const KEY = 'wecandothis:v1';
const today = () => new Date().toISOString().slice(0, 10);

const DEFAULTS = { onboarded: false, name: '', style: 'c', saved: [], done: { date: today(), ids: {} } };

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (!raw) return DEFAULTS;
    const s = { ...DEFAULTS, ...raw };
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
    cur.saved.includes(idx) ? cur : { ...cur, saved: [idx, ...cur.saved] }
  )), []);
  const unsave = useCallback((idx) => setS((cur) => ({ ...cur, saved: cur.saved.filter((i) => i !== idx) })), []);
  const toggleDone = useCallback((idx) => setS((cur) => ({
    ...cur, done: { ...cur.done, ids: { ...cur.done.ids, [idx]: !cur.done.ids[idx] } }
  })), []);
  const reset = useCallback(() => setS({ ...DEFAULTS, done: { date: today(), ids: {} } }), []);

  return { ...s, set, save, unsave, toggleDone, reset };
}
