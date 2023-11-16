import { Dispatch } from "@reduxjs/toolkit";
import {
  changeErrComment,
  changeErrLogin,
  changeErrQuestion,
  changeErrRegistr,
} from "../store/reducers/errorsSlice";

export const errorsSendData: (dispatch: Dispatch, text: string) => void = (
  dispatch,
  text
) => {
  dispatch(changeErrLogin({ state: true, text: text }));
  setTimeout(() => {
    dispatch(changeErrLogin({ state: false, text: "" }));
  }, 1500);
  ///////////////////////
  dispatch(changeErrRegistr({ state: true, text: text }));
  setTimeout(() => {
    dispatch(changeErrRegistr({ state: false, text: "" }));
  }, 1500);
  ///////////////////////
  dispatch(changeErrComment({ state: true, text: text }));
  setTimeout(() => {
    dispatch(changeErrComment({ state: false, text: "" }));
  }, 1500);
  ///////////////////////
  dispatch(changeErrQuestion({ state: true, text: text }));
  setTimeout(() => {
    dispatch(changeErrQuestion({ state: false, text: "" }));
  }, 1500);
};
