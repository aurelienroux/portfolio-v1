import React from 'react';
import { 
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaGithub
} from 'react-icons/fa';
import CV from '../images/CV-AR.pdf';

const Contact = () => (
  <div className="contact section">
    <div className="title">
      <div className="title__image"></div>
      <h3 className="title__text">Contact</h3>
    </div>
    <div className="content-container">
      <p className="headline">
        An idea you want to share ? <br /> 
        Just want to say hi ? <br /> 
        Let's talk!
      </p>
      <div className="social__container">
        <div className="social">
          <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rouxaurelien/">
            <FaLinkedin className="social__icon" />
          </a>
          <div className="social__line"></div>
        </div>
        
        <div className="social">
          <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rxaure/">
            <FaInstagram className="social__icon" />
          </a>
          <div className="social__line"></div>
        </div>

        <div className="social">
          <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://codepen.io/Aureroux">
            <FaCodepen className="social__icon" />
          </a>
          <div className="social__line"></div>
        </div>

        <div className="social">
          <a className="social__link" target="_blank" rel="noopener noreferrer" href="https://github.com/aurelienroux">
            <FaGithub className="social__icon" />
          </a>
          <div className="social__line"></div>
        </div>
      </div>

      <div className="buttons__container">
        <a 
          className="button"
          href="mailto:aureroux13@gmail.com"
        >
          Say hi
        </a>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href={CV}
        >
          Resume
        </a>
      </div>
      
    </div>
  </div>
);

export default Contact;