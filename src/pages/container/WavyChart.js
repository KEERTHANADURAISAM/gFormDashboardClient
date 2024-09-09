import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts';

const WavyChart = () => {
  const [view, setView] = useState('week');

  // Weekly data
  const weeklyData = {
    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      {
        label: 'Page Views',
        data: [30, 50, 28, 35, 55, 95, 75],
        color: 'rgba(54, 162, 235, 1)', // Line color
      },
      {
        label: 'Sessions',
        data: [20, 40, 45, 55, 65, 85, 70],
        color: '#003EB3', // Line color
      },
    ],
  };

  // Monthly data
  const monthlyData = {
    xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      {
        label: 'Page Views',
        data: [125, 175, 150, 225, 275, 325, 375, 400, 425, 475, 500, 525],
        color: '#4877CD', // Line color
      },
      {
        label: 'Sessions',
        data: [300, 400, 320, 500, 600, 700, 800, 850, 900, 1000, 1050, 1100],
        color: '#1777FF', // Line color
      },
    ],
  };

  // Choose the correct data based on view
  const data = view === 'week' ? weeklyData : monthlyData;

  return (
    <div>
      <button onClick={() => setView('week')}>Weekly View</button>
      <button onClick={() => setView('month')}>Monthly View</button>

      {/* Use the LineChart component */}
      <LineChart
        width={500}
        height={300}
        xAxis={[{ data: data.xAxis }]} // Correct xAxis formatting
        series={data.series.map((seriesItem) => ({
          label: seriesItem.label,
          data: seriesItem.data,
          color: seriesItem.color, // Set color directly
        }))} // Map series correctly
      />
    </div>
  );
};

export default WavyChart;
