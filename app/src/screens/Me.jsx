import StylePicker from '../components/StylePicker.jsx';
import { PageHead } from './Saved.jsx';

/** Profile: name, home-screen style, reset. */
export default function Me({ store, onBack }) {
  const done = Object.values(store.done.ids).filter(Boolean).length;
  const reset = () => {
    if (window.confirm('Alles wissen en opnieuw beginnen?')) store.reset();
  };
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
        <button className="btn btn-secondary" style={{ alignSelf: 'flex-start', height: 44, padding: '0 18px' }} onClick={reset}>
          Opnieuw beginnen
        </button>
      </div>
    </>
  );
}
