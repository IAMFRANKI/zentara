// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} /> {/* Image source is passed directly */}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="view-project-link" target="_blank" rel="noopener noreferrer">
          View Project Details
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;