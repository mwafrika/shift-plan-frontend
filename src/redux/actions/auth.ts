import { toast } from "react-toastify";
import * as userApi from "../../api/auth";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../actionTypes/auth";

export const signup = (userData, navigate, reset) => (dispatch) => {
  userApi
    .signup(userData)
    .then(async (response) => {
      const { data } = await response.data;
      console.log(response, "Response FFFFFF", response.data.message);

      if (response.status === 201) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: data,
        });
        reset();
        toast.success(data.message);
        navigate("/login");
      }
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const signin = (userData, navigate) => (dispatch) => {
  userApi
    .login(userData)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: data,
        });
        localStorage.setItem("user", JSON.stringify(data));
        navigate(`/${data.user.role.name}`);
        window.location.reload();
        toast.success(response.data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: SIGNIN_FAILURE,
        payload: error?.response?.data?.message || error?.response?.data?.error,
      });
      toast.error(
        error?.response?.data?.message || error?.response?.data?.error,
      );
    });
};

export const forgotPassword = (userData, navigate) => (dispatch) => {
  dispatch({
    type: FORGET_PASSWORD_REQUEST,
  });
  userApi
    .forgetPassword(userData)
    .then((response) => {
      const { data } = response?.data;
      console.log(response, "Response FFFFFF", data.message);
      if (response?.status === 200) {
        dispatch({
          type: FORGET_PASSWORD_SUCCESS,
          payload: data,
        });
        navigate("/reset-password");
        toast.success(data?.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: FORGET_PASSWORD_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const resetPassword = (userData, navigate) => (dispatch) => {
  dispatch({
    type: RESET_PASSWORD_REQUEST,
  });
  userApi
    .ResetPassword(userData)
    .then((response) => {
      const { data } = response?.data;
      if (response?.status === 200) {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: data,
        });
        navigate("/login");
        toast.success(response?.data?.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};
