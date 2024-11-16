import React from 'react';
import './styles/Loading.css'; // Import the CSS file for styling
import logo from '../assets/logo.png'; // Import the logo image
import Header from './Header';

function Loading () {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
};

export default Loading;