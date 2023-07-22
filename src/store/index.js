import { combineReducers, configureStore } from "@reduxjs/toolkit";
import statesWindowsSlice from "./statesWindowsSlice";
import stateforAdminSlice from "./stateforAdminSlice";
import stateForMenuSlice from "./stateForMenuSlice";
import mainPageSlice from "./reducers/mainPageSlice";
import windowsSlice from "./reducers/windowsSlice";
import houseManageSlice from "./reducers/houseManageSlice";
import otherAllStateSlice from "./reducers/otherAllStateSlice";
const reducer = combineReducers({
  statesWindowsSlice,
  stateforAdminSlice,
  stateForMenuSlice,
  mainPageSlice,
  windowsSlice,
  houseManageSlice,
  otherAllStateSlice,
});
export const store = configureStore({
  reducer,
});
