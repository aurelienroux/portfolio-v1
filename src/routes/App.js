import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Layout/HeaderHero';
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';
import About from '../components/Page/About';
import Contact from '../components/Page/Contact';
import Projects from '../components/Page/Projects';

const App = () => (
  <Router>
    <Nav />
    <Route path="/" exact component={Header} />
    <Route path="/about" exact component={About} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />
    <Footer />
  </Router>
);

export default App;