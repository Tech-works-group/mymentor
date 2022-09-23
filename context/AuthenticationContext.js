import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const router = useRouter();

  const login = async ({ email, password }) => {
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
        { ...config, withCredentials: true }
      );
      console.log(data);
      if (data) {
        setUser(data.user);

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
    name,
    email,
    date,
    password,
    passwordConfirmation,
    userType,
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
      name,
      userType,
      date_of_birth: date,
    };

    try {
      const { data: user } = await axios.post(
        "http://localhost:8000/v1/auth/register",
        body,
        config
      );

      alert("signup successful");

      router.push("/auth/signupInformation");
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
      value={{ user, signup, login, error, userEmail }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
