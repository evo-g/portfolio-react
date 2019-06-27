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
            <h4 className='text-center'>Tools I Use </h4>
            <p className='text-center '>JavaScript, Reactjs, Redux, Nodejs, JQuery, CSS, HTML, Bootstrap, MongoDB, MySQL,
              Redis, and recently React Native and Expo. Very proficent with git workflow and version control.
              Heroku and Now to deploy projects. Cypress and CircleCi for testing.
              Jira and Trello for agile workflow.
      Also socket.io is something new I am learning more about.</p>
          </div>

          <div className='site-section-inside'>
            <div className='service-box'>
              {
                services.reverse().map(imgs => (
                  <img key={imgs.id} src={imgs.img} />
                ))
              }
            </div>
          </div>

          <div className='site-section-inside'>
            <div className='site-section-inside-pic'>
              <img src={require('../../../images/education.png')} />
            </div>
            <h4 className='text-center'>Education</h4>
            <div className='education'>
              <p className='text-center'>Origin Code Academy</p>
              <p className='text-center'>Cuyamaca College</p>
              <p className='text-center'>Grossmont College</p>
              <p className='text-center'>Universal Technical Institute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage;
