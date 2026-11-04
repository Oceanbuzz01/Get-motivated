import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from './components/Icon.jsx';
import { useStore } from './store.js';
import { dayNumber } from './tips.js';
import { buzz } from './rewards.js';
import HomeA from './screens/HomeA.jsx';
import HomeB from './screens/HomeB.jsx';
import HomeC from './screens/HomeC.jsx';
import Saved, { SavedTip } from './screens/Saved.jsx';
import History, { Day } from './screens/History.jsx';
import Me, { Themes } from './screens/Me.jsx';
import { MoodPicker } from './components/Bits.jsx';
import { deckSig, personalDeck, streak } from './personal.js';
import Onboarding from './screens/Onboarding.jsx';

const HOMES = { a: HomeA, b: HomeB, c: HomeC };

function daypart(h = new Date().getHours()) {
  if (h >= 5 && h < 11) return 'morning';
  if (h >= 11 && h < 17) return 'day';
  if (h >= 17 && h < 22) return 'evening';
  return 'night';
}

function BottomNav({ screen, go, saved }) {
  const item = (id, icon, label, badge) => (
    <button className="nav-item" aria-current={screen === id || (id === 'history' && screen === 'day') || (id === 'saved' && screen === 'tip') || (id === 'me' && screen === 'themes') ? 'page' : undefined} onClick={() => go(id)}>
      <div className="pill"><Icon name={icon} />{badge}</div>
      {label}
    </button>
  );
  return (
    <nav className="bottom-nav">
      {item('home', 'sun', 'Vandaag')}
      {item('history', 'history', 'Geschiedenis')}
      {item('saved', 'bookmark', 'Bewaard', <span className="badge">{saved}</span>)}
      {item('me', 'user', 'Ik')}
    </nav>
  );
}

export default function App() {
  const store = useStore();
  const [screen, setScreen] = useState('home');
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();
  const [day, setDay] = useState(dayNumber);
  const [openDay, setOpenDay] = useState(null);
  const [openTip, setOpenTip] = useState(null);
  const [tipBack, setTipBack] = useState('saved');

  // When the app comes back into view on a new day, deal the new day's tips.
  useEffect(() => {
    const check = () => { if (document.visibilityState === 'visible') setDay(dayNumber()); };
    document.addEventListener('visibilitychange', check);
    return () => document.removeEventListener('visibilitychange', check);
  }, []);

  // Today's tips for you, fixed in the day log so the history keeps them.
  const sig = deckSig(store);
  const logged = store.dayLog?.[day];
  const todayIds = useMemo(
    () => (logged && logged.sig === sig ? logged.ids : personalDeck(day, store)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [day, sig, logged]
  );
  useEffect(() => {
    if (store.onboarded && (!logged || logged.sig !== sig)) store.logDay(day, todayIds, sig);
  }, [store.onboarded, day, sig, logged, todayIds, store.logDay]);
  useEffect(() => { if (store.onboarded) store.visit(day); }, [store.onboarded, day, store.visit]);

  // In the evening, ask once how the day was.
  const askMood = store.onboarded && screen === 'home' && new Date().getHours() >= 18
    && !store.moods?.[day] && store.moodAsked !== day;

  // A reset sends you back through onboarding from the start.
  useEffect(() => { if (!store.onboarded) setScreen('home'); }, [store.onboarded]);

  const flash = useCallback((msg, action) => {
    clearTimeout(toastTimer.current);
    setToast({ msg, action });
    toastTimer.current = setTimeout(() => setToast(null), action ? 4000 : 1800);
  }, []);

  const showTip = useCallback((id, from) => {
    setOpenTip(id); setTipBack(from); setScreen('tip'); setToast(null);
  }, []);

  // Right after saving a tip, offer to add a note without getting in the way.
  const lastSaved = useRef(store.saved[0]);
  const savedCount = useRef(store.saved.length);
  useEffect(() => {
    const first = store.saved[0];
    const grew = store.saved.length > savedCount.current;
    savedCount.current = store.saved.length;
    if (grew && first !== lastSaved.current) buzz();
    if (grew && first !== lastSaved.current && (screen === 'home' || screen === 'day')) {
      flash('Tip bewaard', { label: 'Notitie toevoegen', run: () => showTip(first, screen === 'day' ? 'day' : 'home') });
    }
    lastSaved.current = first;
  }, [store.saved, screen, flash, showTip]);

  const share = useCallback(async (tip) => {
    const text = `${tip.title} ${tip.body}\n\nWe can do this.`;
    try {
      if (navigator.share) { await navigator.share({ title: tip.title, text }); return; }
    } catch (e) {
      if (e?.name === 'AbortError') return;
      // Share sheet refused (e.g. in an embedded frame): fall back to copying.
    }
    try {
      await navigator.clipboard.writeText(text);
      flash('Tip gekopieerd');
    } catch (_) {
      flash('Delen lukte niet');
    }
  }, [flash]);

  const tabs = store.style === 'a';
  const back = tabs ? undefined : () => setScreen('home');
  const Home = HOMES[store.style] || HomeC;

  let content;
  if (!store.onboarded) content = <Onboarding store={store} />;
  else if (screen === 'saved') content = <Saved store={store} onBack={back} openTip={(id) => showTip(id, 'saved')} />;
  else if (screen === 'tip' && openTip != null) content = <SavedTip store={store} id={openTip} onBack={() => setScreen(tipBack)} onShare={share} />;
  else if (screen === 'me') content = <Me store={store} onBack={back} go={setScreen} />;
  else if (screen === 'themes') content = <Themes store={store} onBack={() => setScreen('me')} />;
  else if (screen === 'history') content = <History store={store} onBack={back} openDay={(d) => { setOpenDay(d); setScreen('day'); }} />;
  else if (screen === 'day' && openDay != null) content = <Day store={store} day={openDay} onBack={() => setScreen('history')} onShare={share} />;
  else content = <Home key={`${store.style}-${day}-${sig}`} store={store} todayIds={todayIds} streakN={streak(store.visits, day)} go={setScreen} onShare={share} />;

  return (
    <div className="device">
      <main className={store.onboarded && screen !== 'home' ? 'screen page' : 'screen'} data-daypart={daypart()} data-text={store.textSize || 'normaal'}>
        <div className="inset-top" />
        {content}
        {store.onboarded && tabs && <BottomNav screen={screen} go={setScreen} saved={store.saved.length} />}
        <div className="inset-bottom" />
        {askMood && <div className="evening-backdrop" onClick={() => store.set({ moodAsked: day })} />}
        {askMood && (
          <div className="evening-card" role="dialog" aria-modal="true" aria-label="Hoe was je dag?">
            <div className="evening-head">
              <span className="summary-title">Hoe was je dag{store.name ? `, ${store.name}` : ''}?</span>
              <button className="btn btn-ghost btn-icon" style={{ color: 'var(--color-neutral-700)' }} aria-label="Later" title="Later"
                onClick={() => store.set({ moodAsked: day })}><Icon name="x" size={18} /></button>
            </div>
            <MoodPicker value={null} onPick={(lvl) => { store.setMood(day, lvl); store.set({ moodAsked: day }); flash('Dank je. Je vindt het terug in Geschiedenis.'); }} />
          </div>
        )}
        {toast && (
          <div className={`toast${toast.action ? ' has-action' : ''}${tabs && screen === 'home' ? ' high' : ''}`} role="status">
            {toast.msg}
            {toast.action && <button className="toast-action" onClick={toast.action.run}>{toast.action.label}</button>}
          </div>
        )}
      </main>
    </div>
  );
}
