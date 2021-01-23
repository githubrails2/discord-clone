import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import logo from "../../logo512.png";
import { auth, provider } from "../../config/firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <h2>Login Page</h2>
      <div className="login_logo">
        <img src={logo} alt="discord Logo" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
