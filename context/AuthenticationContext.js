import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const router = useRouter();

  const login = async ({ email, password }) => {
    let accessToken = null;

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      password,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/v1/auth/login",
        body,
        config
      );
      console.log(data);
      if (data) {
        setUser(data.user);
        setAccessToken(data?.tokens?.access?.token);
        setRefreshToken(data?.tokens?.refresh?.token);
        router.push("/");
      }
    } catch (err) {
      console.log("ERROR IN AUTH", err);
      const errorCode = err.response.status;
      if (errorCode == "400") alert("Please inter required info");
      else if (errorCode == "401")
        alert("please inter the correct credentials");
    }
  };

  const signup = async ({
    firstName,
    email,
    lastName,
    date,
    password,
    passwordConfirmation,
    mentor,
    mentee,
    username,
  }) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (password !== passwordConfirmation) {
      alert("Password and password confirmation must be the same");
      return;
    }

    const body = {
      email,
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      is_mentor: mentor,
      is_mentee: mentee,
      date_of_birth: date,
    };

    try {
      const { data: user } = await axios.post(
        "http://localhost:8000/api/users/joinus/",
        body,
        config
      );

      alert("signup successful");

      router.push("/signupInformation");
    } catch (err) {
      console.log("ERROR IN AUTH", err);
      const errorCode = err.response.status;
      if (errorCode == "400") alert("Please inter required info");
      else if (errorCode == "401")
        alert("please inter the correct credentials");
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, signup, accessToken, login, error, userEmail }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
