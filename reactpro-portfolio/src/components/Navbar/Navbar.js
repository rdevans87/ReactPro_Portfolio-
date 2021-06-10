import React from "react";
import {NavLink} from "react-router-dom";
// import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
  
    <nav className="navbar">
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/about">About</NavLink>
      <p>Professional Portfolio</p>
    </nav>
    
  );
}

export default Navbar;



