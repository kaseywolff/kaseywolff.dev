import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
  <div className="navBar">
    <NavLink to='/' className='navLink'>home</NavLink>
    <NavLink to='/about' className='navLink'>about</NavLink>
    <NavLink to='/backpack' className='navLink'>backpack</NavLink>
  </div>
  );
};

export default NavBar;

// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function NavBar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Site Name
//       </Link>
//       <ul>
//         <CustomLink to="/">home</CustomLink>
//         <CustomLink to="/about">about</CustomLink>
//         <CustomLink to='/backpack'>backpack</CustomLink>
//       </ul>
//     </nav>
//   )
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }