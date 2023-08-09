import React from 'react';
import '../styles/about.scss';
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';


function Footer() {
  return(
    <div className='footer'>
      <div id='connect-box'>
        <a className='connect-a' target='_blank' href='https://github.com/kaseywolff'><img src={github} className='connect-logo' /></a>
        <a className='connect-a' target='_blank' href='https://linkedin.com/kaseywolff'><img src={linkedin} className='connect-logo' /></a>
      </div>
      <p id='copyright'>© 2023 Kasey Wolff</p>
    </div>
  );
};  

export default Footer;