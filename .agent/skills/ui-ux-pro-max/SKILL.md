---
name: ui-ux-pro-max
description: >
  UI/UX Pro Max — Design Intelligence. Intelligence de design complète pour la création de sites web,
  landing pages, interfaces, composants UI et tout travail de design visuel web de qualité professionnelle.
  Fonctionne comme un directeur artistique senior avec 20 ans d'expérience.
  Utiliser quand l'utilisateur demande de créer, designer, construire, améliorer ou revoir un site web,
  une landing page, une interface, un composant UI ou tout travail de design visuel web.
  Ne pas utiliser pour des tâches purement backend, de la configuration serveur, ou du travail
  sans composante visuelle/UI.
---

# UI/UX Pro Max — Design Intelligence

Intelligence de design complète alimentée par des bases de données consultables de styles UI,
palettes de couleurs, paires typographiques, types de graphiques et directives UX. Ce skill
fonctionne comme un **directeur artistique senior avec 20 ans d'expérience**, garantissant des
résultats de qualité production à chaque projet.

---

## Quand utiliser

Ce skill s'active **automatiquement** dès que l'utilisateur demande :

- La **création d'un site web** (SaaS, e-commerce, portfolio, vitrine, landing page)
- La **conception d'une interface** ou d'un **composant UI**
- L'**amélioration** ou la **refonte** d'un design existant
- Une **revue UI/UX** ou un audit de qualité visuelle
- La création d'un **design system** ou d'une **charte graphique**
- Tout travail impliquant du **design visuel web**

**Ne PAS utiliser pour :**
- Du développement purement backend (API, base de données, serveur)
- De la configuration d'infrastructure (CI/CD, Docker, déploiement)
- Des tâches sans composante visuelle ou d'interface

---

## Prérequis

Vérifier que Python est installé :

```bash
python3 --version || python --version
```

Si Python n'est pas installé :

**macOS :**
```bash
brew install python3
```

**Ubuntu/Debian :**
```bash
sudo apt update && sudo apt install python3
```

**Windows :**
```powershell
winget install Python.Python.3.12
```

---

## Instructions — Workflow obligatoire en 4 étapes

Suivre ces 4 étapes **dans l'ordre** pour chaque projet de design. **Ne JAMAIS écrire de code
avant d'avoir complété les étapes 1 et 2.**

### Étape 1 — Analyse de session

Avant d'écrire la moindre ligne de code, **extraire les informations suivantes** de la demande
de l'utilisateur :

| Information | Exemples |
|---|---|
| **Type de site** | SaaS, e-commerce, portfolio, vitrine, landing page |
| **Industrie / niche** | Santé, fintech, gaming, éducation, beauté, tech |
| **Style visuel souhaité** | Minimal, luxe, brutaliste, glassmorphism, néomorphisme |
| **Public cible** | Professionnels B2B, jeunes consommateurs, développeurs |
| **Stack technique** | HTML/CSS pur, React, Next.js, Vue, Svelte |

Si des informations sont manquantes, **poser des questions ciblées** avant de continuer.

**Commande de recherche** pour analyser les besoins :

```bash
python3 scripts/search.py "<type_produit> <industrie> <mots_clés>" --design-system -p "<Nom du Projet>"
```

### Étape 2 — Génération du Design System (OBLIGATOIRE)

**Toujours générer un design system complet** avant de produire le moindre code.
Utiliser la commande `--design-system` pour obtenir des recommandations complètes :

```bash
python3 scripts/search.py "<type_produit> <industrie> <mots_clés>" --design-system -p "<Nom du Projet>"
```

Le design system doit contenir **tous** les éléments suivants :

#### Palette de couleurs
| Rôle | Description |
|---|---|
| **Primary** | Couleur principale de la marque (code hex exact) |
| **Secondary** | Couleur secondaire complémentaire |
| **Accent** | Couleur d'accentuation pour les CTA et éléments interactifs |
| **Neutral** | Gamme de gris pour le texte et les arrière-plans |
| **Success** | Couleur de succès/validation (vert) |
| **Warning** | Couleur d'avertissement (jaune/orange) |
| **Error** | Couleur d'erreur (rouge) |

#### Paire typographique
- **Headings** : Police + poids + import Google Fonts
- **Body** : Police + poids + import Google Fonts
- Vérifier la compatibilité des personnalités (heading/body)

#### Système d'espacement
- Basé sur une unité de **4px ou 8px**
- Définir les valeurs : `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

#### Border-radius par composant
- Boutons, cartes, inputs, modales, badges, avatars

#### Ombres (3 niveaux)
| Niveau | Utilisation |
|---|---|
| **Subtle** | Cartes au repos, séparations légères |
| **Medium** | Cartes en hover, dropdowns |
| **Elevated** | Modales, popovers, éléments flottants |

#### Variables CSS custom properties

```css
:root {
  /* Colors */
  --color-primary: #XXXXXX;
  --color-secondary: #XXXXXX;
  --color-accent: #XXXXXX;
  /* ... toutes les couleurs */

  /* Typography */
  --font-heading: 'XXX', sans-serif;
  --font-body: 'XXX', sans-serif;

  /* Spacing */
  --space-xs: Xpx;
  --space-sm: Xpx;
  --space-md: Xpx;
  --space-lg: Xpx;
  --space-xl: Xpx;

  /* Border radius */
  --radius-sm: Xpx;
  --radius-md: Xpx;
  --radius-lg: Xpx;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: ...;
  --shadow-medium: ...;
  --shadow-elevated: ...;
}
```

#### Persistance du design system

Pour sauvegarder le design system (pattern Master + Overrides) :

```bash
python3 scripts/search.py "<query>" --design-system --persist -p "<Nom du Projet>"
```

Pour une page spécifique (override) :

```bash
python3 scripts/search.py "<query>" --design-system --persist -p "<Nom du Projet>" --page "dashboard"
```

### Étape 3 — Architecture de layout

Définir la **hiérarchie visuelle** de chaque section :

| Section | Éléments à définir |
|---|---|
| **Hero** | Hauteur viewport, composition, placement du CTA |
| **Sections de contenu** | Grid vs Flex, ratios de colonnes |
| **Social proof** | Témoignages, logos clients, statistiques |
| **Pricing** (si applicable) | Grille tarifaire, mise en avant du plan recommandé |
| **Footer** | Navigation, liens légaux, CTA secondaire |

**Chaque section doit avoir un objectif de conversion clair.**

Utiliser les recherches complémentaires pour affiner :

```bash
# Structure de landing page
python3 scripts/search.py "hero social-proof pricing" --domain landing

# Directives UX
python3 scripts/search.py "animation accessibility" --domain ux

# Typographie alternative
python3 scripts/search.py "elegant luxury serif" --domain typography
```

### Étape 4 — Production de code

Le code produit doit respecter les exigences suivantes :

#### HTML5 sémantique
- Utiliser `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
- Un seul `<h1>` par page avec hiérarchie de titres correcte
- Attributs `alt` sur toutes les images
- Labels sur tous les inputs de formulaire

#### CSS organisé avec custom properties
- Variables CSS définies dans `:root` (design system de l'étape 2)
- Classes utilitaires réutilisables
- Pas de styles inline

#### Design responsive mobile-first
Breakpoints obligatoires :

| Breakpoint | Cible |
|---|---|
| `375px` | Mobile (base) |
| `768px` | Tablette |
| `1024px` | Desktop |
| `1280px` | Grand écran |

#### Code production-ready
- Pas de placeholders ni de TODOs
- Performance optimisée (images WebP, lazy loading)
- Accessibilité WCAG 2.1 AA minimum
- `prefers-reduced-motion` respecté

Obtenir les directives spécifiques au stack :

```bash
python3 scripts/search.py "<mots_clés>" --stack html-tailwind
```

Stacks disponibles : `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`, `astro`, `nuxtjs`, `nuxt-ui`

---

## Référence de recherche

### Domaines disponibles

| Domaine | Utilisation | Mots-clés exemples |
|---|---|---|
| `product` | Recommandations par type de produit | SaaS, e-commerce, portfolio, healthcare |
| `style` | Styles UI, couleurs, effets | glassmorphism, minimalism, dark mode |
| `typography` | Paires de polices, Google Fonts | elegant, playful, professional |
| `color` | Palettes par type de produit | saas, ecommerce, beauty, fintech |
| `landing` | Structure de page, stratégies CTA | hero, testimonial, pricing |
| `chart` | Types de graphiques, librairies | trend, comparison, timeline, funnel |
| `ux` | Bonnes pratiques, anti-patterns | animation, accessibility, z-index |
| `react` | Performance React/Next.js | waterfall, bundle, suspense, memo |
| `web` | Directives interface web | aria, focus, keyboard, semantic |
| `prompt` | Prompts AI, mots-clés CSS | (nom du style) |

### Stacks disponibles

| Stack | Focus |
|---|---|
| `html-tailwind` | Tailwind utilities, responsive, a11y (DÉFAUT) |
| `react` | State, hooks, performance, patterns |
| `nextjs` | SSR, routing, images, API routes |
| `vue` | Composition API, Pinia, Vue Router |
| `svelte` | Runes, stores, SvelteKit |
| `swiftui` | Views, State, Navigation, Animation |
| `react-native` | Components, Navigation, Lists |
| `flutter` | Widgets, State, Layout, Theming |
| `shadcn` | shadcn/ui components, theming, forms |
| `jetpack-compose` | Composables, Modifiers, State Hoisting |

---

## Règles communes pour un UI professionnel

### Icônes et éléments visuels

| Règle | ✅ Faire | ❌ Ne pas faire |
|---|---|---|
| **Pas d'icônes emoji** | Utiliser des SVG (Heroicons, Lucide) | Utiliser des emojis comme icônes UI |
| **Hover stables** | Transitions couleur/opacité au hover | Transforms scale qui décalent le layout |
| **Logos corrects** | SVG officiels depuis Simple Icons | Deviner les chemins de logos |
| **Taille icônes cohérente** | viewBox fixe (24x24) | Mélanger des tailles différentes |

### Interaction et curseur

| Règle | ✅ Faire | ❌ Ne pas faire |
|---|---|---|
| **Cursor pointer** | `cursor-pointer` sur tout élément cliquable | Curseur par défaut sur éléments interactifs |
| **Feedback hover** | Retour visuel clair (couleur, ombre) | Aucun indicateur d'interactivité |
| **Transitions fluides** | `transition: 200ms` | Changements instantanés ou trop lents (>500ms) |

### Contraste light/dark mode

| Règle | ✅ Faire | ❌ Ne pas faire |
|---|---|---|
| **Cartes glass light** | `bg-white/80` ou opacité supérieure | `bg-white/10` (trop transparent) |
| **Contraste texte light** | `#0F172A` pour le texte | `#94A3B8` pour le corps de texte |
| **Texte atténué light** | `#475569` minimum | gray-400 ou plus clair |
| **Visibilité bordures** | `border-gray-200` en light mode | `border-white/10` (invisible) |

### Layout et espacement

| Règle | ✅ Faire | ❌ Ne pas faire |
|---|---|---|
| **Navbar flottante** | `top: 1rem; left: 1rem; right: 1rem` | Coller la navbar à `top: 0` |
| **Padding contenu** | Compenser la hauteur de la navbar fixe | Laisser le contenu sous la navbar |
| **Max-width cohérent** | Même largeur max sur toutes les sections | Mélanger différentes largeurs |

---

## Format de sortie attendu

Chaque projet doit produire au minimum :

1. **Design System** complet (palette, typo, espacement, ombres, radius)
2. **HTML sémantique** structuré avec les balises appropriées
3. **CSS organisé** utilisant les custom properties du design system
4. **Design responsive** mobile-first avec les 4 breakpoints obligatoires
5. **Code production-ready** sans placeholders

---

## Checklist de validation pré-livraison

### Qualité visuelle
- [ ] Aucun emoji utilisé comme icône (SVG à la place)
- [ ] Toutes les icônes d'un set cohérent (Heroicons/Lucide)
- [ ] Logos de marques corrects (vérifiés via Simple Icons)
- [ ] Hover states ne causent pas de décalage de layout
- [ ] Couleurs du thème utilisées directement (pas de valeurs hard-codées)

### Interaction
- [ ] Tous les éléments cliquables ont `cursor: pointer`
- [ ] Hover states fournissent un retour visuel clair
- [ ] Transitions fluides (150-300ms)
- [ ] Focus states visibles pour la navigation clavier

### Light/Dark Mode
- [ ] Contraste texte suffisant en light mode (4.5:1 minimum)
- [ ] Éléments glass/transparents visibles en light mode
- [ ] Bordures visibles dans les deux modes
- [ ] Tester les deux modes avant livraison

### Layout
- [ ] Éléments flottants avec espacement correct des bords
- [ ] Aucun contenu caché derrière la navbar fixe
- [ ] Responsive à 375px, 768px, 1024px, 1280px
- [ ] Pas de scroll horizontal sur mobile

### Accessibilité
- [ ] Toutes les images ont un attribut `alt`
- [ ] Inputs de formulaire ont des labels
- [ ] La couleur n'est pas le seul indicateur
- [ ] `prefers-reduced-motion` respecté

---

## Gestion des erreurs

### Instructions vagues

> Exemple : « Crée-moi un beau site web. »

**Action** : Poser des questions ciblées sur les 5 critères de l'étape 1 :
1. Quel type de site ? (SaaS, e-commerce, portfolio, landing page…)
2. Quelle industrie ou niche ?
3. Quel style visuel souhaitez-vous ?
4. Qui est votre public cible ?
5. Quel stack technique préférez-vous ?

### Instructions contradictoires

> Exemple : « Je veux un design minimaliste avec beaucoup d'animations et d'effets. »

**Action** :
1. Identifier la contradiction (minimalisme ≠ effets abondants).
2. Proposer un compromis : « Un design minimaliste avec des micro-animations subtiles sur les interactions clés. »
3. Demander validation avant de procéder.

### Instructions incomplètes

> Exemple : « Crée une landing page pour mon SaaS. » (sans cible, style, ni contenu)

**Action** :
1. Procéder avec les informations disponibles (type = SaaS landing page).
2. Utiliser `--design-system` pour générer des recommandations intelligentes.
3. Signaler les hypothèses faites.
4. Demander validation du design system avant de coder.

### Stack non précisé

**Action** : Utiliser `html-tailwind` comme stack par défaut. Si le projet existant utilise un autre framework, s'adapter automatiquement.

---

## Exemple de workflow complet

**Demande utilisateur :** « Créer une landing page pour un service de spa et bien-être haut de gamme. »

### Étape 1 : Analyser les besoins
- Type de produit : Service beauté/spa
- Style : Élégant, professionnel, doux
- Industrie : Beauté/Bien-être
- Stack : html-tailwind (défaut)

### Étape 2 : Générer le design system (OBLIGATOIRE)
```bash
python3 scripts/search.py "beauty spa wellness service elegant" --design-system -p "Serenity Spa"
```

### Étape 3 : Recherches complémentaires
```bash
# Directives UX pour animations et accessibilité
python3 scripts/search.py "animation accessibility" --domain ux

# Options typographiques alternatives
python3 scripts/search.py "elegant luxury serif" --domain typography
```

### Étape 4 : Directives du stack
```bash
python3 scripts/search.py "layout responsive form" --stack html-tailwind
```

**Puis :** Synthétiser le design system + les recherches détaillées et implémenter le design.

---

## Référence rapide des priorités

| Priorité | Catégorie | Impact | Domaine |
|---|---|---|---|
| 1 | Accessibilité | CRITIQUE | `ux` |
| 2 | Touch & Interaction | CRITIQUE | `ux` |
| 3 | Performance | ÉLEVÉ | `ux` |
| 4 | Layout & Responsive | ÉLEVÉ | `ux` |
| 5 | Typographie & Couleur | MOYEN | `typography`, `color` |
| 6 | Animation | MOYEN | `ux` |
| 7 | Sélection de style | MOYEN | `style`, `product` |
| 8 | Graphiques & Données | BAS | `chart` |
