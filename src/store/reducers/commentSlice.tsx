import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { changePreloader } from "./mainPageSlice";
import { DataComment } from "../../types/mainContent";

interface TypeUrl {
  url: string;
  lang: string;
  type: string;
  stateDataComments: {};
}

interface TypeCommentsData {
  stateDataComments: DataComment;
}

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
      await standartAxios(
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
