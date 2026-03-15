---
description: Mode rapide GSD pour tâches ponctuelles (bug fix, petite feature, config)
---

# GSD — Quick Mode

Pour les tâches ad-hoc qui ne nécessitent pas le workflow complet de phases.

## 1. Décrire la tâche
Demander à l'utilisateur ce qu'il veut faire :
> « Que voulez-vous accomplir ? »

Exemple : *« Ajouter un toggle dark mode dans les settings »*

## 2. Créer le plan rapide
```bash
mkdir -p .planning/quick/{NNN}-{slug}/
```

Créer un PLAN.md léger avec des tâches XML :

```xml
<plan name="Quick - {description}" wave="1">
  <task type="auto">
    <name>Nom descriptif</name>
    <files>fichier.ts</files>
    <action>Instructions concrètes</action>
    <verify>Commande de vérification</verify>
    <done>Critère de complétion</done>
  </task>
</plan>
```

## 3. Exécuter
- Implémenter chaque tâche
- Commit atomique par tâche
- Pas de recherche formelle, pas de plan checker, pas de verifier

## 4. Résumé
Créer un SUMMARY.md dans le dossier quick avec :
- Ce qui a été fait
- Fichiers modifiés  
- Tests passés

## Quand utiliser Quick vs Full
| Critère | Quick | Full |
|---|---|---|
| Bug fix | ✅ | ❌ |
| Petite feature isolée | ✅ | ❌ |
| Config / env change | ✅ | ❌ |
| Feature multi-fichiers | ❌ | ✅ |
| Nouveau module/service | ❌ | ✅ |
| Refactoring majeur | ❌ | ✅ |
