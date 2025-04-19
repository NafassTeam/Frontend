import React from "react";
import { Link } from "react-router-dom";

const SYJDButton = () => {
  return (
    <Link
      to="/start-your-journey-directly"
      className="text-[#002313] text-sm md:text-base cursor-pointer font-mulish hover:text-[#5FE086] transition-colors"
    >
      Start your journey directly →
    </Link>
  );
};

export default SYJDButton;
