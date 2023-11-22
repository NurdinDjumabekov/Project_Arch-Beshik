import React from "react";
import styles from "./HousesContent.module.scss";
import { HousemanageList } from "../../../types/mainContent";
import { NavLink } from "react-router-dom";

interface stateProps {
  sortData?: HousemanageList[];
}

const HousesContent: React.FC<stateProps> = ({ sortData }) => {
  // console.log(sortData);
  return (
    <div className={styles.housesContent}>
      {sortData?.length === 0 ? (
        <p className={styles.noneData}>Данных пока что нету</p>
      ) : (
        sortData?.map((block) => (
          <NavLink
            to={`/housemanage/${block.id}`}
            className={styles.housesContent__every}
            key={block.id}
          >
            <h3>Квартира</h3>
            <img src={block?.photoss} alt="новости" />
            <div className={styles.contentText}>
              <h2>{block?.title}</h2>
              <p>{block?.description}</p>
            </div>
          </NavLink>
        ))
      )}
    </div>
  );
};

export default HousesContent;
