// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import socialIcon from '../public/vite.svg'; // Assuming social icons are generic placeholder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h4>Innovate & Build</h4>
          <p>Your trusted partner in construction and IT innovation.</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={socialIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={socialIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={socialIcon} alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>123 Innovation Drive, Tech City, TB 10001</p>
          <p>Email: <a href="mailto:info@innovatebuild.com">info@innovatebuild.com</a></p>
          <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Innovate & Build. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;