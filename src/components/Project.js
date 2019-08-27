import React from 'react';
import { 
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

const Project = ({ project }) => {
  const { content, pro, techs, title, url } = project

  return (
    <div className="project-unit">
      <div>
        <h3 className="project-unit__title">{title}</h3>

        <div className="project-unit__links">
          <a 
            className="project-unit__icon"
            href={url}
            target="_blank" 
            rel="noopener noreferrer" 
          >
            {pro ? <FaExternalLinkAlt /> : <FaGithub />}
          </a>
        </div>
      </div>
      
      <p className="project-unit__content">{content}</p>

      <div className="project-unit__footer">
        {techs.map((tech, index) => (
          <div className="project-unit__tech" key={index} >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;