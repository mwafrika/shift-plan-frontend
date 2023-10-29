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

export const ForgetPassword = async () => {
  const response = await authAxios.post("/auth/forget-password");
  return response;
};

export const ResetPassword = async () => {
  const response = await authAxios.post("/auth/reset-password");
  return response;
};
