import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>About NewJaisa</li>
            <li>Refurbishing story</li>
            <li>Our story</li>
            <li>Affiliate Program</li>
            <li>Referral Program</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Our Products</h4>
          <ul>
            <li>Laptops</li>
            <li>Desktops</li>
            <li>Mini PC</li>
            <li>All in One</li>
            <li>Monitors</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>Contact Us</li>
            <li>Terms of service</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Warranty Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Reach out to us</p>
          <p>+91-9026265699 (Sales)</p>
          <p>support@newjaisa.com</p>
        </div>
        <div className="footer-section">
          <h4>Sign up to our newsletter</h4>
          <div className="newsletter">
            <input type="email" placeholder="Enter email" />
            <button>→</button>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
    </footer>
  );
}

export default Footer; 