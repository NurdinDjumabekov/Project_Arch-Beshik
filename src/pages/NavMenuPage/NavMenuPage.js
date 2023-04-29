import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStateBtn } from "../../store/infoWorkSlice";
import { NavLink } from "react-router-dom";
import styles from "./NavMenuPage.module.css";

const NavMenuPage = () => {
  const { stateBtnNav } = useSelector((state) => state.infoWorkSlice);
  const dispatch = useDispatch();
  return (
    stateBtnNav && (
      <div className={styles.menu_info}>
        <div className="container">
          <ul className={styles.main_list}>
            <li>
              <a href="">Вход</a>
            </li>
            <li>
              <a href="">Задать вопрос </a>
            </li>
            <li>
              <a href="">Оставить жалобу</a>
            </li>
          </ul>
          <ul className={styles.infrastructure_list}>
            <li>
              <h2>Инфраструктура</h2>
            </li>
            <li>
              <NavLink to={"/"} onClick={() => dispatch(changeStateBtn(false))}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/login"}
                onClick={() => dispatch(changeStateBtn(false))}
              >
                Регистрация
              </NavLink>
            </li>
            <li>
              <a href="#">Дороги</a>
            </li>
            <li>
              <a href="#">Освещение</a>
            </li>
            <li>
              <a href="#">Водоканал</a>
            </li>
            <li>
              <a href="#">Электричество</a>
            </li>
          </ul>
          <ul className={styles.usefull_list}>
            <li>
              <h2>Полезное</h2>
            </li>
            <li>
              <a href="#">УПСМ (безопасность)</a>
            </li>
            <li>
              <a href="#">Консультация</a>
            </li>
            <li>
              <a href="#">Воспитание детей</a>
            </li>
            <li>
              <a href="#">Чрезвычайные ситуации</a>
            </li>
            <li>
              <a href="#">Культурная часть</a>
            </li>
            <li>
              <a href="#">Культура и спорт</a>
            </li>
          </ul>
          <ul className={styles.about_list}>
            <li>
              <h2>О нас</h2>
            </li>
            <li>
              <h2>Деятельность делегатов</h2>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default NavMenuPage;
