import React from "react";
import "../styles/Work.css";

// By importing the Work.css file, it is added to the DOM whenever this component loads
function Work() {
  return (
    <section className="work">
        <h1>Work</h1>
        <div className="container">
     <div className="card">
       <div className="face face1">
         <div className="content">         
           <h3>PetTrax</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="/" type="button">Read More</a>
         </div>
       </div>
    </div>
    
     <div className="card">
       <div className="face face1">
         <div className="content">
            <h3>Employee Tracker</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="/" type="button">Read More</a>
         </div>
       </div>
    </div>
    
    <div className="card">
       <div className="face face1">
         <div className="content">
            <h3>Project 3</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="/" type="button">Read More</a>
         </div>
       </div>
    </div> 

    {/* <div className="card">
       <div className="face face1">
         <div className="content">
            <h3>Weather Dashboard</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="/" type="button">Read More</a>
         </div>
       </div>
    </div> */}

  </div>

    </section>
  );
}

export default Work;
