import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type TypeLogins = {
  login: string,
  password: string
}

type TypeLoginState = {
  dataLogin: TypeLogins,
}

const initialState: TypeLoginState = {
  dataLogin: {
    login: "",
    password: ""
  },
};

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
