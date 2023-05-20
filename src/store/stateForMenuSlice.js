import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  nameTitle: -1,
};

const stateForMenuSlice = createSlice({
  name: "stateForMenuSlice",
  initialState,
  reducers: {
    changeNameTitle: (state, action) => {
      state.nameTitle = action.payload;
    },
  },
});

export const { changeNameTitle } = stateForMenuSlice.actions;
export default stateForMenuSlice.reducer;
