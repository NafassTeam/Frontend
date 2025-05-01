import React from "react";

const NextQ1Button = ({ disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full font-light py-2 rounded-[16.5px] text-xl font-mulish transition 
        ${disabled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-[#00260c] text-white hover:bg-[#004d26]"}`}
    >
      Next
    </button>
  );
};

export default NextQ1Button;
