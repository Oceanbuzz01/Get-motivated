import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './components/Icon.jsx';
import { useStore } from './store.js';
import HomeA from './screens/HomeA.jsx';
import HomeB from './screens/HomeB.jsx';
import HomeC from './screens/HomeC.jsx';
import Saved from './screens/Saved.jsx';
import Me from './screens/Me.jsx';
import Onboarding from './screens/Onboarding.jsx';

const HOMES = { a: HomeA, b: HomeB, c: HomeC };

function BottomNav({ screen, go, saved }) {
  const item = (id, icon, label, badge) => (
    <button className="nav-item" aria-current={screen === id ? 'page' : undefined} onClick={() => go(id)}>
      <div className="pill"><Icon name={icon} />{badge}</div>
      {label}
    </button>
  );
  return (
    <nav className="bottom-nav">
      {item('home', 'sun', 'Vandaag')}
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

  // A reset sends you back through onboarding from the start.
  useEffect(() => { if (!store.onboarded) setScreen('home'); }, [store.onboarded]);

  const flash = useCallback((msg) => {
    clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

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
  else if (screen === 'saved') content = <Saved store={store} onBack={back} onShare={share} />;
  else if (screen === 'me') content = <Me store={store} onBack={back} />;
  else content = <Home key={store.style} store={store} go={setScreen} onShare={share} />;

  return (
    <div className="device">
      <main className="screen">
        <div className="inset-top" />
        {content}
        {store.onboarded && tabs && <BottomNav screen={screen} go={setScreen} saved={store.saved.length} />}
        <div className="inset-bottom" />
        {toast && <div className="toast" role="status">{toast}</div>}
      </main>
    </div>
  );
}
