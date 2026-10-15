import Icon from '../components/Icon.jsx';
import { useTodayDeck } from '../useDeck.js';
import { DAILY, TIPS, greeting, todayLabel } from '../tips.js';

const ring = { position: 'absolute', inset: 0, borderRadius: 36, pointerEvents: 'none' };

/** The rising sun behind 1c; also reused by onboarding. `progress` runs 0 → 1. */
export function Sun({ progress }) {
  return (
    <>
      <div className="sun" style={{
        position: 'absolute', right: -60, top: 0, width: 250, height: 250, borderRadius: '50%', background: 'var(--color-accent-300)',
        transform: `translateY(${150 - progress * 210}px)`, transition: 'transform .8s cubic-bezier(.2,.8,.2,1)'
      }} />
      <div className="sun" style={{
        position: 'absolute', right: 30, top: 0, width: 80, height: 80, borderRadius: '50%', background: 'var(--color-accent-200)',
        transform: `translateY(${230 - progress * 200}px)`, transition: 'transform 1s cubic-bezier(.2,.8,.2,1)'
      }} />
    </>
  );
}

/** 1c Ochtendritueel: rising sun, progress, tip plus a small task for today. */
export default function HomeC({ store, go }) {
  const { ids, deck } = useTodayDeck(store);
  const step = deck.pos;

  return (
    <>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <Sun progress={step / (DAILY - 1)} />
      </div>
      <div style={{ position: 'relative', padding: '22px 26px 0' }}>
        {/* The design has no route to Bewaard / Ik here; two small buttons share the date row. */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '-10px 0 -10px' }}>
          <div className="kicker" style={{ color: 'var(--color-neutral-800)' }}>{todayLabel()}</div>
          <div style={{ display: 'flex', gap: 6, flex: 'none' }}>
            <button onClick={() => go('saved')} className="btn btn-secondary btn-icon" style={{ background: 'var(--color-neutral-100)' }} aria-label={`Bewaard: ${store.saved.length}`} title="Bewaard">
              <Icon name="bookmark" size={16} />
            </button>
            <button onClick={() => go('me')} className="btn btn-secondary btn-icon" style={{ background: 'var(--color-neutral-100)' }} aria-label="Ik" title="Ik">
              <Icon name="user" size={16} />
            </button>
          </div>
        </div>
        <h1 style={{ fontSize: 32, lineHeight: 1.08, margin: '6px 0 0', letterSpacing: 0 }}>
          {store.name ? <>{greeting()},<br />{store.name}</> : greeting()}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
          <div style={{ flex: 1, display: 'flex', gap: 4 }}>
            {ids.map((_, j) => (
              <div key={j} style={{ flex: 1, height: 6, borderRadius: 999, background: 'var(--color-accent-700)', opacity: j <= step ? 1 : 0.18, transition: 'opacity .3s' }} />
            ))}
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent-800)' }}>{step + 1} van {DAILY}</span>
        </div>
      </div>

      <div className="stack" style={{ margin: '22px 26px 0' }}>
        {deck.cards(true).map((c) => {
          const id = ids[c.pos];
          const t = TIPS[id];
          const done = !!store.done.ids[id];
          return (
            <div key={c.depth} {...c.handlers} className="swipe-card" aria-hidden={!c.top}
              style={{
                ...c.style, inset: '0 0 14px', background: 'var(--color-neutral-100)', borderRadius: 36,
                boxShadow: 'var(--shadow-md)', padding: 24, gap: 12, transformOrigin: '50% 120%'
              }}>
              <span className="tag tag-accent-2" style={{ alignSelf: 'flex-start' }}>{t.tag}</span>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 26, lineHeight: 1.12, textWrap: 'pretty', marginTop: 4 }}>{t.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--color-neutral-800)', textWrap: 'pretty' }}>{t.body}</div>
              <div className="flex-spacer" />
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={c.top ? () => store.toggleDone(id) : undefined}
                role="checkbox" aria-checked={done} tabIndex={c.top ? 0 : -1}
                style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start', padding: '14px 16px', borderRadius: 24, border: 0, textAlign: 'left',
                  background: 'var(--color-accent-2-100)', color: 'var(--color-accent-2-800)', cursor: 'pointer'
                }}>
                {done ? (
                  <div style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'var(--color-accent-2-600)', color: 'var(--color-neutral-100)', display: 'grid', placeItems: 'center' }}>
                    <Icon name="check" size={15} stroke={3.25} />
                  </div>
                ) : (
                  <div style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', border: '2.5px solid var(--color-accent-2-500)' }} />
                )}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Probeer vandaag</div>
                  <div style={{ fontSize: 14, lineHeight: 1.4, marginTop: 2 }}>{t.try}</div>
                </div>
              </button>
              <div style={{ ...ring, border: '3px solid var(--color-accent-2-500)', opacity: c.like }} />
              <div style={{ ...ring, border: '3px solid var(--color-neutral-500)', opacity: c.nope }} />
            </div>
          );
        })}
      </div>

      <div style={{ position: 'relative', display: 'flex', gap: 10, padding: '12px 26px 16px' }}>
        <button onClick={deck.skip} className="btn btn-secondary btn-soft" style={{ flex: 1, height: 52, fontSize: 16 }}>Later</button>
        <button onClick={deck.save} className="btn btn-primary" style={{ flex: 1.4, height: 52, fontSize: 16, gap: 8 }}>
          <Icon name="heart" size={18} />Bewaar
        </button>
      </div>
    </>
  );
}
