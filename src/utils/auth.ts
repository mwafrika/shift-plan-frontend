import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = "http://localhost:5000/api/v1";

const authAxios = axios.create({
  baseURL,
});

authAxios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user") as any) || {};
    console.log(user, "userrr");
    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    logout();
    return Promise.reject(error);
  },
);

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      JSON.parse(localStorage.getItem("user") as any)?.token
    ) {
      originalRequest._retry = true;
      localStorage.removeItem("user");
      logout();
    }
    return Promise.reject(error);
  },
);

export const logout = () => {
  window.location.href = "/login";
  // const navigate = useNavigate();
  // navigate("/login");
};

export default authAxios;
