import React from "react";

const AuthCard = ({ children }) => {
  return (
    <div className="z-10 bg-[rgba(245,245,245,0.42)] backdrop-blur-[7px] rounded-4xl p-10 w-full max-w-md shadow-[0px_10px_32.7px_rgba(0,0,0,0.6)] border-[2px] border-[#ffffff]">
      {children}
    </div>
  );
};

export default AuthCard;
