import React, { useEffect } from "react";
import styles from "./MenuBigDisplay.module.css";
import {
  changeCategories,
  changeStateBtn,
  stateRenderCategory,
  takeCategoryOutput,
} from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeNameTitle } from "../../store/stateForMenuSlice";
import {
  changeStateLogin,
  changeStateRegistration,
} from "../../store/statesWindowsSlice";
import Window_login from "../Windows/Window_login/Window_login";
import { NavLink } from "react-router-dom";

const MenuBigDisplay = () => {
  const { infoCategory, stateBtnNav } = useSelector(
    (state) => state.infoWorkSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);

  const changeCategoryBtns = (categoryId, categoryBoolean, index) => {
    dispatch(changeNameTitle(index));
    dispatch(changeStateBtn(false));
    if (categoryBoolean) {
      dispatch(changeCategories(`housemanage/`));
      dispatch(stateRenderCategory(true));
    } else {
      dispatch(changeCategories(`${categoryId}/`));
      dispatch(stateRenderCategory(false));
    }
  };

  const allPosts = () => {
    dispatch(changeStateBtn(false));
    dispatch(changeNameTitle(-1));
    dispatch(changeCategories(""));
    dispatch(stateRenderCategory(true));
    dispatch(stateRenderCategory(false));
  };

  const loginFn = () => {
    dispatch(changeStateBtn(false));
    dispatch(changeStateLogin(true));
  };

  const registrationFn = () => {
    dispatch(changeStateBtn(false));
    dispatch(changeStateRegistration(true));
  };

  return (
    <>
      <div className={styles.parentBlock_menuBig}>
        <h6>Навигация по сайту</h6>
        <ul>
          <li>
            <button onClick={allPosts}>все</button>
          </li>
          {infoCategory.map((category, index) => (
            <li key={category.id}>
              <button
                onClick={() =>
                  changeCategoryBtns(category.id, category.is_rent, index)
                }
              >
                {category.name}
              </button>
            </li>
          ))}
          <li>
            <button>
              <NavLink to={"/complaint"}>Жалобы</NavLink>
            </button>
          </li>
          <li>
            <button>
              <NavLink to={"/question"}>Задать вопрос</NavLink>
            </button>
          </li>
        </ul>
      </div>
      {stateBtnNav && (
        <div className={styles.menu_info}>
          <div className="container">
            <ul className={styles.main_list}>
              <li>
                <button onClick={loginFn}>Вход</button>
              </li>
              <li>
                <button onClick={registrationFn}>Регистрация</button>
              </li>
              <li>
                <button onClick={() => dispatch(changeStateBtn(false))}>
                  <NavLink to={"/question"}>Задать вопрос </NavLink>
                </button>
              </li>
              <li>
                <button onClick={() => dispatch(changeStateBtn(false))}>
                  <NavLink to={"complaint"}>Оставить жалобу</NavLink>
                </button>
              </li>
            </ul>
            <ul>
              <li>
                <h5>Инфраструктура</h5>
              </li>
              <li>
                <button onClick={allPosts}>
                  <NavLink to={"/"}>Главная</NavLink>
                </button>
              </li>
              {infoCategory.map((category, index) => (
                <li key={category.id}>
                  <button
                    onClick={() =>
                      changeCategoryBtns(category.id, category.is_rent, index)
                    }
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBigDisplay;
