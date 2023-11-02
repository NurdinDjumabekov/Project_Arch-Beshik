import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { throwLS } from "../../helpers/throwLS";
import { standartAxios } from "../../helpers/standartAxios";
import { toTakeToken } from "./registrSlice";

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

type TypeLoginState = {
  dataLogin: TypeLogins;
};

const initialState: TypeLoginState = {
  dataLogin: {
    username: "",
    password: "",
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
      console.log(resp?.data?.token);
      dispatch(
        toTakeToken({
          token: resp?.data?.token,
          username: info?.dataLogin?.username,
        })
      );
    } catch (err) {
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
  },
});
export const { changeDataLogin } = loginSlice.actions;

export default loginSlice.reducer;
