import React from 'react';
import './Home.css'; // Optional for extra styling

function Home() {
  return (
    <div className="page home-page">
      <img src="/profile.jpg" alt="Profile" className="profile-image" />
      <h1>Welcome to Shubham's Portfolio</h1>
      <p>I'm a React Developer. Here you'll find my work and contact info.</p>
      
      <div className="social-links">
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://instagram.com/yourusernamehttps" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Home;
