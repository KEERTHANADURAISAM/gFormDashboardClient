import React, { useEffect, useState } from "react";
import {
  Card,
  FormControl,
  FormLabel,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import { userRegister } from "../slices/userAuth";

const Login = () => {
  const currentUser = useSelector((State) => State.user); // Assuming `user` is your slice's name

// Log the current user data from the Redux store
console.log('Current User Data:', currentUser)
     // State to hold form data
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData({
      ...formData, // Spread the existing form data
      [name]: value, // Update the field that was changed
    });
  };
 // Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Submitted:", currentUser);
    // You can add further actions like sending form data to an API here
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]); 
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // Vertically center the Card
    >
      <Card sx={{ width: "350px", padding: "30px", boxShadow: 3 }}>
<form  onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h5" component="div">
                SignIn
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography variant="body2" component="div">
                Don't have an account?
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <FormLabel>Email Address</FormLabel>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                sx={{ marginTop: "12px" }}
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
          </Grid>
          <Grid container spacing={3} sx={{ marginTop: "1px" }}>
            <Grid item xs={6}>
              <Typography variant="h7" component="div">
                Keep me Signin
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography variant="body2" component="div">
                Forgot password?
              </Typography>
            </Grid>
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
              SignIn
            </Button>
          </Grid>
        </FormControl>
        </form>
      </Card>
    </Grid>
  );
};

export default Login;
