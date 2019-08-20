import React from 'react';
import { FaReact } from 'react-icons/fa';
import { DiNodejsSmall } from 'react-icons/di';

const HeaderHero = () => (
  <div className="header">
    <div className="content-container">
      <div className="header__content">
        <p className="header__greetings">Hello, I'm</p>
        <h1 className="header__title">Aurelien Roux</h1>
        <h2 className="header__sub">Building things for the web</h2>
        <p className="header__intro">
          I'm a Front-End developer based in Montreal, <FaReact />  <DiNodejsSmall />
          who likes to create engaging websites and amazing web applications
        </p>
      </div>
    </div>
  </div>
);

export default HeaderHero;