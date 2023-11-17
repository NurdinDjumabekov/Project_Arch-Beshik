import React from "react";
import styles from "./Categories.module.scss";
import Account from "../../Auth/Account/Account";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { useNavigate } from "react-router-dom";
import { changeStateIsRent, choiceCategories } from "../../../store/reducers/categorySlice";

interface CategoriesProps {
  closeAccordion: React.MouseEventHandler;
}

const Categories: React.FC<CategoriesProps> = ({ closeAccordion }) => {
  const { stateCategory } = useAppSelector((state) => state.categorySlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clickCategory = (e: any, id: number, is_rent: boolean) => {
    closeAccordion(e);
    if (is_rent) {
       dispatch( choiceCategories({url: `content_list/housemanage`,     lang: "ru",     type: "GET",   }) );
    } 
    else 
    { 
      dispatch( choiceCategories({ url: `content_list/${id}`, lang: "ru", type: "GET" }));
    }
    navigate("/");
    dispatch(changeStateIsRent(is_rent))
  };

  const allCategory = (e: any) => {
    closeAccordion(e);
    dispatch(
      choiceCategories({ url: `content_list`, lang: "ru", type: "GET" })
    );
    dispatch(changeStateIsRent(false))
    navigate("/");
  };

  const questions = (e: any) => {
    closeAccordion(e);
    navigate("/questions");
    dispatch(changeStateIsRent(false))
  };

  return (
    <div className={styles.categoriesBlock}>
      <Account />
      <ul>
        <li onClick={allCategory}>Все категории</li>
        {stateCategory?.map((c) => (
          <li key={c.id} onClick={(e) => clickCategory(e, c.id, c.is_rent)}>
            {c.name}
          </li>
        ))}
        <li onClick={(e) => questions(e)}>Жалобы и вопросы</li>
      </ul>
    </div>
  );
};

export default Categories;
