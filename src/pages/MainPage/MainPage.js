import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import EveryCard from "../../components/EveryCard/EveryCard";
import { infoWorkOutput, requestOnApartament } from "../../store/infoWorkSlice";
// changeCategories,
import MainSkeleton from "../../components/skeletons/MainSkeleton";
import MenuBigDisplay from "../../components/MenuBigDisplay/MenuBigDisplay";
import Preloader from "../../components/Preloader/Preloader";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import { changeStateForSlider } from "../../store/stateforAdminSlice";
import EveryApartament from "../../components/EveryApartament/EveryApartament";
import Pagination from "../../components/Pagination/Pagination";
const MainPage = () => {
  const { infoArr, stateSkeleton, objForChangeInfo } = useSelector(
    (state) => state.infoWorkSlice
  );
  console.log(infoArr, "infoArr");

  const { stateForSlider } = useSelector((state) => state.stateforAdminSlice);
  const { stateRenderCategory } = useSelector((state) => state.infoWorkSlice);

  const dispatch = useDispatch();
  useEffect(() => {
    if (stateRenderCategory) {
      dispatch(requestOnApartament());
    } else {
      dispatch(infoWorkOutput(objForChangeInfo));
    }
    dispatch(changeStateForSlider(true));
  }, [objForChangeInfo]);
  return (
    <>
      {stateSkeleton ? (
        <>
          {stateForSlider && <Slider />}
          {/* <Slider /> */}
          <div className="container">
            <div className="block_animations"></div>
            <div className="block_info">
              {stateForSlider && (
                <div className={styles.header_textMain}>
                  <h2>Новостная лента</h2>
                </div>
              )}
              <div className={styles.block_for_content}>
                <div className={styles.cards_block}>
                  {stateRenderCategory ? (
                    infoArr.length === 0 ? (
                      <h1>Постов пока что нету</h1>
                    ) : (
                      infoArr.map((apartamentInfo) => (
                        <EveryApartament
                          key={apartamentInfo.id}
                          apartamentInfo={apartamentInfo}
                        />
                      ))
                    )
                  ) : infoArr.length === 0 ? (
                    <h1>Постов пока что нету</h1>
                  ) : (
                    infoArr.map((cardInfo) => (
                      <EveryCard key={cardInfo.id} cardInfo={cardInfo} />
                    ))
                  )}
                </div>
                <MenuBigDisplay />
              </div>
            </div>
          </div>
          {/* <Pagination /> */}
          <Footer />
        </>
      ) : (
        <>
          <Preloader />
          <MainSkeleton />
        </>
      )}
    </>
  );
};

export default MainPage;
