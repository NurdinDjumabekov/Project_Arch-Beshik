import { combineReducers, configureStore } from "@reduxjs/toolkit";
import infoWorkSlice from "./infoWorkSlice";
const reducer = combineReducers({
  infoWorkSlice,
});
export const store = configureStore({
  reducer,
});
