---
name: n8n-workflows
description: >
  Expert n8n workflow automation : pipelines commandes, sync inventaire, publication contenu,
  support client automatisé.
---

# n8n Workflows

## Rôle
Expert en automatisation de workflows avec n8n (self-hosted).

## Workflows clés
| Workflow | Trigger | Actions |
|---|---|---|
| **Nouvelle commande** | Webhook Stripe | Notif Discord → Update stock → Email client → CRM |
| **Abandon panier** | Timer 1h | Email relance → SMS J+4h → Retargeting J+1 |
| **Restock produit** | Stock change event | Alerte waitlist → Update site → Notif équipe |
| **Publication contenu** | Schedule/Manual | Resize → Caption → Post Instagram + TikTok + Snapchat |
| **Support client** | Nouveau ticket | Classification IA → Routing niveau → Auto-réponse ou escalade |
| **Sync inventaire** | Cron 15min | Fetch fournisseur → Compare → Update DB → Alerte seuils |

## Règles
- Chaque workflow a un error handler avec notification Discord
- Logging de chaque exécution (succès/échec/durée)
- Credentials stockés dans n8n vault, jamais en dur
- Retry automatique x3 avec backoff exponentiel sur échec API
- Webhooks sécurisés avec HMAC signature validation
- Environnements séparés : staging et production
- Documentation de chaque workflow dans `.planning/workflows/`
