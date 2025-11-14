// src/pages/About.jsx
import React from 'react';
import CallToAction from '../components/CallToAction';

// Import hero image
import aboutHero from '../assets/images/about-hero.jpg';

const About = () => {
  // Use CSS custom property to set background image dynamically
  useEffect(() => {
    document.documentElement.style.setProperty('--about-hero-bg', `url(${aboutHero})`);
  }, []);

  return (
    <div className="about-page">
      <section className="hero-banner">
        <h1>About Innovate & Build</h1>
      </section>

      <section className="section vision-mission">
        <div className="container">
          <h2>Our Vision & Mission</h2>
          <p>
            We are driven by a passion for innovation and a commitment to excellence.
            Our goal is to be the leading partner for businesses seeking integrated
            solutions in construction and information technology.
          </p>
          <div className="grid">
            <div>
              <h3>Our Vision</h3>
              <p>
                To be recognized globally as the premier consulting firm that
                seamlessly integrates robust construction practices with cutting-edge
                IT solutions, empowering our clients to achieve sustainable growth and
                operational superiority in a rapidly evolving world.
              </p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>
                To deliver unparalleled expert advice, innovative strategies, and
                practical solutions in construction and IT. We commit to understanding
                our clients' unique needs, fostering collaboration, and consistently
                exceeding expectations through integrity, professionalism, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light team-section">
        <div className="container">
          <h2>Meet Our Expert Team</h2>
          <p>
            Our diverse team comprises seasoned engineers, project managers, IT architects,
            and strategists, all united by a common goal: your success.
          </p>
          <div style={{marginTop: '40px', color: 'var(--color-text-light)'}}>
            [Placeholder for Team Member Profiles / Images]
          </div>
        </div>
      </section>

      <CallToAction
        title="Partner with Experts Who Understand Your World"
        description="Let our combined expertise in construction and IT drive your next success story."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
};

export default About;