import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import windowsSlice from "./reducers/windowsSlice";
import houseManageSlice from "./reducers/houseManageSlice";
import otherAllStateSlice from "./reducers/otherAllStateSlice";
import commentsSlice from "./reducers/commentsSlice";
const reducer = combineReducers({
  mainPageSlice,
  windowsSlice,
  houseManageSlice,
  otherAllStateSlice,
  commentsSlice,
});
export const store = configureStore({
  reducer,
});
