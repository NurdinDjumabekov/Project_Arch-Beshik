import React from "react";
import styles from "./SliderPhoto.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../../assets/images/modal/arrowBtn.svg";

type Photo = {
  image: string;
};

type SliderPhotoProps = {
  photos: Photo[];
};

const NoneBtn = () => {
  return <div style={{ display: "none" }} />;
};

const SliderPhoto: React.FC<SliderPhotoProps> = ({ photos }) => {
  const sliderRef = React.useRef<Slider | null>(null);
  const [count, setCount] = React.useState<number>(0);

  const settingsMini = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const btnSlider = (type: string) => {
    if (sliderRef?.current) {
      type === "next"
        ? sliderRef?.current?.slickNext()
        : sliderRef?.current?.slickPrev();
    }
  };

  const settings = {
    afterChange: (index: number) => {
      setCount(index);
    },
    customPaging: function (i: number) {
      let c = i - 1 + 1;
      const photo = photos[c];
      return (
        <div className={styles.miniSlider}>
          <Slider {...settingsMini}>
            <a className={styles.dotsImgs}>
              {photo && (
                <img
                  src={photo.image}
                  onClick={() => setCount(c)}
                  style={count === i ? { border: "2px solid black" } : {}}
                />
              )}
            </a>
          </Slider>
        </div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NoneBtn />,
    prevArrow: <NoneBtn />,
  };

  return (
    <>
      {photos?.length !== 0 && (
        <div className={styles.mainSlider}>
          <div className={styles.mainSlider__inner}>
            <Slider ref={sliderRef} {...settings}>
              {photos.map((photo, index) => (
                <div key={index}>
                  {photo?.image && (
                    <>
                      <div className={styles.imgBlock}>
                        {photo?.image && (
                          <img src={photo?.image} alt="картинка" />
                        )}
                      </div>
                      <div
                        className={styles.imgBlock__shadow}
                        style={{
                          backgroundImage: `url(${photo?.image})`,
                        }}
                      ></div>
                    </>
                  )}
                </div>
              ))}
            </Slider>
            <div className={styles.parentBtn}>
              <button className="button" onClick={() => btnSlider("prev")}>
                <img src={arrow} style={{ rotate: "180deg" }} alt="<" />
              </button>
              <button className="button" onClick={() => btnSlider("next")}>
                <img src={arrow} alt=">" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderPhoto;
