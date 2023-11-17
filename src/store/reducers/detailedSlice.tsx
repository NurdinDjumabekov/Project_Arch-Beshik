import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { changePreloader } from "./mainPageSlice";
import { MainDetailed, TypeUrl } from "../../types/mainContent";

interface TypeDetaliedData {
  stateMainDetailed: MainDetailed;
}

const initialState: TypeDetaliedData = {
  stateMainDetailed: {
    id: 0,
    title: "",
    category_id: 0,
    image: "",
    data_added: "",
    owner: 0,
    content: "",
    comments: [],
    photos: [],
  },
};

export const toTakeDetailed = createAsyncThunk(
  "toTakeDetailed",
  async (info: TypeUrl, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(changeMainDetailed(resp?.data?.content));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(true));
    }
  }
);
// export const detailedApartement = createAsyncThunk(
//   "detailedApartement",
//   async (info: TypeUrl, { dispatch }) => {
//     try {
//       dispatch(changePreloader(true));
//       const resp = await standartAxios(info?.url, info.lang, info.type);
//       dispatch(changeMainDetailed(resp?.data?.content));
//       dispatch(changePreloader(false));
//     } catch (err) {
//       console.log(err);
//       dispatch(changePreloader(true));
//     }
//   }
// );

const detailedSlice = createSlice({
  name: "detailedSlice",
  initialState,
  reducers: {
    changeMainDetailed: (state, action) => {
      state.stateMainDetailed = action.payload;
    },
  },
});
export const { changeMainDetailed } = detailedSlice.actions;

export default detailedSlice.reducer;
