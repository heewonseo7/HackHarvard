import React from 'react';

const PreviousDiagnoses: React.FC<{ diagnosesHistory: { diagnosis: string, reasoning: string, correct?: boolean }[] }> = ({ diagnosesHistory }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-4>Previous Diagnoses">Previous Diagnosis</h2>
            <ul>
                {diagnosesHistory.map((diagnosisEntry, index) => (
                    <li key={index}>
                        Diagnosis: {diagnosisEntry.diagnosis}, Reasoning: {diagnosisEntry.reasoning}, 
                        <span style={{ color: diagnosisEntry.correct ? 'green' : 'red' }}>
                            {diagnosisEntry.correct ? 'Correct' : 'Incorrect'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreviousDiagnoses;
