Projet de gestion des utilisateurs et des rôles

Ce projet consiste en une API permettant la gestion des utilisateurs et des rôles, avec des fonctionnalités d'authentification et d'autorisation. L'API est développée avec Node.js et Express, utilisant une base de données relationnelle (MySQL) pour stocker les données des utilisateurs, des rôles et les relations entre eux.

#Fonctionnalités principales

-Création, lecture, mise à jour et suppression (CRUD) des utilisateurs et des rôles.
-Authentification des utilisateurs avec vérification du nom d'utilisateur et du mot de passe.
-Gestion des rôles avec association de différents rôles aux utilisateurs.
-Autorisation basée sur les rôles pour contrôler l'accès aux ressources de l'API.

#tructure du projet
$Le projet est organisé de la manière suivante :

-controlers/ : Contient les contrôleurs pour la gestion des utilisateurs, des rôles et de l'authentification.
-routes/ : Contient les routes pour les différentes fonctionnalités de l'API.
-models/ : Contient les modèles Sequelize pour la définition des tables de la base de données.
-database/ : Contient le fichier de connexion à la base de données.
-autorisation/ : Contient les middlewares pour la gestion de l'authentification et de l'autorisation.
-server.js : Fichier principal de l'application, responsable de la configuration du serveur Express et du démarrage de l'API.
-.env : Fichier de configuration pour les variables d'environnement sensibles.
-package.json : Fichier de configuration npm contenant les dépendances du projet.
