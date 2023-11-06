import { Dispatch } from "@reduxjs/toolkit";
import { changeErrloginState } from "../store/reducers/loginSlice";

export const errorsSendData: (dispatch: Dispatch) => void = (dispatch) => {
    dispatch(changeErrloginState(true))
    setTimeout(() => {
        dispatch(changeErrloginState(false))
    }, 1500);
}