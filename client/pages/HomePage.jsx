import React from 'react';
import '../styles/home.scss';
// import coverPhoto from '../assets/images/webCover.png';
import background from '../assets/images/background-cover.jpg';
import main from '../assets/images/main-cover.png';
import overlay from '../assets/images/overlay.png';


function HomePage() {
  return(
    <div className='homePage'>
      {/* <img src={coverPhoto} atl={'cover photo'} className='coverPhoto' /> */}
      <div className='cover'>

        <div className='geoGroup'>
          <div className='mainPhoto'>
            <img src={main} alt={'main photo'} />
          </div>
        
          <div className='overlays'>
            <img src={overlay} alt={'overlay right'} className='overlayL' />
            <img src={overlay} alt={'overlay right'} className='overlayR' />
          </div>
        </div>

      </div>
        <img src={background} alt='background photo' className='backgroundPhoto' />

      <h1>Home!</h1>
    </div>
  );
};

export default HomePage;