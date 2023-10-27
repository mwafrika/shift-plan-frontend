import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/auth";
import usersReducer from "./reducers/users";

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer,
});

export default store;
