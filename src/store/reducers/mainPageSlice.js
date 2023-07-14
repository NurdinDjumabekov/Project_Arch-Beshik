import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataCards: [],
  infoCategory: [],
  statePreloader: false,
  titleName: "Новостная лента",
  btnNavMiniDisplay: false,
  stateForLookSlider: true, // для того, чтобы при выборе категории постоянно не отображался слайдер!
  stateScrollDisplayMenu: 1,
};
export const toTakeCardInfo = createAsyncThunk(
  "toTakeCardInfo",
  async (info, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://baielbekenov.pythonanywhere.com/api/content_list/`,
      });
      dispatch(changeDataCards(data?.results));
      console.log(data.results);
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
export const toTakeDataCategory = createAsyncThunk(
  "toTakeDataCategory",
  async (id, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      const { data } = await axios.get(
        `http://baielbekenov.pythonanywhere.com/api/content_list/${id}/`
      );
      dispatch(changeDataCards(data));
      // console.log(data, "category");
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
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
    },
    changeBtnNavMiniDisplay: (state, action) => {
      state.btnNavMiniDisplay = action.payload;
    },
    changeStateForLookSlider: (state, action) => {
      state.stateForLookSlider = action.payload;
    },
    changeStateScrollDisplayMenu: (state, action) => {
      state.stateScrollDisplayMenu = action.payload;
    },
  },
});
export const {
  changeDataCards,
  changePreloader,
  toTakeInfoCategory,
  changeNameTitle,
  changeBtnNavMiniDisplay,
  changeStateForLookSlider,
  changeStateScrollDisplayMenu,
} = mainPageSlice.actions;
export default mainPageSlice.reducer;
