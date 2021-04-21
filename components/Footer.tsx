import { LocationMarkerIcon } from '@heroicons/react/outline';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <span>
        <LocationMarkerIcon /> India | English <a href="#">官话</a>
        <a href="#">español</a>
        <a href="#">عربى</a>
        <a href="#">More...</a>
      </span>
      <span className="fright">
        <a href="#">Privacy</a>
        <a href="#">T&C</a>
        <a href="#">About</a>
      </span>
    </footer>
  );
};

export default Footer;
