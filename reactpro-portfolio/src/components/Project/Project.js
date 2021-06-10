import React from 'react';
import './project.css'

function repoCards(props) {
    return(
    
    <div className="container">
     <div className="card">
        <img alt={props.name} src={props.image}/>
       <div className="face face1">
         <div className="content">         
           <h3>{props.name}</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>{props.name}</p>  
           <p>{props.text}</p>
           <br></br>
           <p>{props.tools}</p>
           <a href={props.github}><img src="https://img.icons8.com/fluent/48/4a90e2/github.png" alt="Repository" id="icon"/></a> 
           <a href={props.deploy}><imd src="https://img.icons8.com/metro/26/000000/domain.png" alt="Deployed" id="icon"/></a>
         </div>
       </div>
    </div>
    </div>


    );

}

export default Project;