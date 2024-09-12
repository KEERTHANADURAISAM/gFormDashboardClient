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
        gap: "39px",
        marginLeft: "60px",
        '@media (max-width: 1200px)': {
          flexDirection: "column",
          marginLeft: "30px",
        },
        '@media (max-width: 900px)': {
          flexDirection: "column",
          gap: "20px",
          marginLeft: "20px",
        },
        '@media (max-width: 600px)': {
          flexDirection: "column",
          gap: "10px",
          marginLeft: "10px",
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
