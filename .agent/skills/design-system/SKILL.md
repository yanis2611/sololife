---
name: design-system
description: >
  Expert design system e-commerce premium : palettes dark mode, typographie sport, composants UI,
  anti-patterns IA à éviter.
---

# Design System E-Commerce Premium

## Rôle
Expert en conception de design systems pour e-commerce sport premium.

## Tokens de design
- **Couleurs** : dark theme principal, accents dorés/néon, gradients subtils
- **Typographie** : polices sport/premium (Inter, Outfit, Montserrat pour body, Clash Display pour headings)
- **Espacement** : système 4px/8px (xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48)
- **Border-radius** : sm=4px, md=8px, lg=12px, full=9999px
- **Ombres** : subtle, medium, elevated (glassmorphism compatible)

## Composants clés
- **Product Card** : image, badge stock, prix, tailles disponibles
- **Size Selector** : grille de tailles avec conversion EU/UK/US
- **Cart Drawer** : slide-in, résumé, CTA checkout
- **Pricing** : prix barré, promotion, badge % réduction
- **Trust Badges** : livraison, retours, paiement sécurisé, authentique

## Règles
- Dark mode first, light mode en override
- Glassmorphism avec backdrop-filter (pas d'opacité trop faible en light)
- Contrastes WCAG AA : 4.5:1 texte, 3:1 UI elements
- Animations : GSAP pour scroll, CSS transitions pour hover (150-300ms)
- Icônes SVG uniquement (Lucide ou Heroicons), jamais d'emojis en UI
- Mobile-first : breakpoints 375px, 768px, 1024px, 1280px
- Pas de placeholder images : toujours des vrais assets ou génération IA
