import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";

const reducer = combineReducers({
  mainPageSlice,
});
export const store = configureStore({
  reducer,
});
