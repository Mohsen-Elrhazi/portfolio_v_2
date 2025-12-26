import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "smartShop",
    title: "SmartShop",
    period: {
      start: "2025",
    },
    github: "https://github.com/Mohsen-Elrhazi/smartShop-brief-croise-1.git",
    skills: [
      "Java 17",
      "Spring Boot (Web, Data JPA, Validation)",
      "Hibernate / JPA",
      "MySQL",
      "Lombok",
      "MapStruct",
      "Maven",
      "Docker",
      "Postman (tests API)",
      "Swagger",
    ],
    description: `Application web backend pour gérer clients, produits et commandes avec un système de fidélité automatique.

 Fonctionnalités principales
- Gestion des clients (CRUD)
- Gestion des produits et catégories
- Gestion des commandes
- Système de fidélité automatique (points / remises)
- Validation des données et gestion des erreurs
- Documentation de l’API avec Swagger

Aspects techniques
- Architecture REST avec Spring Boot
- Architecture en couches (Controller, Service, Repository, DTO)
- Persistance des données avec JPA / Hibernate
- Mapping DTO ↔ Entity avec MapStruct
- Validation des données avec annotations
- Tests des endpoints avec Postman
- Conteneurisation avec Docker
- Base de données relationnelle MySQL`,
    isExpanded: false,
  },
  {
    id: "gestion-reservations-salles",
    title: "Gestion Réservations Salles",
    period: {
      start: "2025",
      isOngoing: true,
    },
    github: "https://github.com/Mohsen-Elrhazi/Gestion-Reservation-Salles..git",
    skills: [
      "Java 17",
      "Spring Boot (Web, Data JPA, Security)",
      "Hibernate / JPA",
      "MySQL / PostgreSQL",
      "Docker & Docker Compose",
      "JWT Authentication",
      "Spring Security",
      "JUnit 5 / Mockito",
      "CI/CD (GitHub Actions / Jenkins)",
      "Elasticsearch & Kibana",
      "SonarQube & JaCoCo",
      "UML",
    ],
    description: `Application web backend pour gérer les réservations des salles de conférences au sein d'une organisation.

Fonctionnalités principales
- Gestion des employés (CRUD)
- Gestion des salles et équipements (CRUD)
- Création et suivi des réservations
- Validation, annulation et suivi des statuts
- Authentification et autorisation avec rôles (EMPLOYE / ADMIN)
- Gestion des erreurs centralisée
- Observabilité et logs avec Elasticsearch & Kibana
- Déploiement conteneurisé avec Docker et CI/CD automatisé

Aspects techniques
- Architecture multi-couches (Controller, Service, Repository, DTO)
- Persistance avec JPA / Hibernate
- API REST sécurisée avec Spring Security & JWT
- Tests unitaires et d’intégration (JUnit 5 / Mockito / Spring Boot Test)
- Intégration CI/CD avec Jenkins / GitHub Actions
- Analyse de qualité du code avec SonarQube & couverture avec JaCoCo
- Conteneurisation avec Docker & Docker Compose
- Observabilité avec Elasticsearch & Kibana`,
    isExpanded: false,
  },
  {
    id: "cineHub",
    title: "CinéHub - Gestion Catalogue de Films",
    period: {
      start: "2025",
      isOngoing: true, // projet en cours, modifie si nécessaire
    },
    github: "https://github.com/Mohsen-Elrhazi/brief4_Gestion_Catalogue_Films.git",
    skills: [
      "Java 17",
      "Spring Core",
      "Spring MVC / REST",
      "Spring Data JPA",
      "JPA / Hibernate",
      "MySQL / PostgreSQL",
      "DTOs et Mappeurs",
      "Gestion des exceptions",
      "JUnit 5 / Mockito",
      "Git",
      "UML",
      "Agilité (Scrum / Kanban)",
      "Web Services",
    ],
    description: `Application web backend pour gérer un catalogue de films de manière centralisée.

Fonctionnalités principales
- Gestion des films (CRUD, recherche par titre/année/catégorie, filtrage)
- Gestion des réalisateurs (CRUD, filmographie complète)
- Gestion des catégories (CRUD, consultation des films par catégorie)
- Validation des règles métiers (film unique par réalisateur et catégorie, note et durée valides)
- Gestion centralisée des exceptions
- Tests unitaires et d’intégration avec DTOs

Aspects techniques
- Architecture MVC multi-couches (Repository / Service / Controller)
- Persistance avec JPA / Hibernate
- Injection de dépendances avec Spring Core
- API REST sécurisée et modulable
- Base de données relationnelle (MySQL / PostgreSQL)
- Gestion des dates avec Java Time API
- Configuration via annotations et XML (applicationContext.xml)
- Développement suivant les bonnes pratiques OOP et Spring`,
    isExpanded: false,
  },
  {
    id: "hopitalNumerique",
    title: "Hôpital Numérique - Gestion Clinique Digitale",
    period: {
      start: "2025",
    },
    github: "https://github.com/Mohsen-Elrhazi/brief3_CliniqueDigitale.git",
    skills: [
      "Java EE / Jakarta EE",
      "Servlets / JSP / JSTL",
      "JPA / Hibernate",
      "MySQL",
      "MVC multi-couches",
      "Gestion des sessions",
      "Java Time API",
      "Gestion des exceptions",
      "Git",
      "UML",
      "JSON",
    ],
    description: `Application web JEE pour gérer une clinique digitale de façon centralisée, couvrant les besoins des patients, docteurs et administrateurs.

Fonctionnalités principales
- Patients : création et gestion de compte, consultation des docteurs par département, réservation/annulation/modification de consultations, consultation de l'historique médical.
- Docteurs : consultation du planning, validation ou refus de réservations, saisie de comptes rendus médicaux, mise à jour de l'état des consultations.
- Administration : gestion des départements, des docteurs et des salles, supervision des réservations et consultations, génération de statistiques globales.

Aspects techniques
- Architecture MVC multi-couches (Repository / Service / Controller / Vue)
- Persistance avec JPA / Hibernate
- Sécurité et gestion des sessions avec HttpSession et Filters
- JSP et JSTL pour les vues dynamiques
- CSS / Bootstrap pour le style et la responsivité
- Gestion des exceptions et règles métiers (créneaux de 30 minutes, réservation unique par créneau)
- Développement suivant les bonnes pratiques de la POO et Java EE`,
    isExpanded: false,
  },
  {
  id: "chatAppLaravel",
  title: "Application de Chat - Laravel",
  period: {
    start: "2024",
    end: "2025",},
  github: "https://github.com/Mohsen-Elrhazi/projet_fil_rouge.git",
  skills: [
    "Laravel",
    "PHP",
    "Tailwind CSS",
    "JavaScript",
    "WebSocket",
    "Pusher",
    "MySQL",
    "Docker",
    "Gestion en temps réel",
    "MVC multi-couches",
    "Git"
  ],
  description: `Application web de messagerie instantanée permettant aux utilisateurs de communiquer en temps réel.

Fonctionnalités principales
- Authentification et gestion des comptes utilisateurs.
- Messagerie instantanée en temps réel avec WebSocket / Pusher.
- Création et gestion de discussions.
- Historique des conversations consultable.
- Interface responsive avec Tailwind CSS.

Aspects techniques
- Backend avec Laravel (MVC multi-couches) et gestion des routes, contrôleurs et modèles.
- Frontend interactif avec JavaScript et Tailwind CSS.
- Persistance des messages et utilisateurs dans MySQL.
- WebSocket / Pusher pour la communication temps réel.
- Conteneurisation avec Docker pour faciliter le déploiement.
- Suivi des bonnes pratiques OOP et sécurisation des routes et données.`,
  isExpanded: false,
},
{
  id: "apiCandidatures",
  title: "API REST de Gestion des Candidatures",
  period: {
    start: "2025",
  },
  github: "https://github.com/Mohsen-Elrhazi/Gestion_Gandidats_Laravel_REST_API_Part2.git",
  skills: [
    "Laravel 10",
    "PHP",
    "MySQL",
    "JWT (jwt-auth) / Sanctum",
    "Gestion des rôles et permissions",
    "Export Excel / CSV",
    "Swagger / Postman",
    "Git",
    "API REST",
    "UML",
  ],
  description: `API REST pour la gestion des candidatures, permettant aux candidats, recruteurs et administrateurs de gérer les utilisateurs, offres et candidatures de manière centralisée et sécurisée.

Fonctionnalités principales
- Gestion des utilisateurs : inscription, authentification (JWT/Sanctum), mise à jour du profil, ajout de compétences.
- Gestion des CVs : upload (PDF/DOCX, max 5MB), stockage local.
- Gestion des offres d'emploi : CRUD, filtrage (catégorie, localisation, type de contrat), postuler à plusieurs offres en un clic.
- Candidatures : postuler à une offre, e-mails de confirmation automatiques, suivi des statuts.
- Export des données : génération de rapports CSV/Excel pour les recruteurs.
- Gestion des rôles et permissions : Candidat, Recruteur, Admin, avec contrôle d'accès via Gates & Policies.

Aspects techniques
- Architecture MVC avec Laravel / Lumen
- Sécurisation via JWT avec middleware personnalisé
- Queues pour traitement asynchrone (emails, export, analyse CV)
- Documentation API via Swagger ou Postman
- Tests unitaires et fonctionnels avec PHPUnit / Pest
- Base de données relationnelle MySQL / PostgreSQL avec relations optimisées
- Développement suivant les bonnes pratiques OOP et Laravel`,
  isExpanded: false,
},
{
  id: "navettesAutocars",
  title: "Plateforme de Gestion des Navettes des Autocars",
  period: {
    start: "2025",
  },
  github: "https://github.com/Mohsen-Elrhazi/Eventbrite.git",
  skills: [
    "Laravel 10",
    "PHP",
    "PostgreSQL",
    "Gestion des rôles et permissions",
    "Docker",
    "MVC multi-couches",
    "Git",
    "UML"
  ],
  description: `Plateforme web pour gérer les offres de navettes des autocars, permettant aux sociétés de transport de créer des offres et aux utilisateurs de s'abonner.

Fonctionnalités principales
- Création d'offres par les sociétés de transport : navettes entre deux villes, période d'abonnement, horaires, capacité, description de l'autocar.
- Consultation des offres par les utilisateurs avec statut (valide/fermée).
- Abonnement des utilisateurs selon les places disponibles.
- Demande d'abonnement pour futures navettes avec gestion des duplications.
- Consultation des demandes par les sociétés pour connaître l'intérêt des utilisateurs.

Aspects techniques
- Framework Laravel avec architecture MVC multi-couches
- Conteneurisation avec Docker pour un déploiement facile
- Base de données relationnelle PostgreSQL
- Diagrammes UML pour cas d'utilisation et diagrammes de classes`,
  isExpanded: false,
},
{
  id: "youdemyClone",
  title: "Plateforme de Cours en Ligne Youdemy",
  period: {
    start: "2025",
  },
  github: "https://github.com/Mohsen-Elrhazi/Youdemy-sc2.git",
  skills: [
    "PHP natif",
    "HTML5",
    "CSS3",
    "JavaScript",
    "MySQL",
    "Responsive Design",
    "OOP / Polymorphisme",
    "Gestion des rôles et permissions",
    "MVC",
    "UML",
    "Git"
  ],
  description: `Plateforme de cours en ligne permettant aux étudiants et enseignants de gérer les cours, inscriptions et statistiques dans un environnement interactif.

Fonctionnalités principales

Front Office :
- Visiteur : accès au catalogue des cours, recherche par mots-clés, création de compte (Étudiant ou Enseignant).
- Étudiant : visualisation et recherche de cours, inscription aux cours, accès à "Mes cours".
- Enseignant : ajout, modification et suppression de cours, gestion des inscriptions, consultation des statistiques des cours.

Back Office :
- Administrateur : validation des comptes enseignants, gestion des utilisateurs (activation, suspension, suppression), gestion des contenus (cours, catégories, tags), statistiques globales (nombre de cours, répartition, top enseignants).


Aspects techniques
- Architecture modulaire basée sur OOP en PHP natif
- Base de données MySQL
- Design responsive avec HTML5, CSS3 et JavaScript
- Diagrammes UML pour modélisation des entités et relations`,
  isExpanded: false,
},
{
  id: "streamingDB",
  title: "Gestion d'une Base de Données de Service de Streaming de Films",
  period: {
    start: "2024",
  },
  github: "https://github.com/Mohsen-Elrhazi/brief_1_sprint_3.git", 
  skills: [
    "SQL",
    "MySQL",
    "Conception de base de données",
    "ERD",
    "Relations Many-to-Many",
    "Requêtes avancées (JOIN, GROUP BY, CTE)",
    "Triggers",
    "Agrégation et statistiques",
    "Analyse de données",
    "Git"
  ],
  description: `Conception et gestion d'une base de données pour un service de streaming de films afin de suivre les utilisateurs, les films, les abonnements, l'historique de visionnage et les critiques.

Fonctionnalités principales
- Gestion des utilisateurs et de leurs abonnements.
- Suivi de l'historique de visionnage et du pourcentage de complétion des films.
- Gestion des films et de leurs genres.
- Calcul de statistiques : films les mieux notés, genres les plus regardés, comportements des utilisateurs.
- Écriture de requêtes SQL avancées : INSERT, SELECT, JOIN, GROUP BY, sous-requêtes, CTE, triggers.

`,
  isExpanded: false,
},
// {
//   id: "futChampionsApp",
//   title: "Copie de FUT Champions Web App Ultimate Team",
//   period: {
//     start: "2024",
//   },
//   link: "https://mohsen-elrhazi.github.io/brief_3_sprint_2/", 
//   github: "https://github.com/Mohsen-Elrhazi/brief_3_sprint_2.git",
//   skills: [
//     "HTML5",
//     "CSS3",
//     "JavaScript",
//     "JSON",
//     "UX",
//     "UI",
//     "Responsive Design",
//     "Git"
//   ],
//   description: `Application web pour gérer une équipe FUT (Ultimate Team) pour EA FC 25. 
// Les utilisateurs peuvent créer, personnaliser et gérer leurs formations et équipes via une interface interactive.

// Fonctionnalités principales
// - Ajout, modification et suppression des joueurs via un formulaire dynamique.
// - Positionnement automatique des joueurs selon la formation choisie (ex : 4-3-3, 4-4-2).
// - Gestion de la formation principale et des réservistes.
// - Validation des champs de saisie pour garantir la cohérence des données.
// - Interface responsive adaptée aux desktops, tablettes et mobiles.`,
//   isExpanded: false,
// },
// {
//   id: "reservationApp",
//   title: "Réservation - Page Interactive",
//   period: {
//     start: "2024",
//   },
//   link: "https://mohsen-elrhazi.github.io/brief_2_Sprint2/", 
//   github: "https://github.com/Mohsen-Elrhazi/brief_2_Sprint2.git",
//   skills: [
//     "HTML5",
//     "CSS3",
//     "JavaScript",
//     "Responsive Design",
//     "UI/UX",
//     "Framework CSS",
//     "PDF Generation (Bonus)"
//   ],
//   description: `Page web interactive pour gérer des réservations étape par étape. 
// Les utilisateurs peuvent sélectionner les gares de départ et d'arrivée, choisir une date, le nombre de voyageurs et leurs places.

// Fonctionnalités principales
// - Processus de réservation multi-étapes guidé et intuitif.
// - Visualisation des résultats avec détails horaires et compagnies.
// - Sélection des places pour adultes et enfants.
// - Génération d'un ticket final incluant les informations personnelles et un code QR.
// - Bonus : génération automatique de tickets PDF à partir des réservations.`,
//   isExpanded: false,
// },
// {
//   id: "task-scheduler",
//   title: "Task Scheduler",
//   period: {
//     start: "2024",
//   },
//   link: "https://mohsen-elrhazi.github.io/brief_4/", 
//   github: "https://github.com/Mohsen-Elrhazi/brief_4.git", 
//   skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "DOM Manipulation"],
//   description: `
// Créer une application interactive de gestion de tâches permettant aux utilisateurs de :

// Fonctionnalités principales
// - Ajouter une tâche avec une description et une date limite
// - Visualiser toutes les tâches et leur état d’avancement
// - Marquer les tâches comme "terminées" et supprimer les tâches finies
// - Recevoir des indications visuelles (couleurs ou icônes) pour identifier les tâches en retard ou à venir
// - Structurer le code en modules clairs et réutilisables pour faciliter la maintenance
//   `,
// },
// {
//   id: "dynamic-class-website",
//   title: "Site Web Dynamique de Classe",
//   period: {
//     start: "09.2024",
//     end: "10.2024",
//     isOngoing: false,
//   },
//   link: "https://mohsen-elrhazi.github.io/Ycode/Briefs/brief_1/index.html", 
//   github: "https://github.com/Mohsen-Elrhazi/Ycode/tree/master/Briefs/brief_1", 
//   skills: ["HTML5", "CSS3","Bootstrap", "Navigation", "UI/UX", "Figma"],
//   description: `
// Transformer une page web statique en un site web dynamique interconnecté
// pour améliorer la navigation et l'organisation du contenu.

// Fonctionnalités principales
// - Accueil : Présentation de la classe, description, image représentative
// - Règles et Stratégies : Liste des règles et conseils pour réussir dans la classe
// - Contact : Formulaire de contact avec nom, email, message et informations supplémentaires
//   `,
// },


];
