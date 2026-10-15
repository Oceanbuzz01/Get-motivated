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
  { tag: 'Dankbaarheid', title: 'Vandaag is een nieuwe kans.', body: 'Gisteren is klaar. Vandaag mag je opnieuw beginnen, met alles wat je geleerd hebt.', try: 'Kies één ding dat je vandaag anders wilt doen.' },

  { tag: 'Groei', title: 'Leren voelt eerst onhandig.', body: 'Dat ongemak betekent niet dat je het niet kunt. Het betekent dat je brein aan het bouwen is.', try: 'Doe iets nieuws en laat het gerust onhandig zijn.' },
  { tag: 'Zelfcompassie', title: 'Je bent meer dan wat je presteert.', body: 'Wat je doet is niet wie je bent. Je bent ook waardevol op een dag waarop weinig lukt.', try: 'Noem drie dingen aan jezelf die niets met werk te maken hebben.' },
  { tag: 'Mindfulness', title: 'Neem één bewuste slok.', body: 'Voel de warmte of de koelte van je drinken. Een kleine pauze midden in je dag.', try: 'Drink je volgende kopje met volle aandacht.' },
  { tag: 'Rust', title: 'Je mag stoppen voordat je op bent.', body: 'Wacht niet tot je uitgeput bent. Op tijd rusten voorkomt dat je lang moet herstellen.', try: 'Neem vandaag een pauze voordat je moe bent.' },
  { tag: 'Focus', title: 'Ruim je werkplek op.', body: 'Een opgeruimde plek geeft een opgeruimd hoofd. Minder spullen, minder afleiding.', try: 'Ruim vijf minuten je bureau of tafel op.' },
  { tag: 'Gevoel', title: 'Angst wil je beschermen.', body: 'Angst is een alarm dat soms te hard afgaat. Bedank het, en kijk dan wat er echt nodig is.', try: 'Zeg tegen je angst: "dank je, ik kijk zelf even".' },
  { tag: 'Dankbaarheid', title: 'Wie heeft je vandaag geholpen?', body: 'Vaak helpen mensen ons zonder dat we het merken. Een buschauffeur, een collega, een vriend.', try: 'Noem drie mensen die je vandaag hielpen.' },
  { tag: 'Moed', title: 'Je stem doet ertoe.', body: 'Wat jij denkt, is waardevol. Ook als je het spannend vindt om het te zeggen.', try: 'Zeg vandaag één keer wat je echt vindt.' },
  { tag: 'Verbinding', title: 'Een glimlach werkt aanstekelijk.', body: 'Een vriendelijke blik naar een onbekende maakt een klein moment warmer, voor jullie allebei.', try: 'Glimlach vandaag naar drie mensen.' },
  { tag: 'Groei', title: 'Kleine winst is ook winst.', body: 'Een beetje beter is genoeg om te groeien. Je hoeft geen grote sprongen te maken.', try: 'Vier vandaag een kleine vooruitgang.' },
  { tag: 'Zelfcompassie', title: 'Een slechte dag is geen slecht leven.', body: 'Morgen is een nieuwe dag. Eén lastige dag zegt weinig over het geheel.', try: 'Sluit de dag af met: "morgen begin ik opnieuw".' },
  { tag: 'Mindfulness', title: 'Luister naar de geluiden om je heen.', body: 'Verkeer, vogels, stemmen. Gewoon horen, zonder oordeel, brengt je in het nu.', try: 'Sluit een minuut je ogen en tel de geluiden.' },
  { tag: 'Rust', title: 'Een lege avond is ook een plan.', body: 'Tijd zonder afspraken geeft ruimte om op te laden. Die ruimte mag je beschermen.', try: 'Houd deze week één avond vrij van plannen.' },
  { tag: 'Focus', title: 'Bepaal wanneer je klaar bent.', body: 'Zonder eindpunt werk je maar door. Een duidelijk einde maakt je dag lichter.', try: 'Kies vandaag een tijd waarop je stopt met werken.' },
  { tag: 'Gevoel', title: 'Jaloezie laat zien wat je wilt.', body: 'Als je iemand iets misgunt, zit daar vaak een wens van jezelf in. Wat is die wens?', try: 'Vraag je bij jaloezie af: wat zou ik zelf willen?' },
  { tag: 'Dankbaarheid', title: 'Geniet van iets gewoons.', body: 'Een schoon bed, een warme jas, een goed boek. Gewone dingen zijn eigenlijk heel bijzonder.', try: 'Kies één gewoon ding en geniet er bewust van.' },
  { tag: 'Moed', title: 'Falen betekent dat je het probeerde.', body: 'Wie nooit faalt, probeert waarschijnlijk niet genoeg. Elke poging is een stap.', try: 'Probeer iets waarvan je niet zeker weet of het lukt.' },
  { tag: 'Verbinding', title: 'Maak tijd voor echt contact.', body: 'Een appje is fijn, maar samen koffie drinken of bellen voelt dichterbij.', try: 'Bel iemand in plaats van te appen.' },
  { tag: 'Groei', title: 'Vraag eens: hoe dan wel?', body: 'In plaats van "dat lukt me nooit" kun je vragen hoe het wél zou kunnen. Dan gaat je hoofd zoeken.', try: 'Vervang één "dat lukt niet" door "hoe zou het kunnen?"' },
  { tag: 'Zelfcompassie', title: 'Zachtjes is ook een snelheid.', body: 'Je hoeft niet altijd vol gas. Rustig aan doen is soms precies wat nodig is.', try: 'Doe vandaag één ding bewust wat langzamer.' },
  { tag: 'Mindfulness', title: 'Scan je lijf van top tot teen.', body: 'Waar zit spanning? Vaak in je kaak, schouders of buik. Opmerken is al een begin van ontspannen.', try: 'Laat je schouders zakken en ontspan je kaak.' },
  { tag: 'Rust', title: 'Strek je even uit.', body: 'Na lang zitten wil je lijf bewegen. Even rekken geeft meteen meer energie.', try: 'Sta op en rek je een minuut uit.' },
  { tag: 'Focus', title: 'Schrijf je hoofd leeg.', body: 'Een vol hoofd werkt slecht. Alles op papier zetten maakt ruimte vrij.', try: 'Schrijf vijf minuten alles op wat door je hoofd gaat.' },
  { tag: 'Gevoel', title: 'Je hoeft je niet goed te voelen om goed bezig te zijn.', body: 'Ook op een sombere dag kun je kleine goede dingen doen. Het gevoel volgt vaak later.', try: 'Doe vandaag één goed ding, hoe je je ook voelt.' },
  { tag: 'Dankbaarheid', title: 'Schrijf een bedankbriefje.', body: 'Een paar zinnen op papier blijven lang bij iemand hangen. En jij voelt je er ook goed door.', try: 'Schrijf iemand een kort bedankje.' },
  { tag: 'Moed', title: 'Sorry zeggen is sterk.', body: 'Je fout toegeven vraagt moed. Het herstelt vertrouwen en maakt je lichter.', try: 'Zeg sorry voor iets wat je dwarszit.' },
  { tag: 'Verbinding', title: 'Een knuffel zegt veel.', body: 'Een lange knuffel geeft rust en warmte, voor allebei. Woorden zijn dan even niet nodig.', try: 'Geef of vraag vandaag een knuffel.' },
  { tag: 'Groei', title: 'Je mag van gedachten veranderen.', body: 'Iets nieuws leren en je mening bijstellen is geen zwakte. Het is groei.', try: 'Bedenk iets waar je anders over bent gaan denken.' },
  { tag: 'Zelfcompassie', title: 'Je gevoelens kloppen.', body: 'Ook als anderen het anders zien. Wat jij voelt, mag er zijn.', try: 'Zeg tegen jezelf: "het is logisch dat ik me zo voel".' },
  { tag: 'Mindfulness', title: 'Doe één ding helemaal.', body: 'Afwassen, tandenpoetsen, wandelen. Als je er echt bij bent, wordt het een moment van rust.', try: 'Doe een dagelijkse klus vandaag met volle aandacht.' },
  { tag: 'Rust', title: 'Water drinken is zelfzorg.', body: 'Een beetje te weinig drinken maakt je al moe en prikkelbaar. Een glas water helpt echt.', try: 'Zet een fles water in zicht en drink hem leeg.' },
  { tag: 'Focus', title: 'Doe kleine klusjes meteen.', body: 'Kost iets minder dan twee minuten? Doe het meteen. Dan hoeft het niet op je lijst.', try: 'Doe vandaag elk klusje van twee minuten meteen.' },
  { tag: 'Gevoel', title: 'Schrijf het van je af.', body: 'Een gevoel opschrijven geeft afstand. Je hoeft het niet te bewaren of te herlezen.', try: 'Schrijf tien minuten over wat je dwarszit.' },
  { tag: 'Dankbaarheid', title: 'Haal een mooie herinnering op.', body: 'Aan iets fijns terugdenken geeft je opnieuw dat goede gevoel.', try: 'Bekijk een oude foto die je blij maakt.' },
  { tag: 'Moed', title: 'Spannend is niet hetzelfde als gevaarlijk.', body: 'Je lijf maakt soms geen verschil. Jij wel: dit is spannend, maar veilig.', try: 'Zeg bij iets spannends: "dit is spannend, niet gevaarlijk".' },
  { tag: 'Verbinding', title: 'Iets voor een ander doen maakt blij.', body: 'Een kleine gunst voor iemand anders geeft jou ook een goed gevoel.', try: 'Doe vandaag iets aardigs voor iemand, zonder dat diegene erom vraagt.' },
  { tag: 'Groei', title: 'Volhouden wint het vaak van talent.', body: 'Wie blijft oefenen, haalt op den duur veel mensen in die sneller begonnen.', try: 'Ga vandaag door met iets waarmee je wilde stoppen.' },
  { tag: 'Zelfcompassie', title: 'Voor jezelf zorgen is niet egoïstisch.', body: 'Je kunt pas goed voor anderen zorgen als je ook voor jezelf zorgt.', try: 'Plan vandaag een moment alleen voor jezelf.' },
  { tag: 'Mindfulness', title: 'Je adem is altijd bij je.', body: 'Waar je ook bent, je kunt altijd even terug naar je adem. Een anker dat nooit wegvalt.', try: 'Volg drie ademhalingen van begin tot eind.' },
  { tag: 'Rust', title: 'Je hoeft niet altijd bereikbaar te zijn.', body: 'Berichten kunnen wachten. Jouw rust is ook belangrijk.', try: 'Zet je meldingen vanavond een paar uur uit.' },
  { tag: 'Focus', title: 'Kies bewust waar je ja tegen zegt.', body: 'Elke keer dat je ergens ja tegen zegt, zeg je nee tegen iets anders.', try: 'Bedenk wat vandaag echt belangrijk is.' },
  { tag: 'Gevoel', title: 'Eenzaamheid is een signaal.', body: 'Het zegt dat je behoefte hebt aan contact. Dat is menselijk, en je kunt er iets mee.', try: 'Zoek vandaag contact met één persoon.' },
  { tag: 'Dankbaarheid', title: 'Wees ook dankbaar voor jezelf.', body: 'Je hebt al veel doorstaan en bereikt. Dat mag je best eens erkennen.', try: 'Bedank jezelf voor iets wat je volhield.' },
  { tag: 'Moed', title: 'Begin het gesprek.', body: 'Een lastig gesprek wordt meestal alleen maar moeilijker als je het uitstelt.', try: 'Plan vandaag een gesprek dat je al even uitstelt.' },
  { tag: 'Verbinding', title: 'Zeg dat je trots bent.', body: 'Mensen horen vaak wat beter kan, en zelden dat iemand trots op ze is.', try: 'Zeg tegen iemand: "ik ben trots op je".' },
  { tag: 'Groei', title: 'Leer van iemand die het al kan.', body: 'Je hoeft niet alles zelf uit te vinden. Kijken hoe een ander het doet scheelt veel tijd.', try: 'Vraag iemand hoe diegene iets aanpakt.' },
  { tag: 'Zelfcompassie', title: 'Kijk met zachte ogen naar jezelf.', body: 'Bekijk jezelf eens zoals iemand die veel van je houdt. Wat ziet die persoon?', try: 'Schrijf op wat een dierbare over jou zou zeggen.' },
  { tag: 'Mindfulness', title: 'Merk op zonder te oordelen.', body: '"Goed" of "slecht" komt vaak vanzelf. Probeer eens gewoon te zien wat er is.', try: 'Kijk vandaag naar iets zonder er een mening over te hebben.' },
  { tag: 'Rust', title: 'Warmte ontspant.', body: 'Een warme douche of een bad maakt je spieren en je hoofd zachter. Even niets hoeven doet wonderen.', try: 'Neem vanavond zonder haast een warme douche of een bad.' },
  { tag: 'Focus', title: 'Zet je pauzes in je agenda.', body: 'Wie alleen werk plant, vergeet te rusten. Een pauze in je agenda gebeurt vaker.', try: 'Zet vandaag twee pauzes in je agenda.' },
  { tag: 'Gevoel', title: 'Beweeg je gevoel eruit.', body: 'Spanning zit ook in je lijf. Wandelen, dansen of sporten helpt om het los te laten.', try: 'Beweeg vandaag tien minuten op je favoriete muziek.' },
  { tag: 'Dankbaarheid', title: 'Zoek het lichtpuntje.', body: 'Ook op een zware dag is er vaak iets kleins wat meeviel. Zoek het eens op.', try: 'Vind vandaag één lichtpuntje, hoe klein ook.' },
  { tag: 'Moed', title: 'Je mag anders zijn.', body: 'Wat jou anders maakt, is vaak ook wat jou bijzonder maakt.', try: 'Noem één ding aan jezelf dat je uniek maakt.' },
  { tag: 'Verbinding', title: 'Samen eten verbindt.', body: 'Aan tafel praten zonder schermen is een simpele manier om dichter bij elkaar te komen.', try: 'Eet vandaag een maaltijd samen, zonder telefoon.' },
  { tag: 'Groei', title: 'Moeilijk is niet onmogelijk.', body: 'Iets kan zwaar voelen en toch haalbaar zijn. Vaak zit het verschil in tijd en geduld.', try: 'Kies iets moeilijks en zet er één stap in.' },
  { tag: 'Zelfcompassie', title: 'Je hoeft niet iedereen blij te maken.', body: 'Dat lukt niemand. En het proberen kost energie die je ook voor jezelf kunt gebruiken.', try: 'Merk op wanneer je iets alleen doet om een ander te pleasen.' },
  { tag: 'Mindfulness', title: 'Loop eens heel langzaam.', body: 'Voel je voeten bij elke stap. Een korte wandeling met aandacht kalmeert je hoofd.', try: 'Loop twintig stappen zo langzaam als je kunt.' },
  { tag: 'Rust', title: 'Rust zit in kleine dingen.', body: 'Een kop thee, een raam open, even zitten. Je hoeft niet op vakantie om op te laden.', try: 'Bouw vandaag drie mini-pauzes in.' },
  { tag: 'Focus', title: 'Zachte muziek kan helpen.', body: 'Rustige muziek zonder tekst helpt veel mensen om geconcentreerd te blijven.', try: 'Werk een half uur met rustige achtergrondmuziek.' },
  { tag: 'Gevoel', title: 'Opluchting verdient ook aandacht.', body: 'Merk op wanneer iets meevalt. Dat fijne gevoel mag je ook even voelen.', try: 'Let vandaag op een moment van opluchting.' },
  { tag: 'Dankbaarheid', title: 'De natuur is gratis.', body: 'Een zonsondergang, een bloeiende boom, de geur van regen. Je hoeft er alleen naar te kijken.', try: 'Zoek vandaag iets moois in de natuur.' },
  { tag: 'Moed', title: 'Kies voor jezelf.', body: 'Soms betekent moed dat je iets loslaat wat niet meer bij je past.', try: 'Bedenk wat je mag loslaten.' },
  { tag: 'Verbinding', title: 'Zoek mensen bij wie je jezelf kunt zijn.', body: 'Bij sommige mensen voel je je lichter. Die contacten mag je koesteren.', try: 'Bedenk bij wie je je echt goed voelt, en spreek iets af.' },
  { tag: 'Groei', title: 'Schrijf op wat je leert.', body: 'Wat je opschrijft, onthoud je beter. En later zie je hoeveel je gegroeid bent.', try: 'Schrijf vanavond één les van vandaag op.' },
  { tag: 'Zelfcompassie', title: 'Schaamte krimpt als je praat.', body: 'Wat je verstopt, voelt groter dan het is. Delen met iemand die je vertrouwt geeft lucht.', try: 'Vertel iemand iets wat je lastig vindt om te zeggen.' },
  { tag: 'Mindfulness', title: 'Dit moment is genoeg.', body: 'Je hoeft nu niets op te lossen. Even alleen hier zijn is ook goed.', try: 'Zeg tegen jezelf: "nu is het even genoeg".' },
  { tag: 'Rust', title: 'Een dutje is geen luiheid.', body: 'Twintig minuten rusten met je ogen dicht maakt je scherper en vrolijker.', try: 'Rust vandaag twintig minuten met je ogen dicht.' },
  { tag: 'Focus', title: 'Begin je dag bij jezelf.', body: 'Wie meteen berichten leest, begint de dag met de wensen van anderen.', try: 'Kijk morgen het eerste half uur niet op je telefoon.' },
  { tag: 'Gevoel', title: 'Een gevoel is geen opdracht.', body: 'Je kunt boos zijn zonder boos te reageren. Voelen en doen zijn twee verschillende dingen.', try: 'Merk een sterk gevoel op en wacht even met reageren.' },
  { tag: 'Dankbaarheid', title: 'Begin de dag met een dankjewel.', body: 'Wie de dag start met iets goeds, kijkt anders naar wat er komt.', try: 'Noem morgen bij het opstaan één ding waar je dankbaar voor bent.' }
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
