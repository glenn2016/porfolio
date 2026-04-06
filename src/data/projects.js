// src/data/projects.js
import profileImage from "../assets/images/2.jpg";
import profileImageTwo from "../assets/images/3.png";
import profileImageThree from "../assets/images/4.png";
import profileImageFor from "../assets/images/6.jpg";
import profileImageSeven from "../assets/images/7.png";

export const projects = [
  {
    id: 2,
    slug: "independance360",
    title: "Independance360 API",
    shortDescription:
      "API backend d’une plateforme d’actualité permettant la gestion des articles, des rubriques et des comptes rédacteurs.",

    fullDescription: `
      Independance360 est une API backend conçue pour une plateforme d’actualité moderne, inspirée des grands médias en ligne.
      
      Elle permet de gérer efficacement la publication de contenus, l’organisation éditoriale et les utilisateurs (rédacteurs).
      
      L’architecture a été pensée pour être performante, scalable et facilement déployable en environnement cloud.
      
      Fonctionnalités principales :
      • Gestion des rubriques (catégories d’articles)
      • Création, modification et suppression d’articles
      • Authentification et gestion des comptes rédacteurs
      • Système de cache avec Redis pour améliorer les performances
      • Monitoring et centralisation des logs (Grafana, Loki, Promtail)
      • API REST sécurisée et structurée
      
      L’application est conteneurisée avec Docker et déployée sur un VPS cloud, avec configuration serveur personnalisée.
    `,

    image: profileImageSeven,
    gallery: [
      profileImageSeven,
      // Tu peux ajouter screenshots Grafana, API, etc.
    ],

    technologies: [
      "Express.js",
      "PostgreSQL (Neon)",
      "Redis",
      "Docker",
      "Grafana",
      "Loki",
    ],

    github: "https://github.com/glenn2016/indepance360-api.git",
    demo: "http://indepance360.duckdns.org/api/",
    status: "development",
    year: "2025",
    client: "Independance360",
    role: "Développeur Back-End",
  },
  {
    id: 2,
    slug: "byfaet-seller",
    title: "Byfaet Seller",
    shortDescription:
      "Cette plateforme permet d'ajouter et de gérer facilement des produits tout en assurant un suivi complet des commandes.",
    fullDescription: `
      Byfaet Seller est une plateforme complète dédiée aux vendeurs de la marketplace ByFaet.
      
      Elle permet d'ajouter et de gérer facilement des produits tout en assurant un suivi complet des commandes. Elle offre des outils pour organiser le catalogue, traiter les achats et optimiser la gestion des ventes.
      
      Fonctionnalités principales :
      • Gestion complète du catalogue produits
      • Suivi des commandes en temps réel
      • Tableau de bord analytique
      • Gestion des stocks
      • Interface intuitive et responsive
    `,
    image: profileImage,
    gallery: [
      profileImage,
      // Ajoute d'autres images ici
    ],
    technologies: ["Laravel", "Vue.js", "PostgreSQL", "Tailwind CSS"],
    github: null, // null si privé
    demo: "https://sell.byfaet.fr/",
    status: "production", // "production" | "development" | "private"
    year: "2025",
    client: "ByFaet",
    role: "Développeur Full-Stack",
  },
  {
    id: 3,
    slug: "faet-admin",
    title: "Faet Admin",
    shortDescription:
      "Dashboard administrateur d'une marketplace e-commerce permettant la gestion complète de la plateforme.",
    fullDescription: `
      Dashboard administrateur de la marketplace ByFaet.fr, une plateforme e-commerce prochainement lancée en France.
      
      Fonctionnalités développées :
      • Gestion des catégories visibles sur la plateforme
      • Suivi en temps réel des inscriptions utilisateurs
      • Supervision des nouveaux produits et des commandes
      • Possibilité de bloquer ou gérer les utilisateurs
      • Visualisation générale de l'activité de la marketplace
      
      Mise en place de l'architecture back-end, intégration front-end et déploiement sur un VPS cloud avec une pipeline CI/CD via GitHub Actions.
    `,
    image: profileImageTwo,
    gallery: [
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962711/22_p44wuu.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962559/1_lnwbg2.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962582/17_vniiq5.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962579/16_l4k5hv.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962578/15_c1f2ee.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962576/14_krrn7e.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962575/13_ahgxf9.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962572/12_bgex3b.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962571/10_vg0aof.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962568/9_zg3bmk.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962567/6_coxs0u.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962565/5_hlzomf.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962564/4_uclwqt.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962562/3_n1nd2m.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962561/2_sme1k2.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962558/21_pysdh7.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962557/20_u1r5os.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962557/18_bmtkuh.png",
      "https://res.cloudinary.com/dipqveukq/image/upload/v1769962557/19_yfbsbs.png",
    ],
    technologies: ["React.js", "Laravel", "PostgreSQL", "GitHub Actions"],
    github: null,
    demo: null,
    status: "private",
    year: "2025",
    client: "ByFaet",
    role: "Développeur Full-Stack",
  },
  {
    id: 4,
    slug: "myfeedback360",
    title: "MyFeedback360",
    shortDescription:
      "Interface web intuitive pour la création et gestion d'évaluations 360°.",
    fullDescription: `
      MyFeedback360 est une plateforme d'évaluation 360° destinée à améliorer la performance et la collaboration en entreprise.
      
      Fonctionnalités :
      • Création d'évaluations personnalisées
      • Séries de questionnaires thématiques
      • Analyse des résultats en temps réel
      • Tableaux de bord interactifs
      • Gestion des utilisateurs et des équipes
      
      Développement complet de l'API back-end et collaboration étroite avec l'équipe front-end pour assurer l'intégration fluide des fonctionnalités.
    `,
    image: profileImageThree,
    gallery: [
      profileImageThree,
    ],
    technologies: ["React.js", "Laravel", "MySQL", "Chart.js"],
    github: null,
    demo: "https://gestion-entreprise-front-git-master-sibobaldes-projects.vercel.app/",
    status: "production",
    year: "2024",
    client: "Kevacom",
    role: "Développeur Back-end",
  },
  {
    id: 5,
    slug: "api-tyko",
    title: "Api Tyko",
    shortDescription:
      "Plateforme de billetterie en ligne pour créer des événements et vendre des billets.",
    fullDescription: `
      API Tyko est une plateforme de billetterie en ligne permettant de créer des événements, gérer les places et vendre des billets.
      
      Fonctionnalités :
      • Création et gestion d'événements
      • Système de réservation de places
      • Paiement en ligne sécurisé
      • Génération de QR codes pour les billets
      • Interface moderne et intuitive
    `,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    gallery: [],
    technologies: ["Vue.js", "PHP", "PostgreSQL"],
    github: null,
    demo: null,
    status: "development",
    year: "2024",
    client: "Projet personnel",
    role: "Développeur Full-Stack",
  },
  {
    id: 6,
    slug: "send-mail",
    title: "Send Mail API",
    shortDescription:
      "Une API REST simple et efficace pour envoyer des emails depuis un formulaire de contact.",
    fullDescription: `
      Send Mail est une API REST open source construite avec Node.js, Express et Resend.
      
      Elle permet d'envoyer facilement des emails depuis n'importe quel formulaire de contact.
      
      Fonctionnalités :
      • Envoi d'emails via Resend API
      • Email de confirmation automatique à l'expéditeur
      • Templates HTML responsive et stylés
      • Validation des données
      • Prêt pour le déploiement (Railway, Render, Heroku, VPS...)
      
      Ce projet est open source et disponible sur GitHub.
    `,
    image: profileImageFor,
    gallery: [
      profileImageFor,
    ],
    technologies: ["Node.js", "Express.js", "Resend", "Railway"],
    github: "https://github.com/glenn2016/send-mail",
    demo: "https://send-mail-production-769a.up.railway.app/",
    status: "production",
    year: "2025",
    client: "Open Source",
    role: "Développeur Back-end",
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};