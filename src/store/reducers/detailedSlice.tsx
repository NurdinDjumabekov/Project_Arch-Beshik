import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";

interface TypeUrl {
  url: string,
  lang: string,
  type: string,
}

type photos = {
    image: string
}

interface mainDetailed {
    id: number,
    title: string,
    category_id: number,
    image: string,
    data_added: string,
    owner: number,
    content: string,
    comments: [],
    photos: photos[]
}

type TypeDetaliedData = {
    stateMainDetailed: mainDetailed
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
        photos: []
    }
    
};

export const toTakeDetailed = createAsyncThunk(
  "toTakeData",
  async (info: TypeUrl, { dispatch }) => {
    try {
    //   if (info?.url.includes("detailed")) {
        const resp = await standartAxios(info?.url, info.lang, info.type );
        dispatch(changeMainDetailed(resp?.data?.content))
    //   }
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
   
  },
});
export const { changeMainDetailed } = detailedSlice.actions;

export default detailedSlice.reducer;
