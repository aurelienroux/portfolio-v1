import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found section content-container">
    <div className="title title--small">
      <h3 className="title__text">
        404
      </h3>
    </div>
    <h4 class="subtitle">It seems you got lost...</h4>
    <Link to="/">
      Back to homepage
    </Link>
  </div>
);

export default NotFound;