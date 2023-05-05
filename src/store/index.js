import { combineReducers, configureStore } from "@reduxjs/toolkit";
import infoWorkSlice from "./infoWorkSlice";
import statesWindowsSlice from "./statesWindowsSlice";
import stateforAdminSlice from "./stateforAdminSlice";
const reducer = combineReducers({
  infoWorkSlice,
  statesWindowsSlice,
  stateforAdminSlice,
});
export const store = configureStore({
  reducer,
});
