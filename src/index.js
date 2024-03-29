import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'typeface-roboto';
import 'typeface-roboto-condensed';
import 'typeface-montserrat';
import './styles/styles.scss';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
