import React, { useState } from "react";
import styles from "./Slider.module.css";
import slider_1 from "../../assests/images/slider/slider_Photo.png";
import slider_2 from "../../assests/images/main/main_photo_back.jpg";

const Slider = () => {
  const [slide, setSlide] = useState([slider_1, slider_2, slider_1, slider_2]);
  const [count, setCount] = useState(0);
  const next = () => {
    if (count === slide.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const prev = () => {
    if (count === 0) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
  };
  //   setInterval(() => {
  //     next();
  //   }, 5000);

  console.log(count);

  return (
    <div>
      <div className="container">
        <div className={styles.sliderShow}>
          <div className={styles.every_slider}>
            {/* <div className={styles.block_changeSlider}>
              <button onClick={prev}>prev</button>
              <div>
                <img src={slide[count]} alt="" />
              </div>
              <button onClick={next}>next</button>
            </div> */}
            {/* <div className={styles.slider_btns}>
              <button onClick={prev}>left</button>
              <button onClick={next}>right</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
