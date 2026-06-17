// =============================================================================
//  ZENTRALE INHALTSDATEI – Freiwillige Feuerwehr Bendestorf
// =============================================================================
//  STATUS: ENTWURF.
//  Diese Inhalte stammen aus den Claude-Designvorlagen und sind noch NICHT
//  gegen die Live-Seite https://www.feuerwehr-bendestorf.de/ geprüft.
//  Sobald der Netzwerkzugriff freigeschaltet ist, werden alle mit
//  `pruefen: true` / "TODO" markierten Werte durch echte Inhalte ersetzt.
// =============================================================================

export const verein = {
  name: 'Freiwillige Feuerwehr Bendestorf',
  kurzname: 'Feuerwehr Bendestorf',
  typ: 'Stützpunktfeuerwehr · Samtgemeinde Jesteburg',
  slogan: 'Retten · Löschen · Bergen · Schützen',
  gegruendet: null, // TODO: Gründungsjahr von Live-Seite ergänzen
};

export const kontakt = {
  strasse: 'Im Brook 3',
  plz: '21227',
  ort: 'Bendestorf',
  telefon: '04183 6300',
  telefonHref: '+49418336300', // TODO: korrekte Durchwahl/Format prüfen
  email: 'ortsbrandmeister@feuerwehr-bendestorf.de',
  notruf: '112',
  // TODO: Ansprechpartner (Ortsbrandmeister, Stellvertreter) von Live-Seite
  ansprechpartner: [],
};

// Kennzahlen für die animierten Zähler (count-up).
export const kennzahlen = [
  { wert: 43, label: 'Aktive Einsatzkräfte' },
  { wert: 16, label: 'Jugendfeuerwehr' },
  { wert: 9, label: 'Kinderfeuerwehr' },
  { wert: null, anzeige: '24/7', label: 'Einsatzbereit' },
];

// Abteilungen / Mitmach-Bereiche.
export const abteilungen = [
  {
    slug: 'kinderfeuerwehr',
    name: 'Kinderfeuerwehr',
    alter: '6–12 Jahre',
    dienst: '1. + 3. Mittwoch · 17:00–18:00',
    kurz: 'Spielerisch erste Schritte in die Welt der Feuerwehr.',
    text:
      'In der Kinderfeuerwehr lernen die Jüngsten spielerisch, was die Feuerwehr ' +
      'ausmacht: Zusammenhalt, erste Knoten, kleine Experimente und jede Menge Spaß. ' +
      'Hier entstehen Freundschaften fürs Leben.',
    icon: 'kind',
  },
  {
    slug: 'jugendfeuerwehr',
    name: 'Jugendfeuerwehr',
    alter: '10–18 Jahre',
    dienst: 'Mittwochs · 18:00–20:00',
    kurz: 'Technik, Teamgeist und echte Freundschaften.',
    text:
      'Die Jugendfeuerwehr verbindet feuerwehrtechnische Ausbildung mit Zeltlagern, ' +
      'Wettbewerben und gemeinsamen Aktionen. Hier wächst der Nachwuchs für die ' +
      'Einsatzabteilung heran.',
    icon: 'jugend',
  },
  {
    slug: 'einsatzabteilung',
    name: 'Einsatzabteilung',
    alter: '16–67 Jahre',
    dienst: 'Dienstags · 19:30–21:00',
    kurz: 'Das Herz der Wehr – ausgebildet für den Ernstfall.',
    text:
      'Die Einsatzabteilung ist rund um die Uhr alarmierbar. Ob Brand, technische ' +
      'Hilfeleistung oder Unwetter – unsere ehrenamtlichen Kräfte sind ausgebildet, ' +
      'ausgerüstet und jederzeit einsatzbereit.',
    icon: 'einsatz',
  },
  {
    slug: 'alters-und-ehrenabteilung',
    name: 'Alters- & Ehrenabteilung',
    alter: 'ab 67 Jahre',
    dienst: 'Nach Vereinbarung',
    kurz: 'Erfahrung, Verbundenheit und gelebte Kameradschaft.',
    text:
      'Wer viele Jahre aktiv gedient hat, bleibt der Wehr in der Alters- und ' +
      'Ehrenabteilung verbunden. Erfahrung, Geselligkeit und das gemeinsame ' +
      'Andenken an unzählige Einsätze stehen hier im Mittelpunkt.',
    icon: 'ehren',
  },
  {
    slug: 'foerderverein',
    name: 'Förderverein',
    alter: 'für alle',
    dienst: '—',
    kurz: 'Unterstütze die Feuerwehr – auch ohne aktiven Dienst.',
    text:
      'Der Förderverein unterstützt die Arbeit der Feuerwehr finanziell und ideell. ' +
      'Mitglied werden kann jeder, der die Wehr stärken möchte, ohne selbst aktiven ' +
      'Dienst zu leisten.',
    icon: 'foerder',
  },
];

// Fahrzeuge & Ausstattung – PLATZHALTER, gegen Live-Seite prüfen.
export const fahrzeuge = [
  {
    kuerzel: 'TODO',
    name: 'Fahrzeug 1',
    typ: 'TODO: Fahrzeugtyp',
    beschreibung: 'TODO: Beschreibung, Baujahr, Ausstattung von der Live-Seite ergänzen.',
    pruefen: true,
  },
  {
    kuerzel: 'TODO',
    name: 'Fahrzeug 2',
    typ: 'TODO: Fahrzeugtyp',
    beschreibung: 'TODO: Beschreibung, Baujahr, Ausstattung von der Live-Seite ergänzen.',
    pruefen: true,
  },
];

// Berichte / Aktuelles – BEISPIELINHALTE aus der Designvorlage, NICHT real.
export const berichte = [
  {
    slug: 'verkehrsunfall-b3',
    kategorie: 'Einsatz · Technische Hilfe',
    titel: 'Verkehrsunfall auf der B3',
    datum: null,
    teaser: 'Schnelle Hilfe nach Alarmierung – Person befreit und versorgt.',
    beispiel: true,
  },
  {
    slug: 'atemschutz-uebung',
    kategorie: 'Übung · Atemschutz',
    titel: 'Heiße Ausbildung im Container',
    datum: null,
    teaser: 'Realistisches Training für den Ernstfall unter Atemschutz.',
    beispiel: true,
  },
  {
    slug: 'tag-der-offenen-tuer-2025',
    kategorie: 'Gemeinschaft · Fest',
    titel: 'Tag der offenen Tür 2025',
    datum: null,
    teaser: 'Ein Tag voller Technik, Mitmach-Aktionen und gutem Essen.',
    beispiel: true,
  },
];

// Hauptnavigation.
export const navigation = [
  { label: 'Start', href: '/' },
  { label: 'Abteilungen', href: '/abteilungen' },
  { label: 'Fahrzeuge', href: '/fahrzeuge' },
  { label: 'Berichte', href: '/berichte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Mitmachen', href: '/mitmachen' },
];
