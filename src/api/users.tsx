import authAxios from "../utils/auth";

export const getUsers = async () => {
  const response = await authAxios.get("/users");
  return response;
};

export const getUser = async (id) => {
  const response = await authAxios.get(`/users/${id}`);
  return response;
};

export const addUser = async (data) => {
  const response = await authAxios.post("/users", data);
  return response;
};

export const editUser = async (id, data) => {
  const response = await authAxios.patch(`/users/${id}`, data);
  return response;
};

export const deleteUser = async (id) => {
  const response = await authAxios.delete(`/users/${id}/company`);
  return response;
};

export const getProfile = async () => {
  const response = await authAxios.get("/profile");
  return response;
};

export const getRoles = async () => {
  const response = await authAxios.get("/roles");
  return response;
};

export const getRole = async (id) => {
  const response = await authAxios.get(`/roles/${id}`);
  return response;
};

export const deleteRole = async (id) => {
  const response = await authAxios.delete(`/roles/${id}`);
  return response;
};

export const addRole = async (data) => {
  const response = await authAxios.post("/roles", data);
  return response;
};

export const editRole = async (id, data) => {
  const response = await authAxios.patch(`/roles/${id}`, data);
  return response;
};


export const getUserProfile = async (id) => {
  const response = await authAxios.get(`/users/${id}`);
  return response;
} 