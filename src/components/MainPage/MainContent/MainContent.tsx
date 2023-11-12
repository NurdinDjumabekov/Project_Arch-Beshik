import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../hook";
import styles from "./MainContent.module.scss";
import Paginations from "../Paginations/Paginations";

const MainContent = () => {
  const { stateContentList, paginationCount } = useAppSelector(
    (state) => state.mainPageSlice
  );

  let startIndex: number = (paginationCount - 1) * 12;
  let endIndex: number = paginationCount * 12;

  let sortData = stateContentList?.slice(startIndex, endIndex);

  return (
    <div className={styles.contentBlock}>
      <div className="container">
        <div className={styles.contentBlock__inner}>
          {sortData?.length === 0 ? (
            <p className={styles.noneData}>Данных пока что нету</p>
          ) : (
            sortData?.map((block) => (
              <NavLink
                to={`/detailed/${block.id}`}
                className={styles.contentBlock__every}
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
        <Paginations />
      </div>
    </div>
  );
};

export default MainContent;
