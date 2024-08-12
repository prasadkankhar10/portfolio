import React from 'react';
import Spline from '@splinetool/react-spline';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/lHGbEzjimbLiSd9S/scene.splinecode" />
      </div>
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page.</p>
      </div>
    </div>
  );
}
