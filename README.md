# Website Freiwillige Feuerwehr Bendestorf

Neue Website der Freiwilligen Feuerwehr Bendestorf (Stützpunktfeuerwehr · Samtgemeinde Jesteburg),
gebaut mit [Astro](https://astro.build/). Design-Richtung **A „Klar & Verlässlich"**:
hell, strukturiert, seriös — mit dezenten Animationen.

## Tech-Stack

- **Astro** (statische Seitengenerierung) — schnell, gut wartbar, kostenlos hostbar
- **Self-hosted Fonts** via `@fontsource` (Archivo + Public Sans) — DSGVO-konform, keine externen Requests
- Reines CSS-Design-System (`src/styles/global.css`), keine UI-Framework-Abhängigkeit

## Entwicklung

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server auf http://localhost:4321
npm run build    # Statische Seite nach ./dist bauen
npm run preview  # Build lokal ansehen
```

## Projektstruktur

```
src/
  data/site.js          # ZENTRALE Inhaltsdatei (Kontakt, Abteilungen, Kennzahlen …)
  styles/global.css     # Design-System (Farben, Typo, Animationen)
  layouts/Base.astro    # Grundgerüst (Head, Header, Footer, Reveal-/Count-up-Skript)
  components/            # Header, Footer, EmergencyBar, Icon, PageHero, PhotoPlaceholder
  pages/                # Eine Datei = eine Unterseite
public/                 # favicon u. statische Dateien
```

## Seiten

Start · Abteilungen · Fahrzeuge · Berichte · Über uns · Mitmachen · Kontakt ·
Förderverein · Impressum · Datenschutz · 404

## ⚠️ Inhaltsstatus

Die Texte/Daten sind ein **Entwurf** aus den Designvorlagen und noch **nicht** gegen die
bisherige Website geprüft. Offene Punkte und der Übernahme-Status stehen in
[`docs/INHALTE.md`](docs/INHALTE.md). Inhalte zentral in `src/data/site.js` pflegen.

## Inhalte pflegen

Die meisten Texte stehen in `src/data/site.js`. Adresse, Telefon, Abteilungen, Dienstzeiten
und Kennzahlen lassen sich dort an einer Stelle ändern — alle Seiten ziehen automatisch nach.
