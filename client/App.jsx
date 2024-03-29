import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import About from './pages/About';
import Backpack from  './pages/Backpack';
import Scroll from './components/Scroll';

// import './styles/nav-footer.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar currentLocation={location.pathname}/>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/backpack' element={<Backpack />} />
        </Routes>
      </div>
      <Footer/>
      <Scroll/>
    </>
  );
};

export default App;