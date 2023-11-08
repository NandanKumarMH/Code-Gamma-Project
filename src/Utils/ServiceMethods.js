import axios from "axios";

export const executePost = async (endPoint, data) => {
  return await axios.post(process.env.REACT_APP_BACKEND_URL + endPoint, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const executePatch = async (endPoint, data) => {
  return await axios.patch(process.env.REACT_APP_BACKEND_URL + endPoint, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const executeDelete = async (endPoint, data) => {
  return await axios.delete(
    process.env.REACT_APP_BACKEND_URL + endPoint,
    data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export const executeGET = async (endPoint, data) => {
  return await axios.get(process.env.REACT_APP_BACKEND_URL + endPoint, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
