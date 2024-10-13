import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DiagnosisStatisticsProps {
    statistics: { correct: number; incorrect: number };  // New prop for statistics
}

const DiagnosisStatistics: React.FC<DiagnosisStatisticsProps> = ({ statistics }) => {
    // Data for charts
    const pieChartData = [
        { name: 'Correct', value: statistics.correct },
        { name: 'Incorrect', value: statistics.incorrect },
    ];

    const barChartData = [
        { name: 'Diagnoses Made', value: statistics.correct + statistics.incorrect },
        { name: 'Correct Diagnoses', value: statistics.correct },
        { name: 'Incorrect Diagnoses', value: statistics.incorrect },
    ];

    const COLORS = ['#0088FE', '#FF8042'];

    return (
        <div className="w-full max-w-xs mx-auto border border-gray-300 p-4 rounded-lg flex flex-col h-full justify-center items-center">
            <h2 className="text-2xl font-bold text-center mb-4">Statistics</h2>

            {/* Pie Chart */}
            <PieChart width={200} height={200} className="mb-4">
                <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
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
            <BarChart width={200} height={200} data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>

            <div className="flex justify-center mt-6">
                <p className="text-sm text-gray-600">
                    Total Diagnoses: {statistics.correct + statistics.incorrect}
                </p>
            </div>
        </div>
    );
};

export default DiagnosisStatistics;
