import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import StudyboardPage from './pages/StudyboardPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex h-screen"> {/* Ensure full height */}
                <Sidebar />
                <div className="flex-grow overflow-y-auto"> {/* Allow content to scroll if necessary */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/studyboard" element={<StudyboardPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
