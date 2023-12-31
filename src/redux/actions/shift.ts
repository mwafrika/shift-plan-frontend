import {
  CREATE_SHIFT_START,
  CREATE_SHIFT_SUCCESS,
  CREATE_SHIFT_FAILURE,
  GET_SHIFT_START,
  GET_SHIFT_SUCCESS,
  GET_SHIFT_FAILURE,
  UPDATE_SHIFT_START,
  UPDATE_SHIFT_SUCCESS,
  UPDATE_SHIFT_FAILURE,
  DELETE_SHIFT_START,
  DELETE_SHIFT_SUCCESS,
  DELETE_SHIFT_FAILURE,
  ASSIGN_SHIFT_START,
  ASSIGN_SHIFT_SUCCESS,
  ASSIGN_SHIFT_FAILURE,
  GET_SHIFTS_WITH_EMPLOYEES_START,
  GET_SHIFTS_WITH_EMPLOYEES_SUCCESS,
  GET_SHIFTS_WITH_EMPLOYEES_FAILURE,
  EXPORT_SHIFTS_START,
  EXPORT_SHIFTS_SUCCESS,
  EXPORT_SHIFTS_FAILURE,
} from "../actionTypes/shift";

import { toast } from "react-toastify";
import * as shiftApi from "../../api/shift";

export const createShift = (shift) => async (dispatch) => {
  dispatch({ type: CREATE_SHIFT_START });
  try {
    const response = await shiftApi.createShift(shift);
    dispatch({ type: CREATE_SHIFT_SUCCESS, payload: response.data });
    toast.success("Shift created successfully");
  } catch (error) {
    dispatch({ type: CREATE_SHIFT_FAILURE });
    toast.error("Error creating shift");
  }
};

export const getShift = (id) => async (dispatch) => {
  dispatch({ type: GET_SHIFT_START });
  try {
    const response = await shiftApi.getShift(id);
    dispatch({ type: GET_SHIFT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_SHIFT_FAILURE });
  }
};

export const getShifts = () => async (dispatch) => {
  dispatch({ type: GET_SHIFT_START });
  try {
    const response = await shiftApi.getShifts();
    dispatch({ type: GET_SHIFT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_SHIFT_FAILURE });
  }
};

export const updateShift = (id, shift) => async (dispatch) => {
  dispatch({ type: UPDATE_SHIFT_START });
  try {
    const response = await shiftApi.updateShift(id, shift);
    dispatch({ type: UPDATE_SHIFT_SUCCESS, payload: response.data });
    toast.success("Shift updated successfully");
  } catch (error) {
    dispatch({ type: UPDATE_SHIFT_FAILURE });
    toast.error("Error updating shift");
  }
};

export const deleteShift = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SHIFT_START });
  try {
    const response = await shiftApi.deleteShift(id);
    dispatch({ type: DELETE_SHIFT_SUCCESS, payload: response.data });
    toast.success("Shift deleted successfully");
  } catch (error) {
    dispatch({ type: DELETE_SHIFT_FAILURE });
    toast.error("Error deleting shift");
  }
};

export const assignShift = (shift) => async (dispatch) => {
  console.log(shift, "ASSigning Shift in Action 1");
  dispatch({ type: ASSIGN_SHIFT_START });
  try {
    const response = await shiftApi.assignShift(shift);
    console.log(response.data, "ASSigning Shift in Action");
    dispatch({ type: ASSIGN_SHIFT_SUCCESS, payload: response.data });
    toast.success("Shift assigned successfully");
  } catch (error) {
    dispatch({ type: ASSIGN_SHIFT_FAILURE });
    toast.error("Error assigning shift", error.message);
  }
};

export const unassignShift = (shift) => async (dispatch) => {
  dispatch({ type: ASSIGN_SHIFT_START });
  try {
    const response = await shiftApi.unassignShift(shift);
    dispatch({ type: ASSIGN_SHIFT_SUCCESS, payload: response.data });
    toast.success("Shift unassigned successfully");
  } catch (error) {
    dispatch({ type: ASSIGN_SHIFT_FAILURE });
    toast.error("Error unassigning shift");
  }
};

export const getShiftsWithEmployees = () => async (dispatch) => {
  dispatch({ type: GET_SHIFTS_WITH_EMPLOYEES_START });
  try {
    const { data } = await shiftApi.getShiftsWithEmployees();
    dispatch({
      type: GET_SHIFTS_WITH_EMPLOYEES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_SHIFTS_WITH_EMPLOYEES_FAILURE });
  }
};

export const exportShifts = (startDate, endDate) => async (dispatch) => {
  dispatch({ type: EXPORT_SHIFTS_START });
  try {
    const response = await shiftApi.exportShifts(startDate, endDate);
    dispatch({ type: EXPORT_SHIFTS_SUCCESS, payload: response.data });
    toast.success("Shifts exported successfully");
  } catch (error) {
    dispatch({ type: EXPORT_SHIFTS_FAILURE });
    toast.error("Error exporting shifts");
  }
};
