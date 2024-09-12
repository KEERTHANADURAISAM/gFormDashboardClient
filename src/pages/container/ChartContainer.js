import React from "react";
import WavyChart from "./WavyChart";
import BarChart from "./BarChart";
import { Box } from "@mui/material";

const ChartContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "39px",
        padding: "60px",

        // Media Queries
        "@media (max-width: 1200px)": {
          flexDirection: "row",
          gap: "30px",
          padding: "40px",
        },
        "@media (max-width: 900px)": {
          flexDirection: "column",
          gap: "30px",
          padding: "30px",
        },
        "@media (max-width: 600px)": {
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
        },
      }}
    >
      <div
        style={{
          // Media Queries for individual charts
          "@media (max-width: 900px)": {
            width: "100%",
          },
        }}
      >
        <WavyChart />
      </div>
      <div
        style={{
          "@media (max-width: 900px)": {
            width: "100%",
          },
        }}
      >
        <BarChart />
      </div>
    </Box>
  );
};

export default ChartContainer;
