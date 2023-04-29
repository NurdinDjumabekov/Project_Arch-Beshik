import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  infoArr: [],
  stateBtnNav: false,
  stateSkeleton: false,
};

export const infoWorkOutput = createAsyncThunk(
  "infoWorkOutput",
  async (infoWorkSlice, { dispatch }) => {
    try {
      const response = await axios.get(
        "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal"
      );
      // console.log(response.data);
      dispatch(toTakeInfo(response.data));
      dispatch(changeSkeleton(true));
    } catch {
      console.log("error");
    }
  }
);

const infoWorkSlice = createSlice({
  name: "infoWorkSlice",
  initialState,
  reducers: {
    changeStateBtn: (state, action) => {
      state.stateBtnNav = action.payload;
    },
    toTakeInfo: (state, action) => {
      state.infoArr = action.payload;
    },
    changeSkeleton: (state, action) => {
      state.stateSkeleton = action.payload;
    },
  },
});

export const { changeStateBtn, toTakeInfo, changeSkeleton } =
  infoWorkSlice.actions;
export default infoWorkSlice.reducer;
