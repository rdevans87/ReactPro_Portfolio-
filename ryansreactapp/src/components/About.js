import React from "react";
import "../styles/About.css";

// By importing the About.css file, it is added to the DOM whenever this component loads
function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <p>
      Independent web developer with leadership experience and strong technical background supporting a variety of cross-platform software applications. Certified project management professional and recent graduate of The Ohio State University’s full stack coding bootcamp. 
      In depth knowledge of Agile principles and software QA testing methods for each phase of the development lifecycle. Self-motivated, team-player with the ability to learn quickly and communicate effectively to build fast rapport with clients and team members of varying seniority, 
      backgrounds and experience.
      </p>
    </section>
  );
}

export default About;
