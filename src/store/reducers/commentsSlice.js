import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeBtnNavMiniDisplay, changePreloader } from "./mainPageSlice";
import axios from "axios";

const initialState = {
  dataAllApartaments: [],
};

export const addCommentHaveUser = createAsyncThunk(
  "addCommentHaveUser",
  async (data, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      await axios({
        method: "POST",
        url: `http://baielbekenov.pythonanywhere.com/api.....`,
        data: {},
      });
      //   console.log(data);
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
    }
  }
);

export const addCommentNotHaveUser = createAsyncThunk(
  "addCommentNotHaveUser",
  async (data, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      await axios({
        method: "POST",
        url: `http://baielbekenov.pythonanywhere.com/api.....`,
        data: {},
      });
      //   console.log(data);
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      //   dispatch(changePreloader(true));
      dispatch(changePreloader(true));
    }
  }
);

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {
    toTakeDataAllApartaments: (state, action) => {
      state.dataAllApartaments = action.payload;
    },
  },
});
export const { toTakeDataAllApartaments } = commentsSlice.actions;
export default commentsSlice.reducer;