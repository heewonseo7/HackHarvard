// StudyboardPage.tsx
import React from 'react';
import StudyComponent from '../components/StudyComponent';

const StudyboardPage: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <StudyComponent />
        </div>
    );
};

export default StudyboardPage;
