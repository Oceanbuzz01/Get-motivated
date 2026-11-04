import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import ThemeTag from '../components/ThemeTag.jsx';
import { Face, MoodChart, MoodPicker, SearchBox, ThemeFilter, fold } from '../components/Bits.jsx';
import { PageHead } from './Saved.jsx';
import { LAUNCH_DAY, TIPS, dateOfDay, dayName, dayNumber, todayLabel } from '../tips.js';
import { MOODS, shownOn, streak, weekStats } from '../personal.js';

function Summary({ store, today }) {
  const n = streak(store.visits, today);
  const week = weekStats(store, today);
  return (
    <section className="summary-card" aria-label="Overzicht">
      <div className="summary-stats">
        <div className="stat"><span className="stat-num" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}><Icon name="flame" size={18} stroke={2.5} />{n}</span><span className="stat-label">{n === 1 ? 'dag' : 'dagen'} op rij</span></div>
        <div className="stat"><span className="stat-num">{week.done}</span><span className="stat-label">{week.done === 1 ? 'opdracht' : 'opdrachten'} gedaan deze week</span></div>
        <div className="stat"><span className="stat-num">{week.saved}</span><span className="stat-label">{week.saved === 1 ? 'tip' : 'tips'} bewaard deze week</span></div>
      </div>
      <div className="summary-title">Hoe was je dag?</div>
      <MoodPicker value={store.moods?.[today]} onPick={(lvl) => store.setMood(today, lvl)} />
      <div style={{ fontSize: 12, color: 'var(--color-neutral-700)', marginTop: 4 }}>Je stemming, de afgelopen 14 dagen</div>
      <MoodChart moods={store.moods || {}} today={today} />
    </section>
  );
}

/** Every day from the day you started up to today, newest first, with search. */
export default function History({ store, onBack, openDay }) {
  const today = dayNumber();
  const first = Math.min(store.firstDay ?? LAUNCH_DAY, today);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState(null);
  const days = useMemo(() => { const out = []; for (let d = today; d >= first; d--) out.push(d); return out; }, [today, first]);

  const searching = query.trim() !== '' || theme;
  const results = useMemo(() => {
    if (!searching) return [];
    const q = fold(query.trim());
    const out = [];
    for (const d of days) for (const id of shownOn(d, store)) {
      const t = TIPS[id];
      if (theme && t.tag !== theme) continue;
      if (q && !fold(`${t.title} ${t.body} ${t.try}`).includes(q)) continue;
      out.push({ d, id });
    }
    return out;
  }, [searching, query, theme, days, store.dayLog]);

  return (
    <>
      <PageHead title="Geschiedenis" onBack={onBack} />
      <SearchBox value={query} onChange={setQuery} placeholder="Zoek in eerdere tips" />
      <ThemeFilter value={theme} onChange={setTheme} />
      <div className="page-body" style={{ gap: 10 }}>
        {searching ? (
          results.length === 0
            ? <div className="empty"><strong>Niets gevonden.</strong>Probeer een ander woord of een ander onderwerp.</div>
            : <>
              <div className="result-day">{results.length} {results.length === 1 ? 'tip' : 'tips'} gevonden</div>
              {results.slice(0, 200).map(({ d, id }) => {
                const t = TIPS[id];
                return (
                  <button key={`${d}-${id}`} className="saved-card saved-link" onClick={() => openDay(d)}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                      <ThemeTag tag={t.tag} /><span className="result-day">{dayName(d, today)}</span>
                    </div>
                    <div className="saved-title">{t.title}</div>
                    <div className="saved-body">{t.body}</div>
                  </button>
                );
              })}
            </>
        ) : (
          <>
            <Summary store={store} today={today} />
            {days.map((d) => {
              const ids = shownOn(d, store);
              const saved = ids.filter((id) => store.saved.includes(id)).length;
              const name = dayName(d, today);
              const relative = !/\d/.test(name);
              const mood = store.moods?.[d];
              return (
                <button key={d} className="day-row" onClick={() => openDay(d)}>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div className="day-name">{name}</div>
                    <div className="day-meta">
                      {relative && <>{todayLabel(dateOfDay(d))} · </>}
                      {ids.length} tips{saved > 0 && <> · {saved} bewaard</>}
                    </div>
                    <div className="day-preview">{TIPS[ids[0]].title}</div>
                  </div>
                  {mood && <span className="day-mood" title={MOODS[mood - 1].label}><Face level={mood} size={22} /></span>}
                  <Icon name="chevron" size={18} />
                </button>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

/** All tips of one day, to read back, save or share. */
export function Day({ store, day, onBack, onShare }) {
  const ids = shownOn(day, store);
  const name = dayName(day);
  return (
    <>
      <PageHead title={name} onBack={onBack} />
      <div className="page-body">
        {!/\d/.test(name) && (
          <div className="kicker" style={{ color: 'var(--color-neutral-700)', marginTop: -6 }}>{todayLabel(dateOfDay(day))}</div>
        )}
        {ids.map((id, n) => {
          const t = TIPS[id];
          const saved = store.saved.includes(id);
          return (
            <article key={id} className="saved-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <ThemeTag tag={t.tag} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 12, color: 'var(--color-neutral-700)', marginRight: 4 }}>{n + 1} / {ids.length}</span>
                  <button className="btn btn-ghost btn-icon" style={{ color: 'var(--color-neutral-700)' }} onClick={() => onShare(t)} aria-label="Delen" title="Delen">
                    <Icon name="share" size={18} />
                  </button>
                  <button className="btn btn-ghost btn-icon" style={{ color: saved ? 'var(--color-accent)' : 'var(--color-neutral-700)' }}
                    onClick={() => (saved ? store.unsave(id) : store.save(id))}
                    aria-pressed={saved} aria-label={saved ? 'Niet meer bewaren' : 'Bewaren'} title={saved ? 'Bewaard' : 'Bewaren'}>
                    <Icon name="heart" size={18} fill={saved ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
              <div className="saved-title">{t.title}</div>
              <div className="saved-body">{t.body}</div>
              <div className="saved-try"><strong>Probeer:</strong> {t.try}</div>
            </article>
          );
        })}
      </div>
    </>
  );
}
