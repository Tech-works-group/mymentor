import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
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
        const { data: accessResponse } = await axios.post(
          "http://localhost:8000/api/token/",
          body,
          config
          );
          accessToken = accessResponse.access
          if (accessToken) {
            const userConfig = {
              headers: {
                Authorization: "Bearer " + accessToken,
              },
            };
            const { data: userData } = await axios.get(
              "http://localhost:8000/api/users/user/",
              userConfig
            );
            const findUser = userData.map((user) => {
              if (user.email == email) {
                const userEmail = user.email;
                   setUser(user);
                   setUserEmail(userEmail); 
                return userEmail,user;
              }
                        
            });

            if (accessResponse && accessResponse.access) {
              setAccessToken(accessResponse.access);
            }

            router.push("/");
          }
      } catch (err) {
        console.log("ERROR IN AUTH", err);
        const errorCode = err.response.status;
        if (errorCode == "400")
          alert("Please inter required info")
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
   username
 }) => {
   const config = {
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
   };

   if (password !== passwordConfirmation) {
     alert("Password and password confirmation must be the same")
     return;
   }

   const body = {
     email,
     username,
     password,
     first_name: firstName,
    last_name:lastName,
    is_mentor:mentor,
      is_mentee:mentee,
      date_of_birth:date,
   };

   try {
     const { data: user } = await axios.post(
       "http://localhost:8000/api/users/joinus/",
       body,
       config
     );
     
     alert('signup successful')

     router.push("/signupInformation");

   } catch (err) {
     console.log("ERROR IN AUTH", err);
     const errorCode = err.response.status;
     if (errorCode == "400") alert("Please inter required info");
     else if (errorCode == "401") alert("please inter the correct credentials");
   }
 };

  return (
    <AuthenticationContext.Provider value={{ user,signup, accessToken, login, error, userEmail }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
