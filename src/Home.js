import React from 'react';
import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <main style={mainStyle}>
      <Spline scene="https://prod.spline.design/lHGbEzjimbLiSd9S/scene.splinecode" />
    </main>
  );
}

const mainStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
};

export default Home;
