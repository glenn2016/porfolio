//components/Navbar/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-lg sm:text-xl font-light tracking-wide">
            Perfolio
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <a href="#accueil" className="text-white relative group text-sm xl:text-base">
              Accueil
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
            </a>
            <a href="#apropos" className="text-white hover:text-yellow-400 transition-colors text-sm xl:text-base">
              À propos
            </a>
            <a href="#projets" className="text-white hover:text-yellow-400 transition-colors text-sm xl:text-base">
              Mes projets
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors text-sm xl:text-base">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <a href="#accueil" className="block text-white py-2 border-b border-yellow-400">
              Accueil
            </a>
            <a href="#apropos" className="block text-white hover:text-yellow-400 transition-colors py-2">
              À propos
            </a>
            <a href="#projets" className="block text-white hover:text-yellow-400 transition-colors py-2">
              Mes projets
            </a>
            <a href="#contact" className="block text-white hover:text-yellow-400 transition-colors py-2">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;