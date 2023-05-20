import { combineReducers, configureStore } from "@reduxjs/toolkit";
import infoWorkSlice from "./infoWorkSlice";
import statesWindowsSlice from "./statesWindowsSlice";
import stateforAdminSlice from "./stateforAdminSlice";
import stateForMenuSlice from "./stateForMenuSlice";
const reducer = combineReducers({
  infoWorkSlice,
  statesWindowsSlice,
  stateforAdminSlice,
  stateForMenuSlice,
});
export const store = configureStore({
  reducer,
});
