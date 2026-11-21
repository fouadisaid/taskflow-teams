# TaskFlow Teams

Kanban d'équipe en React 19 + TypeScript. Projet fil rouge du module React (DITI4, ISI dakar).

## État d'avancement

- **J1 : maquette statique typée**

## Capture d'écran (J1)

![Board TaskFlow Teams](docs/j1-board.png)

- **J2 : board interactif local**

## Captures d'écran (J2)

### Statistiques et formulaire de création

![Statistiques et formulaire](docs/j2-stats-formulaire.png)

Le formulaire est contrôlé et validé (titre de 3 caractères minimum, échéance non passée). Les statistiques sont dérivées de la liste des tâches : aucun état dédié.

### Recherche par titre

![Recherche par titre](docs/j2-recherche.png)

La recherche ignore la casse. La liste filtrée est calculée à chaque affichage ; les statistiques restent globales.

## Installation

```bash
npm install
npm run dev
```

L'application est alors disponible sur http://localhost:5173.

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4.
