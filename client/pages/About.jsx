import React from 'react';
import '../styles/about.scss';
// import components
import Footer from '../components/Footer'
// import images
import background from '../assets/images/tetons.jpg';
import profile from '../assets/images/headshot.png';

function About() {
  return(
    <div className='aboutPage'>

      <img src={background} alt='background image' className='backgroundPhoto-a' />

      <div className='scrollDiv-a'>
        <img className='profilePhoto' src={profile} alt={'headshot'} />

          <div className='aboutInfo'>
            <h1 className='title-a'>About</h1>
              <h2 className='sub1'>Hello! I'm Kasey.</h2>
              <p className='p-a'>
                I am a Software Engineer who loves tackling and solving complex problems. I am someone who approaches new things with a sense of curiosity, wonder, and a genuine desire to understand how things work.
              </p>
              <p className='p-a'>
                I began my journey as a Software Engineer in 2021. A team of engineers and I developed a program aimed to inform individuals of the potential costs and benefits of solar panel use in their homes. This somewhat simple program kicked of my passion for coding, and I have been hooked ever since.
              </p>
              <p className='p-a'>
                My current work has been in React and test driven development, but I am confident working across the full stack. (<a href='/backpack' className='textLink'>open my backpack</a> to see what tools I use)
              </p>
              <p className='p-a'>
                I am currently contributing to an open source product, Recoilize. Recoilize is a <a href='https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik' target='_blank' className='textLink'>Chrome Extension</a> and <a href='https://www.npmjs.com/package/recoilize' target='_blank' className='textLink'>npm package</a> for developers building applications with <a href='https://recoiljs.org/' target='_blank' className='textLink'>Recoil.js</a>. It assists developers in visualizing state management, debugging, and improving the efficiency of their applications. Recoilize currently averages 61K+ weekly npm downloads.
              </p>
              <p className='p-a'>
                I am working on a handful of personal projects as well. Checkout my <a href='http://github.com/kaseywolff' target='_blank' className='textLink'>Github</a> to see what I'm working on.
              </p>
              <h2 className='sub2'>
                Fun facts about me
              </h2>
              <p className='p-a'>
                I love camping, hiking, backpacking, bouldering, and skiing. I also enjoy capturing the beauty of nature through photography. Painting is cool too, and I'm working on getting my private pilot license.
              </p>
              <p className='p-a'>
                I lived full time in a van for almost a year and traveled to 25 National Parks and 30 US states/ Canadian Provinces. I've also hiked 250 miles of the Pacific Crest Trail, from Cascade Locks (Washington/ Oregon border) to Snoqualmie Pass, WA. 
              </p>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;