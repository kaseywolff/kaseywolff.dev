import React from 'react';
import '../styles/home.scss';
// import images
import main from '../assets/images/home-geo.png';
import overlays from '../assets/images/geo-back.png';


function HomePage() {
  return(
    <div className='page'>
      <div className='container home'>
        <div id='geo-group'>
          <img src={main} alt='main image' id='mainPhoto' />
          <img src={overlays} alt='overlays' id='overlays' />
        </div>

        <div className='slogan-container'>
          <h1 id='slogan'>coding. creating. exploring.</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;