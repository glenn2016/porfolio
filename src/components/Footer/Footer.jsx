import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Contact Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Me contacter dès maintenant
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
          
          <button className="bg-blue-500/80 hover:bg-blue-600/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 inline-flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            Contact
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6 sm:my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* Logo/Name - Centré sur mobile */}
          <div className="text-white text-xl sm:text-2xl font-semibold text-center md:text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
            Perfolio
          </div>

          {/* Navigation Links - Responsive Grid */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-sm sm:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <a href="#accueil" className="text-white/70 hover:text-yellow-400 transition-colors">
              Accueil
            </a>
            <a href="#apropos" className="text-white/70 hover:text-yellow-400 transition-colors">
              À propos
            </a>
            <a href="#projets" className="text-white/70 hover:text-yellow-400 transition-colors">
              Mes projets
            </a>
            <a href="#contact" className="text-white/70 hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons - Centré */}
          <div className="flex justify-center md:justify-start items-center gap-3 sm:gap-4">
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 hover:bg-blue-500/40 rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700/50 hover:bg-gray-600/70 rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="GitHub">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400/20 hover:bg-blue-400/40 rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Twitter">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-white/50 text-xs sm:text-sm px-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            © 2024 Glenn Leonard MOUNGOLO. Tous droits réservés.
          </p>
        </div>

        {/* Decorative dots - Cachés sur très petits écrans */}
        <div className="hidden sm:block absolute bottom-10 left-10 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="hidden sm:block absolute top-10 right-20 w-4 h-4 bg-green-400 rounded-full opacity-50"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-2 h-2 bg-yellow-300 rounded-full opacity-70"></div>
      </div>
    </footer>
  );
};

export default Footer;