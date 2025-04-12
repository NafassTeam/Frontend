import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between md:justify-start w-full">
        

        <div className="md:hidden flex justify-end w-full px-4">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center basis-full gap-4 mt-4">
          <Link to="/Apply" className="text-white text-lg">
            Apply for Nafass Job
          </Link>
          <Link to="/Why" className="text-white text-lg">
            Why Nafass
          </Link>
          <Link to="/Help" className="text-white text-lg">
            Help
          </Link>
          <Link
            to="/Login"
            className="border border-white rounded-full px-4 py-1 text-white"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default MenuBurger;
