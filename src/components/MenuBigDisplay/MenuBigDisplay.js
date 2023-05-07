import React, { useEffect } from "react";
import styles from "./MenuBigDisplay.module.css";
import {
  changeCategories,
  stateRenderCategory,
  takeCategoryOutput,
} from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuBigDisplay = () => {
  const urlApartament = `housemanage`;
  const { infoCategory } = useSelector((state) => state.infoWorkSlice);
  const dispatch = useDispatch();
  // console.log(infoCategory, "nnn");
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);

  const changeCategoryBtns = (categoryId, categoryBoolean) => {
    if (categoryBoolean) {
      dispatch(changeCategories(`${urlApartament}/`));
      dispatch(stateRenderCategory(true));
    } else {
      dispatch(changeCategories(`${categoryId}/`));
      dispatch(stateRenderCategory(false));
    }
  };
  const allPosts = () => {
    dispatch(changeCategories(""));
    dispatch(stateRenderCategory(true));
    dispatch(stateRenderCategory(false));
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
            <button
              onClick={() => changeCategoryBtns(category.id, category.is_rent)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBigDisplay;
