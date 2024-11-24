import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer >
            {/* Left Section */}
            <div className='footer-container'>
            <div className="footer-left">
                <h2>Let's keep in touch!</h2>
                <p>Find us on any of these platforms.</p>
                <div className="social-icons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/gp-infotech/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            {/* Center Section */}
            <div className="footer-center">
                <h3>Guna Parimalam Infotech</h3>
                <p>
                    We are a leading-edge software solutions company specializing in solving
                    highly complex problems and managing big data. Our expertise lies in
                    providing innovative solutions to new and intricate challenges.
                </p>
            </div>

            {/* Right Section */}
            <div className="footer-right">
    <div className="footer-links">
        <h4>Pages</h4>
        <ul>
            <li><a href="/service">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/about">Learn</a></li>
        </ul>
    </div>
    <div className="footer-links">
        <h4>Links</h4>
        <ul>
            <li><a href="/about">Terms & Conditions</a></li>
            <li><a href="/about">Privacy Policy</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
        </ul>
    </div>
</div>

            </div>
            {/* Horizontal line */}
            <div className="footer-bottom-line"></div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>Copyright © 2024 Guna Parimalam Infotech</p>
            </div>
        </footer>
    );
};

export default Footer;
