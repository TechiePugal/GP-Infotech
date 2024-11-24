import React, { useEffect, useState } from "react";
import "./service.css";
import serviceImage from "./service_1.png";
import { FaUsers, FaProjectDiagram, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Counter = ({ endValue, duration }: { endValue: number; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 10); // Calculate the increment
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10); // Updates every 10ms

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return <span>{count}</span>;
};

const Service = () => {
  return (
    <div className="service-container">
      
      {/* Intro Section */}
      <div className="intro-section">
        <div className="text-content">
          <h1 className="intro-heading">Transform your data into a competitive edge.</h1>
          <p className="intro-description">
            Our expert teams specialize in building web and mobile applications for your data analytics solutions.
          </p>
          <button className="service-bt"> <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
    <span>Contact us today</span>
  </Link>
          </button>
        </div>
        <div className="image-content">
          <img
            src={serviceImage} // Use the imported image
            alt="Business Solutions"
            className="intro-image"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div className="stat-value">
            <Counter endValue={2} duration={2000} />+
          </div>
          <p className="stat-title">Clients served</p>
        </div>
        <div className="stat-item">
          <FaProjectDiagram className="stat-icon" />
          <div className="stat-value">
            <Counter endValue={4} duration={2000} />+
          </div>
          <p className="stat-title">Projects delivered</p>
        </div>
        <div className="stat-item">
          <FaClock className="stat-icon" />
          <div className="stat-value">
            <Counter endValue={2500} duration={2000} />+
          </div>
          <p className="stat-title">Hours billed</p>
        </div>
      </div>

      <h1 className="service-heading">Our Premium IT Services</h1>
      <div className="service-grid">
        <div className="service-item">
          <h2 className="service-title">Web Development</h2>
          <p className="service-description">
            We build responsive and dynamic websites tailored to your needs.
          </p>
        </div>
        <div className="service-item">
          <h2 className="service-title">App Development</h2>
          <p className="service-description">
            Our mobile app solutions bring your ideas to life on both Android and iOS.
          </p>
        </div>
        <div className="service-item">
          <h2 className="service-title">Cloud Solutions</h2>
          <p className="service-description">
            Scalable cloud infrastructure and services to streamline your operations.
          </p>
        </div>
        <div className="service-item">
          <h2 className="service-title">Cybersecurity</h2>
          <p className="service-description">
            Protect your business with cutting-edge security measures and risk management.
          </p>
        </div>
      </div>

<div className="tech-process-container">
<div className="technologies-used">
  <h3>Technologies We've Used</h3>
  <div className="technologies-grid">
    <div className="tech-item">Svelte</div>
    <div className="tech-item">Angular</div>
    <div className="tech-item">React</div>
    <div className="tech-item">Next</div>
    <div className="tech-item">Django</div>
    <div className="tech-item">Docker</div>
    <div className="tech-item">AWS</div>
    <div className="tech-item">Azure</div>
    <div className="tech-item">DevOps</div>
    <div className="tech-item">Node.js</div>
    <div className="tech-item">GraphQL</div>
    <div className="tech-item">Kubernetes</div>
    <div className="tech-item">Terraform</div>
    <div className="tech-item">MongoDB</div>
    <div className="tech-item">Python</div>
    <div className="tech-item">Flutter</div>
  </div>
</div>
<h2>Our Process</h2><br></br>
<div className="process-grid-container">

  <div className="process-step-box">
    <h4>Step 1: Consultation</h4>
    <p>We begin by understanding your business needs and objectives.</p>
  </div>
  <div className="process-step-box">
    <h4>Step 2: Strategy</h4>
    <p>Our team creates a custom strategy tailored to your business.</p>
  </div>

  <div className="process-step-box">
    <h4>Step 3: Development</h4>
    <p>We start building your product with the latest technologies.</p>
  </div>

  <div className="process-step-box">
    <h4>Step 4: Deployment</h4>
    <p>Once the product is ready, we deploy it to the cloud or server.</p>
  </div>

  <div className="process-step-box">
    <h4>Step 5: Support</h4>
    <p>Our team provides ongoing support to ensure your product’s success.</p>
  </div>
</div>


</div>


    </div>
  );
};

export default Service;
