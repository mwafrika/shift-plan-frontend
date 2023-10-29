import {
  FETCH_ROLES_START,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  FETCH_SINGLE_ROLE_FAILURE,
  FETCH_SINGLE_ROLE_START,
  FETCH_SINGLE_ROLE_SUCCESS,
  CREATE_ROLE_FAILURE,
  CREATE_ROLE_START,
  CREATE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
  DELETE_ROLE_START,
  DELETE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  UPDATE_ROLE_START,
  UPDATE_ROLE_SUCCESS
} from "../actionTypes/auth";
import { toast } from "react-toastify";
import * as userApi from "../../api/users";

export const fetchRoles = () => (dispatch) => {
  dispatch({
    type: FETCH_ROLES_START,
  });
  userApi
    .getRoles()
    .then((response) => {
      const { data } = response.data;
      console.log(response, "Response FFFFFF", response.data.message);
      if (response.status === 200) {
        dispatch({
          type: FETCH_ROLES_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ROLES_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const fetchSingleRole = (id) => (dispatch) => {
  dispatch({
    type: FETCH_ROLES_START,
  });
  userApi
    .getRole(id)
    .then((response) => {
      const { data } = response.data;
      console.log(response, "Response FFFFFF", response.data.message);

      if (response.status === 200) {
        dispatch({
          type: FETCH_ROLES_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ROLES_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const createRole = (roleData, navigate, reset) => (dispatch) => {
  userApi
    .addRole(roleData)
    .then((response) => {
      const { data } = response.data;
      console.log(response, "Response FFFFFF", response.data.message);

      if (response.status === 201) {
        dispatch({
          type: CREATE_ROLE_SUCCESS,
          payload: data,
        });
        reset();
        toast.success(data.message);
        navigate("/roles");
      }
    })
    .catch((error) => {
      dispatch({
        type: CREATE_ROLE_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const deleteRole = (id) => (dispatch) => {
  userApi
    .deleteRole(id)
    .then((response) => {
      const { data } = response.data;
      console.log(response, "Response FFFFFF", response.data.message);

      if (response.status === 200) {
        dispatch({
          type: DELETE_ROLE_SUCCESS,
          payload: data,
        });
        toast.success(data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_ROLE_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};
