import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavMenu.module.css";
import img_mainIcon from "../../assests/images/main_icon.svg";
import nav_btnFalse from "../../assests/images/Cross.svg";
import nav_btnTrue from "../../assests/images/Icon.svg";
import nav_btn_search from "../../assests/images/nav/Search_bnt.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeStateBtn } from "../../store/infoWorkSlice";
import InputSearch from "../InputSearch/InputSearch";
import Window_login from "../Windows/Window_login/Window_login";
import Window_registration from "../Windows/Window_registrarion/Window_registration";
import {
  changeStateLogin,
  changeStateRegistration,
} from "../../store/reducers/windowsSlice";
import Logout from "../Logout/Logout";
import MenuBigDisplay from "../MenuBigDisplay/MenuBigDisplay";
const NavMenu = () => {
  const { stateBtnNav } = useSelector((state) => state.infoWorkSlice);
  const [inputState, setInputState] = useState(false);
  const [stateToken, setStateToken] = useState(
    Boolean(localStorage.getItem("stateToken"))
  );
  const [nameIcon, setNameIcon] = useState("null");
  useEffect(() => {
    const name = localStorage.getItem("nameUser")
      ? localStorage.getItem("nameUser")
      : "null";
    setNameIcon(name);
  }, []);
  const { registrationState, loginState } = useSelector(
    (state) => state.windowsSlice
  );
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    localStorage.setItem("nameUser", nameIcon);
    localStorage.setItem("stateToken", stateToken);
  }, [nameIcon]);
  const location = useLocation();
  const [lookSearch, setLookSearch] = useState(true);
  useEffect(() => {
    if (location.pathname === "/") {
      setLookSearch(true);
    } else {
      setLookSearch(false);
    }
  }, [location.pathname]);
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
          {lookSearch && inputState && (
            <InputSearch setInputState={setInputState} />
          )}
          <div className={styles.block_for_navBtns}>
            {lookSearch && (
              <button
                onClick={() => setInputState(true)}
                className={inputState ? styles.none : styles.iAmHere}
              >
                <img src={nav_btn_search} alt="" />
                Поиск
              </button>
            )}
            {token ? (
              <Logout setStateToken={setStateToken} />
            ) : (
              <button onClick={() => dispatch(changeStateLogin(true))}>
                Вход
              </button>
            )}

            {/* {console.log(stateToken)} */}
            {nameIcon !== "null" ? (
              <b>{nameIcon}</b>
            ) : (
              <button onClick={() => dispatch(changeStateRegistration(true))}>
                Регистрация
              </button>
            )}
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
      {stateBtnNav && <MenuBigDisplay />}
      {loginState && (
        <Window_login setNameIcon={setNameIcon} setStateToken={setStateToken} />
      )}
      {registrationState && <Window_registration />}
    </div>
  );
};

export default NavMenu;
