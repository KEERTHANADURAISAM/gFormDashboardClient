import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
const UserCardContainer = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography>User Name</Typography>
        <Typography>Form Count</Typography>
      </Box>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "350px",
          height: "400px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          marginTop:"40px"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "300px" }}>
          {/* Forms Created This Week */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>
              {" "}
              <IconButton>
                <AccountCircle sx={{ color: "black" }} />
              </IconButton>
              User Name
            </Typography>
            <Typography>60</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />

          {/* Responses Received This Week */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>
              {" "}
              <IconButton>
                <AccountCircle sx={{ color: "black" }} />
              </IconButton>
              User Name
            </Typography>
            <Typography>120</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>
              {" "}
              <IconButton>
                <AccountCircle sx={{ color: "black" }} />
              </IconButton>
              User Name
            </Typography>
            <Typography>120</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>
              {" "}
              <IconButton>
                <AccountCircle sx={{ color: "black" }} />
              </IconButton>
              User Name
            </Typography>
            <Typography>120</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>
              {" "}
              <IconButton>
                <AccountCircle sx={{ color: "black" }} />
              </IconButton>
              User Name
            </Typography>
            <Typography>120</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>
              {" "}
              <IconButton>
                <AccountCircle sx={{ color: "black" }} />
              </IconButton>
              User Name
            </Typography>
            <Typography>120</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
        </Box>
      </div>
    </Box>
  );
};

export default UserCardContainer;
