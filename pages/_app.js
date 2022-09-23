import "@nextcss/reset";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthenticationProvider } from "../context/AuthenticationContext";

import "../styles/globals.css";
import Layout from "../common/Layout";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user,setUser] = useState(null)
  useEffect(() => {
    if (user) {
      return
    }
    const getUser = async () => {
     try {
           const { data } = await axios.get(
        "http://localhost:8000/v1/users/me",
        { ...config, withCredentials: true }
      );
      console.log('data',data)
      setUser(data)
     
     } catch (error) {
      
     }
    }
    getUser()
  })
  return (
    <>
      <AuthenticationProvider currentUser={user}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthenticationProvider>
    </>
  );
}

export default MyApp;

