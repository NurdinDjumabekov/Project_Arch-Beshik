import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { changePreloader, toTakeContentList } from "./mainPageSlice";

interface TypeUrl {
  url: string;
  lang: string;
  type: string;
}
interface Category {
  id: number;
  name: string;
  is_rent: boolean;
}

type TypeLoginState = {
  stateCategory: Category[];
};

const initialState: TypeLoginState = {
  stateCategory: [],
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
  },
});
export const { toTakeCategory } = categorySlice.actions;

export default categorySlice.reducer;
