import React from 'react';
import Background from '/src/assets/ProInfoBackground.png';

const BackgroundPersonalInfo = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        className="absolute inset-0 z-0 backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(0, 24, 7, 0.85)',
        }}
      ></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPersonalInfo;
