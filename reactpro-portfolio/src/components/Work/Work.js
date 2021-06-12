import React from "react-router";
import RepoCards from "../Project/Project";
import work from "../../projects.json";
import "../Work/Work.css"
// import "./Project/Project";


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;

}

// By importing the Work.css file, it is added to the DOM whenever this component loads
function Work() {

  return (
    <section className="work">
      <h1>Work</h1>
   
      <Wrapper id="project">
    
        {work.map((project => (
          <RepoCards key={project.id} image={project.image} name={project.name}
            github={project.github} deploy={project.deploy} summary={project.summary} tools={project.tools} />)))};           
        </Wrapper>
    </section>


);
}

export default Work;
