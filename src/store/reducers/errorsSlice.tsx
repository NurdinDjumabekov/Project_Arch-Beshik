import { createSlice } from "@reduxjs/toolkit";

type TypeError = {
  state: boolean;
  text: string;
};

type TypeAllErrors = {
  loginState: TypeError;
  registrState: TypeError;
  commentState: TypeError;
};

const initialState: TypeAllErrors = {
  loginState: {
    state: false,
    text: "",
  },
  registrState: {
    state: false,
    text: "",
  },
  commentState: {
    state: false,
    text: "",
  },
};

const errorsSlice = createSlice({
  name: "errorsSlice",
  initialState,
  reducers: {
    changeErrLogin: (state, action) => {
      state.loginState = action.payload;
    },
    changeErrRegistr: (state, action) => {
      state.registrState = action.payload;
    },
    changeErrComment: (state, action) => {
      state.commentState = action.payload;
    },
  },
});
export const { changeErrLogin, changeErrRegistr, changeErrComment } =
  errorsSlice.actions;

export default errorsSlice.reducer;
