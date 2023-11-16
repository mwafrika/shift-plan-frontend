import authAxios from "../../utils/auth";

export const signup = async (data) => {
  const response = await authAxios.post("/auth/register", data);
  return response;
};

export const login = async (data) => {
  const response = await authAxios.post("/auth/login", data);
  return response;
};

export const logout = async () => {
  const response = await authAxios.get("/auth/logout");
  return response;
};

export const forgetPassword = async (data) => {
  const response = await authAxios.post("/auth/forget-password", data);
  return response;
};

export const ResetPassword = async (data) => {
  const response = await authAxios.post("/auth/reset-password", data);
  return response;
};
