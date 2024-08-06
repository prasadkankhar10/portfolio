import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Oval } from 'react-loader-spinner';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <Oval
            height={80}
            width={80}
            color="#ffd900"
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#f5f5db"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      <Spline scene="https://prod.spline.design/lHGbEzjimbLiSd9S/scene.splinecode" onLoad={handleLoad} />
    </div>
  );
}
