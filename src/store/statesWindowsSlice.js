import { createSlice } from "@reduxjs/toolkit";

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

export const {} = statesWindowsSlice.actions;
export default statesWindowsSlice.reducer;
