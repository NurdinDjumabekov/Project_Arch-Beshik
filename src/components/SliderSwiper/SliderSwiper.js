import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderSwiper.css";
import sliderImg_1 from "../../assests/images/slider/for_slider_1.png";
import sliderImg_2 from "../../assests/images/slider/for_slider_2.png";
import sliderImg_3 from "../../assests/images/slider/for_slider_3.png";
import sliderImg_4 from "../../assests/images/slider/for_slider_4.png";
import sliderImg_5 from "../../assests/images/slider/for_slider_5.png";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SliderSwiper = () => {
  const imgArr = [
    sliderImg_1,
    sliderImg_2,
    sliderImg_3,
    sliderImg_4,
    sliderImg_5,
  ];

  return (
    <div className="slider_parentBlock">
      <div className="slider_childBlock">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={800}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {imgArr.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="photo" />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
          <img src={imgArr[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgArr[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgArr[2]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgArr[3]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgArr[4]} alt="" />
        </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSwiper;
