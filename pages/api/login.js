 const login = async (req, res) => {
  let accessToken = null;

  if (req.method === "POST") {
    const { username, password } = req.body;

    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = {
      username,
      password,
    };

    try { 
            const { data: accessResponse } = await axios.post(
        "http://localhost:8000/api/token/",
        body,
        config
      );
      console.log(accessResponse)
    } catch (err) {
        console.log('error' ,err)
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};


export default login;