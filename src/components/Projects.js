import React from 'react';
import dataProjects from '../data/dataProjects';
import ProjectUnit from './ProjectUnit'

export default class Projects extends React.Component {
  state = {
    dataProjects
  }
  render() {
    return (
      <div>
        Projects goes here
        {dataProjects.map((el, index) => (
          <ProjectUnit key={index} el={el} />
        ))}
      </div>
    )
  }
};