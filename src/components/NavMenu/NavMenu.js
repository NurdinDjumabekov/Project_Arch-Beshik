import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
import img_mainIcon from "../../assests/images/main_icon.svg";
import nav_btnFalse from "../../assests/images/Cross.svg";
import nav_btnTrue from "../../assests/images/Icon.svg";
import nav_btn_search from "../../assests/images/nav/Search_bnt.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeStateBtn } from "../../store/infoWorkSlice";
import NavMenuPage from "../../pages/NavMenuPage/NavMenuPage";
import InputSearch from "../InputSearch/InputSearch";
import Window_login from "../Windows/Window_login/Window_login";
import Window_registration from "../Windows/Window_registrarion/Window_registration";
import {
  changeStateLogin,
  changeStateRegistration,
} from "../../store/statesWindowsSlice";
import Logout from "../Logout/Logout";

const NavMenu = () => {
  const { stateBtnNav } = useSelector((state) => state.infoWorkSlice);
  const [inputState, setInputState] = useState(false);
  const [userName, setUserName] = useState(
    "" ? "" : localStorage.getItem("nameUser")
  );
  const { registrationState, loginState } = useSelector(
    (state) => state.statesWindowsSlice
  );
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [stateToken, setStateToken] = useState(
    localStorage.getItem("stateFalse")
      ? Boolean(localStorage.getItem("stateFalse"))
      : false
  );
  // localStorage.setItem("nameUser");

  useEffect(() => {
    localStorage.setItem("stateFalse", stateToken);
    localStorage.setItem("nameUser", userName);
  }, [userName]);

  return (
    <div className={styles.nav_blockParent}>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <div className={styles.block_for_imgLine}>
              <img
                src={img_mainIcon}
                alt="#"
                className={styles.btn_left_rigth}
              />
              <div className={styles.line_mini}></div>
              <h1>Арча Бешик</h1>
            </div>
          </NavLink>
          <h2>Арча Бешик</h2>
          {inputState && <InputSearch setInputState={setInputState} />}
          <div className={styles.block_for_navBtns}>
            <button
              onClick={() => setInputState(true)}
              className={inputState ? styles.none : styles.iAmHere}
            >
              <img src={nav_btn_search} alt="" />
              Поиск
            </button>
            {token ? (
              <Logout setStateToken={setStateToken} />
            ) : (
              <button onClick={() => dispatch(changeStateLogin(true))}>
                Вход
              </button>
            )}
            {loginState && (
              <Window_login
                userName={userName}
                setUserName={setUserName}
                setStateToken={setStateToken}
              />
            )}
            {console.log(stateToken)}
            {stateToken ? (
              userName && <b>{userName}</b>
            ) : (
              <button onClick={() => dispatch(changeStateRegistration(true))}>
                Регистрация
              </button>
            )}
            {registrationState && <Window_registration />}
          </div>
          {stateBtnNav ? (
            <>
              <button
                onClick={() => dispatch(changeStateBtn(false))}
                className={styles.btn_left_rigth}
              >
                <img src={nav_btnFalse} alt="x" />
              </button>
            </>
          ) : (
            <button
              onClick={() => dispatch(changeStateBtn(true))}
              className={styles.btn_left_rigth}
            >
              <img src={nav_btnTrue} alt="ex" />
            </button>
          )}
        </nav>
      </div>
      {stateBtnNav && <NavMenuPage />}
    </div>
  );
};

export default NavMenu;
