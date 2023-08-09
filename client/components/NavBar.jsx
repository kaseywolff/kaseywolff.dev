import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
  <div className="navBar">
    <NavLink to='/' className='navLink'>home</NavLink>
    <NavLink to='/about' className='navLink'>about</NavLink>
    <NavLink to='/backpack' className='navLink' data-replace='backpack'>backpack</NavLink>
    {/* <NavLink to='/map' className='navLink'>map</NavLink> */}
    {/* <NavLink to='/camera' className='navLink'>camera</NavLink> */}
  </div>
  );
};

export default NavBar;