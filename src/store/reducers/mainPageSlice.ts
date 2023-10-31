import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { standartAxios } from "../../helpers/standartAxios";

type TypePreloader = {
  preloader: boolean
}

interface Category {
  id: number;
  name: string;
  is_rent: boolean;
}

type TypeLoginState = {
  statePreloader: TypePreloader
  stateCategory: Category[],
  stateCount: number
}

const initialState: TypeLoginState = {
  statePreloader: {
    preloader: false,
  },
  stateCategory: [],
  stateCount: 0
};

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.statePreloader.preloader = action.payload;
    },
    toTakecategory: (state, action) => {
      state.stateCategory = action.payload;
    },
    
  },
});
export const { changePreloader, toTakecategory} =
  mainPageSlice.actions;

export default mainPageSlice.reducer;
