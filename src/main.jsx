// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import all CSS files
import './assets/styles/_variables.css';
import './assets/styles/_base.css';
import './assets/styles/navbar.css';
import './assets/styles/hero-slider.css';
import './assets/styles/home.css';
import './assets/styles/about.css';
import './assets/styles/services.css';
import './assets/styles/project-gallery.css';
import './assets/styles/contact.css';
import './assets/styles/cta.css';
import './assets/styles/footer.css';
import './assets/styles/responsive.css'; // Don't forget the responsive styles!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);