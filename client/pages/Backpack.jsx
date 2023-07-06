import React from 'react';
import '../styles/backpack.scss';
// import images
import background from '../assets/images/backpack.jpg'


function Backpack() {
  return(
    <div className='backpack'>
      <img src={background} alt='background image' className='bg-b' />

      <div className='scrollDiv-b'>
        <h1 className='title-b'>Backpack</h1>
          <p>Tech stack and projects I've launched or am working on.</p>
        <div className='project-container'>
          <h2 className='title-proj'>Projects</h2>

        </div>

        <div className='techStack-container'>
          <h2 className='title-ts'>Tech Stack</h2>
        </div>
      </div>
    </div>
  );
};

export default Backpack;