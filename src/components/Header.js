import React from 'react';
import { FaBell, FaEnvelope, FaCog, FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div class="logo">
        <img src="logo.png" alt="logo" />

      </div>
      <div className="search-container">
      <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="header-icons">
      <div className="icon-circle">
        <a href="">
        <FaEnvelope className="icon" /></a>
        </div>
        <div className="icon-circle">
        <a href="">  <FaCog className="icon" /></a>
        </div>
        <div className="icon-circle">
        <a href=""><FaBell className="icon" /></a>
        <div className="notification-dot"></div>
        </div>
        <div className="profile-pic">
        <a href=""> <img src="wade-warren.jpg" alt="Wade Warren" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
