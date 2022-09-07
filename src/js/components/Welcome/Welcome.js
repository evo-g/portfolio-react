
import React from 'react';
import { Link } from 'react-router-dom';
import Self from '../../../images/self.jpg';
import './Welcome.css';


const Welcome = () => {
  return (
    <div className="card">
      <div className="card-child">
        <img src={Self} alt="Evodio Garcia" />
      </div>
      <div className="card-child">
        <h1>Hi! <strong>I am Evodio</strong>, a full stack web developer. Thanks for checking out my portfolio!</h1>
        <p>Feel free to call me <strong>Evo</strong> for short. I am a San Diego native. I have been in tech for about 4 years hands on and two years professionally, along with
        several years of experience as an automotive mechanic. You can check out some projects below,
        or click on the link to find out more about my journey.
        </p>
        <Link to="/about">Learn More</Link>
      </div>
    </div>
  )
};

export default Welcome;

// fix the blocky button change the layout possibly maybe use a different image