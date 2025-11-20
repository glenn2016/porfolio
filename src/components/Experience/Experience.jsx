import React from 'react';

const Experience = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Mes expériences & éducation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Éducation Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Éducation
            </h3>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  2023 - 2025 (en cours) | Licence 3ème et master 1
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ESATIC Abidjan - Côte d'Ivoire
                </h4>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Génie Logiciel
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  2021 - 2023 | Licence professionnelle (1ère et 2ème)
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ISEG Moroni - Union des Comores
                </h4>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Développement d'applications
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  2020 - 2021
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  IPRC Moroni - Union des Comores
                </h4>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Informatique de gestion
                </p>
              </div>

              {/* Item 4 */}
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  2019 - 2020
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Lycée Moroni
                </h4>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Baccalauréat série D
                </p>
              </div>
            </div>
          </div>

          {/* Expérience Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Expérience
            </h3>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="relative pl-6 border-l-2 border-blue-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Août 2024 - Novembre 2024
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Freelance
                </h4>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Création d'une bibliothèque numérique pour la gestion et téléchargement de ressources pédagogiques en ligne. Technologies : React, Node.js, MySQL.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative pl-6 border-l-2 border-blue-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Avril 2024 - Juin 2024
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Stagiaire développeur web
                </h4>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Développement d'une plateforme e-commerce avec Laravel et Vue.js. Mise en place d'un système de paiement en ligne et gestion des stocks.
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative pl-6 border-l-2 border-blue-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Janvier 2023 - Mars 2023
                </p>
                <h4 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Projet académique
                </h4>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Conception et développement d'une application mobile de gestion de tâches avec React Native et Firebase.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;