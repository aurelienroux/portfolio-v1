import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'typeface-roboto';
import 'typeface-roboto-condensed';
import 'typeface-montserrat';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import AppRouter from './routes/AppRouter';

ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<AppRouter />, document.getElementById('Main'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
