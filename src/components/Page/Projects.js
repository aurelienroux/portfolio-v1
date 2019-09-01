import React from "react";

import projects from "../../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => (
  <div className="projects section">
    <div className="title">
      <div className="title__image"></div>
      <h3 className="title__text">Projects</h3>
    </div>
    <div className="projects__content content-container">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
);

const Project = ({ project }) => {
  const { content, techs, title, urlLive, urlGit } = project;

  return (
    <div className="project">
      <div>
        <h3 className="project__title">{title}</h3>

        <div className="project__links">
          {urlLive && (
            <a
              className="project__icon"
              target="_blank"
              rel="noopener noreferrer"
              href={urlLive}
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {urlGit && (
            <a
              className="project__icon"
              target="_blank"
              rel="noopener noreferrer"
              href={urlGit}
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>

      <p className="project__content">{content}</p>

      <div className="project__footer">
        {techs.map((tech, index) => (
          <div className="project__tech" key={index}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
