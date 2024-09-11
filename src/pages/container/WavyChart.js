import { Box, Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  
} from "recharts";

// Function to generate dynamic monthly data
const generateMonthlyData = (months, minUsers, maxUsers, minForms, maxForms) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const data = [];
  for (let i = 0; i < months; i++) {
    data.push({
      name: monthNames[i], // Short form month name
      users: Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers,
      forms: Math.floor(Math.random() * (maxForms - minForms + 1)) + minForms,
    });
  }
  return data;
};

// Function to generate weekly data
const generateWeeklyData = (weeks, minUsers, maxUsers, minForms, maxForms) => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = [];
  for (let i = 0; i < weeks; i++) {
    data.push({
      name: weekDays[i], // Short form weekday name
      users: Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers,
      forms: Math.floor(Math.random() * (maxForms - minForms + 1)) + minForms,
    });
  }
  return data;
};

const WavyChart = () => {
  const [view, setView] = useState('Week'); // State to manage view (Week, Month, Both)

  // Generate monthly and weekly data
  const monthlyData = generateMonthlyData(12, 100, 300, 80, 250); // 12 months
  const weeklyData = generateWeeklyData(7, 100, 300, 80, 250); // 7 days

  // Data based on the selected view
  const data =
    view === 'Month' ? monthlyData :
    view === 'Week' ? weeklyData :
    [...monthlyData, ...weeklyData]; // Both data combined by default

  return (
    <div>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <p>Unique Visitor</p>
      
      {/* Button Group to Toggle Between Views */}
      <ButtonGroup variant="outlined" sx={{ marginBottom: "20px",display:"flex" }}>
        <Button onClick={() => setView('Week')}>Week</Button>
        <Button onClick={() => setView('Month')}>Month</Button>
        <Button onClick={() => setView('Both')}>Both</Button>
      </ButtonGroup>
      </Box>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "700px",
          height: "400px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <ResponsiveContainer width={700} height={400}>
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              fill="#3b82f6"
              name="Users"
            />
            <Area
              type="monotone"
              dataKey="forms"
              stroke="#2563eb"
              fill="#2563eb"
              name="Forms"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p>{`Users: ${payload[0].value}`}</p>
        <p>{`Forms: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

export default WavyChart;
