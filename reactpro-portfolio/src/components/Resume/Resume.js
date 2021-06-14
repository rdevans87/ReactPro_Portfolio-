import React from "react";
import "./Resume.css";

// By importing the Resume.css file, it is added to the DOM whenever this component loads
function Resume() {
  return (

    <section className="resume">
      <h1>Resume</h1>
      <div>
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/profilepic.jpg" width="300px" alt="profile" ></img> 
      <h3>Skills:</h3>
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/html5.png" width="60px" alt="HTML5" label="html5"></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/css3.png" width="60px" alt="CSS3" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/javascript.png" width="60px" alt="JS ES6" ></img>
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/icons8-react.png" width="50px" alt="React" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/nodejs.png" width="70px" alt="NodeJS" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/bootstrap.png" width="60px" alt="Boostrap" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/mysql_logo.png" width="70px" alt="MySQl" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/mongodb.png" width="60px" alt="MonogoDB" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/icons8-visual_studio_code_2019.png" width="60px" alt="VSCode" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/git.png" width="60px" alt="Git" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/icons8-rest_api.png" width="60px" alt="API" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/npm.png" width="60px" alt="NPM" ></img> 
      <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/json.png" width="60px" alt="JSON" ></img> 
      
      <br></br>
       <h3>Certifications:</h3>
       <ul>
         <li>Full Stack Coding Bootcamp (2021)</li>
         <li>Agile Master Training (2021)</li>
         <li>Project Management Professional (2019)</li>
         <li>Software Testing Bootcamp (2019)</li>
       </ul>
      <br></br>
       <h3>Employment:</h3>
       <ul>
         <li>
           Customer Service Specialist @ <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/icons8-imdb.png"width="90px" alt="imdb"/>
        </li>
        <li>
          Sr. Technical Support Analyst @ <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/castncrew.png" width="95px" alt="castandcrew"/>
         </li>
         <li>
         Sales Support Associate @ <img src="https://raw.githubusercontent.com/rdevans87/ReactPro_Portfolio/main/reactpro-portfolio/src/assets/icons/finaldraft.png" width="100px" height="40px" alt="finaldraft"/>
       </li>
    </ul>
      <br></br>
      <br></br>
      <h3>Education:</h3>
      <br></br>
      {/* B.A. Communication and Media Studies <img src="" */}
      <ul>
         <li></li>
         </ul>
      </div>
      <div>
        <p>View or Download my full <a href="http://localhost:52330/reactpro-portfolio/src/assets/PorfolioResume_RyanEvans.pdf" width="30px" rel="noreferrer" target="_blank" >Resume.</a></p>
        
      </div>
      </section>


  );
}

export default Resume;
