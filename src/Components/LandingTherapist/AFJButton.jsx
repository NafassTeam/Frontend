import React from "react";
import { Link } from "react-router-dom";


const AFJButton = () => {
  return (
    <button className="md:mt-0 px-6 py-2 rounded-full text-sm md:text-base font-mulish bg-gradient-to-r from-[#5FE086] to-[#83FF6E] text-[#002313] hover:opacity-90 transition-all mb-[-9px] md:mb-[1px]">
        <Link to="/Frontend/Personal-info">Start your journey</Link>
    </button>


  );
};

export default AFJButton;
