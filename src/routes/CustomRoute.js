import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const CustomRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    <div>
      <Header />
      <Component {...props} />
      <Footer />
    </div>
  )} />
);

export default CustomRoute;