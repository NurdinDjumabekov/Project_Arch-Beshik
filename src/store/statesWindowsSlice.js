import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  registrationState: false,
  loginState: false,
};

const statesWindowsSlice = createSlice({
  name: "statesWindowsSlice",
  initialState,
  reducers: {
    changeStateRegistration: (state, action) => {
      state.registrationState = action.payload;
    },
    changeStateLogin: (state, action) => {
      state.loginState = action.payload;
    },
  },
});

export const { changeStateRegistration, changeStateLogin } =
  statesWindowsSlice.actions;
export default statesWindowsSlice.reducer;
