import React from 'react';
import Footer from '../components/Footer';
import '../styles/map.scss';
// import images
// import background from '../assets/images/canyonlands-road.jpg';
import background from '../assets/images/joshuatree-stars.jpg';

function Map() {
  return(
    <div id='map'>
      <img src={background} alt='background image' id='bg-m' />

      
    </div>
  );
};

export default Map;