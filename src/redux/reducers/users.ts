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

const initialState = {
  users: [],
  user: null,
  error: null,
  loading: false,
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
    default:
      return state;
  }
};

export default usersReducer;
