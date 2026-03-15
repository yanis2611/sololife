---
description: Exécute les plans d'une phase GSD avec commits atomiques et vérification
---

# GSD — Exécuter une Phase

## 1. Charger le contexte
Lire les fichiers suivants :
- `PROJECT.md` — pour le contexte global
- `STATE.md` — pour la phase active
- `{phase_num}-{N}-PLAN.md` — pour les plans à exécuter

## 2. Exécuter les plans par waves

### Wave Execution
```
Pour chaque wave (triée par ordre) :
  Pour chaque plan de la wave (parallèle si possible) :
    1. Lire le PLAN.md
    2. Exécuter chaque <task> dans l'ordre
    3. Pour chaque tâche :
       a. Implémenter selon <action>
       b. Vérifier selon <verify>
       c. Commit atomique : type(phase-plan): description
       d. Confirmer selon <done>
    4. Créer {phase_num}-{N}-SUMMARY.md
```

## 3. Commits atomiques
Chaque tâche complétée = un commit immédiat :

```bash
git add <fichiers modifiés>
git commit -m "feat(01-02): add email confirmation flow"
```

**Convention** : `type(phase-plan): description`
- `feat` — nouvelle fonctionnalité
- `fix` — correction de bug
- `docs` — documentation
- `refactor` — restructuration sans changement fonctionnel
- `test` — ajout/modification de tests
- `chore` — tâches d'infrastructure

## 4. Vérification post-exécution
À la fin de la phase :
1. Extraire les **deliverables testables** du roadmap
2. Guider l'utilisateur à travers les vérifications :
   - « Pouvez-vous vérifier que X fonctionne ? »
   - Oui → suivant
   - Non → diagnostiquer et créer un plan de fix
3. Créer `{phase_num}-VERIFICATION.md`

## 5. Mettre à jour STATE.md
```markdown
**Phase active** : {N+1} (ou milestone complete)
**Progression** : X%
**Dernier update** : [date]
**Phase {N}** : ✅ Complétée
```

## 6. Suite
- Si d'autres phases → retourner à `gsd-plan-phase.md`
- Si toutes les phases complètes → compléter le milestone
- Si des fixes nécessaires → ré-exécuter avec les plans de fix
