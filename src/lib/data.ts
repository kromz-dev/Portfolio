/* ═══════════════════════════════════════════════════════════════════
 * data.ts — configuration du site + TOUT ce qui reste à compléter.
 *
 * Kamal : cherche « TODO » dans ce fichier. Chaque valeur `null` est
 * affichée sur le site comme un encart « À compléter / To be completed »
 * (bordure en pointillés). Remplis-la et l'encart disparaît.
 *
 * Tout le texte fixe (FR/EN) est dans src/lib/content.ts.
 * ═══════════════════════════════════════════════════════════════════ */

/** Texte bilingue. */
export interface Localized {
  fr: string;
  en: string;
}

/* ─────────────────────────── Site Config ─────────────────────────── */

export const siteConfig = {
  name: "Kamal Kaced",
  shortName: "Kamal",
  location: "Mirepoix, Ariège",
  githubUrl: "https://github.com/kromz-dev",
  /**
   * TODO: remplacer par la vraie adresse de contact.
   * Tant que la valeur est "contact@exemple.fr", le site affiche une
   * mention « adresse provisoire » à côté.
   */
  email: "kkaced31@gmail.com",
  /** TODO: URL LinkedIn. Tant que `null`, LinkedIn n'apparaît pas sur le site. */
  linkedinUrl: "https://www.linkedin.com/in/kamalkaced" as string | null,
} as const;

export const EMAIL_PLACEHOLDER = "contact@exemple.fr";
export const isEmailPlaceholder =
  (siteConfig.email as string) === EMAIL_PLACEHOLDER;

/* ─────────────────────── Services à la personne ─────────────────────── */

/**
 * TODO (conditionnel) : n'activer qu'une fois la déclaration « services à
 * la personne » (SAP) effectuée. Tant que c'est `false`, la mention du
 * crédit d'impôt de 50 % n'est PAS affichée sous les services.
 */
export const showSapTaxCreditNote = false;

/* ──────────────────────────── Prix ──────────────────────────────── */

export type ServiceId = "web" | "troubleshooting" | "infra" | "ai";

/**
 * TODO: prix par service (ex. { fr: "À partir de 500 €", en: "From €500" }).
 * `null` => affiche « Prix à venir / Pricing coming soon ».
 */
export const servicePrices: Record<ServiceId, Localized | null> = {
  web: { fr: "À partir de 590 €", en: "From €590" },
  troubleshooting: {
    fr: "45 €/h à domicile (particuliers) · 60 €/h HT pour les pros",
    en: "€45/h on-site for individuals · €60/h excl. VAT for businesses",
  },
  infra: { fr: "350 € l'installation + 49 €/mois", en: "€350 setup + €49/month" },
  ai: { fr: "À partir de 490 €", en: "From €490" },
};

/* ─────────────────────────── Réalisations ─────────────────────────── */

/**
 * TODO: détails du home lab. Chaque `null` affiche un encart « À compléter ».
 * Ex. hardware: { fr: "Mini-PC …, NAS …", en: "Mini PC …, NAS …" }
 */
export const homeLabDetails: {
  hardware: Localized | null;
  services: Localized | null;
} = {
  hardware: null, // TODO: matériel
  services: { fr: "Proxmox, Docker, Ollama (modèles IA en local)", en: "Proxmox, Docker, Ollama (local AI models)" },
};

/**
 * TODO: projets supplémentaires. Chaque `null` affiche une carte
 * « À compléter ». Remplace par un objet pour afficher un vrai projet.
 * Ne JAMAIS inventer de client, de chiffre ou de lien.
 */
export interface ExtraProject {
  title: Localized;
  description: Localized;
  tags: string[];
  url?: string;
}

export const extraProjects: (ExtraProject | null)[] = [
  {
    title: {
      fr: "Portail client auto-hébergé",
      en: "Self-hosted client portal",
    },
    description: {
      fr: "Portail client prêt pour la production : React, FastAPI et PostgreSQL orchestrés par Docker Compose, derrière Caddy (HTTPS automatique), avec sauvegardes chiffrées et procédure de restauration.",
      en: "Production-ready client portal: React, FastAPI and PostgreSQL orchestrated with Docker Compose, behind Caddy (automatic HTTPS), with encrypted backups and a restore procedure.",
    },
    tags: ["React", "FastAPI", "PostgreSQL", "Docker Compose", "Caddy"],
    url: "https://github.com/kromz-dev/client-portal-production",
  },
  {
    title: { fr: "JobBot", en: "JobBot" },
    description: {
      fr: "Moteur de recherche d'emploi local pour aides-soignants : il interroge 5 sites, reconnaît les offres en double, écarte celles hors de la zone (distance réelle), repère les postes accessibles sans diplôme, les note et suit les candidatures. Fonctionne en local, sans compte ni IA générative : chaque décision est explicable.",
      en: "Local job search engine for care assistants: it queries 5 job sites, detects duplicate listings, filters out offers outside the area (real distance), spots roles open without a diploma, scores them and tracks applications. Runs locally, with no account and no generative AI: every decision is explainable.",
    },
    tags: ["Python", "SQLite", "GitHub Actions"],
    url: "https://github.com/kromz-dev/jobbot",
  },
];

/* ──────────────────────────── Parcours ──────────────────────────── */

/**
 * TODO: dates de la formation BTS CIEL (ex. "2023 – 2024").
 * `null` => affiche « Dates à compléter ». Ne pas mentionner de diplôme :
 * la formation a été suivie mais pas validée.
 */
export const btsCielPeriod: string | null = "2025 – 2026";

/**
 * TODO: autres étapes du parcours (emplois, stages, certifications…).
 * Chaque `null` affiche un encart « À compléter ».
 */
export interface ParcoursItem {
  period: string;
  title: Localized;
  description: Localized;
}

export const extraParcours: (ParcoursItem | null)[] = [
  {
    period: "Juillet 2025",
    title: {
      fr: "Piscine de l'École 42 · Angoulême",
      en: "École 42 Piscine · Angoulême",
    },
    description: {
      fr: "Immersion intensive en programmation : C, Bash, UNIX et Git.",
      en: "Intensive programming immersion: C, Bash, UNIX and Git.",
    },
  },
  {
    period: "Janvier 2024",
    title: {
      fr: "Apple Foundation Program · Toulouse",
      en: "Apple Foundation Program · Toulouse",
    },
    description: {
      fr: "Initiation au développement iOS avec Swift et SwiftUI.",
      en: "Introduction to iOS development with Swift and SwiftUI.",
    },
  },
  {
    period: "2023 – 2024",
    title: {
      fr: "Aide-soignant · CH de Muret, puis EHPAD de nuit à Frouzins",
      en: "Care assistant · Muret hospital, then night shifts in a care home in Frouzins",
    },
    description: {
      fr: "Sens du service, gestion des urgences et rigueur dans l'application des protocoles : des qualités que j'applique aujourd'hui au dépannage informatique.",
      en: "Customer-service mindset, handling emergencies and rigour in following protocols: qualities I now bring to IT troubleshooting.",
    },
  },
];

/* ──────────────────────────── Compétences ─────────────────────────── */

/**
 * TODO (Kamal) : supprime tout ce que tu ne maîtrises pas réellement.
 * Mieux vaut une liste courte et vraie qu'une liste longue.
 */
export interface SkillCategory {
  title: Localized;
  skills: (string | Localized)[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: { fr: "Web", en: "Web" },
    skills: ["HTML / CSS", "JavaScript / TypeScript", "React / Next.js"],
  },
  {
    title: { fr: "Linux & serveurs", en: "Linux & servers" },
    skills: ["Linux", "Docker", "Reverse proxy", "SSH"],
  },
  {
    title: { fr: "Réseau", en: "Networking" },
    skills: ["DNS", { fr: "Emails : SPF / DKIM / DMARC", en: "Email: SPF / DKIM / DMARC" }, "VPN"],
  },
  {
    title: { fr: "IA & automatisation", en: "AI & automation" },
    skills: [{ fr: "Assistants de code IA", en: "AI coding assistants" }, "Python", "Bash"],
  },
];
