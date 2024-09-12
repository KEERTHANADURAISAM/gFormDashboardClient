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
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    dispatch(userRegister({ firstName, lastName, email, password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }} // Vertically center the Card
    >
      <Card
        sx={{
          padding: "30px",
          boxShadow: 3,
          width: {
            xs: "100%",   // Full width on small devices
            sm: "400px",  // Set width on small devices
            md: "450px",  // Slightly larger on medium devices
            lg: "500px",  // Larger width on large devices
            xl: "600px",  // Maximum width for extra large devices
          },
          padding: {
            xs: "20px",   // Reduce padding on small devices
            sm: "30px",   // Normal padding on larger devices
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <Grid container spacing={2}>
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

            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
                    width: {
                      xs: "100%",    // Full width on small devices
                      sm: "200px",   // Normal button size on larger devices
                    },
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
