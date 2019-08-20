import React from 'react';
import dataProjects from '../data/dataProjects';
import ProjectUnit from './ProjectUnit'

const Projects = () => (
  <div className="projects">
    <div className="content-container">
      <h3>Projects</h3>
      <div className="projects__content">
        {dataProjects.map((el, index) => (
          <ProjectUnit key={index} el={el} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;