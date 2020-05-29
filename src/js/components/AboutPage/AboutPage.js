import React from 'react';
import Timeline from '../Timeline/Timeline';




const AboutPage = () => {
  return (
    <div id="about" className="section-header about">
      <h2>About Me</h2>
      <p className="about-me">
        Hi, my name is Evodio Garcia! Thanks for checking out my portfolio. I’m an automotive mechanic turned 
        software developer, who went from breaking down cars to breaking down code. Down below is small
        timeline of my journey so far. 
      </p>
      <Timeline />
    </div>
  )
}

export default AboutPage;
