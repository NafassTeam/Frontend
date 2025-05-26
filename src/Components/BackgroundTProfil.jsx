import React from 'react';
import BackgroundImage from '../assets/BG1flipped.png';

const Background = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`, 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#43E373] opacity-95 z-10"></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
