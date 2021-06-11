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
      I'm an independent web developer with leadership experience and strong technical background supporting a variety of cross-platform software applications. Certified project management professional and recent graduate of The Ohio State University’s full stack coding bootcamp. 
      In depth knowledge of Agile principles and software QA testing methods for each phase of the development lifecycle. Self-motivated, team-player with the ability to learn quickly and communicate effectively to build fast rapport with clients and team members of varying seniority, 
      backgrounds and experience.
      <br></br>
      <br></br>
      Open to independent projects, collaborative opportunities, and contract-to-hire positions. Knowledge of front-end languages and third-party frameworks for building mobile responsive web applications. Experience with DOM manipulation and JSON data integration with server-side APIs.
      <br></br>
       View or Download my full <a href="http://localhost:52330/reactpro-portfolio/src/assets/PorfolioResume_RyanEvans.pdf" class="link" target="_blank">Resume.</a>
      
      </p>
      
    </section>
  );
}

export default About;
