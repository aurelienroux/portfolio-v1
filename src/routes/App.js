import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import About from '../components/Page/About';
import Contact from '../components/Page/Contact';
import Home from '../components/Page/Home';
import Projects from '../components/Page/Projects';

const App = () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />
    <Footer />
  </Router>
);

export default App;