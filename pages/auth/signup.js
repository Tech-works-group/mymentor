import React, { useState, useContext } from "react";
import AuthenticationContext from "../../context/AuthenticationContext";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date());
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [mentor, setMentor] = useState(false);
  const [mentee, setMentee] = useState(false);
  const { signup } = useContext(AuthenticationContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    await signup({
      firstName,
      email,
      lastName,
      date,
      password,
      passwordConfirmation,
      mentor,
      mentee,
      username,
    });
  };

  return (
    <div className="container">
      <form
        className="form_box"
        onSubmit={submitHandler}
        onSubmit={submitHandler}
      >
        <div className="page_title left">
          <h1>Create a new account</h1>
          <p>Basic account information</p>
        </div>
        <div className="signup_form">
          <div className="Personal_info">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
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
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
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
              <input
                type="checkbox"
                name="Mentor"
                label="Mentor"
                onChange={(e) => setMentor((oldValue) => !oldValue)}
                value={mentor}
                id="mentor"
              ></input>
              <label htmlFor="mentor">Mentor</label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                name="Mentee"
                label="Mentee"
                onChange={(e) => setMentee((oldValue) => !oldValue)}
                value={mentee}
                id="mentee"
              ></input>
              <label htmlFor="mentee">Mentee</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
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
