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
  baseNums: "192.168.202.218",
  count: 0,
};
// const baseUrl = " https://6443c7ca90738aa7c0778850.mockapi.io/infoportal";
const baseNums = "192.168.202.218";
const urlContentList = `http://baielbekenov.pythonanywhere.com/api/content_list/`;

export const infoWorkOutput = createAsyncThunk(
  "infoWorkOutput",
  async (objForChangeInfo, { dispatch }) => {
    dispatch(changeSkeleton(false));
    try {
      const response = await axios.get(
        `${urlContentList}${objForChangeInfo.stateRequestOnCategory}?page_size=${objForChangeInfo.pagination}`
      );
      console.log(response.data.results, "results");
      dispatch(
        toTakeInfo(
          response.data.results ? response.data.results : response.data
        )
      );
      dispatch(changeSkeleton(true));
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
      const response = await axios.get(
        `http://baielbekenov.pythonanywhere.com/api/content_list/housemanage/`
      );
      console.log(response.data.results, "apartament");
      dispatch(toTakeInfo(response.data.results));
      dispatch(changeSkeleton(true));
    } catch {
      console.log("error!");
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
export const takeCategoryOutput = createAsyncThunk(
  "infoWorkOutput",
  async (infoWorkSlice, { dispatch }) => {
    try {
      const response = await axios.get(
        `http://baielbekenov.pythonanywhere.com/api/category_list/`
      );
      dispatch(toTakeCategory(response.data.results));
      console.log(response.data.results, "category");
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
    changeStateCount: (state, action) => {
      state.count = state.count + 1;
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
  changeStateCount,
} = infoWorkSlice.actions;
export default infoWorkSlice.reducer;
