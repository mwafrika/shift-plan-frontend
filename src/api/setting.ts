import authAxios from "../utils/auth";

export const getUserProfile = async () => {
  const { data } = await authAxios.get("/profile/me");
  return data;
};

export const updateUserProfile = async (formData: any) => {
  const { data } = await authAxios.patch("/profile/me", formData);
  return data;
};
