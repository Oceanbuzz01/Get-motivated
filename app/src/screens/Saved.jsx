import Icon from '../components/Icon.jsx';
import { TIPS } from '../tips.js';

export function PageHead({ title, onBack }) {
  return (
    <div className="page-head">
      {onBack && (
        <button onClick={onBack} className="btn btn-secondary btn-icon" style={{ width: 44, height: 44, flex: 'none' }} aria-label="Terug" title="Terug">
          <Icon name="back" />
        </button>
      )}
      <h1 className="page-title" style={{ margin: 0, letterSpacing: 0 }}>{title}</h1>
    </div>
  );
}

/** Saved tips, newest first. */
export default function Saved({ store, onBack, onShare }) {
  return (
    <>
      <PageHead title="Bewaard" onBack={onBack} />
      <div className="page-body">
        {store.saved.length === 0 ? (
          <div className="empty">
            <strong>Nog niets bewaard.</strong>
            Veeg een tip naar rechts of tik op het hartje, dan vind je hem hier terug.
          </div>
        ) : store.saved.map((idx) => {
          const t = TIPS[idx];
          return (
            <article key={idx} className="saved-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="tag tag-accent">{t.tag}</span>
                <div style={{ display: 'flex', gap: 4 }}>
                  <button className="btn btn-ghost btn-icon" style={{ color: 'var(--color-neutral-700)' }} onClick={() => onShare(t)} aria-label="Delen" title="Delen">
                    <Icon name="share" size={18} />
                  </button>
                  <button className="btn btn-ghost btn-icon" style={{ color: 'var(--color-neutral-700)' }} onClick={() => store.unsave(idx)} aria-label="Verwijderen" title="Verwijderen">
                    <Icon name="trash" size={18} />
                  </button>
                </div>
              </div>
              <div className="saved-title">{t.title}</div>
              <div className="saved-body">{t.body}</div>
            </article>
          );
        })}
      </div>
    </>
  );
}
