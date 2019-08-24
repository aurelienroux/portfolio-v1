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
        <svg className="logo" viewBox="0 0 51 59">
          <path d="M0.5,0.909655953 L50.5,29.7771694 L39.594,36.073656 L36.6878274,34.4283101 L11.6169922,49.0668487 L11.616,52.226656 L0.5,58.6446829 L0.5,0.909655953 Z M11.3187135,19.6482173 L11.3187135,39.9061215 L28.8625731,29.7771694 L11.3187135,19.6482173 Z" id="Combined-Shape"></path>
        </svg>
      </div>
      
      <div className="nav__links">
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/about">
          <FaStreetView />
        </Link>
        <Link to="/projects">
          <FaFolder />
        </Link>
        <Link to="/contact">
          <FaEnvelope />
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