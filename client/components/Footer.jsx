import React from 'react';
import '../styles/about.scss';
import email from '../assets/logos/mail.png';
import github from '../assets/logos/github-logo.png';
import linkedin from '../assets/logos/linkedin-logo.png';


function Footer() {
  return(
    <div className='footer'>
      <div className='connect-container'>
        <a className='connect-link' target='_blank' href='https://github.com/kaseywolff'>
          <img src={github} className='connect-icon' title='follow me on github'/>
        </a>
        
        <a className='connect-link' target='_blank' href='https://linkedin.com/in/kaseywolff'>
          <img src={linkedin} className='connect-icon' title='connect with me on linkedin'/>
        </a>

        <a className='connect-link' href='mailto: kaseywolff.dev@gmail.com'>
          <img src={email} className='connect-icon' title='send me an email!'/>
        </a>
      </div>
      <div id='copyright'>© 2023 Kasey Wolff</div>
    </div>
  );
};  

export default Footer;