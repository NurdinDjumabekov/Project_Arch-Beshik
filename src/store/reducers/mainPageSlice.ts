import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { ContentList, HousemanageList, TypeUrl } from "../../types/mainContent";

interface MainContents {
  statePreloader: boolean;
  stateCount: number;
  stateContentList: ContentList[] | HousemanageList[];
  paginationCount: number;
}

const initialState: MainContents = {
  statePreloader: false,
  stateContentList: [],
  stateCount: 0,
  paginationCount: localStorage.getItem("pagination")
    ? Number(localStorage.getItem("pagination"))
    : 1,
};

export const toTakeData = createAsyncThunk(
  "toTakeData",
  async (info: TypeUrl, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(toTakeContentList(resp?.data?.results));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(true));
    }
  }
);

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.statePreloader = action.payload;
    },
    toTakeContentList: (state, action) => {
      state.stateContentList = action.payload;
    },

    changePaginationCount: (state, action) => {
      state.paginationCount = action.payload;
    },
  },
});
export const { changePreloader, toTakeContentList, changePaginationCount } =
  mainPageSlice.actions;

export default mainPageSlice.reducer;
