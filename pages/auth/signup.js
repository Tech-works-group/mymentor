import React, { useState, useContext } from "react";
import AuthenticationContext from "../../context/AuthenticationContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date());
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userType, setUserType] = useState("");
  const { signup } = useContext(AuthenticationContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    await signup({
      name,
      email,
      date,
      password,
      passwordConfirmation,
      userType,
      username,
    });
  };

  return (
    <div className="container">
      <form className="form_box" onSubmit={submitHandler}>
        <div className="page_title left">
          <h1>Create a new account</h1>
          <p>Basic account information</p>
        </div>
        <div className="signup_form">
          <div className="Personal_info">
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="Personal_info">
            <input
              type="date"
              placeholder="Date of birth"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className="password_confirmation">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <label>You are a </label>
              <select
                onChange={(e) => {
                  setUserType(e.target.value);
                }}
              >
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="vertical_margin button secondary_button"
        >
          Sign Up
        </button>
        <p>Or Sign Up with</p>

        <div>
          <label>
            I accept the{" "}
            <a className="terms_link" href="#">
              terms and conditions
            </a>
            <input className="checkbox" type="checkbox"></input>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Signup;
