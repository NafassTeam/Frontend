import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import dfUser from "/src/assets/DftPfp.png";
import {
    UserIcon,
    MailIcon,
    ClockIcon,
    LayoutDashboardIcon,
    UsersIcon
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const [unreadMessages, setUnreadMessages] = useState(1);
    const [pendingAppointments, setPendingAppointments] = useState(100);
    const location = useLocation();

    useEffect(() => {
        fetchUnreadMessages();
        fetchPendingAppointments();
    }, []);

    const fetchUnreadMessages = async () => {
        try {
            // Simulated API call
            const res = { data: { unreadMessages: 3 } };
            setUnreadMessages(res.data.unreadMessages);
        } catch (error) {
            console.error('Failed to fetch unread messages:', error);
        }
    };

    const fetchPendingAppointments = async () => {
        try {
            // Simulated API call
            const res = { data: { pendingRequests: 5 } };
            setPendingAppointments(res.data.pendingRequests);
        } catch (error) {
            console.error('Failed to fetch pending appointments:', error);
        }
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const mockUser = {
            name: 'Welcom Back, Sarah!',
            profileImage: '',
        };
        setTimeout(() => setUser(mockUser), 500);
    }, []);

    const sidebarItems = [
        { key: 'profile', label: 'Profile', icon: <UserIcon size={18} />, path: '/Frontend/patientProfile' },
        { key: 'messages', label: 'Messages', icon: <MailIcon size={18} />, path: '/Frontend/messages', badge: unreadMessages },
        { key: 'appointments', label: 'Appointments', icon: <ClockIcon size={18} />, path: '/Frontend/appointments', badge: pendingAppointments },
        { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboardIcon size={18} />, path: '/Frontend/dashboard' },
        { key: 'myTherapist', label: 'MyTherapist', icon: <UsersIcon size={18} />, path: '/Frontend/patients' },
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
                        <Link
                            to={item.path}
                            key={item.key}
                            className={`flex items-center gap-2 w-full px-3 py-2 my-1.5 rounded-[10px] text-[10px] font-inter font-medium relative
                                ${location.pathname === item.path
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
                        </Link>
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
