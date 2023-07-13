import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stateGoodAuthLogin: false,
  loginState: false,
  registrationState: false,
  moreLoginInfo: true,
};

const windowsSlice = createSlice({
  name: "windowsSlice",
  initialState,
  reducers: {
    changeStateGoodAuthLogin: (state, action) => {
      state.stateGoodAuthLogin = action.payload;
    },
    changeStateLogin: (state, action) => {
      state.loginState = action.payload;
    },
    changeStateRegistration: (state, action) => {
      state.registrationState = action.payload;
    },
    changeMoreLoginInfo:()=>{}
  },
});
export const {
  changeStateGoodAuthLogin,
  changeStateLogin,
  changeStateRegistration,
} = windowsSlice.actions;
export default windowsSlice.reducer;
