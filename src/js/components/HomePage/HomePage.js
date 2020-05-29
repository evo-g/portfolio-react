import React, { useState, useCallback, useEffect } from 'react';
import { projects } from '../../data';
import styled from 'styled-components';

const HomeWrapper = styled.section`
  background-color: #E8EAF6;
  h3 {
    color: #40C4FF;
    text-align: center;
  }
`


function HomePage() {
  return (
    <HomeWrapper>
      <h3>Projects</h3>
      <div className="row">
        {
          projects.reverse().map(project => (
            <div className="project" key={project.id}>
              <img src={project.img} alt={project.alt} />
              <div className='project-info'>
                  <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.href} target='blank' alt={project.alt}><span>Check it out</span></a>
              </div>
            </div>
          ))
        }
      </div>
    </HomeWrapper>
  )
}

export default HomePage;
