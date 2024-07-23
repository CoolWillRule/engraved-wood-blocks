import React from 'react';
import './Contact.css';

const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <form className="contact-form">
      <div>
        <label>Name:</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
