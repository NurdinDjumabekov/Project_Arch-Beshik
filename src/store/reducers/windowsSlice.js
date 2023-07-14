import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changeDataCards, changePreloader } from "./mainPageSlice";

const initialState = {
  stateGoodAuthLogin: false,
  loginState: false,
  registrationState: false,
  moreLoginInfo: true,
};

export const searchData = createAsyncThunk(
  "searchData",
  async (id, { dispatch }) => {
    dispatch(changePreloader(false));
    try {
      const { data } = await axios.get(
        `http://baielbekenov.pythonanywhere.com/api/search_content?title=газ`
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
    changeMoreLoginInfo: () => {},
  },
});
export const {
  changeStateGoodAuthLogin,
  changeStateLogin,
  changeStateRegistration,
} = windowsSlice.actions;
export default windowsSlice.reducer;
