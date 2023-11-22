import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { throwLS } from "../../helpers/throwLS";
import { errorsSendData } from "../../helpers/errorsSendData";
import { changePreloader } from "./mainPageSlice";
import { TypeRegistr, TypeToken } from "../../types/mainContent";

type TypeUrl = {
  url: string;
  lang: string;
  type: string;
  dataRegistr: TypeRegistr;
};

type TypeRegistrState = {
  dataRegistr: TypeRegistr;
  dataToken: TypeToken;
};

const initialState: TypeRegistrState = {
  dataRegistr: {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    password: "",
  },

  dataToken: {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
  } as TypeToken,
};

export const registrationUser = createAsyncThunk(
  "registrationUser",
  async (info: TypeUrl, { dispatch }) => {
    try {
      const resp = await standartAxios(
        info?.url,
        info.lang,
        info.type,
        info.dataRegistr
      );
      if (resp?.data?.errors) {
        throwLS("", "");
        errorsSendData(dispatch, "Что-то пошло не так");
      } else {
        throwLS(resp?.data?.token, info?.dataRegistr?.username);
        dispatch(
          toTakeToken({
            token: resp?.data?.token,
            username: info?.dataRegistr?.username,
          })
        );
        dispatch(changePreloader(true));
        setTimeout(() => {
          dispatch(changePreloader(false));
        }, 1000);
      }
    } catch (err) {
      errorsSendData(dispatch, "Что-то пошло не так");
      console.log(err);
      throwLS("", "");
    }
  }
);

const registrSlice = createSlice({
  name: "registrSlice",
  initialState,
  reducers: {
    changeDataRegistr: (state, action: PayloadAction<TypeRegistr>) => {
      state.dataRegistr = action.payload;
    },
    toTakeToken: (state, action: PayloadAction<TypeToken>) => {
      state.dataToken = action.payload;
    },
  },
});
export const { changeDataRegistr, toTakeToken } = registrSlice.actions;

export default registrSlice.reducer;
