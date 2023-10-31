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
  SEARCH_USERS_START,
} from "../actionTypes/users";

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
  users: [],
  user: null,
  error: null,
  loading: false,
  roles: [],
  role: null,
  filteredUsers: [],
};

console.log(initialState, "initialState");

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EDIT_USER:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user,
        ),
        loading: false,
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
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

    case SEARCH_USERS_START:
      const { payload } = action;
      const fieldsToSearch = [
        "name",
        "email",
        "department.depertmentName",
        "phone",
      ];

      const filteredUsers = state?.users?.filter((user) =>
        fieldsToSearch.some((field) => {
          const userField = user[field] as string | undefined;
          if (userField) {
            return userField.toLowerCase().includes(payload?.toLowerCase());
          }
          return false;
        }),
      );
      return { ...state, filteredUsers };

    default:
      return state;
  }
};

export default usersReducer;
