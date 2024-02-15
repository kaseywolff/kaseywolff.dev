import React from 'react';
import '../styles/about.scss';
// import components
import Footer from '../components/Footer'
// import images
import profile from '../assets/images/headshot.png';

function About() {
  return(
    <div>

      <div className='container hello'>
        <img className='headshot' src={profile} alt={'headshot'} />
        <div className='header-about'>hello! i'm Kasey.</div>
      </div>

      <div className='blank'></div>

      <div className='container about'>
        <h2 className='header-about'>about</h2>

        <div className='card description single-card'>
          <p>
            I am a Software Engineer who loves tackling and solving complex problems. I am someone who approaches new things with a sense of curiosity, wonder, and a genuine desire to understand how things work.
          </p>
          <br/>
          <p>
            My current work has been in React and test driven development, but I am confident working across the full stack. (<a href='/backpack' className='textLink'>open my backpack</a> to see what tools I use)
          </p>
          <br/>
          <p>
            I am a core contributor to Recoilize. Recoilize is a <a href='https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik' target='_blank' className='textLink'>Chrome Extension</a> and <a href='https://www.npmjs.com/package/recoilize' target='_blank' className='textLink'>npm package</a> for developers building applications with <a href='https://recoiljs.org/' target='_blank' className='textLink'>Recoil.js</a>. It assists developers in visualizing state management, debugging, and improving the efficiency of their applications. Recoilize currently averages 61K+ weekly npm downloads.
          </p>
          <br/>
          <p>
            I am working on a handful of personal projects as well. Checkout my <a href='http://github.com/kaseywolff' target='_blank' className='textLink'>Github</a> to see what I'm working on.
          </p>
        </div>
      </div>

      <div className='blank'></div>

      <div className='container fun-facts'>
        <h2 className='header-about'>fun facts</h2>

        <div className='card description single-card'>
          <p>
            I love camping, hiking, backpacking, bouldering, and skiing. I also enjoy capturing the beauty of nature through photography (all of the photos on the website were taken by me!). Painting is fun too, and I'm working on getting my private pilot license.
          </p>
          <br/>
          <p>
            I lived full time in a van for almost a year and traveled to 25 National Parks and 30 US states/ Canadian Provinces. I've also hiked 250 miles of the Pacific Crest Trail, from Cascade Locks (Washington/ Oregon border) to Snoqualmie Pass, WA.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;