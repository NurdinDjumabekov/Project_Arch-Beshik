import React from "react";
import styles from "./SliderPhoto.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Photo = {
  image: string;
};

type SliderPhotoProps = {
  photos: Photo[];
};

const SliderPhoto: React.FC<SliderPhotoProps> = ({ photos }) => {
  const [count, setCount] = React.useState<number>(0);
  // console.log(count);

  const settingsMini = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                  style={count === i ? { border: "2px solid white" } : {}}
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
  };
  return (
    <div className={styles.mainSlider}>
      <div className={styles.mainSlider__inner}>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <>
              {photo?.image && (
                <div
                  key={index}
                  className={styles.imgBlock}
                  style={{
                    backgroundImage: `url(${photo?.image})`,
                    filter: `blur(5px)`,
                  }}
                >
                  {photo?.image ? (
                    <img src={photo?.image} alt="" />
                  ) : (
                    <p>loading</p>
                  )}
                </div>
              )}
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderPhoto;
