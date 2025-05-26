import React from 'react';
import logo from "/src/assets/logoblack.png"; 
import NavLink from "/src/Components/TherapistProfile/NAVLINKS.jsx";

const NavBar = () => {
  return (
    <nav className="py-4 border-b-2 relative flex items-center justify-center">
      {/* Logo on the left */}
      <div className="absolute left-4">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Centered NavLinks */}
      <div>
        <NavLink />
      </div>
    </nav>
  );
};

export default NavBar;
