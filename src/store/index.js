import { combineReducers, configureStore } from "@reduxjs/toolkit";
import infoWorkSlice from "./infoWorkSlice";
import statesWindowsSlice from "./statesWindowsSlice";
import stateforAdminSlice from "./stateforAdminSlice";
import stateForMenuSlice from "./stateForMenuSlice";
import mainPageSlice from "./reducers/mainPageSlice";
import windowsSlice from "./reducers/windowsSlice";
const reducer = combineReducers({
  infoWorkSlice,
  statesWindowsSlice,
  stateforAdminSlice,
  stateForMenuSlice,
  mainPageSlice,
  windowsSlice,
});
export const store = configureStore({
  reducer,
});
