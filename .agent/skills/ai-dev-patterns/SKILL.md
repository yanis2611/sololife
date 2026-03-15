---
name: ai-dev-patterns
description: >
  Patterns avancés de développement IA extraits d'Awesome Claude Code. Compilation des
  meilleurs patterns d'orchestration multi-agents, context engineering, hooks, slash commands,
  et workflows de développement. Référence pratique pour optimiser les workflows de dev IA.
  Utiliser quand l'utilisateur travaille sur des workflows de développement IA, cherche des
  patterns d'orchestration, veut optimiser ses processus de dev, ou demande des bonnes pratiques
  pour le développement assisté par IA.
  Ne pas utiliser pour des tâches de code standard, du design UI/UX, ou de la planification de projet.
---

# AI Dev Patterns — Intelligence de Développement IA

Compilation des patterns les plus puissants extraits de l'écosystème de développement IA.
Chaque pattern est une approche éprouvée pour maximiser la productivité avec les agents IA.

> **Source** : [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
> **Référence locale** : `antigravity-skills/awesome-cc/`

---

## Quand utiliser

Ce skill s'active **automatiquement** quand l'utilisateur :

- Travaille sur des **workflows de développement IA**
- Cherche des **patterns d'orchestration** multi-agents
- Veut **optimiser ses processus** de développement
- Demande des **bonnes pratiques** pour le dev assisté par IA
- Configure des **hooks**, **commands**, ou **automation**
- Explore des **techniques avancées** de context engineering

**Ne PAS utiliser pour :**
- Des tâches de code standard (pas besoin de pattern spécifique)
- Du design UI/UX (utiliser `ui-ux-pro-max`)
- De la planification de projet complète (utiliser `gsd`)

---

## 1. Patterns d'Orchestration Multi-Agents

### Claude Squad — Gestion multi-instances
**Concept** : App terminal qui gère plusieurs instances d'agents IA dans des workspaces séparés.
**Usage** : Travailler sur plusieurs tâches simultanément.
**Repo** : [smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)

### Claude Swarm — Sessions interconnectées
**Concept** : Lancer une session connectée à un essaim d'agents spécialisés.
**Usage** : Projets complexes nécessitant plusieurs expertises en parallèle.
**Repo** : [parruda/claude-swarm](https://github.com/parruda/claude-swarm)

### Auto-Claude — Framework autonome
**Concept** : Framework multi-agents couvrant le SDLC complet (plan, build, validate).
**Usage** : Automatisation end-to-end du développement.
**Repo** : [AndyMik90/Auto-Claude](https://github.com/AndyMik90/Auto-Claude)

### TSK — Sandbox Docker par agent
**Concept** : CLI Rust qui délègue les tâches à des agents dans des containers Docker isolés.
**Usage** : Exécution parallèle avec isolation totale, retourne des branches git.
**Repo** : [dtormoen/tsk](https://github.com/dtormoen/tsk)

### Pattern Commun : Orchestrateur Léger
```
┌─────────────────────────────────┐
│     ORCHESTRATEUR (léger)       │
│   - Ne fait PAS le travail     │
│   - Spawne des sous-agents     │
│   - Collecte les résultats     │
│   - Route vers l'étape suivante│
└──────────┬──────────────────────┘
           │
    ┌──────┼──────┐
    ▼      ▼      ▼
 Agent1  Agent2  Agent3
 (spéc.) (spéc.) (spéc.)
```

---

## 2. Patterns de Context Engineering

### Context Engineering Kit
**Concept** : Collection de techniques avancées avec empreinte token minimale.
**Focus** : Améliorer la qualité des résultats de l'agent.
**Repo** : [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit)

### Everything Claude Code
**Concept** : Ressources couvrant tous les domaines d'ingénierie, avec valeur standalone par ressource.
**Focus** : Patterns exemplaires pour chaque feature d'un agent.
**Repo** : [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)

### Compound Engineering
**Concept** : Transformer les erreurs passées en leçons pour amélioration continue.
**Focus** : Discipline d'apprentissage à partir des échecs.
**Repo** : [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)

### Principes clés du Context Engineering
1. **Taille limitée** — Rester sous les seuils où la qualité se dégrade
2. **Contexte frais** — Nouvelle session = nouveaux tokens = meilleure qualité
3. **Fichiers structurés** — PROJECT.md, STATE.md, etc. pour contexte persistent
4. **Token footprint minimal** — Chaque token de contexte doit apporter de la valeur

---

## 3. Patterns de Hooks

### Dippy — Auto-approve intelligent
**Concept** : Auto-approve les commandes bash sûres via parsing AST, prompt pour les destructives.
**Résout** : La fatigue de permission sans désactiver la sécurité.
**Repo** : [ldayton/Dippy](https://github.com/ldayton/Dippy)

### TDD Guard — Protection TDD
**Concept** : Monitore les opérations fichier en temps réel, bloque les changements violant les principes TDD.
**Résout** : Maintenir la discipline Red-Green-Refactor.
**Repo** : [nizos/tdd-guard](https://github.com/nizos/tdd-guard)

### TypeScript Quality Hooks
**Concept** : Hooks de qualité (compilation TS, ESLint auto-fix, Prettier) avec cache SHA256 pour performances < 5ms.
**Résout** : Qualité de code automatique sans ralentissement.
**Repo** : [bartolli/claude-code-typescript-hooks](https://github.com/bartolli/claude-code-typescript-hooks)

### CC Notify — Notifications desktop
**Concept** : Notifications desktop quand l'agent a besoin d'input ou a terminé.
**Résout** : Pouvoir s'éloigner de l'écran pendant l'exécution.
**Repo** : [dazuiba/CCNotify](https://github.com/dazuiba/CCNotify)

### Parry — Scanner d'injection
**Concept** : Scanne les inputs/outputs pour détecter injections, secrets, et tentatives d'exfiltration.
**Résout** : Sécurité des interactions agent.
**Repo** : [vaporif/parry](https://github.com/vaporif/parry)

### Pattern Commun : Hook Lifecycle
```
PreTool  → Valider AVANT exécution (Dippy, TDD Guard)
PostTool → Vérifier APRÈS exécution (Quality hooks)
Notify   → Informer l'utilisateur (CC Notify)
Security → Scanner les I/O (Parry)
```

---

## 4. Patterns de Slash Commands

### Version Control & Git
| Pattern | Description |
|---|---|
| `/commit` | Commit conventionnel avec emojis et message descriptif |
| `/create-pr` | Workflow complet : branche → commit → format → PR |
| `/fix-issue` | Analyse issue GitHub → implémente fix → tests → commit |
| `/fix-pr` | Récupère commentaires PR non résolus → fixe → re-commit |

### Code Analysis & Testing
| Pattern | Description |
|---|---|
| `/tdd` | Développement TDD : Red-Green-Refactor avec git workflow |
| `/check` | Analyses qualité + sécurité + style + rapport détaillé |
| `/optimize` | Identifie bottlenecks → propose optimisations concrètes |
| `/debug` | Diagnostic structuré avec reproduction et fix |

### Project Management
| Pattern | Description |
|---|---|
| `/create-plan` | PRD complet (specs, requirements, features) |
| `/todo` | Gestion de todo-list avec priorités et dates |
| `/do-issue` | Implémente issue GitHub avec points de review |

---

## 5. Workflows de Développement

### RIPER — Phases séparées
**Phases** : Research → Innovate → Plan → Execute → Review
**Force** : Séparation stricte entre phases. Branch-aware memory bank.
**Usage** : Développement structuré où chaque phase a un objectif clair.
**Repo** : [tony/claude-code-riper-5](https://github.com/tony/claude-code-riper-5)

### AB Method — Missions incrémentales
**Concept** : Transformer les gros problèmes en missions focalisées et incrémentales.
**Force** : Spec-driven avec sous-agents spécialisés par partie du SDLC.
**Usage** : Projets larges qu'on décompose en mini-missions.
**Repo** : [ayoubben18/ab-method](https://github.com/ayoubben18/ab-method)

### Ralph Loop — Boucle autonome
**Concept** : Agent qui tourne en boucle autonome jusqu'à ce que les specs soient remplies.
**Force** : Autonomie complète avec guardrails de sécurité.
**Composants** :
- Exit detection intelligent
- Rate limiting + circuit breaker
- Monitoring via tmux
**Usage** : Tâches bien définies qu'on veut automatiser complètement.
**Repo** : [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code)

### Simone — Context Engineering
**Concept** : Framework de gestion de contexte avec progression par étapes.
**Force** : Évite le context rot par design.
**Usage** : Projets longs nécessitant une continuité de contexte.

### Comparaison des workflows
| Workflow | Autonomie | Structure | Complexité | Cas d'usage |
|---|---|---|---|---|
| **RIPER** | Guidée | 5 phases | Moyenne | Dev structuré |
| **AB Method** | Semi-auto | Missions | Faible | Décomposition |
| **Ralph Loop** | Full auto | Boucle | Élevée | Automatisation |
| **GSD** | Guidée | Phases+Plans | Élevée | Projets complets |

---

## 6. Patterns de Session Continuity

### Pause/Resume
**Pattern** : Sérialiser l'état complet de la session dans un fichier.
```
STATE.md → Phase active, progression, dernières actions
CONTEXT.md → Décisions prises, préférences capturées
```

### Memory Bank
**Pattern** : Fichiers de mémoire branch-aware qui persistent entre sessions.
```
.memory/
├── decisions.md      # Décisions d'architecture
├── patterns.md       # Patterns découverts
├── issues.md         # Problèmes connus
└── context.md        # Contexte courant
```

### Continue-Here
**Pattern** : Fichier unique qui résume exactement où reprendre.
```markdown
# Continue Here
## Dernière action
[Ce qui vient d'être fait]
## Prochaine étape
[Ce qu'il reste à faire]
## Contexte nécessaire
[Fichiers à relire]
```

---

## 7. Patterns Avancés

### Infrastructure Showcase — Skill Selection par Hooks
**Concept** : Hooks qui détectent le contexte et activent automatiquement le skill approprié.
**Force** : Activation intelligente sans intervention manuelle.

### Compound Engineering — Apprentissage continu
**Concept** : Chaque erreur/échec/fix est documenté et enrichit les futures sessions.
**Force** : L'agent s'améliore avec le temps.

### Agentic Workflow Patterns
**Catalogue** :
- **Subagent Orchestration** — Orchestrateur + agents spécialisés
- **Progressive Skills** — Skills chargés dynamiquement selon le besoin
- **Parallel Tool Calling** — Outils indépendants en parallèle
- **Master-Clone Architecture** — Agent principal + clones pour sous-tâches
- **Wizard Workflows** — Étapes guidées avec validation à chaque step

---

## Référence rapide

### Quand utiliser quel outil
| Besoin | Pattern recommandé |
|---|---|
| Multi-tâches parallèles | Claude Squad |
| Automatisation full | Ralph Loop |
| Qualité de code | TDD Guard + Quality Hooks |
| Sécurité des permissions | Dippy |
| Développement structuré | RIPER ou GSD |
| Décomposition de problème | AB Method |
| Persistance de contexte | Memory Bank + Continue-Here |
| Orchestration complexe | Claude Swarm |
