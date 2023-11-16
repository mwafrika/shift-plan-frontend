import { toast } from "react-toastify";
import * as userApi from "../../api/department";
import {
  CREATE_DEPARTMENT_START,
  CREATE_DEPARTMENT_SUCCESS,
  CREATE_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENTS_START,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  FETCH_SINGLE_DEPARTMENT_START,
  FETCH_SINGLE_DEPARTMENT_SUCCESS,
  FETCH_SINGLE_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_START,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_START,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  GET_DEPARTMENT_EMPLOYEES_START,
  GET_DEPARTMENT_EMPLOYEES_SUCCESS,
  GET_DEPARTMENT_EMPLOYEES_FAILURE,
  SEARCH_DEPARTMENT_START,
  SEARCH_DEPARTMENT_SUCCESS,
  SEARCH_DEPARTMENT_FAILURE,
} from "../actionTypes/department";

export const createDepartment = (departmentData) => (dispatch) => {
  dispatch({
    type: CREATE_DEPARTMENT_START,
  });

  userApi
    .addDepartment(departmentData)
    .then((response) => {
      const { data } = response?.data;
      console.log(data, "DEpartment actions");
      if (response?.status === 201) {
        dispatch({
          type: CREATE_DEPARTMENT_SUCCESS,
          payload: data,
        });
        toast.success(response?.data?.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: CREATE_DEPARTMENT_FAILURE,
        payload: error?.response?.data?.message || error?.response?.data?.error,
      });
      toast.error(
        error?.response?.data?.message || error?.response?.data?.error,
      );
    });
};

export const getDepartments = () => (dispatch) => {
  userApi
    .getDepartments()
    .then((response) => {
      const { data } = response.data;

      dispatch({
        type: FETCH_DEPARTMENTS_START,
      });

      if (response.status === 200) {
        dispatch({
          type: FETCH_DEPARTMENTS_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: FETCH_DEPARTMENTS_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
    });
};

export const getDepartment = (departmentId) => (dispatch) => {
  dispatch({
    type: FETCH_SINGLE_DEPARTMENT_START,
  });

  userApi
    .getDepartment(departmentId)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: FETCH_SINGLE_DEPARTMENT_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: FETCH_SINGLE_DEPARTMENT_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
    });
};

export const deleteDepartment = (departmentId) => (dispatch) => {
  dispatch({
    type: DELETE_DEPARTMENT_START,
  });

  userApi
    .deleteDepartment(departmentId)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: DELETE_DEPARTMENT_SUCCESS,
          payload: data,
        });
        toast.success(response.data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_DEPARTMENT_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const updateDepartment =
  (departmentId, departmentData) => (dispatch) => {
    dispatch({
      type: UPDATE_DEPARTMENT_START,
    });

    userApi
      .editDepartment(departmentId, departmentData)
      .then((response) => {
        const { data } = response.data;

        if (response.status === 200) {
          dispatch({
            type: UPDATE_DEPARTMENT_SUCCESS,
            payload: data,
          });
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_DEPARTMENT_FAILURE,
          payload: error.response.data.message || error.response.data.error,
        });
        toast.error(error.response.data.message || error.response.data.error);
      });
  };

export const getDepartmentEmployees = (departmentId) => (dispatch) => {
  dispatch({
    type: GET_DEPARTMENT_EMPLOYEES_START,
  });

  userApi
    .getUsersPerDepartment(departmentId)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: GET_DEPARTMENT_EMPLOYEES_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_DEPARTMENT_EMPLOYEES_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
    });
};

export const searchDepartments = (searchInput) => {
  console.log(searchInput, "searchInput Actions");
  return {
    type: SEARCH_DEPARTMENT_START,
    payload: searchInput,
  };
};
