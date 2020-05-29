import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  .top-nav {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 1rem;
    list-style-type: none;
    justify-content: space-evenly;
    background:
    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
    background-color: #131313;
    background-size: 20px 20px;
  }

  .top-nav li {
    font-size: 1.1em;
    min-height: 50px;
    padding: 1rem;
    text-decoration: none;
  }
  
  .top-nav li a:visited {
    color: initial;
  }

  a {
    text-decoration: none;
  }

  .top-nav li {
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }

  .top-nav li a {
    color: #00a7e0 !important;
  }
  ul li a:hover {
    background: #444;
    padding: 10px;
    border-radius: 3px;
    transition: 0.3s ease all;
    white-space: nowrap;
`

function Navbar() {
  const [isShowing, setShowing] = useState(false);
  console.log(window.innerWidth)

  return (
    <header>
      <NavWrapper>
        <span className="navbar-toggle" id="js-navbar-toggle">
            <i className
            ="fas fa-bars"></i>
        </span>
        <ul className="top-nav">
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
            <a href="https://tinyurl.com/y7wt8w4r" target="blank">Resume</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </NavWrapper>
    </header>
  )
}

export default Navbar;

