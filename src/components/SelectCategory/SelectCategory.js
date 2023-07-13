// import React, { useEffect, useState } from "react";
// import styles from "./SelectCategory.css";
// import { takeCategoryOutput } from "../../store/infoWorkSlice";
// import { useDispatch, useSelector } from "react-redux";

// const SelectCategory = ({ setCategory, category }) => {
//   const { infoCategory } = useSelector((state) => state.infoWorkSlice);
//   // console.log(infoCategory, "infoCategory");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(takeCategoryOutput());
//   }, []);
//   console.log(+category);
//   // +category === 1 ? console.log(true) : console.log(false);
//   return (
//     <>
//       <select onChange={(e) => setCategory(e.target.value)}>
//         {infoCategory?.map((category) => (
//           <option value={category.id} key={category.id}>
//             {category.name}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// };

// export default SelectCategory;
