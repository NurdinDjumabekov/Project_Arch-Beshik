import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeBtnNavMiniDisplay, changePreloader } from "./mainPageSlice";
import axios from "axios";

const initialState = {
  dataAllApartaments: [],
  dataEveryApartaments: {},
};

export const toTakeDataHousemanage = createAsyncThunk(
  "toTakeDataHousemanage",
  async (info, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/content_list/housemanage/`,
      });
      dispatch(toTakeDataAllApartaments(data.results));
      //   console.log(data.results, "category");
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
    }
  }
);

export const toTakeDetailedApartament = createAsyncThunk(
  "toTakeDetailedApartament",
  async (id, { dispatch }) => {
    // dispatch(changeBtnNavMiniDisplay(false));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/housemanage_list/${id}/`,
      });
      dispatch(toTakeDataEveryApartaments(data));
      //   console.log(data);
      //   dispatch(changeBtnNavMiniDisplay(true));
    } catch (error) {
      console.log(error);
      //   dispatch(changePreloader(true));
      //   dispatch(changeBtnNavMiniDisplay(true));
    }
  }
);

const houseManageSlice = createSlice({
  name: "houseManageSlice",
  initialState,
  reducers: {
    toTakeDataAllApartaments: (state, action) => {
      state.dataAllApartaments = action.payload;
    },
    toTakeDataEveryApartaments: (state, action) => {
      state.dataEveryApartaments = action.payload;
    },
  },
});
export const { toTakeDataAllApartaments, toTakeDataEveryApartaments } =
  houseManageSlice.actions;
export default houseManageSlice.reducer;
