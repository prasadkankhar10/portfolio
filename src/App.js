import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            navLinks.forEach((link) => {
              link.style.backgroundColor = '#7f7b7b'; // Default to #7f7b7b
              link.style.color = '#ffd900'; // Default text color
            });
            document.querySelector(`nav a[href="#${entry.target.id}"]`).style.backgroundColor = '#f5f5db'; // Accent Color
            document.querySelector(`nav a[href="#${entry.target.id}"]`).style.color = '#040316'; // Text Color when active
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="home" style={homeStyle}>
        <Spline scene="https://prod.spline.design/lHGbEzjimbLiSd9S/scene.splinecode" />
      </div>
      <div id="about" style={sectionStyle}>
        <h1>About Me</h1>
        <p>Welcome to my portfolio! I am a passionate game developer with experience in Unreal Engine and web development. I am currently pursuing a B.Tech in Computer Science and Engineering at MIT Aurangabad.</p>
      </div>
      <div id="projects" style={sectionStyle}>
        <h1>Projects</h1>
        <p>Here are some of my projects...</p>
      </div>
      <div id="skills" style={sectionStyle}>
        <h1>Skills</h1>
        <p>Here are some of my skills...</p>
      </div>
      <div id="contact" style={sectionStyle}>
        <h1>Contact</h1>
        <p>You can reach me at...</p>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#1a1a1a',  // Background Color: Dark Grey
  color: '#f5f5db',  // Text Color: Light Gold
};

const navStyle = {
  width: '100%',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
  backgroundColor: '#7f7b7b', // Set nav background to #7f7b7b
};

const homeStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#7f7a7a',  // Unique Background Color for home
};

const sectionStyle = {
  width: '100%',
  minHeight: '100vh',  // Ensure each section takes up at least the full viewport height
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#7f7b7b',  // Updated Background Color for all sections
  color: '#040316',  // Text Color
};

export default App;
