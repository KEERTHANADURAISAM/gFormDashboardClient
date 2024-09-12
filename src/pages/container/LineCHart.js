
import { Box, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Function to generate short form of weekly data
const generateWeeklyData = (weeks, minUsers, maxUsers, minForms, maxForms) => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = [];
  for (let i = 0; i < weeks; i++) {
    data.push({
      name: weekDays[i],  // Use short form weekday name
      users: Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers,
      forms: Math.floor(Math.random() * (maxForms - minForms + 1)) + minForms,
      type: 'Weekly'
    });
  }
  return data;
};

const LineCHart= () => {
  // State to toggle between weekly and monthly data
  const [view, setView] = useState('Weekly');

  // Generate data
  const weeklyData = generateWeeklyData(7, 100, 300, 80, 250); // 7 days

  // Filter data based on the current view
  const data = view === 'Weekly' ? weeklyData : [];

  return (
    <Box sx={{mt:6}}>
      <Typography variant="h6" sx={{ marginBottom: '5px' }}>Analytics Report</Typography>
    <div style={{ backgroundColor: "#FFFFFF", width: '350px', height: '400px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', padding: '20px' }}>
     <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      {/* Active Users */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography>Active Users (This Week)</Typography>
        <Typography>35</Typography>
      </Box>
      <Divider sx={{ mb: 1}} />

      {/* Forms Created This Week */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography>Forms Created This Week</Typography>
        <Typography>60</Typography>
      </Box>
      <Divider sx={{ mb: 1 }} />

      {/* Responses Received This Week */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography>Responses Received This Week</Typography>
        <Typography>120</Typography>
      </Box>
      <Divider sx={{ mb: 1 }} />
    </Box>

      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#3b82f6"
            dot={{ stroke: '#3b82f6', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
          {/* Add a second Line component if you want to plot 'forms' */}
        </LineChart>
      </ResponsiveContainer>
    </div>
    </Box>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p>Users: {payload[0].value}</p>
        {/* If you have a second dataKey for forms, you can show it here */}
      </div>
    );
  }
  return null;
};

export default LineCHart;
