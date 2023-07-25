import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import windowsSlice from "./reducers/windowsSlice";
import houseManageSlice from "./reducers/houseManageSlice";
import otherAllStateSlice from "./reducers/otherAllStateSlice";
const reducer = combineReducers({
  mainPageSlice,
  windowsSlice,
  houseManageSlice,
  otherAllStateSlice,
});
export const store = configureStore({
  reducer,
});
