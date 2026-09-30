/* ═══════════════════════════════════════════════════════════════════
 * content.ts — tout le texte du site, en français (défaut) et anglais.
 * Les valeurs à compléter (prix, email, projets…) sont dans data.ts.
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
  placeholder: string;
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
    pricePending: string;
    items: {
      id: ServiceId;
      title: string;
      description: string;
      deliverables: string[];
    }[];
    sapNote: string;
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
    placeholderTitle: string;
    placeholderBody: string;
  };
  parcours: {
    heading: string;
    freelance: { period: string; title: string; description: string };
    bts: { title: string; description: string; periodPending: string };
    placeholderBody: string;
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
    emailPending: string;
    elsewhere: string;
  };
  footer: {
    rights: string;
    footerNav: string;
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
    placeholder: "À compléter",
    hero: {
      eyebrow: "Freelance · Mirepoix, Ariège",
      headline: "Je crée, dépanne et héberge vos outils informatiques.",
      sub: "Sites, serveurs, automatisations — pour les TPE, associations et indépendants, en Ariège et à distance partout en Europe. Conçu avec des outils de code IA modernes, compris et maintenu par un humain.",
      secondaryCta: "Voir les services",
      scroll: "Défiler",
    },
    cta: "Demander un devis",
    about: {
      heading: "Qui suis-je",
      paragraphs: [
        "Je m'appelle Kamal Kaced, prestataire informatique en micro-entreprise, basé à Mirepoix en Ariège. J'interviens sur place autour de chez moi et à distance pour des clients en France et en Europe, en français comme en anglais.",
        "Je travaille avec des assistants de code IA : je les pilote, je relis et je comprends le code produit, et c'est moi qui le maintiens. Vous avez un interlocuteur unique qui sait ce qui tourne chez vous.",
      ],
    },
    services: {
      heading: "Services",
      intro: "Quatre domaines, un seul interlocuteur. Chaque prestation fait l'objet d'un devis à prix fixe.",
      deliverablesLabel: "Exemples",
      pricePending: "Prix à venir",
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
      sapNote: "Assistance informatique à domicile autour de Mirepoix : les particuliers peuvent bénéficier d'un crédit d'impôt de 50 % au titre des services à la personne.",
    },
    process: {
      heading: "Comment ça se passe",
      steps: [
        {
          title: "Vous décrivez le besoin",
          description: "Un court appel ou un message, gratuit et sans engagement.",
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
        { title: "Prix fixes", description: "Le prix du devis est le prix payé." },
        { title: "Vous restez propriétaire", description: "Code, comptes et accès sont à votre nom." },
        { title: "Confidentialité", description: "Accord de confidentialité (NDA) sur demande." },
        { title: "Français & anglais", description: "Échanges et livrables dans les deux langues." },
        { title: "Hébergement européen", description: "Vos données restent en Europe." },
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
        title: "Correction DNS pour le site d'un client d'une agence web",
        period: "2026",
        description: "Mission freelance : diagnostic et correction de la configuration DNS du site d'un client, en sous-traitance pour une agence web.",
        reference: "Référence : Julius (agence web)",
        tags: ["DNS", "Freelance"],
      },
      placeholderTitle: "Projet à venir",
      placeholderBody: "Cette carte sera remplacée par un projet réel.",
    },
    parcours: {
      heading: "Parcours",
      freelance: {
        period: "2026 – aujourd'hui",
        title: "Freelance · micro-entreprise",
        description: "Création de sites, dépannage, hébergement et automatisations pour des clients en France et en Europe.",
      },
      bts: {
        title: "Formation BTS CIEL",
        description: "Formation suivie en cybersécurité, informatique, réseaux et électronique.",
        periodPending: "Dates à compléter",
      },
      placeholderBody: "Étape du parcours à ajouter.",
    },
    skills: {
      heading: "Compétences",
      intro: "Les outils que j'utilise au quotidien.",
    },
    contact: {
      heading: "Parlons de",
      headingAccent: "votre projet.",
      body: "Décrivez votre besoin en quelques lignes. Je vous réponds avec des questions ou directement un devis à prix fixe.",
      emailLabel: "Email",
      copy: "Copier",
      copied: "Copié !",
      copyFailed: "Copie impossible, sélectionnez l'adresse",
      emailPending: "Adresse provisoire — à compléter",
      elsewhere: "Ailleurs",
    },
    footer: {
      rights: "Tous droits réservés.",
      footerNav: "Navigation du pied de page",
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
    placeholder: "To be completed",
    hero: {
      eyebrow: "Freelance · Mirepoix, Ariège (France)",
      headline: "I build, fix and host your IT tools.",
      sub: "Websites, servers, automations — for small businesses, associations and independents, in Ariège and remotely across Europe. Built with modern AI coding tools, understood and maintained by a human.",
      secondaryCta: "See services",
      scroll: "Scroll",
    },
    cta: "Get a quote",
    about: {
      heading: "About me",
      paragraphs: [
        "I'm Kamal Kaced, a freelance IT service provider (French micro-entreprise) based in Mirepoix, Ariège. I work on site around my area and remotely for clients in France and across Europe, in French or English.",
        "I work with AI coding assistants: I drive them, I review and understand the code they produce, and I'm the one who maintains it. You get a single point of contact who knows what runs on your systems.",
      ],
    },
    services: {
      heading: "Services",
      intro: "Four areas, one point of contact. Every job comes with a fixed-price quote.",
      deliverablesLabel: "Examples",
      pricePending: "Pricing coming soon",
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
      sapNote: "On-site IT help around Mirepoix: private individuals in France can get a 50% tax credit under the \"services à la personne\" scheme.",
    },
    process: {
      heading: "How it works",
      steps: [
        {
          title: "You describe the need",
          description: "A short call or message, free and with no commitment.",
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
        { title: "Fixed prices", description: "The quoted price is the price you pay." },
        { title: "You stay the owner", description: "Code, accounts and access are in your name." },
        { title: "Confidentiality", description: "NDA available on request." },
        { title: "French & English", description: "Communication and deliverables in both languages." },
        { title: "European hosting", description: "Your data stays in Europe." },
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
        title: "DNS fix for a web agency's client site",
        period: "2026",
        description: "Freelance mission: diagnosed and fixed the DNS configuration of a client's website, subcontracted by a web agency.",
        reference: "Reference: Julius (web agency)",
        tags: ["DNS", "Freelance"],
      },
      placeholderTitle: "Upcoming project",
      placeholderBody: "This card will be replaced by a real project.",
    },
    parcours: {
      heading: "Background",
      freelance: {
        period: "2026 – today",
        title: "Freelance · micro-entreprise",
        description: "Websites, troubleshooting, hosting and automations for clients in France and Europe.",
      },
      bts: {
        title: "BTS CIEL training",
        description: "Training followed in cybersecurity, IT, networking and electronics (French 2-year IT program).",
        periodPending: "Dates to be completed",
      },
      placeholderBody: "Background item to be added.",
    },
    skills: {
      heading: "Skills",
      intro: "The tools I use day to day.",
    },
    contact: {
      heading: "Let's talk about",
      headingAccent: "your project.",
      body: "Describe what you need in a few lines. I'll reply with questions or straight away with a fixed-price quote.",
      emailLabel: "Email",
      copy: "Copy",
      copied: "Copied!",
      copyFailed: "Couldn't copy, please select the address",
      emailPending: "Temporary address — to be completed",
      elsewhere: "Elsewhere",
    },
    footer: {
      rights: "All rights reserved.",
      footerNav: "Footer navigation",
    },
  },
};
