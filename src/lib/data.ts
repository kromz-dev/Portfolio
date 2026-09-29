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
    en: "€60/h (businesses, remote) · €45/h on-site for individuals",
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
    title: { fr: "LeadFinder", en: "LeadFinder" },
    description: {
      fr: "Outil en ligne de commande qui collecte des prospects sur des annuaires publics, les valide selon un schéma strict, les déduplique et les synchronise avec une base Notion servant de CRM. Respecte robots.txt et limite le débit.",
      en: "Command-line tool that collects prospects from public directories, validates them against a strict schema, deduplicates them and syncs them to a Notion CRM. robots.txt-compliant and rate-limited.",
    },
    tags: ["Python", "Playwright", "Notion API", "Pydantic"],
    url: "https://github.com/kromz-dev/leadfinder",
  },
];

/* ──────────────────────────── Parcours ──────────────────────────── */

/**
 * TODO: dates de la formation BTS CIEL (ex. "2023 – 2024").
 * `null` => affiche « Dates à compléter ». Ne pas mentionner de diplôme :
 * la formation a été suivie mais pas validée.
 */
export const btsCielPeriod: string | null = "2024 – 2026";

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
  null, // TODO
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
