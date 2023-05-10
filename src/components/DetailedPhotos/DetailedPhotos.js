import React from "react";
import styles from "./DetailedPhotos.module.css";

const DetailedPhotos = ({ date }) => {
  return (
    <div className={styles.block_for_imgsDetailed}>
      <div className={styles.block_for_bigPhoto}>
        <img src={date.image} alt="фотка" />
      </div>
      <div className={styles.block_for_miniPhoto}>
        <div>
          <img src={date.image} alt="фотка" />
        </div>
        <div>
          <img src={date.image} alt="фотка" />
        </div>
        <div>
          <img src={date.image} alt="фотка" />
        </div>
        <div>
          <img src={date.image} alt="фотка" />
        </div>
        <div>
          <img src={date.image} alt="фотка" />
        </div>
        <div>
          <img src={date.image} alt="фотка" />
        </div>
      </div>
    </div>
  );
};

export default DetailedPhotos;

// import React, { useState } from "react";
// import styles from "./DetailedPhotos.module.css";
// import imgsss from "../../assests/images/main/bac-d_2.jpg";

// const DetailedPhotos = () => {
//   const [date, setDate] = useState([
//     { id: 1, photo: imgsss },
//     { id: 2, photo: imgsss },
//     { id: 3, photo: imgsss },
//     { id: 4, photo: imgsss },
//     { id: 5, photo: imgsss },
//     { id: 6, photo: imgsss },
//   ]);
//   const [count, setCount] = useState(0);
//   return (
//     <div className={styles.block_for_imgsDetailed}>
//       <div className={styles.block_for_bigPhoto}>
//         <img src={date[count].photo} alt="фотка" />
//       </div>
//       <ul className={styles.block_for_miniPhoto}>
//         {date.map((img) => (
//           <li key={img.id}>
//             <button>
//               <div>
//                 <img src={img.photo} alt="фотка" />
//               </div>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DetailedPhotos;
