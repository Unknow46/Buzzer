# Note de clarification

Url du projet : https://github.com/Unknow46/Buzzer

## Éléments fournis

Un moteur de jeu visant deux plateformes :

- Version bureau/web destinée à être projetée via un vidéo projecteur et nécessitant une authentification (cf. "avec code"). Sur cette version les fonctionnalités suivantes doivent apparaître :
    - Jouer les questions
    - Indiquer quelle équipe a appuyé le bouton en premier
    - Compter les points des équipes
    - Le meneur choisit quand passer à la question suivante
- Version mobile (Web ?) :
    - Se connecter pour une équipe
    - Appuyer sur le bouton pour signaler que l’on souhaite répondre

## Analyse

L'ensemble de la solution peut être découpé en plusieurs modules :

### 1) Un moteur de jeu.

Fonctionnalités:
- Logique du jeu
- Récupération des questions sur une API
- Synchronisation de l'état du jeu entre plusieurs affichages

Gestion du score :
- Bloquer le buzzer après une réponse négative ( ce débloque si toutes les équipes ont buzzés et n'ont pas trouvé la réponse )
- Gagne moins de points (ou plus) si la réponse est donnée plus tard après plusieurs réponses négatives

### 2) Une solution pour le "Quizz Master" contenant deux vues (Vue QM et vue joueurs)

#### Vue QM

Fonctionnalités:
- 2.1 Créer / Lancer une partie (Nombre d'équipes / Nombre de questions / [Temps limite][temps-limite])
- 2.2 Afficher la question et sa réponse
- 2.3 Gestion des questions (Passer une question/Afficher la question suivante)
    - 2.3.1 Gestion des questions «QCM»
    - 2.3.2 Gestion des questions «Images» (Passer à l'image suivante)
    - 2.3.3 Gestion des questions «Audio» (Rejouer son)
- 2.4 Gestion des réponses (Valider/Refuser)
- 2.5 Affichage du score par équipe
- 2.6 Affichage de l'équipe qui a la main (buzzer)

#### Vue Joueurs

Fonctionnalités:
- 2.7 Affichage de la question
- 2.8 Affichage du score par équipe
- 2.6 Affichage de l'équipe qui a la main (buzzer)

### 3) Un buzzer destiné aux mobiles.

Fonctionnalités:

- 3.1 Choix de l'équipe : Lors de la connexion, si une partie a été créé, le joueur peut choisir l'équipe qu'il souhaite rejoindre dans la liste qui lui est présentée.
- 3.2 Buzzer : Lorsque la partie est lancée, le joueur peut répondre à une question en pressant sur un bouton. Cela aura pour effet de bloquer pendant **x** secondes la possibilité de répondre à cette question.

    
## Interfaces:

Voir mockup en entier : https://create.piktochart.com/output/41063755-untitled-presentation

![Creation](https://github.com/Unknow46/Buzzer/raw/master/doc/Mokeup_v0.2/000.png "Creation")
![VueJoueur2](https://github.com/Unknow46/Buzzer/raw/master/doc/Mokeup_v0.2/003.png "VueJoueur2")
![VuePresentation2](https://github.com/Unknow46/Buzzer/raw/master/doc/Mokeup_v0.2/005.png "VuePresentation2")
![VueAdmin](https://github.com/Unknow46/Buzzer/raw/master/doc/Mokeup_v0.2/007.png "VueAdmin")

## Solution Technique

- Langage: JavaScript
- Framework:
    - Frontend: Vue.js
    - Backend: Node.js
    - Communication: Socket.io

[temps-limite]: Non spécifié dans les informations fournies.
