import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../components/Page/About';
import Contact from '../components/Page/Contact';
import Home from '../components/Page/Home';
import Projects from '../components/Page/Projects';

const Router = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />
  </BrowserRouter>
);

export default Router;
