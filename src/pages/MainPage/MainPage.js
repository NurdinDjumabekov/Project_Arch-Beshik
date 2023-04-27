import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import EveryCard from "../../components/EveryCard/EveryCard";
import { infoWorkOutput } from "../../store/infoWorkSlice";
import MainSkeleton from "../../components/skeletons/MainSkeleton";
const MainPage = () => {
  const { infoArr, stateSkeleton } = useSelector(
    (state) => state.infoWorkSlice
  );
  console.log(infoArr);
  const dispatch = useDispatch();
  console.log(infoArr);
  useEffect(() => {
    dispatch(infoWorkOutput());
  }, []);
  return (
    <>
      {stateSkeleton ? (
        <div className="container">
          <div className="block_animations"></div>
          <div className="block_info">
            <div className={styles.cards_block}>
              {infoArr.map((cardInfo) => (
                <EveryCard key={cardInfo.id} cardInfo={cardInfo} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <MainSkeleton />
      )}
    </>
  );
};

export default MainPage;
