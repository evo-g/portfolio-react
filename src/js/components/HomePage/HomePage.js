import React, { useState, useCallback, useEffect } from 'react';
import Welcome from '../WelcomePage';
import Projects from '../Projects';
// import { useQuery } from '@apollo/client';
// import Loading from '../Loading';
// import { projects } from '../../data';
import { HomeWrapper } from './HomePage.styled';

function HomePage() {
  // const [loader, setLoader] = useState(true);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1500);
  // }, []);

  // 

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
