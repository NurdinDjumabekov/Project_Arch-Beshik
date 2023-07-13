import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataCards: [],
  infoCategory: [],
  statePreloader: false,
  titleName: "Новостная лента",
};
export const toTakeCardInfo = createAsyncThunk(
  "toTakeCardInfo",
  async (info, { dispatch }) => {
    changePreloader(false);
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://baielbekenov.pythonanywhere.com/api/content_list/`,
      });
      dispatch(changeDataCards(data.results));
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
    }
  }
);
export const takeCategoryOutput = createAsyncThunk(
  "infoWorkOutput",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://baielbekenov.pythonanywhere.com/api/category_list/`
      );
      dispatch(toTakeInfoCategory(data.results));
      //   console.log(data.results, "category");
    } catch (error) {
      console.log(error);
    }
  }
);
const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changeDataCards(state, action) {
      state.dataCards = action.payload;
    },
    changePreloader: (state, action) => {
      state.statePreloader = action.payload;
    },
    toTakeInfoCategory: (state, action) => {
      state.infoCategory = action.payload;
    },
    changeNameTitle: (state, action) => {
      state.titleName = action.payload;
      console.log(state.titleName);
    },
  },
});
export const {
  changeDataCards,
  changePreloader,
  toTakeInfoCategory,
  changeNameTitle,
} = mainPageSlice.actions;
export default mainPageSlice.reducer;
