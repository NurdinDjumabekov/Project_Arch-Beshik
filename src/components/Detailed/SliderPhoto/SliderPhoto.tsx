import React, { useEffect, useState } from "react";
import styles from "./SliderPhoto.module.scss";

type Photo = {
  image: string;
};

type SliderPhotoProps = {
  photos: Photo[];
};

const SliderPhoto: React.FC<SliderPhotoProps> = ({ photos }) => {
  const [count, setCount] = useState(0);

  const prevSlider = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  const nextSlider = () => {
    count >= photos?.length - 1
      ? setCount(photos?.length - 1)
      : setCount(count + 1);
  };
  // useEffect(()=>{

  // }, [photos])

  return (
    <div className={styles.mainSlider}>
      <div className={styles.mainSlider__inner}>
        <button onClick={prevSlider}>prev</button>
        {photos.map((photo, index) => {
          if (index === count) {
            return (
              <div key={index} className={styles.imgBlock}>
                {photo?.image ? (
                  <img src={photo.image} alt="" />
                ) : (
                  <p>loading</p>
                )}
              </div>
            );
          }
        })}
        <button onClick={nextSlider}>next</button>
      </div>
    </div>
  );
};

export default SliderPhoto;
