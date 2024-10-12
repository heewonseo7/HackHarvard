// PreviousDiagnoses.jsx
import React from 'react';

interface PreviousDiagnosisProps {
    diagnosesHistory: { diagnosis: string; reasoning: string; correct?: boolean }[];
}

const PreviousDiagnoses: React.FC<PreviousDiagnosisProps> = ({ diagnosesHistory }) => {
    return (
        <div className="w-[35%] ml-6 flex flex-col h-full justify-center items-center">
            <div className="border border-gray-300 p-4 rounded-lg flex-grow overflow-y-auto w-full h-full">
                <h2 className="text-2xl font-bold text-nowrap mb-4">Previous Diagnoses</h2>
                <div className="flex flex-col">
                    {diagnosesHistory.length > 0 ? (
                        diagnosesHistory.map((diag, index) => (
                            <div
                                key={index}
                                className="border p-2 mb-2 bg-gray-200 flex flex-col justify-between"
                            >
                                <p className="truncate">{`Diagnosis ${index + 1}: ${diag.diagnosis}`}</p>
                                <p className="text-sm text-gray-700 truncate">{`Reasoning: ${diag.reasoning}`}</p>
                                {index < diagnosesHistory.length - 1 && <hr />}
                            </div>
                        ))
                    ) : (
                        <p>No previous diagnoses yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PreviousDiagnoses;
