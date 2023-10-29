import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  preloader: false,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});
export const { changePreloader } = loginSlice.actions;

export default loginSlice.reducer;
