import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { changePreloader, toTakeContentList } from "./mainPageSlice";
import { Category, TypeUrl } from "../../types/mainContent";

interface TypeLoginState {
  stateCategory: Category[];
  stateIsRent: boolean;
}

const initialState: TypeLoginState = {
  stateCategory: [],
  stateIsRent: false,
};

export const toTakeAllCategory = createAsyncThunk(
  "toTakeAllCategory",
  async (info: TypeUrl, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(toTakeCategory(resp?.data?.results));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(true));
    }
  }
);

export const choiceCategories = createAsyncThunk(
  "choiceCategories",
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

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    toTakeCategory: (state, action) => {
      state.stateCategory = action.payload;
    },
    changeStateIsRent: (state, action) => {
      state.stateIsRent = action.payload;
    },
  },
});
export const { toTakeCategory, changeStateIsRent } = categorySlice.actions;

export default categorySlice.reducer;
