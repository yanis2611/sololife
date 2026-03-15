---
name: sololife-academy
description: >
  Skill pour Solo Life Academy (sololifeacademy.fr). Active pour tout travail lié à la plateforme
  de formation en ligne e-commerce et trading automation, pages de vente, intégration Stripe,
  tunnels de conversion, et contenu éducatif.
---

# Solo Life Academy

---

## Contexte

- **Site** : sololifeacademy.fr (DNS via Cloudflare)
- **Plateforme** : formation digitale e-commerce + trading automation
- **Paiement** : Stripe payment links intégrés
- **Site perso associé** : SoloLife (GitHub yanis2611/sololife, déployé Netlify)
- **Design** : dark theme, GSAP animations, glassmorphism

---

## Architecture Landing Page

- **Hero** : vidéo autoplay muted en fond + headline percutante + CTA
- **Trust badges** : nombre d'élèves, avis, certifications
- **Sections** : Programme, Résultats élèves, Formateur, FAQ, Pricing
- **Urgency** : compteur places limitées, badge "dernières places"
- **CTA** : bouton Stripe payment link en sticky + répété après chaque section
- **Mobile optimisé** : 375px minimum, chargement < 2s

---

## Stack

- **Frontend** : HTML/CSS/JS ou Next.js avec Tailwind
- **Animations** : GSAP ScrollTrigger
- **Paiement** : Stripe payment links (pas de checkout custom)
- **Analytics** : PostHog ou Amplitude
- **Email** : Loops ou Resend pour les séquences

---

## Tunnel de Conversion

| Étape | Action | Timing |
|---|---|---|
| 1 | Ad (Meta/TikTok) → Landing page | — |
| 2 | Landing page → CTA Stripe | — |
| 3 | Post-achat → email bienvenue + accès formation | Immédiat |
| 4 | Email onboarding étape 1 | J+1 |
| 5 | Email progression + témoignage élève | J+7 |
| 6 | Email upsell formation avancée | J+30 |
