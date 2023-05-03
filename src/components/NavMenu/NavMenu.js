import React, { useState } from "react";
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

const NavMenu = () => {
  const { stateBtnNav } = useSelector((state) => state.infoWorkSlice);
  const { registrationState, loginState } = useSelector(
    (state) => state.statesWindowsSlice
  );
  const [inputState, setInputState] = useState(false);
  // const [loginState, setLoginState] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={styles.nav_blockParent}>
      <div className="container">
        <nav>
          <div className={styles.block_for_imgLine}>
            <NavLink to={"/"}>
              <img
                src={img_mainIcon}
                alt="#"
                className={styles.btn_left_rigth}
              />
            </NavLink>
            <div className={styles.line_mini}></div>
            <h1>Арча Бешик</h1>
          </div>
          <h2>Арча Бешик</h2>
          {inputState && <InputSearch />}
          <div className={styles.block_for_navBtns}>
            <button
              onClick={() => setInputState(true)}
              className={inputState ? styles.none : ""}
            >
              <img src={nav_btn_search} alt="" />
              Поиск
            </button>
            <button onClick={() => dispatch(changeStateLogin(true))}>
              Вход
            </button>
            {loginState && <Window_login />}
            <button onClick={() => dispatch(changeStateRegistration(true))}>
              Регистрация
            </button>
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
