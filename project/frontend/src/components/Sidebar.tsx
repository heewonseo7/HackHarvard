import React from 'react';
import image from '../assets/44.jpg';

const Sidebar: React.FC = () => {
    return (
        <div className="h-screen bg-black text-white w-64">
        {/* App Title Section */}
        <div className="flex items-center py-4 px-6">
            <i className="fas fa-home text-2xl"></i> {/* Reduced icon size */}
            <span className="ml-3 font-bold text-xl">DermaDrill</span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center py-4 px-6 mx-3">
            <img
            src={image}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-lg font-semibold">Ndk Nguyen</span>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-4 px-6">
            <NavItem icon="fas fa-home" label="Home" />
            <NavItem icon="fas fa-book" label="Study Board" />
        </div>
        </div>
    );
};

interface NavItemProps {
    icon: string;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
    return (
        <div className="flex items space-x-2 hover:bg-gray-200 hover:bg-opacity-20 transition py-2 px-4 rounded">
        <i className={`${icon} text-lg`}></i> {/* Adjusted icon size */}
        <span>{label}</span>
        </div>
    );
};

export default Sidebar;
