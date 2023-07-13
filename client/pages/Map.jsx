import React from 'react';
import Footer from '../components/Footer';
import '../styles/map.scss';
// import images
// import background from '../assets/images/canyonlands-road.jpg';
import background from '../assets/images/old-snowy-topo2.png';

function Map() {
  return(
    <div id='map'>
      <img src={background} alt='background image' id='bg-m' />

      <div id='resume'>
        <div id='current'>
          <div className='job-title'>Recoilize</div>
          <div className='job-description'>
            <p></p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Map;