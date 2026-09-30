# Portfolio

Un portfolio moderne, performant et interactif, construit avec **Next.js**, **React**, **Tailwind CSS** et **Framer Motion**. Ce projet met en valeur des compétences en développement et en administration système à travers une interface au design "Liquid Glass" (Glassmorphism) soignée et optimisée.

## Fonctionnalités clés

- **Design "Ethereal Glass"** : Effets de transparence avancés (Glassmorphism), flous d'arrière-plan et bordures subtiles pour un rendu premium.
- **Animations fluides** : Transitions douces et éléments interactifs propulsés par *Framer Motion*.
- **Performances optimales** : Animations d'arrière-plan utilisant `will-change: transform` garantissant 60 FPS constants sans saccades.
- **Support Multilingue** : Système de traduction intégré (Français / Anglais).
- **Projets extensibles** : Cartes de projets cliquables qui se déploient élégamment pour afficher les fonctionnalités détaillées et les liens vers le code source.
- **Icônes dynamiques** : Utilisation de logos officiels automatiques (via *SimpleIcons*) et génériques (*Lucide*) en fonction des stacks techniques.

## Stack Technique

- **Framework** : Next.js 16.3 (Turbopack)
- **Librairie UI** : React 19
- **Style** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React & SimpleIcons
- **Déploiement recommandé** : Vercel

## Démarrage (Local Development)

### 1. Cloner le dépôt

```bash
git clone https://github.com/kromz-dev/Portfolio.git
cd Portfolio
```

### 2. Installer les dépendances

Assurez-vous d'avoir Node.js (v18+ ou v22+) installé.

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Architecture du projet

```
├── src/
│   ├── app/                 # Fichiers de routage Next.js (App Router)
│   │   ├── layout.tsx       # Layout principal de l'application
│   │   ├── page.tsx         # Page d'accueil du portfolio
│   │   └── globals.css      # Styles globaux et variables Tailwind
│   ├── components/          # Composants React
│   │   ├── ui/              # Composants réutilisables (Boutons, Icônes, Orbs, etc.)
│   │   ├── hero.tsx         # Section de présentation
│   │   ├── projects.tsx     # Affichage dynamique des projets
│   │   ├── skills.tsx       # Section de compétences
│   │   └── contact.tsx      # Formulaire et informations de contact
│   └── lib/                 # Données et utilitaires
│       ├── data.ts          # Contenu des projets, de la configuration et des compétences
│       ├── content.ts       # Textes et traductions (FR/EN)
│       └── socials.ts       # Liens vers les réseaux (GitHub, LinkedIn)
```

## CI/CD & Automatisation

Le projet inclut une configuration **GitHub Actions** (`.github/workflows/ci.yml`) garantissant la qualité du code à chaque modification.

À chaque *push* ou *pull request* sur la branche `main`, le pipeline exécute :
1. **Installation** des dépendances
2. **Linting** (ESLint) pour la propreté du code (`npm run lint`)
3. **Type Checking** (TypeScript) pour la sécurité typée (`npx tsc --noEmit`)
4. **Build** pour garantir que le projet compile correctement (`npm run build`)
5. **Audit de sécurité** pour détecter d'éventuelles vulnérabilités npm (`npm audit`)

## Déploiement

Ce projet est optimisé pour un déploiement "Zero-config" sur [Vercel](https://vercel.com). 

1. Poussez votre code sur GitHub.
2. Créez un nouveau projet sur Vercel et importez le dépôt.
3. Vercel détectera automatiquement Next.js et gèrera la compilation.

### Déploiement manuel via Docker (Optionnel)

Si vous souhaitez l'héberger sur votre propre serveur (ex: via Proxmox / Docker) :
Vous pouvez créer un `Dockerfile` basé sur `node:22-alpine` exécutant `npm run build` puis `npm run start`.
