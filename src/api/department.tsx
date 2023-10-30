import authAxios from "../utils/auth";

export const editDepartment = async (id, data) => {
  const response = await authAxios.patch(`/departments/${id} `, data);
  return response;
};

export const getDepartments = async () => {
  const response = await authAxios.get(`/departments`);
  return response;
};

export const getDepartment = async (id) => {
  const response = await authAxios.get(`/departments/${id}`);
  return response;
};

export const deleteDepartment = async (id) => {
  const response = await authAxios.delete(`/departments/${id}`);
  return response;
};

export const addDepartment = async (data) => {
  try {
    const response = await authAxios?.post(`/departments/create`, data);
    return response;
  } catch (error) {
    console.log(error?.message);
  }
};

export const getUsersPerDepartment = async (id) => {
  const response = await authAxios.get(`/departments/${id}/users`);
  return response;
};
