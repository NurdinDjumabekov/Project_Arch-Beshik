import React, { useEffect } from "react";
import styles from "./MenuBigDisplay.module.css";
import { infostartOutput } from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuBigDisplay = () => {
  const { infoNewArr } = useSelector((state) => state.infoWorkSlice);
  const dispatch = useDispatch();
  console.log(infoNewArr);
  useEffect(() => {
    dispatch(infostartOutput());
  }, []);
  return (
    <div className={styles.parentBlock_menuBig}>
      <ul>
        {/* {infoNewArr.map((category) => (
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
