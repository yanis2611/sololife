---
name: plus2foot-ecommerce
description: >
  OS E-Commerce pour Plus2foot. Active pour tout travail lié au catalogue de crampons de football
  (Nike, Adidas, Puma, New Balance), gestion des commandes, panier, checkout, pricing dynamique,
  gestion des tailles, marges, inventaire multi-canal, et architecture multi-entité internationale
  (Hong Kong, Dubai, UK, France).
---

# OS E-Commerce Plus2foot

Tu es l'architecte principal de l'OS e-commerce Plus2foot.

---

## Contexte Business

- Vente de crampons de football élite (Nike, Adidas, Puma, New Balance)
- Site principal : plus2foot3.fr
- Structure multi-entité : Hong Kong, Dubai, UK, France
- Cible : footballeurs passionnés, segment premium
- Multi-devise : EUR, GBP, AED, HKD
- Équipe : community managers, monteurs vidéo, agents SAV, ambassadeurs UGC
- Communication équipe : Discord avec 7 rôles et 27 canaux
- Forte présence social media : TikTok, Instagram, Snapchat (objectif 200K followers, 3M vues/mois)

---

## Architecture Technique

- Backend : Laravel 11+ avec Inertia.js (stack existant)
- Paiement principal : Stripe Connect (EUR, GBP)
- Paiement secondaire : Tap Payments (AED, région MENA)
- Fallback : Checkout.com si Stripe indisponible
- Recherche : Typesense ou Algolia
- Cache/Stock temps réel : Redis
- Files d'attente : BullMQ ou Laravel Queues
- Automatisation : n8n (self-hosted)
- DNS/SSL : Cloudflare

---

## Modèles de Données Essentiels

### Product
- `nom`, `marque`, `modèle`, `description_fr`, `description_en`
- `images[]`, `vidéos[]`, `catégorie`

### ProductVariant
- `taille` (EU/UK/US), `couleur`, `SKU`
- `prix_achat`, `prix_vente`, `marge`
- `stock`, `poids`

### Order
- `client_id`, `items[]`, `statut`
- `paiement`, `shipping`
- `entité_juridique`, `devise`

### Customer
- `profil`, `historique`
- `segment` (standard/VIP)
- `préférences` (taille, marque)

### Inventory
- `variant_id`, `quantité`, `localisation`
- `seuil_alerte`, `dernière_sync`

---

## Règles Business

- **Stock < 5** : badge "Dernières paires" automatique
- **Stock = 0** : bouton "Prévenir quand dispo" + inscription waitlist
- **Client cumul > 300€** : upgrade VIP automatique (accès anticipé, drops exclusifs)
- **Panier abandonné > 1h** : trigger automation email + SMS + retargeting
- Chaque commande génère un **événement webhook** pour n8n
- **Conversion tailles** automatique EU↔UK↔US selon la marque
- **Calcul marge** automatique par produit et par entité juridique

---

## Contenu IA (Pipeline automatisé)

- **Photos produit** : Nanobanana Pro (matériaux PBR, éclairage studio 3-points)
- **Vidéos** : Kling 3.0 Omni Edit (rotation 360°, slow-motion, 15-30s)
- **Textes** : descriptions FR/EN, méta SEO, légendes social
- **Workflow** : nouveau produit → génération IA → review humain → publication multi-canal

---

## Social Media

| Plateforme | Format | Marchés |
|---|---|---|
| **Instagram** | Feed + Reels + Stories | FR + UK |
| **TikTok** | Vidéos courtes + Lives | Global |
| **Snapchat** | Stories + Spotlight + Ads | FR |

**Ratio contenu** : 40% produit, 30% lifestyle football, 20% UGC ambassadeurs, 10% promo

**Fréquence** : 2 posts/jour Instagram, 3 TikTok/jour, 5 Stories/jour

---

## SAV Automatisé

| Niveau | Responsable | Scope |
|---|---|---|
| **Niveau 1** | IA | FAQ, suivi commande, guide tailles, délais |
| **Niveau 2** | Agent humain | Réclamations, retours, échanges |
| **Niveau 3** | Manager | Litiges, remboursements exceptionnels |

- Escalade auto si client mécontent après 2 échanges IA
- Scripts DM de vente : qualification → recommandation → lien produit → closing

---

## Marketing Automation

| Scénario | Timing | Action |
|---|---|---|
| **Bienvenue** | J+0 à J+14 | 5 emails séquentiels |
| **Abandon panier** | J+1h / J+4h / J+1 | Email → SMS → Retargeting |
| **Post-achat** | J+0 / J+7 / J+14 | Merci → Guide taille → Avis → Cross-sell |
| **Restock** | Immédiat | Alerte waitlist |
| **VIP** | -48h avant drop | Accès anticipé exclusif |
| **Win-back** | J+30 / J+60 / J+90 | Offres croissantes |

---

Quand je travaille sur Plus2foot, utilise **TOUJOURS** ce contexte business. Chaque feature doit s'intégrer dans cet écosystème.
