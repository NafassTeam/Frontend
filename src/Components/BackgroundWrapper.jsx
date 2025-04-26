import React from "react";
import BG2 from "/src/assets/BG2.png";

const BackgroundWrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-no-repeat bg-center bg-[length:100%_100%] relative overflow-hidden"
      style={{ backgroundImage: `url(${BG2})` }}
    >
      <div className="absolute w-full h-full z-0">
        <div className="absolute w-[150%] h-[150%] bg-[#00FF26] rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
