// src/pages/ProjectDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Lock,
  Rocket,
  Code,
} from "lucide-react";
import { getProjectBySlug } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Si projet non trouvé
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  // Status badge
  const getStatusBadge = (status) => {
    const styles = {
      production: {
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/50",
        icon: <Rocket className="w-4 h-4" />,
        label: "En production",
      },
      development: {
        bg: "bg-yellow-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/50",
        icon: <Code className="w-4 h-4" />,
        label: "En développement",
      },
      private: {
        bg: "bg-red-500/20",
        text: "text-red-400",
        border: "border-red-500/50",
        icon: <Lock className="w-4 h-4" />,
        label: "Projet privé",
      },
    };
    return styles[status] || styles.development;
  };

  const statusBadge = getStatusBadge(project.status);

  // Gallery navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/#projets"
            className="text-white/70 hover:text-white flex items-center gap-2 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontFamily: "Raleway, sans-serif" }}>
              Retour aux projets
            </span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1
              className="text-white text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {project.title}
            </h1>
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${statusBadge.bg} ${statusBadge.text} border ${statusBadge.border}`}
            >
              {statusBadge.icon}
              {statusBadge.label}
            </span>
          </div>
          <p
            className="text-white/70 text-lg max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            {project.shortDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Gallery & Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 ? (
              <div className="relative rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700">
                <img
                  src={project.gallery[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-[400px] object-cover"
                />
                
                {/* Gallery navigation */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "bg-white w-6"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}

            {/* Full Description */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2
                className="text-white text-2xl font-bold mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                À propos du projet
              </h2>
              <div
                className="text-white/70 leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {project.fullDescription}
              </div>
            </div>
          </div>

          {/* Right - Info Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 space-y-4">
              {project.demo && (
              <a  
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Voir le site
                </a>
              )}
              
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <Github className="w-5 h-5" />
                  Voir le code
                </a>
              ) : (
                <div className="w-full bg-gray-700/50 text-white/50 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 cursor-not-allowed">
                  <Lock className="w-5 h-5" />
                  Code privé
                </div>
              )}

              {!project.demo && !project.github && (
                <p
                  className="text-white/50 text-center text-sm"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Ce projet n'est pas encore accessible publiquement.
                </p>
              )}
            </div>

            {/* Project Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 space-y-6">
              <h3
                className="text-white text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Informations
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p
                      className="text-white/50 text-sm"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      Année
                    </p>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      {project.year}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p
                      className="text-white/50 text-sm"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      Client
                    </p>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      {project.client}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p
                      className="text-white/50 text-sm"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      Rôle
                    </p>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3
                className="text-white text-xl font-bold mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-700/50 text-white/80 rounded-full text-sm border border-gray-600/50"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;