import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="rs-contact-wrapper">
      {/* Hero Section - Now the top-most element */}
      <section className="rs-hero">
        <h1>CONTACT US</h1>
      </section>

      {/* Contact Info Cards */}
      <section className="rs-info-grid">
        <div className="info-card">
          <i className="fas fa-clock"></i>
          <h3>Opening Hours:</h3>
          <p>Mon-Fri : 9.00 am - 2.30pm.</p>
          <p>Saturday : 9.30am - 12.00noon.</p>
        </div>
        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>risingstarskidsschoolvpm@gmail.com</p>
        </div>
        <div className="info-card">
          <i className="fas fa-phone"></i>
          <h3>Phone Number</h3>
          <p>+91 9566862918</p>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="rs-get-in-touch">
        <div className="touch-container">
          <div className="touch-image">
            <img src="/src/assets/240.jpeg" />
          </div>
          <div className="touch-content">
            <h3>Get In Touch</h3>
            <form className="rs-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="number" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows="5"></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rs-footer">
        <div className="footer-cols">
          <div className="footer-col">
            <h3>Rising Stars</h3>
            <p>"A Pre-School which enlighten your kids to Rise like a Sun and Shine like a Star."</p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>Enroll Now</li>
              <li>Parent Portal</li>
              <li>School Calendar</li>
              <li>Lunch Menu</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Category</h3>
            <ul>
              <li>About Us</li>
              <li>Academics</li>
              <li>Admissions</li>
              <li>News & Events</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Extra Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © Copyright @ 2026 by Shank's Code
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;