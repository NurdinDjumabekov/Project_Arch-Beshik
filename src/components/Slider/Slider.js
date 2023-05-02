import React, { useState } from "react";
import styles from "./Slider.module.css";
import sliderImg_1 from "../../assests/images/slider/for_slider_1.png";
import sliderImg_2 from "../../assests/images/slider/for_slider_2.png";
import sliderImg_3 from "../../assests/images/slider/for_slider_3.png";
import sliderImg_4 from "../../assests/images/slider/for_slider_4.png";
import sliderImg_5 from "../../assests/images/slider/for_slider_5.png";
import home_kyrgyz from "../../assests/images/slider/home_kyrgyz.jpg";
import tazalyk from "../../assests/images/slider/tazalyk.jpg";
import { NavLink } from "react-router-dom";
const Slider = () => {
  const [count, setCount] = useState(0);
  const imgArr = [
    sliderImg_1,
    sliderImg_2,
    sliderImg_3,
    sliderImg_4,
    sliderImg_5,
  ];

  const nextSlide = () => {
    // if (count >= 4) {
    //   return setCount(0);
    // } else {
    //   return setCount(count + 1);
    // }
  };
  // setInterval(() => {
  //   nextSlide();
  //   console.log(count);
  // }, 1000);

  const prevSlide = () => {
    if (count === 0) {
      setCount(4);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.slider_parentBlock}>
      {/* <button onClick={nextSlide} className={styles.btn_next}>
        next
      </button>
      <button onClick={prevSlide} className={styles.btn_prev}>
        prev
      </button> */}
      <div className="container">
        <div className={styles.slider_block}>
          <div className={styles.block_for_img}>
            <img src={imgArr[count]} alt="" />
            <h2>Арча Бешик</h2>
          </div>
          <div className={styles.block_for_contentImg}>
            <NavLink to={"/history"}>
              <div className={styles.block_for_history}>
                <img src={home_kyrgyz} alt="" />
                <h3>Тарых</h3>
              </div>
            </NavLink>
            <NavLink>
              <div className={styles.block_for_clear}>
                <img src={tazalyk} alt="" />
                <h4>Тазалык</h4>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
