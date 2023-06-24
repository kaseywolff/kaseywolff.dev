import React from 'react';
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;