import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeBtnNavMiniDisplay, changePreloader } from "./mainPageSlice";
import axios from "axios";

const initialState = {
  dataAllApartaments: [],
  dataForImages: [],
};

export const addCommentHaveUser = createAsyncThunk(
  "addCommentHaveUser",
  async (data, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      await axios({
        method: "POST",
        url: `http://127.0.0.1:8000/api.....`,
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
        url: `http://192.168.0.105:8000/api/comment_list/${data.id}/`,
        data: {
          name: data.name,
          email: data.email,
          comment: data.comment,
        },
      });
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
      console.log(error);
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
    remakeDataForImages: (state, action) => {
      // console.log(action.payload, "222");
      state.dataForImages = action.payload?.photos;
      // let count = 1;
      // const newImagesData = action.payload?.photos?.map((i) => {
      //   return {
      //     ...i,
      //     id: count++,
      //   };
      // });
      // state.dataForImages = newImagesData || [];
    },
  },
});
export const { toTakeDataAllApartaments, remakeDataForImages } =
  commentsSlice.actions;
export default commentsSlice.reducer;
