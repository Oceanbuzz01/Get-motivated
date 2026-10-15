import { useState } from 'react';
import StylePicker from '../components/StylePicker.jsx';
import { Sun } from './HomeC.jsx';

const STEPS = 3;

/** Welcome → name → style. Uses the 1c sun and progress segments. */
export default function Onboarding({ store }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState(store.name);
  const [style, setStyle] = useState(store.style);

  const next = () => {
    if (step < STEPS - 1) setStep(step + 1);
    else store.set({ name: name.trim(), style, onboarded: true });
  };

  return (
    <>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <Sun progress={step === 0 ? 0.35 : step / (STEPS - 1)} />
      </div>

      <div style={{ position: 'relative', display: 'flex', gap: 4, padding: '22px 26px 0' }}>
        {Array.from({ length: STEPS }, (_, j) => (
          <div key={j} style={{ flex: 1, height: 6, borderRadius: 999, background: 'var(--color-accent-700)', opacity: j <= step ? 1 : 0.18, transition: 'opacity .3s' }} />
        ))}
      </div>

      <form key={step} onSubmit={(e) => { e.preventDefault(); next(); }}
        style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', padding: '0 26px', minHeight: 0 }}>
        {step === 0 && (
          <>
            <div className="flex-spacer" />
            <div className="kicker" style={{ color: 'var(--color-accent-800)', fontWeight: 700 }}>Elke dag motiverende tips</div>
            <h1 style={{ fontSize: 44, lineHeight: 1.02, margin: '10px 0 14px' }}>We can do this.</h1>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--color-neutral-800)', maxWidth: 290, margin: 0, textWrap: 'pretty' }}>
              Elke dag een paar zachte mindset-tips. Kleine stappen, echte groei.
            </p>
            <div style={{ height: 40 }} />
          </>
        )}

        {step === 1 && (
          <>
            <h1 style={{ fontSize: 32, lineHeight: 1.08, margin: '56px 0 10px' }}>Hoe mogen we je noemen?</h1>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--color-neutral-800)', margin: '0 0 22px' }}>
              Dan zeggen we 's ochtends gewoon even goedemorgen.
            </p>
            <div className="field">
              <label htmlFor="ob-name">Je naam</label>
              <input id="ob-name" className="input" style={{ minHeight: 52, fontSize: 17 }} autoFocus autoComplete="given-name"
                maxLength={24} value={name} onChange={(e) => setName(e.target.value)} placeholder="Bijvoorbeeld Sam" />
            </div>
            <div className="flex-spacer" />
          </>
        )}

        {step === 2 && (
          <>
            <h1 style={{ fontSize: 32, lineHeight: 1.08, margin: '56px 0 10px' }}>Kies je stijl</h1>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--color-neutral-800)', margin: '0 0 18px' }}>
              Veeg naar rechts om een tip te bewaren, naar links voor later. Je kunt dit altijd aanpassen.
            </p>
            <div style={{ overflowY: 'auto', margin: '0 -4px', padding: '0 4px 8px' }}>
              <StylePicker value={style} onChange={setStyle} />
            </div>
            <div className="flex-spacer" />
          </>
        )}

        <div style={{ display: 'flex', gap: 10, padding: '12px 0 16px' }}>
          {step > 0 && (
            <button type="button" onClick={() => setStep(step - 1)} className="btn btn-secondary btn-soft" style={{ flex: 1, height: 52, fontSize: 16 }}>Terug</button>
          )}
          <button type="submit" className="btn btn-primary" style={{ flex: 1.4, height: 52, fontSize: 16 }}>
            {step === 0 ? 'Beginnen' : step === 1 ? (name.trim() ? 'Verder' : 'Overslaan') : 'Klaar'}
          </button>
        </div>
      </form>
    </>
  );
}
