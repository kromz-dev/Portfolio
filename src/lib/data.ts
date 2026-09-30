/* ═══════════════════════════════════════════════════════════════════
 * data.ts — configuration du site, prix, projets, parcours, compétences.
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
  location: "Toulouse & Ariège",
  githubUrl: "https://github.com/kromz-dev",
  email: "kkaced31@gmail.com",
  /** Adresse postale de l'éditeur, affichée dans les mentions légales. */
  address: "Rue Jean François Pujos, 31600 Muret",
  /** TODO: URL LinkedIn. Tant que `null`, LinkedIn n'apparaît pas sur le site. */
  linkedinUrl: "https://www.linkedin.com/in/kamalkaced" as string | null,
} as const;

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
 * Prix affichés sous chaque service.
 */
export const servicePrices: Record<ServiceId, Localized> = {
  web: { fr: "À partir de 590 €", en: "From €590" },
  troubleshooting: {
    fr: "Particuliers : 45 €/h à domicile, déplacement inclus dans 15 km · Pros et à distance : 60 €/h, 1 h minimum",
    en: "Individuals: €45/h on site, travel included within 15 km · Businesses & remote: €60/h, 1 h minimum",
  },
  infra: {
    fr: "350 € l'installation + 49 €/mois de maintenance · serveur refacturé à prix coûtant",
    en: "€350 setup + €49/month maintenance · server billed at cost",
  },
  ai: { fr: "À partir de 490 €", en: "From €490" },
};

/* ─────────────────────────── Réalisations ─────────────────────────── */

/** Détails du home lab affichés dans la section Réalisations. */
export const homeLabDetails: {
  hardware: Localized;
  services: Localized;
} = {
  hardware: { fr: "Dell OptiPlex 3060 sous Proxmox VE 9", en: "Dell OptiPlex 3060 running Proxmox VE 9" },
  services: { fr: "LXC, Docker Compose, n8n, Jellyfin et Tailscale", en: "LXC, Docker Compose, n8n, Jellyfin and Tailscale" },
};

/** Projets affichés après le home lab et la mission DNS. */
export interface ExtraProject {
  title: Localized;
  description: Localized;
  tags: string[];
  url?: string;
}

export const extraProjects: ExtraProject[] = [
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
      fr: "Moteur de veille d'offres d'emploi en local : il interroge 5 sites, repère les doublons, filtre par distance réelle, note les offres et suit les candidatures. Sans IA générative : chaque décision est explicable.",
      en: "Local job-listing monitor: it queries 5 job sites, spots duplicates, filters by real distance, scores listings and tracks applications. No generative AI: every decision is explainable.",
    },
    tags: ["Python", "SQLite", "GitHub Actions", "Automatisation"],
    url: "https://github.com/kromz-dev/jobbot",
  },
];

/* ──────────────────────────── Parcours ──────────────────────────── */

/** Période du BTS CIEL. Ne jamais parler de « diplôme » : seule la 1re année est validée. */
export const btsCielPeriod = "2025 – 2026";

/** Autres étapes du parcours (emplois, stages, formations). */
export interface ParcoursItem {
  period: Localized;
  title: Localized;
  description: Localized;
}

export const extraParcours: ParcoursItem[] = [
  {
    period: { fr: "Juillet 2025", en: "July 2025" },
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
    period: { fr: "Janvier 2024", en: "January 2024" },
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
    period: { fr: "2023 – 2024", en: "2023 – 2024" },
    title: {
      fr: "Aide-soignant faisant fonction et ASH · hôpital et EHPAD",
      en: "Care assistant · hospital and care homes",
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
    skills: ["HTML / CSS", "JavaScript / TypeScript", "React / Next.js", "Git"],
  },
  {
    title: { fr: "Systèmes & serveurs", en: "Systems & servers" },
    skills: ["Linux", "Windows 10/11", "Proxmox", "Docker", "Reverse proxy", "SSH"],
  },
  {
    title: { fr: "Réseau", en: "Networking" },
    skills: ["DNS", "DHCP", "VLAN", { fr: "Emails : SPF / DKIM / DMARC", en: "Email: SPF / DKIM / DMARC" }, "VPN"],
  },
  {
    title: { fr: "IA & automatisation", en: "AI & automation" },
    skills: [{ fr: "Assistants de code IA", en: "AI coding assistants" }, "Python", "Bash"],
  },
];
