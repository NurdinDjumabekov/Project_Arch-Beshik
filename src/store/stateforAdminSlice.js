import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  stateEditBtn: false,
  stateDeleteBtn: false,
  stateForSlider: true,
  stateAllComponents: 0,
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
    changeStateAllComponents: (state) => {
      state.stateAllComponents = state.stateAllComponents + 1;
    },
  },
});

export const {
  changeStateEditBtn,
  changeStateForSlider,
  changeStateDeleteBtn,
  changeStateAllComponents,
} = stateforAdminSlice.actions;
export default stateforAdminSlice.reducer;
