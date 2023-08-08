import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changeDataCards, changePreloader } from "./mainPageSlice";

const initialState = {
  stateGoodAuthLogin: false,
  loginState: false,
  registrationState: false,
  forgetPassword: false,
  // moreLoginInfo: true,
  dataToken: localStorage.getItem("token"),
  ///// Window_registration
  errorState: false,
  rightState: false,
};

export const searchData = createAsyncThunk(
  "searchData",
  async (id, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/search_content?title=газ`
      );
      // console.log(data, "data");
      dispatch(changeDataCards(data));
      dispatch(changePreloader(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloader(true));
    }
  }
);

export const sendRegistrationData = createAsyncThunk(
  "sendRegistrationData",
  async (data, { dispatch }) => {
    try {
      const responce = await axios({
        method: "POST",
        url: `http://192.168.0.105:8000/api/register/`,
        data: {
          username: data.userName,
          first_name: data.name,
          last_name: data.surName,
          email: data.email,
          password: data.password,
        },
      });
      // console.log(responce.data);
      localStorage.setItem("token", responce.data.token);
      localStorage.setItem("name", data.userName);
      dispatch(changeDataToken(data.token));
      dispatch(changeRightState(true));
      setTimeout(() => {
        dispatch(changeStateRegistration(false));
        dispatch(changeRightState(false));
      }, 1500);
    } catch {
      console.log("Вы не смогли пройти регистрацию!");
      dispatch(changeErrorState(true));
      setTimeout(() => {
        dispatch(changeErrorState(false));
      }, 2000);
    }
  }
);

const windowsSlice = createSlice({
  name: "windowsSlice",
  initialState,
  reducers: {
    changeStateGoodAuthLogin: (state, action) => {
      state.stateGoodAuthLogin = action.payload;
    },
    changeStateLogin: (state, action) => {
      state.loginState = action.payload;
    },
    changeStateRegistration: (state, action) => {
      state.registrationState = action.payload;
    },
    // changeMoreLoginInfo: () => {},
    changeDataToken: (state, action) => {
      state.dataToken = action.payload;
    },
    changeForgetPassword: (state, action) => {
      state.forgetPassword = action.payload;
    },
    changeErrorState: (state, action) => {
      state.errorState = action.payload;
    },
    changeRightState: (state, action) => {
      state.rightState = action.payload;
    },
  },
});
export const {
  changeStateGoodAuthLogin,
  changeStateLogin,
  changeStateRegistration,
  changeDataToken,
  changeForgetPassword,
  changeErrorState,
  changeRightState,
} = windowsSlice.actions;
export default windowsSlice.reducer;
