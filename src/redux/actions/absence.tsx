import {
  REQUEST_ABSENCE_START,
  REQUEST_ABSENCE_SUCCESS,
  REQUEST_ABSENCE_ERROR,
  GET_ABSENCES_START,
  GET_ABSENCES_SUCCESS,
  GET_ABSENCES_ERROR,
  APPROVE_ABSENCE_START,
  APPROVE_ABSENCE_SUCCESS,
  APPROVE_ABSENCE_ERROR,
  DENY_ABSENCE_START,
  DENY_ABSENCE_SUCCESS,
  DENY_ABSENCE_ERROR,
} from "../actionTypes/absence";
import { toast } from "react-toastify";
import * as userApi from "../../api/absence";

export const requestAbsence = (absence: any) => async (dispatch: any) => {
  dispatch({ type: REQUEST_ABSENCE_START });
  try {
    const response = await userApi.requestForAbsence(absence);
    dispatch({ type: REQUEST_ABSENCE_SUCCESS, payload: response.data });
    toast.success("Absence requested successfully");
  } catch (error) {
    dispatch({ type: REQUEST_ABSENCE_ERROR, payload: error });
    toast.error("Error requesting absence");
  }
};

export const getAbsences = () => async (dispatch: any) => {
  dispatch({ type: GET_ABSENCES_START });
  try {
    const response = await userApi.getAbsences();
    dispatch({ type: GET_ABSENCES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ABSENCES_ERROR, payload: error });
  }
};

export const approveAbsence = (id: any, data) => async (dispatch: any) => {
  dispatch({ type: APPROVE_ABSENCE_START });
  try {
    console.log("data ACTION", id, data);
    const response = await userApi.approveAbsence(id, data);
    console.log("response ACTION response.data", response.data);
    dispatch({ type: APPROVE_ABSENCE_SUCCESS, payload: response.data });
    toast.success("Absence approved successfully");
  } catch (error) {
    dispatch({ type: APPROVE_ABSENCE_ERROR, payload: error });
    toast.error("Error approving absence");
  }
};

export const denyAbsence = (id: any) => async (dispatch: any) => {
  dispatch({ type: DENY_ABSENCE_START });
  try {
    const response = await userApi.denyAbsence(id);
    dispatch({ type: DENY_ABSENCE_SUCCESS, payload: response.data });
    toast.success("Absence denied successfully");
  } catch (error) {
    dispatch({ type: DENY_ABSENCE_ERROR, payload: error });
    toast.error("Error denying absence");
  }
};

export const updateAbsence = (id: any, data) => async (dispatch: any) => {
  dispatch({ type: APPROVE_ABSENCE_START });
  try {
    const response = await userApi.updateAbsence(id, data);
    dispatch({ type: APPROVE_ABSENCE_SUCCESS, payload: response.data });
    toast.success("Absence updated successfully");
  } catch (error) {
    dispatch({ type: APPROVE_ABSENCE_ERROR, payload: error });
    toast.error("Error updating absence");
  }
};
