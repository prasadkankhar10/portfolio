import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <button className="nav-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul className={`nav-menu ${isOpen ? 'nav-menu-visible' : ''}`}>
          <li><a href="#home"><img src="/icons/home-icon.svg" alt="Home" /></a></li>
          <li><a href="#projects"><img src="/icons/projects-icon.svg" alt="Projects" /></a></li>
          <li><a href="#skills"><img src="/icons/skills-icon.svg" alt="Skills" /></a></li>
          <li><a href="#about"><img src="/icons/about-icon.svg" alt="About" /></a></li>
          <li><a href="#contact"><img src="/icons/contact-icon.svg" alt="Contact" /></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
