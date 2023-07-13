import { useDispatch } from "react-redux";
import {
  changeStateGoodAuthLogin,
  changeStateLogin,
} from "../store/reducers/windowsSlice";
const dispatch = useDispatch();

export const sendRequestLogin = () => {
  return console.log("jdfkbsd,fn,dsn");
  //   return async () => {
  //     try {
  //       const { data } = await axios({
  //         method: "POST",
  //         url: `http://baielbekenov.pythonanywhere.com/api/login/`,
  //         data: {
  //           username: userName,
  //           password: password,
  //         },
  //       });
  //       localStorage.setItem("token", data.token);
  //       localStorage.setItem("name", userName);
  //       // localStorage.setItem("email", email); тут должен быть email
  //       setNameIcon(userName);
  //       dispatch(changeStateGoodAuthLogin(true));
  //       setTimeout(() => {
  //         dispatch(changeStateGoodAuthLogin(false));
  //         dispatch(changeStateLogin(false));
  //         location.reload();
  //       }, 2000);
  //       console.log("sjdajs,dokkkkkkkkkkkkkkkkkkkkkk");
  //       setStateToken(true);
  //     } catch (err) {
  //       setStateLogin(true);
  //       setTimeout(() => {
  //         setStateLogin(false);
  //       }, 3000);
  //       setStateToken(false);
  //       console.log(err);
  //     }
  //   };
};
