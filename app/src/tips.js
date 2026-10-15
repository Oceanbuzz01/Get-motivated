export const TIPS = [
  { tag: 'Groei', title: 'Je hoeft het niet in één keer goed te doen.', body: 'Vooruitgang is ook: vandaag een klein beetje verder dan gisteren. Kleine stappen tellen echt.', try: 'Schrijf één ding op dat je vandaag beter deed dan gisteren.' },
  { tag: 'Zelfcompassie', title: 'Praat tegen jezelf zoals tegen een goede vriend.', body: 'Je zou een vriend niet afkraken om een foutje. Gun jezelf diezelfde mildheid.', try: 'Vervang één strenge gedachte door een vriendelijke zin.' },
  { tag: 'Mindfulness', title: 'Gedachten zijn geen feiten.', body: 'Merk een gedachte op en geef hem een naam — "ah, daar is de twijfel" — en laat hem weer voorbijdrijven.', try: 'Noem vandaag drie keer een gedachte bij naam.' },
  { tag: 'Groei', title: '"Nog niet" is ook een antwoord.', body: 'Zeg niet "ik kan dit niet", maar "ik kan dit nog niet". Dat ene woordje zet een deur open.', try: 'Voeg "nog" toe aan één zin waarin je jezelf tegenhoudt.' },
  { tag: 'Rust', title: 'Rust is geen beloning. Het is brandstof.', body: 'Je hoeft een pauze niet te verdienen. Even stilstaan is óók vooruitgaan.', try: 'Neem vijf minuten zonder scherm, gewoon voor jezelf.' },
  { tag: 'Focus', title: 'Kies één ding dat vandaag telt.', body: 'Niet tien. Eén. Lukt dat, dan is je dag geslaagd — de rest is bonus.', try: 'Schrijf je ene ding op een briefje en leg het in zicht.' },
  { tag: 'Gevoel', title: 'Ook het lastige gevoel mag er zijn.', body: 'Wegduwen maakt het groter. Ruimte geven maakt het zachter.', try: 'Adem drie keer diep in en zeg: "dit mag er even zijn".' }
];

// Full-colour card fills for direction 1b, one per tip.
export const B_COLORS = [
  { bg: '#8c491a', fg: '#f9f4ed' },
  { bg: '#ccdbb2', fg: '#272e1b' },
  { bg: '#2e2b25', fg: '#f5ead8' },
  { bg: '#ffc6a5', fg: '#402310' },
  { bg: '#56633f', fg: '#f0fae1' },
  { bg: '#dcd3c4', fg: '#2e2b25' },
  { bg: '#643312', fg: '#ffe1d0' }
];

export const N = TIPS.length;
export const mod = (n) => ((n % N) + N) % N;

// Each day starts the deck at a different tip, so the first card changes daily.
export function dayOffset(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  return mod(Math.floor((date - start) / 86400000));
}

export function todayLabel(date = new Date()) {
  const s = date.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' });
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function greeting(date = new Date()) {
  const h = date.getHours();
  if (h < 12) return 'Goedemorgen';
  if (h < 18) return 'Goedemiddag';
  return 'Goedenavond';
}
