import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../../../images/profile.jpg';

const FooterWrapper = styled.footer`
  background-color: #131313;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #fff;
  padding: 2rem;
  text-align: center;
  bottom: 0;
  img {
    display: flex;
    border-radius: 15px;
    height: 3.5rem;
    width: 3.5rem;
    margin: 1rem;
  }
  .column-break {
    display: flex;
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <Fragment>
      <section className='connect'>
        <div className='end'>
          <h3>Get in Touch With Me</h3>
        </div>
        <div className='in-touch'>
          <a href='https://www.linkedin.com/in/evodio-garcia-57761669/' target='_blank' rel='noopener' alt='personal linkedin'>
            <i className="fab fa-linkedin icon"></i>
          </a>
          <a href='https://github.com/evo-g' target='_blank' rel='noopener' alt='personal github link'>
            <i className="fab fa-github-square icon"></i>
          </a>
          <Link to='/contact' alt='contact page'>
            <i className="far fa-envelope icon"></i>
          </Link>
        </div>
      </section>
      <FooterWrapper>
        <a href='/'><img src={Profile} alt='my avatar/home page' /></a>
        <div className='column-break'>
          <span>My Portfolio</span>
          <span>&copy; 2018</span>
        </div>
      </FooterWrapper>
    </Fragment>
  )
}

export default Footer;
