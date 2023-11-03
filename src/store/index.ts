import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import loginSlice from "./reducers/loginSlice";
import registrSlice from "./reducers/registrSlice";
import detailedSlice from "./reducers/detailedSlice"

const reducer = combineReducers({
  mainPageSlice,
  loginSlice,
  registrSlice,
  detailedSlice
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch