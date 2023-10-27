import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { standartAxios } from "../../helpers/standartAxios";

const initialState = {
  preloader: false,
};

// export const dataMainPage = createAsyncThunk(
//   "dataMainPage",
//   async (info, { dispatch }) => {
//     try {
//       const { data } = await standartAxios(info?.url, info.lang);
//       if (info.url === "latest_updates/list") {
//         dispatch(changeDataUpdates(data?.results));
//       } else if (info.url === "our_offers/list") {
//         dispatch(changeOurOffers(data?.results));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});
export const { changePreloader} =
  mainPageSlice.actions;

export default mainPageSlice.reducer;
