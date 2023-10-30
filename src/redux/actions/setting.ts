import{
GET_USER_PROFILE_START,
GET_USER_PROFILE_SUCCESS,
GET_USER_PROFILE_FAILURE,
UPDATE_USER_PROFILE_START,
UPDATE_USER_PROFILE_SUCCESS,
UPDATE_USER_PROFILE_FAILURE
} from '../actionTypes/setting'

import { toast } from "react-toastify";
import * as userApi from "../../api/setting";

export const getUserProfile = () => async (dispatch: any) => {
  try {
    dispatch({ type: GET_USER_PROFILE_START });
    const res = await userApi.getUserProfile();
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_USER_PROFILE_FAILURE });
    toast.error(err.response.data.message);
  }
};

export const updateUserProfile = (formData: any) => async (dispatch: any) => {
  try {
    dispatch({ type: UPDATE_USER_PROFILE_START });
    const res = await userApi.updateUserProfile(formData);
    dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: res.data });
    toast.success(res.data.message);
  } catch (err) {
    dispatch({ type: UPDATE_USER_PROFILE_FAILURE });
    toast.error(err.response.data.message);
  }
};
