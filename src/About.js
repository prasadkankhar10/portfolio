import React from 'react';

function About() {
  return (
    <div style={aboutStyle}>
      <h1>About Me</h1>
      <p>Welcome to my portfolio! I am a passionate game developer with experience in Unreal Engine and web development. I am currently pursuing a B.Tech in Computer Science and Engineering at MIT Aurangabad.</p>
    </div>
  );
}

const aboutStyle = {
  padding: '20px',
  textAlign: 'center',
};

export default About;
