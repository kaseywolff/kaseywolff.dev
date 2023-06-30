import React from 'react';
import '../styles/home.scss';
// import coverPhoto from '../assets/images/webCover.png';
import background from '../assets/images/background-cover.jpg';
import main from '../assets/images/main-cover.png';
import overlay from '../assets/images/overlay.png';
import overlays from '../assets/images/geo-back.png';


// function HomePage() {
//   return(
//     <div className='homePage'>
//       {/* <img src={coverPhoto} atl={'cover photo'} className='coverPhoto' /> */}
//       {/* <div className='cover'> */}

//         <div className='geoGroup'>
//           {/* <div className='mainPhoto'> */}
//           {/* </div> */}
          
//           <img src={main} alt={'main photo'} className='mainPhoto' />
        
//           <div className='overlays'>
//             <img src={overlay} alt={'overlay right'} className='overlayL' />
//             <img src={overlay} alt={'overlay right'} className='overlayR' />
//           </div>

//         </div>

            
//       {/* </div> */}
//         <img src={background} alt='background photo' className='backgroundPhoto' />

//       <div className='homeHeader'>Coding. Creating. Exploring.</div>
//     </div>
//   );
// };

// export default HomePage;


function HomePage() {
  return(
    <div className='homePage'>

      {/* <div className='backgroundPhoto'> */}
        <img src={background} alt='background image' className='backgroundPhoto' />
      {/* </div> */}

      <div className='scrollDiv'>
        <div id='geoGroup'>
          {/* <div id='mainPhoto'> */}
            <img src={main} alt='main image' id='mainPhoto' />
          {/* </div> */}
          {/* <div id='overlays'> */}
            <img src={overlays} alt='overlays' id='overlays' />
          {/* </div> */}
        </div>

        <div className='text'>
          <h1>Coding. Creating. Exploring.</h1>
        </div>
      </div>

    </div>
  );
};

export default HomePage;