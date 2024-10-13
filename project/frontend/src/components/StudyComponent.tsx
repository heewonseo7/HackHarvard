import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentDiagnosis from './CurrentDiagnosis';
import PreviousDiagnoses from './PreviousDiagnosis';
import DiagnosisStatistics from './DiagnosisStatistics';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}');

const StudyComponent: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [diagnosis, setDiagnosis] = useState('');
    const [reasoning, setReasoning] = useState('');
    const [aiFeedback, setAiFeedback] = useState('');
    const [diagnosesHistory, setDiagnosesHistory] = useState<{ diagnosis: string; reasoning: string; correct?: boolean }[]>([]);
    const [imageArray, setImageArray] = useState<string[]>([]);
    const [statistics, setStatistics] = useState({ correct: 0, incorrect: 0 });
    const [loading, setLoading] = useState(false); // State for loading indicator

    useEffect(() => {
        const loadImages = async () => {
            try {
                const imagePromises = Object.values(images).map((image) => image());
                const loadedImages = await Promise.all(imagePromises);
                const imageUrls = loadedImages.map((imageModule) => imageModule.default);
                setImageArray(imageUrls);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        loadImages();
    }, []);

    const handleDiagnosisSubmit = async () => {
        if (imageArray.length === 0) {
            console.error('No images available for diagnosis submission.');
            return;
        }

        // Validate input fields
        if (!diagnosis || !reasoning) {
            setAiFeedback('Please fill in all fields before submitting.');
            return;
        }

        const lesionId = imageArray[selectedImageIndex]?.split('/').pop()?.split('.')[0];
        try {
            setLoading(true); // Set loading state
            const response = await axios.post('http://localhost:5001/chat', {
                diagnosis,
                reasoning,
                image_name: lesionId,
            });

            const { reply, correct } = response.data; 
            setAiFeedback(reply);
            setDiagnosesHistory((prevHistory) => [...prevHistory, { diagnosis, reasoning, correct }]);

            // Update statistics based on correctness
            if (correct) {
                setStatistics((prevStats) => ({ ...prevStats, correct: prevStats.correct + 1 }));
            } else {
                setStatistics((prevStats) => ({ ...prevStats, incorrect: prevStats.incorrect + 1 }));
            }
        } catch (error) {
            console.error('Error submitting diagnosis:', error);
            setAiFeedback('An error occurred while submitting your diagnosis. Please try again.'); // Provide detailed feedback
        } finally {
            setLoading(false); // Reset loading state
        }

        // Reset fields for next submission
        setDiagnosis('');
        setReasoning('');
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
            <div className="flex w-full max-w-5xl space-x-4 p-4">
                {imageArray.length > 0 ? (
                    <div className="flex flex-col w-2/3 bg-white shadow-md rounded-lg p-4">
                        <CurrentDiagnosis
                            imageSrc={imageArray[selectedImageIndex] || ''}
                            diagnosis={diagnosis}
                            reasoning={reasoning}
                            onDiagnosisChange={setDiagnosis}
                            onReasoningChange={setReasoning}
                            onSubmit={handleDiagnosisSubmit}
                            aiFeedback={aiFeedback}
                        />
                        {loading && <p className="mt-4 text-blue-600">Submitting diagnosis...</p>} {/* Loading indicator */}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p>Loading images...</p>
                    </div>
                )}

                <div className="w-1/3 bg-white shadow-md rounded-lg p-4">
                    <PreviousDiagnoses diagnosesHistory={diagnosesHistory} />
                </div>

                <div className="w-1/3 bg-white shadow-md rounded-lg p-4">
                    <DiagnosisStatistics diagnosesHistory={diagnosesHistory} statistics={statistics} />
                </div>
            </div>
        </div>
    );
};

export default StudyComponent;