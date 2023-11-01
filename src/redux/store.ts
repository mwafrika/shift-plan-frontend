import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/auth";
import usersReducer from "./reducers/users";
import rolesReducer from "./reducers/role";
import handleForm from "./reducers/form";
import departmentReducer from "./reducers/department";
import companyReducer from "./reducers/company";
import updateUserProfile from "./reducers/setting";
import shiftsReducer from "./reducers/shift";

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  roles: rolesReducer,
  form: handleForm,
  departments: departmentReducer,
  companies: companyReducer,
  setting: updateUserProfile,
  shifts: shiftsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
