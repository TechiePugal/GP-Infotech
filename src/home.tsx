import React, { useState } from 'react';
import { Rocket, Brain, Code2, Settings, Users, Briefcase, MapPin, Clock, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <video className="background-video" autoPlay muted loop>
          <source src="src/home-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto hero-content-wrapper">
          <div className="hero-text">
            <h1 className="hero-heading">
            Redefining Possibilities with Precision Software Engineering
            </h1>
            <p className="hero-description">
            Guna Parimalam Infotech pioneers cutting-edge software development, crafting innovative, scalable solutions that push the boundaries of technology and empower businesses to lead in a dynamic digital era.
            </p>
            <button className="cta-button" id="get-started-button"> <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
    <span>Contact us</span>
  </Link></button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container mx-auto">
          <h2 className="section-title">What We Offer?</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="hcontact-section">
        <div className="container mx-auto">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="g-section-title">Get in Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin className="icon" />
                  <p>Gobichettipalayam, Erode, Tamil Nadu</p>
                </div>
                <div className="contact-item">
                  <Phone className="icon" />
                  <p>91 6383 106 107</p>
                </div>
                <div className="contact-item">
                  <Mail className="icon" />
                  <p>gpinfotech.ind@gmail.com</p>
                </div>
                <div className="contact-item">
                  <Clock className="icon" />
                  <p>Mon - Fri, 9:00 AM to 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form with EmailJS */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: <Brain className="icon" />,
    title: "Strategy",
    description: "We believe technical implementation accounts for only 20% of success."
  },
  {
    icon: <Rocket className="icon" />,
    title: "Execution",
    description: "The remaining 80% is all about strategy. We focus on delivering flawless execution."
  },
  {
    icon: <Code2 className="icon" />,
    title: "Our Products",
    description: "Innovative solutions including Lego-coding and enterprise management tools."
  },
  {
    icon: <Settings className="icon" />,
    title: "Product Customizations",
    description: "We tailor our offerings to meet your specific needs and requirements."
  },
  {
    icon: <Briefcase className="icon" />,
    title: "Services",
    description: "Collaborate with us to implement solutions for your unique use cases."
  },
  {
    icon: <Users className="icon" />,
    title: "Loan Staff",
    description: "We provide technical resources to face challenges together."
  }
];

// Contact Form Component
const ContactForm = () => {
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
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <input
          id="mobile"
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>
      <button type="submit" className="hcta-button">Get in Touch</button>
    </form>
  );
};

export default Home;
