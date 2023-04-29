import React, { useState } from "react";
import styles from "./Slider.module.css";
import slider_1 from "../../assests/images/slider/slider_Photo.png";
// import slider_2 from "../../assests/images/main/main_photo_back.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
const Slider = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.sliderShow}>
          <h1>nnnn</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slider_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider_1} alt="" />
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
