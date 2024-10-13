// CurrentDiagnosis.tsx
import React from 'react';

interface CurrentDiagnosisProps {
    imageSrc: string;
    diagnosis: string;
    reasoning: string;
    onDiagnosisChange: (value: string) => void;
    onReasoningChange: (value: string) => void;
    onSubmit: () => void;
    aiFeedback: string;
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
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Current Diagnosis</h2> {/* Added title for the Current Diagnosis */}
            {imageSrc && (
                <img src={imageSrc} alt="Current Diagnosis" className="h-[275px] w-[275px] rounded-lg mb-4" />
            )}
            <input
                type="text"
                value={diagnosis}
                onChange={(e) => onDiagnosisChange(e.target.value)}
                placeholder="Enter your diagnosis"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-2 w-full"
            />
            <textarea
                value={reasoning}
                onChange={(e) => onReasoningChange(e.target.value)}
                placeholder="Enter your reasoning"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-2 w-full h-24"
            />
            <button
                onClick={onSubmit}
                className="bg-teal-500 text-white rounded-md px-4 py-2 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
                Submit Diagnosis
            </button>
            {aiFeedback && <p className="mt-2 text-blue-500">{aiFeedback}</p>}
        </div>
    );
};

export default CurrentDiagnosis;
