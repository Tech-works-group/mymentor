import { StrictMode } from "react";

const login = async (req, res) => {
  let accessToken = null;

  if (req.method === "POST") {
    const { username, password } = req.body;

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
      username,
      password,
    };

    try {
      const { data: accessResponse } = await axios.post(
        "http://localhost:8000/v1/auth/login",
        body,
        config
      );
      //   console.log(accessResponse)
      accessToken = accessResponse.access;
      res.setHeader(
        "set-cookie",
        cookie.serialize("refresh", accessResponse.refresh, {
          httpOnly: true,
          secure: false,
          sameSite: "Strict",
          maxAge: 60 * 60 * 24,
          path: "/",
        })
      );
    } catch (err) {
      console.log("ERROR", err);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

export default login;
