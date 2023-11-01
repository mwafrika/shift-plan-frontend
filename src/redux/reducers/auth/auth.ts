// authReducer.js
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../../actionTypes/auth";

const initialState = {
  user: null,
  error: null,
  loading: false,
  roles: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case  FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      
    default:
    return state;
  }
};

export default authReducer;
