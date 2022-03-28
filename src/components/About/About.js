import React from "react";
// import "../About/About";
import "./About.css";

// By importing the About.css file, it is added to the DOM whenever this component loads
function About() {
  return (
    <section className="about">
      <h1>About</h1>
      <p>
      My name is Ryan Evans. Thank you for visiting my Professional Portfolio created with React!
      <br></br>
      <br></br>
      Screenwriter turned Spaghetti-coder with a passion for technology and entertainment. I've barely scratched the surface of all there is to know about web development, 
      but I intend to bring the same amount of passion and creativity to my code as I do screenwriting. Please continue to check back periodically as I continue to improve 
      my skills and develop new projects!
      <br></br>
      <br></br>
      Professional certifications in Full Stack Web Development, Project Management, Agile Methodologies, Software QA Testing, and Microsoft Azure AI Fundamentals. Knowledge of 
      front-end languages and third-party frameworks for building mobile responsive web applications. Experience with DOM manipulation and JSON data integration with server-side APIs: 
      HTML5, CSS3, JavaScript ES6, React, Node.js, APIs, SQL Database.
      <br></br>
      <br></br>
      Open to independent projects, collaborative opportunities, and contract-to-hire positions. View or Download my full <a href="https://drive.google.com/file/d/1W-zvxz8Ol1EAyn-PtkoEOTZi6kcz8Jsl/view?usp=sharing" width="20px" rel="noreferrer" target="_blank">Resume.</a>
      </p>
    </section>
  );
}

export default About;
