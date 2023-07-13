import React, { useEffect } from "react";
import styles from "./MenuBigDisplay.module.css";
import { changeCategories, changeStateBtn } from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateLogin,
  changeStateRegistration,
} from "../../store/reducers/windowsSlice";
import { NavLink } from "react-router-dom";
import {
  changeNameTitle,
  takeCategoryOutput,
} from "../../store/reducers/mainPageSlice";
const MenuBigDisplay = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);
  const { infoCategory } = useSelector((state) => state.mainPageSlice);

  const changeCategoryBtns = (name) => {
    dispatch(changeNameTitle(name));
  };
  const allPosts = () => {
    dispatch(changeNameTitle("Новостная лента"));
    dispatch(changeCategories(""));
  };
  const loginFn = () => {
    dispatch(changeStateLogin(true));
  };
  const registrationFn = () => {
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
          {infoCategory?.map((category, index) => (
            <li key={category.id}>
              <button onClick={() => changeCategoryBtns(category.name)}>
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
      {false && (
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
              {infoCategory?.map((category, index) => (
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
