import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import EveryCard from "../../components/EveryCard/EveryCard";
import { infoWorkOutput } from "../../store/infoWorkSlice";
import MainSkeleton from "../../components/skeletons/MainSkeleton";
import MenuBigDisplay from "../../components/MenuBigDisplay/MenuBigDisplay";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
const MainPage = () => {
  const { infoArr, stateSkeleton } = useSelector(
    (state) => state.infoWorkSlice
  );
  // console.log(infoArr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infoWorkOutput());
  }, []);
  return (
    <Slider />
    // <>
    //   {/* <div className={styles.block_imgInfo}>
    //     <div className={styles.child_imgInfo}>
    //       <p>Добро пожаловать</p>
    //       <h1>в Арча Бешик</h1>
    //     </div>
    //   </div>  */}
    //         <Slider />

    //   {stateSkeleton ? (
    //     <div className="container">
    //       <div className="block_animations"></div>
    //       <div className="block_info">
    //         {/* <exapleSlider /> */}
    //         <div className={styles.header_textMain}>
    //           <h2>Новостная лента</h2>
    //         </div>
    //         <div className={styles.block_for_content}>
    //           <div className={styles.cards_block}>
    //             {infoArr.map((cardInfo) => (
    //               <EveryCard key={cardInfo.id} cardInfo={cardInfo} />
    //             ))}
    //           </div>
    //           <MenuBigDisplay />
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <MainSkeleton />
    //   )}
    //   <Footer />
    // </>
  );
};

export default MainPage;
