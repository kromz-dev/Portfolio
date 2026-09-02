import { Mail, type LucideIcon } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
} from "@/components/ui/icons";
import { type ComponentType, type SVGProps } from "react";

/* ─────────────────────────── Site Config ─────────────────────────── */

export const siteConfig = {
  name: "Kram",
  title: "Full-Stack Developer",
  headline: "I craft digital experiences that make a difference.",
  description:
    "Software engineer specializing in building exceptional web applications. I turn complex problems into elegant, performant solutions.",
  location: "France",
  email: "hello@kromz.dev",
  resumeUrl: "/resume.pdf",
} as const;

/* ─────────────────────────── Navigation ──────────────────────────── */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ──────────────────────────── Socials ────────────────────────────── */

type IconComponent =
  | LucideIcon
  | ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export interface Social {
  label: string;
  href: string;
  icon: IconComponent;
}

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/kromz", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kromz",
    icon: LinkedinIcon,
  },
  { label: "Twitter", href: "https://x.com/kromz_dev", icon: TwitterXIcon },
  { label: "Email", href: "mailto:hello@kromz.dev", icon: Mail },
];

/* ──────────────────────────── Skills ─────────────────────────────── */

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building intuitive and responsive interfaces",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "React Native",
    ],
  },
  {
    title: "Backend",
    description: "Scalable APIs and server architectures",
    skills: ["Node.js", "Express", "GraphQL", "REST APIs", "Python", "Go"],
  },
  {
    title: "Database",
    description: "Data modeling and optimization",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure and deployment pipelines",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "GitHub Actions",
      "Terraform",
    ],
  },
];

/* ─────────────────────────── Projects ────────────────────────────── */

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "CloudSync",
    description: "Real-time collaborative workspace platform",
    longDescription:
      "A full-stack collaborative workspace featuring real-time document editing, video conferencing, and project management. Built with WebSockets for instant synchronization across all connected clients.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Redis"],
    githubUrl: "https://github.com/kromz/cloudsync",
    liveUrl: "https://cloudsync.dev",
    featured: true,
  },
  {
    title: "Nexus AI",
    description: "Intelligent automation & analytics dashboard",
    longDescription:
      "An AI-powered analytics platform that provides predictive insights and automated reporting. Features custom ML pipelines and interactive data visualizations.",
    techStack: ["React", "Python", "TensorFlow", "FastAPI", "D3.js"],
    githubUrl: "https://github.com/kromz/nexus-ai",
    liveUrl: "https://nexus-ai.app",
    featured: true,
  },
  {
    title: "PayFlow",
    description: "Modern payment processing API",
    longDescription:
      "A developer-friendly payment processing SDK with support for multiple currencies, subscriptions, and real-time transaction monitoring. Handles millions of transactions monthly.",
    techStack: ["Node.js", "Go", "PostgreSQL", "Stripe", "Docker"],
    githubUrl: "https://github.com/kromz/payflow",
    featured: true,
  },
  {
    title: "PixelForge",
    description: "Browser-based design tool for teams",
    longDescription:
      "A collaborative design application running entirely in the browser. Features real-time cursors, component libraries, and export to multiple formats.",
    techStack: ["React", "Canvas API", "WebRTC", "Supabase", "TailwindCSS"],
    githubUrl: "https://github.com/kromz/pixelforge",
    liveUrl: "https://pixelforge.design",
    featured: false,
  },
  {
    title: "Terravault",
    description: "Decentralized file storage platform",
    longDescription:
      "Secure, encrypted file storage using decentralized infrastructure. End-to-end encryption with zero-knowledge architecture ensures complete data privacy.",
    techStack: ["TypeScript", "IPFS", "Solidity", "React", "Node.js"],
    githubUrl: "https://github.com/kromz/terravault",
    featured: false,
  },
  {
    title: "Catalyst",
    description: "Open-source CI/CD pipeline builder",
    longDescription:
      "Visual pipeline builder for CI/CD workflows. Drag-and-drop interface for creating complex build and deployment pipelines with support for major cloud providers.",
    techStack: ["Next.js", "Go", "Docker", "Kubernetes", "GraphQL"],
    githubUrl: "https://github.com/kromz/catalyst",
    liveUrl: "https://catalyst.build",
    featured: false,
  },
];

/* ────────────────────────── Experience ───────────────────────────── */

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "TechVault",
    role: "Senior Full-Stack Engineer",
    period: "2023 — Present",
    description:
      "Leading the architecture and development of a next-generation SaaS platform serving 500K+ users.",
    highlights: [
      "Redesigned the core API, reducing latency by 60%",
      "Led migration from monolith to microservices architecture",
      "Mentored a team of 5 junior developers",
    ],
  },
  {
    company: "DataPulse",
    role: "Full-Stack Developer",
    period: "2021 — 2023",
    description:
      "Built and maintained data-intensive applications and real-time analytics dashboards.",
    highlights: [
      "Developed a real-time analytics engine processing 1M+ events/day",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
      "Contributed to open-source visualization library",
    ],
  },
  {
    company: "StartUp Studio",
    role: "Frontend Developer",
    period: "2019 — 2021",
    description:
      "Shipped MVPs for multiple startups, from concept to production, across diverse industries.",
    highlights: [
      "Delivered 8 production-ready MVPs in 2 years",
      "Established component library used across all studio projects",
      "Optimized Core Web Vitals achieving 95+ Lighthouse scores",
    ],
  },
];

/* ──────────────────────────── Stats ──────────────────────────────── */

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "5+", label: "Years of experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "500K+", label: "Users impacted" },
  { value: "15+", label: "Open source contributions" },
];
