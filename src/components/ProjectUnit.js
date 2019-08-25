import React from 'react';
import { 
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

const ProjectUnit = (props) => (
  <div className="project-unit">
    <div>
      <h3 className="project-unit__title">
        {props.el.title}
      </h3>

      <div className="project-unit__links">
        <a 
          className="project-unit__icon"
          target="_blank" 
          rel="noopener noreferrer" 
          href={props.el.url}
        >
          <FaExternalLinkAlt />
        </a>
        {props.el.gitRepo && 
          <a 
            className="project-unit__icon"
            target="_blank" 
            rel="noopener noreferrer" 
            href={props.el.gitRepo}
          >
            <FaGithub />
          </a>
        }
      </div>
    </div>
    
    <p className="project-unit__content">
      {props.el.content}
    </p>

    <div className="project-unit__footer">
      {
        props.el.techs.map((el, index) => (
          <div 
            key={index} 
            className="project-unit__tech"
          >
            {el}
          </div>
        ))
      }
    </div>
  </div>
);

export default ProjectUnit;