import React from 'react';

const ProjectUnit = (props) => (
  <div>
    <h3>{props.el.title}</h3>
    <p>{props.el.content}</p>
    <p>{props.el.url}</p>
    <p>{props.el.gitRepo}</p>
    {props.el.techs.map((el) => (`${el}, `))}
    <hr></hr>
  </div>
);

export default ProjectUnit;