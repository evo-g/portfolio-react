import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="main-navigation">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://tinyurl.com/y7wt8w4r" target="blank">Resume</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;

