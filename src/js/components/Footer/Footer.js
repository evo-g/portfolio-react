import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #131313;
  background-size: 20px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #fff;
  padding: 2rem;
  height: 5rem;
  text-align: center;
  bottom: 0;
  img {
    display: flex;
    border-radius: 15px;
    height: 3.5rem;
    width: 3.5rem;
    margin: 1rem;
  }
`;

const Footer = () => {
  return (
    <React.Fragment>
      <section className='connect'>
        <div className='end'>
          <h2>Get in Touch With Me</h2>
        </div>
        <div className='in-touch'>
          <a href='https://www.linkedin.com/in/evodio-garcia-57761669/' target='blank'>
            <img className='bigger' src={require('../../../images/linkedin.png')} alt='linkedin link' />
          </a>
          <a href='https://github.com/evo-g' target='blank'>
            <img src={require('../../../images/github.png')} alt='github link' />
          </a>
          <Link to='/contact'>
            <img src={require('../../../images/contactMe.png')} alt='contact link' />
          </Link>
        </div>
      </section>
      <FooterWrapper>
          <a href='/'><img src={require('../../../images/profile.jpg')} alt='my avatar' /></a>
          <span>My Portfolio<br />&copy; 2018</span>
      </FooterWrapper>
    </React.Fragment>
  )
}

export default Footer;
