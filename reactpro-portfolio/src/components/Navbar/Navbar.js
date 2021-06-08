import React from "react";
// import {NavLink} from "react-router-dom";
import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
  
    <nav className="navbar">
      <Navlink to="/contact">Contact</Navlink>
      <Navlink to="/resume">Resume</Navlink>
      <Navlink to="/work">Work</Navlink>
      <Navlink to="/about">About</Navlink>
      <p>Professional Portfolio</p>
    </nav>
    
  );
}

export default Navbar;



