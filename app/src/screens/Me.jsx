import { useState } from 'react';
import StylePicker from '../components/StylePicker.jsx';
import { PageHead } from './Saved.jsx';

/** Profile: name, home-screen style, reset. */
export default function Me({ store, onBack }) {
  const done = Object.values(store.done.ids).filter(Boolean).length;
  const [confirming, setConfirming] = useState(false);
  return (
    <>
      <PageHead title="Ik" onBack={onBack} />
      <div className="page-body" style={{ gap: 22 }}>
        <div className="field">
          <label htmlFor="me-name">Je naam</label>
          <input id="me-name" className="input" style={{ minHeight: 48, fontSize: 16 }} value={store.name}
            maxLength={24} autoComplete="given-name" onChange={(e) => store.set({ name: e.target.value })} />
        </div>
        <div>
          <h6 style={{ color: 'var(--color-neutral-700)', fontFamily: 'var(--font-body)', fontWeight: 700, margin: '0 0 10px' }}>Stijl van je tips</h6>
          <StylePicker value={store.style} onChange={(style) => store.set({ style })} />
        </div>
        <div style={{ fontSize: 14, color: 'var(--color-neutral-700)' }}>
          {store.saved.length} {store.saved.length === 1 ? 'tip' : 'tips'} bewaard · {done} {done === 1 ? 'opdracht' : 'opdrachten'} gedaan vandaag
        </div>
        {confirming ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 14 }}>Je naam, bewaarde tips en vinkjes worden gewist.</div>
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
