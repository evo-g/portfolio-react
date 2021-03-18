import React from 'react';
import Welcome from '../WelcomePage';
import Projects from '../Projects';
import { HomeWrapper } from './HomePage.styled';

function HomePage() {

  return (
    <HomeWrapper>
      <Welcome />
      <h2>Projects</h2>
      <div className='row'>
        <Projects />
      </div>
      <h3>More Coming Soon</h3>
    </HomeWrapper>
  )
}

export default HomePage;
