import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import dfUser from "/src/assets/DftPfp.png";
import { UserIcon, MailIcon, ClockIcon, LayoutDashboardIcon, UsersIcon, LogOutIcon } from 'lucide-react';
import { getUnreadMessages, getPendingAppointments } from '/src/Services/therapistService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const [unreadMessages, setUnreadMessages] = useState(1);
    const [pendingAppointments, setPendingAppointments] = useState(100);
    
    useEffect(() => {
        fetchUnreadMessages();
        fetchPendingAppointments();
    }, []);

    const fetchUnreadMessages = async () => {
        try {
            const res = await getUnreadMessages();
            setUnreadMessages(res.data.unreadMessages);
        } catch (error) {
            console.error('Failed to fetch unread messages:', error);
        }
    };

    const fetchPendingAppointments = async () => {
        try {
            const res = await getPendingAppointments();
            setPendingAppointments(res.data.pendingRequests);
        } catch (error) {
            console.error('Failed to fetch pending appointments:', error);
        }
    };

    const [user, setUser] = useState(null);
    const [activeItem, setActiveItem] = useState('profile');

    useEffect(() => {
        const mockUser = {
            name: 'Dr. Thomas',
            profileImage: '', // Simulate no uploaded image
        };

        setTimeout(() => {
            setUser(mockUser);
        }, 500);
    }, []);

    const sidebarItems = [
        { key: 'profile', label: 'Profile', icon: <UserIcon size={18} /> },
        { key: 'messages', label: 'Messages', icon: <MailIcon size={18} />, badge: unreadMessages },
        { key: 'appointments', label: 'Appointments', icon: <ClockIcon size={18} />, badge: pendingAppointments },
        { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboardIcon size={18} /> },
        { key: 'patients', label: 'Patients', icon: <UsersIcon size={18} /> },
    ];

    return (
        <aside className="w-[170px] h-[630px] bg-white opacity-90 p-4 mt-3 rounded-[15px] ml-3 z-20 absolute drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col items-center">
                {user ? (
                    <div className="flex flex-col items-center mb-4">
                        <img
                            src={user.profileImage || dfUser}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover mt-2"
                        />
                        <h2 className="text-[10px] text-center font-inter mt-1">{user.name}</h2>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mb-4">Loading...</p>
                )}

                <Button
                    variant="outlined"
                    className="rounded-[25px] h-[25px] w-[70px] font-inter font-normal text-black hover:bg-[rgba(67,227,115,0.2)] mb-4"
                >
                    Edit
                </Button>

                <div className="w-[150px] mt-10">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setActiveItem(item.key)}
                            className={`flex items-center gap-2 w-full px-3 py-2 my-1.5 rounded-[10px] text-[10px] font-inter font-medium relative
                                ${activeItem === item.key
                                ? 'bg-[#43E373]/60 text-black'
                                : 'hover:bg-[#43E373]/30 text-black'}
                            `}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>

                            {item.badge > 0 && (
                                <span className="absolute top-1 left-0 bg-[#FF154B] text-white text-[10px] px-1.5 rounded-full font-medium font-inter">
                                    {item.badge > 99 ? '99+' : item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => alert('Logging out...')}
                    className="relative group w-[150px] px-5 py-2 my-5 h-[38px] rounded-[10px] text-[10px] font-inter font-medium overflow-hidden text-black mt-30"
                    >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D8D8D8] to-[#EFEFEF] transition-opacity duration-500 group-hover:opacity-0"></div>

                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF154B] to-[#ffb9c5] opacity-0 transition-opacity duration-800 group-hover:opacity-100"></div>

                    <div className="relative z-10 flex items-center gap-2">
                        <FontAwesomeIcon
                        icon={faPersonWalking}
                        size="xl"
                        className="transition-colors duration-500 group-hover:text-white"
                        />
                        <span className="group-hover:text-white transition-colors duration-300">Logout</span>
                    </div>
                </button>


            </div>
        </aside>
    );
};

export default SideBar;
