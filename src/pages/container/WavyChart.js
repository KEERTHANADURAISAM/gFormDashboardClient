import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Function to generate dynamic monthly data
// Generate short form of monthly data
const generateMonthlyData = (months, minUsers, maxUsers, minForms, maxForms) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const data = [];
  for (let i = 0; i < months; i++) {
    data.push({
      name: monthNames[i],  // Use short form month name
      users: Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers,
      forms: Math.floor(Math.random() * (maxForms - minForms + 1)) + minForms,
    });
  }
  return data;
};

// Generate short form of weekly data
const generateWeeklyData = (weeks, minUsers, maxUsers, minForms, maxForms) => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = [];
  for (let i = 0; i < weeks; i++) {
    data.push({
      name: weekDays[i],  // Use short form weekday name
      users: Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers,
      forms: Math.floor(Math.random() * (maxForms - minForms + 1)) + minForms,
    });
  }
  return data;
};


const WavyChart = () => {
  // Generate monthly and weekly data
  const monthlyData = generateMonthlyData(12, 100, 300, 80, 250); // 12 months
  const weeklyData = generateWeeklyData(4, 100, 300, 80, 250); // 4 weeks

  // Merge the data
  const combinedData = [...monthlyData, ...weeklyData];

  return (
    <ResponsiveContainer width={700} height={400}>
      
      <AreaChart data={combinedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip/>}/>
        <Legend />
        <Area
          type="monotone"
          dataKey="users"
          stroke="#3b82f6"
          fill="#3b82f6"
          name="users"
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



















