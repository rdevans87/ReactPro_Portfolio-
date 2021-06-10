import React from "react";
import RepoCards from "../../Project/Project.js";
import work from "../../projects.json";
import "./Work.css";

// function Container(props) {
//   return <div className="Container">{props.children}</div>;

// }

// By importing the Work.css file, it is added to the DOM whenever this component loads
function Work() {
  
  return (
    <section>
      {work.map((project => (
  <RepoCards key={project.id} image={project.image} name={project.name} 
  github={project.github} deploy={project.deploy} tools={project.tools}/>)))};

  </section>
  
  
  );
}

export default Work;
