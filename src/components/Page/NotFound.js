import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found section">
    <div className="title title--small">
      <div className="title__image"></div>
      <h3 className="title__text">404</h3>
    </div>
    <div className="content-container">
      <h4 class="subtitle">It seems you got lost...</h4>
      <Link to="/">Back to homepage</Link>
    </div>
  </div>
);

export default NotFound;
