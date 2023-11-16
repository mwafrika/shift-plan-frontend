import authAxios from "../utils/auth";

export const getCompanies = async () => {
  const response = await authAxios.get(`/companies`);
  return response;
};

export const getCompany = async (id) => {
  const response = await authAxios.get(`/companies/${id}`);
  return response;
};

export const deleteCompany = async (id) => {
  const response = await authAxios.delete(`/companies/${id}`);
  return response;
};

export const updateCompany = async (id, data) => {
  const response = await authAxios.put(`/companies/${id}`, data);
  return response;
};
