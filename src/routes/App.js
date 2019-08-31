import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import About from '../components/Page/About';
import Contact from '../components/Page/Contact';
import Home from '../components/Page/Home';
import Projects from '../components/Page/Projects';
import CustomRoute from './CustomRoute';
import NotFound from '../components/Page/NotFound';

const App = () => (
  <Router>
    <CustomRoute path="/" exact component={Home} />
    <CustomRoute path="/about" exact component={About} />
    <CustomRoute path="/projects" exact component={Projects} />
    <CustomRoute path="/contact" exact component={Contact} />
    <CustomRoute path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Router>
);

export default App;