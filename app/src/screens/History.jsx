import Icon from '../components/Icon.jsx';
import { PageHead } from './Saved.jsx';
import { LAUNCH_DAY, TIPS, dateOfDay, dayName, dayNumber, tipsForDay, todayLabel } from '../tips.js';

/** Every day from the day you started up to today, newest first. */
export default function History({ store, onBack, openDay }) {
  const today = dayNumber();
  const first = Math.min(store.firstDay ?? LAUNCH_DAY, today);
  const days = [];
  for (let d = today; d >= first; d--) days.push(d);

  return (
    <>
      <PageHead title="Geschiedenis" onBack={onBack} />
      <div className="page-body" style={{ gap: 10 }}>
        {days.map((d) => {
          const ids = tipsForDay(d);
          const saved = ids.filter((id) => store.saved.includes(id)).length;
          const name = dayName(d, today);
          const relative = !/\d/.test(name);
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
              <Icon name="chevron" size={18} />
            </button>
          );
        })}
      </div>
    </>
  );
}

/** All tips of one day, to read back, save or share. */
export function Day({ store, day, onBack, onShare }) {
  const ids = tipsForDay(day);
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
                <span className="tag tag-accent">{t.tag}</span>
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
