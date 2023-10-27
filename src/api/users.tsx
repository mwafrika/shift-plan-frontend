import axios from "axios";
const baseURL = "http://localhost:5000/api/v1/users/";

export const getUsers = async () => {
  const response = await axios.get(`${baseURL}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    },
  });
  console.log(response.data, "All users actions");
  return response;
};

export const getUser = async (id) => {
  const response = await axios.get(`/${id}`);
  return response;
};

export const addUser = async (data) => {
  const response = await axios.post("/", data);
  return response;
};

export const editUser = async (id, data) => {
  const response = await axios.patch(`/${id}`, data);
  return response;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/${id}`);
  return response;
};

export const getProfile = async () => {
  const response = await axios.get("/profile");
  return response;
};
