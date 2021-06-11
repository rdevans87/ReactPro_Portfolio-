import React from "react";
import "./Resume.css";

// By importing the Resume.css file, it is added to the DOM whenever this component loads
function Resume() {
  return (

    <section className="resume">
      <h2>Resume</h2>
      <div>
      <img src="" width="300px" alt="profile" ></img> 
      <h3>Skills:</h3>
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/html5.png" width="60px" alt="HTML5" label="html5"></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/css3.png" width="60px" alt="CSS3" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/javascript.png" width="60px" alt="JS ES6" ></img>
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/icons8-react.png" width="50px" alt="React" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/nodejs.png" width="60px" alt="NodeJS" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/bootstrap.png" width="60px" alt="Boostrap" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/mysql_logo.png" width="60px" alt="MySQl" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/mongodb.png" width="60px" alt="MonogoDB" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/icons8-visual_studio_code_2019.png" width="60px" alt="VSCode" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/git.png" width="60px" alt="Git" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/json.png" width="60px" alt="JSON" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/bootstrap.png" width="60px" alt="Bootstrap" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/bootstrap.png" width="60px" alt="Bootstrap" ></img> 
      <br></br>
       <h3>Certificates:</h3>
       <ul>
         <li>Full Stack Coding Bootcamp (2021)</li>
         <li>Agile Master Training (2021)</li>
         <li>Projext Management Professional (2019)</li>
         <li>Software Testing Bootcamp (2019)</li>
       </ul>
      <br></br>
       <h3>Employment:</h3>
       <br></br>
       Customer Service Specialist @ <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/icons8-imdb.png"width="60px" alt="imdb"/>
       <br></br>
       <br></br>
       Sr. Technical Support Analyst @ <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/castncrew.png" width="70px" alt="castandcrew"/>
      <br></br>
      <br></br>
      Sales Support Associate @ <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/finaldraft.png" width="80px" height="30px" alt="finaldraft"/>
      <br></br>
      <br></br>
      <h3>Education:</h3>
      <br></br>
      B.A. Communication and Media Studies.
      </div>
      <div>
        <p>View or Download my full <a href="http://localhost:52330/reactpro-portfolio/src/assets/PorfolioResume_RyanEvans.pdf" width="30px" rel="noreferrer" target="_blank" >Resume.</a></p>
        
      </div>
      </section>


  );
}

export default Resume;
