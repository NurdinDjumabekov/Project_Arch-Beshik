import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";

interface imgs {
  image: string;
}

interface TypeUrl {
  url: string;
  lang: string;
  type: string;
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

interface housemanageList {
  amount_of_rooms: number;
  category_id: number;
  description: string;
  id: number;
  owner: string;
  phone_number: number;
  photos: imgs[];
  photoss: string;
  price: number;
  remont: string;
  udobstva: string;
  title: string;
}

type TypeLoginState = {
  statePreloader: boolean;
  stateCount: number;
  stateContentList: ContentList[];
  stateHousemanage: housemanageList[];
  paginationCount: number;
};

const initialState: TypeLoginState = {
  statePreloader: false,
  stateCount: 0,
  stateContentList: [],
  stateHousemanage: [],
  paginationCount: localStorage.getItem("pagination")
    ? Number(localStorage.getItem("pagination"))
    : 1,
};

export const toTakeData = createAsyncThunk(
  "toTakeData",
  async (info: TypeUrl, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(toTakeContentList(resp?.data?.results));
      // else if (info?.url === "content_list/housemanage") {
      //   const resp = await standartAxios(info?.url, info.lang, info.type);
      //   dispatch(toTakeHousemanage(resp?.data?.results));
      // }
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(true));
    }
  }
);

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.statePreloader = action.payload;
    },
    toTakeContentList: (state, action) => {
      state.stateContentList = action.payload;
    },
    toTakeHousemanage: (state, action) => {
      state.stateHousemanage = action.payload;
    },
    changePaginationCount: (state, action) => {
      state.paginationCount = action.payload;
    },
  },
});
export const {
  changePreloader,
  toTakeContentList,
  changePaginationCount,
  toTakeHousemanage,
} = mainPageSlice.actions;

export default mainPageSlice.reducer;
