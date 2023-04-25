import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  Select,
  MenuItem,
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

const signup = (event) => {
  event.preventDefault();

  const data = {email, fname, lname, password, rpassword, dob, sex};

  axios.post("http://localhost:4000/signup", { data }, {
    withCredentials: true,
    crossDomain: true
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {console.log(error);
  });
}

const [email, setEmail] = useState(); 
const [fname, setFname] = useState(); 
const [lname, setLname] = useState(); 
const [password, setPassword] = useState(); 
const [rpassword, setRpassword] = useState(); 
const [dob, setDob] = useState(); 
const [sex, setSex] = useState(); 

console.log(email, fname, lname, password, rpassword, dob, sex);

  return (
    <>
<form className="signupForm" action="">
  <label htmlFor="email">Email</label>
  <input type="text" placeholder="Email" value={email} id="email" onChange={(e) => setEmail(e.target.value)}/>

  <label htmlFor="fname">First Name</label>
  <input type="text" placeholder="First Name" value={fname} id="fname" onChange={(e) => setFname(e.target.value)}/>

  <label htmlFor="lname">Last Name</label>
  <input type="text" placeholder="" value={lname} id="lname" onChange={(e) => setLname(e.target.value)}/>

  <label htmlFor="password">Password</label>
  <input type="text" placeholder="" value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>

  <label htmlFor="rpassword">Repeat Password</label>
  <input type="text" placeholder="" value={rpassword} id="rpassword" onChange={(e) => setRpassword(e.target.value)}/>

  <label htmlFor="dob">Date of Birth</label>
  <input type="date" placeholder="" value={dob} id="dob" onChange={(e) => setDob(e.target.value)}/>

  <label htmlFor="sex">Sex</label>
  <select name="sex" id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
    <option value="m">M</option>
    <option value="f">F</option>
  </select>
  {/* <input type="text" placeholder="" value={sex} id="sex" onChange={(e) => setSex(e.target.value)}/> */}

  <button type="submit" onClick={signup}>Submit</button>
</form>

    </>
  );
}

export default Signup;
