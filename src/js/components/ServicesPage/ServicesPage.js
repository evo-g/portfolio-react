import React from 'react';
import { services } from '../../data';

const ServicePage = () => {
  return (
    <div>
      <div id='services' className='site-section'>

        <div className='section-header'>
          <h2> Services </h2>
        </div>
        <div className='row'>
          <div className='site-section-inside'>
            <div className='site-section-inside-pic'>
              <img src={require('../../../images/js.png')} />
            </div>
            <h2>Tools I Use</h2>
            <p className='one'>JavaScript, Reactjs, Redux, Nodejs, JQuery, CSS3, HTML5, Bootstrap, MongoDB, MySQL,
              Redis, and recently React Native and Expo. Very proficent with git workflow and version control.
              Heroku, Now, and Netlify to deploy projects. Cypress and CircleCi for testing. Some Webpack experience and Parcel which I used for this project.
              Jira and Trello for agile workflow. Also socket.io is something new I am learning more about.
            </p>
          </div>

          <div className='site-section-inside'>
            <div className='service-box'>
              {
                services.reverse().map(imgs => (
                  <img key={imgs.id} src={imgs.img} alt={imgs.alt} />
                ))
              }
            </div>
          </div>

          <div className='site-section-inside'>
            <div className='site-section-inside-pic'>
              <img src={require('../../../images/education.png')} />
            </div>
            <h2>Education</h2>
            <div className='education'>
              <p className='two'>Origin Code Academy</p>
              <p className='two'>Cuyamaca College</p>
              <p className='two'>Grossmont College</p>
              <p className='two'>Universal Technical Institute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage;
