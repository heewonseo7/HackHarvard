import React from 'react';

interface CurrentDiagnosisProps {
    imageSrc: string;
    diagnosis: string;
    reasoning: string;
    onDiagnosisChange: (diagnosis: string) => void;
    onReasoningChange: (reasoning: string) => void;
    onSubmit: () => void;
    aiFeedback?: string;
}

const CurrentDiagnosis: React.FC<CurrentDiagnosisProps> = ({
    imageSrc,
    diagnosis,
    reasoning,
    onDiagnosisChange,
    onReasoningChange,
    onSubmit,
    aiFeedback,
}) => {
    return (
        <div className="w-[65%] border border-gray-300 p-4 rounded-lg flex flex-col h-full justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">Current Diagnosis</h2>
            <img
                src={imageSrc}
                alt="Skin Lesion"
                className="w-[275px] h-[275px] object-cover mb-4 mx-auto"
            />

            <input
                type="text"
                value={diagnosis}
                onChange={(e) => onDiagnosisChange(e.target.value)}
                placeholder="Enter your diagnosis"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
                value={reasoning}
                onChange={(e) => onReasoningChange(e.target.value)}
                placeholder="Enter your reasoning here"
                className="w-full h-32 border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={onSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
                Submit Diagnosis
            </button>

            {aiFeedback && <div className="mt-4">{aiFeedback}</div>}
        </div>
    );
};

export default CurrentDiagnosis;
