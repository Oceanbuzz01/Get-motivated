import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import ThemeTag from '../components/ThemeTag.jsx';
import { celebrate } from '../rewards.js';
import { SearchBox, ThemeFilter, fold } from '../components/Bits.jsx';
import { THEME_NAMES } from '../themes.js';
import { TIPS } from '../tips.js';

export const STATUSES = [
  { id: 'todo', label: 'Wil ik doen' },
  { id: 'busy', label: 'Mee bezig' },
  { id: 'done', label: 'Gedaan' }
];
const statusOf = (store, id) => store.notes?.[id]?.status || 'todo';

const FILTERS = [
  { id: 'all', label: 'Alles', match: () => true },
  { id: 'open', label: 'Te doen', match: (s) => s !== 'done' },
  { id: 'done', label: 'Gedaan', match: (s) => s === 'done' }
];

export function StatusChip({ status }) {
  const s = STATUSES.find((x) => x.id === status) || STATUSES[0];
  return (
    <span className={`status-chip status-${s.id}`}>
      {s.id === 'done' && <Icon name="check" size={12} stroke={3.25} />}{s.label}
    </span>
  );
}

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

/** Saved tips, newest first, with their status and the start of your note. */
export default function Saved({ store, onBack, openTip }) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState(null);
  const f = FILTERS.find((x) => x.id === filter);
  const q = fold(query.trim());
  const list = store.saved.filter((id) => {
    const t = TIPS[id];
    if (!f.match(statusOf(store, id))) return false;
    if (theme && t.tag !== theme) return false;
    return !q || fold(`${t.title} ${t.body} ${t.try} ${store.notes?.[id]?.note || ''}`).includes(q);
  });
  const themes = THEME_NAMES.filter((name) => store.saved.some((id) => TIPS[id].tag === name));

  return (
    <>
      <PageHead title="Bewaard" onBack={onBack} />
      {store.saved.length > 0 && (
        <div className="filter-row" style={{ marginBottom: 6 }} role="radiogroup" aria-label="Filter">
          {FILTERS.map((x) => {
            const n = store.saved.filter((id) => x.match(statusOf(store, id))).length;
            return (
              <button key={x.id} role="radio" aria-checked={filter === x.id} className="filter-chip" onClick={() => setFilter(x.id)}>
                {x.label} <span className="filter-count">{n}</span>
              </button>
            );
          })}
        </div>
      )}
      {store.saved.length > 3 && <SearchBox value={query} onChange={setQuery} placeholder="Zoek in bewaarde tips en notities" />}
      {themes.length > 1 && <ThemeFilter value={theme} onChange={setTheme} themes={themes} />}
      <div className="page-body">
        {store.saved.length === 0 ? (
          <div className="empty">
            <strong>Nog niets bewaard.</strong>
            Veeg een tip naar rechts of tik op het hartje, dan vind je hem hier terug.
          </div>
        ) : list.length === 0 && (q || theme) ? (
          <div className="empty"><strong>Niets gevonden.</strong>Probeer een ander woord of onderwerp.</div>
        ) : list.length === 0 ? (
          <div className="empty">
            <strong>{filter === 'done' ? 'Nog niets gedaan.' : 'Alles is gedaan.'}</strong>
            {filter === 'done' ? 'Open een bewaarde tip en zet hem op Gedaan als je hem hebt uitgeprobeerd.' : 'Mooi zo. Bewaar een nieuwe tip om verder te gaan.'}
          </div>
        ) : list.map((id) => {
          const t = TIPS[id];
          const meta = store.notes?.[id];
          return (
            <button key={id} className="saved-card saved-link" onClick={() => openTip(id)}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <ThemeTag tag={t.tag} />
                <StatusChip status={statusOf(store, id)} />
              </div>
              <div className="saved-title">{t.title}</div>
              {meta?.note
                ? <div className="saved-note">{meta.note}</div>
                : <div className="saved-body">{t.body}</div>}
              <div className="saved-more">{meta?.note ? 'Notitie bekijken' : 'Notitie toevoegen'} <Icon name="chevron" size={14} /></div>
            </button>
          );
        })}
      </div>
    </>
  );
}

const longDate = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });

/** One saved tip: choose a status and write what you did or noticed. */
export function SavedTip({ store, id, onBack, onShare }) {
  const t = TIPS[id];
  const meta = store.notes?.[id] || { status: 'todo', note: '' };
  const [confirming, setConfirming] = useState(false);
  const saved = store.saved.includes(id);

  return (
    <>
      <PageHead title="Bewaarde tip" onBack={onBack} />
      <div className="page-body" style={{ gap: 18 }}>
        <article className="saved-card">
          <ThemeTag tag={t.tag} style={{ alignSelf: 'flex-start' }} />
          <div className="saved-title">{t.title}</div>
          <div className="saved-body">{t.body}</div>
          <div className="saved-try"><strong>Probeer:</strong> {t.try}</div>
        </article>

        <div>
          <div className="field-label" id="status-label">Hoe staat het ervoor?</div>
          <div className="status-options" role="radiogroup" aria-labelledby="status-label">
            {STATUSES.map((s) => (
              <button key={s.id} role="radio" aria-checked={meta.status === s.id} className={`status-option status-${s.id}`}
                onClick={(e) => { if (s.id === 'done' && meta.status !== 'done') celebrate(e.currentTarget); store.setNote(id, { status: s.id }); }}>
                {s.id === 'done' && <Icon name="check" size={16} stroke={3.25} />}{s.label}
              </button>
            ))}
          </div>
          {meta.status === 'done' && meta.doneAt && <div className="field-hint">Gedaan op {longDate(meta.doneAt)}</div>}
        </div>

        <div className="field">
          <label htmlFor={`note-${id}`}>Wat heb je gedaan of gemerkt?</label>
          <textarea id={`note-${id}`} className="input note-input" rows={5} value={meta.note || ''}
            placeholder="Bijvoorbeeld: vanochtend vijf minuten zonder telefoon ontbeten. Voelde rustiger."
            onChange={(e) => store.setNote(id, { note: e.target.value })} />
          <div className="field-hint">Wordt vanzelf bewaard{meta.savedAt ? ` · bewaard op ${longDate(meta.savedAt)}` : ''}</div>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button className="btn btn-secondary" style={{ height: 44, padding: '0 18px', gap: 8 }} onClick={() => onShare(t)}>
            <Icon name="share" size={16} />Delen
          </button>
          {saved && !confirming && (
            <button className="btn btn-secondary" style={{ height: 44, padding: '0 18px', gap: 8 }} onClick={() => setConfirming(true)}>
              <Icon name="trash" size={16} />Niet meer bewaren
            </button>
          )}
          {saved && confirming && (
            <>
              <button className="btn btn-primary" style={{ height: 44, padding: '0 18px' }} onClick={() => { store.unsave(id); onBack(); }}>Ja, weghalen</button>
              <button className="btn btn-secondary" style={{ height: 44, padding: '0 18px' }} onClick={() => setConfirming(false)}>Annuleren</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
