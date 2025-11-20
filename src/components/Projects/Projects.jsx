import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HydraBotSDC',
      description: 'HydraBotSDC est un bot Discord multifonctionnel développé en Python. Il offre des fonctionnalités de modération, de gestion de serveur et d\'animation de communauté.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      technologies: ['Python', 'Discord.py', 'SQLite'],
      github: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      title: 'Tabadare',
      description: 'Application mobile de gestion de tâches et de productivité. Interface intuitive avec système de notifications et synchronisation cloud en temps réel.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Cbadis',
      description: 'Plateforme e-commerce moderne avec panier d\'achat, système de paiement intégré et tableau de bord administrateur complet pour la gestion des produits.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Laravel', 'MySQL'],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 4,
      title: 'CHMI',
      description: 'Système de gestion hospitalier complet permettant la gestion des patients, des rendez-vous, des dossiers médicaux et de la facturation.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'PHP', 'PostgreSQL'],
      github: '#',
      demo: '#',
      color: 'from-red-500 to-orange-600'
    }
  ];

  return (
    <section id="projets" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          </div>
          
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Mes projets
          </h2>
          
          <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Je réalise chaque projet avec professionnalisme, en veillant attentivement à l'expérience utilisateur et en assurant une qualité optimale du code pour des solutions performantes et innovantes.
          </p>
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            MES PROJETS
          </h3>
          <p className="text-white/60 text-sm sm:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Je souhaite mettre à profit mes compétences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h4 className="text-white text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-white/70 text-sm sm:text-base mb-4 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-white/80 rounded-full text-xs sm:text-sm border border-gray-600/50"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                <a  
                    href={project.demo}
                    className="flex-1 bg-blue-500/80 hover:bg-blue-600/90 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  
                <a   
                    href={project.github}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-white/20"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                  <button
                    className="bg-green-500/80 hover:bg-green-600/90 text-white w-10 h-10 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    aria-label="Plus d'infos"
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
            </div>
          ))}
        </div>

        {/* Decorative floating dots */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-green-400 rounded-full opacity-50 animate-pulse delay-200"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-pulse delay-100"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Projects;