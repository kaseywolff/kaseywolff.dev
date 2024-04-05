import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/tech-tree(peach).png';


function NavBar({ currentLocation }) {
  return (
    <div className="nav-bar">
      <NavLink to='/' className={`nav-link ${currentLocation === '/' ? 'active' : ''}`}>home</NavLink>
      {/* <NavLink to='/' className={`nav-logo ${currentLocation === '/' ? 'active' : ''}`}><img id='home-logo' src={logo} alt='home logo' /></NavLink> */}
      <NavLink to='/about' className={`nav-link ${currentLocation === '/about' ? 'active' : ''}`}>about</NavLink>
      <NavLink to='/backpack' className={`nav-link ${currentLocation === '/backpack' ? 'active' : ''}`}>backpack</NavLink>
    </div>
  );
};

export default NavBar;