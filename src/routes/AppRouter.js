import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../components/Page/About';
import Contact from '../components/Page/Contact';
import Home from '../components/Page/Home';
import Projects from '../components/Page/Projects';
import CustomRoute from './CustomRoute';

const App = () => (
  <Router>
    <CustomRoute path="/" exact component={Home} />
    <CustomRoute path="/about" exact component={About} />
    <CustomRoute path="/projects" exact component={Projects} />
    <CustomRoute path="/contact" exact component={Contact} />
  </Router>
);

export default App;