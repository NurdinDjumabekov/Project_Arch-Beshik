import { createSlice } from "@reduxjs/toolkit";

type TypeError = {
  state: boolean;
  text: string;
};

type TypeAllErrors = {
  loginState: TypeError;
  registrState: TypeError;
  commentState: TypeError;
  questionState: TypeError;
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
  questionState: {
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
    changeErrQuestion: (state, action) => {
      state.questionState = action.payload;
    },
  },
});
export const {
  changeErrLogin,
  changeErrRegistr,
  changeErrComment,
  changeErrQuestion,
} = errorsSlice.actions;

export default errorsSlice.reducer;
