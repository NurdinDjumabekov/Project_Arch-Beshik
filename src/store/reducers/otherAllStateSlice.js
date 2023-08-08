import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changePreloader } from "./mainPageSlice";

const initialState = {
  dataHistory: [],
  dataAdvertising: [],
  dataDetailedPage: {},
  dataForComparison: [],
  lookDataSearch: false,
  dataComplaint: [],
  dataQuestion: [],
};

export const toTakeDataHistory = createAsyncThunk(
  "toTakeDetailedApartament",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://6443c7ca90738aa7c0778850.mockapi.io/infoportal`,
      });
      //   dispatch(changeDataHistory(data));
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const toTakeAdvertising = createAsyncThunk(
  "toTakeAdvertising",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://192.168.0.105:8000/api/advert_list/`,
      });
      dispatch(changeDataAdvertising(data.results));
      // console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  }
);

export const toTakeDetailedInfo = createAsyncThunk(
  "toTakeDetailedInfo",
  async (info, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://192.168.0.105:8000/api/content_detail/${info.id}/`,
      });
      // console.log(data.content);
      dispatch(changeDataDetailedPage(data.content));
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
    }
  }
);

export const toTakeAllData = createAsyncThunk(
  "toTakeAllData",
  async (page, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://192.168.0.105:8000/api/content_search/`,
      });
      dispatch(toTakeDataForComparison(data));
      // console.log(data, "data");
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
    }
  }
);

export const toTakeAllComplaintData = createAsyncThunk(
  "toTakeAllData",
  async (page, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://192.168.0.105:8000/api/report_list/`,
      });
      dispatch(totakeDataComplaint(data.results));
      console.log(data.results, "data");
    } catch (error) {
      console.log(error);
    }
  }
);

export const toSendComplaintData = createAsyncThunk(
  "toSendComplaintData",
  async (info, { dispatch }) => {
    // console.log(info);
    try {
      await axios({
        method: "POSt",
        url: `http://192.168.0.105:8000/api/report_list/`,
        data: {
          text: info.text,
          name: info.name,
        },
      });
      // console.log(data.results, "data");
    } catch (error) {
      console.log(error);
    }
  }
);

export const toTakeAllQuestionsData = createAsyncThunk(
  "toTakeAllData",
  async (page, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://192.168.0.105:8000/api/question_list/`,
      });
      dispatch(totakeDataQuestion(data.results));
      // console.log(data.results, "data");
    } catch (error) {
      console.log(error);
    }
  }
);

export const toSendQuestionData = createAsyncThunk(
  "toSendComplaintData",
  async (info, { dispatch }) => {
    try {
      await axios({
        method: "POSt",
        url: `http://192.168.0.105:8000/api/question_list/`,
        data: {
          text: info.text,
          name: info.name,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const otherAllStateSlice = createSlice({
  name: "otherAllStateSlice",
  initialState,
  reducers: {
    changeDataHistory: (state, action) => {
      state.dataHistory = action.payload;
    },
    changeDataAdvertising: (state, action) => {
      state.dataAdvertising = action.payload;
    },
    changeDataDetailedPage: (state, action) => {
      state.dataDetailedPage = action.payload;
    },
    toTakeDataForComparison: (state, action) => {
      state.dataForComparison = action.payload;
    },
    changeLookDataSearch: (state, action) => {
      state.lookDataSearch = action.payload;
    },
    totakeDataComplaint: (state, action) => {
      state.dataComplaint = action.payload;
    },
    totakeDataQuestion: (state, action) => {
      state.dataQuestion = action.payload;
    },
  },
});

export const {
  changeDataHistory,
  changeDataAdvertising,
  changeDataDetailedPage,
  toTakeDataForComparison,
  changeLookDataSearch,
  totakeDataComplaint,
  totakeDataQuestion,
} = otherAllStateSlice.actions;
export default otherAllStateSlice.reducer;
