//components/Hero/Hero.jsx

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react'; 

// Floating Dot Component with mouse escape effect
const FloatingDot = ({ initialX, initialY, size, color, delay }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  
  // 🔥 VITESSE DE BASE x3
  const [velocity, setVelocity] = useState({ 
    x: Math.random() * 6 - 3,  // ✅ 6 au lieu de 2
    y: Math.random() * 6 - 3   // ✅ 6 au lieu de 2
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const dotX = position.x;
      const dotY = position.y;
      
      const distance = Math.sqrt(Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2));
      const escapeDistance = 150;
      
      if (distance < escapeDistance) {
        const angle = Math.atan2(dotY - mouseY, dotX - mouseX);
        const force = (escapeDistance - distance) / escapeDistance;
        
        // 🔥 VITESSE DE FUITE x3
        const escapeSpeed = 15;  // ✅ 15 au lieu de 5
        
        setVelocity({
          x: Math.cos(angle) * escapeSpeed * force,
          y: Math.sin(angle) * escapeSpeed * force
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [position]);

  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        
        if (newX < 0 || newX > window.innerWidth) {
          setVelocity(v => ({ ...v, x: -v.x * 0.8 }));
          newX = Math.max(0, Math.min(window.innerWidth, newX));
        }
        if (newY < 0 || newY > window.innerHeight) {
          setVelocity(v => ({ ...v, y: -v.y * 0.8 }));
          newY = Math.max(0, Math.min(window.innerHeight, newY));
        }
        
        return { x: newX, y: newY };
      });
      
      // 🔥 MOINS DE FRICTION + PLUS DE VARIATION x3
      setVelocity(prev => ({
        x: prev.x * 0.98 + (Math.random() * 1.2 - 0.6),  // ✅ 0.98 et 1.2 au lieu de 0.95 et 0.4
        y: prev.y * 0.98 + (Math.random() * 1.2 - 0.6)   // ✅ 0.98 et 1.2 au lieu de 0.95 et 0.4
      }));
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <div
      className="absolute rounded-full pointer-events-none transition-all duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        opacity: 0.7,
        transform: 'translate(-50%, -50%)',
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const Hero = () => {
  const dots = [
    { x: 200, y: 150, size: 16, color: '#FDE047', delay: 0 },
    { x: window.innerWidth - 300, y: 120, size: 12, color: '#FDE047', delay: 0.5 },
    { x: 250, y: window.innerHeight - 250, size: 20, color: '#FACC15', delay: 1 },
    { x: window.innerWidth - 150, y: window.innerHeight - 200, size: 16, color: '#FDE047', delay: 1.5 },
    { x: window.innerWidth / 2, y: window.innerHeight / 2, size: 12, color: '#FDE047', delay: 2 },
    { x: 300, y: window.innerHeight - 150, size: 12, color: '#FACC15', delay: 2.5 },
    { x: window.innerWidth - 200, y: 300, size: 16, color: '#86EFAC', delay: 3 },
    { x: window.innerWidth - 100, y: window.innerHeight / 2, size: 12, color: '#FDE047', delay: 3.5 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Floating animated dots */}
      {dots.map((dot, index) => (
        <FloatingDot
          key={index}
          initialX={dot.x}
          initialY={dot.y}
          size={dot.size}
          color={dot.color}
          delay={dot.delay}
        />
      ))}

      {/* Decorative curved lines */}
      <svg className="absolute bottom-1/4 left-4 sm:left-12 w-32 sm:w-64 h-32 sm:h-64 opacity-30" viewBox="0 0 200 200">
        <path d="M 20 100 Q 60 20, 120 60 T 180 100" stroke="white" strokeWidth="1" fill="none" />
      </svg>
      
      <svg className="absolute top-1/3 left-1/4 sm:left-1/3 w-32 sm:w-48 h-32 sm:h-48 opacity-20" viewBox="0 0 200 200">
        <path d="M 50 150 Q 100 80, 150 120" stroke="white" strokeWidth="1" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400, letterSpacing: '-0.02em' }}>
                Bonjour, c'est moi<br />
                <span style={{ fontFamily: 'Crimson Pro, serif', fontWeight: 700, letterSpacing: '-0.01em' }}>Glenn Leonard MOUNGOLO</span>
              </h1>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-yellow-400 text-xl sm:text-2xl" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400, letterSpacing: '0.05em' }}>
                Développeur web
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400, textAlign: 'justify', lineHeight: '1.8' }}>
                Je souhaite mettre à profit mes compétences pour créer des applications innovantes et performantes. Mon objectif est de contribuer activement à votre entreprise en fournissant des solutions technologiques de qualité et en restant ouvert à l'apprentissage continu.
              </p>
            </div>

            <div>
              <button className="bg-blue-500/80 hover:bg-blue-600/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.02em' }}>
                <Download className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                Télécharger CV
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] order-1 lg:order-2">
            {/* Decorative blob background */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-600/40 to-blue-800/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-sm"></div>
            </div>

            {/* Decorative elements around image */}
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 border-2 border-white/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"></div>
            <div className="absolute -bottom-6 sm:-bottom-12 -right-6 sm:-right-12 w-24 sm:w-40 h-24 sm:h-40 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/4 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 border border-yellow-300/30 rounded-full"></div>

            {/* Image container with blob shape */}
            <div className="relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                alt="Glenn Leonard MOUNGOLO"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating dots near image */}
            <div className="absolute top-6 sm:top-12 left-6 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-300/60 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;