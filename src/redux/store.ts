import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/auth";
import usersReducer from "./reducers/users";
import rolesReducer from "./reducers/role";
import handleForm from "./reducers/form";

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  roles: rolesReducer,
  form: handleForm,
});

const store = configureStore({
  reducer,
});

export default store;
