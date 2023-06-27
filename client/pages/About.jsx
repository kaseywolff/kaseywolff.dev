import React from 'react';
import profile from '../assets/DSC04609.jpg';

function About() {
  return(
    <div className='aboutPage'>
      <h1>About!</h1>
      <img src={profile} alt={'headshot'} />
    </div>
  );
};

export default About;