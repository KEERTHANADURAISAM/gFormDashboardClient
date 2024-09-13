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
import { Link } from "react-router-dom";

const Login = () => {
  const currentUser = useSelector((State) => State.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", currentUser);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
                  SignIn
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
              <Link to='/' className="Link">
                <Typography variant="body2" component="div">
                  Don't have an account?
                </Typography>
                </Link>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
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
            <Grid container spacing={2} sx={{ marginTop: "1px" }}>
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
               <Link to='/dashboard' className="Link">
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
                SignIn
              </Button>
              </Link>
            </Grid>
          </FormControl>
        </form>
      </Card>
    </Grid>
  );
};

export default Login;
