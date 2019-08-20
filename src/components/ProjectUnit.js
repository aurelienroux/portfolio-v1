import React from 'react';

const ProjectUnit = (props) => (
  <div className="project-unit">
    <h3 className="project-unit__title">{props.el.title}</h3>
    <p>{props.el.content}</p>
    <p>{props.el.url}</p>
    <p>{props.el.gitRepo}</p>
    {props.el.techs.map((el) => (`${el}, `))}
  </div>
);

export default ProjectUnit;