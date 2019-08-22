import React from 'react';
import { 
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

const ProjectUnit = (props) => (
  <div className="project-unit">
    <h3 className="project-unit__title">{props.el.title}</h3>
    <a target="_blank" rel="noopener noreferrer" href={props.el.url}>
      <FaExternalLinkAlt />
    </a>
    {props.el.gitRepo && 
      <a target="_blank" rel="noopener noreferrer" href={props.el.gitRepo}>
        <FaGithub />
      </a>
    }
    <p>{props.el.content}</p>
    {props.el.techs.map((el) => (`${el}, `))}
  </div>
);

export default ProjectUnit;