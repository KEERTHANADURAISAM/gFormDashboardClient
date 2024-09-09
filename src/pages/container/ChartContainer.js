import { Box, Button, Card, Grid, } from '@mui/material'
import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartContainer = () => {
  // Initial state: weekly view
  const [view, setView] = useState('week');

  // Weekly data
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Page Views',
        data: [30, 50, 28, 35, 55, 95, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointRadius: 1,
        fill: true,
        tension: 0.4, // Makes the line wavy and smooth
      },
      {
        label: 'Sessions',
        data: [20, 40, 45, 55, 65, 85, 70],
        backgroundColor: (context) => {
          const value = context.raw;
          // Define color logic based on value
          if (value > 80) return '#A2C9FF'; // High values in light red
          if (value > 50) return 'rgba(255, 159, 64, 0.2)';  // Medium values in light orange
          return '#B9CEF1'; // Low values in light green
        },
        borderColor: '#003EB3', // Solid border color
        borderWidth: 2,
        pointRadius: 1,
        fill: true,
        tension: 0.4, // Makes the line wavy and smooth
      },
    ],  
  };

  // Monthly data with month names
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Page Views',
        data:[125, 175, 150, 225, 275, 325, 375, 400, 425, 475, 500, 525],
        backgroundColor: '#A3C0EF', // Light purple shade
        borderColor: '#4877CD', // Solid border color
        borderWidth: 2,
        pointRadius: 1,
        fill: true,
        tension: 0.4, // Makes the line wavy and smooth
      },
      {
        label: 'Sessions',
        data: [300, 400, 320, 500, 600, 700, 800, 850, 900, 1000, 1050, 1100],
        backgroundColor: 'rgba(126, 198, 255, 0.2)', // Light blue shade
        borderColor: '#1777FF',
        borderWidth: 2,
        pointRadius: 1,
        fill: true,
        tension: 0.4, // Makes the line wavy and smooth
      },
    ],
  };
  
  // Chart options (same for both views)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Traffic Data (${view === 'week' ? 'Weekly' : 'Monthly'} View)`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
   <section>
    <Grid container spacing={2}>
  <Grid item xs={6}>
 <Box sx={{display:'flex'}}>
  <span>Unique Visitor</span>
  <Box sx={{display:'flex',justifyContent:"flex-end",alignItems:"flex-end"}}>
  <Button variant="text"  onClick={() => setView('month')}>Month</Button>
  <Button variant="outlined" onClick={() => setView('week')}>Week</Button>
  </Box>
  </Box>
  <Card sx={{height:"400px"}}>
  <Line data={view === 'week' ? weeklyData : monthlyData} options={options}   style={{ height: '100%', width: '100%' }} />
  </Card>

  </Grid>
  <Grid item xs={6}>
 
  </Grid>
    </Grid>
   </section>
  )
}

export default ChartContainer






























