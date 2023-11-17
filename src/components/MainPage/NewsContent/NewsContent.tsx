import React from "react";
import styles from "./NewsContent.module.scss";
import { NavLink } from "react-router-dom";
import { ContentList } from "../../../types/mainContent";

type stateProps = {
  sortData: ContentList[];
};

const NewsContent: React.FC<stateProps> = ({ sortData }) => {
  return (
    <div className={styles.newsContent}>
      {sortData?.length === 0 ? (
        <p className={styles.noneData}>Данных пока что нету</p>
      ) : (
        sortData?.map((block) => (
          <NavLink
            to={`/detailed/${block.id}`}
            className={styles.newsContent__every}
            key={block.id}
          >
            <h3>Новости</h3>
            <img src={block?.image} alt="новости" />
            <div className={styles.contentText}>
              <h2>{block?.title}</h2>
              <p>{block?.content}</p>
            </div>
          </NavLink>
        ))
      )}
    </div>
  );
};

export default NewsContent;
