import { Dispatch } from "@reduxjs/toolkit";
import { changeErrloginState } from "../store/reducers/loginSlice";

export const errorsSendData: (dispatch: Dispatch, text: string) => void = (
  dispatch,
  text
) => {
  dispatch(changeErrloginState({ state: true, text: text }));
  setTimeout(() => {
    dispatch(changeErrloginState({ state: false, text: "" }));
  }, 1500);
};
