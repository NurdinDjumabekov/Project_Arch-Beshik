import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  infoArr: [],
  stateBtnNav: false,
  stateSkeleton: false,
  falsePreloader: false,
  infoCategory: [],
  objForChangeInfo: {
    stateRequestOnCategory: "",
    pagination: 1,
  },
  stateRenderCategory: false,
};
const baseNums = "192.168.202.218";
const urlContentList = `http://baielbekenov.pythonanywhere.com/api/content_list/`;

export const infoWorkOutput = createAsyncThunk(
  "infoWorkOutput",
  async (objForChangeInfo, { dispatch }) => {
    // dispatch(changeSkeleton(false));
    try {
      const response = await axios.get(
        `${urlContentList}${objForChangeInfo.stateRequestOnCategory}?page_size=${objForChangeInfo.pagination}`
      );
      // console.log(response.data.results, "results");
      dispatch(
        toTakeInfo(
          response.data.results ? response.data.results : response.data
        )
      );
      // dispatch(changeSkeleton(true));
    } catch {
      console.log("error!");
    }
  }
);
export const requestOnApartament = createAsyncThunk(
  "requestOnApartament",
  async (requestOnApartament, { dispatch }) => {
    dispatch(changeSkeleton(false));
    try {
      const { data } = await axios.get(
        `http://baielbekenov.pythonanywhere.com/api/content_list/housemanage/`
      );
      console.log(data.results, "apartament");
      dispatch(toTakeInfo(data.results));
      dispatch(changeSkeleton(true));
    } catch {
      console.log("error!");
      dispatch(changeSkeleton(true));
    }
  }
);
export const falsePreloaderOutput = createAsyncThunk(
  "infoWorkOutput",
  async (infoWorkSlice, { dispatch }) => {
    dispatch(changeSkeleton(false));
    setTimeout(() => {
      dispatch(changeSkeleton(true));
    }, 500);
  }
);

export const searchData = createAsyncThunk(
  "searchData",
  async (info, { dispatch }) => {
    dispatch(toTakeInfo([]));
    console.log(info);
    // try {

    // } catch (error) {

    // }
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
    changeFalsePreloader: (state, action) => {
      state.falsePreloader = action.payload;
    },
    toTakeCategory: (state, action) => {
      state.infoCategory = action.payload;
    },
    changeCategories: (state, action) => {
      state.objForChangeInfo.stateRequestOnCategory = action.payload;
    },
    stateRenderCategory: (state, action) => {
      state.stateRenderCategory = action.payload;
    },
    changePagination: (state, action) => {
      state.objForChangeInfo.pagination = action.payload;
    },
  },
});

export const {
  changeStateBtn,
  toTakeInfo,
  changeSkeleton,
  changeFalsePreloader,
  toTakeCategory,
  changeCategories,
  stateRenderCategory,
  changePagination,
} = infoWorkSlice.actions;
export default infoWorkSlice.reducer;
