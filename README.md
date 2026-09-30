# Portfolio — Kamal Kaced

Site vitrine de Kamal Kaced, prestataire informatique indépendant à Toulouse et en Ariège : sites web, dépannage, infrastructure et automatisations.

**En ligne :** https://kromz-dev.github.io/Portfolio/

## Stack

- [Next.js](https://nextjs.org) (App Router) en export statique, React 19, TypeScript
- Tailwind CSS 4, Framer Motion, Lucide
- Site bilingue FR / EN (français par défaut), sans cookie ni traceur

## Lancer en local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000/Portfolio (le `basePath` est celui de GitHub Pages).

```bash
npm run lint    # ESLint
npm run build   # export statique dans out/
```

## Où modifier le contenu

| Quoi | Fichier |
| --- | --- |
| Textes fixes FR / EN | `src/lib/content.ts` |
| Prix, projets, parcours, compétences, coordonnées | `src/lib/data.ts` |
| Mentions légales | `src/lib/content.ts` (clé `legal`), page `src/app/mentions-legales` |

## Déploiement

Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages. Le réglage à faire une seule fois : *Settings → Pages → Source : GitHub Actions*.

L'URL publique est fournie au build par la variable `NEXT_PUBLIC_SITE_URL` (voir le workflow).
