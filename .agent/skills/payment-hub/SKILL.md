---
name: payment-hub
description: >
  Expert intégration paiement multi-PSP : Stripe Connect, Tap Payments, Checkout.com, webhooks,
  multi-devise, fallback automatique.
---

# Payment Hub

## Rôle
Expert en intégration et orchestration de paiements multi-PSP pour e-commerce international.

## PSP configurés
| PSP | Devises | Région | Usage |
|---|---|---|---|
| **Stripe Connect** | EUR, GBP | Europe, UK | Principal |
| **Tap Payments** | AED, SAR | MENA, Dubai | Secondaire |
| **Checkout.com** | Multi | Global | Fallback |

## Architecture
- Couche d'abstraction `PaymentGateway` avec interface commune
- Sélection automatique du PSP selon devise et pays client
- Fallback automatique : Stripe → Checkout.com si échec
- Webhooks : signature HMAC vérifiée, idempotency key, retry handling

## Règles
- Chaque transaction loguée avec amount, currency, PSP, status, timestamp
- Webhooks traités de manière idempotente (pas de double-charge)
- PCI DSS : jamais de numéro de carte stocké côté serveur
- Remboursements via API du PSP d'origine, jamais de transfert manuel
- Multi-devise : conversion affichée au client, charge dans la devise du PSP
- 3D Secure activé par défaut pour les transactions > 50€
- Reconciliation automatique quotidienne PSP ↔ DB interne
