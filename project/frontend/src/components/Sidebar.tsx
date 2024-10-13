import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import image from '../assets/logo.jpeg';

const Sidebar: React.FC = () => {
    return (
        <div className="h-screen bg-black text-white w-64">
            {/* App Title Section */}
            <div className="flex items-center py-6 px-6">
                <i className="ml-2 fas fa-spinner text-3xl"></i> {/* Reduced icon size */}
                <span className="ml-3 font-bold text-3xl">DermaDrill</span>
            </div>

            {/* Profile Section */}
            <div className="flex items-center py-4 px-6 mx-3">
                <img
                    src={image}
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <span className="text-lg font-semibold">Tim Beaver</span>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-4 px-6">
                <NavItem icon="fas fa-home" label="Home" to="/" />
                <NavItem icon="fas fa-book" label="Study Board" to="/studyboard" />
            </div>
        </div>
    );
};

interface NavItemProps {
    icon: string;
    label: string;
    to: string; // Add a 'to' prop for the route
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => {
    return (
        <Link to={to} className="flex items-center space-x-2 hover:bg-gray-200 hover:bg-opacity-20 transition py-2 px-4 rounded">
            <i className={`${icon} text-lg`}></i> {/* Adjusted icon size */}
            <span>{label}</span>
        </Link>
    );
};

export default Sidebar;
