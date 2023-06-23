import React, { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
// import NavBar from './NavBar';

// pages
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' component={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;