import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact reveal" id="contact">
      <h1>Contact Me</h1>
      <p>Feel free to get in touch with me using the form below.</p>
      <div className="contact-form">
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
