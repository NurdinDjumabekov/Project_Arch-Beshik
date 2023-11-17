import React from "react";
import styles from "./HousesContent.module.scss";
import { HousemanageList } from "../../../types/mainContent";

interface stateProps {
  sortData?: HousemanageList[];
}

const HousesContent: React.FC<stateProps> = ({ sortData }) => {
  console.log(sortData);
  return <div className={styles.housesContent}>HousesContent</div>;
};

export default HousesContent;
