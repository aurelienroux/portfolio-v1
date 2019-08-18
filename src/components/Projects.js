import React from 'react';
import dataProjects from '../data/dataProjects';
import ProjectUnit from './ProjectUnit'

const Projects = () => (
  <div>
    {dataProjects.map((el, index) => (
      <ProjectUnit key={index} el={el} />
    ))}
    <hr/>
  </div>
);

export default Projects;