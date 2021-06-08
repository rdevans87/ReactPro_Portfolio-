import React, { useState } from "react";
import "../src/Contact/Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <label htmlFor="name" placeholder="full name"></label>
      <input className="form-control" type="text" name="name"></input>
      </div>
      <div>
      <label htmlFor="name" placeholder="full name"></label>
      <textarea className="form-control" type="text" name="name"></textarea>
      </div>
      <div>
      <button></button>
      </div>
      </form>
  
    </section>
  );
}

export default Contact;
