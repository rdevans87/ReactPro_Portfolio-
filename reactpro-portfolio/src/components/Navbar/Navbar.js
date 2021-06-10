import React from "react"
import "../Navbar/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (

  
    <nav className="navbar">
      <a href="/contact">Contact</a>
      <a href="/resume">Resume</a>
      <a href="/work">Work</a>
      <a href="/about">About</a>
      <p>Professional Portfolio</p>
    </nav>
    
  );
}

export default Navbar;
  


