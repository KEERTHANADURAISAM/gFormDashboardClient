import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const UserCardContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "10px", sm: "20px", md: "30px" }, // Adjust padding based on screen size
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
          width: { xs: "100%", sm: "90%", md: "350px" }, // Responsive width
        }}
      >
        <Typography variant="h6">User Name</Typography>
        <Typography variant="h6">Form Count</Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: { xs: "100%", sm: "90%", md: "350px" }, // Responsive width
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          marginTop: "20px",
          overflowY: "auto", // Allow scrolling if content overflows
          borderRadius: 1,
          maxHeight: { xs: "300px", sm: "400px", md: "500px" }, // Responsive height
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {Array.from({ length: 7 }).map((_, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center", // Ensure items are vertically centered
                  mb: 1, // Margin at the bottom for spacing
                  flexWrap: "wrap", // Allow items to wrap on smaller screens
                  overflow:"hidden"
                }}
              >
                <Typography>
                  <IconButton>
                    <AccountCircle sx={{ color: "black" }} />
                  </IconButton>
                  User Name
                </Typography>
                <Typography>120</Typography>
              </Box>
              {index < 8 && <Divider sx={{ mb: 1 }} />} {/* Ensure Dividers are only between items */}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UserCardContainer;
