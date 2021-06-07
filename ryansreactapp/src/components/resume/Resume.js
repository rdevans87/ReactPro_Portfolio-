import React from "react";
import "../styles/Resume.css";

// By importing the Resume.css file, it is added to the DOM whenever this component loads
function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <img src="" alt="profilepicture" className="profile">
      <p>
       Skills:
       <img src="" alt="html5" classname="badge">
        
       <br></br>
       Experience:
      </p>
    </section>
  );
}

export default Resume;
