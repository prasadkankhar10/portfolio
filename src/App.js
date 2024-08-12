import React from 'react';
import Navbar from './components/NavBar';
import Spline from '@splinetool/react-spline';
import Summary from './components/Summary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="home-section">
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/lHGbEzjimbLiSd9S/scene.splinecode" className="spline-object" />
        </div>
        <Summary className="summary-component" /> {/* This should overlay the Spline object */}
      </section>
      <section id="projects" className="content-section">
        <h2>Projects</h2>
        {/* Add your projects content here */}
      </section>
      <section id="skills" className="content-section">
        <h2>Skills</h2>
        {/* Add your skills content here */}
      </section>
      <section id="about" className="content-section">
        <h2>About Me</h2>
        {/* Add your about me content here */}
      </section>
      <section id="contact" className="content-section">
        <h2>Contact Me</h2>
        {/* Add your contact content here */}
      </section>
    </div>
  );
}

export default App;
