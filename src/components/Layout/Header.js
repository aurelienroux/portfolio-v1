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

const Header = () => (
  <div className="header">
    <div className="header__top">

      <div className="header__logo">
        <Link  to="/">
          <svg className="logo" viewBox="0 0 51 59">
            <path d="M0.5,0.909655953 L50.5,29.7771694 L39.594,36.073656 L36.6878274,34.4283101 L11.6169922,49.0668487 L11.616,52.226656 L0.5,58.6446829 L0.5,0.909655953 Z M11.3187135,19.6482173 L11.3187135,39.9061215 L28.8625731,29.7771694 L11.3187135,19.6482173 Z" id="Combined-Shape"></path>
          </svg>
        </Link>
      </div>
      
      <div className="header__links">
        <NavRouteLink FaIcon={FaHome} to="/" />
        <NavRouteLink FaIcon={FaStreetView} to="/about" />
        <NavRouteLink FaIcon={FaFolder} to="/projects" />
        <NavRouteLink FaIcon={FaEnvelope} to="/contact" />

        <div className="header__links__line"></div>
      </div>
    </div>

    <div className="header__right">
      <NavBlankLink FaIcon={FaLinkedin} href="https://www.linkedin.com/in/rouxaurelien/" />
      <NavBlankLink FaIcon={FaInstagram} href="https://www.instagram.com/rxaure/" />
      <NavBlankLink FaIcon={FaCodepen} href="https://codepen.io/Aureroux" />
      <NavBlankLink FaIcon={FaGithub} href="https://github.com/aurelienroux" />

      <div className="header__right__line"></div>
    </div>

  </div>
);

const NavRouteLink = ({ FaIcon, to }) => (
  <Link className="icon" to={to}>
    <FaIcon />
  </Link>
);

const NavBlankLink = ({ FaIcon, href }) => (
  <a className="icon" target="_blank" rel="noopener noreferrer" href={href}>
    <FaIcon className="social-icon" />
  </a>
);

export default Header;