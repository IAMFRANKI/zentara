// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import CallToAction from '../components/CallToAction';

// Import hero image
import contactHero from '../assets/images/contact-hero.jpg';

const Contact = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--contact-hero-bg', `url(${contactHero})`);
  }, []);

  return (
    <div className="contact-page">
      <section className="hero-banner">
        <h1>Get In Touch With Us</h1>
      </section>

      <section className="section contact-details-section">
        <div className="container">
          <h2>We're Here to Help You</h2>
          <p>
            Reach out to Innovate & Build for inquiries, consultations, or partnership opportunities.
            Our team is ready to provide the expertise you need.
          </p>
          <div className="details-grid">
            <div className="contact-item">
              <div className="icon">📞</div>
              <h3>Phone</h3>
              <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              <p><a href="tel:+1987654321">(987) 654-3210</a></p>
            </div>
            <div className="contact-item">
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:info@innovatebuild.com">info@innovatebuild.com</a></p>
              <p><a href="mailto:support@innovatebuild.com">support@innovatebuild.com</a></p>
            </div>
            <div className="contact-item">
              <div className="icon">📍</div>
              <h3>Address</h3>
              <p>Innovate & Build HQ</p>
              <p>123 Innovation Drive, Suite 100</p>
              <p>Tech City, TB 10001, Country</p>
            </div>
            <div className="contact-item">
              <div className="icon">🕒</div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready for a Partnership?"
        description="Our team is eager to learn about your needs and provide bespoke solutions."
        buttonText="Schedule a Meeting"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Contact;