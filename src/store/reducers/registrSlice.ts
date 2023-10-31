import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { throwLS } from "../../helpers/throwLS";

type TypeRegistr = {
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  number: string,
  password: string
}

type TypeUrl = {
  url: string,
  lang: string,
  type: string,
  dataRegistr: { [key: string]: string }
}

type TypeToken = {
  token: string,
  username: string
}

type TypeRegistrState = {
  dataRegistr: TypeRegistr
  dataUrl: TypeUrl
  dataToken: TypeToken
}

const initialState: TypeRegistrState = {
  dataRegistr: {
    username: "",
    first_name: "nurdin",
    last_name: "nurdinBek",
    email: "",
    number: "",
    password: ""
  },
  dataUrl: {
    url: "",
    lang: "",
    type: "",
    dataRegistr: {}
  },

  dataToken: {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    username: localStorage.getItem("username") ? localStorage.getItem("username") : ""
  } as TypeToken,
};

export const registrationUser = createAsyncThunk(
  "registration",
  async (info: TypeUrl, { dispatch }) => {
    try {
      const resp = await standartAxios(info?.url, info.lang, info.type, info.dataRegistr );
      throwLS(resp?.data?.token, info?.dataRegistr?.username)
      dispatch(toTakeToken({token: resp?.data?.token, username: info?.dataRegistr?.username}))
    } catch (err) {
      console.log(err);
      throwLS("", "")
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
