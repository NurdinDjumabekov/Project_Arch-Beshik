import React, { useEffect } from "react";
import styles from "./MenuBigDisplay.module.css";
import {
  changeCategories,
  takeCategoryOutput,
} from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeStateForSlider } from "../../store/stateforAdminSlice";

const MenuBigDisplay = () => {
  const { infoCategory } = useSelector((state) => state.infoWorkSlice);
  const dispatch = useDispatch();
  console.log(infoCategory);
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);

  const changeCategoryBtns = (categoryId) => {
    dispatch(changeCategories(`${categoryId}/`));
  };
  const allPosts = () => {
    dispatch(changeCategories(""));
  };
  return (
    <div className={styles.parentBlock_menuBig}>
      <h6>Навигация по сайту</h6>
      <ul>
        <li>
          <button onClick={allPosts}>все</button>
        </li>
        {infoCategory.map((category) => (
          <li key={category.id}>
            <button onClick={() => changeCategoryBtns(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBigDisplay;

/* <li>О нас</li>
        <li>История</li>
        <li>Дороги</li>
        <li>Тазалык</li>
        <li>Освещение</li>
        <li>Канализация</li>
        <li>Электричество</li>
        <li>Газоснабжения</li>
        <li>Сдача квартир и домов</li>
        <li>Консультация</li>
        <li>Чрезвычайные ситуации</li>
        <li>Освещение</li>
        <li>Водоканал</li>
        <li>Канализация</li>
        <li>Электричество</li>
        <li>Газоснабжения</li> */
