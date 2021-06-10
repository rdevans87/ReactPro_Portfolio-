import React from "react";
import repoCards from "../../components/Project/Project.js";
import "./Work.css";

// By importing the Work.css file, it is added to the DOM whenever this component loads
function Work() {
  return (
    <section className="work">
        <h1>Work</h1>
        <div className="container">
     <div className="card card1">
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
   
     <div className="card card2">
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
  
    <div className="card card3">
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
       </div>

       <div className="card card4">
       <div className="face face1">
         <div className="content">
            <h3>E-Commerce Backend</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="/" type="button">Read More</a>
         </div>
       </div>
       </div>

       <div className="card card5">
       <div className="face face1">
         <div className="content">
            <h3>NoteTaker App</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="/" type="button">Read More</a>
         </div>
       </div>
       </div>

       <div className="card card6">
       <div className="face face1">
         <div className="content">
            <h3>ReadMe Generator</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="/" type="button">Read More</a>
         </div>
       </div>
       </div>

  </div>

    </section>
  );
}

export default Work;
