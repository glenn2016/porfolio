//components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  // Sections du site
  const navLinks = [
    { id: 'accueil', label: 'Accueil', href: '#accueil' },
    { id: 'apropos', label: 'Mes compétences', href: '#apropos' },
    { id: 'experience', label: 'Expériences & Formations', href: '#experience' },
    { id: 'projets', label: 'Mes projets', href: '#projets' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Détection de la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smooth vers une section
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Fermer le menu mobile
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#accueil" 
            onClick={(e) => scrollToSection(e, '#accueil')}
            className="text-white text-lg sm:text-xl font-light tracking-wide hover:text-yellow-400 transition-colors"
          >
            Perfolio
          </a>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
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
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative text-sm xl:text-base transition-colors ${
                  activeSection === link.id
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-1 border-t border-gray-700 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-3 px-2 rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'text-yellow-400 bg-yellow-400/10 border-l-2 border-yellow-400'
                    : 'text-white hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;