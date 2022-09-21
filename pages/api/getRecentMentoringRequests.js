import axios from "axios";

export const getRecentMentoringRequests = async () => {
  let accessToken = null;

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.get(
      "http://localhost:8000/v1/posts/getRecentMentoringRequests",
      config
    );

    return data;
  } catch (err) {
    console.log(err);
    alert("couldn't fetch requests");
  }
};
