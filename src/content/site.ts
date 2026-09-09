// Alle Texte der Website an einem Ort. Layout-Code fasst diese Datei nicht an —
// wer nur Texte ändern will, ändert nur hier etwas.

export const nav = {
  arbeit: { label: 'Wie ich arbeite', href: '/#arbeit' },
  ueberMich: { label: 'Über mich', href: '/ueber-mich' },
  offerte: { label: 'Offerte', href: '/offerte' },
  kontakt: { label: 'Gespräch vereinbaren →', href: '/kontakt' },
};

export const footer = {
  tagline: 'Im Einsatz für Unternehmen in der Schweiz – und auf Wunsch in der ganzen DACH-Region.',
  impressum: { label: 'Impressum', href: '/impressum' },
  datenschutz: { label: 'Datenschutz', href: '/datenschutz' },
  copyright: '© 2026 excelerate Roth',
};

export const contactInfo = {
  whatsappNumber: '+41 76 531 16 10',
  whatsappHref: 'https://wa.me/41765311610',
  phoneHref: 'tel:+41765311610',
  email: 'jennifer.roth@excelerateroth.ch',
  emailHref: 'mailto:jennifer.roth@excelerateroth.ch',
  linkedinLabel: 'jennifer-roth-excelerate',
  linkedinHref: 'https://linkedin.com/in/jennifer-roth-excelerate',
};

export const home = {
  meta: {
    title: 'Reporting & Controlling für KMU Schweiz | excelerate Roth',
    description:
      'Reporting- und Controlling-Strukturen für Schweizer KMU, die mit ihren Zahlen arbeiten – mit Power BI oder einer klar aufgebauten Excel-Lösung.',
  },
  hero: {
    heading: 'Reporting, das nicht jedes Mal neu zusammengesucht werden muss.',
    lead: 'Reporting- und Controlling-Strukturen für Unternehmen in der Schweiz, die mit ihren Zahlen arbeiten – mit Power BI oder einer klar aufgebauten Excel-Lösung, abgestimmt auf die jeweilige Ausgangslage.',
    ctaLabel: 'Gespräch vereinbaren →',
    ctaHref: '/kontakt',
  },
  problem: {
    heading: 'Kommt Ihnen das bekannt vor?',
    items: [
      'Zahlen werden von Hand aus verschiedenen Quellen zusammengetragen – im Monatsabschluss genauso wie in jeder Ad-hoc-Auswertung.',
      'Jede Person im Team erstellt Reports ein bisschen anders – nicht vergleichbar, nicht auf einen Blick lesbar.',
      'Bis die Zahlen fertig aufbereitet sind, sind sie schon wieder veraltet.',
    ],
  },
  arbeit: {
    heading: 'Wie ich arbeite',
    paragraphs: [
      'Je nach Ausgangslage entsteht ein Power-BI-Dashboard, eine strukturierte Excel-Lösung oder eine automatisierte Schnittstelle zwischen bestehenden Systemen – das Werkzeug folgt dem Problem, nicht umgekehrt.',
      'Die entstehende Struktur bleibt im Unternehmen: verstanden, gepflegt und weitergeführt vom Team – auch nach Abschluss des Projekts.',
    ],
  },
  ueberMichTeaser: {
    heading: 'Über mich',
    paragraph:
      'Diese Herangehensweise stammt aus mehrjähriger Praxis im Unternehmenscontrolling und im Aufbau von BI-Strukturen für produzierende Unternehmen.',
    closingLine: 'Bachelor of Arts in Controlling and Finance, WINGS Hochschule Wismar.',
    ctaLabel: 'Mehr über mich →',
    ctaHref: '/ueber-mich',
  },
  einstieg: {
    heading: 'Der Einstieg',
    paragraph:
      'Der Einstieg: eine kurze Nachricht – danach besprechen wir gemeinsam Ihre Situation und das Vorgehen, und Sie erhalten eine Offerte.',
    ctaLabel: 'Meine Offerte ansehen →',
    ctaHref: '/offerte',
  },
  kontaktCta: {
    heading: 'Reden wir über Ihre Zahlen – der erste Schritt ist unverbindlich.',
    subline: 'Ich melde mich innerhalb von 2 Werktagen.',
    primaryLabel: 'Gespräch vereinbaren →',
    secondaryLabel: 'E-Mail schreiben',
    qrLine: 'Kontakt direkt speichern',
  },
};

export const ueberMich = {
  meta: {
    title: 'Über mich | excelerate Roth',
    description:
      'Betriebswirtschaftliche Sparringpartnerin für Reporting, Controlling und BI-Strukturen in Unternehmen.',
  },
  eyebrow: 'Über mich',
  heading: 'Jennifer Roth',
  lead: 'Jennifer Roth ist betriebswirtschaftliche Sparringpartnerin für Reporting, Controlling und BI-Strukturen – für Unternehmen in der Schweiz.',
  paragraphs: [
    'Bevor ich mich selbständig gemacht habe, habe ich mehrere Jahre als betriebswirtschaftliche Sparringpartnerin im Unternehmenscontrolling eines international tätigen Industrieunternehmens gearbeitet.',
    'Ich habe den Monatsabschluss mitverantwortet und den dazugehörigen Managementbericht erstellt. Dazu kamen die Analyse der zentralen Kennzahlen und die Moderation des Planungs- und Budgetprozesses für den gesamten Unternehmensbereich.',
    'Im Rahmen internationaler SAP-Rollouts habe ich die Controlling-Strukturen im Customizing aufgesetzt und Mitarbeitende geschult. Ebenso habe ich die technische Anbindung eines lokalen Zeiterfassungssystems an die interne Leistungsverrechnung mitverantwortet – inklusive automatisierter Verbuchung.',
    'Das Controlling-Datenmodell in Power BI ist unter meiner Verantwortung entstanden und wurde später gemeinsam mit einem BI-Entwickler weiter ausgebaut, den ich eingearbeitet und geführt habe. Dazu kam die Führung einer Controlling-Stelle.',
  ],
  closingLine: 'Bachelor of Arts in Controlling and Finance, WINGS Hochschule Wismar.',
  cta: {
    heading: 'Reden wir über Ihre Zahlen – der erste Schritt ist unverbindlich.',
    ctaLabel: 'Gespräch vereinbaren →',
    ctaHref: '/kontakt',
  },
};

export const offerte = {
  meta: {
    title: 'Offerte | excelerate Roth',
    description:
      'Gemeinsam besprechen wir Ihre Situation und das mögliche Vorgehen – im Anschluss erhalten Sie eine Offerte.',
  },
  eyebrow: 'Offerte',
  heading: 'Der einfachste erste Schritt ist eine kurze Nachricht.',
  lead: 'Gemeinsam besprechen wir Ihre Situation und das mögliche Vorgehen – im Anschluss erhalten Sie eine Offerte.',
  kostenlos: {
    eyebrow: 'Kostenlos',
    heading: 'Am Anfang steht ein unverbindliches Erstgespräch',
    text: 'Schreiben Sie mir oder rufen Sie an. Im Erstgespräch klären wir Ihr Anliegen und Ihre Vorstellungen. Auf dieser Grundlage erhalten Sie eine Offerte für den Einstieg. Gespräch und Offerte sind kostenlos.',
    ctaLabel: 'Gespräch vereinbaren →',
    ctaHref: '/kontakt',
    note: 'Antwort innerhalb von 2 Werktagen.',
  },
  einstieg: {
    eyebrow: 'Der Einstieg',
    heading: 'Analyse und Lösungsvorschlag',
    intro:
      'Nach dem kostenlosen Gespräch folgt der eigentliche Einstieg in drei Schritten. Am Ende steht eine Empfehlung – unverbindlich. Sie entscheiden danach, ob Sie diese umsetzen möchten und ob wir dafür weiter zusammenarbeiten.',
    steps: [
      {
        duration: 'ca. 1 Std.',
        title: 'Erstes Gespräch',
        text: 'Sie zeigen mir Ihre aktuelle Situation – bestehende Reports, Prozesse, Herausforderungen.',
        highlighted: true,
      },
      {
        duration: 'ca. 3 Std.',
        title: 'Analysephase',
        text: 'Teils gemeinsam mit Ihnen, teils in eigenständiger Arbeit meinerseits.',
        highlighted: false,
      },
      {
        duration: 'ca. 1 Std.',
        title: 'Lösungsvorschlag',
        text: 'Eine konkrete Empfehlung, wie es weitergehen kann – unverbindlich.',
        highlighted: false,
      },
    ],
    paragraphs: [
      'Braucht es aufgrund der Ausgangslage mehr Zeit, planen wir das entsprechend ein – der Aufwand richtet sich nach dem, was tatsächlich gebraucht wird, und wird in der Offerte klar ausgewiesen.',
      'Mit dem Lösungsvorschlag endet der Einstieg. Sie sind zu nichts verpflichtet – möchten Sie die Empfehlung umsetzen, wird daraus ein eigenes Projekt.',
    ],
  },
  // Wörtlich zu übernehmen — rechtlich abgestimmte Formulierung (Abgrenzung
  // selbständige Erwerbstätigkeit). Nicht umformulieren.
  umsetzung: {
    eyebrow: 'Die Umsetzung',
    heading: 'Projekte',
    intro:
      'Entscheiden Sie sich für die Umsetzung, folgt diese als eigenständiges Projekt – mit eigenem Ziel, eigenem Umfang und eigener Offerte.',
    cards: [
      {
        title: 'Jedes Projekt einzeln beauftragt',
        text: 'Umfang, Ziel und Ergebnis werden vorab schriftlich festgehalten. Was dazugehört und was nicht, steht von Anfang an fest.',
      },
      {
        title: 'Eigenverantwortliche Ausführung',
        text: 'Die Arbeit erfolgt mit eigener Infrastruktur und in eigener fachlicher Verantwortung.',
      },
      {
        title: 'Keine feste Funktion',
        text: 'Eine feste Funktion im Unternehmen wird dabei nicht übernommen – die Zusammenarbeit bleibt projektbezogen. Abgerechnet wird nach Aufwand pro Projekt.',
      },
    ],
    outro:
      'Inhaltlich reicht das von einzelnen BI- oder Excel-Projekten über Controlling-Analysen bis zum Aufbau einer Reporting-Struktur. Folgt später ein weiteres Vorhaben, wird es erneut als eigenes Projekt vereinbart.',
  },
  schulung: {
    heading: 'Schulung Ihres Teams',
    text: 'Auf Wunsch schule ich auch Ihr Team im Umgang mit den aufgebauten Strukturen, damit es diese eigenständig weiterführen und pflegen kann.',
  },
  cta: {
    heading: 'Schreiben Sie mir – gemeinsam besprechen wir Ihre Situation, danach erhalten Sie eine Offerte.',
    ctaLabel: 'Gespräch vereinbaren →',
    ctaHref: '/kontakt',
  },
};

export const kontakt = {
  meta: {
    title: 'Kontakt | excelerate Roth',
    description:
      'Kontakt für Reporting- und Controlling-Beratung in der Schweiz. Direkte Anfrage per WhatsApp, Telefon oder Formular – Antwort innert 2 Werktagen.',
  },
  eyebrow: 'Kontakt',
  heading: 'Am schnellsten erreichen Sie mich per WhatsApp.',
  lead: 'Ebenso können Sie das Formular unten nutzen oder mich anrufen. Ihre Anfrage geht direkt an mich, nicht an ein Team oder eine Warteschlange – ich melde mich innerhalb von 2 Werktagen.',
  whatsapp: {
    eyebrow: 'WhatsApp',
    ctaLabel: 'Nachricht schreiben →',
  },
  weitereMoeglichkeiten: {
    heading: 'Weitere Möglichkeiten',
    qrLine: 'Kontaktdaten direkt aufs Handy speichern.',
  },
  form: {
    heading: 'Oder kurz schreiben',
    nameLabel: 'Name',
    namePlaceholder: 'Vor- und Nachname',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'name@unternehmen.ch',
    messageLabel: 'Worum geht es?',
    messagePlaceholder: 'Ein paar Sätze zu Ihrer Situation genügen.',
    submitLabel: 'Nachricht senden',
    note: 'Ich melde mich innerhalb von 2 Werktagen.',
    successMessage: 'Danke für Ihre Nachricht! Ich melde mich innerhalb von 2 Werktagen.',
    privacyNote: 'Hinweise zum Umgang mit Ihren Daten finden Sie in der',
    privacyLinkLabel: 'Datenschutzerklärung',
  },
};

export const impressum = {
  meta: {
    title: 'Impressum | excelerate Roth',
    description: 'Impressum von J. Roth | Excelerate Jennifer Roth.',
  },
  heading: 'Impressum',
  updated: 'Entwurf v1',
};

export const datenschutz = {
  meta: {
    title: 'Datenschutz | excelerate Roth',
    description: 'Datenschutzerklärung von J. Roth | Excelerate Jennifer Roth.',
  },
  heading: 'Datenschutzerklärung',
  updated: 'Entwurf v1',
};
