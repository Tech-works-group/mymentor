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
  }
};

export const createMentoringRequest = async ({
  title,
  description,
  isPaid,
  amount,
  location,
  address,
  duration,
  experience,
  background,
  tasks,
  requirements,
  startingFrom,
  endingAt,
  designation,
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
    title,
    description,
    isPaid,
    amount,
    location,
    address,
    duration,
    experience,
    background,
    tasks,
    requirements,
    startingFrom,
    endingAt,
    designation,
    createdBy: user,
    status: "open",
    postType: "request",
  };

  try {
    const { data: user } = await axios.post(
      "http://localhost:8000/v1/posts/createMentoringRequest",
      body,
      config
    );

    alert("signup successful");

    router.push("/signupInformation");
  } catch (err) {
    console.log("ERROR IN AUTH", err);
    const errorCode = err.response.status;
    if (errorCode == "400") alert("Please inter required info");
    else if (errorCode == "401") alert("please inter the correct credentials");
  }
};
