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
} from "../actionTypes/department";

const initialState = {
  departments: [],
  department: {},
  users: [],
  loading: false,
  error: null,
  filteredDepartments: [],
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DEPARTMENT_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: [...state.departments, action.payload],
      };
    case CREATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_DEPARTMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: action.payload,
      };
    case FETCH_DEPARTMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_SINGLE_DEPARTMENT_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        department: action.payload,
      };
    case FETCH_SINGLE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_DEPARTMENT_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: state.departments.filter(
          (department) => department.id !== action.payload,
        ),
      };
    case DELETE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_DEPARTMENT_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: state.departments.map((department) =>
          department?.id === action.payload.id ? action.payload : department,
        ),
      };
    case UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_DEPARTMENT_EMPLOYEES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_DEPARTMENT_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_DEPARTMENT_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_DEPARTMENT_START:
      const { payload } = action;
      const fieldsToSearch = [
        "departmentName",
        "departmentManager",
        "departmentDescription",
      ];

      const filteredDepartments = state?.departments?.filter((department) =>
        fieldsToSearch.some((field) => {
          const departmentField = department[field] as string | undefined;
          if (departmentField) {
            return departmentField
              .toLowerCase()
              .includes(payload?.toLowerCase());
          }
          return false;
        }),
      );
      return { ...state, filteredDepartments };
    default:
      return state;
  }
};

export default departmentReducer;
