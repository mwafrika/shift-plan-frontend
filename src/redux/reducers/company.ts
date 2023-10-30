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

const initialState = {
  companies: [],
  company: {},
  loading: false,
  error: null,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        loading: true,
      };
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload,
      };
    case GET_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_COMPANY:
      return {
        ...state,
        loading: true,
      };
    case GET_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload,
      };
    case GET_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COMPANY:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: state.companies.filter(
          (company) => company.id !== action.payload,
        ),
      };
    case DELETE_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_COMPANY:
      return {
        ...state,
        loading: true,
      };
    case EDIT_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: state.companies.map((company) =>
          company.id === action.payload.id ? action.payload : company,
        ),
      };
    case EDIT_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
