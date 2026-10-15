import { useCallback, useEffect, useRef, useState } from 'react';
import { mod } from './tips.js';

const THRESHOLD = 90;
const FLY_DISTANCE = 480;
const EASE = 'transform .32s cubic-bezier(.2,.8,.2,1)';

const raf2 = (fn) => requestAnimationFrame(() => requestAnimationFrame(fn));

/**
 * Swipeable card stack: drag the top card right to save, left for later.
 * `start` is the tip index the deck opens on; `onSave(idx)` fires when a card
 * flies right.
 */
export function useDeck({ start = 0, onSave }) {
  const [st, setSt] = useState({ i: 0, dx: 0, drag: false, snap: false });
  const drag = useRef(null);
  const busy = useRef(false);
  const stRef = useRef(st);
  stRef.current = st;
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const upd = (p) => setSt((s) => ({ ...s, ...p }));

  const fly = useCallback((dir) => {
    if (busy.current) return;
    busy.current = true;
    upd({ drag: false, dx: dir * FLY_DISTANCE });
    if (dir > 0) onSave?.(mod(start + stRef.current.i));
    timers.current.push(setTimeout(() => {
      setSt((s) => ({ i: s.i + 1, dx: 0, drag: false, snap: true }));
      raf2(() => { upd({ snap: false }); busy.current = false; });
    }, 300));
  }, [start, onSave]);

  const undo = useCallback(() => {
    if (busy.current || stRef.current.i === 0) return;
    busy.current = true;
    setSt((s) => ({ i: s.i - 1, dx: -FLY_DISTANCE, drag: false, snap: true }));
    raf2(() => {
      upd({ snap: false, dx: 0 });
      timers.current.push(setTimeout(() => { busy.current = false; }, 320));
    });
  }, []);

  const handlers = {
    onPointerDown(e) {
      if (busy.current) return;
      drag.current = { x: e.clientX };
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) { /* not capturable */ }
      upd({ drag: true, dx: 0 });
    },
    onPointerMove(e) {
      if (drag.current) upd({ dx: e.clientX - drag.current.x });
    },
    onPointerUp() {
      if (!drag.current) return;
      drag.current = null;
      const { dx } = stRef.current;
      if (Math.abs(dx) > THRESHOLD) fly(dx > 0 ? 1 : -1);
      else upd({ drag: false, dx: 0 });
    }
  };
  handlers.onPointerCancel = handlers.onPointerUp;

  /**
   * The three visible cards, bottom first. `fan` spreads the cards behind
   * sideways (1c) instead of stacking them downwards (1a, 1b).
   */
  function cards(fan = false) {
    const p = Math.min(Math.abs(st.dx) / 140, 1);
    const transition = st.drag || st.snap ? 'none' : EASE;
    return [2, 1, 0].map((depth) => {
      const top = depth === 0;
      let transform;
      if (top) transform = `translateX(${st.dx}px) rotate(${st.dx / 18}deg)`;
      else {
        const e = depth - (depth === 1 ? p : p * 0.5);
        transform = fan
          ? `translateX(${e * 8}px) rotate(${e * 3}deg)`
          : `translateY(${e * 12}px) scale(${1 - e * 0.05})`;
      }
      const like = top ? Math.max(0, Math.min(st.dx / THRESHOLD, 1)) : 0;
      const nope = top ? Math.max(0, Math.min(-st.dx / THRESHOLD, 1)) : 0;
      return {
        depth, top, idx: mod(start + st.i + depth),
        style: { transform, transition, zIndex: 3 - depth },
        like, nope,
        handlers: top ? handlers : {}
      };
    });
  }

  return { pos: mod(start + st.i), cards, save: () => fly(1), skip: () => fly(-1), undo };
}

/** Arrow keys: right saves, left skips, Backspace goes back. */
export function useDeckKeys(deck) {
  const ref = useRef(deck);
  ref.current = deck;
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea')) return;
      if (e.key === 'ArrowRight') ref.current.save();
      else if (e.key === 'ArrowLeft') ref.current.skip();
      else if (e.key === 'Backspace') ref.current.undo();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}
