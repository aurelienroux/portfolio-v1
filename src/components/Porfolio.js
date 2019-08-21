import React from 'react';
import HeaderHero from './HeaderHero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Portfolio = () => (
  <div className="content-container">
    <HeaderHero />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default Portfolio;