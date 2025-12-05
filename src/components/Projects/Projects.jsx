//components/Projects/Projects.jsx
import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import profileImage from "../../assets/images/2.jpg";
import profileImageTWo from "../../assets/images/3.png";
import profileImageThree from "../../assets/images/4.png";
import profileImageFor from "../../assets/images/6.jpg";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const projects = [
    {
      id: 1,
      title: "Byfaet Seller",
      description:
        "Cette plateforme permet d'ajouter et de gérer facilement des produits tout en assurant un suivi complet des commandes. Elle offre des outils pour organiser le catalogue, traiter les achats et optimiser la gestion des ventes.",
      image: profileImage,
      technologies: ["Laravel", "Vue js"],
      github: "#",
      demo: "https://sell.byfaet.fr/",
      color: "",
    },
    {
      id: 2,
      title: "Faet Admin",
      description:
        "Dashboard administrateur d'une marketplace e-commerce permettant la gestion des catégories, le suivi des utilisateurs, le contrôle des produits et commandes, ainsi que la supervision globale de l'activité.",
      image: profileImageTWo,
      technologies: ["React js", "Laravel"],
      github: "#",
      demo: "#",
      color: "",
    },
    {
      id: 3,
      title: "MyFeedback360",
      description:
        "Interface web intuitive pour MyFeedback360. Création et gestion d'évaluations 360°, navigation fluide entre les tableaux de bord et suivi en temps réel des résultats.",
      image: profileImageThree,
      technologies: ["React", "Laravel", "MySQL"],
      github: "#",
      demo: "https://gestion-entreprise-front-git-master-sibobaldes-projects.vercel.app/",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 4,
      title: "Api Tyko",
      description:
        "Plateforme de billetterie en ligne permettant de créer des événements, gérer les places et vendre des billets avec une interface moderne et intuitive.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "PHP", "PostgreSQL"],
      github: "#",
      demo: "#",
      color: "from-red-500 to-orange-600",
    },
    {
      id: 5,
      title: "Send mail",
      description:
        "Une API REST simple et efficace pour envoyer des emails depuis un formulaire de contact de portfolio. Construite avec Node.js, Express et Resend.",
      image: profileImageFor,
      technologies: ["Node.js", "Express.js", "Resend"],
      github: "https://github.com/glenn2016/send-mail?tab=readme-ov-file",
      demo: "https://send-mail-production-769a.up.railway.app/",
      color: "from-red-500 to-orange-600",
    },
  ];

  // Calculs pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Fonctions navigation
  const goToPage = (page) => {
    setCurrentPage(page);
    // Scroll vers le haut de la section
    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToPrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  return (
    <section
      id="projets"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-12">
          <h3
            className="text-white text-2xl sm:text-3xl font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            MES PROJETS
          </h3>
          <p
            className="text-white/60 text-sm sm:text-base"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Je souhaite mettre à profit mes compétences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h4
                  className="text-white text-xl sm:text-2xl font-bold mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {project.title}
                </h4>

                {/* Description */}
                <p
                  className="text-white/70 text-sm sm:text-base mb-4 leading-relaxed"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-white/80 rounded-full text-xs sm:text-sm border border-gray-600/50"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    target="_blank"
                    href={project.demo}
                    className="flex-1 bg-blue-500/80 hover:bg-blue-600/90 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-white/20"
                    style={{ fontFamily: "Raleway, sans-serif" }}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {/* Bouton Précédent */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white/70 hover:bg-gray-700/50 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Numéros de page */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 border border-gray-700/50 text-white/70 hover:bg-gray-700/50 hover:text-white"
                }`}
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {page}
              </button>
            ))}

            {/* Bouton Suivant */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white/70 hover:bg-gray-700/50 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Indicateur de page */}
        {totalPages > 1 && (
          <p
            className="text-center text-white/50 text-sm mt-4"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Page {currentPage} sur {totalPages} • {projects.length} projets
          </p>
        )}

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
