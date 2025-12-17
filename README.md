# Memory

Bienvenue sur MYMO, un jeu de Mémory classique développé entièrement en HTML5, CSS3 et JavaScript (ES6+) pur. Ce projet met en œuvre la logique d'un jeu de paires, incluant une animation de retournement de cartes en 3D.

## Contexte du Projet

Ce projet a été réalisé dans le cadre de ma formation à l'ENI École Informatique.

L'objectif pédagogique était de valider les compétences acquises sur les technologies fondamentales du web :

Maîtriser la manipulation du DOM (Document Object Model) en JavaScript pour créer un jeu interactif.

Utiliser les animations et transformations CSS3 (notamment transform: rotateY() et backface-visibility) pour créer une interface utilisateur dynamique et réactive.

Implémenter une logique de jeu algorithmique (gestion des tours, comparaison, verrouillage, réinitialisation).

## Fonctionnalités

Plateau de jeu : Un ensemble de cartes prêtes à être retournées.

Animation de "Flip" : Les cartes (rondes, selon la maquette) possèdent une face cachée (blanche) et une face visible (bleu ciel) et s'animent de manière fluide lors du clic.

Logique de jeu :

Le joueur peut retourner deux cartes par tour.

Le jeu verrouille le plateau pendant la comparaison pour éviter les clics supplémentaires.

Si les paires correspondent : Les cartes restent retournées (et les clics sont désactivés pour ces cartes).

Si les paires ne correspondent pas : Les cartes se retournent (face cachée) après un court délai de 1 seconde.

Réinitialisation : Le jeu se prépare pour le tour suivant une fois la comparaison effectuée.

### Technologies Utilisées

HTML5 : Structure sémantique du plateau de jeu.

CSS3 :

Mise en page (Flexbox ou Grid).

Design des cartes (respect de la maquette, border-radius).

Gestion de la perspective 3D (perspective, transform-style).

Animation de retournement (transition, transform: rotateY()).

Visibilité des faces (backface-visibility: hidden).

JavaScript (ES6+) :

Manipulation du DOM (document.querySelectorAll, addEventListener).

Gestion des événements (click).

Logique de jeu (variables d'état premiereCarteRetournee, jeuVerrouille).

Comparaison (element.dataset.paire).

Gestion de l'asynchronisme (setTimeout).

Manipulation des classes CSS (element.classList.toggle, .remove).

#### Comment Lancer le Projet

Ce projet ne nécessite aucune installation ni dépendance.

Clonez ce dépôt sur votre machine locale 

Et voilà, vous pouvez jouer !
