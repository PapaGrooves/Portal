import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Grid } from "@mui/material";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [dob, setDob] = useState("");

  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("submitted form")
    e.preventDefault();
    await signup(email, fname, lname, password, rpassword, dob);

    if (rpassword !== password) {
      throw new Error("Password doesn't match");
    }

    alert("Account created successfully");
      navigate("/");
  };

  return (
    <>
      <div className="play_cards signup_card">
        <Grid className="card_grid" container>
          <Card className="card_card ">
            <form className="signupForm" onSubmit={handleSubmit} >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                id="email"
                onChange={(e) => {setEmail(e.target.value)}}
              />

              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={fname}
                id="fname"
                onChange={(e) => {setFname(e.target.value)}}
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={lname}
                id="lname"
                onChange={(e) => {setLname(e.target.value)}}
              />

              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="**********"
                name="password"
                value={password}
                id="password"
                onChange={(e) => {setPassword(e.target.value)}}
              />

              <label htmlFor="rpassword">Repeat Password</label>
              <input
                type="text"
                name="rpassword"
                placeholder="**********"
                value={rpassword}
                id="rpassword"
                onChange={(e) => {setRpassword(e.target.value)}}
              />

              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                placeholder=""
                value={dob}
                id="dob"
                onChange={(e) => {setDob(e.target.value)}}
              />
          
              <Button className="card_button"  disabled={isLoading} type="submit" >
                Submit
              </Button>

              {error && <div className="error">{error}</div>}

              <p>
                Already have an account? Login <Link to="/">here</Link>
              </p>
            </form>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Signup;
