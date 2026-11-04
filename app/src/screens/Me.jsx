import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import StylePicker from '../components/StylePicker.jsx';
import ThemeTag from '../components/ThemeTag.jsx';
import { StreakPill } from '../components/Bits.jsx';
import { PageHead } from './Saved.jsx';
import { PER_DAY_OPTIONS, PREFS, streak } from '../personal.js';
import { THEME_NAMES } from '../themes.js';

const TEXT_SIZES = [
  { id: 'normaal', label: 'Normaal' },
  { id: 'groot', label: 'Groot' },
  { id: 'extra', label: 'Extra groot' }
];

const Label = ({ children }) => (
  <h6 style={{ color: 'var(--color-neutral-700)', fontFamily: 'var(--font-body)', fontWeight: 700, margin: '0 0 10px' }}>{children}</h6>
);

/** A row of equal choices, one of them selected. */
function Choice({ name, options, value, onChange }) {
  return (
    <div className="choice" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button key={o.id} role="radio" aria-checked={value === o.id} className="choice-opt" onClick={() => onChange(o.id)}>{o.label}</button>
      ))}
    </div>
  );
}

/** Profile and settings. */
export default function Me({ store, onBack, go }) {
  const [confirming, setConfirming] = useState(false);
  const prefs = store.themePrefs || {};
  const changed = THEME_NAMES.filter((t) => (prefs[t] || 'normaal') !== 'normaal');
  return (
    <>
      <PageHead title="Ik" onBack={onBack} />
      <div className="page-body" style={{ gap: 22 }}>
        <div className="field">
          <label htmlFor="me-name">Je naam</label>
          <input id="me-name" className="input" style={{ minHeight: 48, fontSize: 16 }} value={store.name}
            maxLength={24} autoComplete="given-name" onChange={(e) => store.set({ name: e.target.value })} />
        </div>
        <StreakPill n={streak(store.visits)} />

        <div>
          <Label>Tips per dag</Label>
          <Choice name="Tips per dag" value={store.perDay ?? 15} onChange={(n) => store.set({ perDay: n })}
            options={PER_DAY_OPTIONS.map((n) => ({ id: n, label: `${n} tips` }))} />
        </div>

        <div>
          <Label>Onderwerpen</Label>
          <button className="day-row" onClick={() => go('themes')}>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="day-name" style={{ fontSize: 17 }}>Kies je favorieten</div>
              <div className="day-meta">{changed.length === 0 ? 'Alle onderwerpen even vaak' : `${changed.length} ${changed.length === 1 ? 'onderwerp' : 'onderwerpen'} aangepast`}</div>
            </div>
            <Icon name="chevron" size={18} />
          </button>
        </div>

        <div>
          <Label>Tekstgrootte</Label>
          <Choice name="Tekstgrootte" options={TEXT_SIZES} value={store.textSize || 'normaal'} onChange={(textSize) => store.set({ textSize })} />
        </div>

        <div>
          <Label>Stijl van je tips</Label>
          <StylePicker value={store.style} onChange={(style) => store.set({ style })} />
        </div>

        {confirming ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 14 }}>Je naam, bewaarde tips, notities, stemmingen en instellingen worden gewist.</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-primary" style={{ height: 44, padding: '0 18px' }} onClick={store.reset}>Alles wissen</button>
              <button className="btn btn-secondary" style={{ height: 44, padding: '0 18px' }} onClick={() => setConfirming(false)}>Annuleren</button>
            </div>
          </div>
        ) : (
          <button className="btn btn-secondary" style={{ alignSelf: 'flex-start', height: 44, padding: '0 18px' }} onClick={() => setConfirming(true)}>
            Opnieuw beginnen
          </button>
        )}
      </div>
    </>
  );
}

/** How often each theme comes up: Uit, Minder, Normaal or Meer. */
export function Themes({ store, onBack }) {
  const prefs = store.themePrefs || {};
  const setPref = (t, v) => {
    const next = { ...prefs, [t]: v };
    // Keep at least one theme on, or there would be nothing to show.
    if (THEME_NAMES.every((n) => next[n] === 'uit')) return;
    store.set({ themePrefs: next });
  };
  return (
    <>
      <PageHead title="Onderwerpen" onBack={onBack} />
      <div className="page-body" style={{ gap: 14 }}>
        <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--color-neutral-800)', margin: 0 }}>
          Kies hoe vaak je tips over elk onderwerp wilt zien. Je tips van vandaag passen zich meteen aan; eerdere dagen blijven zoals ze waren.
        </p>
        {THEME_NAMES.map((t) => (
          <div key={t} className="theme-pref">
            <ThemeTag tag={t} />
            <Choice name={t} options={PREFS} value={prefs[t] || 'normaal'} onChange={(v) => setPref(t, v)} />
          </div>
        ))}
        <button className="btn btn-secondary" style={{ alignSelf: 'flex-start', height: 44, padding: '0 18px' }} onClick={() => store.set({ themePrefs: {} })}>
          Alles op normaal
        </button>
      </div>
    </>
  );
}
