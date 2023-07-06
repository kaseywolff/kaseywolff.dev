import React from 'react';
import '../styles/backpack.scss';
// import images
import background from '../assets/images/backpack.jpg'


function Backpack() {
  return(
    <div className='backpack'>
      <img src={background} alt='background image' className='bg-b' />

      <div className='scrollDiv-b'>
        {/* <h1>Tools and </h1> */}
        <div className='project-container'>
          <h2>Projects</h2>

        </div>

        <div className='techStack-container'>
          <h3>Tech Stack</h3>
        </div>
      </div>
    </div>
  );
};

export default Backpack;