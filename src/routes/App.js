import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import About from "../components/Page/About";
import Contact from "../components/Page/Contact";
import Home from "../components/Page/Home";
import Projects from "../components/Page/Projects";
import CustomRoute from "./CustomRoute";
import NotFound from "../components/Page/NotFound";

const App = () => (
  <Router>
    <Switch>
      <CustomRoute path="/" exact component={Home} />
      <CustomRoute path="/about" exact component={About} />
      <CustomRoute path="/projects" exact component={Projects} />
      <CustomRoute path="/contact" exact component={Contact} />
      <CustomRoute path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
