# Prompt für Claude Code

## 1. Erster Prompt (einmalig, im leeren Projektordner)

---

Ich möchte aus einem Design-Handoff eine statische Website bauen. Sie soll mit **Astro** gebaut,
über **GitHub** versioniert und per **GitHub Actions** auf meiner eigenen Domain veröffentlicht
werden. Ich bin keine Entwicklerin — erkläre mir jeden Schritt, den ich selbst tun muss, in
einfachen Worten und frag nach, statt zu raten.

**Schritt 1 — lies zuerst, bevor du Code schreibst:**
Im Ordner `design_handoff_excelerate_website/` liegt die vollständige Spezifikation.
Lies zuerst `README.md` komplett, danach die fünf HTML-Dateien in `design-references/`.

**Wichtig zu den HTML-Dateien:** Das sind Design-Referenzen, kein Produktionscode. Sie sind in
einem Prototyping-Format (`.dc.html`, `<x-dc>`, `support.js`, `style-hover="…"`) geschrieben.
Übernimm dieses Format auf keinen Fall. Lies daraus nur: Struktur, Reihenfolge der Abschnitte,
exakte Texte, exakte Farbwerte, Abstände und Hover-Verhalten. `style-hover="…"` entspricht einer
normalen `:hover`-Regel in CSS.

**Schritt 2 — sag mir, was du verstanden hast:**
Bevor du irgendetwas baust: Fasse in maximal 15 Zeilen zusammen, welche Seiten es gibt, welche
Komponenten du anlegen willst und welche offenen Punkte du siehst. Stell mir alle Fragen, die
du hast. Erst wenn ich „los" sage, fängst du an.

**Schritt 3 — bauen:**
- Astro, TypeScript, keine UI-Bibliothek, kein Tailwind. Normales CSS.
- Farben, Abstände und Schriftgrössen als CSS-Custom-Properties in `src/styles/global.css`,
  Namen genau wie in der README (`--green`, `--paper`, `--ink-soft` …). Nie Hex-Werte direkt in
  Komponenten schreiben — immer die Variable verwenden, damit ich später eine Farbe an einer
  einzigen Stelle ändern kann.
- Struktur wie in der README vorgeschlagen: `BaseLayout.astro`, `SiteHeader.astro`,
  `SiteFooter.astro`, `CtaBanner.astro`, vier Seiten unter `src/pages/`.
- **Alle Texte** kommen in eine einzige Datei `src/content/site.ts` (oder `.json`), sauber nach
  Seite und Abschnitt gruppiert, mit sprechenden Schlüsseln. Die Komponenten lesen die Texte von
  dort. Grund: ich will Texte ändern können, ohne Layout-Code anzufassen.
- Schriften selbst hosten über `@fontsource/public-sans` — keine Requests an Google.
- Bilder über `astro:assets`. Wo noch keine Bilder da sind, die gestreiften Platzhalter aus dem
  Prototyp nachbauen, damit sofort sichtbar ist, wo etwas fehlt.
- Barrierefreiheit: sichtbarer Fokusring, sinnvolle `alt`-Texte, Überschriften-Hierarchie
  h1 → h2 → h3 ohne Sprünge.
- Kein JavaScript für Layout oder Inhalte. Die Seite muss ohne JS vollständig funktionieren.

**Schritt 4 — Git und Deployment:**
Richte ein Git-Repository ein, einen sinnvollen `.gitignore`, eine GitHub-Action zum Deployen
(`withastro/action`), `site` in `astro.config.mjs` und eine `public/CNAME` für meine Domain —
frag mich nach dem Domainnamen. Erkläre mir Schritt für Schritt, was ich auf github.com und beim
Domain-Anbieter einstellen muss.

**Schritt 5 — Anleitung für mich:**
Lege im Projekt eine Datei `ANLEITUNG.md` an, in der du in einfacher Sprache erklärst:
wie ich das Projekt lokal starte, wo die Texte liegen, wo die Farben liegen, wie ich ein Bild
austausche, und wie ich Änderungen veröffentliche. Diese Datei ist für mich, nicht für Entwickler.

**Verbindliche inhaltliche Regeln** (stehen auch in der README, halte dich strikt daran):
- Immer „Offerte", nie „Angebot".
- Nicht „Schweizer KMU" schreiben.
- Der CTA heisst überall „Gespräch vereinbaren →".
- Den Abschnitt „Projekte" auf der Offerte-Seite wörtlich übernehmen — die Formulierung ist
  rechtlich abgestimmt.
- Keine Texte erfinden, keine Abschnitte ergänzen, keine Testimonials oder Zahlen hinzufügen.
  Wenn dir etwas fehlt, frag mich.

---

## 2. Folge-Prompts (für spätere Änderungen)

Kleine Änderungen einfach so formulieren — Claude Code findet die Stelle über `site.ts` bzw.
`global.css`:

- „Ändere auf der Startseite den zweiten Absatz unter *Wie ich arbeite* zu: …"
- „Tausch das Hero-Bild gegen `hero-neu.jpg` aus."
- „Mach das Grün einen Ton heller: `--green` auf `#1F4E45`."
- „Füge der Offerte-Seite unter *Projekte* einen vierten Punkt hinzu: Titel …, Text …"

Bei grösseren Umbauten diesen Satz voranstellen:

> Bevor du etwas änderst: sag mir in drei Sätzen, welche Dateien du anfassen willst und warum.
> Erst wenn ich zustimme, änderst du etwas.

Und wenn etwas kaputtgeht:

> Mach die letzte Änderung rückgängig und erkläre mir, was schiefgelaufen ist.

## 3. Wenn ich (Claude im Design-Tool) das Design weiterentwickle

Wenn du hier neue Seiten oder Änderungen entwerfen lässt, exportierst du dir wieder ein Handoff.
Der Prompt an Claude Code lautet dann:

> Im Ordner `design_handoff_.../` liegt eine **aktualisierte** Version des Designs. Vergleiche sie
> mit dem aktuellen Stand der Website und sag mir zuerst, was sich geändert hat. Dann setzen wir
> die Änderungen einzeln um — nicht alles auf einmal.
