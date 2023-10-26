import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api/v1/auth";

export const signup = async (data) => {
  const response = await axios.post("/register", data);
  return response;
};

export const login = async (data) => {
  const response = await axios.post("/login", data);
  return response;
};

export const logout = async () => {
  const response = await axios.get("/logout");
  return response;
};

export const ForgetPassword = async () => {
  const response = await axios.post("/forget-password");
  return response;
};

export const ResetPassword = async () => {
  const response = await axios.post("/reset-password");
  return response;
};
