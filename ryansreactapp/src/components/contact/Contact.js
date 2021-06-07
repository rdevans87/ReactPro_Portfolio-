import React, { useState } from "react";
import "../styles/Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// By importing the Contact.css file, it is added to the DOM whenever this component loads
function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form class="justify-content-center" id="contactForm">
      <div>
      <label htmlFor="name" placeholder="full name"></label>
      <input className="form-control" type="text" name="name">
      </div>
      <div>
      <label htmlFor="name" placeholder="full name"></label>
      <input className="form-control" type="text" name="name">
      </div>
      <div>
      <label htmlFor="name" placeholder="full name"></label>
      <textarea className="form-control" type="text" name="name">
      </div>
      </button> 
      </form>
  
    </section>
  );
}

export default Contact;
