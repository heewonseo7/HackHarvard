import React from 'react';
import StudyComponent from '../components/StudyComponent';
import DermatologyImage from '../assets/dermatologist.png'; // Placeholder for cartoon dermatology image

const StudyboardPage: React.FC = () => {
    return (
        <div 
            className="flex flex-col h-full text-center relative overflow-hidden bg-cover bg-center" 
            style={{ backgroundImage: `url(${DermatologyImage})` }} // Set the background image
        >
            {/* Optional Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-70"></div>
            
            {/* Main Content */}
            <div className="relative z-10 p-8">
                <StudyComponent />
            </div>
        </div>
    );
};

export default StudyboardPage;
