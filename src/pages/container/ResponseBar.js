import React, { useState } from "react";
import { Box, Checkbox, Divider, FormControl, FormControlLabel, MenuItem, Select, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
    <Box
      sx={{
        padding: { xs: '10px', sm: '20px', md: '30px' }, // Responsive padding
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '650px',
          mb: 1,
        }}
      >
        <Typography sx={{ marginTop: 2 }}>Form Responses</Typography>
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
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: { xs: '100%', sm: '90%', md: '650px' }, // Responsive width
          height: { xs: 'auto', md: '400px' }, // Adjust height for different screens
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          overflowY: 'auto', // Allow scrolling if content overflows
          borderRadius: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Forms Created This Week */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>12250</Typography>
            <Box>
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ color: "#FAAD14", '&.Mui-checked': { color: "#FAAD14" } }} />}
                label="New Arrivals"
                onChange={handleChangeChecked}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Old Responses"
                onChange={handleChangeChecked}
              />
            </Box>
          </Box>
          <Divider sx={{ mb: 1 }} />
        </Box>
        <ResponsiveContainer width="100%" height={300}> {/* Set a fixed height for the chart */}
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
      </Box>
    </Box>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p>Users: {payload[0].value}</p>
        {payload.length > 1 && <p>Forms: {payload[1].value}</p>}
      </div>
    );
  }
  return null;
};

export default ResponseBar;
