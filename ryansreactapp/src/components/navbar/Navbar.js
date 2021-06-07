import React from "react";
// import {NavLink} from "react-router-dom";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
  
    <nav className="navbar">
      <a href="#/">Contact</a>
      <a href="#/">Resume</a>
      <a href="#/">Work</a>
      <a href="/about">About</a>
      <p>Professional Portfolio</p>
    </nav>
    
  );
}

export default Navbar;



