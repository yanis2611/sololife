---
description: Initialise un nouveau projet GSD avec context engineering complet
---

# GSD — Nouveau Projet

## 1. Analyse de la demande
Comprendre complètement ce que l'utilisateur veut builder :
- **Objectifs** du projet
- **Contraintes** techniques/business
- **Préférences** de stack/architecture
- **Edge cases** identifiables

Poser des questions jusqu'à avoir une vision claire. Ne pas avancer tant que le scope n'est pas défini.

## 2. Recherche de domaine (optionnel mais recommandé)
Investiguer le domaine si pertinent — bonnes pratiques, patterns existants, librairies recommandées.

## 3. Créer les fichiers de contexte
Créer le dossier `.planning/` avec :

```bash
mkdir -p .planning/research
```

### PROJECT.md
```markdown
# Nom du Projet
## Vision
[Description courte de ce que le projet accomplit]
## Contraintes
[Limites techniques, budget, timeline]
## Stack
[Technologies choisies]
## Architecture
[Décisions d'architecture clés]
```

### REQUIREMENTS.md
```markdown
# Requirements
## V1 — MVP
- [ ] Requirement 1
- [ ] Requirement 2
## V2 — Améliorations
- [ ] Requirement futur 1
## Hors Scope
- Feature explicitement exclue
```

### ROADMAP.md
```markdown
# Roadmap
## Phase 1 — [Nom]
- Requirement 1
- Requirement 2
## Phase 2 — [Nom]
- Requirement 3
```

### STATE.md
```markdown
# État du Projet
**Phase active** : 1
**Progression** : 0%
**Dernier update** : [date]
```

## 4. Approbation
Présenter le roadmap à l'utilisateur et obtenir son approbation avant de continuer.

## 5. Enchaîner
Une fois approuvé, passer au workflow `gsd-plan-phase.md` pour la phase 1.
