import React, { useState, useCallback, useEffect } from 'react';
import Welcome from '../WelcomePage';
import { projects } from '../../data';
import { HomeWrapper } from './HomePage.styled';
import Loading from '../Loading';

function HomePage() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  // 

  return (
    <HomeWrapper>
      <Welcome />
      <h2>Projects</h2>
      <div className='row'>
        {
          projects.map(project => (
            <div className='project' key={project.id}>
              <h3>{project.title}</h3>
              {
                loader ?
                  <Loading />
                  :
                  <>
                    <a className='a-column' href={project.href} target='_blank' rel='noopener' alt={project.alt}>
                      <img src={project.img} alt={project.alt} />
                    </a>
                    <p className='tech-stack'><span>Tech Stack:</span> {project.stack}</p>
                    <div className='project-info'>
                      <details>
                        <summary>More info</summary>
                        <p>{project.description}</p>
                      </details>
                    <a className='color-gr' href={project.href} target='_blank' rel='noopener' alt={project.alt}>Check it out</a>
                    </div>
                  </>
              }
            </div>
          ))
        }
      </div>
      <h3>More Coming Soon</h3>
    </HomeWrapper>
  )
}

export default HomePage;
