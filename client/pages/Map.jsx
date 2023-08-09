import React from 'react';
import Footer from '../components/Footer';
import '../styles/map.scss';
// import images
// import background from '../assets/images/goat-rocks-topo.png';

function Map() {
  return(
    <div id='map'>
      {/* <img src={background} alt='background image' class='parallax-layer bg-m' /> */}


      <div class='parallax-layer resume'>
        <div id='map-header-container'>
          <div id='map-title'>map</div>
          <div id='map-description'>
            If you're wondering how I became a Software Engineer, here's a bit of my story. You can also take a look at my official resume here if you're interested.
          </div>
        </div>


        <div className='year'>
          <div className='year-header'>2012</div>
          <div className='activities'>
            <div className='past'>
              <div className='job-title'>MATLAB</div>
              <div className='job-description'>
                My first experience with writing code was actually in a college calculus class. We spent some time learning the basics of code - for loops, while loops, etc. As an 18 year old, I thought I had my future planned out. Little did I know the twists and turns it would take to get me to the wonderful place I'm in today. 
              </div>
            </div>
          </div>
        </div>

        <div className='year'>
          <div className='year-header'>2012-2021</div>
          <div className='activities'>
            <div className='past'>
              <div className='job-title'>Growth</div>
              <div className='job-description'>
                I've decided that most paths in life are never straight. There are twists and turns, ups and downs, highs and lows. During this span, I graduated from Texas A&M, got my Masters degree at the University of Houston, and began a career as a counselor, right out of grad school, at a non-profit refugee resettlement agency in Houston. When Covid was in full swing, I started to reflect on how I wanted the next chapter of my life to look.
              </div>
            </div>
          </div>
        </div>


        <div className='year'>
          <div className='year-header'>2021</div>
          <div className='activities'>
            <div className='past'>
              <div className='job-title'>Mechanical Engineering</div>
              <div className='job-description'>
                I decided in 2020 that I was going to make a career change and become an engineer. After a conversation with my partner over icecream and some self reflecting, I realized that my brain is 110% wired for engineering. I began pursuing a degree in mechanical engineering, and was told I needed to take a class on MATLAB. I absolutely fell in LOVE with coding. From then on, I was trying to figure out how I could pursue this rediscovered passion.
              </div>
            </div>
          </div>
        </div>
        

        <div className='year'>
        <div className='year-header'>2022</div>
          <div className='activities'>
            <div className='past'>
              <div className='job-title'>PCT</div>
              <div className='job-description'>
                While hiking the PCT, I became friends with someone who was in the process of applying to Codesmith (he actually got the call letting him know of his acceptance while on trail!). While doing van life, I had been trying to figure out how I could possibly shift into computer science/ software engineering, but I wasn't sure exactly how I was going to make that happen. After hearing my friend tell me about Codesmith's program, I was sold and had a gut feeling that this was the right path for me.
              </div>
            </div>
          </div>
        </div>

        <div className='year'>
          <div className='year-header'>2023</div>
          <div className='activities'>
            <div className='past'>
              <div className='job-title'>Codesmith</div>
              <div className='job-description'>
                I attended Codesmith's software engineering <a className='textLink' href='https://www.codesmith.io/immersive-program-page'>immersive program</a> in 2023. I am so incredibly grateful for the experience. I learned so much in the program, and am very lucky to have learned alongside such a stellar group of software engineers.
              </div>
            </div>
          </div>
        </div>

        <div id='current'>
          <div className='current-job-title'>Recoilize</div>
          <div className='job-description'>
            <p>I am currently working on an npm package/ chrome extension for developers utilizing Recoil.js in their application.</p>
            <p>What have my wonderful team and I accomplished so far?
              <ul>
                <li>Increasing testing coverage from 17% to 76%, as well as replacing Enzyme with Jest and React Testing Library</li>
                <li>Modularized the codebase so it's reusable and more efficient</li>
                <li>Migrated the Chrome extension from Manifest 2 to Manifest 3</li>
                <li>Continuing to migrate the codebase from JavaScript to TypeScript</li>
              </ul>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Map;