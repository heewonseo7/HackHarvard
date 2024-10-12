import React from 'react';
import Sidebar from '../components/Sidebar';
import StudyComponent from '../components/StudyComponent';

const HomePage: React.FC = () => {
    return (
        <div className="grid grid-cols-[200px_1fr] h-screen"> {/* Use grid for layout */}
            <Sidebar /> {/* Sidebar occupies fixed width */}
            <StudyComponent /> {/* StudyArea takes up remaining space */}
        </div>
    );
};

export default HomePage;
