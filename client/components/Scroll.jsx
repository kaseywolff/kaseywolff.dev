import React, { useState, useEffect } from 'react';

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
      title='scroll to top'
    >
      🛸
    </button>
  );
};