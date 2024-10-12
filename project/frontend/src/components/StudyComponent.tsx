import React, { useState } from 'react';
import CurrentDiagnosis from './CurrentDiagnosis';
import PreviousDiagnoses from './PreviousDiagnosis';
import DiagnosisStatistics from './DiagnosisStatistics';
import image from '../assets/ISIC_0015902.webp';
import image2 from '../assets/44.jpg';

const imageArray = [
    image,
    image2,
    image,
];


const StudyComponent: React.FC = () => {
    // State declarations
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [diagnosis, setDiagnosis] = useState('');
    const [reasoning, setReasoning] = useState('');
    const [aiFeedback, setAiFeedback] = useState('');
    const [diagnosesHistory, setDiagnosesHistory] = useState<{ diagnosis: string; reasoning: string; correct?: boolean }[]>([]);

    // Function to handle diagnosis submission
    const handleDiagnosisSubmit = () => {
        const simulatedFeedback = `AI Feedback for diagnosis: ${diagnosis} (${reasoning})`;
        setAiFeedback(simulatedFeedback);

        const isCorrect = Math.random() < 0.5; // Simulate correctness
        setDiagnosesHistory([...diagnosesHistory, { diagnosis, reasoning, correct: isCorrect }]);
        setDiagnosis('');
        setReasoning('');
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    };

    // ... (any other logic or state manipulation)

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex w-full max-w-5xl">
                {/* Current Diagnosis Section */}
                <CurrentDiagnosis
                    imageSrc={imageArray[selectedImageIndex]}
                    diagnosis={diagnosis}
                    reasoning={reasoning}
                    onDiagnosisChange={setDiagnosis}
                    onReasoningChange={setReasoning}
                    onSubmit={handleDiagnosisSubmit}
                    aiFeedback={aiFeedback}
                />

                {/* Previous Diagnoses Section */}
                <PreviousDiagnoses diagnosesHistory={diagnosesHistory} />

                {/* Diagnosis Statistics Section */}
                <DiagnosisStatistics diagnosesHistory={diagnosesHistory} />
            </div>
        </div>
    );
};

export default StudyComponent;
