import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
import img_mainIcon from "../../assests/images/main_icon.svg";
import nav_btnFalse from "../../assests/images/Cross.svg";
import nav_btnTrue from "../../assests/images/Icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeStateBtn } from "../../store/infoWorkSlice";
import NavMenuPage from "../../pages/NavMenuPage/NavMenuPage";

const NavMenu = () => {
  const { stateBtnNav } = useSelector((state) => state.infoWorkSlice);
  const dispatch = useDispatch();
  // console.log(stateBtnNav);
  return (
    <div className={styles.nav_blockParent}>
      <div className={styles.nav_menu}>
        <div className="container">
          <nav>
            <NavLink to={"/"}>
              <img
                src={img_mainIcon}
                alt="#"
                className={styles.btn_left_rigth}
              />
            </NavLink>
            <h1>Арча Бешик</h1>
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
      </div>
      {stateBtnNav && <NavMenuPage />}
    </div>
  );
};

export default NavMenu;
