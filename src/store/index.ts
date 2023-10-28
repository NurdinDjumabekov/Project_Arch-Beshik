import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import loginSlice from "./reducers/loginSlice";

const reducer = combineReducers({
  mainPageSlice,
  loginSlice,
});
export const store = configureStore({
  reducer,
});
