// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';

// Import images
import slide1 from '../assets/images/hero-slide-1.jpg';
import slide2 from '../assets/images/hero-slide-2.jpg';
import slide3 from '../assets/images/hero-slide-3.jpg';

const images = [slide1, slide2, slide3];

const HeroSlider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="overlay"></div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default HeroSlider;