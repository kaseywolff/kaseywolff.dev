import React from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Backpack from  './pages/Backpack';
import Camera from './pages/Camera';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/backpack' element={<Backpack />} />
          <Route path='/camera' element={<Camera />} />
        </Routes>
      </div>
    </>
  );
};

export default App;