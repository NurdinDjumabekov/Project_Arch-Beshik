import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { changePreloader } from "./mainPageSlice";

interface TypeUrl {
  url: string;
  lang: string;
  type: string;
  stateDataComments: {};
}

interface dataComment {
  name: string;
  email: string;
  comment: string;
}

type TypeCommentsData = {
  stateDataComments: dataComment;
};

const initialState: TypeCommentsData = {
  stateDataComments: {
    name: "",
    email: "",
    comment: "",
  },
};

export const addComment = createAsyncThunk(
  "addComment",
  async (info: TypeUrl, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const resp = await standartAxios(
        info?.url,
        info.lang,
        info.type,
        info.stateDataComments
      );
      location.reload();
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(true));
    }
  }
);

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    changeDataComments: (state, action) => {
      state.stateDataComments = action.payload;
    },
  },
});
export const { changeDataComments } = commentSlice.actions;

export default commentSlice.reducer;
