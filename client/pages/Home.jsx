import React, { useState } from 'react';
import '../styles/home.scss';
// import components
import Loading from '../components/Loading';
// import images
import main from '../assets/images/home-geo.png';
import overlays from '../assets/images/geo-back.png';


function HomePage() {
  const [loaded, setLoaded] = useState(false);

  const handleContainerLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='page'>
      {!loaded && <Loading />}
      <div
        style={{ display: loaded ? 'flex' : 'none' }}
        className='container home'
        onLoad={handleContainerLoad}
      >
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
