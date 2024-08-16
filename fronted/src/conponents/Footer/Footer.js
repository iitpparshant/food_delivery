import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>About Us</h5>
          <p>We deliver delicious food right to your door. Quality ingredients, fast service, and a smile with every meal!</p>
        </div>

        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Contact Us</h5>
          <p>Email: support@foodapp.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Food Street, Flavor Town</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FoodApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
