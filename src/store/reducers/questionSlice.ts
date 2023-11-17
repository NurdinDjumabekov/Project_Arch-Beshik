import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { errorsSendData } from "../../helpers/errorsSendData";
import { changePreloader } from "./mainPageSlice";
import { TypeQuestion, TypeTakeQuestion } from "../../types/mainContent";

interface TypeUrl {
  url: string;
  lang: string;
  type: string;
  dataQuestions?: { [key: string]: string };
}

interface TypeQestionState {
  stateQuestion: TypeTakeQuestion[];
  dataQuestions: TypeQuestion;
}

const initialState: TypeQestionState = {
  stateQuestion: [],
  dataQuestions: {
    username: "",
    question: "",
  },
};

export const dataQuestion = createAsyncThunk(
  "dataQuestion",
  async (info: TypeUrl, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const resp = await standartAxios(info?.url, info.lang, info.type);
      dispatch(toTakeDataQuestion(resp?.data?.results));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
    }
  }
);

export const sendQuestions = createAsyncThunk(
  "sendQuestions",
  async (info: TypeUrl, { dispatch }) => {
    try {
      const resp = await standartAxios(
        info?.url,
        info.lang,
        info.type,
        info.dataQuestions
      );
      if (resp?.data?.errors) {
        errorsSendData(dispatch, "Что-то пошло не так");
      } else {
        dispatch(changePreloader(true));
        setTimeout(() => {
          dispatch(changePreloader(false));
        }, 1000);
      }
    } catch (err) {
      errorsSendData(dispatch, "Что-то пошло не так");
      console.log(err);
    }
  }
);

const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    toTakeDataQuestion: (state, action) => {
      state.stateQuestion = action.payload;
    },
    changeDataQuestion: (state, action) => {
      state.dataQuestions = action.payload;
    },
  },
});
export const { toTakeDataQuestion, changeDataQuestion } = questionSlice.actions;

export default questionSlice.reducer;
