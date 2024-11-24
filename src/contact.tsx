import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = 'service_qd9stqk'; // Replace with your Email.js Service ID
    const templateId = 'template_lw3fkag'; // Replace with your Email.js Template ID
    const publicKey = 'MVhr91w39vTBrPr6j'; // Replace with your Email.js Public Key

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response.status, response.text);
        alert('Your message has been sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
  <div className="cont">
    <div className="cquote-form">
      <h2 className="form-heading">Get a Quote</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
