import axios from "axios";

export const getOpportunities = async () => {
  let accessToken = null;

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.get(
      "http://localhost:8000/v1/posts/getRecentOpportunities",
      config
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};
