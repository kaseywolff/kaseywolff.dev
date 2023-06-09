import React from 'react';
import '../styles/home.scss';
// import images
import background from '../assets/images/banff-maligne-lake.jpg';
import main from '../assets/images/main-cover.png';
import overlays from '../assets/images/geo-back.png';
// import footer
import Footer from '../components/Footer'



function HomePage() {
  return(
    <div className='homePage'>

        <img src={background} alt='background image' className='backgroundPhoto' />

      <div className='scrollDiv'>
        <div id='geoGroup'>
          <img src={main} alt='main image' id='mainPhoto' />
          <img src={overlays} alt='overlays' id='overlays' />
        </div>

        <div className='text'>
          <h1 id='slogan'>Coding. Creating. Exploring.</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;