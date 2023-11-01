import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";


interface Category {
  id: number;
  name: string;
  is_rent: boolean;
}

type TypeLoginState = {
  stateCategory: Category[],
}

const initialState: TypeLoginState = {
  stateCategory: [],
};

// export const toTakeAllCategory = createAsyncThunk(
//   "toTakeAllCategory",
//   async (info: TypeUrl, { dispatch }) => {
//     try {
//       const resp = await standartAxios(info?.url, info.lang, info.type );
//       dispatch(toTakeCategory(resp?.data?.results))
//       // console.log(resp?.data?.results);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    toTakeCategory: (state, action) => {
      state.stateCategory = action.payload;
    },
  },
});
export const { toTakeCategory} =
  categorySlice.actions;

export default categorySlice.reducer;
