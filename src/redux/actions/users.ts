import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  EDIT_USER,
  
  
} from "../actionTypes/users";

import { toast } from "react-toastify";
import * as userApi from "../../api/users";

export const addUser = (userData) => (dispatch) => {
  dispatch({
    type: ADD_USER,
  });

  userApi
    .addUser(userData)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 201) {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: data,
        });
        toast.success(response.data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_USER_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const getUsers = () => (dispatch) => {
  userApi
    .getUsers()
    .then((response) => {
      const { data } = response.data;
      console.log(data, "users actions");
      if (response.status === 200) {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const getUser = (userId) => (dispatch) => {
  dispatch({
    type: GET_USER,
  });

  userApi
    .getUser(userId)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_USER_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const deleteUser = (userId) => (dispatch) => {
  dispatch({
    type: DELETE_USER,
  });

  userApi
    .deleteUser(userId)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: data,
        });
        toast.success(response.data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const editUser = (userId, userData) => (dispatch) => {
  dispatch({
    type: EDIT_USER,
  });

  userApi
    .editUser(userId, userData)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: EDIT_USER_SUCCESS,
          payload: data,
        });
        toast.success(response.data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: EDIT_USER_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const logout = (navigate) => (dispatch) => {
  localStorage.removeItem("user");
  navigate("/login");
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: SIGNUP_FAILURE,
    payload: "",
  });
  dispatch({
    type: SIGNIN_FAILURE,
    payload: "",
  });
};
