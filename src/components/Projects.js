import React from 'react';
import dataProjects from '../data/dataProjects';
import ProjectUnit from './ProjectUnit'

const Projects = () => (
  <div>
    Projects goes here
    {dataProjects.map((el, index) => (
      <ProjectUnit key={index} el={el} />
    ))}
  </div>
);

export default Projects;