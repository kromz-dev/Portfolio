/* ═══════════════════════════════════════════════════════════════════
 * content.ts — tout le texte du site, en français (défaut) et anglais.
 * Prix, projets, parcours et compétences sont dans data.ts.
 * ═══════════════════════════════════════════════════════════════════ */

import type { ServiceId } from "@/lib/data";

export type Lang = "fr" | "en";
export const LANGS: Lang[] = ["fr", "en"];
export const DEFAULT_LANG: Lang = "fr";

export interface Content {
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    langToggleLabel: string;
    home: string;
    mainNav: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    secondaryCta: string;
    scroll: string;
  };
  cta: string;
  about: {
    heading: string;
    paragraphs: string[];
  };
  services: {
    heading: string;
    intro: string;
    deliverablesLabel: string;
    items: {
      id: ServiceId;
      title: string;
      description: string;
      deliverables: string[];
    }[];
    sapNote: string;
    vatNote: string;
  };
  process: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  trust: {
    heading: string;
    points: { title: string; description: string }[];
  };
  work: {
    heading: string;
    intro: string;
    featured: string;
    mission: string;
    homeLab: {
      title: string;
      description: string;
      hardwareLabel: string;
      servicesLabel: string;
    };
    dnsMission: {
      title: string;
      period: string;
      description: string;
      reference: string;
      tags: string[];
    };
  };
  parcours: {
    heading: string;
    freelance: { period: string; title: string; description: string };
    bts: { title: string; description: string };
  };
  skills: {
    heading: string;
    intro: string;
  };
  contact: {
    heading: string;
    headingAccent: string;
    body: string;
    emailLabel: string;
    copy: string;
    copied: string;
    copyFailed: string;
    elsewhere: string;
  };
  footer: {
    rights: string;
    footerNav: string;
    legal: string;
  };
  legal: {
    title: string;
    back: string;
    sections: { heading: string; body: string[] }[];
  };
}

export const content: Record<Lang, Content> = {
  fr: {
    nav: {
      links: [
        { label: "Services", href: "#services" },
        { label: "Réalisations", href: "#work" },
        { label: "Parcours", href: "#parcours" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Demander un devis",
      langToggleLabel: "Langue du site",
      home: "Retour en haut de page",
      mainNav: "Navigation principale",
    },
    hero: {
      eyebrow: "Prestataire informatique · Toulouse & Ariège",
      headline: "Je crée, dépanne et héberge vos outils informatiques.",
      sub: "Sites web, dépannage, serveurs et automatisations pour les TPE, associations, indépendants et particuliers — à Toulouse, en Ariège et à distance.",
      secondaryCta: "Voir les services",
      scroll: "Défiler",
    },
    cta: "Demander un devis",
    about: {
      heading: "Qui suis-je",
      paragraphs: [
        "Je m'appelle Kamal Kaced, prestataire informatique indépendant (micro-entreprise) entre Toulouse et l'Ariège. J'interviens sur place dans ces deux secteurs et à distance partout en France et en Europe, en français comme en anglais.",
        "Mon objectif est simple : vous livrer des outils fiables, performants et maintenables dans le temps. Vous avez affaire à un interlocuteur unique qui maîtrise ce qui tourne chez vous, de la création à la maintenance.",
      ],
    },
    services: {
      heading: "Services",
      intro: "Quatre domaines, un seul interlocuteur. Projets à prix fixe sur devis, dépannage au temps passé annoncé avant d'intervenir.",
      deliverablesLabel: "Exemples",
      items: [
        {
          id: "web",
          title: "Sites web",
          description: "Conception, création et mise en ligne de votre site, avec tout ce qui va autour.",
          deliverables: [
            "Site vitrine ou page unique",
            "Nom de domaine",
            "Adresse email professionnelle",
            "Hébergement et mise en ligne",
          ],
        },
        {
          id: "troubleshooting",
          title: "Dépannage",
          description: "Quelque chose ne marche plus ? Je trouve la cause et je répare.",
          deliverables: [
            "Site cassé ou inaccessible",
            "Problème de DNS",
            "Emails qui arrivent en spam",
            "Serveur en panne",
          ],
        },
        {
          id: "infra",
          title: "Infrastructure & hébergement",
          description: "Des outils fiables, déployés chez des hébergeurs européens (OVH, Scaleway) : vos données restent en Europe. Les outils clients ne sont jamais hébergés sur mon home lab.",
          deliverables: [
            "Sauvegardes",
            "VPN",
            "Outils auto-hébergés",
            "Déploiement sur cloud européen",
          ],
        },
        {
          id: "ai",
          title: "Automatisations IA",
          description: "Gagner du temps sur ce qui se répète.",
          deliverables: [
            "Automatisation de tâches répétitives",
            "Scripts sur mesure",
            "Assistants et chatbots",
          ],
        },
      ],
      sapNote: "Assistance informatique à domicile à Toulouse et en Ariège : les particuliers peuvent bénéficier d'un crédit d'impôt de 50 % au titre des services à la personne.",
      vatNote: "TVA non applicable, art. 293 B du CGI.",
    },
    process: {
      heading: "Comment ça se passe",
      steps: [
        {
          title: "Vous décrivez le besoin",
          description: "Quelques lignes par email — gratuit et sans engagement.",
        },
        {
          title: "Devis à prix fixe",
          description: "Un prix clair, défini à l'avance. Pas de mauvaise surprise.",
        },
        {
          title: "Livraison et mise en ligne",
          description: "Vous restez propriétaire de votre code, de votre domaine et de vos comptes.",
        },
      ],
    },
    trust: {
      heading: "Engagements",
      points: [
        { title: "Prix annoncés d'avance", description: "Prix fixe sur devis pour les projets, taux horaire annoncé pour le dépannage." },
        { title: "Vous restez propriétaire", description: "Code, domaine et comptes sont à votre nom." },
        { title: "Accès retirés à la fin", description: "Je n'accède qu'à ce qui est nécessaire, et je rends tous les accès à la fin de la mission." },
        { title: "Confidentialité", description: "Accord de confidentialité (NDA) sur demande." },
        { title: "Hébergement européen", description: "Je privilégie les hébergeurs européens et les solutions permettant de conserver les données en Europe." },
      ],
    },
    work: {
      heading: "Réalisations",
      intro: "Des projets réels uniquement. Cette section s'enrichira au fil des missions.",
      featured: "Projet phare",
      mission: "Mission freelance",
      homeLab: {
        title: "Home lab",
        description: "Une infrastructure auto-hébergée chez moi, qui me sert à apprendre et à tester avant de déployer quoi que ce soit chez un client.",
        hardwareLabel: "Matériel",
        servicesLabel: "Services",
      },
      dnsMission: {
        title: "Raccordement d'une application à son nom de domaine",
        period: "2026",
        description: "Mission en sous-traitance pour une agence web : configuration DNS pour mettre en ligne l’application d’un client.",
        reference: "Référence : Julius, coordonnées sur demande",
        tags: ["DNS", "Freelance"],
      },
    },
    parcours: {
      heading: "Parcours",
      freelance: {
        period: "Septembre 2026 – aujourd'hui",
        title: "Freelance · micro-entreprise",
        description: "Création de sites, dépannage, hébergement et automatisations, sur place et à distance.",
      },
      bts: {
        title: "BTS CIEL option Informatique et Réseaux",
        description: "Cybersécurité, informatique et réseaux. 1re année validée. Cursus interrompu en 2e année — diplôme non obtenu.",
      },
    },
    skills: {
      heading: "Ma stack",
      intro: "Les outils que j'utilise au quotidien.",
    },
    contact: {
      heading: "Parlons de",
      headingAccent: "votre projet.",
      body: "Décrivez votre besoin en quelques lignes. Je réponds sous 48 h, avec des questions ou directement un devis.",
      emailLabel: "Email",
      copy: "Copier",
      copied: "Copié !",
      copyFailed: "Copie impossible, sélectionnez l'adresse",
      elsewhere: "Ailleurs",
    },
    footer: {
      rights: "Tous droits réservés.",
      footerNav: "Navigation du pied de page",
      legal: "Mentions légales",
    },
    legal: {
      title: "Mentions légales",
      back: "Retour au site",
      sections: [
        {
          heading: "Éditeur du site",
          body: [
            "Kamal Kaced, entrepreneur individuel (micro-entreprise).",
            "Adresse : __ADDRESS__",
            "SIRET : en cours d'attribution.",
            "Email : kkaced31@gmail.com",
            "TVA non applicable, art. 293 B du CGI.",
          ],
        },
        { heading: "Directeur de la publication", body: ["Kamal Kaced."] },
        {
          heading: "Hébergeur",
          body: ["GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis."],
        },
        {
          heading: "Données personnelles",
          body: ["Ce site n'utilise aucun cookie, aucun traceur et ne comporte aucun formulaire. L'email ne sert qu'à répondre aux demandes."],
        },
      ],
    },
  },

  en: {
    nav: {
      links: [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Background", href: "#parcours" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Get a quote",
      langToggleLabel: "Site language",
      home: "Back to top",
      mainNav: "Main navigation",
    },
    hero: {
      eyebrow: "IT services · Toulouse & Ariège, France",
      headline: "I build, fix and host your IT tools.",
      sub: "Websites, troubleshooting, servers and automations for small businesses, non-profits, freelancers and individuals — in Toulouse, Ariège and remotely.",
      secondaryCta: "See services",
      scroll: "Scroll",
    },
    cta: "Get a quote",
    about: {
      heading: "About me",
      paragraphs: [
        "I'm Kamal Kaced, an independent IT service provider (French micro-entreprise) based between Toulouse and Ariège. I work on site in both areas and remotely across France and Europe, in French or English.",
        "My goal is simple: to deliver tools that are reliable, fast, and easy to maintain over time. You deal with a single point of contact who knows exactly what runs on your systems, from creation to maintenance.",
      ],
    },
    services: {
      heading: "Services",
      intro: "Four areas, one point of contact. Projects at a fixed, quoted price; troubleshooting billed by the hour, announced before I start.",
      deliverablesLabel: "Examples",
      items: [
        {
          id: "web",
          title: "Websites",
          description: "Design, build and put your site online, with everything around it.",
          deliverables: [
            "Showcase site or single page",
            "Domain name",
            "Professional email address",
            "Hosting and going live",
          ],
        },
        {
          id: "troubleshooting",
          title: "Troubleshooting",
          description: "Something stopped working? I find the cause and fix it.",
          deliverables: [
            "Broken or unreachable site",
            "DNS issues",
            "Emails landing in spam",
            "Server down",
          ],
        },
        {
          id: "infra",
          title: "Infrastructure & hosting",
          description: "Reliable tools deployed on European cloud providers (OVH, Scaleway): your data stays in Europe. Client tools are never hosted on my home lab.",
          deliverables: [
            "Backups",
            "VPN",
            "Self-hosted tools",
            "Deployment on European cloud",
          ],
        },
        {
          id: "ai",
          title: "AI automations",
          description: "Save time on the things you keep repeating.",
          deliverables: [
            "Automating repetitive tasks",
            "Custom scripts",
            "Assistants and chatbots",
          ],
        },
      ],
      sapNote: "On-site IT help around Toulouse and Ariège: private individuals in France can get a 50% tax credit under the \"services à la personne\" scheme.",
      vatNote: "VAT not applicable (French micro-entreprise, art. 293 B CGI).",
    },
    process: {
      heading: "How it works",
      steps: [
        {
          title: "You describe the need",
          description: "A few lines by email — free, no commitment.",
        },
        {
          title: "Fixed-price quote",
          description: "A clear price agreed upfront. No surprises.",
        },
        {
          title: "Delivery and go-live",
          description: "You keep ownership of your code, your domain and your accounts.",
        },
      ],
    },
    trust: {
      heading: "Commitments",
      points: [
        { title: "Prices agreed upfront", description: "Fixed quoted price for projects, hourly rate announced for troubleshooting." },
        { title: "You stay the owner", description: "Code, domain and accounts are in your name." },
        { title: "Access removed at the end", description: "I only access what's needed, and I hand back all access when the job is done." },
        { title: "Confidentiality", description: "NDA available on request." },
        { title: "European hosting", description: "I prioritize European hosting providers and solutions that keep your data in Europe." },
      ],
    },
    work: {
      heading: "Work",
      intro: "Real projects only. This section will grow with each mission.",
      featured: "Featured project",
      mission: "Freelance mission",
      homeLab: {
        title: "Home lab",
        description: "Self-hosted infrastructure at home, used to learn and to test before deploying anything for a client.",
        hardwareLabel: "Hardware",
        servicesLabel: "Services",
      },
      dnsMission: {
        title: "Connecting an app to its domain name",
        period: "2026",
        description: "Subcontracted for a web agency: DNS setup to put a client's app live on their domain.",
        reference: "Reference: Julius, contact details on request",
        tags: ["DNS", "Freelance"],
      },
    },
    parcours: {
      heading: "Background",
      freelance: {
        period: "September 2026 – today",
        title: "Freelance · micro-entreprise",
        description: "Websites, troubleshooting, hosting and automations, on site and remotely.",
      },
      bts: {
        title: "BTS CIEL — IT & Networks option",
        description: "Cybersecurity, IT and networking (French 2-year IT program). First year completed. Studies paused during 2nd year — diploma not obtained.",
      },
    },
    skills: {
      heading: "Skills",
      intro: "The tools I use day to day.",
    },
    contact: {
      heading: "Let's talk about",
      headingAccent: "your project.",
      body: "Describe what you need in a few lines. I reply within 48 hours, with questions or straight away with a quote.",
      emailLabel: "Email",
      copy: "Copy",
      copied: "Copied!",
      copyFailed: "Couldn't copy, please select the address",
      elsewhere: "Elsewhere",
    },
    footer: {
      rights: "All rights reserved.",
      footerNav: "Footer navigation",
      legal: "Legal notice",
    },
    legal: {
      title: "Legal notice",
      back: "Back to the site",
      sections: [
        {
          heading: "Site publisher",
          body: [
            "Kamal Kaced, sole proprietor (French micro-entreprise).",
            "Address: __ADDRESS__",
            "SIRET: being assigned.",
            "Email: kkaced31@gmail.com",
            "VAT not applicable, art. 293 B of the French General Tax Code (CGI).",
          ],
        },
        { heading: "Publication director", body: ["Kamal Kaced."] },
        {
          heading: "Hosting provider",
          body: ["GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States."],
        },
        {
          heading: "Personal data",
          body: ["This site uses no cookies, no trackers and has no forms. Your email is only used to answer enquiries."],
        },
      ],
    },
  },
};
