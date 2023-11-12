import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";

interface TypePreloader {
  preloader: boolean;
}

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

interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
}

interface ContentList {
  id: number;
  title: string;
  category_id: number;
  comments: Comment[];
  content: string;
  data_added: string;
  image: string;
  owner: number;
  photos: "";
}

type TypeLoginState = {
  statePreloader: TypePreloader;
  stateCategory: Category[];
  stateCount: number;
  stateContentList: ContentList[];
  paginationCount: number;
};

const initialState: TypeLoginState = {
  statePreloader: {
    preloader: false,
  },
  stateCategory: [],
  stateCount: 0,
  stateContentList: [],
  paginationCount: localStorage.getItem("pagination")
    ? Number(localStorage.getItem("pagination"))
    : 1,
};

export const toTakeData = createAsyncThunk(
  "toTakeData",
  async (info: TypeUrl, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      if (info?.url === "category_list") {
        const resp = await standartAxios(info?.url, info.lang, info.type);
        dispatch(toTakeCategory(resp?.data?.results));
      } else if (info?.url === "content_list") {
        const resp = await standartAxios(info?.url, info.lang, info.type);
        dispatch(toTakeContentList(resp?.data?.results));
      }
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
    }
  }
);

export const choiceCategories = createAsyncThunk(
  "toTakeData",
  async (info: TypeUrl, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(toTakeContentList(resp?.data?.results));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
    }
  }
);

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.statePreloader.preloader = action.payload;
    },
    toTakeCategory: (state, action) => {
      state.stateCategory = action.payload;
    },
    toTakeContentList: (state, action) => {
      state.stateContentList = action.payload;
    },
    changePaginationCount: (state, action) => {
      state.paginationCount = action.payload;
    },
  },
});
export const {
  changePreloader,
  toTakeCategory,
  toTakeContentList,
  changePaginationCount,
} = mainPageSlice.actions;

export default mainPageSlice.reducer;
