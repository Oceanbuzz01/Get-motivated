// Small rewards: a short buzz on Android and a burst of confetti. Both stay
// quiet when the phone asks for reduced motion or cannot vibrate.
const quiet = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function buzz(pattern = 15) {
  try { navigator.vibrate?.(pattern); } catch (_) { /* not supported */ }
}

const COLORS = ['#d67f48', '#8fa073', '#ffc6a5', '#f6c445', '#7fa7d9', '#e58fb0'];

/** Confetti bursting from the middle of `el`. */
export function celebrate(el) {
  buzz([12, 40, 24]);
  if (quiet() || !el) return;
  const screen = el.closest('.screen') || document.body;
  const box = el.getBoundingClientRect(), base = screen.getBoundingClientRect();
  const x = box.left + box.width / 2 - base.left, y = box.top + box.height / 2 - base.top;
  for (let i = 0; i < 26; i++) {
    const p = document.createElement('span');
    const angle = (Math.PI * 2 * i) / 26 + Math.random() * 0.4;
    const dist = 50 + Math.random() * 70;
    p.className = 'confetti';
    p.style.cssText = `left:${x}px;top:${y}px;background:${COLORS[i % COLORS.length]};` +
      `--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist - 30}px;--r:${Math.random() * 540 - 270}deg;` +
      `border-radius:${i % 3 ? '2px' : '50%'}`;
    screen.appendChild(p);
    setTimeout(() => p.remove(), 950);
  }
}
