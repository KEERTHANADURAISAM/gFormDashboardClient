import React from "react";
import { Box } from "@mui/material";
import ResponseBar from "./ResponseBar";
import UserCardContainer from "./tableContainer/UserCardContainer";

const ResponseContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "39px",
        marginTop: "20px",
        padding: "20px",
        mt:6,
        '@media (max-width: 1200px)': {
          flexDirection: "column",
          padding: "20px",
          mt:0,
        },
        '@media (max-width: 900px)': {
          flexDirection: "column",
          padding: "30px",
          gap: "20px",
          mt:0,
        },
        '@media (max-width: 600px)': {
          flexDirection: "column",
          padding: "20px",
          gap: "10px",
          mt:0,
        },
      }}
    >
      <div>
        <ResponseBar />
      </div>
      <div>
        <UserCardContainer />
      </div>
    </Box>
  );
}

export default ResponseContainer;
