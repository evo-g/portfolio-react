
import React from 'react';
import { Link } from 'react-router-dom';
import Self from '../../../images/self.jpg';
import './Welcome.css';


const Welcome = () => {
  return (
    <div className='card-row'>
      <div className='img-container'>
        <img src={Self} alt='Evodio Garcia' />
      </div>
      <div className='column'>
        <h1>Welcome! <strong>I am Evodio</strong>, a full stack web developer. Thanks for checking out my portfolio!</h1>
        <p>Feel free to call me <strong>Evo</strong> for short. I am a San Diego native, who is relatively new to the tech industry, but
          brings along serveral years of experience as an automotive mechanic. Also enjoy a good margarita every now and then! You can check out some projects below,
          or click on the link to find out more about my journey.
        </p>
        <Link to='/about'>Learn More</Link>
      </div>
    </div>
  )
};

export default Welcome;
