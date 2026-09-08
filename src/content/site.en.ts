// English texts — mirrors the structure of site.ts exactly. Keep keys in sync
// between the two files; components read whichever locale BaseLayout passes in.

export const nav = {
  arbeit: { label: 'How I work', href: '/en/#work' },
  ueberMich: { label: 'About', href: '/en/about' },
  offerte: { label: 'Proposal', href: '/en/proposal' },
  kontakt: { label: 'Book a call →', href: '/en/contact' },
};

export const footer = {
  tagline: 'Active across the DACH region',
  impressum: { label: 'Imprint', href: '/en/imprint' },
  datenschutz: { label: 'Privacy Policy', href: '/en/privacy' },
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
    title: 'Reporting and Controlling Structures | excelerate Roth',
    description:
      "Reporting and controlling structures for companies that actually use their numbers – built in Power BI or a clean, structured Excel solution, tailored to where you're starting from.",
  },
  hero: {
    heading: "Reporting you don't have to rebuild from scratch every time.",
    lead: "Reporting and controlling structures for companies that actually use their numbers – built in Power BI or a clean, structured Excel solution, tailored to where you're starting from.",
    ctaLabel: 'Book a call →',
    ctaHref: '/en/contact',
    placeholderLabel: 'Banner image: portrait or Eastern Switzerland landscape',
  },
  problem: {
    heading: 'Does this sound familiar?',
    items: [
      'Figures get pulled together by hand from different sources – for the monthly close just as much as for any ad hoc question.',
      'Everyone on the team builds reports a little differently – nothing is comparable, nothing readable at a glance.',
      "By the time the numbers are ready, they're already out of date.",
    ],
  },
  arbeit: {
    heading: 'How I work',
    paragraphs: [
      'Depending on where you start, the result is a Power BI dashboard, a structured Excel solution, or an automated interface between your existing systems – the tool follows the problem, not the other way around.',
      'The resulting structure stays with the company: understood, maintained, and carried forward by the team – even after the project ends.',
    ],
  },
  ueberMichTeaser: {
    heading: 'About me',
    paragraph:
      'This approach is grounded in several years of hands-on experience in corporate controlling and building BI structures for manufacturing companies.',
    closingLine: 'Bachelor of Arts in Controlling and Finance, WINGS Hochschule Wismar.',
    ctaLabel: 'More about me →',
    ctaHref: '/en/about',
    placeholderLabel: 'Portrait photo',
  },
  einstieg: {
    heading: 'Getting started',
    paragraph:
      "Send a short message – we'll talk through your situation and the right approach together, and you'll get a proposal.",
    ctaLabel: 'Get in touch →',
    ctaHref: '/en/proposal',
  },
  kontaktCta: {
    heading: "Let's talk about your numbers – the first conversation is free, no obligation.",
    subline: "I'll get back to you within 2 business days.",
    primaryLabel: 'Book a call →',
    secondaryLabel: 'Send an email',
    qrLine: 'Save my contact details',
  },
};

export const ueberMich = {
  meta: {
    title: 'About | excelerate Roth',
    description: 'Business sparring partner for reporting, controlling, and BI structures in companies.',
  },
  eyebrow: 'About',
  heading: 'Jennifer Roth',
  lead: 'Business sparring partner for reporting, controlling, and BI structures in companies.',
  placeholderLabel: 'Portrait photo',
  paragraphs: [
    'Before going self-employed, I spent several years as a business partner in corporate controlling at an internationally active industrial company. I co-managed the monthly close, prepared the related management report, analyzed key figures, and facilitated the planning and budgeting process for the entire business unit.',
    'As part of international SAP rollouts, I configured the controlling structures in SAP customizing and trained local staff. I also co-managed the technical integration of a local time-tracking system with internal cost allocation, including automated postings.',
    'The controlling data model in Power BI was built under my responsibility, and later expanded together with a BI developer whom I onboarded and managed. I also had line management responsibility for a controlling position within the team.',
  ],
  closingLine: 'Bachelor of Arts in Controlling and Finance, WINGS Hochschule Wismar.',
  cta: {
    heading: "Let's talk about your numbers – the first conversation is free, no obligation.",
    ctaLabel: 'Book a call →',
    ctaHref: '/en/contact',
  },
};

export const offerte = {
  meta: {
    title: 'Proposal | excelerate Roth',
    description: "Together we'll discuss your situation and possible approach – afterward, you'll receive a proposal.",
  },
  eyebrow: 'Proposal',
  heading: 'The simplest first step is a short message.',
  lead: "Together we'll discuss your situation and possible approach – afterward, you'll receive a proposal.",
  kostenlos: {
    eyebrow: 'Free',
    heading: 'A no-obligation initial conversation is the first step.',
    text: "Message or call me. In the initial conversation, we'll clarify your needs and expectations. Based on that, you'll receive a proposal to get started. The conversation and the proposal are both free.",
    ctaLabel: 'Book a call →',
    ctaHref: '/en/contact',
    note: 'Response within 2 business days.',
  },
  einstieg: {
    eyebrow: 'Getting started',
    heading: 'Analysis and recommendation',
    intro:
      "After the free conversation, the getting-started phase begins in three steps. At the end, you'll receive a recommendation – with no obligation. You then decide whether to implement it, and whether to continue working with me on it.",
    steps: [
      {
        duration: 'approx. 1 hr',
        title: 'Initial conversation',
        text: 'You show me your current situation – existing reports, processes, and challenges.',
        highlighted: true,
      },
      {
        duration: 'approx. 3 hrs',
        title: 'Analysis phase',
        text: 'Partly together with you, partly on my own.',
        highlighted: false,
      },
      {
        duration: 'approx. 1 hr',
        title: 'Recommendation',
        text: 'A concrete recommendation for how to move forward – with no obligation.',
        highlighted: false,
      },
    ],
    paragraphs: [
      "If your situation calls for more time, we'll plan for that accordingly – actual effort is based on what's needed and stated clearly in the proposal.",
      "The recommendation marks the end of the getting-started phase. You're under no obligation – if you'd like to implement it, it becomes its own project.",
    ],
  },
  // Faithful translation of the legally-worded German original — keep the
  // distinctions (independent, project-based, no fixed role) intact.
  umsetzung: {
    eyebrow: 'Implementation',
    heading: 'Projects',
    intro:
      "If you decide to move forward, implementation follows as its own project – with its own goal, its own scope, and its own project proposal.",
    cards: [
      {
        title: 'Each project commissioned individually',
        text: "Scope, goal, and outcome are documented in writing beforehand. What's included and what isn't is defined upfront.",
      },
      {
        title: 'Independent execution',
        text: 'The work is carried out using my own infrastructure and under my own professional responsibility.',
      },
      {
        title: 'No fixed role',
        text: "I don't take on a fixed role within the company – the collaboration stays project-based. Billing is based on the effort per project.",
      },
    ],
    outro:
      'Project types range from individual BI or Excel work, to controlling analyses, to building a full reporting structure. Any follow-up work is agreed on again as its own separate project.',
  },
  schulung: {
    heading: 'Training your team',
    text: "On request, I can also train your team in using the structures we've built, so they can maintain and carry them forward independently.",
  },
  cta: {
    heading: "Message me – together we'll discuss your situation, and afterward you'll receive a proposal.",
    ctaLabel: 'Book a call →',
    ctaHref: '/en/contact',
  },
};

export const kontakt = {
  meta: {
    title: 'Contact | excelerate Roth',
    description:
      "You can also use the form below or give me a call. Your message goes directly to me, not to a team or a queue – I'll get back to you within 2 business days.",
  },
  eyebrow: 'Contact',
  heading: 'The fastest way to reach me is via WhatsApp.',
  lead: "You can also use the form below or give me a call. Your message goes directly to me, not to a team or a queue – I'll get back to you within 2 business days.",
  whatsapp: {
    eyebrow: 'WhatsApp',
    ctaLabel: 'Send a message →',
  },
  weitereMoeglichkeiten: {
    heading: 'Other ways to reach me',
    qrLine: 'Save my contact details straight to your phone.',
  },
  form: {
    heading: 'Or send a quick message',
    nameLabel: 'Name',
    namePlaceholder: 'First and last name',
    emailLabel: 'Email',
    emailPlaceholder: 'name@company.com',
    messageLabel: "What's this about?",
    messagePlaceholder: 'A few sentences about your situation are enough.',
    submitLabel: 'Send message',
    note: "I'll get back to you within 2 business days.",
    successMessage: "Thank you for your message! I'll get back to you within 2 business days.",
    privacyNote: 'You can find information about how your data is handled in the',
    privacyLinkLabel: 'Privacy Policy',
  },
};

export const impressum = {
  meta: {
    title: 'Imprint | excelerate Roth',
    description: 'Imprint for excelerate Roth | Jennifer Roth.',
  },
  heading: 'Imprint',
};

export const datenschutz = {
  meta: {
    title: 'Privacy Policy | excelerate Roth',
    description: 'Privacy policy for excelerate Roth | Jennifer Roth.',
  },
  heading: 'Privacy Policy',
};
