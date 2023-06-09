import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Grid } from "@mui/material";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { login, error, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    alert("Logged in successfully");
    navigate("/dashboard");
  };

  return (
    <>
      <div className="play_cards signup_card">
        <Grid className="card_grid" container>
          <Card className="card_card ">
            <form action="" className="signupForm" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                disabled={isLoading}
                className="card_button"
                type="submit"
              >
                Login
              </Button>
              {error && <div className="error">{error}</div>}
              <p>
                Dont have an account yet? Signup <Link to="signup">here</Link>
              </p>
            </form>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Login;
