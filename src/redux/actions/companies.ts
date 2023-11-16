import { toast } from "react-toastify";
import * as userApi from "../../api/company";
import {
  GET_COMPANY,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
  GET_COMPANIES,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE,
  DELETE_COMPANY,
  DELETE_COMPANY_SUCCESS,
  DELETE_COMPANY_FAILURE,
  EDIT_COMPANY,
  EDIT_COMPANY_SUCCESS,
  EDIT_COMPANY_FAILURE,
} from "../actionTypes/companies";

export const getCompanies = () => (dispatch) => {
  dispatch({
    type: GET_COMPANIES,
  });

  userApi
    .getCompanies()
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: GET_COMPANIES_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_COMPANIES_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
    });
};

export const getCompany = (companyId) => (dispatch) => {
  dispatch({
    type: GET_COMPANY,
  });

  userApi
    .getCompany(companyId)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: GET_COMPANY_SUCCESS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_COMPANY_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
    });
};

export const deleteCompany = (companyId) => (dispatch) => {
  dispatch({
    type: DELETE_COMPANY,
  });

  userApi
    .deleteCompany(companyId)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: DELETE_COMPANY_SUCCESS,
          payload: data,
        });
        toast.success("Company deleted successfully");
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_COMPANY_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};

export const editCompany = (companyId, companyData) => (dispatch) => {
  dispatch({
    type: EDIT_COMPANY,
  });

  userApi
    .updateCompany(companyId, companyData)
    .then((response) => {
      const { data } = response.data;

      if (response.status === 200) {
        dispatch({
          type: EDIT_COMPANY_SUCCESS,
          payload: data,
        });
        toast.success("Company edited successfully");
      }
    })
    .catch((error) => {
      dispatch({
        type: EDIT_COMPANY_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};
