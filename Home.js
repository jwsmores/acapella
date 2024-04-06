// Home.js

import React from 'react';
import backgroundImage from './group-image.jpg'; // Import your background image

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Optional: Change text color to be visible against the background
    textAlign: 'center', // Optional: Center-align text content
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Our Acapella Group's Website</h1>
      <p>Here you can find information about our group, watch our favorite videos, and meet our talented members.</p>
    </div>
  );
}

export default Home;
