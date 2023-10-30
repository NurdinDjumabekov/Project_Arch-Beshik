import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TypeRegistr = {
  name: string,
  email: string,
  number: string,
  password: string
}

type TypeRegistrState = {
  dataRegistr: TypeRegistr
}

const initialState: TypeRegistrState = {
  dataRegistr: {
    name: "",
    email: "",
    number: "",
    password: ""
  },
};

const registrSlice = createSlice({
  name: "registrSlice",
  initialState,
  reducers: {
    changeDataRegistr: (state, action: PayloadAction<TypeRegistr>) => {
      state.dataRegistr = action.payload;
    },
  },
});
export const { changeDataRegistr } = registrSlice.actions;

export default registrSlice.reducer;
