# Anleitung für Jennifer

Diese Datei ist für dich, nicht für Entwickler. Sie erklärt in einfachen Worten, wie du mit
deiner Website umgehst — lokal ansehen, Texte ändern, Bilder austauschen und veröffentlichen.

## Inhalt
1. [Einmalige Einrichtung (Node.js installieren)](#1-einmalige-einrichtung-nodejs-installieren)
2. [Die Website lokal ansehen](#2-die-website-lokal-ansehen)
3. [Texte ändern](#3-texte-ändern)
4. [Farben ändern](#4-farben-ändern)
5. [Ein Bild austauschen](#5-ein-bild-austauschen)
6. [Kontaktformular anbinden (Formspree)](#6-kontaktformular-anbinden-formspree)
7. [Bei GitHub veröffentlichen](#7-bei-github-veröffentlichen)
8. [Eigene Domain einrichten](#8-eigene-domain-einrichten)
9. [Änderungen veröffentlichen](#9-änderungen-veröffentlichen)
10. [Wenn etwas kaputtgeht](#10-wenn-etwas-kaputtgeht)

---

## 1. Einmalige Einrichtung (Node.js installieren)

Astro selbst braucht **kein Konto** — es ist ein kostenloses Werkzeug, das auf deinem Computer
läuft. Damit es läuft, brauchst du aber **Node.js** (die Software-Grundlage, auf der Astro
aufbaut). Das ist bei dir noch nicht installiert.

1. Gehe auf **[nodejs.org](https://nodejs.org)**.
2. Lade die Version mit der Bezeichnung **„LTS"** herunter (das ist die empfohlene, stabile
   Version — nicht die „Current"-Version nehmen).
3. Öffne die heruntergeladene Datei und klicke dich mit „Weiter" / „Next" durch die Installation.
   Die Standardeinstellungen sind in Ordnung, du musst nichts ändern.
4. Starte danach dein Terminal (oder Claude Code) einmal neu, damit die Installation erkannt wird.

Das machst du nur einmal. Danach kannst du jederzeit an der Website arbeiten.

---

## 2. Die Website lokal ansehen

Immer wenn du die Website auf deinem Computer ansehen möchtest, bevor sie online geht:

1. Öffne ein Terminal im Projektordner (also in `Webseite Claude Code`).
2. Beim allerersten Mal einmalig:
   ```bash
   npm install
   ```
   Das lädt alle nötigen Bausteine herunter (dauert ein bis zwei Minuten, braucht Internet).
3. Dann jedes Mal, wenn du die Seite ansehen willst:
   ```bash
   npm run dev
   ```
4. Es erscheint eine Adresse wie `http://localhost:4321` — die öffnest du im Browser und siehst
   die Website live. Änderungen an Texten siehst du sofort, ohne den Befehl neu zu starten.
5. Zum Beenden: im Terminal `Strg`+`C` drücken.

---

## 3. Texte ändern

Alle Texte der Website stehen an einem einzigen Ort:

```
src/content/site.ts
```

Dort findest du für jede Seite einen eigenen Abschnitt (z. B. `home`, `ueberMich`, `offerte`,
`kontakt`, `impressum`, `datenschutz`) mit sprechenden Namen wie `heading` (Überschrift) oder
`lead` (Einleitungssatz). Du kannst den Text zwischen den Anführungszeichen `'...'` einfach
ersetzen und speichern — das Layout bleibt automatisch erhalten.

**Wichtig:** Der Abschnitt `offerte.umsetzung` (die drei Karten „Jedes Projekt einzeln
beauftragt" usw.) ist rechtlich bewusst so formuliert. Bitte diesen Text nicht ohne Rücksprache
ändern.

---

## 4. Farben ändern

Alle Farben stehen ganz oben in:

```
src/styles/global.css
```

Zum Beispiel:
```css
--green: #1c443c;
```

Wenn du das Grün einen Ton heller machen willst, änderst du nur diesen einen Wert — die Farbe
ändert sich dann automatisch auf der ganzen Website (Buttons, Flächen, Links usw.), weil überall
auf diese eine Stelle verwiesen wird.

---

## 5. Ein Bild austauschen

Aktuell sind zwei Bilder noch **Platzhalter** (gestreifte Flächen mit Beschriftung): das
Hero-Bild auf der Startseite und das Porträtfoto (Startseite + „Über mich"). Sobald du Fotos hast:

1. Bild in den Ordner `public/` legen, z. B. `public/hero.jpg` und `public/portrait.jpg`.
2. In `src/pages/index.astro` den Platzhalter-Block (`<div class="placeholder hero-placeholder">`
   bzw. `portrait-placeholder`) durch ein normales Bild ersetzen, z. B.:
   ```astro
   <img src="/portrait.jpg" alt="Porträt von Jennifer Roth" class="portrait-placeholder" />
   ```
3. Dasselbe für `src/pages/ueber-mich.astro`.

Wenn du unsicher bist, sag mir einfach „Tausch das Hero-Bild gegen hero.jpg aus" und ich mache es
für dich.

Logo und QR-Code liegen bereits fertig in `public/logo-excelerate.png` und `public/qr-vcard.png`.

---

## 6. Kontaktformular anbinden (Formspree)

Das Formular auf der Kontaktseite ist fertig gebaut, aber noch nicht mit einem Postfach
verbunden. Du wolltest dafür **Formspree** nutzen (kostenlos für den Einstieg):

1. Gehe auf **[formspree.io](https://formspree.io)** und erstelle ein kostenloses Konto mit
   deiner E-Mail-Adresse.
2. Erstelle dort ein neues Formular ("New Form"). Du bekommst eine **Formular-ID** (eine Reihe
   Buchstaben/Zahlen, z. B. `xzznnabc`).
3. Öffne die Datei `src/pages/kontakt.astro` und suche ganz oben die Zeile:
   ```
   const FORMSPREE_FORM_ID = 'YOUR_FORM_ID';
   ```
   Ersetze `YOUR_FORM_ID` durch deine eigene ID.
4. Speichern — fertig. Nachrichten aus dem Formular landen ab sofort in deinem E-Mail-Postfach.

Wenn du diesen Schritt lieber mit mir zusammen machst, sag einfach Bescheid, sobald du das
Formspree-Konto erstellt hast.

---

## 7. Bei GitHub veröffentlichen

GitHub ist der Ort, an dem der Code deiner Website liegt und von wo aus sie automatisch
veröffentlicht wird.

1. Gehe auf **[github.com](https://github.com)** und erstelle ein kostenloses Konto (falls noch
   nicht vorhanden).
2. Klicke oben rechts auf das `+` und dann auf **„New repository"**.
3. Name z. B. `excelerate-roth-website`. Sichtbarkeit: **Public** (öffentlich) — das ist bei
   GitHub Pages nötig, damit die Seite kostenlos gehostet werden kann. Der Code ist dann zwar
   einsehbar, aber das ist bei Marketing-Websites völlig normal.
4. **Nicht** „Add a README" ankreuzen — das Projekt hat schon alles.
5. Auf „Create repository" klicken. GitHub zeigt dir danach eine Adresse wie
   `https://github.com/dein-name/excelerate-roth-website.git` — die kopierst du.

Sag mir danach einfach die Adresse (oder nur den gewählten Namen), dann verbinde ich dein lokales
Projekt damit und lade es hoch.

**GitHub Pages aktivieren** (einmalig, nachdem der Code hochgeladen ist):
1. Im Repository auf **„Settings"** → **„Pages"**.
2. Bei **„Source"** die Option **„GitHub Actions"** auswählen.
3. Ab dem nächsten Hochladen baut GitHub die Seite automatisch und veröffentlicht sie.

---

## 8. Eigene Domain einrichten

Ich habe vorläufig `www.excelerateroth.ch` in den Projektdateien eingetragen (in
`astro.config.mjs` und `public/CNAME`), weil das zu deiner E-Mail-Adresse passt. Falls das nicht
die richtige Domain ist, sag mir die richtige und ich passe es an.

Sobald du die Domain bei einem Anbieter (z. B. Switch, Hostpoint, Infomaniak) registriert hast:
1. Beim Domain-Anbieter einen **CNAME-Eintrag** für `www` anlegen, der auf
   `dein-github-name.github.io` zeigt.
2. Im GitHub-Repository unter **Settings → Pages** die Domain eintragen (dort auch ein Häkchen
   bei „Enforce HTTPS" setzen, sobald verfügbar).

Auch hier gilt: Wenn du möchtest, führe ich dich Schritt für Schritt durch, sobald du bei deinem
Domain-Anbieter eingeloggt bist.

---

## 9. Änderungen veröffentlichen

Sobald alles bei GitHub eingerichtet ist, sag mir einfach, was sich ändern soll (z. B. „ändere
den Text im Hero auf der Startseite zu …" oder „tausch das Porträtfoto aus"). Ich ändere den
Code, zeige dir das Ergebnis lokal, und wenn es passt, lade ich es zu GitHub hoch — die
Live-Website aktualisiert sich dann automatisch innerhalb weniger Minuten.

---

## 10. Wenn etwas kaputtgeht

Sag einfach: **„Mach die letzte Änderung rückgängig und erkläre mir, was schiefgelaufen ist."**
Ich mache die Änderung rückgängig und erkläre dir in einfachen Worten, was passiert ist.
