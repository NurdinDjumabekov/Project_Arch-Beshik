import { combineReducers, configureStore } from "@reduxjs/toolkit";
import infoWorkSlice from "./infoWorkSlice";
import statesWindowsSlice from "./statesWindowsSlice";
const reducer = combineReducers({
  infoWorkSlice,
  statesWindowsSlice,
});
export const store = configureStore({
  reducer,
});
