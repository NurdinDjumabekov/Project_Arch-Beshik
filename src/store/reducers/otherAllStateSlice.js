import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changePreloader } from "./mainPageSlice";

const initialState = {
  dataHistory: [],
  dataAdvertising: [],
  dataDetailedPage: {},
  dataForComparison: [],
  lookDataSearch: false,
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
        url: `http://192.168.0.105:8000/api/advert_list/`,
      });
      dispatch(changeDataAdvertising(data.results));
      // console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  }
);

export const toTakeDetailedInfo = createAsyncThunk(
  "toTakeDetailedInfo",
  async (info, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://192.168.0.105:8000/api/content_detail/${info.id}/`,
      });
      console.log(data.content);
      dispatch(changeDataDetailedPage(data.content));
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
    }
  }
);

export const toTakeAllData = createAsyncThunk(
  "toTakeAllData",
  async (page, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://192.168.0.105:8000/api/content_list/`,
      });
      dispatch(toTakeDataForComparison(data.results));
      console.log(data.results, "data");
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
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
    changeDataDetailedPage: (state, action) => {
      state.dataDetailedPage = action.payload;
    },
    toTakeDataForComparison: (state, action) => {
      state.dataForComparison = action.payload;
    },
    changeLookDataSearch: (state, action) => {
      state.lookDataSearch = action.payload;
    },
  },
});

export const {
  changeDataHistory,
  changeDataAdvertising,
  changeDataDetailedPage,
  toTakeDataForComparison,
  changeLookDataSearch,
} = otherAllStateSlice.actions;
export default otherAllStateSlice.reducer;
