import REACT from 'react';


function projectCards(props) {
    return(
        <section className="work">
        <h1>Work</h1>
        <div className="container">
     <div className="card">
       <div className="face face1">
         <div className="content">         
           <h3>{props.name}</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>{props.text}</p>
           <br></br>
           <p>{props.tools}</p>
           <a href={props.github}><img src="/Users/ryanevans/ReactPro_Portfolio/ryansreactapp/src/assets/icons/icons8-github.png" alt="Repository" id="icon"/></a> 
        <a href={props.deploy}><imd src
         </div>
       </div>
    </div>
    </div>
    </section>

    );

}








}