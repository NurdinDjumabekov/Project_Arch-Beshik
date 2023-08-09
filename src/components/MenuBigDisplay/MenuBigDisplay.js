import React, { useEffect, useRef } from "react";
import styles from "./MenuBigDisplay.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  changeDataToken,
  changeStateLogin,
  changeStateRegistration,
} from "../../store/reducers/windowsSlice";
import {
  changeBtnNavMiniDisplay,
  changeNameTitle,
  changeStateForLookSlider,
  changeStateScrollDisplayMenu,
  takeCategoryOutput,
  toTakeCardInfo,
  toTakeDataCategory,
} from "../../store/reducers/mainPageSlice";

const MenuBigDisplay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);

  const {
    infoCategory,
    btnNavMiniDisplay,
    stateScrollDisplayMenu,
    paginationCards,
  } = useSelector((state) => state.mainPageSlice);

  const { dataToken } = useSelector((state) => state.windowsSlice);

  const changeCategoryBtns = (name, id, choiceData) => {
    if (choiceData === false) {
      navigate("/");
      dispatch(changeStateForLookSlider(false)); // сварачиваю слайдер
      dispatch(changeBtnNavMiniDisplay(false)); // закрывает меню(маленького экрана)
      dispatch(changeNameTitle(name));
      dispatch(toTakeDataCategory(id));
    } else {
      navigate("/housemanage");
      dispatch(changeNameTitle(name));
      // dispatch(toTakeDataCategory(id));
      dispatch(changeStateForLookSlider(false));
      dispatch(changeBtnNavMiniDisplay(false));
    }
  };
  const allPosts = () => {
    dispatch(changeNameTitle("Новостная лента"));
    navigate("/");
    dispatch(toTakeCardInfo(paginationCards));
    dispatch(changeStateForLookSlider(true)); // вид слайдера(на галвной видно, на других нет)
    dispatch(changeBtnNavMiniDisplay(false)); // закрывает меню(маленького экрана)
  };
  const loginFn = () => {
    dispatch(changeStateLogin(true));
    dispatch(changeBtnNavMiniDisplay(false));
    dispatch(changeStateRegistration(false)); // закрывает страницу регитсрации
  };
  const registrationFn = () => {
    dispatch(changeStateRegistration(true));
    dispatch(changeBtnNavMiniDisplay(false));
    dispatch(changeStateLogin(false)); // закрывает страницу логина
  };

  //////////////////////////////////////////////////
  const parentBlockRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = parentBlockRef.current.scrollTop;
      if (scrollY > 110) {
        dispatch(changeStateScrollDisplayMenu(2));
      } else {
        dispatch(changeStateScrollDisplayMenu(1));
      }
    };

    if (parentBlockRef.current) {
      parentBlockRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (parentBlockRef.current) {
        parentBlockRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const logoutFn = () => {
    dispatch(changeDataToken(""));
    localStorage.clear();
    navigate("/");
    location.reload();
  };

  return (
    <>
      <div className={styles.parentBlock_menuBig} ref={parentBlockRef}>
        <h6>Навигация по сайту</h6>
        <ul>
          <li>
            <button onClick={allPosts}>все</button>
          </li>
          {infoCategory?.map((category) => (
            <li key={category.id}>
              <button
                onClick={() =>
                  changeCategoryBtns(
                    category?.name,
                    category?.id,
                    category?.is_rent
                  )
                }
              >
                {category.name}
              </button>
            </li>
          ))}
          <li>
            <button>
              <NavLink to={"/complaint"}>Оставить жалобу</NavLink>
            </button>
          </li>
          <li>
            <button>
              <NavLink to={"/question"}>Задать вопрос</NavLink>
            </button>
          </li>
        </ul>
        {stateScrollDisplayMenu === 1 ? (
          <button className={styles.btn_navigate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
        ) : (
          <button className={styles.btn_navigate} style={{ bottom: "-120px" }}>
            <svg
              style={{ rotate: "180deg" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      {btnNavMiniDisplay && (
        <div className={styles.menu_smallDisplay}>
          <div className={styles.menu_info}>
            <div className="container">
              <ul className={styles.main_list}>
                {dataToken ? (
                  <>
                    <li>
                      <p className={styles.name_user}>
                        {localStorage.getItem("name")}
                      </p>
                    </li>
                    <li>
                      <button onClick={logoutFn}>Выход</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button onClick={loginFn}>Вход</button>
                    </li>
                    <li>
                      <button onClick={registrationFn}>Регистрация</button>
                    </li>
                  </>
                )}

                <li>
                  <button
                    onClick={() => dispatch(changeBtnNavMiniDisplay(false))}
                  >
                    <NavLink to={"/question"}>Задать вопрос</NavLink>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => dispatch(changeBtnNavMiniDisplay(false))}
                  >
                    <NavLink to={"/complaint"}>Оставить жалобу</NavLink>
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
                {infoCategory?.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() =>
                        changeCategoryBtns(
                          category?.name,
                          category?.id,
                          category?.is_rent
                        )
                      }
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBigDisplay;
