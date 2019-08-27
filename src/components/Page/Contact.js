import React from 'react';
import { FaCodepen, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import CV from '../../images/CV-AR.pdf';

const Contact = () => {
  return (
    <div className="contact section">
      <div className="title">
        <div className="title__image"></div>
        <h3 className="title__text">Contact</h3>
      </div>
      <div className="content-container">
        <p className="headline">
          An idea you want to share?<br /> 
          Just want to say hi?<br /> 
          Let's talk!
        </p>
        <div className="social__container">
          <Social FaIcon={FaLinkedin} link="https://www.linkedin.com/in/rouxaurelien/" />
          <Social FaIcon={FaInstagram} link="https://www.instagram.com/rxaure/"/>
          <Social FaIcon={FaCodepen} link="https://codepen.io/Aureroux"/>
          <Social FaIcon={FaGithub}  link="https://github.com/aurelienroux" />
        </div>
  
        <div className="buttons__container">
          <a className="button" href="mailto:aureroux13@gmail.com">
            Say hi
          </a>
          
          <a className="button" href={CV} rel="noopener noreferrer" target="_blank">
            Resume
          </a>
        </div>
        
      </div>
    </div>
  )
};

const Social = ({ FaIcon, href }) => {
  return (
    <div className="social" key={href}>
      <a className="social__link" href={href} rel="noopener noreferrer" target="_blank" >
        <FaIcon className="social__icon" />
      </a>
      <div className="social__line"></div>
    </div>
  )
};

export default Contact;