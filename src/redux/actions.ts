import * as userApi from "../api/auth";

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = (userData, navigate) => (dispatch) => {
  userApi
    .signup(userData)
    .then((response) => {
      if (response.status === 201) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data,
        });
        navigate('/');
      }
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response.data.message,
      });
    });
};