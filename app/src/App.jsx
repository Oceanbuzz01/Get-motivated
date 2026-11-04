import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './components/Icon.jsx';
import { useStore } from './store.js';
import { dayNumber } from './tips.js';
import HomeA from './screens/HomeA.jsx';
import HomeB from './screens/HomeB.jsx';
import HomeC from './screens/HomeC.jsx';
import Saved, { SavedTip } from './screens/Saved.jsx';
import History, { Day } from './screens/History.jsx';
import Me from './screens/Me.jsx';
import Onboarding from './screens/Onboarding.jsx';

const HOMES = { a: HomeA, b: HomeB, c: HomeC };

function BottomNav({ screen, go, saved }) {
  const item = (id, icon, label, badge) => (
    <button className="nav-item" aria-current={screen === id || (id === 'history' && screen === 'day') || (id === 'saved' && screen === 'tip') ? 'page' : undefined} onClick={() => go(id)}>
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
  else if (screen === 'me') content = <Me store={store} onBack={back} />;
  else if (screen === 'history') content = <History store={store} onBack={back} openDay={(d) => { setOpenDay(d); setScreen('day'); }} />;
  else if (screen === 'day' && openDay != null) content = <Day store={store} day={openDay} onBack={() => setScreen('history')} onShare={share} />;
  else content = <Home key={`${store.style}-${day}`} store={store} go={setScreen} onShare={share} />;

  return (
    <div className="device">
      <main className={store.onboarded && screen !== 'home' ? 'screen page' : 'screen'}>
        <div className="inset-top" />
        {content}
        {store.onboarded && tabs && <BottomNav screen={screen} go={setScreen} saved={store.saved.length} />}
        <div className="inset-bottom" />
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
