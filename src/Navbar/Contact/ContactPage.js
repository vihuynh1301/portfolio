import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
      <div className="container">
        <section className="main-content">
          <div className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </div>
        </section>

        <div className="contact-form">
            {/* ... Other form fields ... */}
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
            {/* Add other social media links here */}
        </div>

      </div>

      
  );
}

export default ContactPage;
