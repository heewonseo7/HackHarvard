import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DiagnosisStatisticsProps {
    diagnosesHistory: { diagnosis: string; reasoning: string; correct?: boolean }[];
}

const DiagnosisStatistics: React.FC<DiagnosisStatisticsProps> = ({ diagnosesHistory }) => {
    // Calculate correct and incorrect diagnoses
    const correctDiagnoses = diagnosesHistory.filter(diag => diag.correct).length;
    const incorrectDiagnoses = diagnosesHistory.length - correctDiagnoses;

    // Data for charts
    const pieChartData = [
        { name: 'Correct', value: correctDiagnoses },
        { name: 'Incorrect', value: incorrectDiagnoses },
    ];

    const barChartData = [
        { name: 'Diagnoses Made', value: diagnosesHistory.length },
        { name: 'Correct Diagnoses', value: correctDiagnoses },
        { name: 'Incorrect Diagnoses', value: incorrectDiagnoses },
    ];

    const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#00C49F', '#AF19FF'];

    return (
        <div className="w-[25%] ml-6 border border-gray-300 p-4 rounded-lg flex flex-col h-full justify-center items-center">
            <h2 className="text-2xl font-bold text-center mb-4">Statistics</h2>

            {/* Pie Chart */}
            <PieChart width={150} height={150}>
                <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>

            {/* Bar Chart */}
            <BarChart width={180} height={180} data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>

            <div className="flex justify-center mt-6">
                <p className="text-sm text-gray-600">
                    Total Diagnoses: {diagnosesHistory.length}
                </p>
            </div>
        </div>
    );
};

export default DiagnosisStatistics;
