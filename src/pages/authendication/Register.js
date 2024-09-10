import {
  Card,
  FormControl,
  FormLabel,
  TextField,
  Grid,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../slices/userAuth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // console.log("Form Submitted:", formData);
    const { firstName, lastName, email, password } = formData;
    // Dispatching the userRegister action with form data as the payload
    dispatch(userRegister({ firstName, lastName, email, password }));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData({
      ...formData, // Spread the existing form data
      [name]: value, // Update the field that was changed
    });
  };

  console.log(formData);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // Vertically center the Card
    >
      <Card sx={{ width: "400px", padding: "30px", boxShadow: 3 }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h5" component="div">
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography variant="body2" component="div">
                  Already have an account?
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginTop: "20px" }}>
              <Grid item xs={6}>
                <FormLabel>First Name*</FormLabel>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  sx={{ marginTop: "12px" }}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <FormLabel>Last Name*</FormLabel>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  sx={{ marginTop: "12px" }}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel>Email Address</FormLabel>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  sx={{ marginTop: "12px" }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>Password</FormLabel>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  variant="outlined"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{ marginTop: "12px" }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    marginTop: "10px",
                    width: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </Card>
    </Grid>
  );
};

export default Register;
