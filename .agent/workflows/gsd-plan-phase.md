---
description: Planifie une phase GSD avec recherche, plans XML atomiques et vérification
---

# GSD — Planifier une Phase

## 1. Identifier la phase
Lire `ROADMAP.md` pour identifier la phase à planifier. Lire `STATE.md` pour le contexte courant.

## 2. Discussion (optionnel)
Si l'utilisateur veut affiner les choix d'implémentation :
- Identifier les **zones grises** de la phase
- Pour chaque zone : poser des questions ciblées
- Créer `{phase_num}-CONTEXT.md` avec les décisions prises

## 3. Recherche technique
Investiguer comment implémenter la phase :
- Patterns recommandés
- Librairies pertinentes
- Exemples de code similaires

Créer `{phase_num}-RESEARCH.md`.

## 4. Créer les plans XML
Diviser la phase en **2-3 plans atomiques**. Chaque plan contient des tâches XML :

```xml
<plan name="Phase {N} - Plan {M}" wave="1">
  <task type="auto">
    <name>Nom descriptif</name>
    <files>chemin/vers/fichier.ts, autre/fichier.ts</files>
    <action>
      Instructions précises d'implémentation.
      Technologies à utiliser, patterns à suivre.
    </action>
    <verify>commande ou check pour vérifier</verify>
    <done>Critère de complétion clair</done>
  </task>
  <!-- Autres tâches -->
</plan>
```

Sauver dans `{phase_num}-{N}-PLAN.md`.

**Règles :**
- Chaque tâche = assez petit pour un contexte frais
- Grouper en **waves** basées sur les dépendances
- Plans indépendants → même wave → parallèle
- Plans dépendants → wave suivante → séquentiel

## 5. Vérification des plans
Vérifier que chaque plan :
- [ ] Couvre tous les requirements de la phase
- [ ] A des `<verify>` exécutables
- [ ] N'a pas de dépendances circulaires
- [ ] Est assez atomique (pas de plan > 10 tâches)

## 6. Approbation
Présenter les plans à l'utilisateur pour approbation, puis passer à `gsd-execute-phase.md`.
