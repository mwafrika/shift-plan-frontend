import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/auth";

const reducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer,
});

export default store;
