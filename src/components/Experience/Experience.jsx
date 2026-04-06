import React from 'react';

const Experience = () => {
  return (
    <section id="experience"  className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Mes expériences & Formations
        </h2>

        {/* 🔥 Layout en pile - Plus équilibré */}
        <div className="space-y-8">
          
          {/* Éducation Section - Pleine largeur */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Formation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  2024 - 2025
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Master 1 - ISI Dakar
                </h4>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Génie Logiciel
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  2020 - 2023
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Licence - ISI Dakar
                </h4>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Génie Logiciel
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  2019 - 2020
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Bac - CSNDR Congo
                </h4>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Sciences Naturelles
                </p>
              </div>
            </div>
          </div>

          {/* Expérience Section - Pleine largeur */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Expériences professionnelles
            </h3>
            
            <div className="space-y-6">
            {/* Item 0 */}
            <div className="relative pl-6 border-l-2 border-blue-400">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>

              <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Novembre 2025 – Aujourd’hui
              </p>

              <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Independance360 | Développeur Back-End Freelance
              </h4>

              <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Conception et développement complet du backend d’une plateforme d’actualité inspirée de grands médias en ligne.
                Mise en place d’une API REST avec Express.js permettant la gestion des rubriques, la création et l’édition d’articles,
                ainsi que l’authentification et la gestion des comptes rédacteurs.
                Intégration d’une base de données PostgreSQL (Neon) pour la persistance des données et optimisation des performances via Redis pour la mise en cache.
                Implémentation d’un système de monitoring et de logging avec Grafana, Promtail et Loki pour assurer la supervision de l’application.
                Conteneurisation avec Docker et déploiement sur un VPS cloud chez OVHcloud avec configuration serveur.
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Express.js</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">PostgreSQL (Neon)</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Redis</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Docker</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Grafana</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Loki</span>
              </div>
            </div>
              {/* Item 1 */}
              <div className="relative pl-6 border-l-2 border-blue-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Août 2025 – Décembre 2025
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ByFaet | Développeur Full-Stack Freelance
                </h4>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Réalisation du dashboard administrateur de la marketplace ByFaet.fr, une plateforme e-commerce prochainement lancée en France. Développement complet des fonctionnalités d'administration : gestion des catégories visibles sur la plateforme, suivi en temps réel des inscriptions utilisateurs, supervision des nouveaux produits et des commandes, possibilité de bloquer ou gérer les utilisateurs, ainsi que visualisation générale de l'activité de la marketplace.
                  Mise en place de l'architecture back-end, intégration front-end et déploiement sur un VPS cloud avec une pipeline CI/CD via GitHub Actions.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Laravel</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">PostgreSQL</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">GitHub Actions</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-6 border-l-2 border-blue-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Août 2025 – Décembre 2025
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ByFaet | Développeur Full-Stack Freelance
                </h4>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Participation au développement de l'application vendeur seller.byfaet.fr en ajoutant une fonctionnalité complète d'ajout de produit. Mise en place du module permettant aux vendeurs d'enregistrer de nouveaux produits, d'associer des images, de choisir une catégorie et de définir une audience ciblée (femme, homme, enfant). Création des fonctionnalités back-end et intégration front-end en cohérence avec l'infrastructure de la marketplace.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Laravel</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Vue.js</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-6 border-l-2 border-blue-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Janvier 2024 - Juin 2025
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Kevacom | Stagiaire Développeur back-end
                </h4>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Développement complet de l'API de l'application web MyFeedback360, une plateforme d'évaluation 360° destinée à améliorer la performance et la collaboration en entreprise. Conception et mise en place des fonctionnalités : gestion des utilisateurs, création d'évaluations personnalisées, séries de questionnaires thématiques, analyse des résultats. Collaboration étroite avec l'équipe front-end (React.js) pour assurer l'intégration fluide des fonctionnalités.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Laravel</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">MySQL</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">React.js</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;