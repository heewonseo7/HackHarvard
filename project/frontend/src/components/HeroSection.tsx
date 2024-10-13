import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import DermatologyImage from '../assets/dermatologist.png'; // Placeholder for cartoon dermatology image

const HeroSection: React.FC = () => {
    return (
        <div 
            className="flex-1 flex flex-col items-center justify-center h-screen text-center relative overflow-hidden bg-cover bg-center" 
            style={{ backgroundImage: `url(${DermatologyImage})` }} // Corrected style syntax
        >
            {/* Gradient overlay for modern aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-70"></div>

            {/* Main Content */}
            <div className="relative z-10 p-12 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md">
                <h1 className="text-6xl font-extrabold text-white mb-4 tracking-wide">
                    Welcome back, Tim Beaver!
                </h1>
                <p className="text-xl text-gray-200 mb-6 font-semibold">
                    Continue sharpening your dermatology skills with real cases!
                </p>

                {/* CTA Button */}
                <Link to="/studyboard"> {/* Link to the Studyboard page */}
                    <button 
                        className="px-6 py-3 bg-teal-500 text-white text-lg font-bold rounded-lg shadow-md 
                        hover:bg-teal-400 transition duration-300 ease-in-out"
                    >
                        Start Diagnosing
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
