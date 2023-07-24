import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataHistory: [],
  dataAdvertising: [],
};

export const toTakeDataHistory = createAsyncThunk(
  "toTakeDetailedApartament",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://6443c7ca90738aa7c0778850.mockapi.io/infoportal`,
      });
      //   dispatch(changeDataHistory(data));
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const toTakeAdvertising = createAsyncThunk(
  "toTakeAdvertising",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://6443c7ca90738aa7c0778850.mockapi.io/infoportal`,
      });
      dispatch(changeDataAdvertising(data));
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const otherAllStateSlice = createSlice({
  name: "otherAllStateSlice",
  initialState,
  reducers: {
    changeDataHistory: (state, action) => {
      state.dataHistory = action.payload;
    },
    changeDataAdvertising: (state, action) => {
      state.dataAdvertising = action.payload;
    },
  },
});
export const { changeDataHistory, changeDataAdvertising } =
  otherAllStateSlice.actions;
export default otherAllStateSlice.reducer;
