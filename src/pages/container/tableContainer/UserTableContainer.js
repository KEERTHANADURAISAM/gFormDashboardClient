import { Box } from '@mui/material';
import React from 'react';
import UserFormContainer from './UserFormContainer';
import LineCHart from '../LineCHart';

const UserTableContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "19px",
        marginLeft: "20px",
        mt:6,
        '@media (max-width: 1200px)': {
          flexDirection: "column",
          marginLeft: "30px",
          mt:0,
        },
        '@media (max-width: 900px)': {
          flexDirection: "column",
          gap: "20px",
          marginLeft: "20px",
          mt:0,
        },
        '@media (max-width: 600px)': {
          flexDirection: "column",
          gap: "10px",
          marginLeft: "10px",
          mt:0,
        },
      }}
    >
      <div>
        <UserFormContainer />
      </div>
      <div>
        <LineCHart />
      </div>
    </Box>
  );
}

export default UserTableContainer;
