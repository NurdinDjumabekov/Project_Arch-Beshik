import { combineReducers, configureStore } from "@reduxjs/toolkit";
import statesWindowsSlice from "./statesWindowsSlice";
import stateforAdminSlice from "./stateforAdminSlice";
import stateForMenuSlice from "./stateForMenuSlice";
import mainPageSlice from "./reducers/mainPageSlice";
import windowsSlice from "./reducers/windowsSlice";
import houseManageSlice from "./reducers/houseManageSlice";
const reducer = combineReducers({
  statesWindowsSlice,
  stateforAdminSlice,
  stateForMenuSlice,
  mainPageSlice,
  windowsSlice,
  houseManageSlice,
});
export const store = configureStore({
  reducer,
});
