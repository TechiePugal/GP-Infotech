import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './about.css'; // Make sure to import the CSS file

const About: React.FC = () => {
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
    <div className="about-container">
      <div className="about-row">
        <div className="about-text">
          <h2 className="about-heading">Our Mission</h2>
          <p className="about-description">
            To empower companies to achieve their business goals by providing a comprehensive suite of software products and services.
            From off-the-shelf solutions to fully customized offerings, we strive to understand our clients' unique needs and deliver
            innovative and cost-effective solutions that drive efficiency and growth across their entire organization.
          </p>
        </div>
        <div className="about-image">
          <img src="src/mission1.png" alt="Our Mission" className="mission-image" />
        </div>
        <div className="about-text">
          <h2 className="about-heading">Our Vision</h2>
          <p className="about-description">
            We aim to help people and companies with our products and premium service to make their lives easier.
            We aim to make a positive impact on the world by enabling companies of all sizes to achieve their goals, drive growth, and stay ahead of the competition.
          </p>
        </div>
        <div className="about-image">
          <img src="src/vission.png" alt="Our Vision" className="mission-image" />
        </div>
      </div>

      <div className="labout-row">
        <div className="labout-image">
          <img src="src/pugal.jpg" alt="Pugal" className="leader-image" />
        </div>
        <div className="labout-text">
          <h2 className="labout-heading">Our Leaders</h2>
          <p className="labout-description">
            <strong>Name:</strong> Pugal<br />
            <strong>Title:</strong> Fullstack Developer <br />
            <strong>Roles:</strong> CEO & Operation Head of the Company
          </p>
        </div>
      </div>

      <div className="term"><p><center><h3>Terms and Conditions </h3></center>

By using the services provided by Guna Parimalam Infotech, you agree to comply with all applicable laws and these terms and conditions. We reserve the right to update or modify these terms at any time without prior notice. All intellectual property, including software, designs, and solutions provided, remain the sole property of Guna Parimalam Infotech and are intended for the client’s use only. Any unauthorized reproduction, distribution, or use of our solutions is strictly prohibited. Our services are provided "as is" without any warranties, and we are not liable for any damages arising from their use. Clients are responsible for maintaining the confidentiality of proprietary materials shared with them during the engagement. For questions, contact us at <a href='#contact'>contact</a>.</p></div>
<div className="term"><p><center><h3>Privacy Policy </h3></center>


At Guna Parimalam Infotech, we value and respect your privacy. We collect, store, and use personal and business information solely for the purpose of delivering our services, improving user experience, and ensuring compliance with legal requirements. We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. Any information shared with third parties will only be for service delivery purposes and in accordance with confidentiality agreements. We do not sell or trade your personal information. By using our services, you consent to the collection and use of your data as outlined in this policy. For questions or concerns, please contact us at  <a href='#contact'>contact</a>.</p></div>
 
      <div id="contact" className='aline'>
        <h2>Contact Us</h2>
      </div>
      <div className="quote-form">
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
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="acontact-container">
        <div className="acontact-item">
          <h3>Get In Touch</h3>
          <p>We are here to Help you!</p>
        </div>
        <div className="acontact-item">
          <h3>Base of Operations</h3>
          <p>Gobichettipalayam, Erode, Tamil Nadu</p>
          <a href="#">Get Direction</a>
        </div>
        <div className="acontact-item">
          <h3>Registered Address</h3>
          <p>384 3 , Karnam Street, Arakkan kottain,Gobichettipalayam, Erode, Tamil Nadu</p>
          <a href="#">Get Direction</a>
        </div>
        <div className="acontact-item">
          <h3>Mon - Fri</h3>
          <p>9.00 am to 6.00 pm</p>
        </div>
        <div className="acontact-item">
          <h3>Phone</h3>
          <p>+91 6383106107</p>
        </div>
        <div className="acontact-item">
          <h3>Email</h3>
          <p>gpinfotech.ind@gmail.com</p>
        </div>
      </div>

    </div>
  );
};

export default About;
