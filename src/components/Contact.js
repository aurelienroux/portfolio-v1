import React from 'react';
import { 
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaGithub
} from 'react-icons/fa';

const Contact = () => (
  <div className="contact section content-container">
    <div className="title">
      <div className="title__image"></div>
      <h3 className="title__text">Contact</h3>
    </div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rouxaurelien/">
        <FaLinkedin className="social-icon" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rxaure/">
        <FaInstagram className="social-icon" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/Aureroux">
        <FaCodepen className="social-icon" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/aurelienroux">
        <FaGithub className="social-icon" />
      </a>
    </div>
    <a 
      className="button"
      href="mailto:aureroux13@gmail.com"
    >
      Keep in touch
    </a>
  </div>
);

export default Contact;