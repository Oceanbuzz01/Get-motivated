export const STYLES = [
  {
    id: 'c', name: 'Ochtendritueel', desc: 'Een opkomende zon, een tip en een kleine opdracht.',
    swatch: (
      <div className="style-swatch" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-divider)' }}>
        <div style={{ position: 'absolute', right: -14, top: -10, width: 44, height: 44, borderRadius: '50%', background: 'var(--color-accent-300)' }} />
        <div style={{ position: 'absolute', left: 7, right: 7, bottom: 7, height: 30, borderRadius: 10, background: 'var(--color-neutral-100)', boxShadow: 'var(--shadow-sm)' }} />
      </div>
    )
  },
  {
    id: 'a', name: 'Zachte kaart', desc: 'Een rustige kaartenstapel met navigatie onderin.',
    swatch: (
      <div className="style-swatch" style={{ background: 'var(--color-surface)' }}>
        <div style={{ position: 'absolute', left: 9, right: 9, top: 9, bottom: 16, borderRadius: 10, background: 'var(--color-neutral-100)', boxShadow: 'var(--shadow-sm)' }} />
        <div style={{ position: 'absolute', left: 21, bottom: 5, width: 10, height: 10, borderRadius: '50%', background: 'var(--color-accent)' }} />
      </div>
    )
  },
  {
    id: 'b', name: 'Kleurvlak', desc: 'Elke tip een eigen kleur, met grote letters.',
    swatch: (
      <div className="style-swatch" style={{ background: '#8c491a' }}>
        <div style={{ position: 'absolute', right: -16, top: -16, width: 46, height: 46, borderRadius: '50%', background: '#f9f4ed', opacity: 0.12 }} />
        <div style={{ position: 'absolute', left: 9, top: 6, fontFamily: 'var(--font-heading)', fontSize: 22, color: '#f9f4ed', opacity: 0.5 }}>01</div>
      </div>
    )
  }
];

/** The three home-screen directions as a single-choice list. */
export default function StylePicker({ value, onChange }) {
  return (
    <div className="style-opts" role="radiogroup" aria-label="Stijl">
      {STYLES.map((s) => (
        <button key={s.id} className="style-opt" role="radio" aria-checked={value === s.id} onClick={() => onChange(s.id)}>
          {s.swatch}
          <div>
            <div className="style-name">{s.name}</div>
            <div className="style-desc">{s.desc}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
