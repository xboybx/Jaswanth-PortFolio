import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Background } from "./components/Background";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Smooth transition for scroll effects
      const progress = Math.min(latest / 100, 1);
      setIsScrolled(progress);
    });
  }, [scrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const sections = [
    { id: "hero", label: "HOME" },
    { id: "projects", label: "WORK" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <div className="relative w-full">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled > 0 ? "w-[90%] md:w-[600px] py-3" : "w-full px-8 py-6"
        }`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${Math.min(
            scrollY.get() / 1000,
            0.1
          )})`,
          backdropFilter: `blur(${Math.min(scrollY.get() / 100, 10)}px)`,
          borderRadius: `999px`,
        }}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold cursor-pointer text-gray-800"
            onClick={() => scrollToSection("hero")}
          >
            JASWANTH
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-sm font-medium tracking-wide transition-colors text-gray-600 hover:text-lavender-600"
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
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        className={`fixed inset-0 z-40 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-lg" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-2xl font-medium text-gray-600 hover:text-pink-600 transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="relative p-4">
        <section id="hero" className="min-h-screen pt-16 md:pt-0">
          <Background />
          <Hero />
        </section>
        <section id="projects" className="min-h-screen">
          <About />
        </section>
        <section id="about" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
