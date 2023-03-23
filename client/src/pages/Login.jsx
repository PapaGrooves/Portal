import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { regexPassword } from "../utils";

import {
  Paper,
  Container,
  Link,
  Stack,
  Button,
  Box,
  Divider,
  Typography,
  TextField,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Logging a message to console when component mounts
console.log("function login");
// Defining the Login component as a functional component
function Login({}) {
    // Initializing state variables using the useState hook
  const navigate = useNavigate();
  // define state for form values and errors
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    is_admin: false,
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    fetchError: false,
    fetchErrorMsg: "",
  });
  // Event handler function to update state when form fields are changed
  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value;
        // Checking if input is valid using validator or regex depending on the field name
    let isCorrectValue =
      fieldName === "email"
        ? validator.isEmail(currValue) // validate email using validator library
        : regexPassword.test(currValue); // validate password using regexPassword pattern
    // set corresponding error state based on validation result
    isCorrectValue
      ? setErrors({ ...errors, [fieldName]: false })
      : setErrors({ ...errors, [fieldName]: true });
    // set form value for corresponding field
    setValues({ ...values, [fieldName]: event.target.value });
  };
  // define function for handling password visibility toggle
  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  console.log("handle submit");
  // define function for handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          is_admin: values.false,
        }),
      });
// handle server errors
      if (!res.ok) {
        const error = await res.json();
        return setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg: error.msg,
        });
      }
            // navigate to dashboard on successful login
      navigate("/dashboard");
      // log server response data to the console
      const data = await res.json();
      console.log({ data });

      // this is just a visual feedback for user for this demo
      // this will not be an error, rather we will show a different UI or redirect user to dashboard
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: data.msg,
      });
            // reset form values after successful submission
      setValues({
        email: "",
        password: "",
        is_admin: false,
        showPassword: false,
      });
      return;
    } catch (error) {
            // handle network errors
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg:
          "There was a problem with our server, please try again later",
      });
    }
  };
  // render login form
  return (
    <>
      <div className="login_wrap">
        <Container sx={{ marginTop: "calc(100vh - 40%)" }} maxWidth="xs">
          <Paper elevation={6}>
            <Container
              maxWidth="sm"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="page_heading">
                <h1>Login</h1>
              </div>
            </Container>
            <Stack
              component="form"
              onSubmit={handleSubmit}
              noValidate
              spacing={6}
              sx={{ bgcolor: "#f5f5f6", padding: "40px" }}
            >
              <TextField
                variant="filled"
                type="email"
                label="Email"
                value={values.email}
                onChange={handleChange("email")}
                error={errors.email}
                helperText={
                  errors.email && "Please insert a valid email address"
                }
              />

              <FormControl variant="filled">
                <InputLabel htmlFor="password-field">Password</InputLabel>
                <FilledInput
                  id="password-field"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  error={errors.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  disabled={errors.email || errors.password}
                  sx={{
                    minWidth: "70%",
                  }}
                >
                  Login
                </Button>
              </Box>
              {errors.fetchError && (
                <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
              )}
              <Divider />
              <Typography paragraph align="center">
                Don't have an account yet?{" "}
                <Link component={RouterLink} to="/signup">
                  Sign up here
                </Link>
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default Login;
