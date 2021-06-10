import React from "react";
import RepoCards from "../Project/Project";
// import Work from "../Work/Work";
import work from "../../projects.json";
import "./Work.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;

}

// By importing the Work.css file, it is added to the DOM whenever this component loads
function Work() {

  return (
    <section className="work">
      <h1>Work</h1>

      <Wrapper>
        {work.map((project => (
          <RepoCards key={project.id} image={project.image} name={project.name}
            github={project.github} deploy={project.deploy} tools={project.tools} />)))};

 </Wrapper>


    </section>


);
}

export default Work;
