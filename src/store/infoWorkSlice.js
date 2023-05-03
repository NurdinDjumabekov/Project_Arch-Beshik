import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  infoArr: [],
  filterArr: [],
  stateBtnNav: false,
  stateSkeleton: false,
  stateSearchInput: "",
  falsePreloader: false,
  infoNewArr: [],
};

// const baseUrl = " https://6443c7ca90738aa7c0778850.mockapi.io/infoportal";
export const infoWorkOutput = createAsyncThunk(
  "infoWorkOutput",
  async (infoWorkSlice, { dispatch }) => {
    try {
      const response = await axios.get(
        "http://192.168.31.218:8000/api/content_list/"
      );
      dispatch(toTakeInfo(response.data.results));
      dispatch(changeSkeleton(true));
      // console.log(response.data.results);
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

export const infostartOutput = createAsyncThunk(
  "infoWorkOutput",
  async (infoWorkSlice, { dispatch }) => {
    try {
      const response = await axios.get(
        "http://192.168.4.204:8000/api/category_list/"
      );
      dispatch(startInfo(response.data.results));
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
    changeSearchInput: (state, action) => {
      state.stateSearchInput = action.payload;
      state.filterArr = state.infoArr.filter((i) => {
        return i.moreInfo
          .toLowerCase()
          .includes(state.stateSearchInput.toLowerCase());
      });
    },
    changeFalsePreloader: (state, action) => {
      state.falsePreloader = action.payload;
    },
    startInfo: (state, action) => {
      state.infoNewArr = action.payload;
    },
  },
});

export const {
  changeStateBtn,
  toTakeInfo,
  changeSkeleton,
  changeSearchInput,
  changeFalsePreloader,
  startInfo,
} = infoWorkSlice.actions;
export default infoWorkSlice.reducer;
