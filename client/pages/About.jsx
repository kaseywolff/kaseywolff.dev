import React from 'react';
import '../styles/about.scss';
// import images
import background from '../assets/images/goat-rocks-bg.jpg';
import profile from '../assets/images/headshot-hex.png';

function About() {
  return(
    <div className='aboutPage'>

      <img src={background} alt='background image' className='backgroundPhoto-a' />

      <div className='scrollDiv-a'>
        <img className='profilePhoto' src={profile} alt={'headshot'} />


        {/* <div className='text-a'> */}
          <div className='title-a'>About</div>
          <div className='aboutInfo'>
            <p className='p1'>Hello! I'm Kasey.</p>

            <p className='p3'>I am a Software Engineer who loves tackling and solving complex problems. I am someone who approaches new things with a sense of curiosity, wonder, and a genuine desire to understand how things work.</p>
          </div>
        {/* </div> */}
      </div>

    </div>
  );
};

export default About;