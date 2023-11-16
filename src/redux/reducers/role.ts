import { toast } from "react-toastify";
import * as userApi from "../../api/auth";
import {
  FETCH_ROLES_START,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  FETCH_SINGLE_ROLE_FAILURE,
  FETCH_SINGLE_ROLE_START,
  FETCH_SINGLE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
  DELETE_ROLE_START,
  DELETE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  UPDATE_ROLE_START,
  UPDATE_ROLE_SUCCESS,
  CREATE_ROLE_FAILURE,
  CREATE_ROLE_START,
  CREATE_ROLE_SUCCESS,
} from "../actionTypes/auth";

const initialState = {
  error: null,
  loading: false,
  roles: [],
  role: null,
};

console.log(initialState, "initialState");

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.payload,
        loading: false,
      };
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_SINGLE_ROLE_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_ROLE_SUCCESS:
      return {
        ...state,
        role: action.payload,
        loading: false,
      };
    case FETCH_SINGLE_ROLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_ROLE_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        roles: state.roles.filter((role) => role.id !== action.payload),
        loading: false,
      };
    case DELETE_ROLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_ROLE_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        roles: state.roles.map((role) =>
          role.id === action.payload.id ? action.payload : role,
        ),
        loading: false,
      };
    case UPDATE_ROLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_ROLE_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ROLE_SUCCESS:
      return {
        ...state,
        roles: [...state.roles, action.payload],
        loading: false,
      };
    case CREATE_ROLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
