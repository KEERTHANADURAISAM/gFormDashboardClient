import React, { useState } from 'react';
import { AppBar, Badge, Box, IconButton, InputAdornment, MenuItem, TextField, Popover, Typography, Divider } from '@mui/material';
import { AccountCircle, NotificationsActiveOutlined, ExitToApp } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import SideBar from '../sideBar/SideBar';
import { useSelector } from 'react-redux';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const currentUser = useSelector((state) => state.user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section>
      <AppBar sx={{ bgcolor: "#FFFFFF", padding: "5px", height: "70px", display: "flex", flexDirection: "row" }}>
        <Box sx={{ marginTop: "15px", color: "black" }}>
          <SideBar />
        </Box>
        <TextField
          id="filled-search"
          type="search"
          variant="outlined"
          sx={{
            width: "200px",
            '& .MuiOutlinedInput-root': {
              padding: 2, // Remove default padding
              height: '40px', // Set the custom height for the TextField
              marginTop: "15px"
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ flexGrow: 1 }} /> {/* This will push the following items to the right */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <MenuItem>
            <IconButton>
              <a href='https://github.com/KEERTHANADURAISAM/gfromadminclient' rel='noopener noreferrer' target='_blank' rel='noopener noreferrer'>
                <GitHubIcon sx={{ color: "black" }} />
              </a>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsActiveOutlined sx={{ color: "black" }} />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton onClick={handleClick}>
              <AccountCircle sx={{ color: "black" }} />
            </IconButton>
          </MenuItem>
          <Popover
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box sx={{ width: 200, p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {currentUser.name}
              </Typography>
              <Divider />
              <MenuItem onClick={handleClose}>
                <span>{currentUser.firstName} {currentUser.lastName}</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ExitToApp sx={{ mr: 1 }} /> Logout
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ExitToApp sx={{ mr: 1 }} /> Exit
              </MenuItem>
            </Box>
          </Popover>
        </Box>
      </AppBar>
    </section>
  );
}

export default Header;
