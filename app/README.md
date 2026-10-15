# We can do this — elke dag motiverende tips

Mobile web app (installable on Android as a PWA) built from the Claude Design handoff in `../project/Motivatie App.dc.html`, using the Organic design system (`src/styles/organic.css`, copied from `../project/styles.css`).

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## What's in it

- **Onboarding** (`src/screens/Onboarding.jsx`): welcome → name → pick a style. Not in the design; built from the 1c sun and progress segments.
- **Three home styles**, one per design direction, switchable under *Ik*:
  - `HomeC.jsx` — 1c Ochtendritueel (default): rising sun, progress, a "Probeer vandaag" task to tick off.
  - `HomeA.jsx` — 1a Zachte kaart: card stack, round actions, bottom navigation.
  - `HomeB.jsx` — 1b Kleurvlak: full-colour cards, big numerals, dot pager.
- **Bewaard** and **Ik** screens. 1a reaches them from its bottom nav; 1b from the heart pill and title; 1c from two small buttons on the date row.
- Swipe logic (`src/useDeck.js`) is a port of the prototype's: 90px threshold, 480px fly-out, same easing and stack transforms. Arrow keys also work (→ bewaren, ← later, Backspace vorige).

## Notes

- The pool has 140 tips (`src/tips.js`); each day deals 7 new ones, so you get new tips for 20 days before a new round starts in a different order. A tip never returns within 11 days. Add tips at the end of the list only, because a tip's position is its id. "Probeer vandaag" ticks reset daily. Saved tips, name and style live in `localStorage`.
- On screens at least 520×820 the app is drawn inside the 360×780 handset frame from the design. On a phone it fills the screen and uses the device's own status bar and safe-area insets instead of the drawn ones.
- Fonts are bundled through `@fontsource`, so they also work offline.
