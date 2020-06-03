import React, { useState, useCallback, useEffect } from 'react';
import { projects } from '../../data';
import styled from 'styled-components';

const HomeWrapper = styled.section`
  background-color: #E8EAF6;
  h3 {
    color: #40C4FF;
    width: 725px;
    padding: .5rem;
  }
`;

const projectHolder = projects.reverse().map(project => (
  <div className="project" key={project.id}>
    <a href={project.href} target='blank' alt={project.alt}>
      <img src={project.img} alt={project.alt} />
    </a>
    <div className='project-info'>
        <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.href} target='blank' alt={project.alt}><span>Check it out</span></a>
    </div>
  </div>
));


function HomePage() {
  return (
    <HomeWrapper>
      <div className="row">
      <h3>Projects</h3>
        {projectHolder}
      <h3>More Coming Soon</h3>
      </div>
    </HomeWrapper>
  )
}

export default HomePage;
