# Handoff: excelerate Roth – Website (Astro + GitHub Pages)

## Overview
Vier-seitige Marketing-Website für **excelerate Roth** (Jennifer Roth), selbständige Beraterin für
Reporting- und Controlling-Strukturen (Power BI, Excel, Schnittstellen).

Ziel der Seite: Besucher:innen sollen ohne Hürde ein kostenloses Erstgespräch anfragen. Die Texte
folgen dem StoryBrand-Prinzip nach Donald Miller — der Kunde ist der Held, excelerate Roth ist der
Guide. Ton: ruhig, konkret, nicht selbstdarstellerisch.

Zielsetup: **Astro**, statisch gebaut, Deployment über **GitHub** auf eine eigene Domain.

## About the Design Files
Die Dateien in `design-references/` sind **Design-Referenzen in HTML** — Prototypen, die Aussehen,
Inhalt und Verhalten zeigen. Sie sind **kein Produktionscode zum Kopieren**.

Sie tragen die Endung `.dc.html` und enthalten ein internes Streaming-Format (`<x-dc>`, `support.js`,
`style-hover`-Attribute). Das ist ein Prototyping-Format, **nicht** übernehmen. Zu lesen sind daraus:
Struktur, Reihenfolge, exakte Texte, exakte Farbwerte, Abstände und Hover-Verhalten.

Aufgabe: diese Designs in einem frischen **Astro**-Projekt neu aufbauen — semantisches HTML,
echtes CSS (Astro-Scoped-Styles oder eine kleine globale `global.css`), keine JS-Abhängigkeit für
Layout oder Inhalte. `style-hover="…"` im Prototyp entspricht einer normalen `:hover`-Regel.

## Fidelity
**High fidelity.** Farben, Typo, Abstände und Copy sind final und sollen 1:1 übernommen werden.
Einzige bewusste Platzhalter: Hero-Bannerbild und Porträtfoto (siehe *Assets*).

## Zielarchitektur (Vorschlag)

```
src/
  layouts/BaseLayout.astro      # <head>, Fonts, Header, Footer, Slot
  components/SiteHeader.astro   # Sticky-Navigation, identisch auf allen Seiten
  components/SiteFooter.astro
  components/CtaBanner.astro    # wiederkehrender Abschluss-CTA
  pages/index.astro             # Startseite
  pages/ueber-mich.astro
  pages/offerte.astro
  pages/kontakt.astro
  styles/global.css             # Reset, Farb-Variablen, Typo, Link-Styles
public/
  logo-excelerate.png
  qr-vcard.png
  hero.jpg                      # noch zu liefern
  portrait.jpg                  # noch zu liefern
```

URL-Struktur: `/`, `/ueber-mich`, `/offerte`, `/kontakt`.
Die Prototypen verlinken untereinander mit Dateinamen (`Excelerate Angebot.dc.html`) — im Astro-Projekt
durch die Pfade oben ersetzen. Der Navigationspunkt „Wie ich arbeite" ist ein Anker auf der Startseite:
`/#arbeit`.

Deployment: `@astrojs/ci` nicht nötig — Standard-GitHub-Action (`withastro/action`) plus
`astro.config.mjs` mit `site: 'https://<domain>'`. Für eine eigene Domain eine `public/CNAME` anlegen.

## Design Tokens

### Farben (aus dem Firmen-Theme, verbindlich)
| Token | Hex | Verwendung |
|---|---|---|
| `--green` | `#1C443C` | Primärfarbe: Buttons, Flächen, Hero-Grund |
| `--green-hover` | `#123029` | Hover-Zustand des Primärbuttons |
| `--green-2` | `#3D7165` | Sekundär: Links, Eyebrow-Labels, Akzentlinien |
| `--taupe` | `#B7AA9A` | Labels auf dunklem Grund |
| `--sand` | `#DED8CF` | Ruhige Abschnittsflächen, Text auf dunklem Grund |
| `--warmgrey` | `#8C867D` | Sekundärtext **nur auf dunklem Grund** |
| `--ink` | `#1C1E1D` | Fliesstext, Footer-Hintergrund |
| `--ink-soft` | `#3F4643` | Sekundärtext auf hellem Grund |
| `--paper` | `#F2EFEA` | Standard-Seitenhintergrund |
| `--white` | `#FFFFFF` | Karten |

Kontrastregel (wurde geprüft): `#8C867D` erreicht auf `#F2EFEA` nur 3.1:1 — auf hellem Grund
deshalb **immer `#3F4643`** verwenden. `#8C867D` ist nur auf `#1C1E1D` zulässig.

Abstufungen der Palette in 10-%-Schritten sind erlaubt. Keine Verläufe.

### Typografie
- Headlines (`h1`–`h3`): `'Aptos Display', Aptos, 'Public Sans', Helvetica, Arial, sans-serif`, `600`
- Fliesstext: `Aptos, 'Public Sans', Helvetica, Arial, sans-serif`, `400`
- Aptos ist keine Webfont — als Webfallback **Public Sans** von Google Fonts laden
  (`https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap`),
  besser noch selbst hosten (`@fontsource/public-sans`), damit ohne Google-Request ausgeliefert wird.
- `letter-spacing`: Headlines `-0.02em` (H1 `-0.02em`, H2 `-0.015em`), Fliesstext normal
- `line-height`: Headlines `1.08`–`1.18`, Fliesstext `1.55`–`1.65`
- Eyebrow-Labels: `14px`, `600`, `letter-spacing: 0.12em`, `text-transform: uppercase`, Farbe `--green-2`
- `p { text-wrap: pretty; }`

### Fluid-Type-Skala (exakt so im Prototyp verwendet)
| Element | Wert |
|---|---|
| H1 Startseite (auf Bild) | `clamp(34px, 5vw, 64px)` |
| H1 Unterseiten | `clamp(30px, 4.2vw, 54px)` |
| H2 Abschnitt | `clamp(24px, 3vw, 38px)` |
| H2 klein | `clamp(23px, 2.8vw, 34px)` |
| H3 Karte | `20px` – `24px` |
| Lead-Absatz | `clamp(18px, 1.6vw, 22px)` |
| Fliesstext | `clamp(17px, 1.5vw, 20px)` bzw. fix `17px`/`18px` in Karten |
| Buttons | `16px` (Header) / `17px`–`18px` (Inhalt) |

### Abstände & Formen
- Seiten-Innenabstand horizontal: `clamp(20px, 5vw, 64px)`; Header: `clamp(16px, 4vw, 64px)`
- Abschnitt vertikal: `clamp(48px, 7vw, 96px)` bis `clamp(60px, 9vw, 116px)`
- Inhaltsbreite: `max-width: 1180px; margin: 0 auto` (Fliesstextspalte Über mich: `760px`)
- Zeilenlängen begrenzen: `max-width: 50ch`–`70ch`
- Border-Radius: **`4px`** für Buttons und Formularfelder, **`6px`** für Karten und Bildflächen.
  Keine Pills, keine grossen Radien.
- Rahmen: `1px solid rgba(28,68,60,0.14)` (Karten), `rgba(28,68,60,0.22)` (Formularfelder),
  `rgba(28,68,60,0.18)` (Trennlinien)
- Keine Schatten. Tiefe entsteht über Flächenfarbe.

### Grid-Muster
Alle mehrspaltigen Bereiche verwenden dasselbe umbruchsichere Muster — bitte beibehalten:
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
gap: clamp(24px, 4vw, 56px);
```
(`300px` variiert je Bereich zwischen `260px` und `330px`.) Damit sind keine Media Queries nötig
und nichts läuft unter 390px über.

## Screens / Views

### 1. Startseite (`/`)
Zweck: In wenigen Sekunden klarmachen, worum es geht, und zum Erstgespräch führen.

Reihenfolge der Abschnitte:
1. **Sticky Header** (siehe unten)
2. **Hero, volle Breite.** `min-height: clamp(460px, 74vh, 760px)`, Hintergrund `--green` mit
   Platzhalter-Streifenmuster; später ein Foto (Porträt oder Berglandschaft) als `background-image`.
   Inhalt unten links, darüber ein Verlauf für Lesbarkeit:
   `linear-gradient(to top, rgba(28,30,29,0.82), rgba(28,30,29,0.25) 70%, transparent)`.
   - H1 (`--paper`, `max-width: 20ch`): „Reporting, das nicht jedes Mal neu zusammengesucht werden muss."
   - Lead (`--sand`, `max-width: 56ch`): „Reporting- und Controlling-Strukturen für Unternehmen, die mit ihren Zahlen arbeiten – mit Power BI oder einer klar aufgebauten Excel-Lösung, abgestimmt auf die jeweilige Ausgangslage."
   - Button hell auf dunkel: Hintergrund `--paper`, Text `--green`, Hover `--sand`; Label „Gespräch vereinbaren →", Ziel `/kontakt`
3. **„Kommt Ihnen das bekannt vor?"** — drei weisse Karten, je mit kurzem Akzentstrich
   (`26px × 3px`, `--green-2`) über dem Text:
   - „Zahlen werden von Hand aus verschiedenen Quellen zusammengetragen – im Monatsabschluss genauso wie in jeder Ad-hoc-Auswertung."
   - „Jede Person im Team erstellt Reports ein bisschen anders – nicht vergleichbar, nicht auf einen Blick lesbar."
   - „Bis die Zahlen fertig aufbereitet sind, sind sie schon wieder veraltet."
4. **„Wie ich arbeite"** (`id="arbeit"`, Hintergrund `--sand`), zwei Spalten: links H2, rechts zwei Absätze
   („Je nach Ausgangslage entsteht ein Power-BI-Dashboard …" / „Die entstehende Struktur bleibt im Unternehmen …")
5. **„Über mich"-Teaser** — links Porträt-Platzhalter (`aspect-ratio: 4/5`), rechts H2, ein Absatz,
   Abschlusszeile mit Bachelor-Angabe, Sekundärbutton „Mehr über mich →" → `/ueber-mich`
6. **„Der Einstieg"** (Hintergrund `--green`, Text `--paper`) mit Outline-Button „Zur Offerte →" → `/offerte`
7. **Abschluss-CTA** — H2 „Reden wir über Ihre Zahlen – der erste Schritt ist unverbindlich.",
   Zeile „Ich melde mich innerhalb von 2 Werktagen.", Primärbutton „Gespräch vereinbaren →"
   (verlinkt auf `https://wa.me/41765311610`) und Sekundärbutton „E-Mail schreiben";
   daneben eine weisse Karte mit QR-Code und Kontaktzeilen
8. **Footer**

### 2. Über mich (`/ueber-mich`)
- Kopfbereich: Eyebrow „Über mich", H1 „Jennifer Roth", Lead „Betriebswirtschaftliche Sparringpartnerin für Reporting, Controlling und BI-Strukturen in Unternehmen.", rechts Porträt-Platzhalter `4/5`
- Fliesstextspalte `max-width: 760px`, vier Absätze (exakter Wortlaut in der Referenzdatei):
  Selbständigkeit/Industrieunternehmen → Monatsabschluss & Managementbericht, Kennzahlen, Planungs- und Budgetprozess → SAP-Rollouts, Customizing der Controlling-Strukturen, Schulung, Zeiterfassungs-Anbindung → Power-BI-Datenmodell und Führung
- Abschlusszeile über Trennlinie: „Bachelor of Arts in Controlling and Finance, WINGS Hochschule Wismar."
- CTA-Band auf `--sand` mit H2 „Reden wir über Ihre Zahlen – der erste Schritt ist unverbindlich." und Primärbutton

### 3. Offerte (`/offerte`)
Dramaturgie in drei Stufen — die Reihenfolge ist inhaltlich wichtig:
1. **Kostenlos: „Am Anfang steht ein unverbindliches Erstgespräch"** (weisse Karte, zweispaltig)
   Text: „Schreiben Sie mir oder rufen Sie an. Im Erstgespräch klären wir Ihr Anliegen und Ihre
   Vorstellungen. Auf dieser Grundlage erhalten Sie eine Offerte für den Einstieg. Gespräch und
   Offerte sind kostenlos." Rechts Primärbutton + „Antwort innerhalb von 2 Werktagen."
2. **Der Einstieg: „Analyse und Lösungsvorschlag"** — drei Karten mit Aufwandsangabe als Eyebrow:
   „ca. 1 Std." Erstes Gespräch (grüne Karte) · „ca. 3 Std." Analysephase · „ca. 1 Std." Lösungsvorschlag.
   Danach zwei Absätze: Aufwandshinweis und „Mit dem Lösungsvorschlag endet der Einstieg. Sie sind
   zu nichts verpflichtet – möchten Sie die Empfehlung umsetzen, wird daraus ein eigenes Projekt."
3. **Die Umsetzung: „Projekte"** (Hintergrund `--sand`) — drei Karten auf `--paper`:
   „Jedes Projekt einzeln beauftragt" · „Eigenverantwortliche Ausführung" · „Keine feste Funktion".
   **Wichtig:** Diese Formulierungen sind bewusst so gewählt (Abgrenzung Selbständigkeit / AHV).
   Nicht umschreiben, nicht „laufende Zusammenarbeit" oder „wiederkehrende Aufgaben" daraus machen.
4. „Schulung Ihres Teams", dann Abschluss-CTA „Gespräch vereinbaren →"

### 4. Kontakt (`/kontakt`)
Zweispaltig, beide Spalten **gleich hoch** (`align-items: stretch`):
- **Links oben:** grüne Karte „WhatsApp", Nummer gross (`clamp(24px, 2.6vw, 32px)`, `600`),
  heller Button „Nachricht schreiben →" → `https://wa.me/41765311610`
- **Links unten:** weisse Karte „Weitere Möglichkeiten" mit `flex: 1 1 auto`, Zeilen Telefon /
  E-Mail / LinkedIn (Labels `min-width: 78px`), unten per `margin-top: auto` abgesetzt der
  QR-Code (`112px`) mit Text „Kontaktdaten direkt aufs Handy speichern."
- **Rechts:** weisses Formular `height: 100%`, Felder Name / E-Mail / „Worum geht es?" (Textarea
  `flex: 1 1 auto`, `min-height: 150px`, wächst mit), Button „Nachricht senden", darunter
  „Ich melde mich innerhalb von 2 Werktagen."
  Der Textarea-Flex sorgt dafür, dass die Unterkanten beider Spalten bündig sind — bitte erhalten.

Formular-Backend ist noch offen. Vorschlag für ein statisches Astro-Setup: Formspree, Web3Forms
oder eine kleine Astro-Action/Serverless-Function. Pflichtfelder: Name, E-Mail (Format prüfen),
Nachricht. Fehler inline unter dem Feld in `--ink`; Erfolgsmeldung an Stelle des Formulars.
DSGVO/DSG: Hinweis auf die Datenschutzseite unter dem Button ergänzen.

## Header & Footer (auf allen Seiten identisch)

**Header** — `position: sticky; top: 0; z-index: 40`, `background: rgba(242,239,234,0.94)`,
`backdrop-filter: blur(12px)`, `border-bottom: 1px solid rgba(28,68,60,0.14)`,
`padding: 12px clamp(16px,4vw,64px)`, `display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px 20px`.
- Links das Logo, `height: clamp(30px, 4.6vw, 42px)`, verlinkt auf `/`
- Rechts die Navigation, `gap: 10px clamp(12px,2vw,30px)`, `font-size: 15px`:
  „Wie ich arbeite" (`/#arbeit`) · „Über mich" · „Offerte" · Primärbutton „Gespräch vereinbaren →" (`/kontakt`)
- Aktive Seite: `color: --green; font-weight: 600` statt `color: --ink; opacity: 0.75`
- `flex-wrap: wrap` ist bewusst gesetzt — unter ~800px rutscht die Navigation in eine zweite Zeile
  statt überzulaufen. Wer stattdessen ein Burger-Menü möchte, darf das tun; der Balken muss aber
  auf jeder Breite sichtbar und vollständig bleiben.

**Footer** — `background: --ink`, `color: --sand`, `padding: 40px clamp(20px,5vw,64px)`,
`flex-wrap: wrap`, drei Blöcke: Logo (weiss via `filter: brightness(0) invert(1)`, `opacity: 0.9`),
„Im Einsatz in der ganzen DACH-Region – vor Ort oder online.", Links Impressum / Datenschutz /
„© 2026 excelerate Roth" in `--warmgrey`, `14px`.

## Interactions & Behavior
- **Primärbutton:** `background: --green; color: --paper; padding: 17px 32px; border-radius: 4px; font-weight: 600`, Hover `--green-hover`
- **Sekundärbutton:** transparent, `1px solid rgba(28,68,60,0.3)`, Text `--green`;
  Hover `border-color: --green; background: rgba(28,68,60,0.06)`
- **Button auf dunklem Grund:** `background: --paper; color: --green`, Hover `--sand`;
  Outline-Variante `1px solid rgba(242,239,234,0.4)`, Hover `background: rgba(242,239,234,0.1)`
- **Links:** Grundfarbe `--green-2`, Hover `--green`, ohne Unterstreichung.
  `a` und `a:hover` global definieren.
- **Formularfelder:** `background: --paper`, `border: 1px solid rgba(28,68,60,0.22)`, `border-radius: 4px`,
  `padding: 14px 16px`, `font-size: 16px` (verhindert iOS-Zoom); `:focus` → `border-color: --green`.
  Sichtbaren Fokusring ergänzen (`outline: 2px solid --green-2; outline-offset: 2px`) — der
  Prototyp setzt `outline: none`, für Barrierefreiheit bitte einen eigenen Fokusstil einsetzen.
- Keine Animationen, keine Scroll-Effekte. Anker-Sprünge mit `scroll-behavior: smooth` und
  `scroll-margin-top: 90px` auf `#arbeit`, damit der Sticky-Header nichts verdeckt.
- Responsive: rein fluid über `clamp()` und `auto-fit`-Grids. Geprüft bis 390px Breite, kein
  horizontales Scrollen.

## State Management
Praktisch keiner — statische Seiten. Nur das Kontaktformular hat Zustand:
Eingabewerte, Validierungsfehler pro Feld, `submitting`, `success`, `error`.

## Assets
Im Ordner `design-references/assets/`:
- `excelerate-logo.png` — 450×100, transparent. Wortmarke „excelerate" mit grünem X.
  Auf dunklem Grund im Prototyp per `filter: brightness(0) invert(1)` weiss gestellt; sauberer wäre
  eine echte helle Logovariante (bitte bei Jennifer anfragen) oder eine SVG-Version.
  Mindestbreite 120px digital, Schutzraum rundum = Höhe des „e".
- `qr-vcard-transparent.png` — vCard-QR, schwarz auf transparent.

**Fehlt noch und muss von Jennifer kommen:**
- Hero-Bannerbild (quer, mindestens 2400px breit) — Porträt oder Landschaft
- Porträtfoto hochkant im Verhältnis 4:5 (Startseite und Über-mich-Seite)

Bis dahin liegen im Prototyp gestreifte Platzhalterflächen mit Beschriftung. Bilder in Astro über
`astro:assets` (`<Image />`) einbinden, WebP/AVIF ausspielen, Hero mit `loading="eager"`, alles
andere `loading="lazy"`.

## Inhaltliche Leitplanken (bitte beim Umsetzen einhalten)
- Der Kunde ist der Held, nicht die Anbieterin. Keine Superlative, keine Ausrufezeichen,
  kein „führender Experte", kein „ganzheitlich".
- Nicht „Schweizer KMU" schreiben — die Zielgruppe ist bewusst allgemein gehalten.
- Der Monatsabschluss ist ein **Beispiel**, nicht das Thema. Es geht um Reporting- und
  Controlling-Strukturen allgemein.
- Immer „Offerte", nie „Angebot".
- CTA-Wortlaut überall identisch: „Gespräch vereinbaren →".
- Der Abschnitt „Projekte" auf der Offerte-Seite ist rechtlich sensibel formuliert (Abgrenzung
  selbständige Erwerbstätigkeit). Wortlaut nicht verändern.

## SEO / Meta
- `lang="de-CH"`
- Title-Muster: `Reporting- und Controlling-Strukturen | excelerate Roth`,
  Unterseiten `Über mich | excelerate Roth` usw.
- Meta-Description je Seite aus dem jeweiligen Lead-Absatz
- Open-Graph-Bild sobald das Hero-Foto vorliegt
- `sitemap` via `@astrojs/sitemap`, `robots.txt` in `public/`
- Impressum und Datenschutzerklärung fehlen noch (Footer verlinkt aktuell auf `#`) — beides muss
  vor dem Livegang angelegt werden.

## Files
In `design-references/`:
| Datei | Inhalt |
|---|---|
| `Excelerate Website.dc.html` | Startseite |
| `Excelerate Ueber mich.dc.html` | Über mich |
| `Excelerate Angebot.dc.html` | Offerte |
| `Excelerate Kontakt.dc.html` | Kontakt |
| `Excelerate Brand Guide.dc.html` | Farben, Typo, Logoregeln, StoryBrand-BrandScript, Tonalität |

Der Brand Guide ist keine zu bauende Seite, sondern Referenz — bei Zweifeln zu Farbe, Schrift
oder Tonfall dort nachsehen.
