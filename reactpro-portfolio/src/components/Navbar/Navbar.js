import React from "react"
import "../Navbar/Navbar.css";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (

  
    <nav className="navbar">
      <p>Professional Portfolio</p>
      <a href="#/about" className="nav1">About</a>
      <a href="#/work" className="nav2">Work</a>
      <a href="#/resume" className="nav3">Resume</a>
      <a href="#/contact" className="nav4">Contact</a>
      
    </nav>
    
  );
}

export default Navbar;
  


