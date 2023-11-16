import {
  REQUEST_ABSENCE_START,
  REQUEST_ABSENCE_SUCCESS,
  REQUEST_ABSENCE_ERROR,
  GET_ABSENCES_START,
  GET_ABSENCES_SUCCESS,
  GET_ABSENCES_ERROR,
  APPROVE_ABSENCE_START,
  APPROVE_ABSENCE_SUCCESS,
  APPROVE_ABSENCE_ERROR,
  DENY_ABSENCE_START,
  DENY_ABSENCE_SUCCESS,
  DENY_ABSENCE_ERROR,
  UPDATE_ABSENCE_START,
  UPDATE_ABSENCE_SUCCESS,
  UPDATE_ABSENCE_ERROR,
} from "../actionTypes/absence";

const initialState = {
  absence: null,
  absences: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_ABSENCE_START:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_ABSENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        absence: action.payload,
      };
    case REQUEST_ABSENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ABSENCES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ABSENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        absences: action.payload,
      };
    case GET_ABSENCES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case APPROVE_ABSENCE_START:
      return {
        ...state,
        loading: true,
      };
    case APPROVE_ABSENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        absence: action.payload,
      };
    case APPROVE_ABSENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DENY_ABSENCE_START:
      return {
        ...state,
        loading: true,
      };
    case DENY_ABSENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        absence: action.payload,
      };
    case DENY_ABSENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ABSENCE_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ABSENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        absence: action.payload,
      };
    default:
      return state;
  }
}
