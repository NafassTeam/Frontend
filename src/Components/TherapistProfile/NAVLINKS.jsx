import { NavLink } from "react-router-dom";
import { Bell, UserCircle } from 'lucide-react';

const NavLinks = () => {
    return (
        <div className="flex items-center justify-center space-x-8 text-sm font-inter">
            {/* Centered Links */}
            <div className="flex items-center space-x-20">
                <NavLink
                    to="/Frontend/apply"
                    className={({ isActive }) =>
                        isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                    }
                >
                    Home
                </NavLink>

                <span className="text-[7px] mt-2">•</span>

                <NavLink
                    to="/Frontend/why"
                    className={({ isActive }) =>
                        isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                    }
                >
                    About
                </NavLink>

                <span className="text-[7px] mt-2">•</span>

                <NavLink
                    to="/Frontend/help"
                    className={({ isActive }) =>
                        isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                    }
                >
                    Help
                </NavLink>
            </div>

            {/* Right-aligned icons */}
            <div className="absolute right-6 flex items-center space-x-4">
                <NavLink
                    to="/Frontend/notifications"
                    className={({ isActive }) =>
                        isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                    }
                >
                    <Bell className="cursor-pointer hover:text-[#43E373]" />
                </NavLink>

                <NavLink
                    to="/Frontend/profile"
                    className={({ isActive }) =>
                        isActive ? "text-[#BFFF66]" : "hover:text-[#5FE086] transition-colors"
                    }
                >
                    <UserCircle className="cursor-pointer hover:text-[#43E373]" />
                </NavLink>
            </div>
        </div>
    );
};

export default NavLinks;
