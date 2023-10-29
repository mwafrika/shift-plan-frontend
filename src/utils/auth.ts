import axios from "axios";

const baseURL = "http://localhost:5000/api/v1";

const authAxios = axios.create({
  baseURL,
});

authAxios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    console.log(user, "userrr");
    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default authAxios;
