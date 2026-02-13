import React, { useState } from 'react';
import './Contact.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-us-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us. We'd love to hear from you.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>Email</h3>
            <p>risingstarskidsschoolvpm@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 9566862918</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>Your Address Here</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          {submitted && <p className="success-message">Message sent successfully!</p>}
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
            {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Enroll Now</li>
              <li className="hover:text-white cursor-pointer">Parent Portal</li>
              <li className="hover:text-white cursor-pointer">School Calendar</li>
              <li className="hover:text-white cursor-pointer">Lunch Menu</li>
              <li className="hover:text-white cursor-pointer">School Supply List</li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold mb-3">Category</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Academics</li>
              <li className="hover:text-white cursor-pointer">Admissions</li>
              <li className="hover:text-white cursor-pointer">News & Events</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold mb-3">Extra Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">Site Map</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Accessibility Statement</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-8">
          © copyright @ 2026 by Shank's Code
        </p>
      </footer>

    </div>
  );
};

export default Contact