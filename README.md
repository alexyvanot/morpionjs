
# Morpion (Tic-Tac-Toe)

Un jeu de morpion classique en JavaScript. Ce jeu permet à deux joueurs de jouer l'un contre l'autre en alternant entre les symboles "X" et "O". Le jeu prend en charge l'affichage de la grille, la vérification des victoires et des égalités, ainsi que le changement de joueur.

## Fonctionnalités

- Affichage de la grille du jeu.
- Vérification des conditions de victoire pour chaque joueur.
- Vérification de l'égalité lorsque la grille est remplie sans gagnant.
- Le jeu bascule entre les joueurs X et O à chaque tour.
- Messages informatifs lorsqu'un joueur gagne ou qu'il y a un match nul.

## Installation

1. Clonez ce repository sur votre machine locale.

```bash
git clone https://github.com/alexyvanot/morpionjs.git
```

2. Installez les dépendances avec npm :

```bash
npm install
```

3. Lancez le jeu avec la commande suivante :

```bash
npm run dev
```

## Usage

Le jeu s'exécute en mode console. Après chaque tour, le jeu affiche la grille mise à jour et vous invite à entrer les coordonnées du mouvement (ligne et colonne) pour le joueur en cours.

Le format de la commande de mouvement est :

```
ligne espace colonne
```

Exemple :

```
1 1
```

## Tests

Des tests sont fournis pour vérifier les fonctionnalités principales du jeu.

Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```

## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez créer une branche, apporter vos modifications et soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
