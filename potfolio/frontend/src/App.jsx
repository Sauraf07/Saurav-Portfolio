import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-vh-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="footer bg-body-tertiary py-4 text-center text-secondary small">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} Sauraf Kumar. All rights reserved.</p>
          <p className="mt-1 mb-0">Built with React, Bootstrap, & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
