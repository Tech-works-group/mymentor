import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import AuthenticationContext from "../../context/AuthenticationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import TextInput from "../../components/TextInput";

const Login = () => {
  // const [jwtToken, setJwtToken] = useState("");
  // React.useEffect(() => {
  //   fetch("http://localhost:8000/api/token/")
  //     .then((res) => {
  //       let jwtToken = res.header.get("token");
  //       setJwtToken(jwtToken);
  //       console.log(jwtToken);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthenticationContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };
  
  return (
    <div className="container">
      <h1 className="sub_title">Login</h1>
      <form className="form_box" onSubmit={submitHandler}>
        <TextField
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Password"
          inputProps={{ type: "password" }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Link className="small_text" href="/">
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="vertical_margin button secondary_button"
        >
          Login
        </button>
        <div
          className="row"
          style={{ width: "180px", justifyContent: "space-between" }}
        >
          <p>Or login with</p>
          <div>
            <FontAwesomeIcon
              icon={faFacebook}
              className="icon"
              style={{ fontSize: 30 }}
            />
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ fontSize: 30, color: "#007580" }}
            />
          </div>
        </div>
        <p className="row">
          Not a member yet?
          <Link className="signup_link" href="/">
            click here to sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
