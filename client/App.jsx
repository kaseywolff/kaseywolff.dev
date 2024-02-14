import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import About from './pages/About';
import Backpack from  './pages/Backpack';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar currentLocation={location.pathname}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/backpack' element={<Backpack />} />
        </Routes>
      </div>
    </>
  );
};

export default App;