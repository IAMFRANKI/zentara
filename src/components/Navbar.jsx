// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../public/vite.svg'; // Assuming vite.svg is your company logo in public

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Company Logo" />
          <span>Innovate & Build</span>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          </li>
          <li className="dropdown">
            <a href="#services" onClick={(e) => e.preventDefault()}>Services &#9662;</a>
            <div className="dropdown-content">
              <Link to="/services" onClick={closeMenu}>All Services</Link>
            </div>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu} className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;