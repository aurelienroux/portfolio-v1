import React from 'react';

import projects from '../../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => (
  <div className="projects section">
    <div className="title">
      <div className="title__image"></div>
      <h3 className="title__text">Projects</h3>
    </div>
    <div className="projects__content content-container">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
);

const Project = ({ project }) => {
  const { content, pro, techs, title, url } = project

  return (
    <div className="project-unit">
      <div>
        <h3 className="project-unit__title">{title}</h3>

        <div className="project-unit__links">
          <a 
            className="project-unit__icon"
            href={url}
            rel="noopener noreferrer"
            target="_blank" 
          >
            {pro ? <FaExternalLinkAlt /> : <FaGithub />}
          </a>
        </div>
      </div>
      
      <p className="project-unit__content">{content}</p>

      <div className="project-unit__footer">
        {techs.map((tech, index) => (
          <div className="project-unit__tech" key={index} >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;