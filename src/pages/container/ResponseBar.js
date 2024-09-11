import { Box, Checkbox, Divider, FormControl, FormControlLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResponseBar = () => {
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

  // State to toggle between weekly and monthly data
  const [view, setView] = useState('Weekly');

  // Generate data
  const weeklyData = generateWeeklyData(7, 100, 300, 80, 250); // 7 days

  // Filter data based on the current view
  const data = view === 'Weekly' ? weeklyData : [];

  const [time, setTime] = React.useState(30);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
    <Typography sx={{marginTop:2}}>Form Responses</Typography>
    <Typography>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={time}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={30}>This Month</MenuItem>
          <MenuItem value={7}>This Week</MenuItem>
          <MenuItem value={12}>This Year</MenuItem>
        </Select>
      </FormControl>
    </Typography>
  </Box>
    <div style={{ backgroundColor: "#FFFFFF", width: '650px', height: '400px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', padding: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Active Users */}
      
        {/* Forms Created This Week */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>12250</Typography>
          <Typography>
            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: "#FAAD14", // Color of the checkbox when unchecked
        '&.Mui-checked': {
          color: "#FAAD14", // Color of the checkbox when checked
        },}}/>} label="New Arrivals" onChange={handleChangeChecked} />
            <FormControlLabel control={<Checkbox defaultChecked/>} label="Old Responses" onChange={handleChangeChecked} />
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
      </Box>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="users"
            fill="#FAAD14" // Set the color to yellow
            barSize={12} // Adjust the width of the bars
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="forms"
            fill="#1677FF" // Example color for the second bar
            barSize={12} // Adjust the width of the bars
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
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
        {payload.length > 1 && <p>Forms: {payload[1].value}</p>}
      </div>
    );
  }
  return null;
};

export default ResponseBar;
