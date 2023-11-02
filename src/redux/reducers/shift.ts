import {
  CREATE_SHIFT_START,
  CREATE_SHIFT_SUCCESS,
  CREATE_SHIFT_FAILURE,
  GET_SHIFT_START,
  GET_SHIFT_SUCCESS,
  GET_SHIFT_FAILURE,
  GET_SHIFTS_START,
  GET_SHIFTS_SUCCESS,
  GET_SHIFTS_FAILURE,
  UPDATE_SHIFT_START,
  UPDATE_SHIFT_SUCCESS,
  UPDATE_SHIFT_FAILURE,
  DELETE_SHIFT_START,
  DELETE_SHIFT_SUCCESS,
  DELETE_SHIFT_FAILURE,
  ASSIGN_SHIFT_START,
  ASSIGN_SHIFT_SUCCESS,
  ASSIGN_SHIFT_FAILURE,
  UNASSIGN_SHIFT_SUCCESS,
  UNASSIGN_SHIFT_FAILURE,
  UNASSIGN_SHIFT_START,
  GET_SHIFTS_WITH_EMPLOYEES_START,
  GET_SHIFTS_WITH_EMPLOYEES_SUCCESS,
  GET_SHIFTS_WITH_EMPLOYEES_FAILURE,
  EXPORT_SHIFTS_START,
  EXPORT_SHIFTS_SUCCESS,
  EXPORT_SHIFTS_FAILURE,
} from "../actionTypes/shift";

const initialState = {
  shifts: [],
  userShiftAssignments: [],
  shiftsWithEmployees: [],
  exportedShifts: [],
  loading: false,
  message: "",
};

const shiftReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHIFT_START:
      return { ...state, loading: true };
    case CREATE_SHIFT_SUCCESS:
      return {
        ...state,
        loading: false,
        shifts: [...state.shifts, action.payload],
      };
    case CREATE_SHIFT_FAILURE:
      return { ...state, loading: false };
    case GET_SHIFT_START:
      return { ...state, loading: true };
    case GET_SHIFT_SUCCESS:
      return { ...state, loading: false, shifts: action.payload };
    case GET_SHIFT_FAILURE:
      return { ...state, loading: false };
    case GET_SHIFTS_START:
      return { ...state, loading: true };
    case GET_SHIFTS_SUCCESS:
      return { ...state, loading: false, shifts: action.payload };
    case GET_SHIFTS_FAILURE:
      return { ...state, loading: false };
    case UPDATE_SHIFT_START:
      return { ...state, loading: true };
    case UPDATE_SHIFT_SUCCESS:
      return {
        ...state,
        loading: false,
        shifts: state.shifts.map((shift) =>
          shift.id === action.payload.id ? action.payload : shift,
        ),
      };
    case UPDATE_SHIFT_FAILURE:
      return { ...state, loading: false };
    case DELETE_SHIFT_START:
      return { ...state, loading: true };
    case DELETE_SHIFT_SUCCESS:
      return {
        ...state,
        loading: false,
        shifts: state.shifts.filter((shift) => shift.id !== action.payload.id),
      };
    case DELETE_SHIFT_FAILURE:
      return { ...state, loading: false };
    case ASSIGN_SHIFT_START:
      return { ...state, loading: true };
    case ASSIGN_SHIFT_SUCCESS:
      return {
        ...state,
        loading: false,
        userShiftAssignments: [...state.userShiftAssignments, action.payload],
      };
    case ASSIGN_SHIFT_FAILURE:
      return { ...state, loading: false };
    case UNASSIGN_SHIFT_START:
      return { ...state, loading: true };
    case UNASSIGN_SHIFT_SUCCESS:
      return {
        ...state,
        loading: false,
        userShiftAssignments: state.userShiftAssignments.filter(
          (assignment) => assignment?.id !== action.payload.id,
          console.log(action.payload, "STATE PAYLOAD"),
        ),
      };
    case UNASSIGN_SHIFT_FAILURE:
      return { ...state, loading: false };
    case GET_SHIFTS_WITH_EMPLOYEES_START:
      return { ...state, loading: true };
    case GET_SHIFTS_WITH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        shiftsWithEmployees: action.payload,
      };
    case GET_SHIFTS_WITH_EMPLOYEES_FAILURE:
      return { ...state, loading: false };
    case EXPORT_SHIFTS_START:
      return { ...state, loading: true };
    case EXPORT_SHIFTS_SUCCESS:
      return {
        ...state,
        loading: false,
        exportedShifts: action.payload,
      };
    case EXPORT_SHIFTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default shiftReducer;
