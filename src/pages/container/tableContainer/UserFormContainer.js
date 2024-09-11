import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Box, Typography } from '@mui/material';

const UserFormContainer = () => {
  // Sample data with 20 entries
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    userName: `User ${index + 1}`,
    formTitle: `Form Title ${index + 1}`,
    response: Math.floor(Math.random() * 100),
    status: ['Completed', 'Pending', 'In Progress'][Math.floor(Math.random() * 3)],
    totalCreation: Math.floor(Math.random() * 20) + 1,
  }));

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Change this number to adjust rows per page

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate paginated data
  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box>
      <Typography>Recent Reports</Typography>
    <Paper sx={{ boxShadow: 3, borderRadius: 1, width: "750px",height:"440px",marginTop:"10px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Form Title</TableCell>
              <TableCell>Response</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total Creation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.formTitle}</TableCell>
                <TableCell>{row.response}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.totalCreation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  );
};

export default UserFormContainer;
