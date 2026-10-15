import Icon from '../components/Icon.jsx';
import { useDeck, useDeckKeys } from '../useDeck.js';
import { N, TIPS, dayOffset, todayLabel } from '../tips.js';

/** 1a Zachte kaart: classic stack, round actions, Material bottom navigation. */
export default function HomeA({ store, onShare }) {
  const deck = useDeck({ start: dayOffset(), onSave: store.save });
  useDeckKeys(deck);

  return (
    <>
      <div style={{ padding: '14px 24px 10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div className="kicker" style={{ color: 'var(--color-neutral-700)' }}>{todayLabel()}</div>
          <h1 style={{ fontSize: 28, lineHeight: 1.1, margin: '4px 0 0', letterSpacing: 0 }}>Jouw tips van vandaag</h1>
        </div>
        <button onClick={deck.undo} className="btn btn-secondary btn-icon" style={{ width: 44, height: 44, flex: 'none' }} title="Vorige" aria-label="Vorige tip">
          <Icon name="undo" />
        </button>
      </div>

      <div className="stack" style={{ margin: '10px 22px 0' }}>
        {deck.cards().map((c) => {
          const t = TIPS[c.idx];
          return (
            <div key={c.depth} {...c.handlers} className="swipe-card" aria-hidden={!c.top}
              style={{
                ...c.style, inset: '0 0 18px', background: 'var(--color-neutral-100)', borderRadius: 32,
                boxShadow: 'var(--shadow-md)', padding: '26px 26px 24px', gap: 14, transformOrigin: '50% 100%'
              }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="tag tag-accent">{t.tag}</span>
                <span style={{ fontSize: 12, color: 'var(--color-neutral-700)' }}>{c.idx + 1} / {N}</span>
              </div>
              <div className="flex-spacer" />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 30, lineHeight: 1.1, letterSpacing: '-.01em', textWrap: 'pretty' }}>{t.title}</div>
              <div style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--color-neutral-800)', textWrap: 'pretty' }}>{t.body}</div>
              <div style={{
                position: 'absolute', top: 22, left: 22, padding: '6px 14px', borderRadius: 999,
                border: '2px solid var(--color-accent-2-600)', color: 'var(--color-accent-2-700)', background: 'var(--color-accent-2-100)',
                fontWeight: 700, fontSize: 13, transform: 'rotate(-8deg)', opacity: c.like
              }}>Bewaard</div>
              <div style={{
                position: 'absolute', top: 22, right: 22, padding: '6px 14px', borderRadius: 999,
                border: '2px solid var(--color-neutral-500)', color: 'var(--color-neutral-800)', background: 'var(--color-neutral-200)',
                fontWeight: 700, fontSize: 13, transform: 'rotate(8deg)', opacity: c.nope
              }}>Later</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, padding: '14px 0 16px' }}>
        <button onClick={deck.skip} className="btn btn-secondary btn-round btn-soft" style={{ width: 56, height: 56 }} title="Later" aria-label="Later">
          <Icon name="x" size={22} />
        </button>
        <button onClick={deck.save} className="btn btn-primary btn-round" style={{ width: 68, height: 68, boxShadow: 'var(--shadow-md)' }} title="Bewaren" aria-label="Bewaren">
          <Icon name="heart" size={28} />
        </button>
        <button onClick={() => onShare(TIPS[deck.pos])} className="btn btn-secondary btn-round btn-soft" style={{ width: 56, height: 56 }} title="Delen" aria-label="Delen">
          <Icon name="share" size={22} />
        </button>
      </div>
    </>
  );
}
