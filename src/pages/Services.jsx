// src/pages/Services.jsx
import React, { useEffect } from 'react';
import CallToAction from '../components/CallToAction';

// Import hero image
import servicesHero from '../assets/images/services-hero.jpg';

const Services = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--services-hero-bg', `url(${servicesHero})`);
  }, []);

  return (
    <div className="services-page">
      <section className="hero-banner">
        <h1>Our Integrated Services</h1>
      </section>

      <section className="section services-intro">
        <div className="container">
          <h2>Holistic Solutions for Modern Businesses</h2>
          <p>
            Innovate & Build offers a comprehensive suite of consulting services
            tailored to the unique demands of both the construction industry
            and the evolving IT landscape. We don't just solve problems; we
            create opportunities for growth and efficiency.
          </p>
        </div>
      </section>

      <section className="section detailed-services-section bg-light">
        <div className="container">
          <div className="detailed-services-grid">
            <div className="service-detail-item">
              <h3>Construction Consulting</h3>
              <p>
                Our construction consulting services help clients navigate complex projects,
                optimize resources, and achieve successful outcomes.
              </p>
              <ul>
                <li>Project Feasibility & Planning</li>
                <li>Cost Management & Budgeting</li>
                <li>Risk Assessment & Mitigation</li>
                <li>Contract Administration</li>
                <li>Construction Management & Oversight</li>
                <li>Sustainability & Green Building Advisory</li>
              </ul>
            </div>
            <div className="service-detail-item">
              <h3>IT Consulting & Digital Transformation</h3>
              <p>
                Unlock your business's full digital potential with our strategic IT guidance
                and implementation support.
              </p>
              <ul>
                <li>IT Strategy & Roadmap Development</li>
                <li>Cloud Solutions (Azure, AWS, Google Cloud)</li>
                <li>Cybersecurity & Data Protection</li>
                <li>Network Infrastructure Design</li>
                <li>Custom Software Development</li>
                <li>System Integration & Optimization</li>
                <li>AI & Automation Advisory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Discover How We Can Elevate Your Projects"
        description="From groundbreaking construction to cutting-edge digital infrastructure, we're here to help."
        buttonText="Request a Detailed Proposal"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Services;