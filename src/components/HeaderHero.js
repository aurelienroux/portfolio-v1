import React from 'react';
import Nav from '../routes/Nav';

const HeaderHero = () => (
  <div className="header section content-container">
    <Nav />
    <p className="header__greetings">Hello, I'm</p>
    <h1 className="header__title">Aurelien Roux</h1>
    <h2 className="header__sub">Building things for the web</h2>
    <p className="header__intro">
      I'm a Front-End developer based in Montreal,
      who likes to create engaging websites and amazing web applications
    </p>
  </div>
);

export default HeaderHero;