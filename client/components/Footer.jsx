import React from 'react';
import '../styles/about.scss';
import email from '../assets/logos/mail.png';
import github from '../assets/logos/github-logo.png';
import linkedin from '../assets/logos/linkedin-logo.png';


function Footer() {
  return(
    <div className='footer'>
      <div id='connect-box'>
        <a className='connect' target='_blank' href='https://github.com/kaseywolff'>
          <img src={github} className='connect-icon' />
        </a>
        
        <a className='connect' target='_blank' href='https://linkedin.com/in/kaseywolff'>
          <img src={linkedin} className='connect-icon' />
        </a>

        <a className='connect' href='mailto: kaseywolff.dev@gmail.com'>
          <img src={email} className='connect-icon' />
        </a>
      </div>
      <div id='copyright'>© 2023 Kasey Wolff</div>
    </div>
  );
};  

export default Footer;