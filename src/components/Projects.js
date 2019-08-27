import React from 'react';

import projects from '../data/projects';
import Project from './Project';

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

export default Projects;