import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateEditBtn: false,
  stateDeleteBtn: false,
  stateForSlider: true,
  stateAllComponents: 0,
  stateAdvertisingBtn: false,
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
      // не нужен
    },
    changeStateAdvertisingBtn: (state, action) => {
      state.stateAdvertisingBtn = action.payload;
    },
  },
});

export const {
  changeStateEditBtn,
  changeStateForSlider,
  changeStateDeleteBtn,
  changeStateAllComponents,
  changeStateAdvertisingBtn,
} = stateforAdminSlice.actions;
export default stateforAdminSlice.reducer;
