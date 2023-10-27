import { toast } from "react-toastify";
import * as userApi from "../../api/auth";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from "../actionTypes/auth";

export const signup = (userData, navigate) => (dispatch) => {
  userApi
    .signup(userData)
    .then((response) => {
      const { data } = response.data;
      console.log(response, "Response FFFFFF", response.data.message);

      dispatch({
        type: SIGNUP_REQUEST,
      });

      toast.loading("Loading...");

      if (response.status === 201) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: data,
        });
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

      console.log("Response ZZZZZZZZZ", data.user.role.name);
      dispatch({
        type: SIGNIN_REQUEST,
      });

      if (response.status === 200) {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: data,
        });

        localStorage.setItem("user", JSON.stringify(data));
        navigate(`/${data.user.role.name}`);
        toast.success(response.data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: SIGNIN_FAILURE,
        payload: error.response.data.message || error.response.data.error,
      });
      toast.error(error.response.data.message || error.response.data.error);
    });
};
