import React from "react"
import "../Navbar/Navbar.css";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (

  
    <nav className="navbar">
      <p>Professional Portfolio</p>
      <a href="#/about">About</a>
      <a href="#/work">Work</a>
      <a href="#/resume">Resume</a>
      <a href="#/contact">Contact</a>
      
    </nav>
    
  );
}

export default Navbar;
  


