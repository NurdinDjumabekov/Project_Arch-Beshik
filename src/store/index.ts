import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import loginSlice from "./reducers/loginSlice";
import registrSlice from "./reducers/registrSlice";
import detailedSlice from "./reducers/detailedSlice";
import commentSlice from "./reducers/commentSlice";
import errorsSlice from "./reducers/errorsSlice";
import categorySlice from "./reducers/categorySlice";
import questionSlice from "./reducers/questionSlice";

const reducer = combineReducers({
  mainPageSlice,
  loginSlice,
  registrSlice,
  detailedSlice,
  commentSlice,
  errorsSlice,
  categorySlice,
  questionSlice,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
