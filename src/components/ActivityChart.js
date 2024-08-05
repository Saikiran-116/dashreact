import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './ActivityChart.css';

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 24 }, (_, i) => i + 1), // Assuming 24 data points for hours of the day
    datasets: [
      {
        label: 'Activity',
        data: [5000, 7000, 6000, 8000, 12000, 15000, 13000, 14000, 11000, 9000, 8500, 8000, 9500, 10000, 11500, 12500, 13500, 14000, 14500, 13000, 12000, 11000, 9500, 8500],
        backgroundColor: '#7294ff',
        borderColor: '#6a6b6f',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#fff',
        },
      },
      x: {
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
