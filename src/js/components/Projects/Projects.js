import React from 'react';
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

  console.log({projects});
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {
        projects.map(project => (
          <div className='project' key={project.id}>
            <div className='info-container'>
              <h3>{project.name}</h3>
              <a className='color-gr' href={project?.href} target='_blank' rel='noopener' alt={project.name}>Check it out</a>
            </div>
            <>
              <a className='a-column' href={project?.href} target='_blank' rel='noopener' alt={project.name}>
                <img src={project.image?.url} alt={project.alt} />
              </a>
              <p className='tech-stack'><span>Tech Stack:</span> {project.stack}</p>
              <div className='project-info'>
                <p>{project.description}</p>
              </div>
            </>
          </div>
        ))
      }
    </>
  )
}

export default Projects;
