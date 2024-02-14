import React from 'react';
import Footer from '../components/Footer';
import '../styles/backpack.scss';
// import images
import background from '../assets/images/backpack.jpg';
// import gifs
import recoilize from '../assets/gifs/recoilize.gif';
import codesweeper from '../assets/gifs/codesweeper.gif';
import starguides from '../assets/gifs/starguides.gif';
import venturevault from '../assets/gifs/venturevault.gif'
// import logos
import aws from '../assets/logos/aws-logo.png';
import css from '../assets/logos/css-logo.png';
import d3 from '../assets/logos/d3-logo.png';
import docker from '../assets/logos/docker-logo.png';
import express from '../assets/logos/express-logo.png';
import firebase from '../assets/logos/firebase-logo.png';
import git from '../assets/logos/git-logo.png';
import html5 from '../assets/logos/html5-logo.png';
import js from '../assets/logos/JavaScript-logo.png';
import jest from '../assets/logos/jest-logo.png';
import mongodb from '../assets/logos/MongoDB-logo.png';
import node from '../assets/logos/node-logo.png';
import npm from '../assets/logos/npm-logo.png';
import postgres from '../assets/logos/PostgreSQL-logo.png';
import reactLogo from '../assets/logos/react-logo.png';
import reactRouter from '../assets/logos/react-router-logo.png';
import redux from '../assets/logos/redux-logo.png';
import sass from '../assets/logos/sass-logo.png';
import testing from '../assets/logos/testing-library-logo.png';
import ts from '../assets/logos/ts-logo-256.png';



function Backpack() {
  return(
    <div className='backpack'>
      <div className='container'>
        <h1 className='header-backpack'>backpack</h1>
        <p className='subheader-backpack'>projects and tech stack.</p>
      </div>

      <div className='blank'></div>
        
      <div className='container projects'>
        <h2 className='header-projects'>projects</h2>
        
        <div className='primary'>
          <div className='project-card'>
            <h3 href='https://www.recoilize.io/' className='project-name'>Recoilize</h3>
            <img src={recoilize} className='project-screenshot' />
            <p className='project-description'>
              Recoilize is a Chrome Dev Tool designed for debugging applications built with the Recoil.js state management library.
            </p>
            <p className='project-description'>
              <a href='https://www.recoilize.io/' className='textLink'> landing page  </a>
                | 
                <a href='https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik' className='textLink'>  chrome extension  </a>
                | 
                <a href='https://www.npmjs.com/package/recoilize' className='textLink'>  npm package  </a>
            </p>
          </div>

            <div className='project-card'>
              <h3 className='project-name'>Codesweeper</h3>
              <img src={codesweeper} className='project-screenshot' />
              <p className='project-description'>
                An elevated, cleaner version of the classic minesweeper game - for coders.
              </p>
              <p className='project-description'>
                <a href='https://codesweeper.app' className='textLink'>  play game  </a>
                | 
                <a href='https://https://github.com/kaseywolff/Codesweeper' className='textLink'>  github code  </a>
              </p>
            </div>
          </div>

        <div className='secondary'>
          <div className='project-card'>
            <h3 className='project-name'>Star Guides</h3>
            <img src={starguides} className='project-screenshot' />
            <p className='project-description'>
              A customer relationship management tool to manage and organize client trips to national parks.
            </p>
          </div>

          <div className='project-card'>
            <h3 className='project-name'>VentureVault</h3>
            <img src={venturevault} className='project-screenshot' />
            <p className='project-description'>
              An app to organize and track each of your bucket list activities or travel destinations.
            </p>
          </div>
        </div>
      </div>

      <div className='blank'></div>

      <div className='container tech-stack'>
        <h2 className='header-techstack'>tech stack</h2>
        <div className='logo-container'>
          <img src={js} alt='logo' className='logo' />
          <img src={ts} alt='logo' className='logo' />
          <img src={reactLogo} alt='logo' className='logo' />
          <img src={reactRouter} alt='logo' className='logo' />
          <img src={redux} alt='logo' className='logo' />
          <img src={express} alt='logo' className='logo' />
          <img src={node} alt='logo' className='logo' />
          <img src={mongodb} alt='logo' className='logo' />
          <img src={postgres} alt='logo' className='logo' />
          <img src={jest} alt='logo' className='logo' />
          <img src={testing} alt='logo' className='logo' />
          <img src={npm} alt='logo' className='logo' />
          <img src={git} alt='logo' className='logo' />
          <img src={aws} alt='logo' className='logo' />
          <img src={docker} alt='logo' className='logo' />
          <img src={firebase} alt='logo' className='logo' />
          <img src={html5} alt='logo' className='logo' />
          <img src={css} alt='logo' className='logo' />
          <img src={sass} alt='logo' className='logo' />
          <img src={d3} alt='logo' className='logo' />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Backpack;