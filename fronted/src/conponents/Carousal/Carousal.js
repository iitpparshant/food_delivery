import React from 'react';
import './style.css';
import topImage from '../../image/top.jpg';

export default function Carousal() {
  return (
    <div className="carousel-container">
      <img src={topImage} alt="Top" className="carousel-image" />
      <div className="content-container">
        <h1>Welcome to Our Website</h1>
        <p>Explore the amazing content and find what you're looking for.</p>
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
