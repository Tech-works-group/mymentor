import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

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
        const { data: accessResponse } = await axios.post(
          "http://localhost:8000/api/token/",
          body,
          config
        );
        console.log(accessResponse);
      } catch (err) {
        console.log("error", err);
      }
   
  
  };

  return (
    <AuthenticationContext.Provider value={{ user, accessToken, login, error }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
