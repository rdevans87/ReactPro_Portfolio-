import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";

 

function handleSubmit(e) {
  e.preventDefault();
}

// By importing the Contact.css file, it is added to the DOM whenever this component loads
function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form class="justify-content-center" id="contactForm">
      <div>
      <label htmlFor="name" placeholder="full name"></label>
      <input className="form-control" type="text" name="name"></input>
      </div>
      <div>
      <label htmlFor="email" placeholder="email"></label>
      <input className="form-control" type="text" name="name"></input>
      </div>
      <div>
      <label htmlFor="message" placeholder="message"></label>
      <textarea className="form-control" type="text" name="name"></textarea>
      </div>
      <div>
      <button className="btn btn-primary my-4" type="submit" onSubmit={handleSubmit}>Submit</button>
      </div>
      </form>
  
    </section>
  );
}

export default Contact;
