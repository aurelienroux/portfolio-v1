import React from 'react';
import { MdCopyright } from 'react-icons/md';

const Footer = () => (
  <div className="footer">
    Designed and built by Aurelien Roux &nbsp; <MdCopyright /> &nbsp; | &nbsp; {new Date().getFullYear()}
  </div>
);

export default Footer;