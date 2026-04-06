import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-md fixed-top transition-all duration-300 ${isScrolled ? 'glass-panel py-2' : 'bg-transparent py-4'}`} style={{ zIndex: 1030 }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-primary nav-link fs-4" href="#home" style={{ letterSpacing: '-0.05em' }}>
          Sauraf<span className="text-body">.</span>
        </a>
        
        {/* Mobile controls */}
        <div className="d-md-none d-flex align-items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-link link-body-emphasis p-0 text-decoration-none"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="navbar-toggler border-0 p-1"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show glass-panel p-3 rounded mt-2 mt-md-0 shadow' : ''}`}>
          <ul className="navbar-nav mb-2 mb-md-0 align-items-md-center gap-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a 
                  className="nav-link fw-medium px-2 py-1" 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-item d-none d-md-block ms-ms-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="btn btn-link link-body-emphasis p-2 text-decoration-none rounded-circle bg-body-secondary d-flex align-items-center justify-content-center"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
