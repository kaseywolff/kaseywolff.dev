import React from 'react';
import '../styles/home.scss';
import profile from '../assets/images/profile.jpg';

function About() {
  return(
    <div className='aboutPage'>
      <h1>About</h1>
      <img className='profilePhoto' src={profile} alt={'headshot'} />
      <div className='aboutInfo'>
        <p className='p1'>Hello!</p>

        <p className='p2'>I’m Kasey</p> 
        <p className='p3'>and I am a Software Engineer who loves tackling and solving complex problems. I am someone who approaches new things with a sense of curiosity, wonder, and a genuine desire to understand how things work.</p>

      </div>
    </div>
  );
};

export default About;