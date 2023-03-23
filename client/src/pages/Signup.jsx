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
console.log("signup function login");

// NOTE chatGPT says:
// There are a few things that could be improved in the code:

//     Error handling: When an error occurs, the setErrors function is called with the new error state, 
// which overwrites all the previous error state. Instead, you could use the spread operator to update 
// only the error state that needs to be changed. For example:

// setErrors(prevErrors => ({
//   ...prevErrors,
//   email: true,
// }));

// This way, you're preserving the previous state and only changing the email field.

// Password validation: The password validation could be improved by providing more specific error messages to the user. 
// For example, you could have an error message that tells the user that the password must be at least 8 characters long, 
// another message that tells the user that the password must contain at least one uppercase letter, etc.

// Code organization: The code could be organized into separate functions for better readability and maintainability. 
// For example, you could have a separate function for handling form submission, a separate function for handling input validation, etc.

// Styling: The styling of the form could be improved by using a more consistent design, adding labels to the form fields, etc.

// Input type validation: The dob field is currently not being validated with a regular expression, 
// which could lead to incorrect input data. You could add a regular expression to validate the date input.





function Signup() {
    // useNavigate allows for programmatic navigation between pages
  const navigate = useNavigate();
    // set up state variables using the useState hook
  const [values, setValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    dob:"",
    showPassword: false,
    showRepeatPassword: false,
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    dob:false,
    fetchError: false,
    fetchErrorMsg: "",
  });
  
  // handleChange function updates state variables as user inputs data
  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value;
       // validate input based on field name
    switch (fieldName) {
      case "email":
        validator.isEmail(currValue)
          ? setErrors({ ...errors, email: false })
          : setErrors({ ...errors, email: true });
        break;

      case "password":
        regexPassword.test(currValue)
          ? setErrors({ ...errors, password: false })
          : setErrors({ ...errors, password: true });
        break;

      case "repeatPassword":
        currValue === values.password
          ? setErrors({ ...errors, repeatPassword: false })
          : setErrors({ ...errors, repeatPassword: true });
        break;
        case "dob":
          validator.isDate(currValue)
          ? setErrors({ ...errors, dob: false })
          : setErrors({ ...errors, dob: true });
        break;
    }
        // update state variable with new value
    setValues({ ...values, [fieldName]: event.target.value });
  };

  // handleShowPassword function toggles password visibility in input field
  const handleShowPassword = (showPasswordField) => {
    setValues({
      ...values,
      [showPasswordField]: !values[showPasswordField],
    });
  };
  console.log("submnit");
  // handleSubmit function handles form submission when user clicks submit button
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
            // use fetch API to make a POST request to server to register user
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!res.ok) {
                // if there is an error with server response, update state variables with error information
        const error = await res.json();
        return setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg: error.msg,
        });
      }
      // redirecting user to login on successful registration
      navigate("/");
            // show success message to user after registration
      const data = await res.json();
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: data.msg,
      });
            // reset form fields after successful registration 
      setValues({
        email: "",
        password: "",
        is_admin: "",
        repeatPassword: "",
        dob: "",
        showPassword: false,
        showRepeatPassword: false,
      });
    } catch (error) {
      return;
      // eslint-disable-next-line no-unreachable
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg:
          "There was a problem with our server, please try again later",
      });
    }
  };

  return (
    <>
      <div className="signup_wrap">
        <Container sx={{ marginTop: "calc(100vh - 45%)" }} maxWidth="sm">
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
                <h1>Sign up </h1>
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
                        onClick={() => handleShowPassword("showPassword")}
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

                <FormHelperText error={errors.password}>
                  Password must be at least 8 characters, have one symbol, 1
                  uppercase letter, 1 lowercase and 1 digit
                </FormHelperText>
              </FormControl>

              <FormControl variant="filled">
                <InputLabel htmlFor="password-repeat-field">
                  Repeat password
                </InputLabel>
                <FilledInput
                  id="password-repeat-field"
                  type={values.showRepeatPassword ? "text" : "password"}
                  value={values.repeatPassword}
                  onChange={handleChange("repeatPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleShowPassword("showRepeatPassword")}
                        edge="end"
                      >
                        {values.showRepeatPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.repeatPassword && (
                  <FormHelperText error={errors.repeatPassword}>
                    Password must be the same as above
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl>
                {/* FIXME include date of birth "dob" */}
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
                  sx={{
                    minWidth: "70%",
                  }}
                >
                  Sign me up!
                </Button>
              </Box>
              {errors.fetchError && (
                <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
              )}
              <Divider />
              <Typography paragraph align="center">
                Already have an account?{" "}
                <Link component={RouterLink} to="/">
                  Login here
                </Link>
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default Signup;
