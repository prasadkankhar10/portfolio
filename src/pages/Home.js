import React from 'react';
import Spline from '@splinetool/react-spline';
import Summary from '../components/Summary'; // Make sure this path is correct
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Spline scene="https://prod.spline.design/lHGbEzjimbLiSd9S/scene.splinecode" className="spline-object" />
      <Summary className="summary-component" />
    </div>
  );
}

export default Home;
