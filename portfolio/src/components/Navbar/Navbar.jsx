import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#title">
            <p>RAYA</p>
            <p className="fw-bold">RDD</p>
          </a>

          {/* Hamburger button for small screens */}
          <button className="navbar-toggle" onClick={toggleMenu}>
            <RxHamburgerMenu/>
          </button>

          {/* Navbar options */}
          <ul className={`nav navbar-nav ${isMenuOpen ? 'show' : ''}`}>
            <li className="active"><a href="#title">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Projects</a></li> 
            {/* dropdown */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
