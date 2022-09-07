import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import Loading from '../Loading';
import GET_PROJECTS from '../../graphql/getProjects';

function Projects() {

  const { data: { projects = [] } = {}, loading, error } = useQuery(
    GET_PROJECTS,
    {
      fetchPolicy: 'network-only',
    }
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      {
        projects.map(project => (
          <div className='project' key={project.id}>
            <div className='info-container'>
              <h3>{project.name}</h3>
              <a className='color-gr' href={project.href} target='_blank' rel='noopener' alt={project.name}>Check it out</a>
            </div>
            <Fragment>
              <a className='a-column' href={project.href} target='_blank' rel='noopener' alt={project.name}>
                <img src={project.image.url} alt={project.name} loading='lazy' />
              </a>
              <p className='tech-stack'><span>Tech Stack:</span> {project.stack}</p>
              <div className='project-info'>
                <p>{project.description}</p>
              </div>
            </Fragment>
          </div> 
        ))
      }
    </Fragment>
  )
}

export default Projects;
