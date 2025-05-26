import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Scroll to a section on the page
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Reusable links for desktop and mobile
const NavLinks = ({ isMobile = false, onLinkClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/Frontend";

  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate("/Frontend", { state: { scrollTo: sectionId } });
    }
    if (onLinkClick) onLinkClick();
  };

  const linkClass =
    "hover:text-[#5FE086] transition-colors text-sm text-white font-inter";

  return (
    <>
      <button onClick={() => { navigate("/Frontend/Apply"); if (onLinkClick) onLinkClick(); }} className={linkClass}>
        Apply for Nafass Job
      </button>
      <button onClick={() => handleNavigation("why-nafass")} className={linkClass}>
        Why Nafass
      </button>
      <button onClick={() => handleNavigation("help")} className={linkClass}>
        Help
      </button>
      <NavLink
        to="/Frontend/Login"
        className={({ isActive }) =>
          `border border-white rounded-full px-4 py-1 transition-colors ${
            isActive
              ? "bg-white text-black"
              : "text-white bg-transparent hover:bg-white hover:text-black"
          }`
        }
        onClick={onLinkClick}
      >
        Login
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <NavLinks />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <NavLinks isMobile onLinkClick={toggleNavbar} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
