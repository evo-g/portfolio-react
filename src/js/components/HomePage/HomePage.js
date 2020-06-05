import React, { useState, useCallback, useEffect } from 'react';
import { projects } from '../../data';
import styled from 'styled-components';

const HomeWrapper = styled.section`
  background-color: #E8EAF6;
  h2 {
    color: #40C4FF;
    width: 725px;
    padding: .7rem;
    margin-left: 18px;
  }
`;

// const projectHolder = projects.reverse().map(project => (
//   <div className="project" key={project.id}>
//     <a href={project.href} target='blank' alt={project.alt}>
//       <img src={project.img} alt={project.alt} />
//     </a>
//     <div className='project-info'>
//         <h3>{project.title}</h3>
//       <p>{project.description}</p>
//       <a href={project.href} target='blank' alt={project.alt}><span>Check it out</span></a>
//     </div>
//   </div>
// ));


function HomePage() {
  const [loader, setLoader] = useState(true);

  useEffect(()=> {
    setLoader(false);
  }, []);

  return (
    <HomeWrapper>
      <div className="row">
        <h2>Projects</h2>
        {
          projects.reverse().map(project => (
            <div className="project" key={project.id}>
              <div className='column'>
                {loader ? <div id='loader'></div> : <img src={project.img} alt={project.alt} />}
                <p className='tech-stack'><span>Tech Stack:</span> {project.stack}</p>
              </div>

              <div className='project-info'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className='color-gr' href={project.href} target='blank' alt={project.alt}><span>Check it out</span></a>
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
