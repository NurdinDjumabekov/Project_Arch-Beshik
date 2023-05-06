import React, { useEffect, useState } from "react";
import styles from "./SelectCategory.css";
import { takeCategoryOutput } from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";

const SelectCategory = ({ setCategory }) => {
  const { infoCategory } = useSelector((state) => state.infoWorkSlice);
  console.log(infoCategory);
  const dispatch = useDispatch();
  // const [categorySelect, setCategorySelect] = useState([
  //   "История",
  //   "Дороги",
  //   "Тазалык",
  //   "Освещение",
  //   "Канализация",
  //   "Электричество",
  //   "Газоснабжения",
  //   "Консультация",
  //   "Чрезвычайные ситуации",
  //   "Сдача квартир и домов",
  // ]);
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);
  return (
    <>
      <select onChange={(e) => setCategory(e.target.value)}>
        {/* {categorySelect.map((category, index) => (
          <option value={index + 1}>{category}</option>
        ))} */}
        {infoCategory?.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
        {/* <option value="1">Пункт 1</option> */}
      </select>
    </>
  );
};

export default SelectCategory;
