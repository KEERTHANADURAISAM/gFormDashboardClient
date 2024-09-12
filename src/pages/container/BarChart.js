import React, { useState } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Function to generate short form of weekly data
const generateWeeklyData = (weeks, minUsers, maxUsers, minForms, maxForms) => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = [];
  for (let i = 0; i < weeks; i++) {
    data.push({
      name: weekDays[i], // Use short form weekday name
      users: Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers,
      forms: Math.floor(Math.random() * (maxForms - minForms + 1)) + minForms,
      type: "Weekly",
    });
  }
  return data;
};

const BarChart = () => {
  // State to toggle between weekly and monthly data
  const [view, setView] = useState("Weekly");

  // Generate data
  const weeklyData = generateWeeklyData(7, 100, 300, 80, 250); // 7 days

  // Filter data based on the current view
  const data = view === "Weekly" ? weeklyData : [];

  return (
    <div>
      <p>This Week Form Responses</p>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "350px",
          height: "400px",
          marginTop: "40px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <ResponsiveContainer width={330} height={400}>
          <RechartsBarChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            {/* Bars for Users */}
            <Bar
              dataKey="users"
              // stroke="#3b82f6"
              fill="#5BADA9" // Light blue
              name="Responses"
              barSize={20}
              radius={[8, 8, 8, 8]} // Rounded corners for the bars
            />

            {/* Bars for Forms (optional) */}
          </RechartsBarChart>
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
        <p>Users: {payload[0].value}</p>
        <p>Forms: {payload[1]?.value || "N/A"}</p>
      </div>
    );
  }
  return null;
};

export default BarChart;
