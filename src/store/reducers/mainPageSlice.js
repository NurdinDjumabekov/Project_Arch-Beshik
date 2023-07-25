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
  // nameTitle: -1,
  paginationCards: 1,
};
export const toTakeCardInfo = createAsyncThunk(
  "toTakeCardInfo",
  async (page, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://baielbekenov.pythonanywhere.com/api/content_list/?page_size=${page}`,
      });
      dispatch(changeDataCards(data?.results));
      // console.log(data.results);
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
      console.log(data.results, "category");
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
export const searchData = createAsyncThunk(
  "searchData",
  async (info, { dispatch }) => {
    dispatch(changePreloader(false));
    dispatch(changeDataCards([]));
    setTimeout(() => {
      dispatch(changePreloader(true));
    }, 1000);

    // try {
    //   const { data } = await axios.get(
    //     `http://baielbekenov.pythonanywhere.com/api/content_list/${id}/`
    //   );
    //   dispatch(changeDataCards(data));
    // } catch (error) {
    //   console.log(error);
    // }
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
    changePaginationCards: (state, action) => {
      state.paginationCards = action.payload;
      // console.log(state.paginationCards);
    },
    // changeNameTitle: (state, action) => {
    //   state.nameTitle = action.payload;
    // },
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
  changePaginationCards,
} = mainPageSlice.actions;
export default mainPageSlice.reducer;
