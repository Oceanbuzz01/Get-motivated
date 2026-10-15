// The tip pool. A tip's position in this list is its id (saved tips and
// "Probeer vandaag" ticks store it), so only ever append new tips at the end.
export const TIPS = [
  { tag: 'Groei', title: 'Je hoeft het niet in één keer goed te doen.', body: 'Vooruitgang is ook: vandaag een klein beetje verder dan gisteren. Kleine stappen tellen echt.', try: 'Schrijf één ding op dat je vandaag beter deed dan gisteren.' },
  { tag: 'Zelfcompassie', title: 'Praat tegen jezelf zoals tegen een goede vriend.', body: 'Je zou een vriend niet afkraken om een foutje. Gun jezelf diezelfde mildheid.', try: 'Vervang één strenge gedachte door een vriendelijke zin.' },
  { tag: 'Mindfulness', title: 'Gedachten zijn geen feiten.', body: 'Merk een gedachte op en geef hem een naam — "ah, daar is de twijfel" — en laat hem weer voorbijdrijven.', try: 'Noem vandaag drie keer een gedachte bij naam.' },
  { tag: 'Groei', title: '"Nog niet" is ook een antwoord.', body: 'Zeg niet "ik kan dit niet", maar "ik kan dit nog niet". Dat ene woordje zet een deur open.', try: 'Voeg "nog" toe aan één zin waarin je jezelf tegenhoudt.' },
  { tag: 'Rust', title: 'Rust is geen beloning. Het is brandstof.', body: 'Je hoeft een pauze niet te verdienen. Even stilstaan is óók vooruitgaan.', try: 'Neem vijf minuten zonder scherm, gewoon voor jezelf.' },
  { tag: 'Focus', title: 'Kies één ding dat vandaag telt.', body: 'Niet tien. Eén. Lukt dat, dan is je dag geslaagd — de rest is bonus.', try: 'Schrijf je ene ding op een briefje en leg het in zicht.' },
  { tag: 'Gevoel', title: 'Ook het lastige gevoel mag er zijn.', body: 'Wegduwen maakt het groter. Ruimte geven maakt het zachter.', try: 'Adem drie keer diep in en zeg: "dit mag er even zijn".' },

  { tag: 'Dankbaarheid', title: 'Kleine dingen zijn ook groot.', body: 'Warme koffie, een zonnestraal, een lief berichtje. Wie ze opmerkt, geniet er twee keer van.', try: 'Noem vanavond drie kleine dingen die goed gingen.' },
  { tag: 'Moed', title: 'Moed voelt vaak als twijfel.', body: 'Je hoeft niet zeker te zijn om een stap te zetten. Bang zijn en het toch doen, dat is moed.', try: 'Doe één ding dat je al even voor je uitschuift.' },
  { tag: 'Verbinding', title: 'Een berichtje kan iemands dag maken.', body: 'Je denkt vaak aan mensen zonder het te zeggen. Zeg het eens wel.', try: 'Stuur iemand een kort "ik dacht aan je".' },
  { tag: 'Rust', title: 'Eén keer diep ademhalen telt al.', body: 'Je lijf luistert naar je adem. Langzaam uitademen zegt: het is veilig.', try: 'Adem vier tellen in en zes tellen uit, drie keer.' },
  { tag: 'Focus', title: 'Begin met twee minuten.', body: 'Een klus voelt groot zolang je hem niet begint. Twee minuten is klein genoeg om gewoon te doen.', try: 'Zet een timer op twee minuten en begin.' },
  { tag: 'Groei', title: 'Fouten zijn informatie.', body: 'Een misser zegt niets over wie je bent. Wel iets over wat je nog kunt leren.', try: 'Vraag je bij één foutje af: wat leer ik hiervan?' },
  { tag: 'Zelfcompassie', title: 'Je doet het beter dan je denkt.', body: 'Je innerlijke criticus ziet alleen wat misging. Kijk ook eens naar alles wat wél lukte.', try: 'Schrijf drie dingen op die je deze week goed deed.' },
  { tag: 'Gevoel', title: 'Benoemen helpt.', body: 'Een gevoel een naam geven, zoals "onrustig" of "teleurgesteld", maakt het al een beetje kleiner.', try: 'Benoem vandaag twee keer precies wat je voelt.' },
  { tag: 'Mindfulness', title: 'Je bent er nu.', body: 'Je hoofd zit vaak in morgen of gisteren. Je voeten staan altijd hier.', try: 'Voel even je voeten op de grond en kijk om je heen.' },
  { tag: 'Rust', title: 'Nee zeggen is ook zorg.', body: 'Elke ja kost tijd en energie. Een vriendelijke nee beschermt wat voor jou belangrijk is.', try: 'Zeg vandaag één keer bewust nee, of "later".' },
  { tag: 'Focus', title: 'Eén ding tegelijk.', body: 'Multitasken voelt productief, maar je brein schakelt alleen snel heen en weer. Dat kost energie.', try: 'Werk twintig minuten aan één ding, met je telefoon weg.' },
  { tag: 'Groei', title: 'Vergelijk je met jezelf van gisteren.', body: 'Anderen laten hun hoogtepunten zien. Jij kent ook de weg ernaartoe.', try: 'Bedenk waar je een jaar geleden stond.' },
  { tag: 'Zelfcompassie', title: 'Moe zijn is geen falen.', body: 'Soms is je lijf gewoon op. Dat is een signaal, geen zwakte.', try: 'Gun jezelf vandaag wat eerder je bed.' },
  { tag: 'Dankbaarheid', title: 'Zeg het hardop.', body: 'Dankbaarheid groeit als je hem deelt. En de ander krijgt er ook iets moois bij.', try: 'Bedank iemand vandaag voor iets kleins.' },
  { tag: 'Moed', title: 'Je mag om hulp vragen.', body: 'Hulp vragen is geen last voor anderen. De meeste mensen helpen graag.', try: 'Vraag iemand om hulp bij één klein ding.' },
  { tag: 'Mindfulness', title: 'Eet één hap heel langzaam.', body: 'Proef, ruik, voel. Even helemaal bij één ding zijn geeft je hoofd rust.', try: 'Neem de eerste hap van je lunch met aandacht.' },
  { tag: 'Gevoel', title: 'Gevoelens komen in golven.', body: 'Ook een heftig gevoel zakt weer. Je hoeft het alleen even uit te zitten.', try: 'Merk op hoe een gevoel na tien minuten veranderd is.' },
  { tag: 'Verbinding', title: 'Luisteren is een cadeau.', body: 'Echt luisteren, zonder meteen een antwoord te bedenken, voelt voor de ander als warmte.', try: 'Stel in een gesprek één extra vraag.' },
  { tag: 'Focus', title: 'Maak het jezelf makkelijk.', body: 'Wilskracht raakt op. Een slim ingerichte omgeving doet een deel van het werk voor je.', try: 'Leg vanavond klaar wat je morgen nodig hebt.' },
  { tag: 'Rust', title: 'Naar buiten is ook een pauze.', body: 'Tien minuten daglicht en frisse lucht doen meer dan nog een kop koffie.', try: 'Maak vandaag een korte wandeling zonder doel.' },
  { tag: 'Groei', title: 'Gewoontes groeien langzaam.', body: 'Na één dag zie je geen verschil. Na honderd dagen wel. Blijf kleine stapjes zetten.', try: 'Kies één mini-gewoonte en doe hem vandaag.' },
  { tag: 'Zelfcompassie', title: 'Goed genoeg is goed genoeg.', body: 'Perfect bestaat niet. De laatste tien procent kost vaak de meeste moeite en levert het minst op.', try: 'Rond één taak af op "goed genoeg".' },
  { tag: 'Moed', title: 'Het hoeft niet in één keer.', body: 'Een grote stap mag je opdelen. Een trap loop je ook tree voor tree.', try: 'Hak een grote klus op in drie kleine stappen.' },
  { tag: 'Mindfulness', title: 'Je hoeft niet op alles te reageren.', body: 'Tussen wat er gebeurt en wat je doet zit een kleine ruimte. Daar zit je keuze.', try: 'Tel tot vijf voordat je op iets reageert.' },
  { tag: 'Gevoel', title: 'Boosheid wijst ergens naar.', body: 'Vaak zit eronder iets wat je belangrijk vindt. Wat is er geraakt?', try: 'Vraag je bij irritatie af wat je eigenlijk nodig hebt.' },
  { tag: 'Dankbaarheid', title: 'Kijk eens naar wat er al is.', body: 'Je bent vaak bezig met wat nog moet. Even stilstaan bij wat er al is geeft rust.', try: 'Schrijf één ding op waar je blij mee bent.' },
  { tag: 'Verbinding', title: 'Je bent niet de enige.', body: 'Wat jij voelt, voelen meer mensen. Erover praten maakt het lichter.', try: 'Deel iets kleins dat je bezighoudt met iemand.' },
  { tag: 'Focus', title: 'Doe het lastigste eerst.', body: 'Een vervelende taak trekt de hele dag aan je. Doe hem vroeg en voel de opluchting.', try: 'Begin je dag met de taak die je het liefst uitstelt.' },
  { tag: 'Rust', title: 'Een rommelige dag mag ook.', body: 'Niet elke dag hoeft productief te zijn. Soms is gewoon doorkomen al genoeg.', try: 'Schrap vandaag één ding van je lijst, zonder schuldgevoel.' },
  { tag: 'Groei', title: 'Nieuwsgierigheid wint van angst.', body: 'Vraag je bij iets nieuws niet af wat er mis kan gaan, maar wat je zou kunnen ontdekken.', try: 'Probeer vandaag iets kleins wat je nog nooit deed.' },
  { tag: 'Zelfcompassie', title: 'Leg je hand op je hart.', body: 'Een warme aanraking kalmeert, ook als het je eigen hand is. Je lijf reageert erop.', try: 'Leg even je hand op je borst en adem rustig.' },
  { tag: 'Moed', title: 'Klein beginnen is ook beginnen.', body: 'Je hoeft niet te wachten tot je er klaar voor bent. Dat gevoel komt meestal pas onderweg.', try: 'Zet vandaag de allereerste stap van een plan.' },
  { tag: 'Mindfulness', title: 'Merk vijf dingen op.', body: 'Vijf dingen die je ziet, vier die je hoort, drie die je voelt. Je hoofd komt vanzelf tot rust.', try: 'Doe deze oefening op een druk moment.' },
  { tag: 'Gevoel', title: 'Huilen lucht op.', body: 'Tranen zijn geen zwakte. Zo laat je lijf spanning los.', try: 'Laat een emotie vandaag gewoon even toe.' },
  { tag: 'Verbinding', title: 'Een compliment kost niets.', body: 'Je denkt het vaak wel, maar zegt het niet. Een gemeend compliment blijft dagen hangen.', try: 'Geef vandaag iemand een gemeend compliment.' },
  { tag: 'Focus', title: 'Je telefoon kan even wachten.', body: 'Elke melding trekt je uit je werk. Een uurtje stilte geeft je je aandacht terug.', try: 'Zet je telefoon een uur op stil.' },
  { tag: 'Rust', title: 'Slaap is geen luxe.', body: 'Een goede nacht maakt alles lichter: je humeur, je focus, je geduld.', try: 'Leg je scherm een half uur voor het slapen weg.' },
  { tag: 'Groei', title: 'Je kunt meer dan vroeger.', body: 'Denk aan iets wat ooit moeilijk was. Nu doe je het misschien zonder nadenken.', try: 'Noem iets wat je nu kunt en vroeger niet.' },
  { tag: 'Zelfcompassie', title: 'Je hoeft niet altijd sterk te zijn.', body: 'Ook sterke mensen hebben zachte dagen. Die horen erbij.', try: 'Vertel iemand eerlijk hoe het echt met je gaat.' },
  { tag: 'Dankbaarheid', title: 'Je lijf doet zoveel voor je.', body: 'Het ademt, beweegt en herstelt de hele dag, zonder dat je erom vraagt.', try: 'Bedank je lijf in gedachten voor één ding.' },
  { tag: 'Moed', title: 'Wat zou je doen als je niet bang was?', body: 'Die vraag laat zien wat je eigenlijk wilt. Daarna kun je kijken wat wél kan.', try: 'Beantwoord die vraag vandaag op papier.' },
  { tag: 'Mindfulness', title: 'Wachten is ook een moment.', body: 'In de rij of bij het stoplicht kun je ook even ademen, in plaats van naar je telefoon te grijpen.', try: 'Kijk bij het volgende wachtmoment niet op je telefoon.' },
  { tag: 'Gevoel', title: 'Je mag blij zijn, ook als niet alles goed is.', body: 'Vreugde en zorgen kunnen naast elkaar bestaan. Het een wist het ander niet uit.', try: 'Geniet bewust van één fijn moment vandaag.' },
  { tag: 'Verbinding', title: 'Samen lachen verbindt.', body: 'Een gedeelde lach maakt contact meteen warmer, ook met iemand die je nauwelijks kent.', try: 'Deel vandaag iets grappigs met iemand.' },
  { tag: 'Focus', title: 'Weet waarom je het doet.', body: 'Een taak voelt lichter als je weet waar hij aan bijdraagt.', try: 'Schrijf bij je belangrijkste taak op waarom hij telt.' },
  { tag: 'Rust', title: 'Pauzes maken je sneller.', body: 'Na een korte pauze werk je scherper. Doorgaan zonder te stoppen kost je juist tijd.', try: 'Neem vandaag elk uur vijf minuten pauze.' },
  { tag: 'Groei', title: 'Feedback is een cadeautje.', body: 'Het voelt soms ongemakkelijk, maar het laat zien wat je zelf niet ziet.', try: 'Vraag iemand: wat kan ik beter doen?' },
  { tag: 'Zelfcompassie', title: 'Vergeef jezelf.', body: 'Je deed wat je kon met wat je toen wist. Nu weet je meer.', try: 'Laat één oude fout vandaag bewust los.' },
  { tag: 'Moed', title: 'Grenzen aangeven is gezond.', body: 'Een duidelijke grens beschermt je relaties. Het laat zien wat je nodig hebt.', try: 'Zeg vandaag eerlijk wat je wel en niet wilt.' },
  { tag: 'Mindfulness', title: 'Kijk eens omhoog.', body: 'Wolken, boomtoppen, een vogel. Even omhoog kijken haalt je uit je hoofd.', try: 'Kijk vandaag een minuut naar de lucht.' },
  { tag: 'Gevoel', title: 'Spanning is ook energie.', body: 'Zenuwen voor iets spannends lijken op zin hebben. Je kunt ook zeggen: "ik heb er zin in".', try: 'Noem je zenuwen vandaag eens "zin".' },
  { tag: 'Dankbaarheid', title: 'Er zijn mensen die om je geven.', body: 'Denk aan iemand die je steunt. Alleen die gedachte geeft al warmte.', try: 'Bedenk wie er voor je klaarstaat, en laat het weten.' },
  { tag: 'Focus', title: 'Minder is soms meer.', body: 'Een korte lijst die je afmaakt voelt beter dan een lange die je nooit haalt.', try: 'Zet maximaal drie dingen op je lijst voor vandaag.' },
  { tag: 'Rust', title: 'Doe iets alleen omdat het leuk is.', body: 'Niet om iets te bereiken. Gewoon omdat je er blij van wordt. Ook dat is waardevol.', try: 'Doe vandaag twintig minuten iets puur voor je plezier.' },
  { tag: 'Groei', title: 'Elke herhaling telt.', body: 'Talent helpt, maar oefenen maakt het verschil. Ook een korte oefening brengt je verder.', try: 'Oefen vandaag tien minuten iets wat je wilt leren.' },
  { tag: 'Zelfcompassie', title: 'Wees geduldig met jezelf.', body: 'Verandering kost tijd. Je bent onderweg, en dat is genoeg.', try: 'Zeg tegen jezelf: "ik ben onderweg".' },
  { tag: 'Verbinding', title: 'Vraag hoe het echt gaat.', body: '"Goed hoor" is vaak een automatisch antwoord. Een tweede vraag opent de deur.', try: 'Vraag vandaag bij iemand door: "en echt?"' },
  { tag: 'Moed', title: 'Je hoeft het niet alleen te doen.', body: 'Samen is iets moeilijks vaak minder zwaar. Zoek een maatje.', try: 'Vraag iemand om met je mee te doen.' },
  { tag: 'Mindfulness', title: 'Laat gedachten voorbijdrijven.', body: 'Gedachten komen en gaan, zoals wolken. Je hoeft ze niet vast te pakken.', try: 'Kijk vijf minuten naar je gedachten zonder er iets mee te doen.' },
  { tag: 'Gevoel', title: 'Verdriet hoort bij liefde.', body: 'Je mist iets omdat het belangrijk voor je was. Dat is niet erg, dat is menselijk.', try: 'Geef jezelf even ruimte voor iets wat je mist.' },
  { tag: 'Focus', title: 'Je energie is je kompas.', body: 'Merk op wanneer je de meeste energie hebt, en plan je belangrijkste werk op dat moment.', try: 'Let vandaag op wanneer je je het scherpst voelt.' },
  { tag: 'Rust', title: 'Stilte geeft ruimte.', body: 'Een paar minuten zonder muziek, podcast of scherm geeft je hoofd lucht.', try: 'Zit vijf minuten in stilte.' },
  { tag: 'Dankbaarheid', title: 'Vandaag is een nieuwe kans.', body: 'Gisteren is klaar. Vandaag mag je opnieuw beginnen, met alles wat je geleerd hebt.', try: 'Kies één ding dat je vandaag anders wilt doen.' }
];

// Tips shown per day: one deck.
export const DAILY = 7;

// Full-colour card fills for direction 1b, one per position in the daily deck.
export const B_COLORS = [
  { bg: '#8c491a', fg: '#f9f4ed' },
  { bg: '#ccdbb2', fg: '#272e1b' },
  { bg: '#2e2b25', fg: '#f5ead8' },
  { bg: '#ffc6a5', fg: '#402310' },
  { bg: '#56633f', fg: '#f0fae1' },
  { bg: '#dcd3c4', fg: '#2e2b25' },
  { bg: '#643312', fg: '#ffe1d0' }
];

// Small seeded PRNG, so every device shows the same tips on the same day.
function mulberry32(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffledPool(round) {
  const ids = TIPS.map((_, i) => i);
  const rand = mulberry32(round + 1);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}

export function dayNumber(date = new Date()) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

const EPOCH = dayNumber(new Date(2026, 0, 1));
const rounds = [];

// The order tips are dealt in during a round. Each round is a fresh shuffle,
// except that the second half of the previous round stays in the second half,
// so a tip never comes back within a few days of being shown.
function roundOrder(round) {
  for (let r = rounds.length; r <= round; r++) {
    const order = shuffledPool(r);
    if (r === 0) { rounds.push(order); continue; }
    const late = new Set(rounds[r - 1].slice(Math.ceil(order.length / 2)));
    rounds.push([...order.filter((i) => !late.has(i)), ...order.filter((i) => late.has(i))]);
  }
  return rounds[round];
}

/**
 * Today's tips as ids into TIPS. The pool is dealt out DAILY tips per day
 * without repeats; when it runs out, a new round starts in a new order.
 */
export function todaysTips(date = new Date()) {
  const perRound = Math.floor(TIPS.length / DAILY);
  const day = Math.max(0, dayNumber(date) - EPOCH);
  const round = Math.floor(day / perRound);
  const slot = day - round * perRound;
  return roundOrder(round).slice(slot * DAILY, slot * DAILY + DAILY);
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
