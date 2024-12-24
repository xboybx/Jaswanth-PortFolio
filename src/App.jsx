
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Background } from './components/Background';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'HOME' },
    { id: 'projects', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateToSection = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen">
      <Background />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold cursor-pointer text-gray-800"
            onClick={() => navigateToSection('hero')}
          >
            JASWANTH
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => navigateToSection(section.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${currentSection === section.id
                    ? 'text-lavender-700'
                    : 'text-gray-600 hover:text-lavender-600'
                  }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? 'block' : 'hidden'
          }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-lg" />

        {/* Menu Items */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(section.id)}
              className={`text-2xl font-medium transition-colors ${currentSection === section.id
                  ? 'text-pink-600'
                  : 'text-gray-600 hover:text-pink-600'
                }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.main
        key={currentSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {currentSection === 'hero' && <Hero onNavigate={navigateToSection} />}
        {currentSection === 'projects' && <Projects />}
        {currentSection === 'about' && <About />}
        {currentSection === 'contact' && <Contact />}
      </motion.main>
    </div>
  );
}

export default App;






