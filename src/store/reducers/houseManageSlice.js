import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changePreloader } from "./mainPageSlice";
import axios from "axios";

const initialState = {
  dataAllApartaments: [],
};

export const toTakeDataHousemanage = createAsyncThunk(
  "toTakeDataHousemanage",
  async (info, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://baielbekenov.pythonanywhere.com/api/content_list/housemanage/`,
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

const houseManageSlice = createSlice({
  name: "houseManageSlice",
  initialState,
  reducers: {
    toTakeDataAllApartaments: (state, action) => {
      state.dataAllApartaments = action.payload;
    },
  },
});
export const { toTakeDataAllApartaments } = houseManageSlice.actions;
export default houseManageSlice.reducer;
