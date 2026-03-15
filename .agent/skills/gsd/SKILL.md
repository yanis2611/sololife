---
name: gsd
description: >
  Get Shit Done — Système de développement spec-driven. Méthodologie complète pour planifier,
  structurer et builder des projets entiers avec context engineering, orchestration multi-agents,
  plans XML atomiques et commits par tâche. Basé sur le framework GSD par TÂCHES.
  Utiliser quand l'utilisateur demande de planifier un projet, structurer un développement,
  builder une application complète, créer un roadmap, ou organiser un workflow de dev complexe.
  Ne pas utiliser pour des tâches simples de code, du debugging ponctuel, ou des questions rapides.
---

# Get Shit Done — Spec-Driven Development

Système de développement léger et puissant qui résout le **context rot** — la dégradation de qualité
quand l'IA remplit sa fenêtre de contexte. Chaque étape utilise un contexte frais et dédié.

> **Source** : [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done)
> **Référence locale** : `antigravity-skills/gsd/`

---

## Quand utiliser

Ce skill s'active **automatiquement** quand l'utilisateur demande :

- **Planifier un projet** complet (nouveau ou existant)
- **Structurer un développement** en phases et milestones
- **Builder une application** de bout en bout
- **Créer un roadmap** ou un plan d'exécution
- **Organiser un workflow** de développement complexe
- **Exécuter un plan** phase par phase avec vérification

**Ne PAS utiliser pour :**
- Des tâches simples de code (utiliser le mode normal)
- Du debugging ponctuel (sauf si complexe → `/gsd:debug`)
- Des questions rapides ou du brainstorming

---

## Workflow principal — 5 phases

### Phase 1 : Initialisation du projet

Créer les fichiers de contexte suivants dans `.planning/` :

| Fichier | Contenu |
|---|---|
| `PROJECT.md` | Vision du projet, contraintes, stack technique |
| `REQUIREMENTS.md` | Requirements v1, v2, et hors scope |
| `ROADMAP.md` | Phases mappées aux requirements |
| `STATE.md` | État courant du projet (phase active, progression) |

**Workflow :**
1. **Questions** — Poser des questions jusqu'à comprendre complètement l'idée (objectifs, contraintes, préférences tech, edge cases)
2. **Recherche** — Investiguer le domaine si nécessaire
3. **Requirements** — Extraire ce qui est v1, v2, hors scope
4. **Roadmap** — Créer des phases mappées aux requirements
5. **Approbation** — L'utilisateur approuve le roadmap avant de continuer

### Phase 2 : Discussion de phase

Avant de planifier, **capturer les préférences** de l'utilisateur :

- Features visuelles → Layout, densité, interactions, empty states
- APIs/CLIs → Format de réponse, flags, error handling
- Contenu → Structure, ton, profondeur, flow
- Organisation → Critères de groupement, naming, exceptions

**Créer** : `{phase_num}-CONTEXT.md` dans `.planning/`

### Phase 3 : Planification de phase

Le système :
1. **Recherche** — Investigue comment implémenter, guidé par le CONTEXT.md
2. **Planifie** — Crée 2-3 plans de tâches atomiques en XML
3. **Vérifie** — Vérifie les plans contre les requirements

**Créer** : `{phase_num}-RESEARCH.md`, `{phase_num}-{N}-PLAN.md`

### Phase 4 : Exécution de phase

1. **Plans en waves** — Parallèle quand possible, séquentiel quand dépendant
2. **Contexte frais par plan** — Tokens dédiés purement à l'implémentation
3. **Commit par tâche** — Chaque tâche a son commit atomique
4. **Vérification** — Vérifie que le code correspond aux objectifs de la phase

**Wave execution** :
```
WAVE 1 (parallèle)    WAVE 2 (parallèle)    WAVE 3
┌─────────┐ ┌─────────┐  ┌─────────┐ ┌─────────┐  ┌─────────┐
│ Plan 01 │ │ Plan 02 │→ │ Plan 03 │ │ Plan 04 │→ │ Plan 05 │
└─────────┘ └─────────┘  └─────────┘ └─────────┘  └─────────┘
```

### Phase 5 : Vérification

1. Extraire les **deliverables testables**
2. Guider l'utilisateur un par un : « Est-ce que X fonctionne ? » Oui/non
3. Diagnostiquer les échecs automatiquement
4. Créer des **plans de fix** prêts à ré-exécuter

**Créer** : `{phase_num}-UAT.md`, plans de fix si nécessaire

---

## Format XML des plans

Chaque tâche d'un plan utilise cette structure XML optimisée :

```xml
<task type="auto">
  <name>Nom descriptif de la tâche</name>
  <files>chemin/vers/fichier.ts</files>
  <action>
    Instructions précises d'implémentation.
    Pas de devinettes. Vérification intégrée.
  </action>
  <verify>Commande ou check pour vérifier le résultat</verify>
  <done>Critère de complétion clair</done>
</task>
```

**Règles :**
- Chaque `<task>` est assez petite pour s'exécuter sans dégradation de contexte
- `<verify>` contient une commande exécutable (curl, test, etc.)
- `<done>` définit le critère de succès en une phrase

---

## Orchestration multi-agents

Modèle : **orchestrateur léger** qui spawne des agents spécialisés.

| Agent | Rôle |
|---|---|
| `gsd-project-researcher` | Recherche de domaine pendant l'initialisation |
| `gsd-phase-researcher` | Recherche technique pour chaque phase |
| `gsd-planner` | Création des plans XML atomiques |
| `gsd-plan-checker` | Vérification des plans contre les requirements |
| `gsd-executor` | Exécution d'un plan individuel |
| `gsd-verifier` | Vérification post-exécution |
| `gsd-debugger` | Diagnostic et correction des problèmes |
| `gsd-codebase-mapper` | Cartographie d'un codebase existant |

**L'orchestrateur ne fait JAMAIS le travail lourd.** Il spawne, attend, intègre les résultats.
Résultat : contexte principal à 30-40% même après une phase entière.

---

## Context Engineering

Structure des fichiers de contexte dans `.planning/` :

```
.planning/
├── config.json                    # Configuration GSD
├── PROJECT.md                     # Vision, contraintes, stack
├── REQUIREMENTS.md                # Requirements scoped (v1/v2/out)
├── ROADMAP.md                     # Phases → requirements
├── STATE.md                       # État courant
├── research/                      # Recherche initiale
├── {phase_num}-CONTEXT.md         # Préférences utilisateur
├── {phase_num}-RESEARCH.md        # Recherche technique
├── {phase_num}-{N}-PLAN.md        # Plans XML atomiques
├── {phase_num}-{N}-SUMMARY.md     # Résumé post-exécution
├── {phase_num}-VERIFICATION.md    # Rapport de vérification
├── {phase_num}-UAT.md             # Test d'acceptation
└── quick/                         # Tâches Quick Mode
    └── 001-nom-tâche/
        ├── PLAN.md
        └── SUMMARY.md
```

---

## Atomic Git Commits

Chaque tâche = un commit immédiat :

```
abc123f docs(08-02): complete user registration plan
def456g feat(08-02): add email confirmation flow
hij789k feat(08-02): implement password hashing
lmn012o feat(08-02): create registration endpoint
```

**Format** : `type(phase-plan): description`
**Types** : `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

---

## Quick Mode

Pour les tâches ponctuelles qui ne nécessitent pas de planification complète :

1. Décrire la tâche
2. Le système crée un plan léger et exécute
3. Commit atomique
4. Stocké dans `.planning/quick/`

**Utiliser pour** : bug fixes, petites features, config changes, tâches one-off.

---

## Codebase existant (Brownfield)

Pour travailler sur un projet **existant** :

1. **Cartographier** le codebase — Analyser stack, architecture, conventions
2. **Nouveau milestone** — Même flow que new-project mais pour l'existant
3. Les questions se focalisent sur **ce qu'on ajoute**, pas sur ce qui existe

---

## Commandes disponibles (adaptées en workflows)

### Core Workflow
| Commande | Workflow Antigravity |
|---|---|
| `/gsd:new-project` | `.agent/workflows/gsd-new-project.md` |
| `/gsd:discuss-phase N` | Intégré au workflow de phase |
| `/gsd:plan-phase N` | `.agent/workflows/gsd-plan-phase.md` |
| `/gsd:execute-phase N` | `.agent/workflows/gsd-execute-phase.md` |
| `/gsd:verify-work N` | Intégré au workflow d'exécution |
| `/gsd:quick` | `.agent/workflows/gsd-quick.md` |

### Gestion
| Action | Description |
|---|---|
| Ajouter une phase | Insérer une nouvelle phase dans le roadmap |
| Compléter un milestone | Archiver et taguer la release |
| Nouveau milestone | Démarrer un nouveau cycle |
| Pause/Resume | Sauvegarder/restaurer l'état de session |

---

## Configuration

Stocker dans `.planning/config.json` :

```json
{
  "mode": "interactive",
  "granularity": "standard",
  "workflow": {
    "research": true,
    "plan_check": true,
    "verifier": true,
    "auto_advance": false
  },
  "parallelization": { "enabled": true },
  "git": {
    "branching_strategy": "none",
    "phase_branch_template": "gsd/phase-{phase}-{slug}",
    "milestone_branch_template": "gsd/{milestone}-{slug}"
  }
}
```

---

## Checklist de validation

Avant de livrer une phase :
- [ ] Tous les plans XML exécutés avec succès
- [ ] Un commit atomique par tâche
- [ ] `{phase_num}-VERIFICATION.md` créé
- [ ] Tests d'acceptation passés (UAT)
- [ ] `STATE.md` mis à jour
- [ ] Pas de context rot (contexte frais utilisé pour chaque plan)
