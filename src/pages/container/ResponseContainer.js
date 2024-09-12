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
        padding: "60px",
        '@media (max-width: 1200px)': {
          flexDirection: "column",
          padding: "40px",
        },
        '@media (max-width: 900px)': {
          flexDirection: "column",
          padding: "30px",
          gap: "20px",
        },
        '@media (max-width: 600px)': {
          flexDirection: "column",
          padding: "20px",
          gap: "10px",
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
