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

- The pool has 1140 tips: 140 in `src/tips.js` and 1000 more in `src/tips/` (one file per theme, 15 themes). Each day deals 15. The schedule changed twice and earlier days keep exactly what they showed, so the history stays true: 7 a day from the first 140 until 2 November 2026, 15 a day from the first 140 on 3–4 November, and from 5 November 15 a day from all tips, with the 1000 new ones first (66 days of unseen tips), after which a tip returns after at least 39 days. Add tips at the end of a list or in a new file listed last, because a tip's position is its id. **Geschiedenis** lists every day since you started (`firstDay` in the store, or the launch day for older installs) and shows that day's tips.
- **Bewaard**: every saved tip has a status (Wil ik doen / Mee bezig / Gedaan, with the date it was done) and a note (`notes` in the store). Tap a saved tip to edit them; right after saving, a toast offers *Notitie toevoegen*. The list can be filtered on Alles / Te doen / Gedaan.
- On screens at least 520×820 the app is drawn inside the 360×780 handset frame from the design. On a phone it fills the screen and uses the device's own status bar and safe-area insets instead of the drawn ones.
- Fonts are bundled through `@fontsource`, so they also work offline.
- The background is a rainforest photo (`src/assets/rainforest.jpg`, supplied by the owner) under a cream veil defined on `.screen` in `src/styles/app.css`.

## Online zetten en installeren

`.github/workflows/deploy-pages.yml` bouwt de app bij elke push naar `main` en zet hem op GitHub Pages: https://oceanbuzz01.github.io/Get-motivated/. Eenmalig nodig: in de repository onder *Settings → Pages* bij *Source* kiezen voor *GitHub Actions*.

Op Android: open het adres in Chrome en kies ⋮ → *App installeren*. Een service worker (`public/sw.js`) zorgt dat de app ook offline opent. Verhoog `CACHE` in dat bestand als je wilt dat oude gecachte bestanden direct worden opgeruimd.
