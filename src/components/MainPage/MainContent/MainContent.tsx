import { useAppSelector } from "../../../hook";
import styles from "./MainContent.module.scss";
import Paginations from "../Paginations/Paginations";
import NewsContent from "../NewsContent/NewsContent";
import HousesContent from "../HousesContent/HousesContent";
import { ContentList, HousemanageList } from "../../../types/mainContent";

const MainContent = () => {
  const { stateContentList, paginationCount } = useAppSelector(
    (state) => state.mainPageSlice
  );

  const { stateIsRent } = useAppSelector((state) => state.categorySlice);

  let startIndex: number = (paginationCount - 1) * 12;
  let endIndex: number = paginationCount * 12;

  let sortData = stateContentList?.slice(startIndex, endIndex);

  // console.log(sortData, "sortData");
  // console.log(stateContentList, "stateContentList");
  // console.log(stateHousemanage, "stateHousemanage");
  // console.log(stateContentList);

  return (
    <div className={styles.contentBlock}>
      <div className="container">
        <div className={styles.contentBlock__inner}>
          {stateIsRent ? (
            <HousesContent sortData={sortData as HousemanageList[]} />
          ) : (
            <NewsContent sortData={sortData as ContentList[]} />
          )}
        </div>
        <Paginations />
      </div>
    </div>
  );
};

export default MainContent;
