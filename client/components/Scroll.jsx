import React, { useState, useEffect } from 'react';

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // check scroll position and show/hide the button accordingly
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // show the button when the user scrolls down 300 pixels
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // scroll to the top when the button is clicked
  const scrollToTop = () => {
    setIsClicked(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // delay resetting the state -> prevents button from momentarily disappearing and reappearing after reaching top of page
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <button
      className={`scroll ${isVisible ? 'visible' : 'hidden'} ${isClicked ? 'clicked' : ''}`}
      onClick={scrollToTop}
      title='scroll to top'
    >
      {isClicked ? 'woosh!' : '🛸'}
    </button>
  );
};