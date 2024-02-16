import React from 'react';
import '../styles/about.scss';
// import images
import profile from '../assets/images/headshot.png';


function About() {
  return(
    <div className='page'>

      <div className='container hello'>
        <img className='headshot' src={profile} alt={'headshot'} />
        <div className='header-hello'>hello! i'm Kasey.</div>
      </div>

      <div className='blank'></div>

      <div className='container about'>
        <h2>about</h2>

        <div className='card single-card'>
        <p>
            I'm a Software Engineer who loves tackling and solving complex problems. I am someone who approaches things with a sense of curiosity, wonder, and a genuine desire to understand how things work.
          </p>
          <br/>
          <p>
            In every line of code I write, I strive for craftsmanship, valuing the art and science of software engineering. I believe in the beauty of simplicity, the power of efficiency, and the elegance of functionality. My approach to software development extends beyond problem-solving; it involves crafting solutions that are not only effective but also enjoyable to work with.
          </p>
          <br/>
          <p>
            While navigating the dynamic landscape of software engineering, I also aim to strike the delicate balance between exploring innovative solutions and embracing proven approaches in my work. This blend of creativity and reliability ensures that my products are both forward-thinking and rooted in established methodology.
          </p>
          <br/>
          <p>
            Whether I'm working with React, employing test-driven development, or delving into the intricacies of a SQL database, I bring a commitment to thoughtfulness and ingenuity in full-stack development. It's not just about writing code; it's about creating a foundation that opens doors to exploration, encourages creativity, facilitates understanding, and paves the way for long-term success.
          </p>
          {/* <br/>
          <p>
            I currenty channel my passion into elevating developers' experiences with my work on Recoilize. Within this role, my focus spans the visualization of state management, the streamlining of debugging processes, and, ultimately, the enhancement of <a href='https://recoiljs.org/' target='_blank' className='hyperlink'>Recoil.js</a> applications. It's more than code; it's a commitment to sculpting an environment where developers thrive, where every line written is a deliberate step towards enhancing the quality and efficiency of their projects.
          </p>
          <br/>
          <p>
            In addition to my work on Recoilize, I have launched and am actively pursuing a handful of personal projects as well. Checkout my <a href='http://github.com/kaseywolff' target='_blank' className='hyperlink'>Github</a> to discover my latest creations.
          </p> */}
        </div>
      </div>

      <div className='blank'></div>

      <div className='container fun-facts'>
        <h2>fun facts</h2>

        <div className='card single-card'>
          <p>
            I love camping, hiking, backpacking, bouldering, and skiing. I also enjoy capturing the beauty of nature through photography (all of the photos on the website were taken by me!). Painting is fun too, and I'm working on getting my private pilot license.
          </p>
          <br/>
          <p>
            I lived full time in a van for almost a year and traveled to 25 National Parks and 30 US states/ Canadian Provinces. I've also hiked 250 miles of the Pacific Crest Trail, from Cascade Locks (Washington/ Oregon border) to Snoqualmie Pass, WA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;