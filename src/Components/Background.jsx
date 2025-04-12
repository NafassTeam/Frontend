import React from 'react';

const Background = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(src/assets/BackgroundImage.png)', 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-0"></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
