import React from 'react'
import { 
  FaEnvelope, 
  FaFolder, 
  FaHome, 
  FaStreetView,
  FaLinkedin, 
  FaInstagram, 
  FaCodepen, 
  FaGithub
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    
    <div className="nav__top">
      <div className="nav__logo">
        logo
      </div>
      <div className="nav__links">
        <Link to="/">
          <FaHome className="icon"/>
        </Link>
        <Link to="/about">
          <FaStreetView className="icon"/>
        </Link>
        <Link to="/projects">
          <FaFolder className="icon"/>
        </Link>
        <Link to="/contact">
          <FaEnvelope className="icon"/>
        </Link>
        <div className="nav__links__line"></div>
      </div>
    </div>

    <div className="nav__right">
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
      <div className="nav__right__line"></div>
    </div>

  </div>
);

export default Nav;