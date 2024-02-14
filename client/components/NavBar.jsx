import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ currentLocation }) {
  return(
  <div className="navBar">
    <NavLink to='/' className={`navLink ${currentLocation === '/' ? 'active' : ''}`}>home</NavLink>
    <NavLink to='/about' className={`navLink ${currentLocation === '/about' ? 'active' : ''}`}>about</NavLink>
    <NavLink to='/backpack' className={`navLink ${currentLocation === '/backpack' ? 'active' : ''}`}>backpack</NavLink>
  </div>
  );
};

export default NavBar;