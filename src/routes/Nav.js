import React from 'react'
import { 
  FaEnvelope, 
  FaFolder, 
  FaHome, 
  FaStreetView
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <div className="navigation">
      <Link to="/">
        <FaHome className="icon"/>
      </Link>
      <Link to="/about">
        <FaStreetView className="icon"/>
      </Link>
      <Link to="/projects">
        <FaFolder className="icon"/>
      </Link>
      <Link to="/contact">
        <FaEnvelope className="icon"/>
      </Link>
    </div>
  </div>
);

export default Nav;