import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { throwLS } from "../../helpers/throwLS";
import { standartAxios } from "../../helpers/standartAxios";
import { toTakeToken } from "./registrSlice";
import { errorsSendData } from "../../helpers/errorsSendData";

type TypeLogins = {
  username: string;
  password: string;
};

type TypeUrl = {
  url: string;
  lang: string;
  type: string;
  dataLogin: { [key: string]: string };
};
type TypeError = {
  state: boolean;
  text: string;
};

type TypeLoginState = {
  dataLogin: TypeLogins;
  loginState: TypeError;
};

const initialState: TypeLoginState = {
  dataLogin: {
    username: "",
    password: "",
  },
  loginState: {
    state: false,
    text: "",
  },
};

export const loginUser = createAsyncThunk(
  "loginUser",
  async (info: TypeUrl, { dispatch }) => {
    try {
      const resp = await standartAxios(
        info?.url,
        info.lang,
        info.type,
        info.dataLogin
      );
      throwLS(resp?.data?.token, info?.dataLogin?.username);
      dispatch(
        toTakeToken({
          token: resp?.data?.token,
          username: info?.dataLogin?.username,
        })
      );
    } catch (err) {
      errorsSendData(dispatch, "Ошибка! Что-то пошло не так...");
      console.log(err);
      throwLS("", "");
    }
  }
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    changeDataLogin: (state, action: PayloadAction<TypeLogins>) => {
      state.dataLogin = action.payload;
    },
    changeErrloginState: (state, action) => {
      state.loginState = action.payload;
    },
  },
});
export const { changeDataLogin, changeErrloginState } = loginSlice.actions;

export default loginSlice.reducer;
