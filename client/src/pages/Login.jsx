import React, { useState } from "react";
import axios from "axios";
import { context } from "../Context";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  // render login form
  const credentials = React.useContext(context);

  console.log(credentials)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const click = (event) => {
    event.preventDefault();

    const data = {email, password};

    axios.post("http://localhost:4000/login", { data }, {
      withCredentials: true,
      crossDomain: true
    })
    .then(response => {
      console.log(response);
      credentials.setDbData(response.data)

      if (response.data.email) {
        navigate("/profile");
        credentials.setLoading(true);
      } else {

      }

    })
    .catch(error => {console.log(error);
    });
  }
  
  
  return (
    <>
      <form action="" className="signupForm">
        <label htmlFor="email">Email</label>
        <input type="text" value={email} id="email" onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="text" value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" onClick={click}>Login</button>
      </form>
    </>
  );
};

export default Login;
