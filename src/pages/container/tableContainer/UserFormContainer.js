import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// StatusIndicator Component
const StatusIndicator = ({ status }) => {
  let color;
  switch (status) {
    case 'Pending':
      color = 'orange';
      break;
    case 'Completed':
      color = 'green';
      break;
    case 'Rejected':
      color = 'red';
      break;
    default:
      color = 'grey';
  }

  return (
    <Box
      sx={{
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'inline-block',
        marginRight: '8px',
      }}
    />
  );
};

// UserFormContainer Component
const UserFormContainer = () => {
  // Sample data with 20 entries
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    userName: `User ${index + 1}`,
    formTitle: `Form Title ${index + 1}`,
    response: Math.floor(Math.random() * 100),
    status: ['Completed', 'Pending', 'Rejected'][Math.floor(Math.random() * 3)],
    totalCreation: Math.floor(Math.random() * 20) + 1,
  }));

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userName', headerName: 'User Name', width: 150 },
    { field: 'formTitle', headerName: 'Form Title', width: 200 },
    { field: 'response', headerName: 'Response', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StatusIndicator status={params.value} />
          <Typography>{params.value}</Typography>
        </Box>
      ),
    },
    { field: 'totalCreation', headerName: 'Total Creation', width: 150 },
  ];

  return (
    <Box
      sx={{
        padding: { xs: '10px', sm: '20px', md: '30px' }, // Adjust padding based on screen size
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        Recent Reports
      </Typography>
      <Paper
        sx={{
          boxShadow: 3,
          borderRadius: 1,
          width: { xs: '100%', sm: '90%', md: '750px' }, // Adjust width based on screen size
          height: '440px',
          marginTop: '10px',
        }}
      >
        <div style={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            sx={{ border: 0 }}
          />
        </div>
      </Paper>
    </Box>
  );
};

export default UserFormContainer;
