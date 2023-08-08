import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavMenu.module.css";
import img_mainIcon from "../../assests/images/main_icon.svg";
import nav_btnFalse from "../../assests/images/Cross.svg";
import nav_btnTrue from "../../assests/images/Icon.svg";
import nav_btn_search from "../../assests/images/nav/Search_bnt.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeBtnNavMiniDisplay } from "../../store/reducers/mainPageSlice";
import InputSearch from "../InputSearch/InputSearch";
import Window_login from "../Windows/Window_login/Window_login";
import Window_registration from "../Windows/Window_registrarion/Window_registration";
import {
  changeStateLogin,
  changeStateRegistration,
} from "../../store/reducers/windowsSlice";
import Logout from "../Logout/Logout";
import MenuBigDisplay from "../MenuBigDisplay/MenuBigDisplay";
import Window_forgetPassword from "../Windows/Window_forgetPassword/Window_forgetPassword";
const NavMenu = () => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState(false);

  const { btnNavMiniDisplay, stateForLookSlider } = useSelector(
    (state) => state.mainPageSlice
  );
  const { registrationState, loginState, forgetPassword, dataToken } =
    useSelector((state) => state.windowsSlice);

  ///////////////////////////////////////////
  const location = useLocation();
  const [lookSearch, setLookSearch] = useState(true);
  return (
    <>
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
                <div className={styles.line_mini}>
                  <svg
                    width="3"
                    height="46"
                    viewBox="0 0 3 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1V46" stroke="#086FA1" strokeWidth="2" />
                    <path d="M2 0V45" stroke="black" strokeWidth="2" />
                  </svg>
                </div>
                <h1>Арча Бешик</h1>
              </div>
            </NavLink>
            <h2>Арча Бешик</h2>
            {inputState && <InputSearch setInputState={setInputState} />}
            <div className={styles.block_for_navBtns}>
              {lookSearch && (
                <button
                  onClick={() => setInputState(true)}
                  className={inputState ? styles.none : styles.iAmHere}
                >
                  <img src={nav_btn_search} alt="search" />
                  Поиск
                </button>
              )}
              {dataToken ? (
                <Logout />
              ) : (
                <>
                  <button onClick={() => dispatch(changeStateLogin(true))}>
                    Вход
                  </button>
                  <button
                    onClick={() => dispatch(changeStateRegistration(true))}
                  >
                    Регистрация
                  </button>
                </>
              )}
            </div>
            {btnNavMiniDisplay ? (
              <>
                <button
                  onClick={() => dispatch(changeBtnNavMiniDisplay(false))}
                  className={styles.btn_left_rigth}
                >
                  <img src={nav_btnFalse} alt="x" />
                </button>
              </>
            ) : (
              <button
                onClick={() => dispatch(changeBtnNavMiniDisplay(true))}
                className={styles.btn_left_rigth}
              >
                <img src={nav_btnTrue} alt="ex" />
              </button>
            )}
          </nav>
        </div>
        {btnNavMiniDisplay && <MenuBigDisplay />}
        {loginState && <Window_login />}
        {registrationState && <Window_registration />}
        {/* {forgetPassword && <Window_forgetPassword />} */}
      </div>
      <div className={styles.shadow_navMenu}></div>
    </>
  );
};

export default NavMenu;
