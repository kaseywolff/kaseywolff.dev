import React from 'react';
import '../styles/home.scss';
// import images
// import background from '../assets/images/joshua-tree.jpg';
import main from '../assets/images/home-geo.png';
import overlays from '../assets/images/geo-back.png';
// import footer
import Footer from '../components/Footer'



function HomePage() {
  return(
    <div className='homePage'>
      <div className='scrollDiv'>
        <div id='geoGroup'>
          <img src={main} alt='main image' id='mainPhoto' />
          <img src={overlays} alt='overlays' id='overlays' />
        </div>

        <div className='text'>
          <h1 id='slogan'>coding. creating. exploring.</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;