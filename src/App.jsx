import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/ui/CursorGlow';
import ScrollProgress from './components/ui/ScrollProgress';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <CursorGlow />
      <ScrollProgress />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
