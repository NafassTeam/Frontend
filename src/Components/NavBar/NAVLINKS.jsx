import {  Link} from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const NavLinks = () => {
    return ( 
        <>
        <div className="flex space-x-8 text-white text-sm font-inter">
            <Link to="/Apply for Nafass Job" className=" hover:text-[#5FE086] transition-colors">Apply for Nafass Job</Link>

            <div>.</div>

            <Link to="/Why Nafass" className=" hover:text-[#5FE086]">Why Nafass</Link>

            <div>.</div>

            <Link to="/Help" className="hover:text-[#5FE086]">Help</Link>

        </div>
        

        </>
    );
}

const NAVLINKS = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav>
                <div className="hidden md:flex">
                    <NavLinks/>
                    
                </div>

            </nav>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center basis-full gap-4 mt-4 ">

                    <Link to="/Apply" className="text-white text-lg">Apply for Nafass Job</Link>
                    
                    <Link to="/Why" className="text-white text-lg">Why Nafass</Link>
                    
                    <Link to="/Help" className="text-white text-lg">Help</Link>
                    
                    <Link to="/Login" className="border border-white rounded-full px-4 py-1 text-white">Login</Link>
                
                </div>
            )}
                <div className="md:hidden justify-end ">
                    
                    <button onClick={toggleNavbar} className="text-white ">
                    
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                    
                    </button>
                </div>

            
            
        </>
    );
}
export default NAVLINKS; 