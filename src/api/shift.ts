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

export const assignShift = async (shiftData) => {
  const { data } = await authAxios.post(`/shifts/assign`, shiftData);
  return data;
};

export const unassignShift = async (shiftData) => {
  const { data } = await authAxios.patch(`/shifts/unassign`, shiftData);
  return data;
};

export const getShiftsWithEmployees = async () => {
  const { data } = await authAxios.get("/shifts/employees");
  return data;
};

export const exportShifts = async (startDate, endDate) => {
  const { data } = await authAxios.get(
    `/shifts/employees?startDate=${startDate}&endDate=${endDate}`,
  );
  return data;
};
