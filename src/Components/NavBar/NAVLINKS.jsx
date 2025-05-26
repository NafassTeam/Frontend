import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const NavLinks = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/" || location.pathname === "/Frontend";
    
    const handleNavigation = (sectionId) => {
        if (isHomePage) {
            scrollToSection(sectionId);
        } else {
            navigate('/Frontend', { state: { scrollTo: sectionId } });
        }
    };
    
    return (
        <div className="flex space-x-8 text-white text-sm font-inter">
            <button
                onClick={() => navigate('/Frontend/Apply')}
                className="hover:text-[#5FE086] transition-colors"
            >
                Apply for Nafass Job
            </button>

            <button
                onClick={() => handleNavigation('why-nafass')}
                className="hover:text-[#5FE086] transition-colors"
            >
                Why Nafass
            </button>

            <button
                onClick={() => handleNavigation('help')}
                className="hover:text-[#5FE086] transition-colors"
            >
                Help
            </button>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/" || location.pathname === "/Frontend";

    const toggleNavbar = () => setIsOpen(!isOpen);

    const handleNavigation = (sectionId) => {
        if (isHomePage) {
            scrollToSection(sectionId);
        } else {
            navigate('/Frontend', { state: { scrollTo: sectionId } });
        }
        toggleNavbar();
    };

    return (
        <>
            <nav>
                <div className="hidden md:flex">
                    <NavLinks />
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 mt-4">
                    <button
                        onClick={() => {
                            navigate('/Frontend/Apply');
                            toggleNavbar();
                        }}
                        className="text-lg text-white hover:text-[#5FE086] transition-colors"
                    >
                        Apply for Nafass Job
                    </button>

                    <button
                        onClick={() => handleNavigation('why-nafass')}
                        className="text-lg text-white hover:text-[#5FE086] transition-colors"
                    >
                        Why Nafass
                    </button>

                    <button
                        onClick={() => handleNavigation('help')}
                        className="text-lg text-white hover:text-[#5FE086] transition-colors"
                    >
                        Help
                    </button>

                    <button
                        className="border border-white rounded-full px-4 py-1 transition-colors text-white bg-transparent hover:bg-white hover:text-black"
                    >
                        Login
                    </button>
                </div>
            )}

            <div className="md:hidden justify-end">
                <button onClick={toggleNavbar} className="text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </>
    );
};

export default Navbar;
