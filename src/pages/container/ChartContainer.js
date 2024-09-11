import React from "react";
import WavyChart from "./WavyChart";
import LineCHart from "./LineCHart";
import { Box, Grid, Grid2 } from "@mui/material";
import BarChart from "./BarChart";

const ChartContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "39px",
        padding: "60px",
      }}
    >
      <div>
        <WavyChart />
      </div>
      <div>
        <BarChart />
      </div>
    </Box>
  );
};

export default ChartContainer;
