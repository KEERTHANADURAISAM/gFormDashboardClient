import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
   
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

const BarChart = () => {
  return (
    <ResponsiveContainer width={700} height={400}>
      
    <BarChart data={combinedData} margin={{right:30}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip/>}/>
      <Legend />
      <Bar
        type="monotone"
        dataKey="users"
        stroke="#3b82f6"
        fill="#3b82f6"
        name="users"
      />
      <Bar
        type="monotone"
        dataKey="forms"
        stroke="#2563eb"
        fill="#2563eb"
        name="Forms"
      />
    </AreaChart>
  </ResponsiveContainer>
  )
}

export default BarChart