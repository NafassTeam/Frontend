import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
    return ( 
        <div className="flex space-x-8 text-white text-sm font-inter">
            <NavLink
                to="/Frontend/apply"
                className={({ isActive }) =>
                    isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                }
            >
                Apply for Nafass Job
            </NavLink>

            <NavLink
                to="/Frontend/why"
                className={({ isActive }) =>
                    isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                }
            >
                Why Nafass
            </NavLink>

            <NavLink
                to="/Frontend/help"
                className={({ isActive }) =>
                    isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                }
            >
                Help
            </NavLink>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <>
            <nav>
                <div className="hidden md:flex">
                    <NavLinks />
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 mt-4">
                    <NavLink
                        to="/Frontend/apply"
                        className={({ isActive }) =>
                            `text-lg ${
                                isActive ? "text-[#BFFF66]" : "text-white hover:text-[#5FE086] transition-colors"
                            }`
                        }
                    >
                        Apply for Nafass Job
                    </NavLink>

                    <NavLink
                        to="/Frontend/why"
                        className={({ isActive }) =>
                            `text-lg ${
                                isActive ? "text-[#BFFF66]" : "text-white hover:text-[#5FE086] transition-colors"
                            }`
                        }
                    >
                        Why Nafass
                    </NavLink>

                    <NavLink
                        to="/Frontend/help"
                        className={({ isActive }) =>
                            `text-lg ${
                                isActive ? "text-[#BFFF66]" : "text-white hover:text-[#5FE086] transition-colors"
                            }`
                        }
                    >
                        Help
                    </NavLink>

                    <NavLink
                        to="/Frontend/Login"
                        className={({ isActive }) =>
                            `border border-white rounded-full px-4 py-1 transition-colors ${
                                isActive
                                    ? "bg-white text-black"
                                    : "text-white bg-transparent hover:bg-white hover:text-black"
                            }`
                        }
                    >
                        Login
                    </NavLink>
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
