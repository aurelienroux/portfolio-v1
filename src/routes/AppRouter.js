import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/HeaderHero';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Nav from './Nav';


const AppRouter = () => (
  <Router>
    <div>


    <Nav />

      <Route path="/" exact component={Header} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </div>
  </Router>
);

export default AppRouter;