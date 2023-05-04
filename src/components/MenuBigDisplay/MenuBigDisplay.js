import React, { useEffect } from "react";
import styles from "./MenuBigDisplay.module.css";
import { takeCategoryOutput } from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuBigDisplay = () => {
  const { infoCategory } = useSelector((state) => state.infoWorkSlice);
  const dispatch = useDispatch();
  console.log(infoCategory);
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);
  return (
    <div className={styles.parentBlock_menuBig}>
      <h6>Навигация по сайту</h6>
      <ul>
        {/* {infoCategory.map((category) => (
          <li>{category.name}</li>
        ))} */}
        <li>О нас</li>
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
        <li>Газоснабжения</li>
      </ul>
    </div>
  );
};

export default MenuBigDisplay;
