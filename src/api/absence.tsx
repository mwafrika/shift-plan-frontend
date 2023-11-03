import authAxios from "../utils/auth";

export const requestForAbsence = async (absence) => {
  const response = await authAxios.post(`/absences`, absence);
  return response;
};

export const getAbsences = async () => {
  const response = await authAxios.get(`/absences`);
  return response;
};

export const getAbsence = async (id) => {
  const response = await authAxios.get(`/absences/${id}`);
  return response;
};

export const deleteAbsence = async (id) => {
  const response = await authAxios.delete(`/absences/${id}`);
  return response;
};

export const updateAbsence = async (id, data) => {
  const response = await authAxios.put(`/absences/${id}`, data);
  return response;
};

export const approveAbsence = async (id, data) => {
  const response = await authAxios.patch(`/absences/${id}/approve`, data);
  return response;
};

export const denyAbsence = async (id) => {
  const response = await authAxios.patch(`/absences/${id}/deny`);
  return response;
};
