import React, { useState } from 'react';
import styles from './SliderPhoto.module.scss';

type Photo = {
  image: string;
};

type SliderPhotoProps = {
  photos: Photo[]; // Массив объектов типа Photo
};

const SliderPhoto: React.FC<SliderPhotoProps> = ({ photos }) => {
  const [ count, setCount ] = useState(1)
  return (
    <div className={styles.mainSlider}>
      <div className={styles.mainSlider}>
        <button>prev</button>
        {photos.map((photo, index) => {
            if (index === count) {
                return (
                    <div key={index}>
                        <img src={photo.image} alt="" />
                    </div>
                )
            }
        })}
        <button>next</button>
      </div>
    </div>
  );
};

export default SliderPhoto;
