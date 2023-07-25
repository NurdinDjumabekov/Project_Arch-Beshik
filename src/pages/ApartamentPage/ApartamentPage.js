import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Apartament.module.css";
import EveryCard from "../../components/EveryCard/EveryCard";
import MenuBigDisplay from "../../components/MenuBigDisplay/MenuBigDisplay";
import Preloader from "../../components/Preloader/Preloader";
import Footer from "../../components/Footer/Footer";
import { toTakeCardInfo } from "../../store/reducers/mainPageSlice";
import Pagination from "../../components/Pagination/Pagination";
import { toTakeDataHousemanage } from "../../store/reducers/houseManageSlice";
import EveryApartament from "../../components/EveryApartament/EveryApartament";
const ApartamentPage = () => {
  const dispatch = useDispatch();

  const { titleName, statePreloader } = useSelector(
    (state) => state.mainPageSlice
  );

  const { dataAllApartaments } = useSelector((state) => state.houseManageSlice);

  useEffect(() => {
    dispatch(toTakeDataHousemanage());
    window.scrollTo(0, 0);
  }, []);

  //   console.log(dataAllApartaments);

  return (
    <>
      {statePreloader ? (
        <>
          <div className="container">
            <div className="block_animations"></div>
            <div className="block_info">
              <div className={styles.header_textMain_p}>
                <h2>
                  {titleName === "Новостная лента" ? (
                    <> Новостная лента </>
                  ) : (
                    titleName
                  )}
                </h2>
              </div>
              <div className={styles.block_for_content}>
                <div className={styles.cards_block}>
                  {dataAllApartaments?.length === 0 ? (
                    <h3 className={styles.no_posts}>Постов пока что нету555</h3>
                  ) : (
                    dataAllApartaments?.map((apartamentInfo) => (
                      <EveryApartament
                        key={apartamentInfo.id}
                        apartamentInfo={apartamentInfo}
                      />
                    ))
                  )}
                </div>
                <MenuBigDisplay />
              </div>
              {/* <div className={styles.pagination}>
                <Pagination allPage={200} />
              </div> */}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
};

export default ApartamentPage;
