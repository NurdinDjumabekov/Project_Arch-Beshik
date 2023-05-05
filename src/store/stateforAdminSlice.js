import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  stateEditBtn: false,
  stateDeleteBtn: false,
  stateForSlider: true,
};
const stateforAdminSlice = createSlice({
  name: "stateforAdminSlice",
  initialState,
  reducers: {
    changeStateForSlider: (state, action) => {
      state.stateForSlider = action.payload;
    },
    changeStateEditBtn: (state, action) => {
      state.stateEditBtn = action.payload;
    },
    changeStateDeleteBtn: (state, action) => {
      state.stateDeleteBtn = action.payload;
    },
  },
});

export const {
  changeStateEditBtn,
  changeStateForSlider,
  changeStateDeleteBtn,
} = stateforAdminSlice.actions;
export default stateforAdminSlice.reducer;
