import { useState } from 'react';
import Icon from './Icon.jsx';
import { THEME_NAMES, themeOf } from '../themes.js';
import { MOODS } from '../personal.js';
import { dateOfDay } from '../tips.js';

// Mouth curve per mood level: a frown at 1, flat at 3, a wide smile at 5.
const MOUTH = { 1: 'M8 16.5c1.2-1.6 2.5-2.2 4-2.2s2.8.6 4 2.2', 2: 'M8.5 16c1-.8 2.2-1.2 3.5-1.2s2.5.4 3.5 1.2',
  3: 'M8.5 15.5h7', 4: 'M8.5 14.5c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5', 5: 'M8 13.5c1.2 2 2.5 3 4 3s2.8-1 4-3' };

export function Face({ level, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth="3" />
      <path d={MOUTH[level]} />
    </svg>
  );
}

/** Five faces to say how your day was. */
export function MoodPicker({ value, onPick }) {
  return (
    <div className="mood-picker" role="radiogroup" aria-label="Hoe was je dag?">
      {MOODS.map((m) => (
        <button key={m.level} role="radio" aria-checked={value === m.level} className="mood-option" onClick={() => onPick(m.level)}>
          <Face level={m.level} />
          <span>{m.label}</span>
        </button>
      ))}
    </div>
  );
}

const shortDay = (day) => dateOfDay(day).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' });

/**
 * Your mood over the last 14 days: one bar per day, height = mood (1–5).
 * Days without an answer show a small dot on the baseline. Tap a bar to read it.
 */
export function MoodChart({ moods, today }) {
  const days = Array.from({ length: 14 }, (_, i) => today - 13 + i);
  const [pick, setPick] = useState(null);
  const W = 300, H = 110, top = 8, base = 92, step = W / days.length, bw = Math.min(14, step - 6);
  const y = (lvl) => base - ((lvl) / 5) * (base - top);
  const sel = pick ?? days.slice().reverse().find((d) => moods[d]) ?? null;
  const label = sel != null ? `${shortDay(sel)}: ${moods[sel] ? MOODS[moods[sel] - 1].label : 'niet ingevuld'}` : 'Nog niets ingevuld';
  return (
    <figure className="mood-chart">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={`Stemming afgelopen 14 dagen. ${days.filter((d) => moods[d]).map((d) => `${shortDay(d)} ${MOODS[moods[d] - 1].label}`).join(', ')}`}>
        <line x1="0" x2={W} y1={y(3)} y2={y(3)} className="mood-grid" />
        <line x1="0" x2={W} y1={base} y2={base} className="mood-axis" />
        {days.map((d, i) => {
          const cx = i * step + step / 2;
          const lvl = moods[d];
          return (
            <g key={d} onClick={() => setPick(d)} style={{ cursor: 'pointer' }}>
              <rect x={i * step} y={0} width={step} height={H} fill="transparent" />
              {lvl
                ? <path className={`mood-bar${sel === d ? ' is-sel' : ''}`} d={`M${cx - bw / 2} ${base} V${y(lvl) + 4} a4 4 0 0 1 4 -4 h${bw - 8} a4 4 0 0 1 4 4 V${base} Z`} />
                : <circle cx={cx} cy={base - 3} r="2" className="mood-none" />}
              {(i % 2 === 1 || d === today) && <text x={cx} y={H - 2} textAnchor="middle" className="mood-tick">{d === today ? 'nu' : dateOfDay(d).getDate()}</text>}
            </g>
          );
        })}
      </svg>
      <figcaption className="mood-caption">{label}</figcaption>
    </figure>
  );
}

export function StreakPill({ n, compact }) {
  if (n < 2) return null;
  return (
    <span className="streak-pill" title={`${n} dagen op rij`} aria-label={`${n} dagen op rij`}>
      <Icon name="flame" size={13} stroke={2.5} />{compact ? n : `${n} dagen op rij`}
    </span>
  );
}

export function SearchBox({ value, onChange, placeholder }) {
  return (
    <label className="search-box">
      <Icon name="search" size={16} />
      <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder} />
      {value && <button type="button" className="search-clear" onClick={() => onChange('')} aria-label="Zoekveld leegmaken"><Icon name="x" size={14} /></button>}
    </label>
  );
}

/** A row of theme chips; tap one to show only that theme, tap again for all. */
export function ThemeFilter({ value, onChange, themes = THEME_NAMES }) {
  return (
    <div className="theme-filter" role="radiogroup" aria-label="Onderwerp">
      {themes.map((t) => {
        const th = themeOf(t);
        return (
          <button key={t} role="radio" aria-checked={value === t} className="tag theme-tag theme-chip"
            style={{ '--t-bg': th.bg, '--t-fg': th.fg }} onClick={() => onChange(value === t ? null : t)}>
            <Icon name={th.icon} size={12} stroke={2.5} />{t}
          </button>
        );
      })}
    </div>
  );
}

/** Lowercase text without accents, for searching. */
export const fold = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
