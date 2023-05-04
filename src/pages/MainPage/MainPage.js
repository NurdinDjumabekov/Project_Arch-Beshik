import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import EveryCard from "../../components/EveryCard/EveryCard";
import { infoWorkOutput } from "../../store/infoWorkSlice";
import MainSkeleton from "../../components/skeletons/MainSkeleton";
import MenuBigDisplay from "../../components/MenuBigDisplay/MenuBigDisplay";
import Preloader from "../../components/Preloader/Preloader";
import Slider from "../../components/Slider/Slider";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const MainPage = () => {
  const { infoArr, stateSkeleton } = useSelector(
    (state) => state.infoWorkSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infoWorkOutput());
  }, []);

  return (
    <>
      {stateSkeleton ? (
        <>
          <Slider />
          <b>
            <NavLink to={"/admin"}>старница админа</NavLink>
          </b>
          <div className="container">
            <div className="block_animations"></div>
            <div className="block_info">
              <div className={styles.header_textMain}>
                <h2>Новостная лента</h2>
              </div>
              <div className={styles.block_for_content}>
                <div className={styles.cards_block}>
                  {infoArr.map((cardInfo) => (
                    <EveryCard key={cardInfo.id} cardInfo={cardInfo} />
                  ))}
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
