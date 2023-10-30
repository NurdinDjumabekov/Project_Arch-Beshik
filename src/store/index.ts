import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import loginSlice from "./reducers/loginSlice";
import registrSlice from "./reducers/registrSlice";

const reducer = combineReducers({
  mainPageSlice,
  loginSlice,
  registrSlice
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch