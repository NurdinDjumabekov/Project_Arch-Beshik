// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { changeStateBtn, takeCategoryOutput } from "../../store/infoWorkSlice";
// import { NavLink } from "react-router-dom";
// import styles from "./NavMenuPage.module.css";

// const NavMenuPage = () => {
//   const { stateBtnNav, infoCategory } = useSelector(
//     (state) => state.infoWorkSlice
//   );
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(takeCategoryOutput());
//   }, []);
//   return (
//     stateBtnNav && (
//       <div className={styles.menu_info}>
//         <div className="container">
//           <ul className={styles.main_list}>
//             <li>
//               <a href="">Вход</a>
//             </li>
//             <li>
//               <a href="">Задать вопрос </a>
//             </li>
//             <li>
//               <a href="">Оставить жалобу</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     )
//   );
// };

// export default NavMenuPage;
