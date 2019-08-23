import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../components/HeaderHero'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Header</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
    
        </ul>
      </nav>

      <Route path="/" exact component={Header} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </div>
  </Router>
);

export default AppRouter;