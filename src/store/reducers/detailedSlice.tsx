import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { changePreloader } from "./mainPageSlice";
import {
  HousemanageList,
  MainDetailed,
  TypeUrl,
} from "../../types/mainContent";

interface TypeDetaliedData {
  stateMainDetailed: MainDetailed;
  stateHousemanage: HousemanageList;
}

const initialState: TypeDetaliedData = {
  stateHousemanage: {
    amount_of_rooms: 0,
    category_id: 0,
    description: "",
    id: 0,
    owner: "",
    phone_number: 0,
    photos: [],
    photoss: "",
    price: 0,
    remont: "",
    udobstva: "",
    title: "",
  },

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
    dispatch(changePreloader(true));
    try {
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(changeMainDetailed(resp?.data?.content));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
    }
  }
);

export const detailedApartement = createAsyncThunk(
  "detailedApartement",
  async (info: TypeUrl, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(changeStateHousemanage(resp?.data));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
    }
  }
);

const detailedSlice = createSlice({
  name: "detailedSlice",
  initialState,
  reducers: {
    changeMainDetailed: (state, action) => {
      state.stateMainDetailed = action.payload;
    },
    changeStateHousemanage: (state, action) => {
      state.stateHousemanage = action.payload;
    },
  },
});
export const { changeMainDetailed, changeStateHousemanage } =
  detailedSlice.actions;

export default detailedSlice.reducer;
