import React from 'react';
import dataProjects from '../data/dataProjects';
import ProjectUnit from './ProjectUnit'

const Projects = () => (
  <div className="projects section">
    <div className="title">
      <div className="title__image"></div>
      <h3 className="title__text">Projects</h3>
    </div>
    <div className="projects__content content-container">
      {dataProjects.map((el, index) => (
        <ProjectUnit key={index} el={el} />
      ))}
    </div>
  </div>
);

export default Projects;