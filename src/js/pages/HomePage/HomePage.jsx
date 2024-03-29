import React from 'react';
import Welcome from '../../components/Welcome';
import Projects from '../../components/Projects';
import './HomePage.css';

function HomePage() {

  return (
    <section className="wrapper" id="home">
      <Welcome />
      <h2>Projects</h2>
      <div className='grid-row projects-section'>
        <Projects />
      </div>
      <h3>More Coming Soon</h3>
    </section>
  )
}

export default HomePage;

