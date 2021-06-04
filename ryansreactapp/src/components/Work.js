import React from "react";
import "../styles/Work.css";

// By importing the Work.css file, it is added to the DOM whenever this component loads
function Work() {
  return (
    <section className="work">
        <h2>Work</h2>
     <div class="container">
     <div class="card">
       <div class="face face1">
         <div class="content"></div>
      <h2>Project</h2>
      <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
    </section>
  );
}

export default Work;
