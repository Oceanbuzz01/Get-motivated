import Icon from '../components/Icon.jsx';
import { useDeck, useDeckKeys } from '../useDeck.js';
import { B_COLORS, TIPS, dayOffset } from '../tips.js';

const overlay = {
  position: 'absolute', inset: 0, borderRadius: 40, display: 'grid', placeItems: 'center', pointerEvents: 'none'
};

/** 1b Kleurvlak: a full colour per tip, big numerals, dot pager. */
export default function HomeB({ store, go }) {
  const deck = useDeck({ start: dayOffset(), onSave: store.save });
  useDeckKeys(deck);

  return (
    <>
      <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => go('me')} aria-label="Ik"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 21, background: 'none', border: 0, padding: 0, color: 'inherit', cursor: 'pointer' }}>
          We can do this.
        </button>
        <button onClick={() => go('saved')} aria-label={`Bewaard: ${store.saved.length}`}
          style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px 6px 10px', borderRadius: 999, border: 0, cursor: 'pointer',
            background: 'var(--color-accent-2-200)', color: 'var(--color-accent-2-800)', fontSize: 13, fontWeight: 700
          }}>
          <Icon name="heart" size={16} />{store.saved.length}
        </button>
      </div>

      <div className="stack" style={{ margin: '0 14px' }}>
        {deck.cards().map((c) => {
          const t = TIPS[c.idx];
          const col = B_COLORS[c.idx];
          return (
            <div key={c.depth} {...c.handlers} className="swipe-card" aria-hidden={!c.top}
              style={{
                ...c.style, inset: '0 0 22px', overflow: 'hidden', borderRadius: 40, padding: '28px 28px 30px', gap: 14,
                background: col.bg, color: col.fg, transformOrigin: '50% 100%'
              }}>
              <div style={{ position: 'absolute', right: -70, top: -70, width: 260, height: 260, borderRadius: '50%', background: 'currentColor', opacity: 0.09 }} />
              <div style={{ position: 'absolute', right: 40, top: 150, width: 64, height: 64, borderRadius: '50%', background: 'currentColor', opacity: 0.09 }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 96, lineHeight: 0.9, opacity: 0.4 }}>{String(c.idx + 1).padStart(2, '0')}</div>
              <div className="flex-spacer" />
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>{t.tag}</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 36, lineHeight: 1.04, letterSpacing: '-.015em', textWrap: 'pretty' }}>{t.title}</div>
              <div style={{ fontSize: 16, lineHeight: 1.5, textWrap: 'pretty' }}>{t.body}</div>
              <div style={{ ...overlay, background: 'var(--color-accent-2-300)', opacity: c.like * 0.85 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 34, color: 'var(--color-accent-2-900)' }}>Bewaard</span>
              </div>
              <div style={{ ...overlay, background: 'var(--color-neutral-300)', opacity: c.nope * 0.85 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 34, color: 'var(--color-neutral-900)' }}>Straks weer</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 22px 14px' }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }} aria-label={`Tip ${deck.pos + 1} van ${TIPS.length}`}>
          {TIPS.map((_, j) => (
            <div key={j} style={{
              height: 8, borderRadius: 999, background: 'var(--color-text)', transition: 'width .3s, opacity .3s',
              width: j === deck.pos ? 22 : 8, opacity: j === deck.pos ? 1 : 0.22
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={deck.undo} className="btn btn-secondary btn-icon" style={{ width: 44, height: 44 }} title="Vorige" aria-label="Vorige tip">
            <Icon name="undo" size={18} />
          </button>
          <button onClick={deck.save} className="btn btn-primary" style={{ height: 44, padding: '0 18px', fontSize: 15 }}>Bewaar</button>
        </div>
      </div>
      <div style={{ padding: '0 22px 8px', fontSize: 12, color: 'var(--color-neutral-700)' }}>
        Veeg naar links voor later, naar rechts om te bewaren
      </div>
    </>
  );
}
