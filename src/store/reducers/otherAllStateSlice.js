import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataHistory: [],
};

export const toTakeDataHistory = createAsyncThunk(
  "toTakeDetailedApartament",
  async (id, { dispatch }) => {
    dispatch(
      changeDataHistory([
        {
          id: 10,
          text: "ajsbdjbasjdbkjashdhashdiashdisahil",
          
        },
      ])
    );

    // try {
    //   const { data } = await axios({
    //     method: "GET",
    //     // url: ``,
    //   });
    //   //   dispatch(changeDataHistory(data));
    //   //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  }
);

const otherAllStateSlice = createSlice({
  name: "otherAllStateSlice",
  initialState,
  reducers: {
    changeDataHistory: (state, action) => {
      state.dataHistory = action.payload;
    },
  },
});
export const { changeDataHistory } = otherAllStateSlice.actions;
export default otherAllStateSlice.reducer;
