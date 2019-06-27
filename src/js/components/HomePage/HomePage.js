import React from 'react';
import { projects } from '../../data';

const HomePage = () => {
  return (
    <div id='home'>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title"> Evodio Garcia | Portfolio</h1>
        </div>
      </div>
      <div className="site-section">
        <div className="section-header">
          <h2 className="text-center">Projects</h2>
          <div className="row-2">
            {
              projects.map(item => (
            <div className="item" key={item.id}>
              <a href={item.href} target='blank' alt={item.alt}><img src={item.img} /></a>
              <div className='item-in'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>

              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;

