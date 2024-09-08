import { AccountCircle, NotificationsActiveOutlined } from '@mui/icons-material'
import { AppBar, Badge, Box, IconButton, Input, InputAdornment, MenuItem, MenuList, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideBar from '../sideBar/SideBar';

const Header = () => {
  return (
    <section>
     
      <AppBar sx={{bgcolor:"#FFFFFF",padding:"5px",height:"70px",display:"flex",flexDirection:"row"}}>
        <Box sx={{marginTop:"15px",color:"black"}}>
      <SideBar/>
      </Box>
      <TextField
        id="filled-search"
        type="search"
        variant="outlined" 
        sx={{width:"200px", '& .MuiOutlinedInput-root': {
          padding: 2, // Remove default padding
          height: '40px', // Set the custom height for the TextField
          marginTop:"15px"
        },}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>

          ),
        }}
      
      />
    <Box sx={{ flexGrow: 1 }} /> {/* This will push the following items to the right */}
    <Box sx={{ display:"flex", justifyContent:"flex-end", alignItems:"center" }}>
      <MenuItem>
        <IconButton>
          <GitHubIcon sx={{ color:"black" }} />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsActiveOutlined sx={{ color:"black" }} />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <AccountCircle sx={{ color:"black" }} />
        </IconButton>
      </MenuItem>
      <MenuItem sx={{ color:"black" }}>
     <span> Keerthana Duraisamy </span>
      </MenuItem>
    </Box>



    </AppBar>
    </section>
  )
}

export default Header









  
 

