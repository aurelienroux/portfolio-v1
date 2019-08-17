import React from 'react';
import HeaderHero from './HeaderHero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import data from '../data/data';

export default class Portfolio extends React.Component {
  state = {
    data
  };
  render() {
    return (
      <div>
        <HeaderHero />
        <About />
        <Projects />
        <Contact />
      </div>
    )
  }
};