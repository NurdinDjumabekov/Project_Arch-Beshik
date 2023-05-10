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
// const baseUrl = " https://6443c7ca90738aa7c0778850.mockapi.io/infoportal";
const baseNums = "192.168.198.218";
const urlContentList = `http://${baseNums}:8000/api/content_list/`;

export const infoWorkOutput = createAsyncThunk(
  "infoWorkOutput",
  async (objForChangeInfo, { dispatch }) => {
    dispatch(changeSkeleton(false));
    try {
      const response = await axios.get(
        `${urlContentList}${objForChangeInfo.stateRequestOnCategory}?page_size=${objForChangeInfo.pagination}`
      );
      console.log(response.data.results);
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
        `http://${baseNums}:8000/api/content_list/housemanage/`
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
        `http://${baseNums}:8000/api/category_list/`
      );
      dispatch(toTakeCategory(response.data.results));
      // console.log(response.data.results);
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
