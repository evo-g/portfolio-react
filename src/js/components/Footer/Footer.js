import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <div className='site-section-inside-end' id='connect'>
    <div className='section-header-end'>
      <h2>Get in Touch With Me</h2>
      <div className='in-touch'>
        <a href='https://www.linkedin.com/in/evodio-garcia-57761669/' target='blank'>
          <img src={require('../../../images/linkedin.png')} alt='linkedin link' />
        </a>
        <a href='https://github.com/evo-g' target='blank'>
          <img src={require('../../../images/github.png')} alt='github link' />
        </a>
        <Link to='/contact'> 
          <img src={require('../../../images/contactMe.png')} alt='contact link' />
        </Link>
      </div>
    </div>
  </div>
    <div id='footer'>
      <a href='/'><img src={require('../../../images/profile.jpg')} alt='my avatar' /></a>
      <span>My Portfolio<br />&copy; 2018</span>
    </div>
    </div>
  )
}

export default Footer;
