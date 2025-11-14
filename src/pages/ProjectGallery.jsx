// src/pages/ProjectGallery.jsx
import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import CallToAction from '../components/CallToAction';

// Import project images
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
import project5 from '../assets/images/project-5.jpg';
import project6 from '../assets/images/project-6.jpg';

// Import hero image
import galleryHero from '../assets/images/gallery-hero.jpg';

const projects = [
  {
    image: project1,
    title: 'Modern Office Complex Construction',
    description: 'Managed the end-to-end construction of a 10-story, LEED-certified office building, delivered ahead of schedule and under budget.',
    link: '#',
  },
  {
    image: project2,
    title: 'Enterprise Cloud Migration',
    description: 'Successfully migrated a large enterprise from on-premise servers to a fully managed Azure cloud environment, enhancing scalability and security.',
    link: '#',
  },
  {
    image: project3,
    title: 'Smart City Infrastructure Planning',
    description: 'Developed a comprehensive IT infrastructure plan for a new smart city development, including IoT, data centers, and network backbone.',
    link: '#',
  },
  {
    image: project4,
    title: 'Retail Store Rollout Program',
    description: 'Oversaw the construction and IT setup for 50 new retail outlets nationwide, ensuring consistent branding and operational readiness.',
    link: '#',
  },
  {
    image: project5,
    title: 'Custom CRM Development',
    description: 'Designed and developed a bespoke CRM system for a manufacturing client, streamlining sales processes and improving customer relations.',
    link: '#',
  },
  {
    image: project6,
    title: 'Historical Building Restoration',
    description: 'Provided construction consulting for the delicate restoration of a landmark historical building, blending modern techniques with preservation.',
    link: '#',
  },
];

const ProjectGallery = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--gallery-hero-bg', `url(${galleryHero})`);
  }, []);

  return (
    <div className="project-gallery-page">
      <section className="hero-banner">
        <h1>Our Portfolio of Success</h1>
      </section>

      <section className="section">
        <div className="container">
          <h2>Showcasing Our Work</h2>
          <p>
            Explore a selection of our successful projects where we've applied our
            expertise in construction and IT consulting to deliver outstanding results for our clients.
          </p>
          <div className="gallery-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Have a Project in Mind?"
        description="Whether it's a building or a digital solution, we're ready to collaborate."
        buttonText="Discuss Your Project"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ProjectGallery;