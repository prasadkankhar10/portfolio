// src/ButtonContainer.js

import React from 'react';
import './ButtonContainer.css';
import { FaHome, FaUser, FaProjectDiagram, FaLaptopCode, FaEnvelope } from 'react-icons/fa';

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaHome /> Home
      </button>
      <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <FaUser /> About
      </button>
      <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
        <FaProjectDiagram /> Projects
      </button>
      <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
        <FaLaptopCode /> Skills
      </button>
      <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        <FaEnvelope /> Contact
      </button>
    </div>
  );
}

export default ButtonContainer;
