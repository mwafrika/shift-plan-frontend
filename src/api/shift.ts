import authAxios from "../utils/auth";

export const getShifts = async () => {
  const { data } = await authAxios.get("/shifts");
  return data;
};

export const getShift = async (id: string) => {
  const { data } = await authAxios.get(`/shifts/${id}`);
  return data;
};

export const createShift = async (formData: any) => {
  const { data } = await authAxios.post("/shifts", formData);
  return data;
};

export const updateShift = async (id: string, formData: any) => {
  const { data } = await authAxios.patch(`/shifts/${id}`, formData);
  return data;
};

export const deleteShift = async (id: string) => {
  const { data } = await authAxios.delete(`/shifts/${id}`);
  return data;
};

export const assignShift = async (formData: any) => {
  const { data } = await authAxios.post(`/shifts/assign`, formData);
  return data;
};

export const unassignShift = async (formData: any) => {
  const { data } = await authAxios.patch(`/shifts/unassign`, formData);
  return data;
};
