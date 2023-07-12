import React from 'react';
import Footer from '../components/Footer';
import '../styles/backpack.scss';
// import images
import background from '../assets/images/backpack.jpg';

function Map() {
  return(
    <div id='map'>
      <img src={background} alt='background image' id='bg-m' />
    </div>
  )
}