import React, { useEffect, useState } from "react";
import styles from "./SelectCategory.css";
import { takeCategoryOutput } from "../../store/infoWorkSlice";
import { useDispatch, useSelector } from "react-redux";

const SelectCategory = () => {
  // const { infoCategory } = useSelector((state) => state.takeCategoryOutput);
  // console.log(infoCategory);
  const dispatch = useDispatch();
  const [categorySelect, setCategorySelect] = useState([
    "История",
    "Дороги",
    "Тазалык",
    "Освещение",
    "Канализация",
    "Электричество",
    "Газоснабжения",
    "Консультация",
    "Чрезвычайные ситуации",
    "Сдача квартир и домов",
  ]);
  const [category, setCategory] = useState(0);
  // console.log(typeof +category, +category);
  useEffect(() => {
    dispatch(takeCategoryOutput());
  }, []);
  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      {categorySelect.map((category, index) => (
        <option value={index + 1}>{category}</option>
      ))}
      {/* {infoCategory?.map((category) => (
          <option value={category.id}>{category.name}</option>
        ))} */}
      {/* <option value="1">Пункт 1</option> */}
    </select>
  );
};

export default SelectCategory;
