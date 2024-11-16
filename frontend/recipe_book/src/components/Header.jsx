// src/Header.js

import React from 'react';
import './styles/Header.css';
import logo from '../assets/logo-white.png'; // Import the logo image

function Header () {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="header-text">Browar Korona</span>
          <img src={logo} alt="Browar Korona Logo" className="header-logo" />
          <span className="header-text">Recipe Book</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
