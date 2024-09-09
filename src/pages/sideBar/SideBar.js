import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';

import SpeedIcon from '@mui/icons-material/Speed';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Person4Icon from '@mui/icons-material/Person4';
import PublicIcon from '@mui/icons-material/Public';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';




const SideBar = () => {
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
 
    <Box
    sx={{
      width: 220,
      display: "grid",
      gridTemplateColumns: "repeat(2, 50px)",
    }}
    role="presentation"
    onClick={toggleDrawer(false)}
  >
    {/* Left column */}
    <Box sx={{ margin: "10px" }}>
      <List>
        <ListItem>
          <ListItemText>Navigation</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Authentication</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText>Register</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Utilities</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText>Forms</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <Person4Icon />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Support</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText>Sample Page</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>
            <QuestionMarkIcon />
          </ListItemIcon>
          <ListItemText>Documentation</ListItemText>
        </ListItem>
      </List>
    </Box>
  
   
  </Box>
  

  )

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon sx={{color:"black"}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default SideBar






