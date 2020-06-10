import React, { useState, useCallback, useEffect } from 'react';
import { projects } from '../../data';
import styled from 'styled-components';

const HomeWrapper = styled.section`
  background-color: #CFD8DC;
  button {
    color: #00a7e0;
    padding: 2px 4px;
    margin-left: 5px;
  }
  h2 {
    color: #40C4FF;
    width: 725px;
    padding: .7rem;
    margin-left: 18px;
  }
`;

function HomePage() {
  const [loader, setLoader] = useState(true);
  // const [dark, setDark] = useState(false);

  // const themeStyles = {
  //   backgroundColor: dark ? '#212121' : '#F5F5F5'
  // };


  useEffect(()=> {
    setLoader(false);
  }, []);

  return (
    <HomeWrapper>
      {/* <button onClick={() => setDark(prevDark => !prevDark)}> Change Theme</button> */}
      <div className="row">
        <h2>Projects</h2>
        {
          projects.map(project => (
            <div className="project" key={project.id}>
              <div className='column'>
                {loader ? <div id='loader'></div> : <a className='a-column' href={project.href} target='blank' alt={project.alt}><img src={project.img} alt={project.alt} /></a>}
                <p className='tech-stack'><span>Tech Stack:</span> {project.stack}</p>
              </div>

              <div className='project-info'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className='color-gr' href={project.href} target='blank' alt={project.alt}>Check it out</a>
              </div>
            </div>
          ))
        }
        <h2>More Coming Soon</h2>
      </div>
    </HomeWrapper>
  )
}

export default HomePage;
