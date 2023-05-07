import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import EveryCard from "../../components/EveryCard/EveryCard";
import {
  changeCategories,
  infoWorkOutput,
  requestOnApartament,
} from "../../store/infoWorkSlice";
import MainSkeleton from "../../components/skeletons/MainSkeleton";
import MenuBigDisplay from "../../components/MenuBigDisplay/MenuBigDisplay";
import Preloader from "../../components/Preloader/Preloader";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import { changeStateForSlider } from "../../store/stateforAdminSlice";
import EveryApartament from "../../components/EveryApartament/EveryApartament";
const MainPage = () => {
  const { infoArr, stateSkeleton, stateRequestOnCategory } = useSelector(
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
      dispatch(infoWorkOutput(stateRequestOnCategory));
    }
    dispatch(changeStateForSlider(true));
  }, [stateRequestOnCategory]);

  return (
    <>
      {stateSkeleton ? (
        <>
          {stateForSlider && <Slider />}
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

{
  /* <h1>Продажа домов и квартир</h1> */
}
