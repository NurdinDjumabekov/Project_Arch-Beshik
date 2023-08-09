import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changePreloader } from "./mainPageSlice";
import { addID } from "../../helpers/addID";

const initialState = {
  dataHistory: [],
  dataAdvertising: [],
  dataDetailedPage: {},
  dataForComparison: [],
  lookDataSearch: false,
  dataComplaint: [],
  dataQuestion: [],
  allPhotos: [],
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
        url: `http://baielbekenov.pythonanywhere.com/api/advert_list/`,
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
        url: `http://baielbekenov.pythonanywhere.com/api/content_detail/${info.id}/`,
      });
      dispatch(changeDataDetailedPage(data.content));
      dispatch(totakeAllPhotos(addID(data?.content?.photos)));
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
        url: `http://baielbekenov.pythonanywhere.com/api/content_search/`,
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
        url: `http://baielbekenov.pythonanywhere.com/api/report_list/`,
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
        url: `http://baielbekenov.pythonanywhere.com/api/report_list/`,
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
        url: `http://baielbekenov.pythonanywhere.com/api/question_list/`,
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
        url: `http://baielbekenov.pythonanywhere.com/api/question_list/`,
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
    totakeAllPhotos: (state, action) => {
      state.allPhotos = action.payload;
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
  totakeAllPhotos,
} = otherAllStateSlice.actions;
export default otherAllStateSlice.reducer;
