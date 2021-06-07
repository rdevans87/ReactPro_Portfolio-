import React from "react";
import "../styles/Resume.css";

// By importing the Resume.css file, it is added to the DOM whenever this component loads
function Resume() {
  return (
    <section className="resume">
      <hr></hr>
      <h2>Resume</h2>
      <div>
      <h3>Skills:</h3>
      <img src="" width="300px" alt="profile" className="profile"></img> 
       Certificates:
       <ul>
         <li>Full Stack Coding Bootcamp (2021)</li>
         <li>Agile Master Training (2021)</li>
         <li>Projext Management Professional (2019)</li>
         <li>Software Testing Bootcamp (2019)</li>
       </ul>
      <br></br>
       Employment:
      <br></br>
      Education:
      </div>
      <div>
        <p>Download view or download my full Resume: </p>
        </div>
    </section>
  );
}

export default Resume;
