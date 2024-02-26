import React from 'react';
import '../styles/backpack.scss';
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
import next from '../assets/logos/next-logo.png';
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
    <div className='page'>
      <div className='container backpack'>
        <h1 className='header-backpack'>backpack</h1>
        <p className='subheader-backpack'>projects and tech stack.</p>
      </div>

      <div className='blank'></div>
        
      <div className='container projects'>
        <h2>projects</h2>
        
        <div className='primary'>
          <div className='card project-card'>
            <h3 href='https://www.recoilize.io/' className='project-name'>Recoilize</h3>
            <img src={recoilize} className='project-screenshot' />
            <p>
              Recoilize is a Chrome Dev Tool designed for debugging applications built with the Recoil.js state management library.
            </p>
            <br/>
            <p>
              <a href='https://www.recoilize.io/' className='hyperlink'>  landing page  </a>
                | 
                <a href='https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik' className='hyperlink'>  chrome extension  </a>
                | 
                <a href='https://www.npmjs.com/package/recoilize' className='hyperlink'>  npm package  </a>
            </p>
          </div>

            <div className='card project-card'>
              <h3 className='project-name'>Codesweeper</h3>
              <img src={codesweeper} className='project-screenshot' />
              <p>
                An elevated, cleaner version of the classic minesweeper game - for coders.
              </p>
              <br/>
              <p>
                <a href='https://codesweeper.app' className='hyperlink'>  play game  </a>
                | 
                <a href='https://https://github.com/kaseywolff/Codesweeper' className='hyperlink'>  github code  </a>
              </p>
            </div>
          </div>

        <div className='secondary'>
          <div className='card project-card'>
            <h3 className='project-name'>Star Guides</h3>
            <img src={starguides} className='project-screenshot' />
            <p>
              A customer relationship management tool to manage and organize client trips to national parks.
            </p>
          </div>

          <div className='card project-card'>
            <h3 className='project-name'>VentureVault</h3>
            <img src={venturevault} className='project-screenshot' />
            <p>
              An app to organize and track each of your bucket list activities or travel destinations.
            </p>
          </div>
        </div>
      </div>

      <div className='blank'></div>

      <div className='container tech-stack'>
        <h2>tech stack</h2>
        <div className='card logo-card'>
          <img src={js} alt='javascript logo' className='logo' title='javascript'/>
          <img src={ts} alt='typescript logo' className='logo' title='typescript'/>
          <img src={reactLogo} alt='react logo' className='logo' title='react'/>
          <img src={reactRouter} alt='react router logo' className='logo' title='react router'/>
          <img src={next} alt='next.js logo' className='logo' title='next.js'/>
          <img src={redux} alt='redux logo' className='logo' title='redux'/>
          <img src={express} alt='express.js logo' className='logo' title='express'/>
          <img src={node} alt='node.js logo' className='logo' title='node.js'/>
          <img src={mongodb} alt='mongodb logo' className='logo' title='mongodb'/>
          <img src={postgres} alt='postgreSQL logo' className='logo' title='postreSQL'/>
          <img src={jest} alt='jest logo' className='logo' title='jest'/>
          <img src={testing} alt='react testing library logo' className='logo' title='react testing library'/>
          <img src={npm} alt='npm logo' className='logo' title='npm'/>
          <img src={git} alt='git logo' className='logo' title='git'/>
          <img src={aws} alt='aws logo' className='logo' title='aws'/>
          <img src={docker} alt='docker logo' className='logo' title='docker'/>
          <img src={firebase} alt='firebase logo' className='logo' title='firebase'/>
          <img src={html5} alt='html5 logo' className='logo' title='html5'/>
          <img src={css} alt='css logo' className='logo' title='css'/>
          <img src={sass} alt='scss logo' className='logo' title='scss'/>
          <img src={d3} alt=' d3 logo' className='logo' title='d3'/>
        </div>
      </div>
    </div>
  );
};

export default Backpack;