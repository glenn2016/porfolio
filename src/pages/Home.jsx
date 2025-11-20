import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;