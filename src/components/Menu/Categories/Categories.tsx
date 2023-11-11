import React from "react";
import styles from "./Categories.module.scss";
import Account from "../../Auth/Account/Account";
import { useAppSelector } from "../../../hook";

interface CategoriesProps {
  closeAccordion: React.MouseEventHandler;
}

const Categories: React.FC<CategoriesProps> = ({ closeAccordion }) => {
  const { stateCategory } = useAppSelector((state) => state.mainPageSlice);
  //   console.log(stateCategory);

  return (
    <div className={styles.categoriesBlock}>
      <Account />
      <ul>
        {stateCategory?.map((c) => (
          <li key={c.id} onClick={closeAccordion}>
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
